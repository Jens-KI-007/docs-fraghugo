#!/usr/bin/env node
// DOM-Probe der Doku (FEINSCHLIFF-SPEZ §3.2): misst im gerenderten DOM aller Seiten aus dist/,
// 1440 und 390 breit. Ändert nichts an der Oberfläche.
//
//   node scripts/feinschliff/probe.mjs                 # alle Seiten, beide Breiten
//   node scripts/feinschliff/probe.mjs --breite 390    # nur eine Breite
//   node scripts/feinschliff/probe.mjs --nur datenschutz/vvt,/   # nur bestimmte Seiten (Teilstring)
//   AUS=<ordner> überschreibt den Ausgabeordner.
//
// Ausgabe: <AUS>/<1440|390>/<seite>.json und <AUS>/summe.md
import fs from 'node:fs';
import path from 'node:path';
import { starten, alleSeiten, seitenName, ladePlaywright } from './server.mjs';

const AUS = process.env.AUS || '/Users/jens/files/claude/frag.hugo/platform-feinschliff/docs/feinschliff/probe/doku';
const args = process.argv.slice(2);
const wert = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const BREITEN = wert('--breite') ? [Number(wert('--breite'))] : [1440, 390];
const NUR = wert('--nur') ? wert('--nur').split(',') : null;
const PARALLEL = Number(wert('--parallel') || 4);

export const ARTEN = {
  schrift: 'Schrift < 12 px',
  kontrast: 'Kontrast zu gering (< 4,5:1 bei Text < 24 px, sonst < 3:1)',
  kontrast_unklar: 'Kontrast nicht messbar (Text über Bild/Verlauf) — Hinweis',
  klickflaeche: 'Klickfläche < 24 × 24 px',
  hauptaktion_handy: 'Handy-Hauptaktion < 44 × 44 px',
  ueberlauf: 'Waagerechter Seitenüberlauf',
  abgeschnitten: 'Abgeschnittener Inhalt',
  ueberlappung: 'Überlappende Elemente',
  bild_ohne_alt: 'Bild ohne alt',
  fokus_ohne_ring: 'Fokus ohne sichtbaren Ring',
  animation_lang: 'Animation/Übergang > 400 ms',
  animation_ohne_rm: 'Animation ohne Reduced-Motion-Weg',
  konsole: 'Konsolenfehler / fehlgeschlagene Anfrage',
};

