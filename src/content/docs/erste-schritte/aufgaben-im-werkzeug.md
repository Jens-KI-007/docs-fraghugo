---
title: Aufgaben in Ihrem Werkzeug
description: "Hugo schreibt, was als Nächstes fällig ist, als Aufgaben in Microsoft Planner oder über eine Web-Adresse in Make, Zapier oder n8n. Was mitgeht, was nicht und wie Sie verbinden."
---

Wer seine Arbeit in einem Aufgaben-Werkzeug plant, muss für den Datenschutz nicht in zwei Listen schauen. Hugo
schreibt, was als Nächstes fällig ist, als Aufgaben in Ihr Werkzeug — mit Fälligkeit und einem Link zurück in Hugo.
Es ist dieselbe Liste, die Ihre Startseite unter „Als Nächstes“ zeigt, nur vollständig.

Eingebaut ist **Microsoft Planner**. Alle anderen Werkzeuge, etwa Jira, ClickUp, Notion oder MeisterTask, erreichen
Sie über eine **Web-Adresse** in Make, Zapier oder n8n. Trello, monday.com und Asana stehen in der Karte als
„In Kürze“; bis dahin verbinden Sie sie ebenfalls über Make, Zapier oder n8n.

## Wer es nutzen kann

- In **jedem bezahlten Tarif** enthalten, ohne Aufpreis.
- Verbinden kann nur ein **Hauptadministrator** Ihrer Firma.
- Je Firma gibt es **eine** Verbindung.

Sie finden die Karte unter **Einstellungen → Organisation → „Aufgaben in Ihrem Werkzeug“**.

## Was als Aufgabe mitgeht

- Ihre eigenen offenen Aufgaben aus Hugo
- Betroffenenanfragen, die beantwortet werden müssen
- Datenpannen mit laufender Meldefrist
- Auftragsverarbeitungsverträge, die zur Prüfung anstehen
- die Überprüfung Ihrer technischen und organisatorischen Maßnahmen
- die jährliche Datenschutz-Prüfung
- fällige Unterweisungen, zusammengefasst als **eine** Aufgabe je Fälligkeitstag („Unterweisungen: 4 Personen fällig“)

**Was nie mitgeht:** Namen von Mitarbeitenden oder Betroffenen, Inhalte von Anfragen oder Datenpannen,
Beschreibungen Ihrer eigenen Aufgaben und alles aus dem Hinweisgebersystem. Die Aufgabe trägt einen Titel wie
„Betroffenenanfrage beantworten“, das Fälligkeitsdatum und den Link. Die Einzelheiten sehen Sie erst in Hugo. Bei
Auftragsverarbeitungsverträgen steht der Name des Dienstleisters im Titel; das ist ein Firmenname.

## Microsoft Planner verbinden

1. Wählen Sie in der Karte **Microsoft Planner** und melden Sie sich mit Ihrem Microsoft-365-Konto an.
2. Hugo bittet dabei nur um das Recht, **in Ihrem Namen** Aufgaben zu lesen und zu schreiben. Je nach Einstellung
   Ihres Microsoft 365 muss Ihre IT-Verwaltung der Anmeldung einmal zustimmen.
3. Wählen Sie **Plan** und **Bucket**. Zur Auswahl stehen die Pläne, in denen Sie Mitglied sind.
4. Hugo zeigt eine **Vorschau**: „Diese Aufgaben würden angelegt“. Geschrieben wird erst, wenn Sie **Übernehmen**
   klicken.

Ist eine Sache in Hugo erledigt, setzt Hugo die Aufgabe in Planner auf erledigt.

## Über Make, Zapier oder n8n verbinden

1. Legen Sie in Ihrem Werkzeug einen Eingang für Aufrufe an:
   in Make „Webhooks → Custom webhook“, in Zapier „Webhooks by Zapier → Catch Hook“, in n8n den Knoten „Webhook“
   mit der Methode POST.
2. Wählen Sie in der Karte **Make, Zapier oder n8n**, tragen Sie die Adresse ein und klicken Sie
   **„Adresse prüfen und verbinden“**. Es gehen nur `https`-Adressen aus dem Internet; Adressen in Ihrem eigenen
   Netz nimmt Hugo nicht an.
3. Hugo zeigt Ihnen einmalig ein **Signatur-Geheimnis**. Kopieren Sie es gleich, später ist es nicht mehr zu sehen.

Je Frist schickt Hugo einen POST mit JSON:

```json
{
  "ereignis": "angelegt",
  "schluessel": "anfrage:3f2c…",
  "titel": "Betroffenenanfrage beantworten",
  "faellig_am": "2026-12-04",
  "link": "https://app.fraghugo.de/dsb/…",
  "gesendet_am": "2026-11-24T10:15:00Z"
}
```

- `ereignis` ist `angelegt`, `geaendert` oder `erledigt`.
- `schluessel` bleibt für dieselbe Frist immer gleich. Darüber finden Sie die Aufgabe in Ihrem Werkzeug wieder,
  wenn sie sich ändert oder erledigt ist.
- Im Kopf `X-Hugo-Signatur: sha256=…` steht ein HMAC-SHA256 über den Rumpf, gebildet mit Ihrem Geheimnis. Damit
  prüfen Sie, dass der Aufruf wirklich von Hugo kommt.

## Wie oft Hugo abgleicht

Alle **15 Minuten**. Hugo legt neue Aufgaben an, ändert Titel und Fälligkeit, wenn sie sich in Hugo ändern, und
schließt Aufgaben, die in Hugo erledigt sind. Mit **„Jetzt abgleichen“** stoßen Sie einen Abgleich sofort an
(höchstens einmal je Minute). Die Karte zeigt den letzten Lauf und, falls etwas schiefging, den Grund in Klartext,
etwa wenn der Zugriff entzogen wurde oder Ihr Werkzeug die Adresse nicht annimmt.

## Im Werkzeug als erledigt markiert

- **Eigene Aufgaben** aus Hugo: Haken Sie die Aufgabe in Planner ab, schließt Hugo sie auch in Hugo, mit dem Vermerk
  „In Microsoft Planner erledigt“. Ausnahme sind Aufgaben, die gerade geprüft werden; dort sehen Sie nur einen Hinweis.
- **Alles andere** (Anfragen, Datenpannen, Verträge, Unterweisungen) ist erst erledigt, wenn es in Hugo erledigt ist.
  Auf der Startseite und unter **Aufgaben** steht dann „In Microsoft Planner als erledigt markiert — hier
  abschließen“.

Über die Web-Adresse kommt nichts zurück. Make, Zapier und n8n empfangen nur.

## Trennen

**Trennen** in der Karte beendet die Verbindung. Hugo schreibt danach nichts mehr in Ihr Werkzeug. Die Aufgaben,
die schon dort stehen, bleiben stehen; löschen Sie sie bei Bedarf selbst.

## Siehe auch

- [Startseite und Navigation](/erste-schritte/dashboard/)
- [Einstellungen](/erste-schritte/einstellungen/)
- [DSGVO-Fristen im Überblick](https://www.fraghugo.de/dsgvo-fristen-uebersicht-nicht-verpassen/) (Blog)
