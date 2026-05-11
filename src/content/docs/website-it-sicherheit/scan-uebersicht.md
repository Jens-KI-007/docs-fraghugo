---
title: Scan-Übersicht
description: Alle Scans im Blick — Score-Verlauf, Fortschritt, Nachverfolgung der Befunde.
---

![Scan-Übersicht mit Score-Verlauf](/screenshots/website-it-sicherheit/scan-uebersicht.png)

Hier landen alle Scans, die du je gemacht hast — chronologisch, mit Score-Verlauf und Befundliste.

## Was du siehst

- **Score-Chart** — Trend deiner Compliance über die letzten 12 Monate. Steigend = gut, fallend = schlecht (z.B. neuer Tracker eingebaut).
- **Score-Karte** je gescannte Domain — du kannst mehrere Domains parallel pflegen.
- **Befunde-Liste** — alle offenen + behobenen Findings, filter nach Schwere, Kategorie, Status.
- **Re-Scan** — Button pro Domain um sofort neu zu scannen.

## Domain hinzufügen

Klick "+ Neue Domain". Du gibst URL ein, optional Notiz ("Hauptseite", "Shop", "Bewerber-Portal"). Jede Domain hat eigene Scan-Historie.

## Befunde abhaken

Jedes Finding hat einen Status:
- **Offen** — noch nicht behoben
- **In Arbeit** — du oder dein Entwickler arbeitet dran
- **Behoben** — beim nächsten Scan automatisch bestätigt
- **Akzeptiert** — wirst du nicht beheben (mit Begründung, z.B. "Tracker ist berechtigt-Interesse, kein Consent nötig")
- **False Positive** — Hugo hat falsch erkannt (du gibst Feedback)

## Vergleich

Wähle zwei Scans → "Vergleichen" zeigt dir was sich geändert hat: neue Tracker, gestrichene Tracker, Score-Differenz, neue/behobene Befunde.

## Export

- **PDF-Report** als gebrandetes Dokument (mit deinem Logo bei Pro/Agentur)
- **CSV** aller Befunde
