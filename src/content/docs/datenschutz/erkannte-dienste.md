---
title: Erkannte Dienste
description: "Hugo schlägt Dienstleister vor, die aus Ihrer Website und den öffentlichen Einträgen Ihrer Domain erkennbar sind: was Hugo liest, was die Belege bedeuten, Übernehmen, Kein Auftragsverarbeiter, Grenzen."
sidebar:
  order: 4
---

Auf der Seite **Dienstleister** zeigt Hugo über Ihrer Liste den Abschnitt **Erkannte Dienste**: Dienste, die
vermutlich Daten für Sie verarbeiten, jeweils mit dem Beleg, woran Hugo sie erkannt hat. Ein Klick übernimmt einen
Dienst in Ihre Liste und legt auf Wunsch den passenden Entwurf im
[Verarbeitungsverzeichnis](/datenschutz/vvt/) an. Ohne Anbindung und ohne Zugang zu Ihren Konten.

:::note[Vorschläge, keine Bestandsaufnahme]
Hugo erkennt nur, was öffentlich sichtbar ist. Nichts wird ohne Ihren Klick angelegt. Was Sie übernehmen, ist ein
Entwurf und wird von Ihrem Datenschutzbeauftragten geprüft wie jeder Eintrag, den Sie selbst anlegen.
:::

## Voraussetzungen

- Ein Tarif der Datenschutz-Suite (Lite, Standard, Pro oder Premium).
- Ihre **Website** steht im Firmenprofil. Hugo liest nur diese eine Domain, kein freies Eingabefeld für fremde Adressen.
- Optional: ein aktueller [Website-Check](/website-it-sicherheit/neuer-scan/) Ihrer eigenen Website (nicht älter als 90 Tage).
  Ohne ihn fehlen die Dienste, die auf Ihrer Website eingebunden sind; Hugo zeigt dann den Hinweis „Website jetzt
  prüfen“.

## Was Hugo liest

1. **Die öffentlichen Einträge Ihrer Domain** (DNS): wohin Ihre E-Mails gehen, wer E-Mails in Ihrem Namen versenden
   oder unterschreiben darf, welche Dienste ihre Zugehörigkeit in Ihrer Domain bestätigt haben, auf welche Dienste
   bestimmte Unterdomains zeigen und wer die Zustellberichte Ihrer Domain erhält. Diese Einträge sind für jeden im
   Internet abrufbar; Hugo fragt sie über einen öffentlichen Namensdienst ab und übermittelt dabei nur den
   Domainnamen.
2. **Die Dienste, die der Website-Check auf Ihrer Website gefunden hat**, zum Beispiel Statistik, Karten, Schriften
   oder Chat. Gezählt werden nur Website-Checks Ihrer eigenen Organisation, nie die von anderen.

Beides gleicht Hugo mit dem eigenen Software-Katalog ab, in fester Reihenfolge und ohne KI.

## Schritt für Schritt

### 1. Funde ansehen

Öffnen Sie **Datenschutz → Dienstleister**. Oben steht, aus welcher Domain die Funde stammen und wann zuletzt geprüft
wurde. Jede Karte nennt den Dienst, den Hersteller, eine Kategorie und einen Satz zur Einordnung. Darunter sehen Sie,
ob Hugo eine AV-Vertrags-Vorlage und Vorlagen fürs Verarbeitungsverzeichnis hat.

<img src="/screenshots/datenschutz/erkannte-dienste-1-funde.webp" alt="Abschnitt „Erkannte Dienste“ mit der Kopfzeile „Aus Ihrer Website und den öffentlichen Einträgen Ihrer Domain“, dem Knopf „Erneut prüfen“, der Zeile „6 Dienste verarbeiten vermutlich Daten für Sie“ mit „Alle 6 übernehmen“ und vier Karten: Brevo, Cloudflare, Microsoft 365, Microsoft Clarity" width="1104" height="760" loading="lazy" />

### 2. Beleg aufklappen

Klappen Sie **Woran erkannt** auf. Jeder Fund nennt mindestens einen Beleg in Alltagssprache, darunter den
gefundenen Eintrag selbst. Ohne Beleg zeigt Hugo keinen Fund.

<img src="/screenshots/datenschutz/erkannte-dienste-2-beleg.webp" alt="Karte „Brevo“ mit aufgeklapptem Beleg: „Darf E-Mails im Namen Ihrer Domain versenden“ mit dem Eintrag include:sendinblue.com und „Bestätigungseintrag in Ihrer Domain“" width="525" height="388" loading="lazy" />

| Beleg | Bedeutung |
|---|---|
| E-Mail-Eingang Ihrer Domain | Ihre E-Mails werden bei diesem Dienst angenommen (MX-Eintrag). |
| Darf E-Mails im Namen Ihrer Domain versenden | Der Dienst steht in Ihrer Versandberechtigung (SPF-Eintrag). |
| Unterschreibt E-Mails Ihrer Domain | Für den Dienst ist ein Schlüssel zur E-Mail-Signatur hinterlegt (DKIM). |
| Bestätigungseintrag in Ihrer Domain | Der Dienst hat bestätigt, dass die Domain zu seinem Kundenkonto gehört (TXT-Eintrag). |
| Unterdomain Ihrer Domain zeigt auf den Dienst | Eine feste Unterdomain, etwa `autodiscover`, verweist auf den Dienst (CNAME). |
| Erhält die Zustellberichte Ihrer Domain | Der Dienst wertet Ihre DMARC-Berichte aus. |
| Auf Ihrer Website eingebunden | Der Website-Check hat den Dienst auf Ihrer Website gefunden. |

### 3. Übernehmen, Kein Auftragsverarbeiter oder Ignorieren

