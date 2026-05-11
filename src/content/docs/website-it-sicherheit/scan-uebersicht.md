---
title: Scan-Übersicht
description: Alle Scans im Blick — Score-Verlauf, Fortschritt, Nachverfolgung der Befunde.
---

![Scan-Übersicht mit Score-Verlauf](/screenshots/website-it-sicherheit/scan-uebersicht.png)

Hier landen alle Scans, die Sie je gemacht hast — chronologisch, mit Score-Verlauf und Befundliste.

## Was Sie sehen

- **Score-Chart** — Trend Ihrer Compliance über die letzten 12 Monate. Steigend = gut, fallend = schlecht (z.B. neuer Tracker eingebaut).
- **Score-Karte** je gescannte Domain — Sie können mehrere Domains parallel pflegen.
- **Befunde-Liste** — alle offenen + behobenen Findings, filter nach Schwere, Kategorie, Status.
- **Re-Scan** — Button pro Domain um sofort neu zu scannen.

## Domain hinzufügen

Klicken Sie "+ Neue Domain". Sie geben URL ein, optional Notiz ("Hauptseite", "Shop", "Bewerber-Portal"). Jede Domain hat eigene Scan-Historie.

## Befunde abhaken

Jedes Finding hat einen Status:
- **Offen** — noch nicht behoben
- **In Arbeit** — Sie oder Ihr Entwickler arbeitet dran
- **Behoben** — beim nächsten Scan automatisch bestätigt
- **Akzeptiert** — werden Sie nicht beheben (mit Begründung, z.B. "Tracker ist berechtigt-Interesse, kein Consent nötig")
- **False Positive** — Hugo hat falsch erkannt (Sie geben Feedback)

## Vergleich

Wähle zwei Scans → "Vergleichen" zeigt Ihnen was sich geändert hat: neue Tracker, gestrichene Tracker, Score-Differenz, neue/behobene Befunde.

## Export

- **PDF-Report** als gebrandetes Dokument (mit Ihrem Logo bei Pro/Agentur)
- **CSV** aller Befunde
