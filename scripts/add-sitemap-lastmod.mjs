/**
 * Post-Build: liest dist/sitemap-0.xml und reichert <lastmod>-Tags an.
 *
 * lastmod = git-Commit-Zeitpunkt der Source-MD/MDX-Datei (Fallback: file-mtime,
 * letzter Fallback: Build-Zeit).
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const sitemapFile = path.join(root, 'dist', 'sitemap-0.xml');
const contentDir = path.join(root, 'src', 'content', 'docs');
const buildTime = new Date().toISOString();

function gitMtime(filePath) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore'],
      cwd: root,
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

async function fileMtime(absPath) {
  try {
    const stat = await fs.stat(absPath);
    return stat.mtime.toISOString();
  } catch {
    return null;
  }
}

async function findSourceFile(urlPath) {
  // urlPath: e.g. "/faq/faq-preise/" or "/"
  const cleaned = urlPath.replace(/^\/|\/$/g, ''); // → "faq/faq-preise" or ""
  const candidates = cleaned === ''
    ? ['index.md', 'index.mdx']
    : [`${cleaned}.md`, `${cleaned}.mdx`, `${cleaned}/index.md`, `${cleaned}/index.mdx`];
  for (const c of candidates) {
    const full = path.join(contentDir, c);
    try {
      await fs.access(full);
      return full;
    } catch {}
  }
  return null;
}

async function getLastmod(loc) {
  try {
    const url = new URL(loc);
    const source = await findSourceFile(url.pathname);
    if (source) {
      return gitMtime(source) || (await fileMtime(source)) || buildTime;
    }
  } catch {}
  return buildTime;
}

async function main() {
  let xml = await fs.readFile(sitemapFile, 'utf-8');
  const urlMatches = [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>(?:\s*<lastmod>[^<]+<\/lastmod>)?\s*<\/url>/g)];

  let processed = 0;
  let withGit = 0;
  for (const m of urlMatches) {
    const loc = m[1];
    const lastmod = await getLastmod(loc);
    if (lastmod !== buildTime) withGit++;
    const newBlock = `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
    xml = xml.replace(m[0], newBlock);
    processed++;
  }

  await fs.writeFile(sitemapFile, xml);
  console.log(`[sitemap-lastmod] ${processed} URLs verarbeitet, ${withGit} mit git/mtime, ${processed - withGit} mit Build-Zeit-Fallback`);
}

main().catch(e => {
  console.error('[sitemap-lastmod] failed:', e);
  process.exit(1);
});
