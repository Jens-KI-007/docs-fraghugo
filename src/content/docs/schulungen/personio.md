---
title: Personio verbinden
description: "Mitarbeitende automatisch aus Personio übernehmen und Teilnahmebescheinigungen als PDF in der Personalakte ablegen: Voraussetzungen, Zugangsdaten anlegen, Vorschau, Einstellungen, Trennen, häufige Fehler."
sidebar:
  order: 8
---

Mit der Personio-Anbindung kommen Ihre Mitarbeitenden von selbst in Hugo: Neue erscheinen, Ausgeschiedene werden
stillgelegt, geänderte Namen und Abteilungen ziehen nach. Auf Wunsch legt Hugo jede bestandene Schulung und jede
Unterweisung als Teilnahmebescheinigung (PDF) in der Personalakte in Personio ab.

Sie finden die Anbindung auf der Seite **Personal-Abgleich** (`app.fraghugo.de/team/abgleich`), erreichbar über das
Menü „Personal-Abgleich“ oder in den Mitarbeiterlisten von Hugo Learn und Hugo Safe über **Hinzufügen → Aus Personio
oder Microsoft 365 abgleichen**. Einen Überblick über alle Quellen gibt die Seite
[Personal-Abgleich](/schulungen/personal-abgleich/).

## Voraussetzungen

- **Personio-Tarif „Core Pro“.** Nur damit lassen sich in Personio eigene Zugangsdaten für eine Anbindung anlegen.
  Im Tarif „Core“ fehlt der Knopf „Individuelle Integration erstellen“; die Administrator-Rolle allein reicht nicht.
- In Personio ein Konto, das Integrationen anlegen darf (in der Regel die Administration).
- In Hugo ein bezahlter Tarif, der Mitarbeitende verwaltet: Hugo Learn Standard oder Programm (auch als Teil eines
  Datenschutz-Tarifs oder einer Suite) oder Hugo Safe Basis oder Komplett. In den kostenlosen Stufen gibt es die
  Anbindung nicht.
- In Hugo die Rolle Hauptadministrator oder das Recht, Schulungen zu verwalten.

## Schritt für Schritt

### 1. Zugangsdaten in Personio anlegen

Diese Schritte machen Sie in Personio. Die Bezeichnungen können sich in Personio ändern; im Zweifel gilt die Hilfe von
Personio.

1. In Personio **Einstellungen → Marketplace → Verbundene Integrationen** öffnen.
2. **„Individuelle Integration erstellen“** wählen und als Namen zum Beispiel „frag.hugo“ eintragen.
3. Das Recht **„Mitarbeitende lesen“** geben, mit den Feldern Vorname, Nachname, E-Mail, Status, Eintritts- und
   Austrittsdatum und Abteilung. Mehr Felder braucht Hugo nicht; was Sie nicht freigeben, liest Hugo nicht.
4. Das Recht **„Dokumente lesen und schreiben“** geben, wenn Hugo Nachweise in Personio ablegen soll.
5. Das Recht **„Webhooks lesen und schreiben“** geben, damit Änderungen sofort ankommen. Ohne dieses Recht gleicht
   Hugo nur einmal pro Nacht ab.
6. **Client-ID** und **Client-Secret** kopieren. Das Secret zeigt Personio nur einmal an.

Die sechs Schritte stehen auch in Hugo in der Karte „Personio“ unter **So legen Sie die Zugangsdaten in Personio an**:

<img src="/screenshots/schulungen/personio-1-anleitung.webp" alt="Karte „Personio“ mit der Pille „Nicht verbunden“, aufgeklappter Anleitung in sechs Schritten, dem Hinweis „Sie brauchen dafür den Personio-Tarif Core Pro“, den leeren Feldern Client-ID und Client-Secret und dem Knopf „Verbindung prüfen“" width="1072" height="715" loading="lazy" />

### 2. Verbindung prüfen

Tragen Sie Client-ID und Client-Secret ein und klicken Sie auf **Verbindung prüfen**. Hugo meldet sich bei Personio
an, liest nur und speichert noch nichts. Das Ergebnis zeigt drei Zeilen mit Haken oder Kreuz:

- **Mitarbeitende lesen** — ohne dieses Recht geht es nicht weiter; die Anleitung klappt dann von selbst auf.
- **Dokumente ablegen (für Schulungsnachweise)** — nur nötig, wenn Sie Nachweise in Personio ablegen möchten.
- **Änderungen sofort erhalten (Webhooks)** — sonst gleicht Hugo nur nachts ab.

