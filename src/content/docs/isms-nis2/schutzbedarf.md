---
title: Schutzbedarf (CIA-Klassifizierung)
description: Pro Asset die drei Dimensionen Vertraulichkeit, Integrität, Verfügbarkeit einschätzen.
---

![Schutzbedarf-Matrix](/screenshots/isms-nis2/schutzbedarf.png)

Nicht jedes Asset ist gleich kritisch. Im Schutzbedarf legst du fest, **wie stark** ein Asset geschützt werden muss — in drei Dimensionen.

## Die drei Schutzziele (CIA)

| Schutzziel | Frage |
|---|---|
| **Vertraulichkeit** (Confidentiality) | Wer darf das sehen? Was passiert, wenn Unbefugte es sehen? |
| **Integrität** (Integrity) | Was passiert, wenn die Daten manipuliert werden? Falsche Zahlen, gefälschte Verträge? |
| **Verfügbarkeit** (Availability) | Was passiert, wenn das System nicht erreichbar ist? Wie lange darf der Ausfall sein? |

## Skala (4 Stufen)

Pro Asset, pro Schutzziel:
- **Normal** — bisschen Ärger, behebbar in Stunden, kein Schaden außerhalb der Firma
- **Hoch** — spürbarer Schaden (z.B. 50–500k € oder Tagesausfall)
- **Sehr hoch** — existenzbedrohend (Geschäftsverlust, Reputationsschaden)
- **Maximal** — Gefahr für Leib und Leben (z.B. medizinische Geräte)

## Wie pflegen

In der Übersicht siehst du eine Matrix: Assets in Zeilen, CIA-Stufen in Spalten. Du klickst Felder an und stufst ein.

Hugo schlägt Default-Werte vor — z.B. "Patientendaten" sind by-default sehr hoch in V + I + A. Du kannst überschreiben.

## Aggregations-Regel

Hugo wendet die **Maximums-Regel** an: Das Asset bekommt insgesamt den Maximalwert der drei Dimensionen. Also "Hoch in V, Normal in I+A" → Asset insgesamt "Hoch".

Alternativ: **Kumulations-Effekt** — wenn viele "Normal"-Werte zusammenkommen, kann das Gesamt-Risiko trotzdem "Hoch" werden.

## Was passiert mit dem Schutzbedarf?

- **Risiko-Register** — Hugo schlägt für hoch-eingestufte Assets automatisch Risiko-Analysen vor.
- **Maßnahmen-Auswahl** — pro Schutzbedarf gibt's Standard-Maßnahmen (z.B. "sehr hoch in C" → Verschlüsselung Pflicht, Zugriff strikt protokolliert).
- **Notfall-Planung** — Assets mit hoher A-Anforderung kommen in den Wiederanlauf-Plan.

## Tipps

- **Nicht inflationär hochstufen** — wenn alles "sehr hoch" ist, ist nichts wirklich kritisch und du kannst nicht priorisieren.
- **Geschäftsführung muss zustimmen** — sehr-hoch-eingestufte Assets brauchen Budget für Schutzmaßnahmen. Lieber GF früh einbinden.
