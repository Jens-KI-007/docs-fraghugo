---
title: Prozessnachweis
description: Was im Nachweis-Paket steht, wie das Ereignisprotokoll mit seiner Hash-Kette funktioniert — und was ein solcher Nachweis belegt und was nicht.
---

Der Prozessnachweis ist das Dokument, das Sie vorlegen, wenn jemand wissen will, wie Sie mit
Schwachstellen und Meldungen tatsächlich umgehen. Sie erzeugen ihn unter
`/dsb/hersteller/richtlinien` mit **Nachweis-Paket erstellen** — für die ganze Organisation oder
für ein einzelnes Produkt.

## Was im Paket steht

| Abschnitt | Inhalt |
|---|---|
| **Produkte** | Stammdaten je Produkt: Rolle, Klasse, Mitgliedstaaten, Inverkehrbringen, Unterstützungszeitraum mit Begründung, Konformitätsweg, CE mit Ort der Anbringung |
| **Komponenten** | Stand der Software-Stückliste je Produktversion: Format, Importdatum, Zahl der Komponenten, Zahl der nicht überwachbaren Einträge |
| **Richtlinien** | Schwachstellen-Handhabungsrichtlinie, CVD-Policy und Meldeprozess mit Version, Stand und Freigabedatum |
| **Öffentliche Anlaufstelle** | Adresse der CVD-Seite, ausgewiesene Kontaktwege, Nachweis des nicht automatisierten Wegs |
| **Bereitschaft** | Rollenbesetzung, Erreichbarkeit außerhalb der Geschäftszeiten, Datum der letzten Testmail |
| **Fälle** | Je Fall: Fallart, Zeitpunkt des Hinweises, Zeitpunkt der Kenntnisfeststellung, Stufen mit Fälligkeit und Übermittlung, Sensibilitätseinschätzung, Information der Nutzer, Anhänge |
| **Ereignisprotokoll** | Die vollständige Kette, siehe unten |

Das Paket kommt als PDF mit Erstellungsdatum, erzeugender Person und Prüfwert. Die Anhänge —
Exporte, Bestätigungen der Meldeplattform, hochgeladene Dateien — liegen als Verzeichnis bei.

:::note[Das Paket ist nicht Ihre technische Dokumentation]
Die technische Dokumentation nach Art. 31 mit dem Inhalt aus Anhang VII ist ein eigenes Werk. Sie
wird **vor dem Inverkehrbringen** erstellt und zumindest während des Unterstützungszeitraums
laufend aktualisiert (Art. 31 Abs. 2). Der Prozessnachweis liefert dafür Bausteine — die
Software-Stückliste, das Konzept für die koordinierte Offenlegung, den Nachweis der Kontaktadresse
(Anhang VII Nr. 2 lit. b) — er ersetzt sie nicht.
:::

## Das Ereignisprotokoll und seine Hash-Kette

Jede Handlung im Bereich schreibt einen Eintrag: Produkt angelegt, SBOM importiert, Richtlinie
freigegeben, CVD-Seite veröffentlicht, Hinweis eingegangen, Kenntnis festgestellt, Stufe
ausgefüllt, als eingereicht markiert, Nutzer informiert, Testmail gesendet. Ein Eintrag trägt
Zeitpunkt, handelnde Person, Vorgang und die geänderten Werte.

Die Einträge hängen aneinander: Jeder enthält den Hashwert (SHA-256) des vorangehenden Eintrags.
Wird ein Eintrag nachträglich verändert oder herausgenommen, passt sein Hashwert nicht mehr zu dem,
was der folgende Eintrag gespeichert hat — die Kette bricht an dieser Stelle. Das Nachweis-Paket
prüft die Kette beim Erzeugen und schreibt das Ergebnis in die Kopfzeile: geprüft, Anzahl der
Einträge, erster und letzter Zeitpunkt.

## Was der Nachweis belegt — und was nicht

**Er belegt:**

- dass die Einträge seit ihrer Entstehung **in dieser Reihenfolge und unverändert** vorliegen,
- **wann** in Ihrem System etwas festgehalten wurde und **von wem**,
- dass zwischen Hinweis, Bewertung und Meldung ein nachvollziehbarer Ablauf lag — genau der Punkt,
  an dem die Frage nach der unverzüglichen Erstbewertung entschieden wird
  (Kommissionsleitlinie C(2026) 5252, Rn. 213),
- dass zwei Ausdrucke denselben Stand zeigen, wenn ihr Prüfwert übereinstimmt.

**Er belegt nicht:**

- **dass die Angaben inhaltlich richtig sind.** Wer einen falschen Zeitpunkt einträgt, bekommt
  eine unverfälschte Kette mit einem falschen Wert darin.
- **einen Zeitstempel gegenüber Dritten.** Die Zeiten stammen aus unserem System, nicht von einem
  qualifizierten Zeitstempeldienst. Es gibt keine Hinterlegung bei einer neutralen Stelle.
- **dass eine Meldung tatsächlich angekommen ist.** „Als eingereicht markieren" ist Ihre Erklärung.
  Der Empfangsnachweis kommt von der Meldeplattform; hängen Sie ihn am Fall an, dann steht er im
  Paket.
- **Konformität.** Kein Dokument aus dieser Anwendung ersetzt eine Konformitätsbewertung, eine
  notifizierte Stelle oder die EU-Konformitätserklärung, mit der Sie die Verantwortung für die
  Konformität übernehmen (Art. 28 Abs. 4).

## Wofür Sie ihn brauchen

Der wahrscheinlichste Anlass ist ein **begründetes Verlangen der Marktüberwachungsbehörde**. Die
Software-Stückliste ist ausdrücklich so geregelt: Sie geht auf begründetes Verlangen an die
Behörde, soweit sie zur Prüfung der Einhaltung erforderlich ist (Anhang VII Nr. 8). Ein geordnetes
Paket zu haben, verkürzt solche Vorgänge erheblich.

Der zweite Anlass ist Ihr Kunde. Wer an große Auftraggeber liefert, wird nach dem
Schwachstellenprozess gefragt, lange bevor eine Behörde fragt.

Ein dritter Zusammenhang, mit Zurückhaltung formuliert: Im künftigen Produkthaftungsrecht kann
das Gericht anordnen, dass der Beklagte relevante Beweismittel offenlegt. Nach der
Gesetzesbegründung betrifft das **nur bereits vorhandene Beweismittel** und schafft keine neuen
Dokumentationspflichten (BT-Drucksache 21/4297). Es ist also kein Argument, dass Sie
dokumentieren *müssen* — wohl aber eines dafür, dass Sie im Streitfall etwas vorzulegen haben.

## Wie oft

Erzeugen Sie das Paket, wenn es einen Anlass gibt — nach einem abgeschlossenen Meldefall, vor
einem Kundenaudit, bei einer Behördenanfrage. Ein monatlicher Ausdruck ohne Anlass bringt nichts:
Das Protokoll läuft ohnehin mit, und das Paket wird immer aus dem aktuellen Stand erzeugt.

Erzeugte Pakete bleiben in der Liste stehen, mit Datum, Prüfwert und der Person, die sie erstellt
hat. So lässt sich später zeigen, welcher Stand wem vorgelegt wurde.
