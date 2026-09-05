---
title: Hersteller & CRA (FAQ)
description: Kenntnisnahme, gerissene 24-Stunden-Frist, wer meldet, SBOM veröffentlichen, Bestandsprodukte, Open Source — die Fragen, die vor dem ersten Fall kommen.
---

Die Antworten gehören zum Bereich [Hugo Hersteller](/hersteller-cra/uebersicht/). Fundstellen
ohne weitere Angabe beziehen sich auf die Verordnung (EU) 2024/2847 — den Cyber Resilience Act.

## Was zählt als Kenntnisnahme?

Nicht der erste Verdacht. Meldet Ihnen ein Kunde, eine Behörde, die Presse oder eine
Sicherheitsforscherin einen Verdacht, müssen Sie ihn **unverzüglich bewerten**. Kenntnis liegt
vor, wenn Sie nach dieser Erstbewertung mit hinreichender Sicherheit davon ausgehen können, dass
eine Schwachstelle in Ihrem Produkt aktiv ausgenutzt wird oder ein schwerwiegender Vorfall die
Sicherheit des Produkts beeinträchtigt hat. **Erst dann laufen die 24 Stunden.**
(Kommissionsleitlinie C(2026) 5252 vom 27. Juli 2026, Rn. 213)

Zwei Folgerungen daraus:

- **Die Bewertung selbst hat kein Zeitfenster, sie ist „unverzüglich".** Wer einen Hinweis zwei
  Wochen liegen lässt und sich darauf beruft, er habe ja noch keine Kenntnis gehabt, dreht die
  Regel um.
- **Halten Sie beide Zeitpunkte fest** — Hinweis eingegangen und Kenntnis festgestellt. Der
  Meldeassistent fragt sie getrennt ab, und genau diese beiden Zeitpunkte machen später den
  Unterschied.

## Was, wenn wir die 24 Stunden reißen?

**Melden Sie trotzdem, sofort, und dokumentieren Sie die Verzögerung.** Eine verspätete Meldung
ist besser als keine; die Pflicht entfällt nicht dadurch, dass die Frist abgelaufen ist.
Schreiben Sie in den Fall, woran es lag — das steht dann im Protokoll und im Export.

Zur Bußgeldfrage, in der gebotenen Genauigkeit: Für Verstöße gegen die Artikel 13 und 14 sieht
die Verordnung Geldbußen bis 15 Mio. € oder 2,5 % des weltweiten Jahresumsatzes vor, je nachdem,
welcher Betrag höher ist (Art. 64 Abs. 2). Die Sanktionen selbst legt allerdings der nationale
Gesetzgeber fest (Art. 64 Abs. 1).

:::note[Für die 24-Stunden-Frist gilt eine Ausnahme]
Gegen **Kleinst- und Kleinunternehmen sollen wegen Versäumens der 24-Stunden-Frist keine
Geldbußen** verhängt werden, gegen Verwalter quelloffener Software überhaupt keine
(Art. 64 Abs. 10 lit. a und b, Erwägungsgrund 120). Erwägungsgrund 120 geht weiter und sagt, dass
die Mitgliedstaaten gegen diese Einrichtungen dafür auch keine anderweitigen finanziellen
Sanktionen verhängen sollten.

Das ist keine Garantie und kein Freibrief: Die Ausnahme betrifft **nur** die 24-Stunden-Frühwarnung,
nicht die 72-Stunden-Meldung und nicht den Abschlussbericht. Und die Größe des Unternehmens ist
ohnehin ein ausdrücklicher Zumessungsfaktor (Art. 64 Abs. 5 lit. c).
:::

## Meldet ihr für uns?

Nein — und das ist keine Zurückhaltung, sondern der Stand der Technik auf der Gegenseite.

Gemeldet wird über die einheitliche Meldeplattform, die die ENISA betreibt; Zugang haben benannte
Ansprechpersonen Ihres Unternehmens über ein EU-Login mit Zwei-Faktor-Anmeldung. Eine
Programmierschnittstelle stellt die ENISA zum Start nicht bereit (ENISA, FAQ zur Single Reporting
Platform, Stand August 2026). Eine automatische Übermittlung aus einer Fremdanwendung ist damit
technisch ausgeschlossen.

Was wir tun: Die Uhr rechnet ab dem richtigen Anker, der Assistent kennt die Feldnamen und die
Zeichengrenzen des Formulars, und der Export gibt Ihnen die Felder in der Reihenfolge des
Formulars zum Übertragen. Was Sie tun: den Zugang **vorher** einrichten und die Meldung abgeben.

