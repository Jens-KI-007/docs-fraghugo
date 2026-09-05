---
title: Fristen
description: Der Fristenkalender je Produkt, ICS-Export — und woher jeder Termin stammt. CRA, Produkthaftung, Data Act, Ende des Unterstützungszeitraums.
---

Der Kalender unter `/dsb/hersteller/fristen` sammelt alle Termine, die an Ihren Produkten hängen,
in einer Liste — sortiert nach Fälligkeit, gefiltert nach Produkt. Jeder Eintrag nennt seine
Herkunft, damit sich nachvollziehen lässt, warum er dasteht.

## ICS-Export

Der Knopf **Kalender exportieren** erzeugt eine `.ics`-Datei mit den Terminen der aktuellen
Ansicht. Sie importieren sie in Outlook, Google Kalender, Apple Kalender oder was Sie sonst
benutzen.

Der Export ist eine **Momentaufnahme**, kein laufendes Abonnement: Kommt später ein Produkt dazu
oder ändert sich ein Datum, exportieren Sie neu. Für Fristen aus einem laufenden Meldefall taugt
er nicht — die bestehen Stunden, nicht Monate. Die finden Sie auf der Startseite des Bereichs und
im Fall selbst.

## Woher die Termine kommen

### Aus dem Cyber Resilience Act

| Termin | Was er bedeutet | Fundstelle |
|---|---|---|
| **11.09.2026** | Die Meldepflichten des Art. 14 gelten. Sie erfassen auch Produkte, die vor dem 11.12.2027 in Verkehr gebracht wurden. | Art. 71 Abs. 2, Art. 69 Abs. 3 |
| **11.12.2027** | Der CRA gilt vollständig. Für Bestandsprodukte greift der übrige Pflichtenkatalog erst mit der nächsten wesentlichen Änderung. | Art. 71 Abs. 2, Art. 69 Abs. 2 |

Der erste Termin liegt in der Vergangenheit und steht trotzdem im Kalender — als Merkposten für
Produkte, die Sie später anlegen.

### Ende des Unterstützungszeitraums

Je Produkt aus dem [Produktregister](/hersteller-cra/produktregister/), mit Vorwarnung. Daran
hängen drei weitere Termine:

- **Hinweis an die Nutzer**, dass das Ende erreicht ist, soweit technisch machbar
  (Art. 13 Abs. 19).
- **Verfügbarkeit der Sicherheitsaktualisierungen**: mindestens zehn Jahre nach ihrer
  Bereitstellung, oder für den Rest des Unterstützungszeitraums, wenn dieser länger ist
  (Art. 13 Abs. 9).
- **Aufbewahrung** von technischer Dokumentation und EU-Konformitätserklärung: mindestens zehn
  Jahre, ebenfalls länger bei längerem Unterstützungszeitraum (Art. 13 Abs. 13).

:::caution[Das Ende des Unterstützungszeitraums beendet nicht die Meldepflicht]
Art. 14 gilt nach der Leitlinie der Kommission auch nach dem Ende des Unterstützungszeitraums
weiter — anders als die Pflichten zum Schwachstellenmanagement (C(2026) 5252, Rn. 210). Der
Kalender lässt den Merkposten deshalb stehen, statt das Produkt stillzulegen.
:::

### Aus der Produkthaftung

| Termin | Was er bedeutet |
|---|---|
| **09.12.2026** | **EU-Umsetzungsfrist** für die Richtlinie (EU) 2024/2853 über die Haftung für fehlerhafte Produkte (Art. 22 Abs. 1). |

Was dahintersteht, in der gebotenen Vorsicht:

- Die Richtlinie gilt für Produkte, die **nach dem 9. Dezember 2026 in Verkehr gebracht oder in
  Betrieb genommen** werden (Art. 2 Abs. 1). Für alles davor gilt das bisherige Recht weiter
  (Art. 21).
- **Software ist künftig ausdrücklich ein Produkt** im Sinne des Haftungsrechts, unabhängig von
  der Art der Bereitstellung; ausgenommen bleibt freie und quelloffene Software, die außerhalb
  einer Geschäftstätigkeit entwickelt oder bereitgestellt wird (Art. 4 Nr. 1, Art. 2 Abs. 2).
- Bei der Frage, ob ein Produkt fehlerhaft ist, zählen künftig auch sicherheitsrelevante
  **Cybersicherheitsanforderungen** mit. Und wer nach dem Inverkehrbringen die Kontrolle behält —
  etwa weil er Updates ausliefern kann —, kann sich nicht mehr darauf berufen, der Fehler habe
  beim Inverkehrbringen noch nicht vorgelegen, wenn er auf fehlende sicherheitsrelevante Updates
  zurückgeht (Art. 7 Abs. 2 lit. f, Art. 11 Abs. 2 der Richtlinie).

:::caution[Das deutsche Gesetz ist noch nicht verkündet]
Deutschland setzt die Richtlinie mit dem „Gesetz zur Modernisierung des Produkthaftungsrechts"
um. Der Regierungsentwurf liegt dem Bundestag seit dem 25. Februar 2026 vor
(BT-Drucksache 21/4297); die erste Lesung war am 4. März 2026, die Sachverständigen-Anhörung am
13. April 2026. Verabschiedet und verkündet ist das Gesetz nicht (Stand: 5. September 2026). Der
Entwurf sieht den 9. Dezember 2026 als Inkrafttreten vor — geltendes Recht wird das erst mit der
Verkündung.

Deshalb steht der Termin im Kalender als **EU-Umsetzungsfrist** und wird ausdrücklich **nicht** je
Bestandsprodukt gesetzt. Für Produkte, die vor dem Stichtag in Verkehr sind, ändert sich nichts.
:::

### Aus dem Data Act

| Termin | Was er bedeutet |
|---|---|
| **12.01.2027** | Ab diesem Tag dürfen Anbieter von Datenverarbeitungsdiensten **für den Vollzug eines Anbieterwechsels kein Entgelt mehr verlangen** (Art. 29 Abs. 1 der Verordnung (EU) 2023/2854). |

Nur das. Die Wechselrechte selbst — Kapitel VI, Art. 23 bis 31 — gelten bereits seit dem
12. September 2025 (Art. 50). Bis zum 11. Januar 2027 ist ein ermäßigtes Entgelt zulässig, das
die tatsächlichen Wechselkosten nicht übersteigen darf (Art. 29 Abs. 2 und 3).

Der Termin erscheint nur, wenn Sie selbst einen Datenverarbeitungsdienst anbieten. Er hängt nicht
am Produkt und nicht daran, ob Ihr Produkt Datenfernverarbeitung nutzt — das sind zwei
verschiedene Pflichten.

### Aus laufenden Fällen und Dokumenten

- **Meldefristen** aus offenen Fällen: 24 Stunden, 72 Stunden, 14 Tage beziehungsweise ein Monat.
  Sie stehen auf der Startseite des Bereichs und im Fall selbst, nicht im ICS-Export.
- **`Expires` Ihrer security.txt** — der Erneuerungstermin aus
  [Richtlinien, CVD und security.txt](/hersteller-cra/richtlinien-cvd-security-txt/).
- **Stand der Richtlinien**: eine jährliche Wiedervorlage je Dokument, damit der Prozessnachweis
  keine drei Jahre alten Stände zeigt.

## Wer benachrichtigt wird

Termine mit Vorwarnzeit gehen an die Personen, die in der
[Bereitschaft](/hersteller-cra/bereitschaft/) hinterlegt sind — Fristen aus laufenden Fällen an
die meldende Person und ihre Stellvertretung, alles andere an die Administratoren der
Organisation.
