---
title: "Website DSGVO-Check – So funktioniert's"
description: "In 60 Sekunden zum DSGVO-Score Ihrer Website. Ohne Login, ohne Anmeldung. So starten Sie Ihren ersten Hugo Check."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Jeder (kein Login nötig)</span>
  <span><span class="label">Lesezeit:</span> 3 Minuten</span>
</div>

Hugo Check ist der schnellste Weg, um zu erfahren, ob Ihre Website DSGVO-konform ist. Sie geben Ihre URL ein, klicken auf „Jetzt prüfen", und 60 Sekunden später haben Sie eine Antwort. Kein Account, keine Kreditkarte, kein Vertrieb.

## Schritt 1: URL eingeben

Öffnen Sie [check.fraghugo.de](https://check.fraghugo.de). Sie sehen ein einziges Eingabefeld mit dem Platzhalter „www.ihre-website.de".

![Hugo Check Startseite mit URL-Eingabefeld](/screenshots/check-hero.png)

Tragen Sie Ihre Domain ein. Sie können das `https://` weglassen – Hugo Check ergänzt das automatisch. Subdomains funktionieren auch (z. B. `shop.ihre-firma.de`).

> 💡 **Tipp:** Scannen Sie zuerst Ihre eigene Website, dann die der Konkurrenz. Sie werden überrascht sein, wer alles offene Probleme hat.

## Schritt 2: Scan starten

Klicken Sie auf **„Jetzt prüfen"**. Hugo Check ruft Ihre Seite ab und prüft 29 verschiedene Punkte – von Cookies über Impressum bis hin zu HTTP-Headern.

![Scan läuft – Fortschrittsanzeige](/screenshots/check-scan-laeuft.png)

Das dauert in der Regel 30 bis 60 Sekunden. Sie müssen das Fenster nicht offen lassen – wenn Sie wegklicken, läuft der Scan im Hintergrund weiter.

## Schritt 3: Ergebnis lesen

Nach dem Scan landen Sie auf der Ergebnis-Seite. Oben sehen Sie Ihren **DSGVO-Score** zwischen 0 und 100. Darunter sind die 29 Checks in vier Kategorien gruppiert:

- **Datenschutz** – Cookies, Impressum, Datenschutzerklärung, Tracking-Tools
- **E-Mail** – SPF, DKIM, DMARC (Schutz vor Phishing in Ihrem Namen)
- **Header** – HTTP-Sicherheitsheader, HSTS, CSP
- **Domain** – DNS, Erreichbarkeit, SSL-Zertifikat

![Ergebnis-Seite mit Score und Kategorien](/screenshots/check-ergebnis.png)

Was die einzelnen Punkte bedeuten und wie Sie Probleme beheben, lesen Sie im Artikel [Scan-Ergebnis verstehen](/hugo-check/scan-ergebnis-verstehen/).

## Was Sie sonst noch wissen sollten

**Sind die Ergebnisse öffentlich?**
Nein. Standardmäßig kann nur sehen, wer den Link kennt. Wenn Sie das Ergebnis teilen wollen (z. B. mit Ihrem Webdesigner), kopieren Sie die URL aus der Adresszeile.

**Wie oft kann ich scannen?**
So oft Sie wollen. Es gibt kein Limit für anonyme Scans. Wenn Sie regelmäßig dieselbe Domain scannen wollen (z. B. jede Woche), nutzen Sie das [Monitoring](/hugo-check/monitoring-einrichten/) im Pro-Tarif.

**Funktioniert das auch für Subdomains und Pfad-URLs?**
Ja. `shop.firma.de`, `firma.de/shop` – beides funktioniert.

**Was, wenn meine Seite gerade offline ist?**
Dann erscheint eine Fehlermeldung mit dem HTTP-Statuscode. Prüfen Sie kurz, ob Ihre Seite im Browser erreichbar ist, und versuchen Sie es erneut.

<div class="related-articles">

### Verwandte Artikel
- [Scan-Ergebnis verstehen](/hugo-check/scan-ergebnis-verstehen/)
- [KI-Analyse: Was die KI prüft](/hugo-check/ki-features/)
- [Pro-Features im Überblick](/hugo-check/pro-features/)

</div>

<div class="cta-banner">
  <h3>Bereit für Ihren ersten Scan?</h3>
  <p>Kein Account, keine Kreditkarte. Einfach loslegen.</p>
  <a href="https://check.fraghugo.de" class="cta-button">Jetzt scannen →</a>
</div>
