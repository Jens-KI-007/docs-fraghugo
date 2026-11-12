---
title: Personal-Abgleich
description: "Mitarbeitende automatisch aus Personio, Microsoft 365 oder Google Workspace übernehmen: was der Abgleich tut und was nicht, welche Quelle was kann, wer ihn nutzen kann und wo Sie ihn finden."
sidebar:
  order: 7
---

Der **Personal-Abgleich** holt Ihre Mitarbeitenden aus dem System, in dem Sie sie ohnehin pflegen. Neue erscheinen
von selbst in Hugo, Ausgeschiedene werden stillgelegt. Die Liste gilt für Hugo Learn und Hugo Safe zugleich, Sie
pflegen sie also an einer Stelle.

:::note[Wird gerade schrittweise freigeschaltet]
Der Personal-Abgleich wird in der App gerade schrittweise freigeschaltet. Sehen Sie den Menüpunkt „Personal-Abgleich“
noch nicht und möchten ihn sofort nutzen, schreiben Sie uns über das [Kontaktformular](https://www.fraghugo.de/kontakt/).
:::

Sie finden die Seite im Menü unter **Personal-Abgleich** (`app.fraghugo.de/team/abgleich`) oder in den
Mitarbeiterlisten von Hugo Learn und Hugo Safe über **Hinzufügen → Aus Personio oder Microsoft 365 abgleichen**. Je
Quelle gibt es eine Karte.

<img src="/screenshots/schulungen/personal-abgleich-1-seite.webp" alt="Seite „Personal-Abgleich“ mit dem Satz „Mitarbeitende kommen automatisch aus Ihrem Personalsystem. Neue erscheinen von selbst, Ausgeschiedene werden stillgelegt.“ und der Karte „Personio“ im Zustand „Verbunden“ mit letztem Abgleich, Zahlen, Knöpfen und dem Abschnitt „Schulungsnachweise in Personio ablegen“" width="1184" height="900" loading="lazy" />

## Voraussetzungen

- Die Rolle Hauptadministrator oder das Recht, Schulungen zu verwalten. Mitarbeitende ohne dieses Recht sehen die Seite
  nicht.
- Ein Tarif, der die jeweilige Quelle enthält (Tabelle unten).

## Welche Quelle was kann

| | Personio | Microsoft 365 | Google Workspace |
|---|---|---|---|
| Mitarbeitende herein (Name, E-Mail, Abteilung) | ja | ja | ja |
| Eintritts- und Austrittsdatum | ja | nein | nein |
| Änderungen kommen sofort an | ja, mit Webhook-Recht; sonst nachts | nachts | nachts |
| Ausgeschiedene stilllegen | ja (Status oder Austrittsdatum) | ja (deaktiviertes Konto) | ja (gesperrtes oder archiviertes Konto) |
| Nachweise zurück ins System (PDF in der Personalakte) | ja, auf Wunsch | nein | nein |
| Vorschau vor dem ersten Abgleich | ja | nein | ja |
| Bedingung beim Anbieter | Personio-Tarif „Core Pro“ | Zustimmung eines Administrators in Microsoft 365 | Delegierung durch einen Super-Administrator in der Google-Admin-Konsole |
| In Hugo enthalten in | jedem bezahlten Tarif von Hugo Learn (Standard, Programm) und Hugo Safe (Basis, Komplett), auch als Teil eines Datenschutz-Tarifs oder einer Suite | Hugo Learn Programm, Datenschutz-Suite Pro und Premium, Compliance-Suite Pro und Enterprise | wie Personio |

Wie Sie die Quellen verbinden:

- [Personio verbinden](/schulungen/personio/) — Zugangsdaten anlegen, Vorschau, Einstellungen, Nachweise ablegen.
- [Microsoft 365 verbinden](/schulungen/m365-integration/) — Zustimmung im Microsoft-Dialog, Berechtigungen.
- [Google Workspace verbinden](/schulungen/google-workspace/) — Delegierung in der Admin-Konsole, Domain, Vorschau.

## Was der Abgleich tut

- **Neue Mitarbeitende** legt Hugo ohne Konto und ohne Mail an. Eine Einladung bekommen sie erst, wenn Sie ihnen eine
  Schulung oder Unterweisung zuweisen. Bei Personio und Google Workspace können Sie das automatische Einladen einschalten.
- **Ausgeschiedene** werden stillgelegt, nie gelöscht. Ihre Nachweise bleiben in Hugo.
- **Geänderte Namen, Abteilungen und E-Mail-Adressen** ziehen nach.
- **Plätze:** Hugo legt nur so viele Personen an, wie Ihr Tarif freie Plätze hat, und nennt die übrigen auf der Seite.
- In den Mitarbeiterlisten steht hinter der Abteilung, woher eine Person kommt, zum Beispiel „· aus Personio“.

## Was der Abgleich nicht tut

- Er löscht niemanden und schreibt nichts in Microsoft 365 oder Google Workspace. In Personio legt er nur PDF-Dokumente ab, wenn Sie das
  einschalten.
- Er fasst von Hand angelegte Personen nicht an und legt nie Konten von Hauptadministratoren still.
- Er liest keine Gehälter, Abwesenheiten, Geburtsdaten, Mails oder Kalender.
- Er verschickt keine Mails, solange Sie das automatische Einladen nicht einschalten.

## Andere Personalsysteme

Für andere Personalsysteme gibt es keine direkte Anbindung. Legen Sie Mitarbeitende dort per CSV-Import in der
[Mitarbeiterliste](/schulungen/mitarbeiter/) an. Partner mit eigener Software nutzen die Partner-Schnittstelle.

## Häufige Fehler

| Was Sie sehen | Ursache | Lösung |
|---|---|---|
| Menüpunkt „Personal-Abgleich“ fehlt | Ihr Tarif enthält Microsoft 365 nicht oder Ihnen fehlt das Recht, Schulungen zu verwalten. | Personio-Kunden kommen über **Hinzufügen** in der Mitarbeiterliste hinein; sonst Tarif oder Recht prüfen. |
| „Keine Berechtigung“ | Ihre Rolle darf Schulungen nicht verwalten. | Einen Hauptadministrator bitten, das Recht zu geben. |
| Personen erscheinen nicht | Keine freien Plätze, fehlende E-Mail-Adresse oder ausgeschlossene Abteilung. | Der Grund steht auf der Karte bzw. in der Vorschau. |
| Eine Person steht doppelt | Sie wurde von Hand mit anderer E-Mail-Adresse angelegt. | Die von Hand angelegte Person stilllegen; der Abgleich fasst sie nicht an. |
