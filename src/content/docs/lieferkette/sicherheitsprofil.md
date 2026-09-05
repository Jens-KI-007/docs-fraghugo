---
title: Sicherheitsprofil
description: Eine Adresse, an der Ihre Auftraggeber die immer gleichen Sicherheitsfragen beantwortet finden — aus den Daten, die Sie ohnehin in der Plattform pflegen. Vier Sichtbarkeitsstufen, maschinenlesbar als JSON.
---

Wer als Zulieferer arbeitet, kennt den Vorgang: Der Einkauf eines Auftraggebers schickt einen
Sicherheitsfragebogen, drei Wochen später schickt ein anderer Auftraggeber einen ähnlichen, und
beide fragen im Kern dasselbe — wer bei Ihnen für Datenschutz zuständig ist, ob Sie ein
Zertifikat haben, wie Sie eine Datenpanne melden, ob Ihre Beschäftigten geschult werden.

Das **Sicherheitsprofil** beantwortet diese Fragen einmal, an einer Adresse, aus den Daten, die
Sie ohnehin in der Plattform pflegen. Sie entscheiden, wer es sehen darf.

## Wo Sie es finden

| Was | Adresse |
|---|---|
| Editor | Anwendung unter *Lieferkette → Sicherheitsprofil* (`app.fraghugo.de/shield/profil`) |
| Öffentliche Seite | `app.fraghugo.de/profil/<adresse>` |
| Maschinenlesbar | `app.fraghugo.de/profil/<adresse>.json` |

Die Adresse ist die Kurzbezeichnung Ihrer Organisation — dieselbe, die auch Ihr Meldeportal
verwendet. Sie lässt sich im Editor ändern, solange sie nicht schon vergeben ist.

Das Profil gehört zum Bereich Lieferkette, ist aber **nicht an Hugo Shield gebunden**: Auch wer
nur die Datenschutz-Suite oder Hugo ISMS gebucht hat, ist Zulieferer eines anderen Unternehmens.
Verfügbar ist es ab **Datenschutz-Suite Standard**, in **jeder ISMS-Stufe**, in **Hugo Shield ab
Premium** sowie mit **Hugo KI**, **Hugo NIS2 Basis** und **Hugo Hersteller**.

## Woher die Angaben kommen

Das Profil erfindet nichts. Es liest einen **Faktenbestand**: kurze, einzeln belegte Aussagen, die
aus Ihren bereits gepflegten Modulen entstehen.

| Quelle | Was daraus wird |
|---|---|
| [TOMs](/datenschutz/toms/) | „Zugriffskontrolle: Mehr-Faktor-Anmeldung für alle Administratorkonten" — Titel und Kurztext je Maßnahme |
| [Verarbeitungsverzeichnis](/datenschutz/vvt/) | Zwecke und Datenkategorien als Übersicht, ohne Betroffene und ohne Inhalte |
| [Auftragsverarbeiter](/datenschutz/avv/) | Name, Leistung und ob ein Drittland betroffen ist |
| [Löschkonzept](/datenschutz/loeschkonzept/) | Aufbewahrungs- und Löschfristen je Datenart |
| [ISMS-Richtlinien](/isms-nis2/richtlinien/) | nur die Titel der in Kraft gesetzten Richtlinien |
| [ISMS-Maßnahmen](/isms-nis2/massnahmen/) | Umsetzungsstand je Maßnahme |
| Zertifikate | Norm, Aussteller, Geltungsbereich, Gültigkeit |
| [Schulungsnachweis](/schulungen/hugo-learn/) | Schulungsquote und Meldequote aus Simulationen |
| [KI-Register](/ki-compliance/ki-register/) | eingesetzte KI-Systeme mit Risikoeinstufung |
| [Produktregister](/hersteller-cra/produktregister/) | Unterstützungszeitraum und Meldeseite für Schwachstellen |
| [Website-Prüfung](/website-it-sicherheit/scan-uebersicht/) | Datum und Ergebnis der letzten Prüfung |

