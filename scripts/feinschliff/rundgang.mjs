#!/usr/bin/env node
// Rundgang „alles anschauen“ der Doku (FEINSCHLIFF-SPEZ §10, D13 im Zweig / D15 live): jede Seite aus dist,
// Handy 390 × 844 und Desktop 1440 × 900, ganze Seite als JPEG, dazu je Bild eine Messzeile (waagerechter Überlauf,
// Konsolenfehler, fehlgeschlagene Anfragen). Gruppen zu höchstens 80 Bildern (40 Seiten × 2) für je einen Prüfer.
//   node scripts/feinschliff/rundgang.mjs zweig            gegen dist/ (lokaler Server)
//   node scripts/feinschliff/rundgang.mjs live             gegen https://docs.fraghugo.de
import fs from 'node:fs';
import path from 'node:path';
import { starten, ladePlaywright, alleSeiten } from './server.mjs';

const art = process.argv[2] === 'live' ? 'live' : 'zweig';
const AUS = `/Users/jens/files/claude/frag.hugo/platform-feinschliff/docs/feinschliff/rundgang/${art}/doku`;
const JE_GRUPPE = 40;
fs.mkdirSync(AUS, { recursive: true });

const seiten = alleSeiten().filter((p) => !p.endsWith('404.html')).sort();
const { chromium } = await ladePlaywright();
const lokal = art === 'zweig' ? await starten() : null;
const basis = lokal ? lokal.basis : 'https://docs.fraghugo.de';
const browser = await chromium.launch();
const messung = [];

const name = (p) => (p === '/' ? 'startseite' : p.replace(/^\/|\/$/g, '').replace(/[^a-z0-9äöüß-]+/gi, '_'));

for (const breite of [390, 1440]) {
  const ctx = await browser.newContext({ viewport: { width: breite, height: breite > 500 ? 900 : 844 }, deviceScaleFactor: 1,
    isMobile: breite <= 430, hasTouch: breite <= 430, locale: 'de-DE', reducedMotion: 'reduce' });
  for (const [i, p] of seiten.entries()) {
    const gruppe = `doku-${String(Math.floor(i / JE_GRUPPE) + 1).padStart(2, '0')}`;
    const page = await ctx.newPage();
    const konsole = [];
    page.on('console', (m) => { if (m.type() === 'error') konsole.push(m.text().slice(0, 160)); });
    page.on('pageerror', (e) => konsole.push(String(e).slice(0, 160)));
    page.on('requestfailed', (r) => konsole.push(`Anfrage fehlgeschlagen: ${r.url().replace(basis, '')}`));
    await page.goto(basis + p, { waitUntil: 'networkidle' });
    await page.evaluate(async () => { await document.fonts.ready;
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 30)); }
      window.scrollTo(0, 0); });
    await page.waitForLoadState('networkidle');
    const ueberlauf = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const ordner = path.join(AUS, gruppe);
    fs.mkdirSync(ordner, { recursive: true });
    const datei = path.join(ordner, `${name(p)}-${breite}.jpg`);
    await page.screenshot({ path: datei, fullPage: true, type: 'jpeg', quality: 70 });
    messung.push({ gruppe, pfad: p, breite, bild: path.relative(AUS, datei), ueberlauf, konsole });
    await page.close();
  }
  await ctx.close();
}
await browser.close();
lokal?.server.close();
fs.writeFileSync(path.join(AUS, 'messung.json'), JSON.stringify(messung, null, 1));
const auffaellig = messung.filter((m) => m.ueberlauf > 0 || m.konsole.length);
console.log(`${messung.length} Bilder, ${new Set(messung.map((m) => m.gruppe)).size} Gruppen, auffällig: ${auffaellig.length}`);
for (const m of auffaellig) console.log(`  ${m.breite} ${m.pfad} überlauf=${m.ueberlauf} konsole=${m.konsole.join(' | ')}`);
