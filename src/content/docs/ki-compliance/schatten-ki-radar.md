---
title: Schatten-KI-Radar
description: Aus dem angebundenen Microsoft-365-Mandanten lesen, welche KI-Dienste mit Firmenkonten verbunden sind — Voraussetzungen, Berechtigungen, Funde, Personenbezug und Betriebsrat.
---

Das KI-Register beantwortet die Frage „Welche KI setzen wir ein?" nur so gut, wie jemand sie
beantworten kann. In den meisten Betrieben kennt niemand die vollständige Liste: Werkzeuge kommen
über einen einzelnen Klick ins Haus, nicht über eine Beschaffung.

Der **Schatten-KI-Radar** schließt diese Lücke von der anderen Seite. Er liest aus Ihrem
angebundenen Microsoft-365-Mandanten, **welche KI-Dienste mit Firmenkonten verbunden sind** — und
macht daraus Registereinträge, Schulungszuweisungen und Richtlinien-Kenntnisnahmen.

Sie finden ihn in der Anwendung unter *KI-Compliance → Schatten-KI-Radar*
(`app.fraghugo.de/dsb/ki-register/radar`). Er ist Teil von **Hugo KI** (49 € im Monat) und in
**Hugo DSB Pro und Premium** enthalten. Einen eigenen Preis hat er nicht.

## Voraussetzungen

### Microsoft 365 muss verbunden sein

Die Verbindung entsteht direkt auf der Radar-Seite über die Schaltfläche **Microsoft 365
verbinden**. Ist noch keine Verbindung vorhanden, zeigt die Seite statt der Funde den Hinweis
*Zuerst Microsoft 365 verbinden*.

Besteht die Verbindung bereits für den Nutzer-Abgleich von Hugo Learn, wird sie weiterverwendet.
Sie brauchen keine zweite Anbindung — nur eine Erweiterung der Berechtigungen (siehe unten
*Berechtigungen erweitern*).

### Die anmeldende Person braucht zweierlei

Nicht nur die Administrator-Zustimmung, sondern **zusätzlich eine Verzeichnisrolle**:

- **Globaler Leser** oder
- **Berichtsleser** oder
- **Sicherheitsleser**

> **Ein Anwendungsadministrator reicht nicht.** Das ist die häufigste Ursache dafür, dass die
> Zustimmung im Microsoft-Dialog gelingt und die Abfrage danach trotzdem mit einem 403 antwortet.
> Wenn die Verbindung steht, der Lauf aber „Berechtigung fehlt" meldet, prüfen Sie zuerst die
> Verzeichnisrolle der Person, die zugestimmt hat — nicht die Zustimmung selbst.

### Für die Anmeldungen zusätzlich Entra ID P1

Die Auswertung, welche Dienste **tatsächlich benutzt** werden, liest die Anmeldeprotokolle von
Microsoft Entra ID. Dafür braucht der Mandant **Entra ID P1**. Die Lizenz ist in **Microsoft 365
Business Premium** enthalten.

**Ohne P1 funktioniert der Radar trotzdem.** Er sieht dann die zugestimmten Anwendungen — also
welche Dienste Zugriff auf Konten und Daten haben —, aber nicht, was davon im Alltag benutzt wird.
Die Statuskarte sagt das offen: Das Signal *Anmeldungen* steht dann auf „nicht verfügbar".

## Die drei Berechtigungssätze

Der Radar verlangt nicht alles auf einmal. Es gibt drei Stufen; **Sie entscheiden, wie weit Sie
gehen.** Jede Erweiterung ist eine neue Zustimmung im Microsoft-Dialog.

| Satz | Berechtigungen | Wofür |
|---|---|---|
| **`basis`** | `User.Read.All` | Nutzer-Abgleich für Hugo Learn — Mitarbeiterstamm, Abteilungen. Der Radar bleibt aus. |
| **`radar`** | zusätzlich `Application.Read.All`, `Directory.Read.All`, `AuditLog.Read.All` | Zugestimmte Anwendungen und (mit Entra ID P1) die Anmeldungen |
| **`radar_reports`** | zusätzlich `Reports.Read.All` | Der Copilot-Nutzungsbericht |

Alle Berechtigungen sind **lesend**. Der Radar schreibt nichts in Ihren Mandanten zurück und kann
insbesondere eine erteilte Zustimmung nicht widerrufen — das bleibt Ihre Aufgabe im
Microsoft-Portal.

`Directory.Read.All` steht nicht zum Aufräumen bereit: Die Abfrage der erteilten Zustimmungen
(`oauth2PermissionGrants`) braucht genau diese Berechtigung, `Application.Read.All` allein genügt
dort nicht.

