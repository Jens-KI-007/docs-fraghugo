#!/usr/bin/env node
// Vorher-/Nachher-Bilder der Doku-Kernseiten (FEINSCHLIFF-SPEZ §3.1/§3.3), ganze Seite, 1440 und 390.
//   node scripts/feinschliff/bilder.mjs [vorher|nachher]
import fs from 'node:fs';
import path from 'node:path';
import { starten, ladePlaywright } from './server.mjs';

export const KERNSEITEN = [
  { name: 'startseite', pfad: '/' },
  { name: 'bereich-datenschutz', pfad: '/datenschutz/uebersicht/' },
  { name: 'artikel-bilder', pfad: '/datenschutz/bestandsaufnahme/' },
  { name: 'artikel-tabelle', pfad: '/lieferkette/sicherheitsprofil/' },
  { name: 'artikel-lang', pfad: '/ki-compliance/schatten-ki-radar/' },
  { name: 'suche', pfad: '/', suche: 'Verarbeitungsverzeichnis' },
];

const art = process.argv[2] || 'vorher';
const AUS = `/Users/jens/files/claude/frag.hugo/platform-feinschliff/docs/feinschliff/${art}/doku`;
fs.mkdirSync(AUS, { recursive: true });
const { chromium } = await ladePlaywright();
const { server, basis } = await starten();
const browser = await chromium.launch();
for (const breite of [1440, 390]) {
  const ctx = await browser.newContext({ viewport: { width: breite, height: breite > 500 ? 900 : 844 }, deviceScaleFactor: 1,
    isMobile: breite <= 430, hasTouch: breite <= 430, locale: 'de-DE', reducedMotion: 'reduce' });
  for (const k of KERNSEITEN) {
    const page = await ctx.newPage();
    await page.goto(basis + k.pfad, { waitUntil: 'networkidle' });
    await page.evaluate(async () => { await document.fonts.ready;
      // Lazy-Bilder laden
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
      window.scrollTo(0, 0); });
    await page.waitForLoadState('networkidle');
    if (k.suche) {
      await page.locator('site-search button[data-open-modal]').first().click();
      await page.locator('dialog[open] input').fill(k.suche);
      await page.waitForTimeout(1200);
    }
    const datei = path.join(AUS, `${k.name}-${breite}.png`);
    await page.screenshot({ path: datei, fullPage: !k.suche });
    console.log(datei);
    await page.close();
  }
  await ctx.close();
}
await browser.close(); server.close();
