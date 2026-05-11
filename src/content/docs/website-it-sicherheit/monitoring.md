---
title: Monitoring
description: Automatischer Re-Scan in Intervallen — Sie werden benachrichtigt, wenn der Score sinkt oder neue Tracker erscheinen.
---

![Monitoring-Einstellungen pro Domain](/screenshots/website-it-sicherheit/monitoring.png)

Ein Scan ist eine Momentaufnahme. Monitoring scannt automatisch nach (täglich/wöchentlich/monatlich) und alarmiert Sie bei Verschlechterung.

## Pro Domain einstellbar

- **Intervall** — täglich / wöchentlich / monatlich / quartalsweise
- **Schwellwert** — bei welcher Score-Veränderung sollst Sie alarmiert werden (z.B. −5 Punkte)
- **Neue Tracker melden** — sobald ein neuer Drittanbieter auftaucht (häufig bei Marketing-Pixel-Einbau ohne Sie zu fragen)
- **Empfänger** — wer kriegt die Mail (Sie + ggf. Marketing-Team + externe Agentur)

## Was Hugo dann macht

- **Vergleich** mit letztem Scan
- **Bei Verschlechterung** → Mail mit Details: "Score gesunken von 87 auf 79, weil neuer Facebook-Pixel ohne Consent."
- **Bei Verbesserung** → optional Glückwunsch-Mail an Geschäftsführung (motiviert mehr als Schimpf-Mails).
- **Wöchentlicher Digest** — wenn Sie nicht jeden einzelnen Scan mailen willst.

## Slack / Microsoft Teams

In den Einstellungen können Sie einen **Webhook** hinterlegen — dann landen Monitoring-Alerts in Ihrem Marketing-Slack-Channel statt in Ihrer Inbox.

## Wozu brauchen Sie das?

Realistisches Szenario: Marketing baut einen neuen Pixel ohne Sie zu fragen. Sie erfahren es nie. Anwalt sieht's, Abmahnung kommt. Monitoring fängt das ab.

## Tipps

- **Täglich für Hauptseite**, monatlich für Nebenseiten — sonst überfütterst Sie Sie mit Mails.
- **Schwellwert nicht zu niedrig** — Score schwankt um ±2 Punkte je nach Hugos Server-Response-Time. Schwellwert ≥ 5 macht Sinn.
