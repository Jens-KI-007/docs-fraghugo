#!/usr/bin/env node
// gleich.mjs — Gleichheits-Nachweis der Doku (FEINSCHLIFF-SPEZ §8, wie §7 A der Website).
//
// Vergleicht zwei gebaute dist-Ordner Seite für Seite auf alles, was ein
// Suchmaschinen-Robot lesen kann. Erlaubt sind nur CSS-Werte und reine
// Klassen-Änderungen — deshalb werden class-, style- und data-astro-*-Attribute
// sowie Leerraum ignoriert, alles andere muss gleich sein.
//
// Aufruf:
//   node scripts/feinschliff/gleich.mjs <dist-ohne> <dist-mit> [--json <datei>] [--alle] [--voll]
//
// Sichtbarer Text = Text im <body> ohne Links und Überschriften (die prüfen
// eigene Arten mit Ankertext bzw. Text) — jede Änderung zählt genau einmal.
//
// Ausgang: 0 = keine Abweichung, 1 = Abweichung, 2 = Aufruffehler.
// Ohne neue Abhängigkeit: parse5 aus dem Doku-Repo (eigene node_modules oder
// die des Haupt-Arbeitsbaums ../docs-website).

import { createRequire } from 'node:module';
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, dirname, basename, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const hier = dirname(fileURLToPath(import.meta.url));
const parse5 = ladeParse5();

function ladeParse5() {
  const kandidaten = [
    join(hier, '..', '..', 'package.json'),
    join(hier, '..', '..', '..', 'docs-website', 'package.json'),
    join(process.cwd(), 'package.json'),
  ];
  for (const k of kandidaten) {
    try { return createRequire(k)('parse5'); } catch { /* nächster */ }
  }
  console.error('parse5 nicht gefunden (weder hier noch in ../docs-website/node_modules).');
  process.exit(2);
}

// ---------- Aufruf ----------
const args = process.argv.slice(2);
const pos = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--json');
const jsonZiel = args.includes('--json') ? args[args.indexOf('--json') + 1] : null;
const alle = args.includes('--alle');
const voll = args.includes('--voll'); // auch byte-gleiche Seiten zerlegen (Selbsttest des Parsers)
if (pos.length !== 2) {
  console.error('Aufruf: node seo-gleich.mjs <dist-ohne> <dist-mit> [--json <datei>] [--alle]');
  process.exit(2);
}
const [A, B] = pos.map((p) => resolve(p));
for (const d of [A, B]) if (!existsSync(d) || !statSync(d).isDirectory()) {
  console.error(`Kein Ordner: ${d}`); process.exit(2);
}

// ---------- Dateien ----------
function alleDateien(wurzel) {
  const aus = [];
  const geh = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) geh(p);
      else if (e.isFile()) aus.push(relative(wurzel, p));
    }
  };
  geh(wurzel);
  return aus.sort();
}

const BILD = /\.(png|jpe?g|webp|avif|gif|svg|ico|bmp|tiff?)$/i;
const SCHRIFT = /\.(woff2?|ttf|otf|eot)$/i;
function dateiArt(rel) {
  const n = basename(rel);
  if (/^sitemap.*\.xml$/i.test(n)) return 'datei-sitemap';
  if (n === 'robots.txt') return 'datei-robots';
  if (/^llms.*\.txt$/i.test(n)) return 'datei-llms';
  if (n === '_redirects') return 'datei-redirects';
  if (n === '_headers') return 'datei-headers';
  if (SCHRIFT.test(n)) return 'datei-schrift';
  if (BILD.test(n)) return 'datei-bild';
  return null;
}

const abweichungen = [];
const melde = (art, ort, detail) => abweichungen.push({ art, ort, detail });

const hash = (p) => createHash('sha256').update(readFileSync(p)).digest('hex');
const listeA = alleDateien(A);
const listeB = alleDateien(B);
const setA = new Set(listeA);
const setB = new Set(listeB);

let geprüfteDateien = 0;
for (const rel of new Set([...listeA, ...listeB])) {
  const art = dateiArt(rel);
  if (!art) continue;
  geprüfteDateien++;
  if (!setA.has(rel)) { melde(art, rel, 'nur in <mit> vorhanden'); continue; }
  if (!setB.has(rel)) { melde(art, rel, 'fehlt in <mit>'); continue; }
  const sa = statSync(join(A, rel)).size, sb = statSync(join(B, rel)).size;
  if (sa !== sb || hash(join(A, rel)) !== hash(join(B, rel))) {
    melde(art, rel, `Inhalt verschieden (${sa} → ${sb} Bytes)`);
  }
}