// ---------- läuft im Browser ----------
function messenImDom({ breite }) {
  const T = {}; const add = (art, e) => (T[art] ||= []).push(e);
  const cv = document.createElement('canvas'); cv.width = cv.height = 1;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  const rgba = (c) => { cx.clearRect(0, 0, 1, 1); cx.fillStyle = '#000'; cx.fillStyle = c; cx.fillRect(0, 0, 1, 1);
    const d = cx.getImageData(0, 0, 1, 1).data; return [d[0], d[1], d[2], d[3] / 255]; };
  const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const mix = (o, u) => [o[0] * o[3] + u[0] * (1 - o[3]), o[1] * o[3] + u[1] * (1 - o[3]), o[2] * o[3] + u[2] * (1 - o[3]), 1];
  const sel = (el) => {
    if (!el || el.nodeType !== 1) return '';
    const teile = [];
    for (let e = el, i = 0; e && e.nodeType === 1 && i < 4; e = e.parentElement, i++) {
      if (e.id) { teile.unshift('#' + CSS.escape(e.id)); break; }
      let t = e.tagName.toLowerCase();
      const kl = [...e.classList].filter((k) => !/^astro-|^sl-[a-z0-9]{6,}$/.test(k)).slice(0, 2);
      if (kl.length) t += '.' + kl.map((k) => CSS.escape(k)).join('.');
      const gl = e.parentElement ? [...e.parentElement.children].filter((c) => c.tagName === e.tagName) : [];
      if (gl.length > 1 && !kl.length) t += `:nth-of-type(${gl.indexOf(e) + 1})`;
      teile.unshift(t);
    }
    return teile.join(' > ');
  };
  const sichtbar = (el) => {
    const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) return false;
    if (r.bottom + window.scrollY < 0 || r.right + window.scrollX < 0) return false; // aus dem Bild geschoben (Sprunglink)
    if (el.checkVisibility && !el.checkVisibility({ contentVisibilityAuto: true, opacityProperty: true, visibilityProperty: true })) return false;
    const s = getComputedStyle(el); if (s.visibility === 'hidden' || s.display === 'none') return false;
    if (el.closest('[hidden], [aria-hidden="true"], dialog:not([open]), .sr-only')) return false;
    if (s.clip && s.clip !== 'auto') return false; if (s.clipPath && /inset\(50%/.test(s.clipPath)) return false;
    return true;
  };
  const text = (el) => (el.innerText || el.getAttribute('aria-label') || el.value || '').trim().replace(/\s+/g, ' ').slice(0, 60);

  // 1) Schrift + Kontrast: Elemente mit eigenem Textknoten
  const hintergrund = (el) => {
    let farbe = [0, 0, 0, 0]; const schichten = [];
    for (let e = el; e; e = e.parentElement) {
      const s = getComputedStyle(e);
      if (s.backgroundImage && s.backgroundImage !== 'none') return null; // Bild/Verlauf → unklar
      const c = rgba(s.backgroundColor); if (c[3] > 0) { schichten.push(c); if (c[3] >= 1) break; }
    }
    const basis = rgba(getComputedStyle(document.documentElement).backgroundColor);
    farbe = basis[3] > 0 ? basis : [255, 255, 255, 1];
    for (let i = schichten.length - 1; i >= 0; i--) farbe = mix(schichten[i], farbe);
    return farbe;
  };
  const gesehen = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (!n.nodeValue.trim()) continue;
    const el = n.parentElement; if (!el || gesehen.has(el)) continue; gesehen.add(el);
    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(el.tagName) || !sichtbar(el)) continue;
    const s = getComputedStyle(el); const px = parseFloat(s.fontSize);
    const t = n.nodeValue.trim().replace(/\s+/g, ' ').slice(0, 60);
    if (px < 12) add('schrift', { selector: sel(el), text: t, wert: px });
    let op = 1; for (let e = el; e; e = e.parentElement) op *= Number(getComputedStyle(e).opacity);
    const fg = rgba(s.color); fg[3] *= op;
    const bg = hintergrund(el);
    if (!bg) { add('kontrast_unklar', { selector: sel(el), text: t }); continue; }
    const f = mix(fg, bg); const L1 = lum(f), L2 = lum(bg);
    const k = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    const grenze = px < 24 ? 4.5 : 3;
    if (k < grenze) add('kontrast', { selector: sel(el), text: t, wert: Math.round(k * 100) / 100, grenze, schrift: px,
      farbe: s.color, hintergrund: `rgb(${bg.slice(0, 3).map(Math.round).join(',')})` });
  }

  // 2) Klickflächen
  const INTERAKTIV = 'a[href], button, input:not([type=hidden]), select, textarea, summary, [role=button], [role=tab], [tabindex]:not([tabindex="-1"])';
  const interaktiv = [...document.querySelectorAll(INTERAKTIV)].filter(sichtbar);
  for (const el of interaktiv) {
    const r = el.getBoundingClientRect();
    // Ausnahme WCAG 2.5.8: Link im Fließtext
    const imText = el.tagName === 'A' && getComputedStyle(el).display === 'inline' &&
      el.closest('p, li, td, th, dd, blockquote, figcaption') && (el.closest('p, li, td, th, dd, blockquote, figcaption').innerText.trim().length > el.innerText.trim().length + 3);
    if (imText) continue;
    const eintrag = { selector: sel(el), text: text(el), wert: `${Math.round(r.width)}×${Math.round(r.height)}` };
    const bw = Math.round(r.width), bh = Math.round(r.height);
    if (bw < 24 || bh < 24) add('klickflaeche', eintrag);
    const haupt = el.closest('header, .header, starlight-menu-button, .pagination-links, site-search, starlight-theme-select, .right-group, .social-icons, mobile-starlight-toc, .sl-skip-link') || el.tagName === 'BUTTON';
    if (breite <= 430 && haupt && (bw < 44 || bh < 44)) add('hauptaktion_handy', eintrag);
  }

  // 3) Überlauf
  const de = document.documentElement;
  if (de.scrollWidth > de.clientWidth + 1) {
    const raus = [...document.body.querySelectorAll('*')].filter((e) => { const r = e.getBoundingClientRect();
      return r.right > de.clientWidth + 1 && r.width > 0 && !e.closest('pre, .expressive-code, table, [style*="overflow"]'); });
    const tiefste = raus.filter((e) => !raus.some((o) => o !== e && e.contains(o))).slice(0, 5);
    add('ueberlauf', { selector: tiefste.map(sel).join(' | ') || 'html', wert: `${de.scrollWidth}px > ${de.clientWidth}px` });
  }

  // 4) Abgeschnitten: Text in Behältern mit overflow hidden/clip, der nicht hineinpasst
  for (const el of document.body.querySelectorAll('*')) {
    if (!el.firstChild || !sichtbar(el)) continue;
    const s = getComputedStyle(el);
    const xClip = ['hidden', 'clip'].includes(s.overflowX), yClip = ['hidden', 'clip'].includes(s.overflowY);
    if (!xClip && !yClip) continue;
    if (!(el.innerText || '').trim()) continue;
    const zuBreit = xClip && el.scrollWidth > el.clientWidth + 2, zuHoch = yClip && el.scrollHeight > el.clientHeight + 2;
    if (zuBreit || zuHoch) add('abgeschnitten', { selector: sel(el), text: text(el),
      wert: `${zuBreit ? `breit ${el.scrollWidth}/${el.clientWidth}` : ''}${zuHoch ? ` hoch ${el.scrollHeight}/${el.clientHeight}` : ''}`.trim(),
      ellipsis: s.textOverflow === 'ellipsis' });
  }

  // 5) Überlappung: interaktive Elemente, Überschriften, Bilder untereinander
  const kandidaten = [...new Set([...interaktiv, ...[...document.querySelectorAll('h1,h2,h3,h4,img,figure,table,pre')].filter(sichtbar)])]
    .filter((e) => getComputedStyle(e).position !== 'fixed' && !e.closest('dialog, header, .sidebar-pane'));
  const rects = kandidaten.map((e) => e.getBoundingClientRect());
  for (let i = 0; i < kandidaten.length; i++) for (let j = i + 1; j < kandidaten.length; j++) {
    const a = kandidaten[i], b = kandidaten[j]; if (a.contains(b) || b.contains(a)) continue;
    const A = rects[i], B = rects[j];
    let w = Math.min(A.right, B.right) - Math.max(A.left, B.left), h = Math.min(A.bottom, B.bottom) - Math.max(A.top, B.top);
    if (w <= 2 || h <= 2) continue;
    // Umbrechender Inline-Link: Zeilen-Rechtecke vergleichen, nicht das umschließende Rechteck (D11, wie App-Probe D09).
    const ra = [...a.getClientRects()], rb = [...b.getClientRects()];
    if (ra.length > 1 || rb.length > 1) {
      let best = 0;
      for (const x of ra) for (const y of rb) {
        const ww = Math.min(x.right, y.right) - Math.max(x.left, y.left), hh = Math.min(x.bottom, y.bottom) - Math.max(x.top, y.top);
        if (ww > 2 && hh > 2 && ww * hh > best) { best = ww * hh; w = ww; h = hh; }
      }
      if (!best) continue;
    }
    if (w > 2 && h > 2) add('ueberlappung', { selector: `${sel(a)}  ⟂  ${sel(b)}`, text: `${text(a)} ⟂ ${text(b)}`, wert: `${Math.round(w)}×${Math.round(h)}` });
  }

  // 6) Bilder ohne alt
  for (const img of document.querySelectorAll('img')) if (!img.hasAttribute('alt'))
    add('bild_ohne_alt', { selector: sel(img), text: img.getAttribute('src') });
  for (const svg of document.querySelectorAll('svg[role=img]')) if (!svg.getAttribute('aria-label') && !svg.querySelector('title'))
    add('bild_ohne_alt', { selector: sel(svg), text: 'svg role=img ohne Namen' });

  // 7) Animationen und Übergänge (Dauer)
  const animiert = [];
  for (const el of document.querySelectorAll('*')) {
    const s = getComputedStyle(el);
    const ms = (v) => Math.max(0, ...v.split(',').map((x) => x.trim().endsWith('ms') ? parseFloat(x) : parseFloat(x) * 1000));
    const anim = s.animationName !== 'none' ? ms(s.animationDuration) : 0;
    const trans = s.transitionProperty !== 'none' ? ms(s.transitionDuration) : 0;
    if (anim > 0 || trans > 0) {
      animiert.push(el);
      if (anim > 400 || trans > 400) add('animation_lang', { selector: sel(el), wert: `${anim ? 'animation ' + anim + 'ms' : ''}${trans ? ' transition ' + trans + 'ms' : ''}`.trim(), name: s.animationName });
    }
  }
  window.__animiert = animiert;
  return T;
}

