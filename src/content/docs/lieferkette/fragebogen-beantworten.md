---
title: Fragebögen beantworten
description: Sicherheitsfragebogen hochladen, Spalten zuordnen, Antworten aus den eigenen Nachweisen erzeugen lassen, prüfen, freigeben, zurückexportieren — mit Quelle je Antwort und Hinweis nach Art. 50 Abs. 2 KI-VO.
---

Ein Auftraggeber schickt eine Excel-Datei mit 140 Fragen und einer Frist von zehn Tagen. Die
Antworten stehen alle irgendwo in Ihrer Plattform — in den TOMs, im Verarbeitungsverzeichnis, in
den ISMS-Maßnahmen, im Schulungsnachweis. Sie herauszusuchen und in eine fremde Tabelle zu
übertragen, ist die eigentliche Arbeit.

Die **Fragebogen-Antwortmaschine** übernimmt das Heraussuchen und Formulieren. Prüfen und
freigeben tun Sie. Sie finden sie in der Anwendung unter *Lieferkette → Fragebögen beantworten*
(`app.fraghugo.de/shield/fragebogen`), verfügbar ab **Datenschutz-Suite Pro**, ab **ISMS
Professional** und in **Hugo Shield Premium**.

## Der Ablauf

```
Hochladen  →  Zuordnen  →  Beantworten lassen  →  Prüfen und freigeben  →  Export
```

### 1. Hochladen

Excel (`.xlsx`), CSV, Word (`.docx`) und PDF, bis 10 MB. Ziehen Sie die Datei in das Feld oder
wählen Sie sie über die Schaltfläche aus — die Tastaturbedienung ist gleichwertig.

**Die Datei wird im Browser gelesen.** Das Zerlegen in Zeilen und Spalten geschieht auf Ihrem
Rechner; an den Server geht erst die fertige Fragenliste, nachdem Sie die Zuordnung bestätigt
haben. Das ist auch der Grund, warum große Dateien einen Moment brauchen: Es rechnet Ihr Browser.

### 2. Zuordnungsschritt

Nach dem Einlesen zeigt die Anwendung die erkannten Zeilen und fragt: **Welche Spalte enthält die
Frage? Wo soll die Antwort hin?** Dazu Referenznummer, Abschnitt und Antworttyp, soweit vorhanden.
Zeilen, die keine Frage sind — Überschriften, Erläuterungen —, wählen Sie ab.

:::caution[Bitte wirklich hinsehen — dieser Schritt ist absichtlich langsam]
Man könnte die Spalten raten und sofort loslegen. Aber wenn der Einleser die falsche Spalte für
die Antwortspalte hält, merkt das niemand — bis die Datei beim Auftraggeber liegt und die
Antworten dort neben den falschen Fragen stehen. Ein Blick auf fünf erkannte Zeilen kostet zwanzig
Sekunden und verhindert genau das.
:::

Hier tragen Sie außerdem Titel, anfragende Stelle und Frist ein. Die Frist erscheint später in der
Liste und wird ab drei Tagen Restlaufzeit hervorgehoben.

### 3. Beantworten lassen

Jede Frage durchläuft zwei Stufen:

1. **Antwortbibliothek.** Haben Sie dieselbe Frage schon einmal freigegeben, wird diese Antwort
   genommen — in Sekunden, ohne Modellaufruf.
2. **Faktenbestand.** Sonst werden die passendsten belegten Aussagen aus Ihrem
   [Sicherheitsprofil](/lieferkette/sicherheitsprofil/) herausgesucht, und daraus wird eine Antwort
   formuliert — in der Sprache des Fragebogens, bei englischen Bögen also auf Englisch.

Findet sich kein passender Fakt, wird **nichts erfunden**. Die Frage wird als **fehlt** markiert,
mit einem Hinweis, welche Angabe dafür nötig wäre.

Die Fragen werden in Gruppen von 20 parallel bearbeitet; der Fortschritt läuft sichtbar mit.
**Höchstens 400 Fragen je Bogen** — größere Bögen teilen Sie bitte auf.

### 4. Prüfen und freigeben

In der Arbeitsansicht steht links die Fragenliste, rechts die einzelne Frage mit ihrer Antwort.
Jede Antwort trägt drei Angaben:

