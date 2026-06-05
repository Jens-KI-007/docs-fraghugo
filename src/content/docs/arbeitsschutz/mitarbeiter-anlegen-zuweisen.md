---
title: Mitarbeiter anlegen & zuweisen
description: Beschäftigte in Hugo Safe importieren, Tätigkeitsbereiche festlegen und die Pflicht-Unterweisungen automatisch nach Büro, Lager, Fahrer oder Branche zuweisen.
sidebar:
  order: 2
---

Bevor jemand unterwiesen werden kann, müssen Ihre Mitarbeiter in Hugo Safe angelegt sein. Anschließend weist Hugo Safe jedem Mitarbeiter automatisch die passenden Pflicht-Unterweisungen zu — abhängig vom Tätigkeitsbereich.

![Mitarbeiter-Liste in Hugo Safe mit Tätigkeitsbereichen (Büro, Lager, Fahrer, Branche), Zuweisungs-Fortschritt pro Person und automatischer Bereichs-Zuweisung der Pflicht-Unterweisungen](/screenshots/arbeitsschutz/mitarbeiter-anlegen-zuweisen.png)

## Mitarbeiter anlegen

Sie haben drei Wege:

1. **Einzeln** — über „+ Mitarbeiter" Name, E-Mail und Tätigkeitsbereich erfassen.
2. **CSV-Import** — eine Liste auf einmal hochladen. Spalten: Name, E-Mail, Tätigkeitsbereich, optional Abteilung/Standort.
3. **Microsoft-365-Sync** — Benutzerkonten direkt aus Ihrem Microsoft 365 übernehmen (einmalig OAuth-Zugriff freigeben). Spart bei vielen Mitarbeitern Stunden. Siehe [M365-Integration](/schulungen/m365-integration/).

:::note[Mitarbeiterzahl je Tarif]
Im **Free**-Tarif sind bis zu 20 Mitarbeiter möglich. **Basis** und **Komplett** haben keine Obergrenze. Abgerechnet wird pro aktivem Mitarbeiter und Jahr.
:::

## Tätigkeitsbereiche

Hugo Safe ordnet jedem Mitarbeiter einen oder mehrere Bereiche zu. Daraus ergeben sich die zugewiesenen Unterweisungen:

| Bereich | Typische Unterweisungen |
|---|---|
| **Büro & allgemein** | Allgemeine Sicherheit, Brandschutz, Flucht- und Rettungswege, Bildschirmarbeitsplatz, Erste Hilfe |
| **Lager & Produktion** | PSA, Flurförderzeuge/Gabelstapler, Leitern & Tritte, Regalsicherheit, Maschinen, Gefahrstoffe, Lärm |
| **Fahrer & Transport** | UVV-Fahrerunterweisung, Ladungssicherung, Ladekran & Hebezeuge |
| **Branchenspezifisch** | Hygiene & Infektionsschutz, Biostoffe/Reinigung, Baustellensicherheit |

Ein Mitarbeiter kann mehreren Bereichen angehören (z. B. „Büro" + „Lager") — dann erhält er die Vereinigungsmenge der Unterweisungen.

## Automatische Zuweisung

Sobald der Tätigkeitsbereich gesetzt ist, weist Hugo Safe die fälligen Unterweisungen automatisch zu (ab dem **Basis**-Tarif; im **Komplett**-Tarif inklusive Lager, Fahrer und Branche). Sie müssen nichts manuell zusammenstellen.

Sie können die Zuweisung pro Mitarbeiter jederzeit verfeinern — einzelne Unterweisungen hinzufügen oder, wenn fachlich begründet, entfernen.

## Betriebsspezifische Ergänzung

Jede Unterweisung lässt sich um **betriebsspezifische Hinweise** ergänzen (z. B. Ihre konkreten Fluchtwege, der Standort des Feuerlöschers, Ihre Hausordnung). Das macht die Unterweisung arbeitsplatzbezogen — ein Kriterium der DGUV Information 211-005. Mehr dazu unter [Rechtliche Hinweise](/arbeitsschutz/rechtliche-hinweise/).

## Mitarbeiter einladen

Nach dem Anlegen lädt Hugo Safe die Mitarbeiter per E-Mail ein. Sie melden sich an und sehen ihre offenen Unterweisungen. Den Ablauf aus Mitarbeitersicht beschreibt [Unterweisung durchführen](/arbeitsschutz/unterweisung-durchfuehren/).

## Tipps

- **Mit den Tätigkeitsbereichen starten** — sie sind der Hebel für die richtige Zuweisung. Lieber einmal sauber pflegen, als später einzeln nachsortieren.
- **CSV-Vorlage nutzen** — Hugo Safe bietet eine Beispieldatei mit den korrekten Spaltenüberschriften zum Download.
- **Neue Mitarbeiter sofort anlegen** — die Erstunterweisung sollte vor Aufnahme der Tätigkeit erfolgen. Hugo Safe markiert neu Angelegte als „noch nicht unterwiesen".
