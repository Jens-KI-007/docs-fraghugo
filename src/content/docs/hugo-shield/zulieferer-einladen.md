---
title: "Zulieferer einladen (Auftraggeber)"
description: "So laden Sie Ihre Zulieferer zu einem Hugo Shield Assessment ein – einzeln, per CSV-Bulk-Import oder über die API."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Auftraggeber, Einkauf, Compliance</span>
  <span><span class="label">Lesezeit:</span> 4 Minuten</span>
</div>

Als **Auftraggeber** ist es Ihre Aufgabe, Ihre Zulieferer in Hugo Shield einzuladen, damit sie ein Assessment ausfüllen können. Diese Anleitung zeigt, wie das geht – einzeln, in der Masse oder automatisiert.

## Vorbereitung

Bevor Sie einladen, sollten Sie wissen:

- **Welche Zulieferer** sollen eingeladen werden? (Liste mit Firmenname, Ansprechpartner, E-Mail)
- **Welche Frist** geben Sie? (üblich: 30 Tage)
- **Welcher Score** ist Ihre Mindest-Erwartung? (z. B. „mindestens C")
- **Wer bei Ihnen** ist Ansprechpartner für Rückfragen?

## Schritt 1: Hugo Shield als Auftraggeber öffnen

Loggen Sie sich auf [shield.fraghugo.de](https://shield.fraghugo.de) ein. Im Dashboard wählen Sie die Sicht **„Auftraggeber"**. Sie sehen eine Liste Ihrer bisher eingeladenen Zulieferer (beim ersten Mal: leer).

## Schritt 2: Einzeln einladen

Klicken Sie auf **„Neuen Zulieferer einladen"**. Tragen Sie ein:

- **Firmenname**
- **Ansprechpartner** (Name, optional)
- **E-Mail-Adresse** des Ansprechpartners
- **Branche** (optional, hilft bei der Auswertung)
- **Frist** (Standard: 30 Tage)
- **Persönliche Nachricht** (optional, wird in die Einladungs-Mail eingefügt)

Klicken Sie **„Einladung senden"**. Der Zulieferer bekommt eine Mail mit:
- Wer Sie sind (Auftraggeber)
- Was Hugo Shield ist
- Einem persönlichen Login-Link
- Der Frist

![Einladungs-Formular](/screenshots/shield-features.png)

## Schritt 3: Bulk-Einladung per CSV

Wenn Sie viele Zulieferer haben, nutzen Sie den **CSV-Import**. Unter **„Zulieferer einladen → CSV-Import"** finden Sie eine Vorlage:

```csv
firmenname,ansprechpartner,email,branche
Müller GmbH,Frank Müller,frank@mueller.de,Maschinenbau
Schmidt KG,Lisa Schmidt,lisa@schmidt-kg.de,IT-Dienstleistung
Weber AG,Stefan Weber,stefan.weber@weber-ag.com,Logistik
```

Sie laden die fertige CSV hoch, prüfen die Vorschau und klicken auf **„Alle einladen"**. Hugo Shield versendet die Einladungen sequenziell.

> 💡 **Tipp:** Bei mehr als 50 Einladungen auf einmal verteilt Hugo Shield den Versand über mehrere Stunden, damit die Mails nicht im Spam landen.

## Schritt 4: API-Integration (Enterprise)

Im **Enterprise-Tarif** können Sie Hugo Shield direkt mit Ihrem ERP oder Lieferanten-System verbinden. Die API:

- Legt Zulieferer automatisch an, wenn neue Lieferanten in Ihr ERP kommen
- Synchronisiert Stammdaten
- Holt Score-Daten ab und schreibt sie in Ihr System zurück

Beispiel-API-Aufruf:

```bash
curl -X POST https://api.shield.fraghugo.de/v1/suppliers \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "firma": "Müller GmbH",
    "kontakt": "Frank Müller",
    "email": "frank@mueller.de",
    "branche": "Maschinenbau",
    "frist_tage": 30
  }'
```

## Schritt 5: Einladungen tracken

Im Dashboard sehen Sie pro Zulieferer:

- **Status** (eingeladen / gestartet / abgeschlossen / überfällig)
- **Frist** und Restzeit
- **Score** (sobald abgeschlossen)
- **Letzte Aktivität** (wann hat der Zulieferer zuletzt etwas getan?)

So sehen Sie auf einen Blick, wer noch Hilfe oder eine Erinnerung braucht.

## Schritt 6: Erinnerungen senden

Hugo Shield versendet **automatisch Erinnerungen** an säumige Zulieferer:

- Nach 14 Tagen ohne Aktion
- Nach 21 Tagen
- Nach 28 Tagen (letzte Erinnerung)
- An Tag 30 (Frist abgelaufen)

Sie können auch **manuell erinnern** – z. B. wenn ein Zulieferer für Sie besonders wichtig ist und Sie persönlich nachhaken wollen.

## Schritt 7: Eskalation bei Problemen

Wenn ein Zulieferer das Assessment verweigert oder einen sehr schlechten Score hat, können Sie:

- Die **Frist verlängern** (manche Zulieferer brauchen mehr Zeit)
- Eine **Eskalations-Mail** senden (Hugo Shield hat eine Vorlage)
- Den Zulieferer als **„kritisch"** markieren (intern)
- Den Auftrag **beenden** (außerhalb von Hugo Shield)

## Schritt 8: Zulieferer-Daten verwalten

Pro Zulieferer können Sie:

- **Branche / Kategorie** ändern (für bessere Auswertung)
- **Notizen** hinzufügen (z. B. „Hauptlieferant für Bauteil X")
- **Frist verlängern**
- **Re-Assessment-Zyklus** anpassen
- **Zulieferer entfernen** (wenn nicht mehr aktiv)

## Best Practices

**1. Einladung mit persönlicher Nachricht.**
Erfahrungsgemäß doppelt sich die Beteiligungsquote, wenn Sie eine kurze persönliche Nachricht hinzufügen: „Liebe/r Frau/Herr X, wir müssen unsere Lieferkette nach NIS2 dokumentieren. Bitte unterstützen Sie uns – das dauert ca. 30 Minuten."

**2. Frist großzügig ansetzen.**
30 Tage sind realistisch. Manche Zulieferer brauchen länger, weil sie ihren externen IT-Dienstleister fragen müssen.

**3. Erst einmal die wichtigsten 20 % einladen.**
Das Pareto-Prinzip gilt auch hier: Die 20 % wichtigsten Zulieferer machen 80 % des Risikos aus. Beginnen Sie damit.

**4. Vorab informieren.**
Schicken Sie Ihren Zulieferern vorab eine Mail: „Wir werden Sie demnächst zu einem Cyber-Assessment einladen – das ist Routine, kein Misstrauen, sondern NIS2-Pflicht."

## FAQ

**„Was, wenn ein Zulieferer Hugo Shield nicht nutzen will?"**
Sie können ihm Alternativen anbieten: ein PDF-Fragebogen, ein Telefoninterview, eine ISO-27001-Bestätigung. Die Hauptsache ist, dass Sie **dokumentieren**, dass Sie sich um die Lieferkette kümmern.

**„Wie viele Zulieferer kann ich einladen?"**
Im Starter-Tarif bis 25, im Team-Tarif bis 100, im Enterprise unbegrenzt.

**„Können Zulieferer ihren Score weiterverwenden?"**
Ja. Ein Zulieferer, der bei mehreren Auftraggebern in Hugo Shield ist, füllt das Assessment **nur einmal** aus. Der Score wird mit allen geteilt, denen er die Freigabe erteilt.

<div class="related-articles">

### Verwandte Artikel
- [Auftraggeber-Dashboard](/hugo-shield/shield-dashboard/)
- [Reports erstellen](/hugo-shield/shield-reports/)
- [Assessment ausfüllen (Zulieferer-Sicht)](/hugo-shield/assessment-ausfuellen/)

</div>

<div class="cta-banner">
  <h3>Lieferkette in 30 Tagen abdecken</h3>
  <p>14 Tage Hugo Shield Team gratis – mit Bulk-Einladung und Reports.</p>
  <a href="https://shield.fraghugo.de/pricing" class="cta-button">Team testen →</a>
</div>
