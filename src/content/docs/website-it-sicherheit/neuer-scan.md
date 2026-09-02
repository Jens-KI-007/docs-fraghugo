---
title: Neuer Scan starten
description: URL eingeben, 29 DSGVO-Checks in unter 60 Sekunden — Ergebnis mit Ampel, Fehlerliste und Fix-Vorschlägen.
---

![Scan-Startseite](/screenshots/website-it-sicherheit/neuer-scan.png)

So scannst Sie eine Website:

1. **URL eingeben** — `https://www.Ihre-firma.de` (mit oder ohne `https://`).
2. **Scan starten** — Hugo crawlt die Seite, lädt sie wie ein echter Besucher, prüft Cookies, Tracker, Header.
3. **Captcha** (nur Free-User) — kurzer Bot-Schutz.
4. **Warten** — 30–60 Sekunden. Sie sehen Live, was geprüft wird.
5. **Ergebnis** — Score 0–100, Ampelsystem, alle Befunde.

## Was Hugo testet (31 Checks)

**Cookie-Banner:**
- Existiert eines?
- Opt-in oder Opt-out?
- Lädt Tracker VOR der Zustimmung? (häufiger Fehler)
- Sind alle Tracker im Banner gelistet?
- Lassen sich Tracker einzeln ablehnen?

**Tracker:**
- Welche Tracker laufen (Hugo erkennt 500+ Anbieter)
- Hat jeder Tracker einen Eintrag in Ihrer DSE?
- Ist der Tracker DSGVO-konform konfiguriert (z.B. anonymisierte IP)?

**Datenschutzerklärung:**
- Findet sie unter typischen URLs (/datenschutz, /datenschutzerklaerung, /privacy)?
- Hat sie alle Pflichtangaben (Verantwortlicher, Zwecke, Empfänger, Rechte)?
- Ist sie max. 12 Monate alt?

**Server & Verbindung:**
- HTTPS aktiv?
- Server-Standort EU oder Drittland?
- Sicherheits-Header (HSTS, CSP, X-Frame, ...)?
- IPv6, HTTP/2, HTTP/3?

## Im Ergebnis sehen Sie

- **Score** als große Zahl (0–100). 80+ ist gut, 90+ ist sehr gut.
- **Ampel pro Check** (rot/gelb/grün) mit Klicken Sie auf Details.
- **Fix-Vorschläge** — pro Befund konkrete Anleitung wie zu beheben (Plugin, Code-Snippet, externe Anleitung).
- **PDF-Bericht** — schick an Geschäftsführung oder externe Agentur.
- **Re-Scan-Button** — nach Fixes nochmal durchlaufen lassen, dann haben Sie auch den Vorher/Nachher-Vergleich.

## Mit DSE verknüpfen

Wenn Sie auf der Plattform Ihre [Datenschutzerklärung](/datenschutz/dse/) gepflegt hast, vergleicht der Scan: "Sie haben Matomo auf der Website, aber in Ihrer DSE steht nichts dazu." → konkreter Befund.

## Free vs. Pro vs. Agentur

| Feature | Free | Pro 29 € | Agentur 99 € |
|---|---|---|---|
| Anzahl Scans/Monat | 3 | unbegrenzt | unbegrenzt |
| Captcha | ja | nein | nein |
| PDF-Bericht | basic | gebrandet | gebrandet + Whitelabel |
| KI-Analyse | nein | ja | ja |
| Monitoring | nein | ja | ja |
| Bulk-Scan | nein | nein | ja |
| API | nein | nein | ja |