Darunter steht, wie viele Personen Hugo in Personio gefunden hat.

<img src="/screenshots/schulungen/personio-2-geprueft.webp" alt="Karte „Personio“ mit der Pille „Geprüft“: Ergebnis der Prüfung mit drei Haken für Mitarbeitende lesen, Dokumente ablegen und Änderungen sofort erhalten, darunter „12 Personen gefunden“ und die Knöpfe „Verbinden und Vorschau ansehen“ und „Andere Zugangsdaten“" width="1072" height="451" loading="lazy" />

### 3. Vorschau lesen

**Verbinden und Vorschau ansehen** speichert die Verbindung und zeigt, was der erste Abgleich ändern würde. Noch ist
nichts geändert. Sie sehen vier Zahlen und darunter die Namen:

- **Neu** — Personen, die Hugo anlegen würde.
- **Geändert** — Personen, die es in Hugo schon gibt (gleiche Kennung aus Personio oder gleiche E-Mail-Adresse) und
  deren Name, E-Mail, Abteilung, Eintritt oder Austritt sich ändert. Wer schon stillgelegt war und in Personio wieder
  aktiv ist, steht unter „Kommen zurück“.
- **Werden stillgelegt** — Ausgeschiedene (Status „inaktiv“ oder Austrittsdatum in der Vergangenheit).
- **Übersprungen** — zum Beispiel Personen ohne E-Mail-Adresse in Personio oder mit einer E-Mail-Adresse, die in Hugo
  schon eine andere Person trägt. Der Grund steht in der Liste.

Wer erst in einigen Tagen anfängt, steht unter **Kommen später**: Hugo legt neue Mitarbeitende erst kurz vor dem
Eintritt an (Vorgabe 14 Tage, siehe Einstellungen).

<img src="/screenshots/schulungen/personio-3-vorschau.webp" alt="Vorschau „erster Abgleich mit Personio“ mit den Zahlen Neu 7, Geändert 0, Werden stillgelegt 0 und Übersprungen 3, dem Hinweis „1 Person ohne E-Mail-Adresse in Personio“, der aufgeklappten Liste der sieben neuen Personen mit Abteilung und Eintrittsdatum und darunter dem Beginn der Einstellungen" width="1184" height="900" loading="lazy" />

Reichen die freien Plätze Ihres Tarifs nicht für alle Neuen, legt Hugo **keine** der Neuen an und sagt das in einem
gelben Kasten mit dem Knopf „Plätze erweitern“. Änderungen und Stilllegungen laufen trotzdem.

Unter der Vorschau steht, ob Einladungen verschickt werden. In der Vorgabe heißt es: „Es werden keine Einladungen
verschickt.“ Mit **Abgleich starten** übernimmt Hugo die Änderungen; **Verbindung wieder trennen** verwirft die
Verbindung, ohne etwas zu ändern.

### 4. Verbunden

Danach zeigt die Karte den letzten Abgleich mit Zahlen. Änderungen in Personio kommen sofort an (wenn das
Webhook-Recht erteilt ist), zusätzlich gleicht Hugo jede Nacht vollständig ab. **Jetzt abgleichen** startet einen Lauf
von Hand, **Vorschau** zeigt, was ein Lauf jetzt ändern würde.

<img src="/screenshots/schulungen/personio-4-verbunden.webp" alt="Karte „Personio“ mit der Pille „Verbunden“: letzter Abgleich heute, 12 Personen, Ergebnis 7 neu, 0 geändert, 0 stillgelegt, 3 übersprungen; Knöpfe „Jetzt abgleichen“, „Vorschau“ und „Trennen“; zugeklappte Einstellungen; Abschnitt „Schulungsnachweise in Personio ablegen“ mit eingeschaltetem Schalter, Dokumentkategorie „Schulungsnachweise“, Hinweis zur Sichtbarkeit und den Zahlen Gesendet, Wartet und Fehler" width="1072" height="760" loading="lazy" />

Geht ein Lauf schief, steht der Grund im Klartext auf der Karte, und die Zeile heißt „Zuletzt erfolgreich“.

## Was der Abgleich tut