**Zustand** — als Wort, nicht nur als Farbe:

| Zustand | Bedeutung |
|---|---|
| **belegt** | hohe Konfidenz **und** mindestens eine benannte Quelle |
| **prüfen** | eine Antwort liegt vor, aber Konfidenz oder Quelle tragen sie nicht allein |
| **fehlt** | im System steht nichts dazu |

:::caution[Ohne Quelle nie „belegt"]
Eine Antwort ohne benannte Quelle erreicht den Zustand **belegt** nicht — auch dann nicht, wenn
das Modell sich sehr sicher ist. Konfidenz allein ist eine Selbstauskunft des Modells über sich
selbst; sie sagt nichts darüber, ob die Aussage in Ihren Unterlagen steht.

Neben jeder Farbe steht deshalb ein Wort. Wer die Ampel nicht unterscheiden kann, liest „belegt",
„prüfen" oder „fehlt".
:::

**Quellen** — als anklickbare Verweise. Ein Klick öffnet die Maßnahme, die Richtlinie oder den
Verzeichniseintrag, aus dem die Aussage stammt. So lässt sich in zwei Sekunden nachsehen, ob die
Antwort trägt.

**Herkunft** — woher der Text kommt:

| Herkunft | Bedeutung |
|---|---|
| aus der Antwortbibliothek | so haben Sie diese Frage schon einmal beantwortet |
| maschinell formuliert | aus dem Faktenbestand erzeugt |
| von Hand geschrieben | Sie haben den Text selbst eingetragen oder überarbeitet |

Sie können jede Antwort überschreiben. Freigegeben wird je Frage; freigegebene Antworten werden
bei einem erneuten Durchlauf **nicht überschrieben**.

#### „Nachweis ergänzen"

Steht zu einer Frage nichts im System, tragen Sie die Tatsache als **einen Satz** ein — etwa
„Wiederherstellungstests der Datensicherung erfolgen halbjährlich, zuletzt im März 2026".

Dieser Satz wird Teil Ihres Faktenbestands. Er beantwortet die Frage in diesem Bogen und **künftig
auch in anderen Bögen**, und er überlebt den nächtlichen Neubau des Faktenbestands. Auf Wunsch
lässt er sich zugleich als Maßnahme in den TOMs anlegen, damit die Aussage nicht nur im Fragebogen
existiert.

Nach dem Ergänzen lassen Sie die offenen Fragen noch einmal beantworten — das zählt nicht als
neuer Fragebogen (siehe Fair Use).

### 5. Export

Ausgegeben wird eine Excel-Datei mit zwei Blättern:

- **Hinweise** — das Deckblatt mit Titel, anfragender Stelle, Erstellungsdatum, der Zahl der
  freigegebenen Antworten und dem Kennzeichnungshinweis.
- **Antworten** — Nummer, Abschnitt, Frage, Antwort, Grundlage (die Quellen) und die Spalte
  „Freigegeben".

**Nur freigegebene Antworten stehen im Export.** Was Sie nicht freigegeben haben, bleibt leer —
nichts verlässt das Haus, das ein Mensch nicht angesehen hat. Solange keine Antwort freigegeben
ist, ist die Schaltfläche gesperrt.

:::caution[Kennzeichnungspflicht nach Art. 50 Abs. 2 der Verordnung (EU) 2024/1689]
Die Datei trägt den Hinweis an zwei Stellen: **sichtbar auf dem Deckblatt** und
**maschinenlesbar in den Dateieigenschaften**. Der Text lautet sinngemäß, dass die Antworten
maschinell aus den dokumentierten Nachweisen des Unternehmens formuliert und vor der Weitergabe
von einer verantwortlichen Person geprüft und freigegeben wurden — und dass sie eine
Selbstauskunft sind, die keine Prüfung durch Dritte ersetzt.

**Art. 50 Abs. 2 der KI-Verordnung** verlangt für maschinell erzeugte Inhalte eine maschinenlesbare
Kennzeichnung. Die Ausnahme für Systeme mit „unterstützender Funktion für die Standardbearbeitung"
wäre hier vertretbar — der Bogen geht aber als eigene Erklärung an einen Dritten, und der Hinweis
kostet nichts.
:::

## Antwortbibliothek

Jede freigegebene Antwort **mit Quelle** wandert in die Antwortbibliothek und wird beim nächsten
Bogen zuerst genommen. Bei einem zweiten Fragebogen mit ähnlichen Fragen ist ein großer Teil damit
in Sekunden beantwortet.

Der eigentliche Zweck ist aber nicht Tempo, sondern **Konsistenz**: Dieselbe Frage soll nicht
zweimal unterschiedlich beantwortet werden. Ein Prüfer, der beide Bögen vor sich hat — und in
größeren Konzernen liegen sie im selben Lieferantenportal —, sieht den Widerspruch sofort, und
dann steht nicht die Antwort in Frage, sondern Ihre Sorgfalt.

**Antworten ohne Quelle kommen nicht in die Bibliothek.** Sonst würde eine einmal unbelegt
formulierte Aussage zur Dauerantwort für alle künftigen Bögen.

## Fair Use

| Tarif | Fragebögen je Monat |
|---|---|
| Hugo Shield Premium | 5 |
| Datenschutz-Suite Pro · ISMS Professional | 20 |
| Datenschutz-Suite Premium · ISMS Enterprise | unbegrenzt |

Dazu: **höchstens 400 Fragen je Bogen**.

Gezählt wird der **erste** Antwortlauf eines Bogens. Ein zweiter Durchlauf — etwa nachdem Sie
fehlende Nachweise ergänzt haben — zählt **nicht erneut**. Ist das Kontingent erschöpft, erscheint
ein Hinweis mit dem Stand; der nächste Monat beginnt mit einem neuen Kontingent.

## Grenzen

**Eingescannte PDF-Dateien werden abgelehnt.** Enthält ein PDF kaum Text, ist es vermutlich ein
Scan; die Anwendung sagt das und bittet um die Excel- oder Word-Fassung. Eine Texterkennung bauen
wir bewusst **nicht** ein: Ihre Fehler wären nicht sichtbar, sie stünden als scheinbar saubere
Frage in der Liste — und die falsch gelesene Frage würde falsch beantwortet. Der Fehler landete in
den Antworten, für die Sie geradestehen.

:::caution[SIG und CAIQ werden nicht unterstützt]
Der **Standardized Information Gathering Questionnaire (SIG)** und der **Consensus Assessments
Initiative Questionnaire (CAIQ)** lassen sich hier nicht verarbeiten.

Beide sind lizenzpflichtige Werke Dritter. Die SIG-Lizenzbedingungen untersagen ausdrücklich, den
Fragenkatalog auf eine fremde Plattform zu übertragen oder ihn in ein mandantenübergreifendes
KI-System einzugeben. Wir halten uns daran, statt die Frage in Ihre Verantwortung zu schieben.

Bekommen Sie einen solchen Bogen, beantworten Sie ihn außerhalb der Anwendung — Ihr
[Sicherheitsprofil](/lieferkette/sicherheitsprofil/) und der Faktenbestand helfen Ihnen dabei
trotzdem, weil dort dieselben Angaben mit Quelle stehen.
:::

Zwei weitere Punkte, die regelmäßig gefragt werden:

- **Es wird nichts automatisch verschickt.** Die Anwendung erzeugt eine Datei; wer sie wem
  schickt, entscheiden Sie.
- **Die Antworten sind Vorschläge aus Ihren eigenen Daten.** Freigabe und Richtigkeit verantworten
  Sie. Fragebögen und ihre Inhalte bleiben in Ihrer Organisation und werden nicht zum Training
  verwendet.

## Verwandte Seiten

- [Sicherheitsprofil](/lieferkette/sicherheitsprofil/) — der Faktenbestand, aus dem die Antworten stammen
- [Für Auftraggeber: Profile lesen](/lieferkette/fuer-auftraggeber-profile/) — wie die andere Seite damit umgeht
- [Self-Assessment](/lieferkette/self-assessment/) — der Shield-Fragebogen, den Auftraggeber über die Plattform verschicken
- [TOMs](/datenschutz/toms/) — wo ergänzte Nachweise dauerhaft hingehören
