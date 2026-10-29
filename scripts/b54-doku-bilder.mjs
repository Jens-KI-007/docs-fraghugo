// B54 (#168 D13): kaputte App-Bilder der Doku neu aufnehmen — Live-App, nur Testmandanten (P8/P9/P10/P13/P16/P14), nur ansehen.
// Benachrichtigungen (Klick auf „Benachrichtigungen“ in der Seitenleiste, P16), Mitarbeiterliste (P8, „Mitarbeitende“) und
// Schulungs-Übersicht (Sicht der Testmitarbeiterin P13) wurden über die Seitenleiste aufgenommen, nicht über die Pfade unten.
//   cd ../platform/e2e && node ../../docs-website/scripts/b54-doku-bilder.mjs <ausgabeordner>
import { chromium } from '../../platform/e2e/node_modules/playwright/index.mjs';
const AUS = process.argv[2] || '/tmp/b54';
const BILDER = [
  ['ki-compliance/ki-dokumente.png', '/dsb/ki-register/dokumente', 'kunde-P9'],
  ['schulungen/mitarbeiter.png', '/dsb/phish/mitarbeiter', 'kunde-P8'],
  ['schulungen/phishing.png', '/dsb/phish', 'kunde-P8'],
  ['schulungen/uebersicht.png', '/dsb/learn', 'kunde-P8'],
  ['erste-schritte/notifications.png', '/settings', 'kunde-P16'],
  ['vorfaelle/hinweisgeberschutz.png', '/dsb/hinweisgeberschutz', 'kunde-P16'],
  ['hugo-phish/mein-stand.jpg', '/dsb/phish/mein-stand', 'mitarbeiter'],
  ['lieferkette/eigene-fragen.png', '/shield/client/questions', 'admin'],
  ['isms-nis2/nis2-gf-schulung.png', '/dsb/nis2/gf-schulung', 'kunde-P10'],
];
const b = await chromium.launch();
for (const [datei, pfad, zustand] of BILDER) {
  const ctx = await b.newContext({ storageState: `.auth/${zustand}.json`, viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, locale: 'de-DE', reducedMotion: 'reduce' });
  const p = await ctx.newPage();
  await p.goto('https://app.fraghugo.de' + pfad, { waitUntil: 'networkidle' });
  await p.waitForFunction(() => !/Wird geladen|Lädt/.test(document.body.innerText) && !document.querySelector('.animate-spin'), null, { timeout: 30000 }).catch(() => {});
  await p.addStyleTag({ content: '[data-testid="impersonation-banner"]{display:none!important}' });
  await p.mouse.move(0, 0);
  await p.waitForTimeout(800);
  const ziel = `${AUS}/${datei}`;
  await (await import('node:fs')).promises.mkdir(ziel.replace(/\/[^/]+$/, ''), { recursive: true });
  await p.screenshot({ path: ziel, type: datei.endsWith('.jpg') ? 'jpeg' : 'png', ...(datei.endsWith('.jpg') ? { quality: 85 } : {}) });
  console.log(datei, new URL(p.url()).pathname);
  await ctx.close();
}
await b.close();