## Aktivierung Schritt für Schritt

1. **Radar-Seite öffnen** — *KI-Compliance → Schatten-KI-Radar*.
2. **„Radar aktivieren"** anklicken.
3. **Im Dialog steht, was der Radar tut.** Drei Absätze, bevor irgendetwas passiert: was gelesen
   wird, was **nicht** gelesen wird und wie ausgewertet wird. Dazu die Rechtsgrundlage.
4. **Pflicht-Bestätigung zur Mitbestimmung.** Ohne Häkchen aktiviert das Formular nichts; es
   erscheint der Hinweis „Bitte bestätigen Sie den Punkt zur Mitbestimmung." Die Begründung steht
   unten unter [Personenbezug und Betriebsrat](#personenbezug-und-betriebsrat).
5. **„Jetzt prüfen"** startet den ersten Lauf. Der erste Lauf sieht 30 Tage rückwärts und dauert
   entsprechend länger als die täglichen.

Fehlen für eine Stufe noch die Berechtigungen, führt die Schaltfläche **Berechtigungen erweitern**
zurück in den Microsoft-Dialog. Danach landen Sie wieder auf der Radar-Seite.

## Was gelesen wird — und was nicht

**Gelesen wird:**

- welche Anwendungen in Ihrem Mandanten registriert sind,
- welche Berechtigungen diese Anwendungen haben,
- wer zugestimmt hat — ein Administrator für alle oder eine einzelne Person für sich selbst,
- und, mit Entra ID P1, welche Dienste tatsächlich benutzt werden.

**Nicht gelesen werden Inhalte.** Keine Eingaben, keine Antworten, keine E-Mails, keine Dateien.
Was jemand einer KI geschrieben hat, sieht der Radar nicht — dafür fordert er gar nicht erst die
nötigen Berechtigungen an.

**Nicht sichtbar ist die Nutzung mit privaten Konten im Browser.** Wer ChatGPT mit seiner privaten
Mailadresse in einem Browsertab öffnet, taucht in keinem Verzeichnis auf. Dagegen helfen eine
KI-Nutzungsrichtlinie und Schulung, nicht ein Werkzeug. Die Radar-Seite sagt das ausdrücklich, im
Kasten *Was der Radar nicht sieht* — ein Werkzeug, das den Eindruck erweckt, alles zu sehen, ist
irreführender als eines, das seine Grenze nennt.

## Funde verstehen

Ein Fund ist ein Dienst, nicht ein Ereignis. Die Tabelle zeigt je Zeile den Dienst mit Anbieter und
Kategorie, die Zahl der Konten, die Abteilungen, die Zugriffstiefe, den letzten Kontakt und den
Zustand.

### Signale — woher der Fund kommt

| Signal | Bedeutung |
|---|---|
| **Zugestimmte Anwendung** | Der Dienst ist im Mandanten registriert und hat Berechtigungen erhalten. Sagt nichts darüber, ob er benutzt wird. |
| **Anmeldung** | Es hat sich jemand mit einem Firmenkonto bei diesem Dienst angemeldet. Braucht Entra ID P1. |
| **Copilot-Bericht** | Aus dem Microsoft-365-Copilot-Nutzungsbericht. Braucht den Satz `radar_reports`. |

Ein Dienst kann mehrere Signale gleichzeitig tragen. Eine zugestimmte Anwendung ohne einzige
Anmeldung ist der Regelfall bei Werkzeugen, die jemand einmal ausprobiert und dann liegen gelassen
hat — der Zugriff besteht trotzdem weiter.

### Zugriffstiefe — drei Stufen

Die Berechtigungen, die eine Anwendung erhalten hat, werden zu einer von drei Stufen
zusammengefasst und immer mit Text angezeigt, nicht nur mit Farbe:

| Stufe | Heißt |
|---|---|
| **liest Inhalte** | Zugriff auf Mail, Dateien, SharePoint, Teams oder Notizen |
| **liest Kalender oder Kontakte** | Zugriff auf Termine, Kontakte, Verzeichnisdaten |
| **nur Profilangaben** | Name und Mailadresse zur Anmeldung, mehr nicht |

„Liest Inhalte" ist die Stufe, bei der eine Datenschutz-Folgenabschätzung nach Art. 35 DSGVO in
Betracht kommt und ein Blick in die Vertragslage mit dem Anbieter fällig ist. Der Detailbereich
eines Fundes nennt dafür die Angaben aus dem Dienste-Katalog: Anbieter, Hosting-Region, Datenrolle
(*Auftragsverarbeitung möglich* oder *Anbieter verarbeitet zu eigenen Zwecken*) und ob der Anbieter
Eingaben standardmäßig zum Training verwendet.

### Zustimmungsart — der fachlich wichtigste Unterschied

| Wert | Heißt |
|---|---|
| **`AllPrincipals`** | Ein Administrator hat den Dienst für alle freigegeben. Das war eine bewusste Entscheidung. |
| **`Principal`** | Eine einzelne Person hat selbst zugestimmt. Das ist der klassische Fall von Schatten-IT. |
| **gemischt** | Teils vom Administrator freigegeben, teils von einzelnen Personen selbst zugestimmt. |

Diese Spalte trennt „wir haben das eingeführt" von „das ist uns passiert". Beides kann in Ordnung
sein — aber es sind unterschiedliche Gespräche.

### Abteilungen erst ab fünf Personen

Abteilungswerte erscheinen erst, wenn **mindestens fünf Personen** dahinterstehen. Darunter steht
„unter fünf Personen".

Das ist keine Formalie: In einer Abteilung mit drei Beschäftigten ist jede Zahl eine
Personenauskunft, auch ohne Namen.

### Der Zustand „zu prüfen"

Unbekannte Anwendungen, deren Name oder Domain auf KI hindeutet (`ai`, `gpt`, `copilot`,
`assistant`, `llm`), landen als **zu prüfen** — nie automatisch als KI-Dienst. Das heißt: Der
Verdacht steht, eingeordnet hat den Dienst aber niemand.

Sie können einen solchen Eintrag über **Für den Katalog vorschlagen** an die frag.hugo-Redaktion
melden. Er wird dann geprüft und gegebenenfalls in den Dienste-Katalog aufgenommen, aus dem alle
Kunden lesen.

## Aktionen aus einem Fund

Der Radar endet nicht beim Fund. Aus dem Detailbereich heraus stehen vier Wege offen:

- **Ins KI-Register übernehmen.** Legt einen Registereintrag mit Vorbelegung an — Name, Anbieter,
  Rolle, Vorschlag für die Risikoklasse. Der Eintrag trägt danach die Kennzeichnung **„aus Radar"**
  und führt zum Fund zurück. Der Zustand des Fundes wechselt auf *im Register*.
- **KI-Schulung zuweisen.** Zwei Module: **„KI verstehen: Grundlagen für den Arbeitsalltag"** und
  **„KI sicher nutzen: Daten, Fakten, Urheberrecht"** — zugewiesen **ohne Frist und ohne Pflicht**.
  Das ist Absicht: Wer eine Zuweisung bekommt, weil ein Werkzeug auf einer Liste steht, soll darin
  keinen Vorwurf lesen. Eine Auflage mit Frist wird als Abmahnung verstanden, und dann lernt
  niemand mehr etwas.
- **KI-Nutzungsrichtlinie zur Kenntnisnahme geben.** Das Dokument aus dem
  [KI-Dokumente-Generator](/ki-compliance/ki-dokumente/) geht an die betroffenen Personen — als
  **Kenntnisnahme, nicht als Unterschrift**.
- **Zustand setzen:** *genehmigt*, *geduldet*, *blockiert* oder *ignoriert*, jeweils mit Notiz. Die
  Entscheidung wird protokolliert.

## Personenbezug und Betriebsrat

### Voreinstellung ist aggregiert

Der Radar zeigt zunächst ausschließlich: **Dienste, Kontenzahl, Abteilungen ab fünf Personen,
Zeitraum.** Keine Namen.

Das ist die Voreinstellung, weil ein Personenbezug nur zulässig ist, soweit anonyme Daten den Zweck
nicht erreichen.

### Der Personenbezug ist ein eigener Schalter

Wird er eingeschaltet, sehen Sie, welche Person welchen Dienst benutzt, und können einzelne
Personen gezielt schulen.

> **Beim Abschalten werden die Kontenzeilen sofort gelöscht** — nicht nur ausgeblendet. Ein
> Schalter, der Daten nur versteckt, ist keine Löschung, sondern sieht nur so aus.

### Rechtsgrundlage

Rechtsgrundlage ist **Art. 6 Abs. 1 UAbs. 1 lit. f DSGVO** — das berechtigte Interesse an der
Informationssicherheit, gestützt auf die Pflicht aus **Art. 32 Abs. 1 DSGVO**.

Auf **§ 26 Abs. 1 BDSG stützen wir uns bewusst nicht.** Das Bundesarbeitsgericht hat entschieden,
dass die Vorschrift unangewendet zu bleiben hat (BAG, Urteil vom 08.05.2025 – 8 AZR 209/21). Ein
Beschäftigtendatengesetz, das an ihre Stelle träte, gibt es bis heute nicht.

### Mitbestimmung — schon die Aktivierung

Eine Auswertung, welche Person welchen Dienst nutzt, ist eine technische Einrichtung, die zur
Überwachung von Verhalten **geeignet** ist. Nach **§ 87 Abs. 1 Nr. 6 BetrVG** kommt es auf genau
diese objektive Eignung an, nicht auf die Absicht (BAG, Beschluss vom 16.07.2024 – 1 ABR 16/23).

**Mitbestimmungspflichtig ist deshalb schon die Aktivierung des Radars, nicht erst das Einschalten
des Personenbezugs.** Aus diesem Grund steht die Pflicht-Bestätigung im Aktivierungsdialog und
nicht am Schalter.

Ist in Ihrer Organisation der **Betriebsrats-Modus** aus Hugo Learn aktiv, ist der Schalter für den
Personenbezug gesperrt. Die aggregierte Auswertung läuft weiter.

Die Muster-Dokumente im Rechtspaket sind Vorlagen und ersetzen keine Rechtsberatung. Stimmen Sie
sie betriebsindividuell ab.

### Speicherdauer

Funde werden **zwölf Monate** aufbewahrt und danach gelöscht.

## Fehlermeldungen und was sie bedeuten

### „Entra ID P1 nicht vorhanden"

Diese Meldung ist weniger eindeutig, als sie klingt. Microsoft gibt **denselben Fehlercode** auch
dann zurück, wenn

- eine **Verzeichnisrolle fehlt** (siehe Voraussetzungen) oder
- der **Lizenz-Zwischenspeicher kalt ist** — also die Lizenz frisch zugewiesen wurde und im
  Mandanten noch nicht überall bekannt ist.

Prüfen Sie deshalb in dieser Reihenfolge: Rolle der zustimmenden Person, dann Lizenz, dann einen
weiteren Lauf am Folgetag. Der Radar erkennt erst nach einer Wiederholung auf „keine Lizenz".

### „Der Lauf hat keine Daten zurückbekommen" (Zustand *unklar*)

Microsoft drosselt Abfragen auf Aktivitätsprotokolle und antwortet dann **leer statt mit einem
Fehler**. Ein solcher Lauf wird als **unklar** vermerkt.

> **Das ist ausdrücklich kein „nichts gefunden".** Ein leerer Lauf, der als Entwarnung gelesen
> wird, ist schlimmer als gar kein Lauf. Versuchen Sie es später erneut; der nächste tägliche Lauf
> holt den Zeitraum nach.

### „Berechtigung fehlt"

Die Verbindung besteht, aber der angeforderte Berechtigungssatz deckt die Abfrage nicht ab — oder
der zustimmenden Person fehlt die Verzeichnisrolle. **Berechtigungen erweitern** führt zurück in
den Microsoft-Dialog.

### Grenzen des Copilot-Berichts

Der Copilot-Bericht liefert nur eine **Anzahl**, keine Zuordnung zu Personen. Microsoft anonymisiert
die Kennungen in Berichten **mandantenweit**; die Einstellung lässt sich nur für den ganzen
Mandanten abschalten, nicht je Abfrage — und das verlangen wir von Ihnen nicht.

Außerdem zeigt der Bericht nur **lizenzierte** Copilot-Nutzung. Wer Copilot ohne Lizenz nicht
benutzen kann, taucht darin auch nicht auf.

## Takt

Der Radar läuft **täglich um 04:10 UTC** je Verbindung. Zusätzlich können Sie über **Jetzt prüfen**
einen Lauf von Hand anstoßen; das ist auf einen Lauf je Stunde begrenzt.

Der tägliche Takt ist keine Bequemlichkeit: **Microsoft bewahrt die Anmeldeprotokolle nur 30 Tage
auf.** Ohne täglichen Lauf entstehen Lücken, die sich später nicht mehr schließen lassen.

## Verwandte Seiten

- [KI-Register](/ki-compliance/ki-register/) — wohin die Funde wandern
- [Klassifizierung](/ki-compliance/klassifizierung/) — Risiko-Stufe je KI-System
- [KI-Dokumente](/ki-compliance/ki-dokumente/) — die KI-Nutzungsrichtlinie, die Sie aus einem Fund
  heraus verteilen
- [M365-Integration](/schulungen/m365-integration/) — die Verbindung und ihre Berechtigungssätze
