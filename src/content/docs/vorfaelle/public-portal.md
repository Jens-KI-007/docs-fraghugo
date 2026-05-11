---
title: Public-DSAR-Portal
description: Self-Service-Portal für deine Website — Betroffene reichen DSAR direkt ein. Setup in 30 Sekunden.
---

![Public-DSAR-Portal Konfigurator](/screenshots/vorfaelle/public-portal.png)

Statt eine "Datenschutz-Kontakt"-Mailadresse, an die alle möglichen Anfragen landen, kannst du Betroffene auf ein **strukturiertes Portal** schicken. Sie wählen Antrags-Typ aus, geben strukturiert Daten ein, du bekommst eine saubere Anfrage im System.

## Setup

1. **Subdomain wählen** — z.B. `datenschutz.deine-firma.de`. Plattform stellt dir auch eine generische bereit (`dsar.fraghugo.de/deine-firma`).
2. **Branding** — Logo, Farben, Footer-Text. Sieht aus wie deine Website.
3. **Formular-Felder** — Standard reicht: Name, E-Mail, Antrags-Typ, Beschreibung. Du kannst zusätzliche Felder anhängen.
4. **Verifizierungs-Methode** — Mail-Bestätigungslink (Standard) oder Ausweis-Upload (für besonders sensible Branchen).
5. **Veröffentlichen** — du bekommst eine URL. Pack die in deine Datenschutzerklärung und in den Footer der Website.

Setup-Zeit: ca. 30 Sekunden bis 5 Minuten (je nachdem wie viel du brandest).

## So sieht's für den Betroffenen aus

1. Person geht auf `datenschutz.deine-firma.de`.
2. Wählt: "Ich möchte Auskunft / Löschung / Berichtigung / Widerspruch".
3. Gibt Name, Mail, optional Geburtsdatum / Kundennummer ein.
4. Erhält Verifizierungs-Mail. Klickt Link.
5. Sieht "Eingang bestätigt. Du hörst innerhalb von 30 Tagen von uns."

Bei dir im System: neuer DSAR-Eintrag, Status "Verifiziert", Frist startet.

## Aufsichtsbehörden Art. 77

Wenn ein Betroffener stattdessen über die Aufsichtsbehörde geht (Art. 77 — Beschwerderecht), zeigt das Portal Links zu den 16 Landesdatenschutzbeauftragten + dem BfDI. Transparenz ist Pflicht.

## Secure-Reply

Antworten an Betroffene gehen NICHT per offener Mail (würde wieder Datenpanne sein). Stattdessen: Hugo legt die Antwort verschlüsselt im Portal ab, Betroffener bekommt Link + Einmal-Code per Mail, loggt sich ein, sieht die Antwort. Auch Anhänge (z.B. Daten-Auszug) sind so sicher.

## Statistik

Im Portal-Dashboard siehst du:
- Anfragen pro Monat (Trend)
- Antrags-Typ-Verteilung (meiste sind Löschung, dann Auskunft, dann Berichtigung)
- Durchschnittliche Antwortzeit
- Verspätete Anfragen (Frist gerissen)

Wird Teil deines [Jahresberichts](/datenschutz/jahresbericht/).
