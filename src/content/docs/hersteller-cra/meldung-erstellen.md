---
title: Meldung erstellen
description: Die vier Stufen einer CRA-Meldung, was in welche gehört, wohin sie geht, wie der Export in die Meldeplattform kommt und was „als eingereicht markieren" bedeutet.
---

Der Meldeassistent liegt unter `/dsb/hersteller/meldungen`. Sie legen einen Fall an, die
Fristen-Uhr startet, und Sie füllen die Stufen nacheinander aus. Diese Seite erklärt, was
rechtlich dahintersteht — denn die Uhr rechnet nur richtig, wenn der Fall richtig eingeordnet ist.

## Was überhaupt zu melden ist

Meldepflichtig sind zwei Dinge, nicht mehr:

- **aktiv ausgenutzte Schwachstellen** in einem Ihrer Produkte (Art. 14 Abs. 1) und
- **schwerwiegende Sicherheitsvorfälle mit Auswirkungen auf die Sicherheit des Produkts**
  (Art. 14 Abs. 3).

Ob ein Vorfall schwerwiegend ist, ist keine Frage des Schweregrads, sondern ein Test mit zwei
Zweigen:

> … wenn a) er sich negativ auf die Fähigkeit eines Produkts mit digitalen Elementen auswirkt oder
> auswirken kann, die Verfügbarkeit, Authentizität, Integrität oder Vertraulichkeit von sensiblen
> oder wichtigen Daten oder Funktionen zu schützen, oder b) er zur Einführung oder Ausführung eines
> böswilligen Codes in einem Produkt mit digitalen Elementen oder im Netzwerk und
> Informationssystem eines Nutzers des Produkts geführt hat oder dazu führen kann.
> (Art. 14 Abs. 5)

Der Assistent stellt diese beiden Fragen als Erstes. Fällt die Antwort auf beide negativ aus,
halten Sie das als Vermerk fest, statt einen Fall mit laufenden Fristen zu eröffnen.

:::note[Was nicht meldepflichtig ist]
- **Funde aus gutgläubigen Tests, Untersuchungen, Korrekturen oder Offenlegungen** — also der
  Ertrag Ihres Pentests oder Bug-Bounty-Programms (Erwägungsgrund 68).
- **Jede Schwachstelle, die niemand ausnutzt.** Gemeldet wird die *aktive Ausnutzung*.
- **Eine Schwachstelle in einer Fremdkomponente, die in Ihrem Produkt nicht ausgenutzt wurde** oder
  deren verwundbarer Code bei Ihnen nicht erreichbar ist (Kommissionsleitlinie C(2026) 5252,
  Rn. 218). Die Weitergabe an den Betreuer der Komponente nach Art. 13 Abs. 6 bleibt trotzdem
  Pflicht.
- **Der gewöhnliche Kundenvorfall.** Ein schwerwiegender Sicherheitsvorfall im Sinne des Art. 14
  betrifft Ihre eigenen Entwicklungs-, Herstellungs- oder Wartungsprozesse — der Musterfall ist der
  kompromittierte Update-Kanal (Erwägungsgrund 68).
:::

## Wann die Uhr startet

Die Fristen laufen ab **Kenntnisnahme**. Das ist nicht der erste Verdacht.

> Meldet ein Dritter — Kunde, Behörde, Presse, Sicherheitsforscher — einen Verdacht, müssen Sie ihn
> **unverzüglich** bewerten. Kenntnis liegt vor, wenn Sie nach dieser Erstbewertung mit
> hinreichender Sicherheit davon ausgehen können, dass eine Schwachstelle in Ihrem Produkt aktiv
> ausgenutzt wird oder ein schwerwiegender Vorfall die Sicherheit des Produkts beeinträchtigt hat.
> Erst dann laufen die 24 Stunden. (Kommissionsleitlinie C(2026) 5252, Rn. 213)

Der Assistent trennt deshalb zwei Zeitpunkte: **Hinweis eingegangen** und **Kenntnis
festgestellt**. Die Uhr hängt am zweiten. Der erste steht trotzdem im Protokoll, damit sich später
zeigen lässt, dass zwischen beiden nicht drei Wochen lagen — das wäre keine unverzügliche
Bewertung mehr.

## Die vier Stufen

