// Kleiner statischer Server für dist/ (nur lokal, für Probe, Bilder und Detektor).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../dist');

const TYPEN = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.ico': 'image/x-icon', '.json': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff',
  '.xml': 'application/xml', '.txt': 'text/plain', '.wasm': 'application/wasm', '.pf_meta': 'application/octet-stream',
};

export function starten(port = 0) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      let datei = path.join(DIST, p);
      if (!datei.startsWith(DIST)) { res.writeHead(403); return res.end(); }
      if (fs.existsSync(datei) && fs.statSync(datei).isDirectory()) datei = path.join(datei, 'index.html');
      if (!fs.existsSync(datei) && fs.existsSync(datei + '.html')) datei += '.html';
      if (!fs.existsSync(datei)) {
        res.writeHead(404, { 'content-type': TYPEN['.html'] });
        return res.end(fs.readFileSync(path.join(DIST, '404.html')));
      }
      res.writeHead(200, { 'content-type': TYPEN[path.extname(datei)] || 'application/octet-stream' });
      fs.createReadStream(datei).pipe(res);
    });
    server.listen(port, '127.0.0.1', () => resolve({ server, basis: `http://127.0.0.1:${server.address().port}` }));
  });
}

/** Alle Seiten aus dist als Pfade ("/", "/datenschutz/vvt/", "/404.html"). */
export function alleSeiten() {
  const aus = [];
  (function lauf(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const voll = path.join(dir, e.name);
      if (e.isDirectory()) { if (!['_astro', 'pagefind', 'fonts', 'screenshots'].includes(e.name)) lauf(voll); continue; }
      if (!e.name.endsWith('.html')) continue;
      const rel = '/' + path.relative(DIST, voll).split(path.sep).join('/');
      aus.push(rel.endsWith('/index.html') || rel === '/index.html' ? rel.replace(/index\.html$/, '') : rel);
    }
  })(DIST);
  return aus.sort();
}

export function seitenName(p) {
  if (p === '/') return 'startseite';
  return p.replace(/^\/|\/$/g, '').replace(/\.html$/, '').replace(/\//g, '--');
}

export async function ladePlaywright() {
  try { return await import('playwright'); } catch {}
  return await import('/Users/jens/files/claude/frag.hugo/platform/e2e/node_modules/playwright/index.mjs');
}

// Direktaufruf: Server offen halten (für `impeccable detect <url>`).
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { basis } = await starten(Number(process.argv[2] || 4321));
  console.log(`Doku-dist läuft auf ${basis}`);
}
