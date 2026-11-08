#!/usr/bin/env node
// Erzeugt public/llms.txt für docs.fraghugo.de: Inhaltsverzeichnis nach der Seitenleiste in astro.config.mjs,
// je Seite die Beschreibung aus dem Frontmatter (ein Satz), dazu der Hinweis auf den MCP-Server.
// Aufruf: node scripts/llms-txt.mjs   (GOAL-KI-ASSISTENT KA36, Spez §15)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const wurzel = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASIS = 'https://docs.fraghugo.de';
const konfig = readFileSync(join(wurzel, 'astro.config.mjs'), 'utf8');

// Gruppen und Einträge der Seitenleiste in Reihenfolge lesen.
const gruppen = [];
const zeilen = konfig.split('\n');
let aktuelle = null;
for (const z of zeilen) {
  const g = z.match(/^\t{4}\{\s*$/);
  const label = z.match(/^\t{5}label:\s*'([^']+)'/);
  const eintrag = z.match(/\{\s*label:\s*'([^']+)',\s*slug:\s*'([^']*)'\s*\}/);
  if (label) { aktuelle = { titel: label[1], seiten: [] }; gruppen.push(aktuelle); continue; }
  if (eintrag && aktuelle) aktuelle.seiten.push({ label: eintrag[1], slug: eintrag[2] });
  if (g) aktuelle = null;
}

function beschreibung(slug) {
  const basis = join(wurzel, 'src/content/docs', slug || 'index');
  for (const datei of [`${basis}.md`, `${basis}.mdx`, join(basis, 'index.md'), join(basis, 'index.mdx')]) {
    if (!existsSync(datei)) continue;
    const kopf = readFileSync(datei, 'utf8').match(/^---\n([\s\S]*?)\n---/);
    const d = kopf?.[1].match(/^description:\s*(.+)$/m)?.[1]?.trim().replace(/^['"]|['"]$/g, '');
    if (d) return erster(d);
  }
  return '';
}

// Nur der erste Satz — llms.txt soll knapp bleiben.
// Abkürzungen und Zahlen („Art. 28“, „z. B.“, „§ 26 Abs. 1“) beenden keinen Satz.
const ABKUERZUNG = /(?:\b(?:Art|Abs|Nr|bzw|ggf|ca|inkl|vgl|usw|etc|z|B|d|h|u|a|S|St|Mio|Mrd)|\d)\.$/;
function erster(text) {
  const re = /[.!?](?=\s+[A-ZÄÖÜ„]|$)/g;
  let m;
  while ((m = re.exec(text))) {
    const bis = text.slice(0, m.index + 1);
    if (m[0] === '.' && ABKUERZUNG.test(bis)) continue;
    return bis.replace(/\s+—\s+/g, ': ');
  }
  return text.replace(/\s+—\s+/g, ': ');
}

const teile = [
  '# frag.hugo Docs',
  '',
  '> Hilfe-Center der frag.hugo Plattform (app.fraghugo.de): Anleitungen für Datenschutz, Vorfälle, Website-Sicherheit,',
  '> Lieferkette, NIS2, Cyber Resilience Act, Arbeitsschutz, KI-Compliance und Schulungen. Für Kundinnen und Kunden von',
  '> frag.hugo, auf Deutsch.',
  '',
  'frag.hugo hat einen MCP-Server für KI-Assistenten: `https://mcp.fraghugo.de/mcp`. Ohne Konto beantwortet er Fragen zu',
  'DSGVO-Bußgeldern, Fristen, Aufsichtsbehörden und Software. Mit einem frag.hugo-Konto trägt der Assistent (Claude,',
  'ChatGPT; Microsoft 365 Copilot ist in Prüfung) Verarbeitungsverzeichnis, Dienstleister, TOMs, Mitarbeitende und Schulungen ein; der',
  'Datenschutzbeauftragte prüft. Anleitung: ' + `${BASIS}/ki-assistent/` + '. Produktseite: https://www.fraghugo.de/ki-assistent/',
  '',
];
for (const g of gruppen) {
  if (!g.seiten.length) continue;
  teile.push(`## ${g.titel}`, '');
  for (const s of g.seiten) {
    const url = `${BASIS}/${s.slug ? s.slug.replace(/\/?$/, '/') : ''}`;
    const d = beschreibung(s.slug);
    teile.push(`- [${s.label}](${url})${d ? `: ${d}` : ''}`);
  }
  teile.push('');
}
writeFileSync(join(wurzel, 'public/llms.txt'), teile.join('\n'));
console.log(`llms.txt: ${gruppen.length} Gruppen, ${gruppen.reduce((n, g) => n + g.seiten.length, 0)} Seiten`);
