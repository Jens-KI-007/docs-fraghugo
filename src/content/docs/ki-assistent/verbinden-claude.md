---
title: Claude verbinden
description: frag.hugo als Konnektor in Claude einrichten, im Browser, in der Desktop-App, auf dem Handy und in Claude Code. Mit Anmeldung bei frag.hugo und den Rechten, die Sie erlauben.
---

Claude verbindet sich über einen Konnektor mit frag.hugo. Die Einrichtung dauert rund zwei Minuten. Sie brauchen dafür
die Adresse des frag.hugo-Servers:

```
https://mcp.fraghugo.de/mcp
```

Für die öffentlichen Werkzeuge (Bußgelder, Fristen, Software-Prüfung, Website-Prüfung) reicht die Adresse. Sollen
Einträge in Ihrem Konto entstehen, schickt Claude Sie einmal zur Anmeldung bei frag.hugo.

## Claude im Browser, in der Desktop-App und auf dem Handy

1. Öffnen Sie in Claude die **Einstellungen** und dort **Konnektoren**.
2. Wählen Sie **Benutzerdefinierten Konnektor hinzufügen**. Als Namen tragen Sie „frag.hugo“ ein, als Adresse
   `https://mcp.fraghugo.de/mcp`.
3. Stellen Sie im Gespräch eine Frage, zum Beispiel „Was fehlt bei uns noch im Datenschutz?“. Braucht Claude dafür Ihr
   Konto, öffnet sich die Anmeldung bei frag.hugo.

Einen Konnektor, den Sie im Browser eingerichtet haben, nutzt Claude auch in der Desktop-App und auf dem Handy.

**Team- und Enterprise-Arbeitsbereiche:** Dort fügt die Verwaltung des Arbeitsbereichs den Konnektor einmal für alle
hinzu. Jede Person meldet sich danach mit ihrem eigenen frag.hugo-Konto an.

## Die Anmeldung bei frag.hugo

Claude öffnet ein Fenster der frag.hugo-App. Sind Sie dort noch nicht angemeldet, melden Sie sich wie gewohnt an, mit
Passwort, Google oder Microsoft. Danach sehen Sie die Seite **KI-Assistent verbinden**. Dort steht:

- welches Programm zugreifen möchte,
- was der Assistent darf, in Alltagssprache (zum Beispiel „Ihre Einträge lesen“ und „Einträge anlegen und ändern“),
- für welche Firma die Verbindung gilt. Gehören Sie zu mehreren Firmen, wählen Sie hier eine aus.

Mit **Erlauben** ist Claude verbunden, mit **Ablehnen** passiert nichts. Danach können Sie das Fenster schließen und im
Gespräch weitermachen.

Gut zu wissen:

- Die Anfrage muss innerhalb von zehn Minuten bestätigt werden. Ist sie abgelaufen, starten Sie die Verbindung in Claude
  neu.
- Ist Ihr Konto mit einem zweiten Faktor geschützt, melden Sie sich einmal neu an; danach geht es auf der Seite weiter.
- Mit einer Anmeldung über das Firmenkonto (SSO) lässt sich noch kein KI-Assistent verbinden. Melden Sie sich dafür
  mit Passwort, Google oder Microsoft an.
- Die Verbindung gilt für Ihr Konto, nicht für die ganze Firma. Der Assistent darf nur, was Sie in der App dürfen.

## Claude Code

In Claude Code, dem Programm für die Kommandozeile, gibt es zwei Wege.

Als Plugin, mit dem Server und sechs Fachanleitungen:

```
/plugin marketplace add Jens-KI-007/fraghugo-claude-plugin
/plugin install fraghugo@fraghugo
```

Oder nur der Server:

```
claude mcp add --transport http fraghugo https://mcp.fraghugo.de/mcp
```

Das Plugin liegt offen auf [GitHub](https://github.com/Jens-KI-007/fraghugo-claude-plugin) (MIT-Lizenz). Die
Anmeldung bei frag.hugo läuft wie oben über den Browser. Weil die Anfrage dann von einem Programm auf Ihrem eigenen
Rechner kommt, zeigt die Seite einen zusätzlichen Hinweis: Erlauben Sie sie nur, wenn Sie die Verbindung gerade selbst
gestartet haben.

## Verbindung trennen

In der App unter **Einstellungen → KI-Assistenten** sehen Sie jede verbundene Anwendung mit Zeitpunkt und trennen sie
einzeln. Eine Verbindung endet außerdem von selbst nach 90 Tagen ohne Nutzung. Was ein Assistent geändert hat, steht
auf derselben Seite, siehe [Protokoll und Rückgängig](/ki-assistent/protokoll-und-rueckgaengig/).

## Erster Satz zum Ausprobieren

„Was ist bei uns im Datenschutz als Nächstes dran?“ Claude liest dann Ihren Stand in „Ihr Weg“ und nennt den
nächsten Schritt mit Link in die App. Weitere Sätze: [Beispielsätze](/ki-assistent/beispielsaetze/).