function nachReducedMotion() {
  const T = []; const ms = (v) => Math.max(0, ...v.split(',').map((x) => x.trim().endsWith('ms') ? parseFloat(x) : parseFloat(x) * 1000));
  const sel = (el) => { const t = []; for (let e = el, i = 0; e && e.nodeType === 1 && i < 4; e = e.parentElement, i++) {
    if (e.id) { t.unshift('#' + e.id); break; } t.unshift(e.tagName.toLowerCase() + (e.classList[0] ? '.' + e.classList[0] : '')); } return t.join(' > '); };
  for (const el of window.__animiert || []) {
    const s = getComputedStyle(el);
    const anim = s.animationName !== 'none' ? ms(s.animationDuration) : 0;
    const trans = s.transitionProperty !== 'none' ? ms(s.transitionDuration) : 0;
    // Farb-/Deckkraft-Übergänge sind auch bei reduzierter Bewegung erlaubt
    const nurFarbe = s.transitionProperty.split(',').every((p) => /color|opacity|background|border|outline|fill|stroke|box-shadow|text-decoration/.test(p.trim()));
    if (anim > 10 || (trans > 10 && !nurFarbe)) T.push({ selector: sel(el), wert: `${anim ? 'animation ' + anim + 'ms ' : ''}${trans ? 'transition ' + trans + 'ms (' + s.transitionProperty.slice(0, 50) + ')' : ''}`.trim() });
  }
  return T;
}

