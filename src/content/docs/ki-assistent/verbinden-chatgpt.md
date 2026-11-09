---
title: ChatGPT verbinden
description: Stand der App „frag.hugo“ in ChatGPT und wie Sie frag.hugo schon heute als eigenes Plugin in ChatGPT hinzufügen.
---

## Stand

Die App „frag.hugo“ für ChatGPT ist bei OpenAI in Prüfung. Nach der Freigabe finden Sie sie im App-Verzeichnis von
ChatGPT und fügen sie mit einem Klick hinzu. Diese Seite wird dann ergänzt.

Bis dahin fügen Sie frag.hugo in ChatGPT selbst als Plugin hinzu. Das geht auch im kostenlosen Konto, und Sie haben
sofort alle Werkzeuge, die auch Claude bekommt.

## Als Plugin hinzufügen

1. Öffnen Sie in ChatGPT den Bereich **Plugins** und wählen Sie **Hinzufügen** und dann **Benutzerdefinierten
   MCP-Server hinzufügen**. In Firmen-Arbeitsbereichen kann die Verwaltung das freigeben oder sperren.
2. Name: „frag.hugo“, Server-Adresse:

   ```
   https://mcp.fraghugo.de/mcp
   ```

   Als Authentifizierung wählen Sie OAuth. ChatGPT zeigt einen Hinweis zu selbst hinzugefügten Servern; bestätigen
   Sie ihn und wählen Sie **Als Plugin erstellen**.
3. Mit **frag.hugo verbinden** öffnet ChatGPT die Anmeldung bei frag.hugo. Sie sehen die Seite **KI-Assistent
   verbinden** mit den Rechten in Alltagssprache und der Firma, für die die Verbindung gilt. Mit **Erlauben** ist
   ChatGPT verbunden, und frag.hugo steht unter den installierten Plugins.
4. Sagen Sie im Gespräch, was zu tun ist, zum Beispiel: „Was ist bei uns im Datenschutz als Nächstes dran?“

   ChatGPT holt sich den Stand aus frag.hugo und antwortet mit Ihren echten Zahlen:

   ![ChatGPT-Antwort mit dem Stand aus frag.hugo: 1 von 9 Schritten erledigt, eine Tabelle mit Firmenangaben, Datenschutz-Ansprechperson (erledigt), Bestandsaufnahme (offen), 15 Verarbeitungstätigkeiten, davon 8 unvollständig, 13 Auftragsverarbeiter, 7 von 14 Maßnahmen bewertet](/screenshots/ki-assistent/chatgpt-gespraech-ergebnis.png)

Die Anmeldeseite ist dieselbe wie bei Claude. Was dort zu beachten ist (zehn Minuten Zeit, zweiter Faktor, keine
Anmeldung über das Firmenkonto per SSO), steht unter [Claude verbinden](/ki-assistent/verbinden-claude/#die-anmeldung-bei-fraghugo).

## Sprechen statt tippen

Die ChatGPT-App auf dem Handy und am Rechner nimmt Sprache an. Sie können Einträge also diktieren, etwa: „Die drei
Neuen ab Montag bekommen die Unterweisungen Bildschirmarbeit und Brandschutz, Frist in vier Wochen.“

## Datenschutz

Was Sie ChatGPT sagen und was ChatGPT aus frag.hugo liest, verarbeitet OpenAI. Für Personendaten wie Ihre
Mitarbeiterliste nutzen Sie bitte einen Geschäftstarif mit Auftragsverarbeitungsvertrag, etwa ChatGPT Business oder
Enterprise. Mehr unter [Datenschutz beim KI-Assistenten](/ki-assistent/datenschutz/).

## Verbindung trennen

In der App unter **Einstellungen → KI-Assistenten**. Dort steht auch, was ChatGPT geändert hat, und Sie nehmen
Einträge 90 Tage lang zurück.
