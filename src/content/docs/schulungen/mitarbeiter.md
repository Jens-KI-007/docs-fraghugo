---
title: Mitarbeiter verwalten
description: Mitarbeiter anlegen, Kurse zuweisen, einladen, Status verfolgen.
---

![Mitarbeiter-Liste mit Aktionen](/screenshots/schulungen/mitarbeiter.png)

Hier verwaltest du deine Mitarbeiter-Liste — wer existiert, welche Kurse sind ihm zugewiesen, wer hat schon eingeladen werden müssen.

## Mitarbeiter anlegen

### Einzeln
Klick "+ Mitarbeiter". Du gibst Name, Mail, Abteilung, Position ein.

### Massen-Import
CSV hochladen mit Spalten: Name, Mail, Abteilung, Position. Hugo legt alle an.

### Über M365-Sync
Wenn du die [M365-Integration](/schulungen/m365-integration/) aktivierst, werden Mitarbeiter automatisch synchronisiert.

## Einladen

Pro Mitarbeiter: "Einladen" → er bekommt Mail mit Link zur Plattform. Erstes Login → Passwort setzen → kann seine Kurse machen.

**Wichtig**: Mitarbeiter sehen NUR Schulungen, nicht VVT/AVV/etc. Sie haben eine eigene, viel kleinere App-Sicht.

## Kurse zuweisen

### Einzelne Zuweisung
Klick auf Mitarbeiter → "Kurs zuweisen" → wählst Kurs + Frist.

### Pflicht-Zuweisung
In den [Einstellungen → Schulungen](/erste-schritte/einstellungen/) definierst du: "Alle Mitarbeiter müssen Kurs X im 1. Quartal absolvieren". Hugo weist automatisch zu.

### Rollen-basiert
"Alle in Abteilung 'HR' bekommen Bewerber-Datenschutz-Kurs" — Regel in den Einstellungen.

## Off-Boarding

Wenn ein Mitarbeiter geht: "Deaktivieren" oder "Löschen" (DSGVO-konform).
- **Deaktivieren** — Login gesperrt, Zertifikate bleiben (für Audit-Nachweis)
- **Löschen** — alle personenbezogenen Daten weg, Zertifikate werden pseudonymisiert

## Mitarbeiter-Sicht

Was sehen die Mitarbeiter selber? — [Für Mitarbeiter](/fuer-mitarbeiter/uebersicht/).