Und noch einmal deutlich: Empfänger sind das für Sie zuständige, als Koordinator benannte CSIRT
**und** die ENISA gleichzeitig — über den Meldeendpunkt Ihres CSIRT (Art. 14 Abs. 1 und 7). Für
Deutschland ist das CERT-Bund beim BSI (ENISA, Liste der als Koordinatoren benannten CSIRTs,
Stand 4. September 2026).

## Müssen wir unsere SBOM veröffentlichen?

Nein. Die Software-Stückliste gehört in die **technische Dokumentation** und geht **auf begründetes
Verlangen** an die Marktüberwachungsbehörde (Anhang VII Nr. 2 lit. b und Nr. 8). Eine
Veröffentlichungspflicht kennt die Verordnung nicht.

Verlangt ist, sie in einem **gängigen maschinenlesbaren Format** zu erstellen, aus dem zumindest
die obersten Abhängigkeiten hervorgehen (Anhang I Teil II Nr. 1). CycloneDX und SPDX sind unsere
Wahl, keine Vorgabe des CRA — Format und Elemente kann die Kommission per Durchführungsrechtsakt
festlegen (Art. 13 Abs. 24).

Stellen Sie die Stückliste Ihren Nutzern freiwillig bereit, muss in den Produktinformationen
stehen, wo sie zu finden ist (Anhang II Nr. 9).

## Gilt das auch für unsere Bestandsprodukte?

Für die **Meldepflicht** ja: Sie gilt für alle Produkte im Anwendungsbereich, auch für solche, die
vor dem 11. Dezember 2027 in Verkehr gebracht wurden (Art. 69 Abs. 3), und nach der Leitlinie der
Kommission auch nach dem Ende des Unterstützungszeitraums (C(2026) 5252, Rn. 210).

Für den **übrigen Pflichtenkatalog** nein: Er greift für Bestandsprodukte erst, wenn sie nach dem
11. Dezember 2027 einer **wesentlichen Änderung** unterliegen (Art. 69 Abs. 2). Wesentlich ist
eine Änderung, die sich auf die Konformität mit den grundlegenden Cybersicherheitsanforderungen
auswirkt oder den geprüften Verwendungszweck ändert (Art. 3 Nr. 30).

Nachmelden müssen Sie nichts: Schwachstellen, deren aktive Ausnutzung Ihnen schon vor dem
11. September 2026 bekannt war, sind nicht nachzumelden. Kannten Sie die Schwachstelle, nicht aber
ihre Ausnutzung, und wird sie danach ausgenutzt, entsteht die Pflicht (C(2026) 5252, Rn. 217).

## Wir verwalten ein Open-Source-Projekt — melden wir freiwillig?

Nein, für Verwalter quelloffener Software ist die Meldung **verpflichtend**, soweit sie an der
Entwicklung des Produkts beteiligt sind (Art. 24 Abs. 3 in Verbindung mit Art. 14 Abs. 1).
Freiwillig ist nur die Meldung nach Art. 15, die jedem offensteht.

Im Gegenzug gilt für Verwalter eine vereinfachte Regelung: eine überprüfbar dokumentierte
Cybersicherheitsstrategie und Zusammenarbeit mit den Marktüberwachungsbehörden (Art. 24 Abs. 1
und 2). Sie dürfen keine CE-Kennzeichnung anbringen (Erwägungsgrund 19), und Geldbußen sind gegen
sie ausgeschlossen (Art. 64 Abs. 10 lit. b).

Davon zu trennen ist die Frage, ob Ihr Projekt überhaupt in den Anwendungsbereich fällt: Freie und
quelloffene Software ist nur erfasst, wenn sie **im Rahmen einer Geschäftstätigkeit** bereitgestellt
wird. Finanzielle Unterstützung durch Hersteller oder regelmäßige Releases machen daraus für sich
genommen keine Geschäftstätigkeit (Art. 3 Nr. 22, Erwägungsgrund 18).

## Eine Schwachstelle steckt in einer Fremdkomponente — melden wir?

Zwei Pflichten, die man auseinanderhalten muss:

- **An den Betreuer der Komponente: immer.** Stellen Sie eine Schwachstelle in einer eingebundenen
  Komponente fest — auch in einer quelloffenen —, melden Sie sie der Person oder Einrichtung, die
  die Komponente herstellt oder wartet, und stellen einen von Ihnen entwickelten Fix samt
  Unterlagen bereit (Art. 13 Abs. 6).
- **An CSIRT und ENISA: nur, wenn sie in Ihrem Produkt ausgenutzt wird.** Ist der verwundbare Code
  bei Ihnen nicht erreichbar oder wurde er in Ihrem Produkt nicht ausgenutzt, besteht keine
  Meldepflicht; eine freiwillige Meldung nach Art. 15 bleibt möglich (C(2026) 5252, Rn. 218).
