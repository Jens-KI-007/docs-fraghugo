---
title: Richtlinien, CVD und security.txt
description: Schwachstellen-Handhabungsrichtlinie, Strategie zur koordinierten Offenlegung, öffentliche CVD-Seite, security.txt einbauen — und der Kontaktweg, der nicht automatisiert sein darf.
---

Unter `/dsb/hersteller/richtlinien` entstehen die Dokumente, die der Cyber Resilience Act für den
Umgang mit Schwachstellen verlangt, und die öffentliche Seite, über die man Ihnen eine Schwachstelle
melden kann.

## Die Dokumentarten

| Dokument | Was drinsteht | Fundstelle |
|---|---|---|
| **Schwachstellen-Handhabungsrichtlinie** | Wie Sie Schwachstellen und Komponenten ermitteln und dokumentieren, behandeln und beheben, testen, Informationen nach dem Patch veröffentlichen, Updates sicher und kostenlos verbreiten | Anhang I Teil II Nr. 1 bis 8 |
| **CVD-Policy** (koordinierte Offenlegung) | Was Meldende erwarten dürfen: Kontaktweg, Eingangsbestätigung, Zeitrahmen, Umgang mit Veröffentlichung, Zusage, in gutem Glauben Meldende nicht zu verfolgen | Anhang I Teil II Nr. 5, Art. 13 Abs. 8 UAbs. 6 |
| **security.txt** | Maschinenlesbarer Verweis auf Kontakt und Policy | kein Rechtsakt, siehe unten |
| **Meldeprozess** | Wer intern wann was tut, wenn eine Meldung eingeht — die Brücke zur [Bereitschaft](/hersteller-cra/bereitschaft/) und zum [Meldeassistenten](/hersteller-cra/meldung-erstellen/) | Art. 14 |
| **Prozessnachweis** | Das Paket, das den gelebten Prozess belegt | siehe [Prozessnachweis](/hersteller-cra/prozessnachweis/) |

Jedes Dokument entsteht aus Ihren Angaben im Register und trägt einen Stand mit Datum und Version.
Ändern Sie etwas, entsteht ein neuer Stand; der alte bleibt lesbar.

:::note[Aufstellen genügt nicht]
Anhang I Teil II Nr. 5 verlangt, eine Strategie für die koordinierte Offenlegung von
Schwachstellen **aufzustellen und umzusetzen**. Ein PDF im Ordner ist die halbe Pflicht. Die
andere Hälfte ist, dass eingehende Meldungen tatsächlich jemanden erreichen und bearbeitet werden
— dafür ist die Bereitschaft da.
:::

Zwei Punkte aus Anhang I Teil II, die in Zusammenfassungen gern fehlen und die in Ihrer
Handhabungsrichtlinie beschrieben sein sollten:

- **Nach dem Patch informieren Sie öffentlich über die beseitigte Schwachstelle** — Beschreibung,
  wie Betroffene erkennen, ob es sie betrifft, Auswirkungen, Schwere und Hinweise zur Behebung.
  Diese Veröffentlichung dürfen Sie in begründeten Fällen so lange aufschieben, bis die Nutzer den
  Patch anwenden konnten (Nr. 4).
- **Sicherheitsaktualisierungen sind unverzüglich und kostenlos zu verbreiten** — eine Ausnahme
  gibt es nur bei abweichender Vereinbarung mit einem gewerblichen Nutzer über ein
  maßgeschneidertes Produkt (Nr. 8). Und soweit technisch machbar, kommen Sicherheitsupdates
  getrennt von Funktionsupdates (Nr. 2).

## Die öffentliche CVD-Seite

Aus der CVD-Policy entsteht eine öffentliche Seite unter
`app.fraghugo.de/cvd/<ihr-kürzel>` — ohne Anmeldung erreichbar, in Deutsch und Englisch. Sie
enthält den Kontaktweg, den erwarteten Ablauf, die Zeitrahmen und den Geltungsbereich, also für
welche Produkte sie gilt.

Veröffentlichen Sie sie mit dem Schalter **Seite veröffentlichen**. Bis dahin ist sie nur
angemeldet sichtbar. Nach der Veröffentlichung sollten Sie sie an zwei Stellen verlinken: im
Impressum oder Support-Bereich Ihrer Website und in Ihrer `security.txt`.

