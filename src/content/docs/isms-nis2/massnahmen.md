---
title: Maßnahmen (Controls)
description: Schutzmaßnahmen pro Risiko — aus BSI-Grundschutz / ISO 27001 Anhang A, plus eigene.
---

![Maßnahmen mit Status](/screenshots/isms-nis2/massnahmen.png)

Maßnahmen sind das, was du tust, um Risiken zu reduzieren. Hier landen sie alle gebündelt.

## Katalog

Hugo bringt **140 Standardmaßnahmen** aus:
- BSI-Grundschutz (Bausteine OPS, APP, ORP, IND, INF, SYS, NET, CON, ...)
- ISO 27001 Anhang A (114 Controls)
- NIS2 Implementing Regulation
- DORA technische Standards

Bei Anlage kannst du aus dem Katalog wählen oder Custom-Maßnahmen erstellen.

## Pro Maßnahme

- **Name + Beschreibung**
- **Bezug** — welche Risiken werden gemindert (1:n-Beziehung)
- **Status**: geplant / in Umsetzung / umgesetzt / nicht zutreffend
- **Verantwortlicher**
- **Frist** — bis wann umgesetzt
- **Wirksamkeitsprüfung** — wie wirst du prüfen, dass die Maßnahme wirkt
- **Letzte Prüfung** — wann zuletzt geprüft
- **Nachweis** — Dateien anhängen

## Maßnahmenplan

Filterbar nach Status. Wichtige Sichten:
- **Offen mit Frist nächste 30 Tage** — Priorisierung
- **Überfällig** — Frist verstrichen, nicht umgesetzt
- **Wirksamkeit unbestätigt** — Maßnahme zwar umgesetzt aber nie geprüft

## Maßnahmen-Bibliothek mit AI-Hilfe

Klick "Hugo, hilf mir" bei einer Maßnahme → Hugo:
- Erklärt was zu tun ist
- Schlägt ein konkretes Vorgehen vor (z.B. "Backup-Strategie 3-2-1 — drei Kopien, zwei Medien, ein Off-Site")
- Verlinkt auf BSI-Empfehlungen / Industry-Standards
- Generiert Mustertexte für Richtlinien

## Verbindung zu Richtlinien

Maßnahmen sind das WAS, Richtlinien das WIE. Maßnahme "Passwort-Schutz" → verlinkt auf [Richtlinie "Passwort-Vorgaben"](/isms-nis2/richtlinien/).

## Tipps

- **80/20-Regel** — die 20 wichtigsten Maßnahmen decken 80 % deines Risikos ab. Fang da an.
- **Frist realistisch** — lieber 90 Tage und es wirklich tun als 14 Tage und nie liefern.