const FOKUS_STIL = (el) => {
  if (!el || el === document.body) return null;
  const s = getComputedStyle(el);
  return { o: `${s.outlineStyle} ${s.outlineWidth} ${s.outlineColor}`, b: s.boxShadow, bg: s.backgroundColor, bc: s.borderColor, td: s.textDecorationLine, c: s.color };
};

async function fokusPruefen(page, max = 45) {
  const treffer = []; const geprueft = new Set();
  await page.evaluate(() => { document.activeElement?.blur?.(); window.scrollTo(0, 0); });
  for (let i = 0; i < max; i++) {
    await page.keyboard.press('Tab');
    const info = await page.evaluate((fs) => {
      const FOKUS = eval(fs); const el = document.activeElement; if (!el || el === document.body) return null;
      const r = el.getBoundingClientRect(); if (r.width < 1 || r.height < 1) return { leer: true };
      el.setAttribute('data-fokus-probe', '1');
      const sel = []; for (let e = el, j = 0; e && e.nodeType === 1 && j < 4; e = e.parentElement, j++) {
        if (e.id) { sel.unshift('#' + e.id); break; } sel.unshift(e.tagName.toLowerCase() + (e.classList[0] ? '.' + e.classList[0] : '')); }
      const fokus = FOKUS(el);
      const o = fokus.o.split(' ');
      const ring = (o[0] !== 'none' && parseFloat(o[1]) > 0) || fokus.b !== 'none';
      return { sel: sel.join(' > '), text: (el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 50), fokus, ring };
    }, `(${FOKUS_STIL.toString()})`);
    if (!info || info.leer) continue;
    if (geprueft.has(info.sel)) { if (geprueft.size > 5) break; continue; }
    geprueft.add(info.sel);
    if (info.ring) { await page.evaluate(() => document.querySelector('[data-fokus-probe]')?.removeAttribute('data-fokus-probe')); continue; }
    // Kein Ring: unterscheidet sich der Fokus-Zustand sonst sichtbar vom Ruhezustand?
    const ohne = await page.evaluate((fs) => { const FOKUS = eval(fs); const el = document.querySelector('[data-fokus-probe]');
      el.blur(); const s = FOKUS(el); el.removeAttribute('data-fokus-probe'); el.focus(); return s; }, `(${FOKUS_STIL.toString()})`);
    const anders = ['bg', 'bc', 'td', 'c'].filter((k) => ohne && ohne[k] !== info.fokus[k]);
    if (!anders.length) treffer.push({ selector: info.sel, text: info.text, wert: info.fokus.o });
  }
  return treffer;
}

