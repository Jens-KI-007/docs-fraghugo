---
title: Anruf-Drills
description: Vishing- und Deepfake-Training im Browser — vier Minuten, verzweigte Szene, KI-Stimme. Kein echter Anruf, keine Aufzeichnung.
---

Betrug am Telefon ist die Lücke, die eine reine Mail-Simulation offen lässt. Wer eine gefälschte
E-Mail erkennt, erkennt deshalb noch lange keinen Anruf, in dem jemand unter Zeitdruck eine
Überweisung verlangt. **Anruf-Drills** trainieren genau diese Situation — als Übung im Browser.

Sie gehören zur **Programm-Stufe von Hugo Learn**. In der Standard-Stufe ist der Reiter sichtbar,
aber gesperrt; in der Free-Stufe erscheint er nicht. Sie finden ihn in der Anwendung unter
*Schulungen & Simulation → Anruf-Drills*.

## Was ein Drill ist

Eine vierminütige, verzweigte Audio-Szene. Das Telefon klingelt auf dem Bildschirm, eine
KI-generierte Stimme setzt unter Druck, die Person entscheidet zwischen zwei bis vier Reaktionen,
die Szene reagiert darauf. Am Ende steht die Auflösung: Ergebnis, die eigenen Entscheidungen mit
Erklärung, der sichere Weg und die Warnsignale, an denen der Anruf zu erkennen gewesen wäre.

| Es gibt | Es gibt nicht |
|---|---|
| Eine Szene im Webbrowser, Ton plus Untertitel | Keinen echten Telefonanruf |
| Eine generische, künstlich erzeugte Stimme | Keine nachgebildete Stimme einer echten Person |
| Gespeicherte Wahlentscheidungen mit Zeitpunkt | Keinen Mikrofonzugriff, keine Aufzeichnung |
| Ein Ergebnis zwischen 0 und 100 | Keine Telefonnummer der Beschäftigten |

