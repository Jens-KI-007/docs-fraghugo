---
title: Schulung der Geschäftsleitung (§ 38 Abs. 3 BSIG)
description: Personen einladen, Schulung absolvieren, Nachweis-Paket erzeugen — und was das BSI von der Dokumentation erwartet.
---

![Schulung der Geschäftsleitung](/screenshots/isms-nis2/gf-schulung.png)

§ 38 BSIG nimmt die Geschäftsleitung selbst in die Pflicht. Absatz 1: Sie muss die
Risikomanagement-Maßnahmen nach § 30 **umsetzen und ihre Umsetzung überwachen**.
Absatz 3: Sie muss **regelmäßig an Schulungen teilnehmen**, um Risiken und
Risikomanagementpraktiken erkennen und bewerten zu können und um deren Auswirkungen auf
die eigenen Dienste zu beurteilen.

:::note[Zum Wortlaut]
Die europäische NIS-2-Richtlinie spricht davon, die Maßnahmen zu „billigen". Das
deutsche BSIG verlangt mehr — umsetzen und überwachen. Wer Texte liest, die nur von
„billigen" sprechen, liest die Richtlinie, nicht das Gesetz.
:::

## Die Schulung

Acht Einheiten mit Video-Einstieg, Szenarien, einer Entscheidungsübung und zehn Fragen
zum Abschluss. Rund 45 Minuten, jederzeit unterbrechbar — der Stand wird gespeichert.
Bestehensgrenze 80 %.

Inhaltlich decken die Einheiten die drei Kompetenzen ab, die § 38 Abs. 3 nennt: Risiken
erkennen und bewerten, Risikomanagementpraktiken beurteilen, Auswirkungen auf die
eigenen Dienste einschätzen.

## Personen einladen

Unter *NIS2 → Schulung der Geschäftsleitung* verwalten Administratoren die Personen.
Je Person werden Name, E-Mail-Adresse und **Funktion** erfasst.

:::caution[Die Funktion ist keine Formalie]
Die BSI-Handreichung „Schulung für Geschäftsleitungen" (Version 1.0 vom 17.04.2026)
verlangt in der Dokumentation „Teilnehmende mit Name und Rolle oder Funktion". Fehlt
die Funktion, erscheint im Nachweis-Paket ein Hinweis darauf — die Lücke bleibt nicht
unbemerkt.
:::

Jede eingeladene Person bekommt eine eigene Zugangsmail mit Magic-Link und startet ohne
Passwort direkt im Modul. Ist jemand nach ein paar Tagen noch nicht fertig, gibt es je
Person einen Erinnern-Knopf — höchstens einmal am Tag.

Das Personen-Kontingent (im Standard fünf) wird **serverseitig** geprüft. Ist es
ausgeschöpft, erscheint statt der Einladung ein Hinweis mit dem Weg zum Nachkauf.

## Teilnahmebescheinigung

Nach bestandener Wissensprüfung lädt jede Person ihre **Teilnahmebescheinigung** als
PDF — mit Name, Organisation, Datum, Ergebnis, Nachweisnummer und QR-Code zur
Verifikation.

:::note[Warum nicht „Zertifikat"?]
Das BSIG sieht keine Anerkennung von Schulungsanbietern durch das BSI vor und schreibt
keine Prüfung vor. Was wir ausstellen können, ist eine Bescheinigung über die Teilnahme
— nicht über die Vermittlung ausreichender Kenntnisse und Fertigkeiten. Das BSI
schreibt diese Einschränkung selbst in seine Handreichung.
:::

## Nachweis-Paket

Sobald mindestens eine Person abgeschlossen hat, erzeugen Administratoren ein
Nachweis-Paket für die gesamte Organisation. Es ist nach den vier Angaben aufgebaut,
die die BSI-Handreichung nennt:

1. **Schulungsanbieter** oder interne Stelle
2. **Teilnehmende** mit Name und Funktion
3. **Datum, Uhrzeit und Dauer** der Schulungseinheiten
4. **Behandelte Inhalte** mit Bezug zu § 38 Abs. 3 BSIG

Dazu kommt ein Prüfwert (gekürzter SHA-256 über Nachweisnummern und Erstellungsdatum).
Er beweist nichts kryptografisch — er zeigt, ob zwei Ausdrucke denselben Stand haben.
Das steht auch so im Dokument.

## Ergänzung der Einrichtung

Das BSI erwartet zusätzlich einen **einrichtungsindividuellen Bezug**: kritische
Geschäftsprozesse, Governance-Struktur, aktuelle Risikolage Ihrer Einrichtung. Externe
Anbieter sollen ihre allgemeinen Inhalte um solche Angaben ergänzen lassen.

Dafür gibt es auf derselben Seite ein Textfeld „Ergänzung der Einrichtung". Was Sie dort
festhalten, erscheint als Punkt 4 im Nachweis-Paket. Bleibt es leer, steht im Dokument
ein Hinweis, dass dieser Teil fehlt.

Ein Beispiel, das genügt:

> Am 12.03.2026 hat die Geschäftsleitung mit der IT-Leitung die drei kritischen
> Geschäftsprozesse (ERP, Fertigungssteuerung, Kundenportal), die Zuständigkeiten im
> Notfall und die aktuelle Risikolage besprochen. Protokoll liegt unter
> Compliance/NIS2.

## Wiederholung

Das Gesetz nennt **kein Intervall und keine Dauer**. Das BSI empfiehlt eine ausführliche
Erstschulung und daran anschließende Folgeschulungen, ausgerichtet an Risikolage und
Änderungsanlässen. Ein jährlicher Rhythmus hat sich als Praxis etabliert und ist leicht
zu belegen.

Der Zugang der Schulung läuft zwölf Monate. 30 Tage vorher geht eine Erinnerung an die
Administratoren der Organisation; im Frist-Kalender sehen wir denselben Termin.

## Was passiert, wenn nicht geschult wird

Kein Bußgeld: **§ 38 steht nicht im Bußgeldkatalog des § 65 BSIG.** Die Zahl „10 Mio. €",
die dazu oft genannt wird, gehört zu anderen Verstößen — fehlende Maßnahmen nach § 30,
versäumte Meldungen nach § 32.

Folgenlos ist es trotzdem nicht. Es wirkt an zwei Stellen:

- **§ 38 Abs. 2 BSIG:** Wer die Pflichten aus Absatz 1 verletzt, haftet der eigenen
  Einrichtung für einen schuldhaft verursachten Schaden — nach den Regeln des
  Gesellschaftsrechts der jeweiligen Rechtsform.
- **§ 61 Abs. 1 BSIG:** Das Bundesamt kann anordnen, dass die Erfüllung der
  Verpflichtungen nach § 30 Abs. 1, § 32 und **ausdrücklich auch § 38 Abs. 3** durch
  unabhängige Stellen geprüft wird. Ohne Dokumentation gibt es dort nichts vorzulegen.

## Einzeln buchbar

Wer nur diesen Baustein braucht, kauft ihn einmalig für 199 € (netto) — für bis zu fünf
Personen, zwölf Monate Zugang, kein Abo. Enthalten in Hugo NIS2 Basis, Hugo ISMS und
den DSB-Tarifen Pro und Premium.