async function seitePruefen(ctx, basis, pfad, breite) {
  const page = await ctx.newPage();
  const konsole = [];
  page.on('console', (m) => { if (m.type() === 'error') konsole.push({ selector: 'console', text: m.text().slice(0, 200) }); });
  page.on('pageerror', (e) => konsole.push({ selector: 'pageerror', text: String(e.message).slice(0, 200) }));
  page.on('response', (r) => { if (r.status() >= 400 && !r.url().endsWith('/404.html') && !(pfad === '/404.html' && r.url().endsWith(pfad)))
    konsole.push({ selector: 'netz', text: `${r.status()} ${r.url().replace(basis, '')}` }); });
  page.on('requestfailed', (r) => { if (!r.url().startsWith(basis)) return; konsole.push({ selector: 'netz', text: `fehlgeschlagen ${r.url().replace(basis, '')}` }); });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(basis + pfad, { waitUntil: 'networkidle', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  const T = await page.evaluate(messenImDom, { breite });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(50);
  const rm = await page.evaluate(nachReducedMotion);
  if (rm.length) T.animation_ohne_rm = rm;
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const fokus = await fokusPruefen(page);
  if (fokus.length) T.fokus_ohne_ring = fokus;
  if (konsole.length) T.konsole = konsole;
  await page.close();
  const zaehler = Object.fromEntries(Object.entries(T).map(([k, v]) => [k, v.length]));
  return { seite: seitenName(pfad), pfad, breite, gemessen: new Date().toISOString(), zaehler, treffer: T };
}

async function main() {
  const { chromium } = await ladePlaywright();
  const { server, basis } = await starten();
  let seiten = alleSeiten();
  if (NUR) seiten = seiten.filter((s) => NUR.some((n) => n === '/' ? s === '/' : s.includes(n)));
  const browser = await chromium.launch();
  const alle = [];
  for (const breite of BREITEN) {
    const ctx = await browser.newContext({ viewport: { width: breite, height: breite > 500 ? 900 : 844 },
      deviceScaleFactor: 1, isMobile: breite <= 430, hasTouch: breite <= 430, locale: 'de-DE' });
    fs.mkdirSync(path.join(AUS, String(breite)), { recursive: true });
    const schlange = [...seiten];
    await Promise.all(Array.from({ length: PARALLEL }, async () => {
      while (schlange.length) {
        const p = schlange.shift();
        try {
          const erg = await seitePruefen(ctx, basis, p, breite);
          fs.writeFileSync(path.join(AUS, String(breite), erg.seite + '.json'), JSON.stringify(erg, null, 2));
          alle.push(erg);
          process.stdout.write(`${breite} ${p} ${JSON.stringify(erg.zaehler)}\n`);
        } catch (e) { console.error(`FEHLER ${breite} ${p}: ${e.message}`); alle.push({ seite: seitenName(p), pfad: p, breite, fehler: e.message, zaehler: {}, treffer: {} }); }
      }
    }));
    await ctx.close();
  }
  await browser.close(); server.close();
  if (!NUR) summeSchreiben(); else console.log('Teil-Lauf: summe.md nicht neu geschrieben (ohne --nur laufen lassen oder summe.mjs).');
}

export function summeSchreiben() {
  const breiten = fs.readdirSync(AUS).filter((d) => /^\d+$/.test(d)).sort((a, b) => b - a);
  const z = [`# Probe Doku (docs.fraghugo.de) — Summe`, '', `Stand: ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC · Skript \`docs-website/scripts/feinschliff/probe.mjs\` · Quelle \`dist/\` (lokal bedient)`, ''];
  const daten = {};
  for (const b of breiten) daten[b] = fs.readdirSync(path.join(AUS, b)).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(fs.readFileSync(path.join(AUS, b, f))));
  z.push('| Art | ' + breiten.map((b) => `${b}: Treffer`).join(' | ') + ' | ' + breiten.map((b) => `${b}: Seiten`).join(' | ') + ' |');
  z.push('|---|' + breiten.map(() => '---:').join('|') + '|' + breiten.map(() => '---:').join('|') + '|');
  for (const [art, name] of Object.entries(ARTEN)) {
    const t = breiten.map((b) => daten[b].reduce((s, d) => s + (d.zaehler[art] || 0), 0));
    const s = breiten.map((b) => daten[b].filter((d) => d.zaehler[art]).length);
    z.push(`| ${name} | ${t.join(' | ')} | ${s.join(' | ')} |`);
  }
  z.push('', `Seiten: ${breiten.map((b) => `${b} px = ${daten[b].length}${daten[b].some((d) => d.fehler) ? ` (davon ${daten[b].filter((d) => d.fehler).length} mit Fehler)` : ''}`).join(' · ')}`, '');
  z.push('## Häufigste Stellen je Art', '', 'Gleicher Selektor über Seiten zusammengefasst (Zahl = Treffer gesamt, Seiten = betroffene Seiten).', '');
  for (const [art, name] of Object.entries(ARTEN)) {
    for (const b of breiten) {
      const m = new Map();
      for (const d of daten[b]) for (const e of d.treffer[art] || []) {
        const k = e.selector; const x = m.get(k) || { n: 0, seiten: new Set(), bsp: e };
        x.n++; x.seiten.add(d.seite); m.set(k, x);
      }
      if (!m.size) continue;
      z.push(`### ${name} — ${b} px`, '', '| Selektor | Treffer | Seiten | Beispiel |', '|---|---:|---:|---|');
      for (const [k, x] of [...m].sort((a, b2) => b2[1].n - a[1].n).slice(0, 12))
        z.push(`| \`${k.replace(/\|/g, '\\|').slice(0, 140)}\` | ${x.n} | ${x.seiten.size} | ${[x.bsp.text, x.bsp.wert, x.bsp.grenze ? `Grenze ${x.bsp.grenze}` : ''].filter(Boolean).join(' · ').replace(/\|/g, '\\|').slice(0, 110)} (${[...x.seiten][0]}) |`);
      z.push('');
    }
  }
  fs.writeFileSync(path.join(AUS, 'summe.md'), z.join('\n'));
  console.log('summe.md geschrieben');
}

if (process.argv[1] && process.argv[1].endsWith('probe.mjs')) await main();
