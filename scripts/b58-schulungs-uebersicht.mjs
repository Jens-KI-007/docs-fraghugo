// B58 (#168 D15): Bild der Seite „Schulungs-Übersicht (Fortschritt)“ neu — Audit-Sicht /dsb/learn/dashboard
// (Abdeckung, Mitarbeiterliste) statt der Mitarbeiter-Startseite. Live-App, nur Testmandant P16 („Abnahme Voll“), nur ansehen.
//   cd ../platform/e2e && node ../../docs-website/scripts/b58-schulungs-uebersicht.mjs <ausgabeordner>
import { chromium } from '../../platform/e2e/node_modules/playwright/index.mjs';
import { promises as fs } from 'node:fs';
const AUS = process.argv[2] || '/tmp/b58';
const b = await chromium.launch();
const ctx = await b.newContext({ storageState: `.auth/${process.env.ZUSTAND || 'kunde-P16'}.json`, viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, locale: 'de-DE', reducedMotion: 'reduce' });
const p = await ctx.newPage();
await p.goto('https://app.fraghugo.de/dsb/learn/dashboard', { waitUntil: 'networkidle' });
await p.waitForFunction(() => !/Wird geladen|Lädt/.test(document.body.innerText) && !document.querySelector('.animate-spin'), null, { timeout: 30000 }).catch(() => {});
await p.addStyleTag({ content: '[data-testid="impersonation-banner"]{display:none!important}' });
// Aufgeklappte Modulgruppe zuklappen (nur Ansicht), damit Kennzahlen und Mitarbeiter-Tabelle zusammen ins Bild passen.
for (const knopf of await p.locator('main button[aria-expanded="true"]').all()) await knopf.click();
// Schwebende Knöpfe (Chat-Knopf, Widget im Shadow-DOM) ausblenden.
await p.evaluate(() => { for (const e of document.querySelectorAll('body *')) { const st = getComputedStyle(e); const r = e.getBoundingClientRect(); if ((st.position === 'fixed' && r.left > 1200 && r.top > 400) || e.shadowRoot) e.style.display = 'none'; } });
await p.mouse.move(0, 0);
await p.waitForTimeout(1200);
await fs.mkdir(`${AUS}/schulungen`, { recursive: true });
const tab = await p.locator('main table').first().boundingBox();
const hoehe = Math.ceil(tab.y + tab.height + 32);
await p.setViewportSize({ width: 1440, height: hoehe });
await p.waitForTimeout(600);
await p.evaluate(() => { for (const e of document.querySelectorAll('body *')) { const st = getComputedStyle(e); const r = e.getBoundingClientRect(); if ((st.position === 'fixed' && r.left > 1200 && r.top > 400) || e.shadowRoot) e.style.display = 'none'; } });
await p.screenshot({ path: `${AUS}/schulungen/uebersicht.png` });
console.log(new URL(p.url()).pathname);
console.log('Höhe', hoehe);
await b.close();