Der Faktenbestand wird **nächtlich um 02:40 UTC** neu gebaut. Wer nicht bis zum nächsten Morgen
warten will, drückt im Editor **„Fakten aktualisieren"** — das geht **einmal je fünf Minuten**,
weil sich die zugrunde liegenden Module nicht schneller ändern.

:::note[Von Hand ergänzte Aussagen überleben den Neubau]
Nicht alles steht in einem Modul. Wenn Sie im Fragebogen-Modul unter *Nachweis ergänzen* eine
Tatsache als Satz erfassen — „Wiederherstellungstests der Sicherungen erfolgen halbjährlich" —,
wird sie Teil desselben Faktenbestands und **bleibt beim nächtlichen Neubau erhalten**. Siehe
[Fragebögen beantworten](/lieferkette/fragebogen-beantworten/).
:::

Zwei Regeln, die man kennen sollte, weil sie erklären, warum eine Angabe **nicht** im Profil
auftaucht:

- **Eine Maßnahme im Zustand „noch nicht bewertet" erzeugt keine Aussage.** Sie würde im
  Fragebogen als „haben wir nicht" gelesen — und das ist etwas anderes als „haben wir noch nicht
  angesehen". Bewerten Sie die Maßnahme, dann erscheint sie.
- **Wo eine Prüfung eine Selbsteinschätzung korrigiert hat, gilt die Korrektur.** Hat Ihre
  Betreuung einen Reifegrad heruntergestuft, geht dieser Wert ins Profil, nicht die ursprüngliche
  Selbsteinschätzung. Andernfalls stünde in einem Dokument, das an Ihre Auftraggeber geht, ein
  Wert, dem in der Plattform bereits widersprochen wurde.

## Vier Sichtbarkeitsstufen

| Stufe | Wer sieht das Profil | In Suchmaschinen |
|---|---|---|
| **Privat** | niemand — auch nicht, wer die Adresse kennt | nein |
| **Nur mit Link** | wer den vollständigen Link hat; die Adresse trägt dafür einen unerratbaren Zusatz (`?t=…`) | nein |
| **Nach Nachweis** | wer seine E-Mail-Adresse angibt und den Code eingibt | nein |
| **Öffentlich** | alle | ja |

So läuft die Stufe **„Nach Nachweis"** ab: Die Prüferin trägt ihre dienstliche Adresse ein und
erhält per Mail einen **sechsstelligen Code**, der 15 Minuten gilt. Nach der Eingabe ist das
Profil **sieben Tage** für sie geöffnet. **Jeder Zugriff wird protokolliert**, im Editor
einsehbar. Gegen Ausprobieren: **sechs Fehlversuche sperren die Adresse für eine Stunde**, und je
Adresse werden **höchstens fünf Codes am Tag** verschickt.

:::caution[Ein verschlossenes Profil und ein nicht existierendes antworten identisch]
Ein Profil, das es nicht gibt, ein auf **privat** gestelltes und ein falscher Zugangsschlüssel
erzeugen dieselbe Antwort — dieselbe Meldung, derselbe Statuscode.

Das ist kein Versehen und keine Bequemlichkeit. Würde die Anwendung „privat" von „gibt es nicht"
unterscheiden, wäre die Fehlermeldung eine Auskunft darüber, wer unser Kunde ist. Wer Adressen
durchprobiert, bekäme so eine Kundenliste. Deshalb schweigen alle drei Fälle gleich.
:::

Beim Umstellen auf **öffentlich** verschickt die Anwendung eine Bestätigung an die
Administration Ihrer Organisation, damit eine Veröffentlichung nicht unbemerkt geschieht.

## Was das Profil zeigt — und was nicht

Jeder Block lässt sich einzeln zuschalten. Nichts erscheint, was Sie nicht ausgewählt haben.