Das ist keine Sparversion, sondern eine bewusste Entscheidung — die Begründung steht weiter unten unter
[„Warum kein echter Anruf?“](#warum-kein-echter-anruf).

## Wie eine Übung abläuft

Die Beschäftigten sehen nacheinander vier Bildschirme:

1. **Vorbereitung.** Name Ihrer Organisation, die ungefähre Dauer und drei Hinweise: dass die
   Stimme künstlich erzeugt ist, dass nichts aufgezeichnet wird und dass Untertitel mitlaufen.
   Erst ein Klick auf *Übung starten* beginnt.
2. **Eingehender Anruf.** Eine Karte im Telefonformat mit der Anrufer-Anzeige (etwa
   „Geschäftsführung“) und dem Vermerk „Unterdrückt“ statt einer Nummer. Zwei Schaltflächen:
   *Annehmen* und *Ablehnen*. Auch das Ablehnen ist eine Entscheidung; die Szene läuft danach
   weiter, weil echte Anrufer es ein zweites Mal versuchen.
3. **Gespräch.** Der Ton spielt, der Untertitel steht daneben, danach kommen die
   Wahlmöglichkeiten als große Schaltflächen. Es läuft keine Uhr. Der Ton lässt sich anhalten und
   noch einmal abspielen.
4. **Auflösung.** „Das war eine Übung“, dazu das Ergebnis, jede getroffene Entscheidung mit
   Einordnung und Begründung, der sichere Weg als nummerierte Liste und die Warnsignale.

Fällt die Tonspur aus, läuft die Übung als Text weiter. Inhaltlich ändert sich dadurch nichts —
der Untertitel ist derselbe Text, den die Stimme spricht.

## Wie bewertet wird

Jede Wahlmöglichkeit trägt ein Gewicht. Der Punktwert wird auf dem Server gerechnet, nie im
Browser: Die Gewichte stehen gar nicht in dem, was der Browser bekommt, sonst könnte man die
richtige Antwort vor der Entscheidung ablesen.

| Wahl | Punkte |
|---|---|
| sicher | +2 |
| vertretbar (neutral) | 0 |
| riskant | −2 |
| gefährlich (kritisch) | −4 |

Die Summe wird auf eine Spanne von 0 bis 100 umgerechnet, damit sich Szenarien untereinander
vergleichen lassen. **Ab 70 gilt eine Runde als bestanden.**

Am Szenario „Dringende Überweisung an einen neuen Lieferanten“ sieht das so aus:

| Weg durch die Szene | Ergebnis |
|---|---|
| Zweimal die sichere Antwort | 100, bestanden |
| Einmal sicher, einmal vertretbar | 75, bestanden |
| Zweimal vertretbar | 50, nicht bestanden |
| Gleich zu Beginn die gefährliche Antwort (die Szene endet dort) | 0, nicht bestanden |

**Ein Abbruch ergibt kein Ergebnis, nicht null Punkte.** Wer die Seite mitten in der Übung
schließt, wird als „abgebrochen“ vermerkt und geht nicht als schlechtes Ergebnis in die
Auswertung ein. Das ist ein wichtiger Unterschied für die Betriebsvereinbarung.

Ein abgeschlossener Drill zählt in den **Resilienz-Index** mit — dieselbe Kennzahl, die auch die
Mail-Simulation speist. Ein Index, nicht zwei.

## Eine Drill-Welle planen

Im Reiter *Anruf-Drills* führt die Schaltfläche **Drill-Welle planen** durch ein kurzes Formular:

1. **Name der Welle** — frei wählbar, taucht in der Auswertung wieder auf.
2. **Szenario** — zur Auswahl stehen nur Szenarien, die freigegeben *und* vertont sind. Ist noch
   keines so weit, ist die Schaltfläche gesperrt und ein Hinweis erklärt, warum.
3. **Zeitraum** von/bis. Die Einladungen werden über die Arbeitstage in diesem Fenster verteilt,
   genau wie bei den Mail-Kampagnen — nicht alle auf einmal.
4. **Sicherheitsschalter** (voreingestellt an). Die Welle wird vollständig vorbereitet, aber es
   geht keine Mail raus. So lässt sich alles ansehen, bevor es läuft. Zum Starten den Schalter
   ausschalten.
5. **Pflichtbestätigung zur Betriebsvereinbarung.** Ohne Häkchen legt das Formular keine Welle an.

> **Die Bestätigung ist kein Hinweis, den man wegklickt.**
> § 87 Absatz 1 Nummer 6 BetrVG erfasst „Einführung **und** Anwendung“. Ein neuer Kanal mit einer
> neuen Datenart und einer neuen Bewertung ist ein **eigener** mitbestimmungspflichtiger Vorgang.
> Eine Betriebsvereinbarung, die nur simulierte E-Mails nennt, deckt Anruf-Drills **nicht** ab.
> Deshalb verlangt das Formular eine ausdrückliche Bestätigung. Den passenden Text finden Sie im
> Rechtspaket unter *Nachweis* als **§ 4a**.

### Die Einladungsmail

Die Einladung ist **keine Simulation**, sondern eine ehrliche Ankündigung. Betreff:
„Sicherheitsübung: 4 Minuten“. Als Absendername steht Ihre Organisation, die Adresse ist eine
neutrale Einladungsadresse — bewusst **keine** Simulations-Domain. Die Mail enthält kein
Zählpixel und keinen Köder.

Das hat einen Messgrund: Wäre schon die Einladung getarnt, würden zwei Dinge gleichzeitig
gemessen, und am Ende ließe sich nicht sagen, worauf jemand hereingefallen ist. Die Täuschung
steckt im Anruf, nicht in der Mail.

Im Text steht bereits, was in der Übung gilt: dass niemand anruft, dass die Stimme künstlich ist,
dass das Mikrofon aus bleibt und dass Einzelergebnisse nicht an Vorgesetzte gehen.

## Der Nachfolge-Drill nach einem Klick

Klick, dann Anruf — so läuft die reale Angriffskette. Deshalb lässt sich in einer **Mail-Welle**
ein Anruf-Drill hinterlegen. Wer dann auf den Link in der Testmail klickt, landet nicht auf der
Lernseite, sondern direkt in der Übung zum selben Vorwand.

Zwei Dinge dazu:

- Es zählt nur ein **menschlicher** Klick. Sicherheitsscanner in Ihrem Mailgateway lösen keine
  Übung aus und erzeugen keine Zahl.
- Klickt dieselbe Person ein zweites Mal, bekommt sie dieselbe Übung, keine neue Sitzung.

Der Nachfolge-Drill wird beim Anlegen der Mail-Welle ausgewählt. Für die Betriebsvereinbarung
gilt dasselbe wie oben: Es bleibt ein Anruf-Drill, auch wenn er aus einer Mail-Kampagne heraus
startet.

## Auswertung und Anonymität

Der Reiter zeigt fünf Kennzahlen: eingeladen, gestartet, abgeschlossen, bestanden und das
durchschnittliche Ergebnis. Darunter die Verteilung der Ergebnisse in Fünfteln (0–20, 21–40 …)
und die Liste **„Häufigste riskante Entscheidungen“**.

> **Werte erscheinen erst ab fünf abgeschlossenen Runden.** Darunter steht „—“.

Das ist keine Formalie. Ein Drill misst, wie eine einzelne Person unter Druck entscheidet. Bei
drei Teilnehmenden in einer Abteilung ist jeder Durchschnittswert eine Personenauskunft, auch
ohne Namen. Dieselbe Schwelle gilt für die Liste der riskanten Entscheidungen: Eine Antwort, die
drei Personen gegeben haben, wird nicht ausgewiesen.

Die Liste zählt außerdem **Antworten, nicht Personen**. „Acht von zwölf haben ohne Rückruf
freigegeben“ ist die Information, aus der eine Schulung entsteht. Sie ist nicht die Information,
aus der ein Personalgespräch entsteht.

Die Drill-Zahlen erscheinen zusätzlich im **Nachweis** (*Nachweis & Berichte*) als eingeladen,
abgeschlossen, bestanden und Durchschnitt. Beschäftigte sehen ihre eigenen Ergebnisse unter
*Mein Stand* — das ist zugleich die Auskunft nach Art. 15 DSGVO.

## Die Szenarien

Mitgeliefert werden **15 Szenarien** — zwölf deutsche und drei englische — in drei
Schwierigkeitsgraden:

| Szenario | Anrufer | Schwierigkeit |
|---|---|---|
| Dringende Überweisung an einen neuen Lieferanten | Geschäftsführung | mittel |
| Der IT-Support will Ihr Passwort | IT-Support | leicht |
| Die Bank meldet ein gesperrtes Konto | Betrugsabwehr der Hausbank | mittel |
| Ein Lieferant meldet eine neue Bankverbindung | Buchhaltung eines Lieferanten | schwer |
| Eine Behörde droht mit Kontopfändung | Vollstreckungsstelle | mittel |
| Angeblicher Microsoft-Support wegen Virusmeldung | Technischer Support | leicht |
| Paketdienst braucht Zolldaten und eine Gebühr | Paketzustellung | leicht |
| Die Personalabteilung fragt Gehalts- und Kontodaten ab | Personalabteilung | mittel |
| Rückruf auf eine Nummer aus einer E-Mail | Abo-Service | schwer |
| Freigabe aus einer Videokonferenz, die es nie gab | Bereichsleitung Finanzen | schwer |
| Geschäftspartner braucht sofort Unterlagen | Geschäftspartner | mittel |
| Der neue Kollege braucht schnell einen Zugang | interner Anruf | schwer |

Dazu auf Englisch: *Urgent transfer to a new supplier*, *The IT helpdesk asks for your password*,
*A supplier reports new bank details*.

Jedes Szenario bringt seine eigenen **Warnsignale** mit, die in der Auflösung erscheinen — beim
CEO-Fraud etwa die unterdrückte Nummer trotz bekannter Durchwahl, die Uhrzeit als Frist, die
Bitte, die Buchhaltung außen vor zu lassen, und ein Empfängerkonto, das im Stammdatensatz gar
nicht steht.

### Bearbeiten und freigeben

In der Liste *Szenarien* steht zu jedem Eintrag der Anrufer, die Schwierigkeit, die Dauer, die
Sprache und zwei Zustände: **Ton bereit / Ton wird erzeugt / Ton fehlgeschlagen / kein Ton** und,
falls zutreffend, **wartet auf Freigabe**.

Der Ablauf dahinter:

1. Ein Szenario entsteht oder wird geändert. Neue Sprachszenarien starten grundsätzlich im
   Zustand *wartet auf Freigabe* — anders als Mail-Vorlagen, die als freigegeben angelegt werden.
   Ein gesprochener Text muss gelesen worden sein, bevor er an Beschäftigte geht.
2. **Erst die Freigabe erzeugt den Ton.** Nicht das Speichern. Ohne diese Trennung wäre jeder
   Entwurf ein Auftrag an die Sprachsynthese und jede Kommakorrektur kostete Geld.
3. Die Vertonung läuft je Szene-Abschnitt und legt die Dateien in einem privaten Speicher ab.
   Ausgeliefert werden sie nur über kurzlebige, signierte Adressen — es gibt keine öffentlich
   erreichbare Audiodatei.
4. **Eine Änderung am Skript macht den alten Ton ungültig.** Das Szenario geht zurück auf
   *Ton wird erzeugt*. Andernfalls liefe die Übung mit einem Ton, der etwas anderes sagt als der
   Untertitel, und niemandem fiele es auf.

Die Szenario-Bibliothek pflegt die frag.hugo-Redaktion. In Ihrer Organisation sehen Sie den
Bestand und seinen Zustand; Bearbeitung und Freigabe laufen redaktionell, damit kein
ungeprüfter gesprochener Text in Umlauf kommt.

## Was es kostet

**Nichts zusätzlich.** Anruf-Drills sind in der Programm-Stufe von Hugo Learn enthalten. Es gibt
keinen eigenen Preis, keine Abrechnung je Übung und keine Minutenkosten — es wird ja auch nicht
telefoniert. Die Vertonung fällt einmalig je Szenario an und wird von frag.hugo getragen.

Partner-Mandanten in der Programm-Stufe bekommen Drills automatisch; an der Abrechnung ändert
sich nichts.

## Warum kein echter Anruf?

Andere Anbieter rufen wirklich an — automatisiert, über einen Telefonieanbieter. Technisch ließe
sich das bauen. Wir tun es bewusst nicht, aus vier Gründen:

1. **Ein Testanruf braucht eine Telefonnummer.** Bei Beschäftigten ist das oft die private. Sie zu
   erheben und für eine Übung zu verwenden ist ein eigener Eingriff — einer, der sich schwerer
   rechtfertigen lässt als die Übung selbst.
2. **Ein Telefonieanbieter ist ein weiterer Auftragsverarbeiter.** Mit Vertrag, Verzeichniseintrag
   und eigener Prüfung. Für dieselbe Lernwirkung.
3. **Der Betriebsrat bekommt eine zweite, schwierigere Diskussion.** Ein Anruf auf dem
   Diensthandy in der Mittagspause ist etwas anderes als ein Link, den man aufmacht, wenn man Zeit
   hat.
4. **Die Lernwirkung hängt nicht am Kanal.** Was die Person üben soll, ist die Entscheidung unter
   Druck — und die Entscheidung ist in der Browser-Szene dieselbe. Was der echte Anruf zusätzlich
   liefert, ist Überraschung, nicht Erkenntnis.

Dazu kommt: Im Browser lässt sich verzweigen. Die Szene reagiert auf die Antwort und erhöht den
Druck. Ein automatisierter Anruf spielt eine Ansage ab.

## Betriebsrat

Für Anruf-Drills gelten dieselben Regeln wie für die
[Mail-Simulation](/hugo-phish/betriebsrat/) — und zusätzlich zwei Dinge.

**Erstens: eigene Zustimmung.** Siehe oben. Eine bestehende Betriebsvereinbarung zur
Phishing-Simulation reicht nicht, wenn sie nur E-Mails nennt. Das Rechtspaket enthält den
Abschnitt **§ 4a Anruf-Drills (Vishing- und Deepfake-Übungen)** zum Übernehmen.

**Zweitens: die fünf Punkte, die im Gespräch immer kommen.**

- Es wird nichts aufgezeichnet — kein Mikrofonzugriff, keine Stimme der Person. Im Programmcode
  kommt der Aufruf, mit dem ein Browser aufs Mikrofon zugreift, gar nicht vor.
- Gespeichert werden die Wahlentscheidungen und der Zeitpunkt, sonst nichts.
- Abteilungswerte erscheinen erst ab fünf abgeschlossenen Runden.
- Eine abgebrochene Runde ergibt kein Ergebnis, nicht null Punkte.
- **Keine arbeitsrechtlichen Folgen.** Wer nicht besteht, bekommt zusätzliche Schulung, nie eine
  Meldung an Vorgesetzte.

Die Muster-Dokumente sind Vorlagen und ersetzen keine Rechtsberatung. Stimmen Sie sie
betriebsindividuell ab.

## Rechtsgrundlage und KI-Kennzeichnung

**Rechtsgrundlage** ist Art. 6 Abs. 1 UAbs. 1 lit. f DSGVO — das berechtigte Interesse an der
Informationssicherheit, konkretisiert durch die Pflicht aus Art. 32 Abs. 1 DSGVO. Eine
Betriebsvereinbarung tritt als Kollektivvereinbarung nach Art. 88 DSGVO hinzu.

Auf **§ 26 Abs. 1 Satz 1 BDSG stützen wir uns bewusst nicht.** Der Europäische Gerichtshof hat
entschieden, dass eine nationale Norm keine eigene Rechtsgrundlage schafft, wenn sie die Vorgaben
des Art. 88 Abs. 2 DSGVO nicht erfüllt (EuGH, Urteil vom 30.03.2023, C-34/21). Das
Bundesarbeitsgericht hat § 26 Abs. 1 Satz 1 BDSG daraufhin für unanwendbar erklärt (BAG, Urteil
vom 08.05.2025 – 8 AZR 209/21).

**KI-Kennzeichnung:** Art. 50 Absatz 5 der Verordnung (EU) 2024/1689 verlangt den Hinweis
spätestens zum Zeitpunkt der ersten Interaktion, klar erkennbar und barrierefrei. Er steht
deshalb an drei Stellen und immer als Text, nicht als Symbol: auf dem Vorbereitungsbildschirm,
als Kennzeichnung „KI-Stimme · Übung“ während des Gesprächs und in der Auflösung. Die Vorschrift
gilt seit dem 02.08.2026; eine Ausnahme für interne Schulungen gibt es nicht.

**Keine Stimmklone.** Wir bilden die Stimme einer echten Führungskraft nicht nach — auch nicht
mit deren Einwilligung. Der Grund ist weniger juristisch als praktisch: Die Einwilligung der
Führungskraft deckt nicht die Täuschung derjenigen, die den Anruf hören.

**NIS2:** § 30 Abs. 2 Nr. 7 BSIG verlangt „grundlegende Schulungen und
Sensibilisierungsmaßnahmen im Bereich der Sicherheit in der Informationstechnik“. Anruf-Drills
sind Schulung in diesem Sinn. Eine Vorschrift, die Phishing- oder Anruftests **fordert**, gibt es
nicht — weder im BSIG noch anderswo. Wer Ihnen das erzählt, zitiert etwas, das nicht existiert.

## Löschfrist

Personenbezogene Drill-Ergebnisse werden nach **zwölf Monaten** gelöscht. Die Frist ist je
Programm einstellbar zwischen einem und 24 Monaten.

Gelöscht wird die **ganze Zeile samt Ereignissen** — nicht nur der begangene Weg. Der Punktestand
ist selbst personenbezogen: „Person X hat 33 von 100 erreicht“ ist eine Bewertung des Verhaltens
einer bestimmten Person. Den Weg zu löschen und die Note zu behalten wäre keine Löschung, sondern
sähe nur so aus.

Bevor gelöscht wird, fasst die Plattform die Welle **personenfrei** zusammen. Diese
Zusammenfassung bleibt — sonst hätten Sie am Jahresende keine Zahl mehr, mit der Sie den
Fortschritt belegen können.

Zwölf Monate sind eine Hausregel, keine gesetzliche Vorgabe: Für Verhaltensdaten aus
Awareness-Übungen gibt es keine Frist einer Aufsichtsbehörde. Zwölf Monate decken den
Jahresvergleich ab — den einzigen fachlichen Grund, die Daten überhaupt aufzubewahren.

## Verwandte Seiten

- [Phishing-Simulation](/schulungen/phishing-simulation/) — der Mail-Kanal
- [Hugo Phish: Betriebsrat & Datenschutz](/hugo-phish/betriebsrat/) — Anonymitätsstufen und Muster
- [Hugo Phish: Berichte & Nachweis](/hugo-phish/berichte/) — wo die Drill-Zahlen auftauchen
- [Für Mitarbeiter: Anruf-Drill](/fuer-mitarbeiter/anruf-drill/) — die Seite zum Weitergeben