| Stufe | Frist | Anker | Fundstelle |
|---|---|---|---|
| **Frühwarnung** | unverzüglich, spätestens 24 Stunden | Kenntnisnahme | Art. 14 Abs. 2 lit. a, Abs. 4 lit. a |
| **Meldung** | unverzüglich, spätestens 72 Stunden | Kenntnisnahme | Art. 14 Abs. 2 lit. b, Abs. 4 lit. b |
| **Zwischenbericht** | wenn das CSIRT ihn anfordert | Anforderung | Art. 14 Abs. 6 |
| **Abschlussbericht** | Schwachstelle: 14 Tage · Vorfall: ein Monat | Schwachstelle: Verfügbarkeit einer Korrektur- **oder Risikominderungs**maßnahme · Vorfall: Übermittlung der 72-Stunden-Meldung | Art. 14 Abs. 2 lit. c, Abs. 4 lit. c |

:::caution[Drei Punkte, an denen die Rechnung schiefgeht]
1. **Nicht alle Fristen laufen ab Kenntnisnahme.** Nur Frühwarnung und Meldung. Der
   Abschlussbericht hat einen eigenen Anker — bei der Schwachstelle die Verfügbarkeit der Abhilfe,
   beim Vorfall die tatsächliche Übermittlung der 72-Stunden-Meldung.
2. **Auch ein Workaround startet die 14 Tage.** Der Anker ist die „Korrektur- oder
   Risikominderungsmaßnahme" — ein Mitigations-Hinweis an die Nutzer zählt, nicht erst der Patch.
3. **24 Stunden sind die äußerste Grenze, nicht das Ziel.** Die Verordnung sagt „unverzüglich, in
   jedem Fall aber innerhalb von 24 Stunden".
:::

Der Zwischenbericht ist keine Kür und keine freiwillige Zwischenmeldung: Das als Koordinator
benannte CSIRT kann ihn anfordern (Art. 14 Abs. 6). Kommt eine solche Anforderung, legen Sie im
Fall die Stufe **Zwischenbericht** an; sie erscheint im Zeitstrahl und im Nachweis wie die
übrigen.

## Wohin die Meldung geht