| Block | Inhalt |
|---|---|
| Ansprechpartner | wer bei Sicherheits- und Datenschutzfragen erreichbar ist |
| Zertifikate und Nachweise | getrennt nach unabhängigen Stellen und eigenen Nachweisen |
| Schulung und Awareness | Schulungsquote und Meldequote — mit Einschränkung, siehe unten |
| Technische und organisatorische Maßnahmen | nur die von Ihnen ausgewählten, mit Titel und Kurztext |
| Richtlinien in Kraft | **nur die Titel** — der Inhalt bleibt bei Ihnen |
| Eingesetzte Auftragsverarbeiter | Name, Leistung, ob ein Drittland betroffen ist |
| Melde- und Notfallprozess | wie ein Vorfall bei Ihnen gemeldet und bearbeitet wird |
| Verfügbarkeit und Erreichbarkeit | Betreuungszeiten, Reaktionszeiten, Wartungsfenster |
| Meldeseite für Schwachstellen | Verweis auf Ihre Meldeseite aus [Hugo Hersteller](/hersteller-cra/richtlinien-cvd-security-txt/) |

Von **Richtlinien** erscheint ausschließlich der Titel. Eine Richtlinie ist ein internes Dokument;
dass sie existiert und in Kraft ist, beantwortet die Frage des Auftraggebers — ihr Wortlaut geht
ihn nichts an.

### Zertifikate und eigene Nachweise stehen in zwei Blöcken

:::caution[Zwei Überschriften, nicht eine — § 5 UWG]
Ein ISO/IEC-27001-Zertifikat stammt von einer akkreditierten Stelle, die geprüft und ihren Namen
darunter gesetzt hat. Ein eigenes Prüfergebnis — etwa ein Hugo-Check-Score oder ein
Shield-Ergebnis — stammt von Ihnen selbst. Beides unter eine gemeinsame Überschrift zu stellen,
wäre eine irreführende geschäftliche Handlung nach **§ 5 Abs. 1, Abs. 2 Nr. 3 UWG**; die Vorschrift
gilt auch gegenüber Unternehmen, nicht nur gegenüber Verbrauchern.

Deshalb kennzeichnet die Anwendung jeden Eintrag: **unabhängige Stelle** bei ISO/IEC 27001,
ISO 9001, TISAX, SOC 2 und BSI IT-Grundschutz — **eigener Nachweis** bei allem anderen,
einschließlich der frag.hugo-eigenen Ergebnisse.
:::

Zu jedem Zertifikat erfassen Sie Art, Aussteller, Geltungsbereich und Gültigkeitszeitraum.
**Ein abgelaufenes Zertifikat verschwindet automatisch von der öffentlichen Seite** — es muss
niemand daran denken. Im Editor bleibt es sichtbar und amber markiert, und 60 Tage vor Ablauf
erinnert eine Mail.

## Kennzahlen erscheinen erst ab 25 Beschäftigten

Schulungsquote und Meldequote erscheinen auf der öffentlichen Seite nur, wenn Ihre Organisation
mindestens **25 Beschäftigte** hat. Darunter steht dort der Grund, nicht die Zahl.

:::caution[Warum die Schwelle so hoch liegt]
Maßstab ist **Erwägungsgrund 26 DSGVO**: Personenbezug entfällt erst, wenn eine Zuordnung zu einer
Person nach allgemeinem Ermessen nicht mehr wahrscheinlich ist. In der Anwendung selbst genügt
dafür eine Schwelle von fünf Personen — dort ist die Bezugsgruppe eine Abteilung, deren Größe
Außenstehende nicht kennen.

Auf einer **öffentlichen** Seite ist die Bezugsgruppe die ganze Organisation, und deren Größe ist
öffentlich bekannt — aus dem Handelsregister, aus Ihrer eigenen Website, aus Bewertungsportalen.
„Melderate 83 Prozent" bei sechs Beschäftigten ist keine Statistik, sondern eine Personenauskunft:
Fünf von sechs haben gemeldet, einer nicht. 25 ist die vorsichtige Zahl dafür, nicht die
gesetzliche.
:::