- **Neue Mitarbeitende** legt Hugo ohne Konto und ohne Mail an. Eingeladen werden sie wie bisher, sobald Sie ihnen eine
  Schulung oder Unterweisung zuweisen — oder automatisch, wenn Sie das in den Einstellungen einschalten.
- **Geänderte E-Mail-Adresse:** Hugo erkennt die Person an ihrer Kennung aus Personio und ändert die Adresse; es
  entsteht keine zweite Person. Trägt eine andere aktive Person in Hugo schon dieselbe Adresse, bleibt die alte stehen
  und die Seite nennt den Fall.
- **Ausgeschiedene** werden stillgelegt, nie gelöscht. Ihre Nachweise bleiben in Hugo.
- **Von Hand angelegte Personen** bleiben unberührt: Hugo legt nur still, wen es selbst aus Personio übernommen hat, und
  nie Konten von Hauptadministratoren.
- **Felder, die Personio nicht liefert**, leert Hugo nicht.
- **Abteilung in Hugo Safe:** Heißt eine Abteilung in Hugo Safe genau wie die Abteilung in Personio, ordnet Hugo neue
  Mitarbeitende dort ein; sie bekommen dann die Erstunterweisung ihrer Abteilung. Bestehende Zuordnungen bleiben.

In der Mitarbeiterliste steht hinter der Abteilung „· aus Personio“.

## Einstellungen

Die Einstellungen stehen unter der Vorschau und im verbundenen Zustand in der Klappe **Einstellungen**. Jede Änderung
gilt sofort.

| Einstellung | Vorgabe | Was sie bewirkt |
|---|---|---|
| Ausgeschiedene automatisch stilllegen | an | Aus: Ausgeschiedene bleiben aktiv, bis Sie sie selbst stilllegen. |
| Neue Mitarbeitende automatisch einladen | aus | An: Bis zu 20 neue Personen je Lauf bekommen eine Einladung per E-Mail. Aus: Sie laden ein, wenn Sie Schulungen zuweisen. |
| Neue schon vor dem Eintritt anlegen | 14 Tage | Wie viele Tage vor dem Eintrittsdatum Hugo eine neue Person anlegt (0 bis 60). |
| Abteilungen nicht übernehmen | keine | Personen dieser Abteilungen übernimmt Hugo nicht, zum Beispiel Aushilfen. |

## Nachweise in Personio ablegen

Im Abschnitt **Schulungsnachweise in Personio ablegen** schalten Sie den Rückweg ein und wählen die
**Dokumentkategorie** in Personio, in die Hugo die Nachweise legt. Legen Sie dafür in Personio vorher eine eigene
Kategorie an, zum Beispiel „Schulungsnachweise“.

- Jede bestandene Schulung und jede Unterweisung kommt als eigenes PDF in die Personalakte, mit dem Titel
  „Teilnahmebescheinigung &lt;Schulung&gt; – &lt;Datum&gt;“. Das PDF trägt denselben Prüf-Link wie die Bescheinigung in
  Hugo.
- Hugo legt nur Dokumente ab. Es schreibt keine Felder am Mitarbeiter und löscht nichts in Personio.
- Die Zahlen **Gesendet**, **Wartet** und **Fehler** zeigen den Stand. Ist Personio kurz nicht erreichbar, versucht Hugo
  es von selbst erneut.
- **Bisherige Nachweise nachtragen** legt die bestandenen Schulungen und Unterweisungen der letzten 24 Monate nachträglich
  ab. Vorher sehen Sie, wie viele es sind, und bestätigen.

**Sichtbarkeit für Mitarbeitende:** Mitarbeitende sehen ihre Nachweise in Personio nur, wenn ihre Rolle in Personio
Zugriff auf diese Dokumentkategorie hat, auch im Umfang „Selbst“. Das stellen Sie in Personio bei den Rollen ein.

## Trennen

**Trennen** fragt nach und löscht dann nur die Verbindung samt Zugangsdaten. Ihre Mitarbeitenden und alle Nachweise
bleiben in Hugo, und was schon in Personio liegt, bleibt dort.

<img src="/screenshots/schulungen/personio-5-trennen.webp" alt="Dialog „Verbindung zu Personio trennen?“ mit dem Satz „Die Verbindung wird getrennt. Ihre Mitarbeitenden und alle Nachweise bleiben in Hugo.“ und den Knöpfen Abbrechen und Trennen" width="448" height="184" loading="lazy" />