Die Verordnung verlangt außerdem, dass in den mitgelieferten Produktinformationen die zentrale
Kontaktstelle steht, bei der Schwachstellen gemeldet werden können — und **wo die Strategie zur
koordinierten Offenlegung zu finden ist** (Anhang II Nr. 2). Die URL Ihrer CVD-Seite gehört also
auch in die Dokumentation, die dem Produkt beiliegt.

## security.txt einbauen

:::note[Der CRA verlangt keine security.txt]
Verlangt sind **eine Kontaktadresse** für Schwachstellenmeldungen (Anhang I Teil II Nr. 6) und
eine **zentrale Anlaufstelle**, die den Nutzern die Wahl des Kommunikationsmittels lässt
(Art. 13 Abs. 17). `security.txt` nach RFC 9116 ist ein bewährter Weg, das umzusetzen — mehr
nicht. Wer keine anlegt, verstößt gegen nichts.
:::

Hugo erzeugt den Inhalt; ablegen müssen Sie ihn selbst, denn er gehört auf **Ihre** Domain:

```
https://ihre-domain.de/.well-known/security.txt
```

Die erzeugte Datei sieht so aus:

```
Contact: mailto:security@ihre-domain.de
Contact: tel:+49-40-000000-0
Expires: 2027-09-05T00:00:00.000Z
Preferred-Languages: de, en
Policy: https://app.fraghugo.de/cvd/ihr-kuerzel
Canonical: https://ihre-domain.de/.well-known/security.txt
```

Drei Dinge, die dabei schiefgehen:

- **`Expires` läuft ab.** Das Feld ist Pflicht und sollte nicht weiter als ein Jahr in der Zukunft
  liegen. Hugo legt Ihnen den Erneuerungstermin in den
  [Fristenkalender](/hersteller-cra/fristen/).
- **Die Datei wird als HTML ausgeliefert.** Sie muss mit `Content-Type: text/plain` kommen, sonst
  lesen Werkzeuge sie nicht.
- **Nur ein `Contact` und der ist ein Formular.** Damit erfüllen Sie Art. 13 Abs. 17 nicht.

## Der Kontaktweg, der nicht automatisiert sein darf

> … benennen die Hersteller eine zentrale Anlaufstelle, die es den Nutzern ermöglicht, direkt und
> schnell mit ihnen zu kommunizieren, auch um die Meldung von Schwachstellen zu erleichtern. …
> Die zentrale Anlaufstelle ermöglicht es den Nutzern, ihr bevorzugtes Kommunikationsmittel zu
> wählen, wobei diese Mittel nicht auf automatisierte Instrumente beschränkt werden dürfen.
> (Art. 13 Abs. 17)

Praktisch heißt das: **Mindestens ein Weg muss bei einem Menschen enden.** Ein Webformular, ein
Ticketsystem und eine Adresse mit Autoresponder sind alle automatisiert. Die einfachste Ergänzung
ist eine Telefonnummer — dieselbe, die schon in Ihrer Bereitschaft steht.

Die CVD-Seite weist deshalb zwei Wege aus. Fehlt der nicht automatisierte, erscheint vor dem
Veröffentlichen der Hinweis auf Art. 13 Abs. 17.

## Was mit einer eingehenden Meldung passiert

Eine Meldung über die CVD-Seite ist zunächst **kein** meldepflichtiger Fall. Sie ist ein Hinweis,
den Sie unverzüglich bewerten müssen; die Frist beginnt erst, wenn Sie danach mit hinreichender
Sicherheit wissen, dass tatsächlich ausgenutzt wird (Kommissionsleitlinie C(2026) 5252, Rn. 213).

Deshalb der Ablauf: Hinweis eingegangen → Bewertung → **entweder** Vermerk „nicht meldepflichtig"
mit Begründung **oder** Fall im [Meldeassistenten](/hersteller-cra/meldung-erstellen/). Beide Wege
landen im Ereignisprotokoll, und genau diese Kette ist es, die der
[Prozessnachweis](/hersteller-cra/prozessnachweis/) später zeigt.
