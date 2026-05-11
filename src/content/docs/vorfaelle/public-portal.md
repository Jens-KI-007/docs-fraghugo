---
title: Public-DSAR-Portal
description: Self-Service-Portal für Ihre Website — Betroffene reichen DSAR direkt ein. Setup in 30 Sekunden.
---

![Public-DSAR-Portal Konfigurator](/screenshots/vorfaelle/public-portal.png)

Statt eine "Datenschutz-Kontakt"-Mailadresse, an die alle möglichen Anfragen landen, können Sie Betroffene auf ein **strukturiertes Portal** schicken. Sie wählen Antrags-Typ aus, geben strukturiert Daten ein, Sie bekommen eine saubere Anfrage im System.

## Setup

1. **Subdomain wählen** — z.B. `datenschutz.Ihre-firma.de`. Plattform stellt Ihnen auch eine generische bereit (`dsar.fraghugo.de/Ihre-firma`).
2. **Branding** — Logo, Farben, Footer-Text. Sieht aus wie Ihre Website.
3. **Formular-Felder** — Standard reicht: Name, E-Mail, Antrags-Typ, Beschreibung. Sie können zusätzliche Felder anhängen.
4. **Verifizierungs-Methode** — Mail-Bestätigungslink (Standard) oder Ausweis-Upload (für besonders sensible Branchen).
5. **Veröffentlichen** — Sie bekommen eine URL. Pack die in Ihre Datenschutzerklärung und in den Footer der Website.

Setup-Zeit: ca. 30 Sekunden bis 5 Minuten (je nachdem wie viel Sie branden).

## So sieht's für den Betroffenen aus

1. Person geht auf `datenschutz.Ihre-firma.de`.
2. Wählt: "Ich möchte Auskunft / Löschung / Berichtigung / Widerspruch".
3. Gibt Name, Mail, optional Geburtsdatum / Kundennummer ein.
4. Erhält Verifizierungs-Mail. Klickt Link.
5. Sieht "Eingang bestätigt. Sie hören innerhalb von 30 Tagen von uns."

Bei Ihnen im System: neuer DSAR-Eintrag, Status "Verifiziert", Frist startet.

## Aufsichtsbehörden Art. 77

Wenn ein Betroffener stattdessen über die Aufsichtsbehörde geht (Art. 77 — Beschwerderecht), zeigt das Portal Links zu den 16 Landesdatenschutzbeauftragten + dem BfDI. Transparenz ist Pflicht.

## Secure-Reply

Antworten an Betroffene gehen NICHT per offener Mail (würde wieder Datenpanne sein). Stattdessen: Hugo legt die Antwort verschlüsselt im Portal ab, Betroffener bekommt Link + Einmal-Code per Mail, loggt sich ein, sieht die Antwort. Auch Anhänge (z.B. Daten-Auszug) sind so sicher.

## Statistik

Im Portal-Dashboard sehen Sie:
- Anfragen pro Monat (Trend)
- Antrags-Typ-Verteilung (meiste sind Löschung, dann Auskunft, dann Berichtigung)
- Durchschnittliche Antwortzeit
- Verspätete Anfragen (Frist gerissen)

Wird Teil Ihres [Jahresberichts](/datenschutz/jahresbericht/).
