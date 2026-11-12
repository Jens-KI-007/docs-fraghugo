---
title: Google Workspace verbinden
description: "Mitarbeitende automatisch aus Google Workspace übernehmen: Voraussetzungen, Delegierung in der Google-Admin-Konsole eintragen, Domain und Administrator angeben, Vorschau, Einstellungen, Trennen, häufige Fehler."
sidebar:
  order: 9
---

Mit der Google-Workspace-Anbindung kommen die Konten Ihrer Google-Domain von selbst in Hugo: Neue erscheinen,
gesperrte und archivierte Konten werden stillgelegt, geänderte Namen und Abteilungen ziehen nach. Hugo liest dabei
nur, und bei uns liegt kein Kennwort und kein Schlüssel von Ihnen.

Sie finden die Anbindung auf der Seite **Personal-Abgleich** (`app.fraghugo.de/team/abgleich`) in der Karte
**Google Workspace**. Einen Überblick über alle Quellen gibt die Seite [Personal-Abgleich](/schulungen/personal-abgleich/).

<img src="/screenshots/schulungen/google-1-anleitung.webp" alt="Karte „Google Workspace“ mit der Kennzeichnung „Neu“, drei nummerierten Schritten, den Werten „Client-ID“ und „Bereich“ mit je einem Knopf „Kopieren“ und den Feldern „Domain“ und „E-Mail-Adresse eines Administrators“" width="1072" height="609" loading="lazy" />

## Voraussetzungen

- **Ein Super-Administrator Ihrer Google-Domain** für den ersten Schritt. Nur ein Super-Administrator kann in der
  Google-Admin-Konsole eine domainweite Delegierung eintragen.
- **Die Adresse eines Administrators, der die Nutzer Ihrer Domain sehen darf.** In seinem Namen liest Hugo die
  Nutzerliste. Ein Super-Administrator ist dafür nicht nötig.
- In Hugo ein bezahlter Tarif, der Mitarbeitende verwaltet: Hugo Learn Standard oder Programm (auch als Teil eines
  Datenschutz-Tarifs oder einer Suite) oder Hugo Safe Basis oder Komplett. In den kostenlosen Stufen gibt es die
  Anbindung nicht.
- In Hugo die Rolle Hauptadministrator oder das Recht, Schulungen zu verwalten.

## Schritt für Schritt

### 1. Delegierung in der Google-Admin-Konsole eintragen

1. Melden Sie sich als Super-Administrator unter `admin.google.com` an.
2. Öffnen Sie **Sicherheit → Zugriffs- und Datenkontrolle → API-Steuerung → Domainweite Delegierung**
   (englisch: *Security → Access and data control → API controls → Manage Domain Wide Delegation*).
3. Klicken Sie auf **Neu hinzufügen**.
4. Tragen Sie die **Client-ID** ein, die Hugo auf der Karte zeigt (eine Zahl, Knopf **Kopieren**).
5. Tragen Sie unter **OAuth-Bereiche** genau diesen einen Bereich ein (Knopf **Kopieren**):
   `https://www.googleapis.com/auth/admin.directory.user.readonly`
6. Klicken Sie auf **Autorisieren**.

Der Bereich erlaubt nur das Lesen der Nutzerliste. Hugo kann damit nichts ändern, keine Mails lesen und keine Dateien
sehen. Bis Google die Delegierung überall kennt, können einige Minuten vergehen.

### 2. Domain und Administrator in Hugo eintragen

Tragen Sie in der Karte Ihre **Domain** (zum Beispiel `ihre-firma.de`) und die **E-Mail-Adresse eines
Administrators** ein und klicken Sie auf **Verbindung prüfen**. Hugo liest die Nutzerliste einmal und zeigt, wie viele
Konten es gefunden hat. Gespeichert wird dabei noch nichts.

<img src="/screenshots/schulungen/google-3-geprueft.webp" alt="Karte „Google Workspace“ nach der Prüfung mit der Pille „Geprüft“, dem Satz „9 Konten gefunden“, „7 aktiv, 2 gesperrt oder archiviert“ und dem Knopf „Verbinden und Vorschau ansehen“" width="1072" height="701" loading="lazy" />

### 3. Vorschau ansehen und abgleichen

Mit **Verbinden und Vorschau ansehen** speichert Hugo die Verbindung und zeigt, was sich in Ihrer Mitarbeiterliste
ändern würde: wer neu dazukommt, wessen Angaben sich ändern, wer stillgelegt würde und wer übersprungen wird. Noch ist
nichts geändert. Erst **Abgleich starten** übernimmt die Änderungen.

<img src="/screenshots/schulungen/google-4-vorschau.webp" alt="Vorschau „erster Abgleich mit Google Workspace“ mit vier Zahlen (neu, geändert, werden stillgelegt, übersprungen), einer aufgeklappten Liste der neuen Personen, den Einstellungen und dem Knopf „Abgleich starten“" width="1184" height="900" loading="lazy" />

