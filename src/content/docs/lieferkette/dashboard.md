---
title: Lieferketten-Dashboard (Auftraggeber-Sicht)
description: Alle deine Zulieferer auf einen Blick — Scores, Risiken, fällige Re-Assessments.
---

![Auftraggeber-Dashboard mit Lieferanten-Liste](/screenshots/lieferkette/dashboard.png)

Hier siehst du als **Auftraggeber** alle Zulieferer mit ihrem aktuellen Sicherheits-Status.

## Was du siehst

- **Top-Kacheln** — Anzahl Lieferanten gesamt, davon kritisch (Score < 60), davon veraltet, durchschnittlicher Score.
- **Lieferanten-Liste** — sortierbar nach Score, letzter Aktualisierung, Risiko-Klasse.
- **Heat-Map** — alle Lieferanten auf einer 2D-Matrix (Score × Risiko-Klasse). Roter Quadrant oben links = Lieferanten mit hohem Risiko + niedrigem Score = Handlungsbedarf.
- **Trends** — Score-Entwicklung über die letzten 12 Monate.

## Lieferanten-Status

Pro Lieferant:
- **Score** (aus dessen Self-Assessment)
- **Letzte Aktualisierung** (Frist abgelaufen = rot)
- **Risiko-Klasse** — kritisch / wichtig / standard (legst du fest)
- **Hat unsere Custom-Fragen beantwortet?** (siehe [Eigene Fragen](/lieferkette/eigene-fragen/))
- **Zertifikate-Status** — gültig / abgelaufen
- **Letztes Vorkommnis** — Datenpanne beim Lieferant gemeldet? Risiko-Score steigt sofort.

## Aktionen

Klick auf einen Lieferanten →
- Detail-Profil mit allen Antworten
- Re-Assessment anfordern (Mail-Template)
- Risiko-Klasse ändern
- Notiz hinzufügen
- Lieferant als "abgelöst" markieren

## Filter

Filter nach: Risiko-Klasse, Branche, Region, Score-Bereich, letzte-Aktualisierung-vor-X-Monaten, Zertifikat-Status.

Wichtige gespeicherte Sichten:
- **Hochrisiko-Liste** — Score < 60 + Risikoklasse "kritisch"
- **Tender-Liste** — wer wurde diese Quartal in Tender eingebunden
- **Re-Assessment fällig** — letzte Beantwortung > 12 Monate her