Möchten Sie, dass Hugo gar nicht mehr zugreifen kann, löschen Sie zusätzlich die Integration in Personio.

## Datenschutz

- Personio bleibt Ihr System. Hugo liest nur die Felder, die Sie in Personio freigeben, und legt nur PDF-Dokumente ab.
- Client-ID und Secret liegen verschlüsselt bei Hugo; sie werden nie wieder angezeigt.
- Der AV-Vertrag für Hugo Learn und Hugo Safe nennt den Abgleich mit Ihrem Personalsystem. Personio ist dabei kein
  Unterauftragnehmer von frag.hugo, sondern Ihr eigenes System.
- **Für Ihr Verarbeitungsverzeichnis:** Vermerken Sie den Abgleich in Ihrem eigenen Verzeichnis beim Eintrag zur
  Schulung der Beschäftigten (Datenquelle: Personalsystem; übertragen: Name, E-Mail, Abteilung, Eintritt und Austritt;
  zurück: Teilnahmebescheinigungen). Für Personio selbst gibt es eine eigene Vorlage im
  [Verarbeitungsverzeichnis](/datenschutz/vvt/).

## Was die Anbindung nicht kann

- Einträge in Personios eigenem Schulungsmodul — dafür bietet Personio keine Schnittstelle. Der Nachweis liegt als
  Dokument in der Personalakte.
- Felder am Mitarbeiter in Personio beschreiben oder Mitarbeitende in Personio anlegen.
- Gehalt, Abwesenheiten, Geburtsdatum oder andere Felder lesen.
- Mehr als 5.000 Personen je Firma abgleichen. Haben Sie mehr, melden Sie sich bei uns.

## Häufige Fehler

| Meldung | Ursache | Lösung |
|---|---|---|
| „Client-ID oder Secret stimmen nicht.“ | Tippfehler beim Kopieren, oder die Integration wurde in Personio gelöscht. | Werte neu aus Personio kopieren; das Secret notfalls in Personio neu erzeugen. |
| „Personio verweigert den Zugriff. Bitte die Rechte der Integration in Personio prüfen.“ / Kreuz bei „Mitarbeitende lesen“ | Das Recht „Mitarbeitende lesen“ fehlt. | In Personio bei der Integration das Recht ergänzen (Schritt 3), dann **Erneut prüfen**. |
| „Ihr Tarif hat noch … freie Plätze, … Personen würden nicht angelegt.“ | Mehr neue Mitarbeitende als freie Plätze. | Plätze erweitern oder Abteilungen ausschließen; Änderungen und Stilllegungen laufen trotzdem. |
| „… Personen ohne E-Mail-Adresse in Personio“ | In Personio fehlt die E-Mail-Adresse oder das Feld ist nicht freigegeben. | Adresse in Personio eintragen bzw. das Feld E-Mail für die Integration freigeben; der nächste Lauf übernimmt die Person. |
| „Dokumentkategorie in Personio nicht gefunden. Bitte in den Einstellungen neu wählen.“ | Die gewählte Kategorie wurde in Personio umbenannt oder gelöscht. | Kategorie neu wählen, dann **Bisherige Nachweise nachtragen**. |
| „Schreiben von Dokumenten ist in Personio nicht freigegeben.“ | Das Recht „Dokumente lesen und schreiben“ fehlt. | Recht ergänzen (Schritt 4), dann **Bisherige Nachweise nachtragen**. |
| „Mitarbeiter in Personio nicht gefunden.“ | Die Person wurde in Personio gelöscht. | Nichts zu tun; der Nachweis bleibt in Hugo. |
| Änderungen kommen erst am nächsten Morgen an | Das Webhook-Recht fehlt. | Recht „Webhooks lesen und schreiben“ ergänzen (Schritt 5) und neu verbinden. |

## Verwandte Seiten

- [Personal-Abgleich im Überblick](/schulungen/personal-abgleich/)
- [Microsoft 365 verbinden](/schulungen/m365-integration/)
- [Mitarbeiter verwalten](/schulungen/mitarbeiter/)
- [Mitarbeiter anlegen und zuweisen (Hugo Safe)](/arbeitsschutz/mitarbeiter-anlegen-zuweisen/)

Personio ist eine Marke der Personio SE & Co. KG; frag.hugo ist kein Partner von Personio.