Danach steht die Karte auf **Verbunden** mit Zeitpunkt und Zahlen des letzten Abgleichs. Hugo gleicht einmal jede
Nacht von selbst ab; mit **Jetzt abgleichen** geht es sofort.

<img src="/screenshots/schulungen/google-5-verbunden.webp" alt="Karte „Google Workspace“ im Zustand „Verbunden“ mit Domain, letztem Abgleich, Zahl der Konten, Ergebnis und den Knöpfen „Jetzt abgleichen“, „Vorschau“ und „Trennen“" width="1072" height="400" loading="lazy" />

## Was der Abgleich tut

- **Neue Konten** legt Hugo als Mitarbeitende ohne Konto in Hugo und ohne Mail an. Eine Einladung bekommen sie erst,
  wenn Sie ihnen eine Schulung oder Unterweisung zuweisen, oder automatisch, wenn Sie das einschalten.
- **Gesperrte oder archivierte Konten** und Konten, die es in Google nicht mehr gibt, werden stillgelegt, nie gelöscht.
  Ihre Nachweise bleiben in Hugo.
- **Name, Adresse und Abteilung** (aus den Organisationsangaben des Kontos) ziehen nach.
- Ein Konto wird über seine Kennung in Google erkannt. Ändert sich die Adresse, entsteht deshalb keine zweite Person.
- Ein Eintritts- oder Austrittsdatum kennt Google Workspace nicht; es zählt der Stand des Kontos.

## Einstellungen

Die Einstellungen stehen unter der Vorschau und in der verbundenen Karte unter **Einstellungen**:

| Einstellung | Vorgabe | Wirkung |
|---|---|---|
| Ausgeschiedene automatisch stilllegen | an | Gesperrte, archivierte und fehlende Konten werden stillgelegt. |
| Neue Mitarbeitende automatisch einladen | aus | Bis zu 20 neue Personen je Lauf bekommen eine Einladung per E-Mail. |
| Abteilungen nicht übernehmen | keine | Konten dieser Abteilungen kommen nicht in Hugo. |
| Organisationseinheiten nicht übernehmen | keine | Konten dieser Einheiten und aller Unter-Einheiten kommen nicht in Hugo und werden nie stillgelegt, etwa Funktionspostfächer oder Testkonten. |

## Trennen

**Trennen** beendet den Abgleich. Ihre Mitarbeitenden und alle Nachweise bleiben in Hugo. Die Delegierung bleibt in
Ihrer Google-Admin-Konsole stehen, bis Sie sie dort unter **Domainweite Delegierung** löschen. Wir empfehlen, sie
nach dem Trennen zu entfernen.

## Datenschutz

Hugo liest je Konto nur Kennung, Name, Adresse, Abteilung, Organisationseinheit und ob das Konto gesperrt oder
archiviert ist. Kennwörter, Mails, Kalender, Dateien und Anmeldedaten liest Hugo nicht. Bei uns liegt kein Schlüssel
von Ihnen; der Zugriff hängt allein an der Delegierung, die Sie jederzeit selbst entfernen können.

## Häufige Fehler

<img src="/screenshots/schulungen/google-2-fehler.webp" alt="Karte „Google Workspace“ mit dem Fehlerkasten „Delegierung fehlt“ und dem Satz „Die Delegierung ist in Ihrer Google-Admin-Konsole noch nicht eingetragen oder der Bereich stimmt nicht.“" width="1072" height="704" loading="lazy" />

| Was Sie sehen | Ursache | Lösung |
|---|---|---|
| „Delegierung fehlt“ | Die Client-ID ist in der Admin-Konsole nicht eingetragen, der Bereich ist anders geschrieben oder Google kennt die Delegierung noch nicht. | Schritt 1 prüfen: genau die Client-ID und genau den einen Bereich eintragen; nach einigen Minuten erneut prüfen. |
| „Administrator-Adresse passt nicht“ | Die Adresse gehört keinem Konto Ihrer Domain oder das Konto darf die Nutzer nicht sehen. | Die Adresse eines Administrators Ihrer Domain eintragen. |
| „Domain nicht gefunden“ | Tippfehler oder eine Domain, die nicht zu Ihrem Google-Konto gehört. | Die Hauptdomain eintragen, so wie sie in der Admin-Konsole steht. |
| „Google antwortet gerade nicht“ | Google ist kurz nicht erreichbar. | Später erneut versuchen; der Nachtlauf versucht es von selbst. |
| Ein Funktionspostfach erscheint als Person | Auch Funktionspostfächer sind in Google Nutzerkonten. | Die Organisationseinheit ausschließen oder die Person in Hugo stilllegen. |

## Verwandte Seiten

- [Personal-Abgleich](/schulungen/personal-abgleich/) — alle Quellen im Vergleich.
- [Personio verbinden](/schulungen/personio/)
- [Microsoft 365 verbinden](/schulungen/m365-integration/)
- [Mitarbeitende verwalten](/schulungen/mitarbeiter/)