:::note[Nicht „an die ENISA, die weiterleitet"]
Sie melden **gleichzeitig an das für Sie zuständige, als Koordinator benannte CSIRT und an die
ENISA** — und zwar über den Meldeendpunkt **Ihres CSIRT** auf der einheitlichen Meldeplattform,
die die ENISA betreibt (Art. 14 Abs. 1 und 7, Art. 16 Abs. 1). Weitergeleitet wird anschließend
vom erstempfangenden CSIRT an die CSIRTs der übrigen betroffenen Mitgliedstaaten
(Art. 16 Abs. 2).
:::

Zuständig ist das CSIRT des Mitgliedstaats, in dem die Entscheidungen zur Cybersicherheit Ihrer
Produkte überwiegend getroffen werden (Art. 14 Abs. 7 UAbs. 2) — nicht der Handelsregistersitz.
Lässt sich das nicht bestimmen, zählt der Standort mit den meisten Beschäftigten in der Union.

Für Deutschland ist das **CERT-Bund beim Bundesamt für Sicherheit in der Informationstechnik**
(ENISA, „List of CSIRTs designated as coordinators", Stand 4. September 2026).

Haben Sie keine Hauptniederlassung in der Union, gilt eine Rangfolge: Land des Bevollmächtigten,
sonst des Einführers, sonst des Händlers, sonst das Land mit den meisten Nutzern
(Art. 14 Abs. 7 UAbs. 3).

## Was in welche Stufe gehört

Die Verordnung verlangt für die Schwachstelle und für den Vorfall **unterschiedliche Inhalte**.
Der Assistent führt deshalb zwei getrennte Formulare. Die Fallart wählen Sie beim Anlegen — sie
bestimmt, welche Felder Sie danach sehen.

### Frühwarnung (24 Stunden)

| Fallart | Pflichtinhalt nach Art. 14 |
|---|---|
| aktiv ausgenutzte Schwachstelle | Angabe der **Mitgliedstaaten**, in deren Hoheitsgebiet Ihr Produkt Ihrer Kenntnis nach bereitgestellt wurde (Abs. 2 lit. a) |
| schwerwiegender Vorfall | zumindest, **ob der Verdacht auf rechtswidrige oder böswillige Handlungen besteht**; gegebenenfalls ebenfalls die Mitgliedstaaten (Abs. 4 lit. a) |

Die Angabe der Mitgliedstaaten ist kein Beiwerk: Sie steuert, welche CSIRTs die Meldung
anschließend bekommen. Hugo schlägt sie aus dem [Produktregister](/hersteller-cra/produktregister/)
vor.

### Meldung (72 Stunden)

| Fallart | Pflichtinhalt nach Art. 14 |
|---|---|
| Schwachstelle | allgemeine Informationen zum Produkt, zur allgemeinen Art der Ausnutzung und der Schwachstelle, ergriffene Korrektur- oder Risikominderungsmaßnahmen sowie Maßnahmen, die Nutzer ergreifen können; gegebenenfalls die **Sensibilitätseinschätzung** (Abs. 2 lit. b) |
| Vorfall | allgemeine Informationen zur Art des Vorfalls, **eine erste Bewertung**, ergriffene Maßnahmen und Maßnahmen für Nutzer; gegebenenfalls die **Sensibilitätseinschätzung** (Abs. 4 lit. b) |

### Abschlussbericht

| Fallart | Pflichtinhalt nach Art. 14 |
|---|---|
| Schwachstelle | Beschreibung der Schwachstelle einschließlich **Schweregrad und Auswirkungen**; falls verfügbar Angaben zum **böswilligen Akteur**; Angaben zur Sicherheitsaktualisierung oder anderen Korrekturmaßnahmen (Abs. 2 lit. c) |
| Vorfall | ausführliche Beschreibung einschließlich Schweregrad und Auswirkungen; **Art der Bedrohung bzw. zugrunde liegende Ursache**; getroffene und laufende Abhilfemaßnahmen (Abs. 4 lit. c) |

Schweregrad und Auswirkungen gehören also in den Abschlussbericht, nicht schon in die
72-Stunden-Meldung. Umgekehrt gibt es Felder, nach denen oft gefragt wird und die in Art. 14
nirgends stehen: „grenzüberschreitende Auswirkung" und „Lessons Learned" stammen aus NIS2, nicht
aus dem CRA.

### Die Felder der Meldeplattform

Das Formular der Meldeplattform ist feiner gegliedert als der Verordnungstext. Diese Felder sind
dort **ab der Frühwarnung** Pflicht:

| Feld | Gilt für |
|---|---|
| Notification Type (Schwachstelle oder Vorfall) | beide |
| Title (max. 255 Zeichen) | beide |
| Summary (max. 4.000 Zeichen) | beide |
| Manufacturer Name | beide — wird von der Plattform gesetzt |
| Member States Where Product Available | beide, soweit einschlägig |
| Product Name, Product Version | beide |
| Date/Time Vulnerability Detected | nur Schwachstelle |
| Incident Suspected of Unlawful/Malicious Acts | nur Vorfall |
| Date/Time Incident Detected | nur Vorfall |

Alles Ausführliche — Beschreibung von Schwere und Auswirkung, Ursache, Angaben zum Akteur,
ergriffene Maßnahmen — ist auf der Plattform erst zum Abschlussbericht Pflicht. Optional und von
Anfang an nützlich sind CVE- und EUVD-Kennung, Angriffsvektor, betroffene Komponente sowie der
Hinweis, dass eine Gegenmaßnahme in Kürze zu erwarten ist.

:::caution[Wenn beide Listen auseinandergehen, gilt die Verordnung]
Die Feldliste stammt aus dem Glossar der ENISA zur Meldeplattform (Stand August 2026), nicht aus
einem Rechtsakt. Sie kann sich ändern. Was Art. 14 für eine Stufe verlangt, schulden Sie auch
dann, wenn das Formular das Feld an dieser Stelle noch als optional führt.
:::

## Die Sensibilitätseinschätzung

Ein Feld verdient eine eigene Überschrift, weil es das einzige ist, mit dem Sie Einfluss auf die
Verbreitung nehmen können.

Geben Sie in der 72-Stunden-Meldung an, **für wie sensibel Sie die gemeldeten Informationen
halten** (Art. 14 Abs. 2 lit. b, Abs. 4 lit. b). Denn:

> Unter außergewöhnlichen Umständen und insbesondere auf Antrag des Herstellers und angesichts des
> vom Hersteller angegebenen Grades der Sensibilität der gemeldeten Informationen kann die
> Verbreitung der Meldung aus berechtigten Gründen im Zusammenhang mit der Cybersicherheit so
> lange, wie unbedingt erforderlich, hinausgeschoben werden. (Art. 16 Abs. 2 UAbs. 2)

Wer den Patch noch nicht ausgerollt hat, hat hier seinen einzigen Hebel. Der Assistent erinnert
daran und übernimmt den Text in den Export.

## Nutzer informieren

Die Meldung an CSIRT und ENISA ist die eine Pflicht, die Information der Nutzer die andere:

> Nachdem der Hersteller Kenntnis erlangt hat, informiert er die betroffenen Nutzer und
> gegebenenfalls alle Nutzer über diese Schwachstelle oder diesen schwerwiegenden
> Sicherheitsvorfall und erforderlichenfalls über jegliche Risikominderungs- und
> Korrekturmaßnahmen, die die Nutzer ergreifen können, gegebenenfalls in einem strukturierten,
> maschinenlesbaren Format. (Art. 14 Abs. 8)

Zwei Dinge dazu: Die Information ist **risikobasiert und verhältnismäßig** und bedeutet keine
Pflicht zur Veröffentlichung; bei sensiblen Einsatzumgebungen darf sie auf die betroffenen Kunden
beschränkt bleiben (Kommissionsleitlinie C(2026) 5252, Rn. 219 f.). Und: Unterbleibt sie
rechtzeitig, dürfen die CSIRTs die Nutzer selbst informieren, wenn sie das für verhältnismäßig und
erforderlich halten (Art. 14 Abs. 8 Satz 2). Das ist der Grund, es selbst zu tun.

Der Fall hält dafür einen eigenen Schritt bereit; der Text landet im Ereignisprotokoll.

## Wie der Export in die Meldeplattform kommt

:::caution[Wir melden nicht für Sie — und niemand anderes kann es]
Die Meldeplattform der ENISA nimmt Meldungen über ihre Weboberfläche entgegen. Zugang haben
benannte Ansprechpersonen des Herstellers über ein EU-Login mit Zwei-Faktor-Anmeldung. Eine
Programmierschnittstelle stellt die ENISA zum Start nicht bereit (ENISA, FAQ zur Single Reporting
Platform, Stand August 2026). Eine automatische Übermittlung aus einer Fremdanwendung ist damit
technisch ausgeschlossen — nicht nur bei uns.
:::

Der Ablauf sieht deshalb so aus:

1. **Stufe in Hugo ausfüllen.** Der Assistent kennt die Feldnamen und die Zeichengrenzen der
   Plattform.
2. **Export erzeugen.** Sie bekommen die Felder in der Reihenfolge des Formulars, jedes einzeln
   kopierbar, dazu ein PDF fürs Archiv.
3. **In der Meldeplattform einloggen und einfügen.** Die Adresse veröffentlicht die ENISA auf
   ihrer SRP-Seite.
4. **Zurück in Hugo: „als eingereicht markieren".**

Den Zugang legen Sie einmal vorher an — das ist kein Fünf-Minuten-Schritt: Die erste
Ansprechperson wählt bei der Registrierung das zuständige CSIRT aus, meldet sich per EU-Login an,
akzeptiert die Bedingungen und trägt die Herstellerdaten ein. Weitere Ansprechpersonen lädt sie
per Mail ein; diese Einladung verfällt nach sieben Tagen. Wer das erst anfängt, wenn die 24
Stunden schon laufen, verliert sie damit.

## Was „als eingereicht markieren" bedeutet

Der Knopf verschickt nichts. Er hält fest, **dass und wann** Sie die Stufe auf der Meldeplattform
abgegeben haben. Das hat drei Folgen:

- **Die Uhr der nächsten Stufe startet.** Beim Vorfall hängt die Monatsfrist für den
  Abschlussbericht an der tatsächlichen Übermittlung der 72-Stunden-Meldung, nicht an deren
  Fälligkeit (Art. 14 Abs. 4 lit. c).
- **Der Fall bekommt einen Protokolleintrag** mit Zeitpunkt und handelnder Person.
- **Die Frist gilt in der Übersicht als erfüllt** und verschwindet aus „Was jetzt zu tun ist".

Es ist eine Erklärung von Ihnen, kein Empfangsnachweis. Bestätigungen und Aktenzeichen der
Plattform hängen Sie am Fall an — dafür gibt es ein Feld und einen Dateianhang. Was das Protokoll
belegen kann und was nicht, steht unter [Prozessnachweis](/hersteller-cra/prozessnachweis/).

## Wenn die Frist gerissen ist

Melden Sie trotzdem, und zwar sofort. Eine verspätete Meldung ist besser als keine, und die
Verspätung dokumentiert zu haben ist besser, als sie zu verschweigen. Der Assistent verlangt in
diesem Fall eine kurze Begründung; sie steht im Protokoll und im Export.

Zum Bußgeld: Für Verstöße gegen die Artikel 13 und 14 sieht die Verordnung bis zu 15 Mio. € oder
2,5 % des weltweiten Jahresumsatzes vor, je nachdem, welcher Betrag höher ist (Art. 64 Abs. 2) —
die Sanktionen selbst legt allerdings der nationale Gesetzgeber fest (Art. 64 Abs. 1). Und für die
24-Stunden-Frist gilt eine Ausnahme, siehe [Häufige Fragen](/faq/hersteller-cra/).