// ---------- HTML ----------
const ws = (s) => (s ?? '').replace(/\s+/g, ' ').trim();
const attr = (el, name) => {
  const a = el.attrs?.find((x) => x.name === name);
  return a ? a.value : null;
};
const UNSICHTBAR = new Set(['script', 'style', 'noscript', 'template']);
const LANDMARKEN = new Set(['header', 'nav', 'main', 'article', 'aside', 'footer']);

// ohne: Elemente, deren Text eine eigene Art schon prüft (Links, Überschriften) —
// so zählt eine Änderung genau einmal.
const EIGENE_ART = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
function textVon(node, ohne = null) {
  const teile = [];
  const geh = (n) => {
    if (n.nodeName === '#text') { teile.push(n.value); return; }
    if (UNSICHTBAR.has(n.tagName)) return;
    if (ohne && ohne.has(n.tagName)) { teile.push(' '); return; }
    const kinder = n.tagName === 'template' ? n.content?.childNodes : n.childNodes;
    for (const k of kinder ?? []) geh(k);
  };
  geh(node);
  return ws(teile.join(' '));
}

function auszug(html) {
  const doc = parse5.parse(html);
  const r = {
    title: [], description: [], canonical: [], robots: [], hreflang: [], ogTwitter: [],
    jsonld: [], schriftVorladen: [], ueberschriften: [], links: [], bilder: [], landmarken: [],
    elementfolge: [], text: '',
  };
  let body = null;
  let imHead = false;
  const geh = (n, inHead) => {
    const t = n.tagName;
    if (t === 'body') body = n;
    if (t) {
      const kopf = inHead || t === 'head';
      if (t === 'title' && kopf) r.title.push(textVon(n));
      if (t === 'meta') {
        const name = (attr(n, 'name') || '').toLowerCase();
        const prop = (attr(n, 'property') || '').toLowerCase();
        const inhalt = ws(attr(n, 'content'));
        if (name === 'description') r.description.push(inhalt);
        if (name === 'robots' || name === 'googlebot') r.robots.push(`${name}=${inhalt}`);
        if (prop.startsWith('og:') || name.startsWith('og:') || name.startsWith('twitter:') || prop.startsWith('twitter:') || prop.startsWith('article:')) {
          r.ogTwitter.push(`${prop || name}=${inhalt}`);
        }
      }
      if (t === 'link') {
        const rel = (attr(n, 'rel') || '').toLowerCase();
        if (rel.split(/\s+/).includes('canonical')) r.canonical.push(attr(n, 'href'));
        if (rel.includes('alternate') && attr(n, 'hreflang')) r.hreflang.push(`${attr(n, 'hreflang')}=${attr(n, 'href')}`);
        if (rel.includes('preload') && (attr(n, 'as') === 'font' || SCHRIFT.test(attr(n, 'href') || ''))) {
          r.schriftVorladen.push(`${attr(n, 'href')} type=${attr(n, 'type')} crossorigin=${attr(n, 'crossorigin')}`);
        }
      }
      if (t === 'script' && (attr(n, 'type') || '').toLowerCase() === 'application/ld+json') {
        const roh = n.childNodes.map((c) => c.value || '').join('');
        let norm;
        try { norm = JSON.stringify(JSON.parse(roh)); } catch { norm = ws(roh); }
        r.jsonld.push(norm);
      }
      if (/^h[1-6]$/.test(t)) r.ueberschriften.push(`${t}: ${textVon(n)}`);
      if (t === 'a' && attr(n, 'href') !== null) {
        r.links.push(`${attr(n, 'href')} | ${textVon(n) || '(ohne Text: ' + ws(attr(n, 'aria-label') || '') + ')'} | rel=${ws(attr(n, 'rel') || '')} | target=${attr(n, 'target') || ''}`);
      }
      if (t === 'img') {
        r.bilder.push(['src', 'srcset', 'alt', 'width', 'height', 'loading'].map((k) => `${k}=${attr(n, k) ?? '∅'}`).join(' '));
      }
      if (LANDMARKEN.has(t)) r.landmarken.push(t);
    }
    if (UNSICHTBAR.has(t) && t !== 'template') return;
    const kinder = t === 'template' ? n.content?.childNodes : n.childNodes;
    for (const k of kinder ?? []) geh(k, inHead || t === 'head');
  };
  geh(doc, false);
  if (body) {
    const folge = (n) => {
      if (!n.tagName) return;
      r.elementfolge.push(n.tagName);
      if (UNSICHTBAR.has(n.tagName) && n.tagName !== 'template') return;
      for (const k of n.childNodes ?? []) folge(k);
    };
    for (const k of body.childNodes) folge(k);
    r.text = textVon(body, EIGENE_ART);
  }
  return r;
}