Zwei weitere Punkte gehören vor die Veröffentlichung von Kennzahlen:

- **Die Veröffentlichung ist ein anderer Zweck als die Awareness-Messung.** Erhoben wurden die
  Daten, um Schulungsbedarf zu erkennen. Sie an Dritte zu geben, ist eine
  Zweckänderung und an **Art. 6 Abs. 4 DSGVO** zu messen.
- **Eine bestehende Betriebsvereinbarung deckt das regelmäßig nicht.** Betriebsvereinbarungen zu
  Schulung und Simulation nach **§ 87 Abs. 1 Nr. 6 BetrVG** regeln die interne Auswertung. Die
  Weitergabe aggregierter Verhaltensdaten an Auftraggeber ist ein eigener Vorgang — klären Sie ihn
  vorher mit dem Betriebs- oder Personalrat.

Sind Sie unsicher, lassen Sie den Block einfach aus. Das Profil ist auch ohne ihn vollständig
genug für die meisten Fragebögen.

## Ansprechpartner

Empfohlen ist die **Funktionsadresse**, also `datenschutz@ihre-domain.de` statt einer Person.
Zwei Gründe:

- **Art. 37 Abs. 7 DSGVO** verlangt, die **Kontaktdaten** der oder des Datenschutzbeauftragten zu
  veröffentlichen und der Aufsichtsbehörde mitzuteilen — **nicht den Namen**. Die Vorschrift
  spricht ausschließlich von Kontaktdaten.
- Eine Adresse überlebt einen Personalwechsel. Ein Name auf einer öffentlichen Seite wird zur
  Altlast, sobald die Person das Haus verlässt.

Ein Kontakt erscheint erst, wenn Sie im Editor das Häkchen setzen, dass die Veröffentlichung
dieser Angaben **innerhalb Ihrer Organisation abgestimmt** ist. Ohne Häkchen bleibt der Eintrag im
Editor stehen, aber die öffentliche Seite zeigt ihn nicht.

## Für die Prüfsoftware Ihres Auftraggebers

`app.fraghugo.de/profil/<adresse>.json` liefert dieselben Angaben strukturiert, damit die
Prüfsoftware des Auftraggebers sie ohne Abtippen übernehmen kann.

- Format: **JSON-LD** mit dem schema.org-Typ `Organization`, ergänzt um einen eigenen Namensraum
  für alles, wofür schema.org nichts vorsieht — Maßnahmen, Richtlinien, Auftragsverarbeiter,
  Kennzahlen, Prozesse, Verfügbarkeit, Meldeseite.
- Zertifikate erscheinen als `EducationalOccupationalCredential`; ist ein Aussteller erfasst,
  steht er als `recognizedBy` daran.
- Die Antwort trägt die Felder `hugo:stand` (Datum), `hugo:erzeugt` („automatisch aus dem
  Compliance-System") und `hugo:istSelbstauskunft` mit dem Wert `true`. Der letzte Punkt ist
  Absicht: Auch eine Maschine soll erkennen, dass sie eine Selbstauskunft liest.
- Die Antwort wird **eine Stunde** zwischengespeichert.
- **Ein verschlossenes Profil gibt maschinenlesbar nichts heraus** — es gilt dieselbe Regel wie
  oben, dieselbe Antwort für „privat", „gibt es nicht" und „falscher Schlüssel".

## Verwandte Seiten

- [Fragebögen beantworten](/lieferkette/fragebogen-beantworten/) — dieselbe Datenbasis, angewandt auf einen konkreten Bogen
- [Für Auftraggeber: Profile lesen](/lieferkette/fuer-auftraggeber-profile/) — die andere Seite des Tisches
- [Self-Assessment](/lieferkette/self-assessment/) — der Shield-Fragebogen mit 50 Fragen
- [TOMs](/datenschutz/toms/) und [ISMS-Richtlinien](/isms-nis2/richtlinien/) — zwei der wichtigsten Quellen des Faktenbestands
