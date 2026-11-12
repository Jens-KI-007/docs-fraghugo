---
title: Mitarbeiter verwalten
description: Mitarbeiter anlegen, Kurse zuweisen, einladen, Status verfolgen.
---

![Mitarbeiter-Liste mit Aktionen](/screenshots/schulungen/mitarbeiter.png)

Hier verwalten Sie Ihre Mitarbeiter-Liste — wer angelegt ist, welche Kurse zugewiesen sind und wer schon eine Einladung erhalten hat.

## Mitarbeiter anlegen

### Einzeln
Klicken Sie „+ Mitarbeiter“. Sie geben Name, Mail, Abteilung, Position ein.

### Massen-Import
CSV hochladen mit Spalten: Name, Mail, Abteilung, Position. Hugo legt alle an.

### Über den Personal-Abgleich
Mit dem [Personal-Abgleich](/schulungen/personal-abgleich/) kommen Mitarbeiter automatisch aus
[Personio](/schulungen/personio/), [Microsoft 365](/schulungen/m365-integration/) oder
[Google Workspace](/schulungen/google-workspace/): Neue erscheinen von selbst,
Ausgeschiedene werden stillgelegt. Sie finden ihn in der Mitarbeiterliste unter **Hinzufügen → Aus Personio oder
Microsoft 365 abgleichen**.

## Einladen

Pro Mitarbeiter: „Einladen“ → er bekommt Mail mit Link zur Plattform. Erstes Login → Passwort setzen → kann seine Kurse machen.

**Wichtig**: Mitarbeiter sehen NUR Schulungen, nicht VVT/AVV/etc. Sie haben eine eigene, viel kleinere App-Sicht.

## Kurse zuweisen

### Einzelne Zuweisung
Klicken Sie auf Mitarbeiter → „Kurs zuweisen“ → wählen Kurs + Frist.

### Pflicht-Zuweisung
In den [Einstellungen → Schulungen](/erste-schritte/einstellungen/) definieren Sie: „Alle Mitarbeiter müssen Kurs X im 1. Quartal absolvieren“. Hugo weist automatisch zu.

### Rollen-basiert
„Alle in Abteilung 'HR' bekommen Bewerber-Datenschutz-Kurs“ — Regel in den Einstellungen.

## Off-Boarding

Wenn ein Mitarbeiter geht: „Deaktivieren“ oder „Löschen“ (DSGVO-konform).
- **Deaktivieren** — Login gesperrt, Zertifikate bleiben (für Audit-Nachweis)
- **Löschen** — alle personenbezogenen Daten weg, Zertifikate werden pseudonymisiert

## Mitarbeiter-Sicht

Was sehen die Mitarbeiter selber? — [Für Mitarbeiter](/fuer-mitarbeiter/uebersicht/).