const ARTEN_LISTE = {
  title: 'seite-title', description: 'seite-description', canonical: 'seite-canonical',
  robots: 'seite-robots', hreflang: 'seite-hreflang', ogTwitter: 'seite-og-twitter',
  jsonld: 'seite-jsonld', schriftVorladen: 'seite-schrift-vorladen', ueberschriften: 'seite-ueberschriften',
  links: 'seite-links', bilder: 'seite-bilder', landmarken: 'seite-landmarken', elementfolge: 'seite-elementfolge',
};

function vergleicheListe(art, seite, la, lb) {
  if (la.length === lb.length && la.every((x, i) => x === lb[i])) return;
  let i = 0;
  while (i < la.length && i < lb.length && la[i] === lb[i]) i++;
  melde(art, seite, `${la.length} → ${lb.length} Einträge; erste Abweichung an Stelle ${i + 1}: «${kurz(la[i])}» → «${kurz(lb[i])}»`);
}
const kurz = (s, n = 160) => (s === undefined ? '∅' : s.length > n ? s.slice(0, n) + '…' : s);

function vergleicheText(seite, ta, tb) {
  if (ta === tb) return;
  let i = 0;
  while (i < ta.length && i < tb.length && ta[i] === tb[i]) i++;
  const von = Math.max(0, i - 40);
  melde('seite-text', seite, `ab Zeichen ${i}: «${ta.slice(von, i + 80)}» → «${tb.slice(von, i + 80)}»`);
}

const htmlA = listeA.filter((f) => f.endsWith('.html'));
const htmlB = listeB.filter((f) => f.endsWith('.html'));
let geprüfteSeiten = 0;
for (const rel of new Set([...htmlA, ...htmlB])) {
  if (!setA.has(rel)) { melde('seite-fehlt', rel, 'nur in <mit> vorhanden'); continue; }
  if (!setB.has(rel)) { melde('seite-fehlt', rel, 'fehlt in <mit>'); continue; }
  geprüfteSeiten++;
  const ha = readFileSync(join(A, rel), 'utf8');
  const hb = readFileSync(join(B, rel), 'utf8');
  if (ha === hb && !voll) continue;
  const ea = auszug(ha), eb = auszug(hb);
  for (const [feld, art] of Object.entries(ARTEN_LISTE)) vergleicheListe(art, rel, ea[feld], eb[feld]);
  vergleicheText(rel, ea.text, eb.text);
}

// ---------- Ausgabe ----------
const jeArt = {};
for (const a of abweichungen) jeArt[a.art] = (jeArt[a.art] || 0) + 1;

console.log(`seo-gleich: ${geprüfteSeiten} Seiten und ${geprüfteDateien} geschützte Dateien verglichen`);
console.log(`  ohne: ${A}\n  mit:  ${B}`);
console.log(`Abweichungen gesamt: ${abweichungen.length}`);
for (const [art, n] of Object.entries(jeArt).sort()) console.log(`  ${art}: ${n}`);
const zeigen = alle ? abweichungen : abweichungen.slice(0, 200);
for (const a of zeigen) console.log(`- [${a.art}] ${a.ort}: ${a.detail}`);
if (zeigen.length < abweichungen.length) console.log(`… ${abweichungen.length - zeigen.length} weitere (--alle zeigt alle, --json schreibt alle)`);
if (jsonZiel) writeFileSync(jsonZiel, JSON.stringify({ ohne: A, mit: B, seiten: geprüfteSeiten, dateien: geprüfteDateien, jeArt, abweichungen }, null, 2));
process.exit(abweichungen.length ? 1 : 0);
