---
title: Zulieferer verwalten
description: Lieferanten einladen, deren Profil prüfen, Re-Assessment anstoßen, Risiko-Klasse pflegen.
---

![Zulieferer-Liste mit Aktionen](/screenshots/lieferkette/zulieferer.png)

Die operative Seite des Lieferketten-Bereichs — hier legst du neue Zulieferer an, lädst sie ein, prüfst Antworten, fordierst Updates an.

## Neuen Zulieferer hinzufügen

Klick "+ Zulieferer". Du brauchst:
- Firmenname
- Mail-Adresse Kontaktperson
- Branche (optional, für Branchen-Filter)
- Risiko-Klasse: **kritisch** (essentiell für deinen Betrieb, Ausfall = Stopp), **wichtig** (relevant), **standard** (austauschbar)

Optional gleich mit einladen.

## Einladen

Du wählst Lieferant + Einladungstyp:
- **Standard-Self-Assessment** — bekommt den 50-Fragen-Fragebogen
- **Plus eigene Fragen** — falls du Custom-Fragen erstellt hast
- **Nur Profil-Update** — falls schon vorhanden

Lieferant bekommt Mail mit Link, registriert sich kostenlos im Basis-Plan, beantwortet, du siehst Antworten.

## Status pro Lieferant

- **Eingeladen** — Mail raus, noch keine Antwort
- **In Bearbeitung** — Lieferant ist dran
- **Abgeschlossen** — Score sichtbar
- **Veraltet** — letzte Antwort > 12 Monate
- **Abgelöst** — wirst nicht mehr mit ihm arbeiten

## Risiko-Klasse pflegen

Pro Lieferant einstellbar. Beeinflusst:
- Wie streng die Re-Assessment-Erinnerung kommt
- Ob er im "Hochrisiko"-Filter erscheint
- Welche Score-Schwelle als kritisch gilt

## Massenaktionen

- **Massen-Einladung** — CSV hochladen mit Firma + Mail-Spalte
- **Massen-Re-Assessment** — alle Lieferanten >12 Monate alt eine Sammel-Mail
- **Massen-Export** — Lieferanten-Liste als Excel inkl. Scores

## Tipps

- **Erst Pareto**: konzentriere dich auf die 20 % kritischen Lieferanten, die 80 % deines Risikos abdecken.
- **Auftrags-Wertgrenze** mit Risiko-Klasse verknüpfen — z.B. "alle Lieferanten > 50k €/Jahr automatisch kritisch".