- **Übernehmen** legt den Dienst als Dienstleister mit dem Vermerk **„AV-Vertrag fehlt“** an. Ist das Häkchen
  **Auch ins Verarbeitungsverzeichnis** gesetzt, entsteht zusätzlich je Vorlage ein Entwurf im Verzeichnis. Danach
  ergänzen Sie den Vertrag wie unter [Auftragsverarbeiter (AVV)](/datenschutz/avv/) beschrieben.
- **Kein Auftragsverarbeiter** wählen Sie, wenn der Dienst Daten in eigener Verantwortung verarbeitet, zum Beispiel
  ein Zahlungsdienst oder Ihre Bank. Dann braucht es keinen AV-Vertrag nach Art. 28 DSGVO, und der Fund verschwindet
  aus den Vorschlägen.
- **Ignorieren** blendet einen Fund aus, den Sie nicht nutzen oder nicht eintragen wollen.

Was erledigt ist, steht eingeklappt unter **Erledigt** und lässt sich mit **Zurückholen** wieder in die Vorschläge
holen. Löschen Sie einen übernommenen Eintrag später, erscheint der Fund wieder als neu.

### 4. Alle auf einmal übernehmen

**Alle … übernehmen** zeigt vorher, welche Einträge entstehen: wie viele Dienstleister mit dem Vermerk „AV-Vertrag
fehlt“ und wie viele Entwürfe im Verarbeitungsverzeichnis. Erst **… übernehmen** im Dialog legt sie an.

<img src="/screenshots/datenschutz/erkannte-dienste-3-alle.webp" alt="Dialog „Alle 6 Dienste übernehmen?“ mit der Liste der Dienste und der Zahl der Verzeichnis-Entwürfe je Dienst, darunter der Satz „Es entstehen 6 Dienstleister-Einträge mit dem Vermerk ‚AV-Vertrag fehlt‘ und 10 Entwürfe im Verarbeitungsverzeichnis“ und die Knöpfe Abbrechen und 6 übernehmen" width="448" height="451" loading="lazy" />

## Wann Hugo prüft

- einmal pro Woche von selbst,
- nach jedem abgeschlossenen Website-Check Ihrer Organisation,
- wenn sich die Website im Firmenprofil ändert,
- wenn Sie **Erneut prüfen** klicken (höchstens einmal pro Stunde).

Ein Dienst, dessen Spur in mehreren Prüfungen nacheinander fehlt, gilt als entfallen. Bereits übernommene Einträge
bleiben in Ihrer Liste.

## Was bedeutet die Einordnung?

| Satz auf der Karte | Bedeutung |
|---|---|
| Verarbeitet in der Regel Daten in Ihrem Auftrag: AV-Vertrag nötig. | Typischer Auftragsverarbeiter nach Art. 28 DSGVO. |
| Arbeitet meist in eigener Verantwortung … Ein AV-Vertrag ist dann nicht nötig. | Eigener Verantwortlicher, zum Beispiel Zahlungsdienst oder Bank. |
| Ob ein AV-Vertrag nötig ist, hängt davon ab, wie Sie den Dienst nutzen. | Kommt auf Ihre Nutzung an; klären Sie es mit Ihrem Datenschutzbeauftragten. |

Die Einordnung ist ein Hinweis für den Regelfall, keine Prüfung Ihres Einzelfalls.

## Grenzen

- **Dienste ohne Spur in Website oder Domain erkennt Hugo nicht**, etwa Lohnbüro, Steuerberatung, IT-Dienstleister,
  Buchhaltungssoftware oder Aktenvernichtung. Die tragen Sie wie bisher selbst ein; der Abschnitt sagt das auch, wenn
  er nichts findet.
- Ein Eintrag in der Domain beweist nicht, dass Sie den Dienst heute noch nutzen. Alte Bestätigungseinträge bleiben
  oft jahrelang stehen. Prüfen Sie jeden Fund, bevor Sie ihn übernehmen.
- Hugo liest nur Ihre eigene Domain und nur öffentliche Einträge. Postfächer, Konten oder Rechnungen sieht Hugo nicht.
- Hugo erkennt nur Dienste, die im Katalog stehen. Fehlt Ihnen ein Dienst, den Hugo hätte erkennen müssen, schreiben
  Sie uns an [info@fraghugo.de](mailto:info@fraghugo.de).

## Häufige Fehler

- **„Tragen Sie Ihre Website ein, dann sucht Hugo nach Diensten.“** Im Firmenprofil fehlt die Website. Tragen Sie sie
  über den Knopf darunter ein; die Prüfung startet dann von selbst.
- **„Für die Dienste auf Ihrer Website fehlt ein aktueller Website-Check.“** Starten Sie über **Website jetzt prüfen**
  einen Check Ihrer Website; danach erscheinen auch die eingebundenen Dienste.
- **„Erneut prüfen“ ist ausgegraut.** Seit der letzten Prüfung ist noch keine Stunde vergangen.
- **„Tarife ansehen“ statt Funden.** Die Erkennung läuft nur mit einem Tarif der Datenschutz-Suite.
- **Kein Abschnitt zu sehen.** Ihre Rolle darf die Dienstleister-Seite nicht sehen; fragen Sie den Hauptadministrator
  Ihrer Firma.

## Mit dem KI-Assistenten

Ist Ihr KI-Assistent mit frag.hugo verbunden, kann er die Funde lesen und übernehmen, zum Beispiel: „Übernimm die
erkannten Dienste und sag mir, wo der Vertrag fehlt.“ Jede Übernahme steht im Protokoll und lässt sich 90 Tage
zurücknehmen. Mehr unter [KI-Assistent](/ki-assistent/).
