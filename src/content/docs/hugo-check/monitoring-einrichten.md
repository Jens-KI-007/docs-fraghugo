---
title: "Website-Monitoring einrichten"
description: "Hugo Check Pro überwacht Ihre Website automatisch. So richten Sie Monitoring, Intervalle und Alerts in 5 Minuten ein."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Pro- und Agentur-Nutzer</span>
  <span><span class="label">Lesezeit:</span> 4 Minuten</span>
</div>

Ein einmaliger Scan ist nett. Ein **kontinuierliches Monitoring** ist wertvoll. Hugo Check Pro prüft Ihre Website in einem Intervall Ihrer Wahl – und meldet sich, sobald sich etwas verschlechtert.


![Monitoring-Bereich in Hugo Check](/screenshots/check-monitoring.png)

## Warum überhaupt Monitoring?

Datenschutz-Compliance ist kein Zustand, sondern ein Prozess. An jedem dieser Tage kann sich Ihre Website unbemerkt verschlechtern:

- **Sie installieren ein neues Plugin** – das setzt heimlich Cookies vor der Einwilligung
- **Ihr Hoster wechselt das Server-Setup** – Sicherheits-Header gehen verloren
- **Ihr Mailprovider verändert die DNS-Konfiguration** – DMARC ist plötzlich auf `none`
- **Ein Mitarbeiter ändert das Cookie-Banner** – die „Ablehnen"-Option verschwindet

Ohne Monitoring merken Sie das erst, wenn jemand eine Beschwerde einreicht. Mit Monitoring sehen Sie die Verschlechterung am nächsten Tag.

## Schritt 1: Domain hinzufügen

Loggen Sie sich auf [check.fraghugo.de](https://check.fraghugo.de) ein. Im Dashboard sehen Sie den Bereich **„Meine Domains"**. Klicken Sie auf **„Domain hinzufügen"**.

Tragen Sie ein:
- **Domain** – z. B. `www.ihre-firma.de`
- **Anzeigename** (optional) – z. B. „Hauptseite" oder „Shop"
- **Tags** (optional) – z. B. „Marketing", „Produktion"

Klicken Sie auf **„Speichern"**. Hugo Check führt sofort den ersten Scan durch.

> 💡 **Tipp:** Wenn Sie Subdomains haben, fügen Sie jede einzeln hinzu. `firma.de`, `shop.firma.de` und `blog.firma.de` werden separat überwacht.

## Schritt 2: Intervall wählen

Für jede Domain stellen Sie ein, wie oft sie gescannt werden soll:

- **Täglich** – für aktiv gepflegte Seiten und Shops
- **Wöchentlich** – für Standard-Websites mit gelegentlichen Updates
- **Monatlich** – für reine Imageseiten, die selten geändert werden

Im **Pro-Tarif** ist täglich das Minimum (also höchstens täglich). Im **Agentur-Tarif** können Sie mehrmals täglich scannen, falls Ihr Workflow das verlangt.

## Schritt 3: Alerts einrichten

Sie wollen nicht jeden Tag ins Dashboard schauen. Deshalb gibt es Alerts. Pro Domain können Sie wählen:

- **Score-Verschlechterung** – Hugo meldet sich, wenn der Score um mehr als X Punkte fällt (Standard: 5)
- **Neue kritische Befunde** – Sobald ein Check von ✅ auf ❌ wechselt
- **Erreichbarkeit** – Wenn Ihre Seite gar nicht mehr erreichbar ist
- **Zertifikat läuft ab** – 30 Tage vor Ablauf des SSL-Zertifikats

Alerts kommen per **E-Mail**, optional zusätzlich als **Webhook** (Slack, Microsoft Teams, eigene Systeme).

## Schritt 4: Monitoring-Dashboard verstehen

Im Monitoring-Dashboard sehen Sie für jede Domain:

- **Aktueller Score** und Trend (steigend/fallend)
- **Letzter Scan** mit Zeitstempel
- **Offene Befunde** sortiert nach Priorität
- **Verlauf** als Diagramm (Score über Zeit)
- **Veränderungen** seit letztem Scan (was wurde besser, was schlechter)

So sehen Sie auf einen Blick, ob Ihre Compliance-Lage stabil ist oder sich verändert.

## Tipps für die Praxis

**Setzen Sie sich einen Tag im Monat als „Compliance-Tag".**
Schauen Sie an diesem Tag in Hugo Check, beheben Sie offene Befunde, und dokumentieren Sie das für Ihre Akte. Das dauert in der Regel 30 Minuten und ist Ihr persönlicher Audit-Trail.

**Nutzen Sie Tags für mehrere Marken oder Standorte.**
Wenn Sie 10 Domains haben, helfen Tags („B2B", „Shop", „Karriere") bei der Filterung im Dashboard.

**Geben Sie Webdesignern eine eigene Sicht.**
Im Agentur-Tarif können Sie für jede Domain externe Mitarbeiter freischalten – die sehen nur diese Domain, nicht den Rest Ihres Accounts.

<div class="related-articles">

### Verwandte Artikel
- [Pro-Features im Überblick](/hugo-check/pro-features/)
- [Konkurrenz-Vergleich](/hugo-check/konkurrenz-vergleich/)
- [Hugo Check Tarife](/hugo-check/check-tarife/)

</div>

<div class="cta-banner">
  <h3>Monitoring 14 Tage testen</h3>
  <p>Pro-Trial enthält volles Monitoring – ohne Kreditkarte.</p>
  <a href="https://check.fraghugo.de/pricing" class="cta-button">14 Tage gratis testen →</a>
</div>
