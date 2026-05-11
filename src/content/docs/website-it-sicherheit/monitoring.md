---
title: Monitoring
description: Automatischer Re-Scan in Intervallen — du wirst benachrichtigt, wenn der Score sinkt oder neue Tracker erscheinen.
---

![Monitoring-Einstellungen pro Domain](/screenshots/website-it-sicherheit/monitoring.png)

Ein Scan ist eine Momentaufnahme. Monitoring scannt automatisch nach (täglich/wöchentlich/monatlich) und alarmiert dich bei Verschlechterung.

## Pro Domain einstellbar

- **Intervall** — täglich / wöchentlich / monatlich / quartalsweise
- **Schwellwert** — bei welcher Score-Veränderung sollst du alarmiert werden (z.B. −5 Punkte)
- **Neue Tracker melden** — sobald ein neuer Drittanbieter auftaucht (häufig bei Marketing-Pixel-Einbau ohne dich zu fragen)
- **Empfänger** — wer kriegt die Mail (du + ggf. Marketing-Team + externe Agentur)

## Was Hugo dann macht

- **Vergleich** mit letztem Scan
- **Bei Verschlechterung** → Mail mit Details: "Score gesunken von 87 auf 79, weil neuer Facebook-Pixel ohne Consent."
- **Bei Verbesserung** → optional Glückwunsch-Mail an Geschäftsführung (motiviert mehr als Schimpf-Mails).
- **Wöchentlicher Digest** — wenn du nicht jeden einzelnen Scan mailen willst.

## Slack / Microsoft Teams

In den Einstellungen kannst du einen **Webhook** hinterlegen — dann landen Monitoring-Alerts in deinem Marketing-Slack-Channel statt in deiner Inbox.

## Wozu brauchst du das?

Realistisches Szenario: Marketing baut einen neuen Pixel ohne dich zu fragen. Du erfährst es nie. Anwalt sieht's, Abmahnung kommt. Monitoring fängt das ab.

## Tipps

- **Täglich für Hauptseite**, monatlich für Nebenseiten — sonst überfütterst du dich mit Mails.
- **Schwellwert nicht zu niedrig** — Score schwankt um ±2 Punkte je nach Hugos Server-Response-Time. Schwellwert ≥ 5 macht Sinn.
