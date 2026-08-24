---
title: Kostenloses Trust-Badge erstellen und in die Website einbinden
description: Schritt-für-Schritt-Anleitung — von der Anmeldung über den DSGVO-Scan bis zum eingebauten "Datenschutz geprüft"-Siegel im Footer. Inkl. DNS-Verifikation und Code-Snippets für WordPress, Shopify, Wix.
---

Das **Hugo Check Verified Badge** ist ein kostenloses Datenschutz-Siegel für Ihre Website. Es zeigt Besuchern, dass Ihre Seite einem DSGVO-Check unterzogen wurde und dabei mindestens **70 von 100 Punkten** erreicht hat. Diese Anleitung führt Sie durch jeden Schritt — vom Account-Erstellen bis zum live eingebauten Badge.

![Live-Badge im Footer von www.cuttofame.com](/screenshots/badge-tutorial/13-badge-live-cuttofame-footer.png)


:::note[Was auf dem Siegel steht]
Das Siegel nennt **keine Punktzahl**, sondern eine Stufe: ab 90 Punkten „Exzellent", ab 80
„Sehr gut", ab 70 „Gut". Unter 70 Punkten gibt es kein Siegel. Den genauen Score sehen Sie
weiterhin im Scan-Ergebnis und auf der verlinkten Verifizierungsseite — dort ist er Diagnose,
auf der Website des Kunden wäre er eine Note.
:::

## Voraussetzungen

- Eine Website, die per HTTPS erreichbar ist
- Zugang zum DNS Ihrer Domain (für TXT-Verifikation) **oder** eine E-Mail-Adresse auf der Domain (z. B. `info@ihre-firma.de`)
- DSGVO-Score von **mindestens 70/100** im Scan (wird automatisch geprüft). Darunter wird kein Siegel vergeben — das ist Absicht, sonst wäre es keine Aussage.

## 1. Account anlegen (kostenlos)

Öffnen Sie [app.fraghugo.de](https://app.fraghugo.de) und klicken Sie auf „Konto erstellen".

![Registrierungsformular](/screenshots/badge-tutorial/01-signup.png)

Tragen Sie Ihren Namen, eine **geschäftliche E-Mail-Adresse auf Ihrer Domain** und ein Passwort ein. Wenn Sie z. B. `meine-firma.de` betreiben, nutzen Sie `vorname@meine-firma.de` — das vereinfacht später die Badge-Verifikation per E-Mail.

![Registrierung ausgefüllt](/screenshots/badge-tutorial/02-signup-ausgefuellt.png)

Sie erhalten eine Bestätigungsmail. Klicken Sie auf den Link, dann sind Sie eingeloggt.

![Dashboard nach dem Login](/screenshots/badge-tutorial/04-dashboard.png)

## 2. Website scannen

Klicken Sie in der Seitenleiste auf **„Neuer Scan"** unter „Website & IT-Sicherheit".

![Scan-Formular leer](/screenshots/badge-tutorial/05-scan-eingabe-leer.png)

Geben Sie Ihre Domain ein (mit oder ohne `https://`) und starten Sie den Scan.

![URL eingegeben](/screenshots/badge-tutorial/06-scan-url-eingegeben.png)

Der Scan läuft 30–60 Sekunden. Sie sehen live, was geprüft wird — von Cookie-Bannern über Tracker bis zu Security-Headers.

![Scan läuft](/screenshots/badge-tutorial/07-scan-laeuft.png)

Am Ende sehen Sie Ihren Score zwischen 0 und 100.

![Scan-Ergebnis mit Score](/screenshots/badge-tutorial/08-scan-ergebnis.png)

:::caution[Score unter 60?]
Dann qualifiziert Ihre Website noch nicht für das Badge. Beheben Sie zuerst die rot markierten Probleme (Tracking vor Einwilligung, fehlende Security-Headers, unvollständiges Impressum) und scannen Sie erneut. Details zu jedem Befund stehen in der [Scan-Doku](/website-it-sicherheit/neuer-scan/).
:::

## 3. Badge generieren

Bei Score ≥ 60 erscheint im Ergebnis eine grüne Box: **„Ihr Score qualifiziert Sie für das Hugo Check Verified Badge!"**

![Badge-CTA im Scan-Ergebnis](/screenshots/badge-tutorial/09-scan-mit-badge-cta.png)

Klicken Sie auf **„Badge generieren"**. Das System erstellt einen pending Trust-Seal-Eintrag und zeigt Ihnen zwei Verifikations-Wege:

- **Per E-Mail** — wir senden einen Bestätigungslink an Ihre Adresse auf der Domain
- **Per DNS-TXT** — Sie legen einen TXT-Record an

## 4a. Verifikation per E-Mail (empfohlen, schnellste Variante)

![Pending-Panel — E-Mail-Option](/screenshots/badge-tutorial/10-badge-pending-email.png)

Wenn Ihre Account-E-Mail auf der gescannten Domain liegt (z. B. `vorname@meine-firma.de` für `meine-firma.de`), bekommen Sie automatisch eine Aktivierungs-Mail. Klicken Sie auf den Link in der Mail — das Badge ist sofort aktiv.

Bekommen Sie die Mail nicht? **„Mail erneut senden"** drücken, dann auch Spam/Junk prüfen.

## 4b. Verifikation per DNS-TXT (auch wenn keine On-Domain-E-Mail vorhanden)

Klicken Sie im Pending-Panel auf **„Per DNS-TXT"**.

![DNS-TXT-Anleitung mit Hostname und Wert](/screenshots/badge-tutorial/11-badge-pending-dns.png)

Sie sehen drei Werte:

| Feld | Wert |
|---|---|
| **Hostname / Name** | `_fraghugo-verify.ihre-domain.de` |
| **Typ** | `TXT` |
| **Wert** | `fraghugo-verify=<ihr-individueller-token>` |

Loggen Sie sich bei Ihrem DNS-Anbieter ein (Cloudflare, IONOS, All-Inkl, Hetzner DNS, GoDaddy, …) und legen Sie einen neuen TXT-Record mit genau diesen Werten an.

:::tip[Cloudflare-Beispiel]
Cloudflare → DNS → „Add record" → Type `TXT`, Name `_fraghugo-verify`, Content `fraghugo-verify=...`, TTL `Auto`. Speichern. Die Propagation dauert je nach Provider 1–10 Minuten.
:::

Prüfen Sie die Propagation kurz selbst:

```bash
dig +short TXT _fraghugo-verify.ihre-domain.de @1.1.1.1
```

Sobald die Ausgabe Ihren Token zeigt, klicken Sie in der App auf **„Jetzt prüfen"**. Das Badge wird sofort aktiviert.

## 5. Embed-Code kopieren

Nach erfolgreicher Verifikation wechselt das Panel auf **„Ihr Verified Badge"** und zeigt:

- **Vorschau** auf hellem und dunklem Hintergrund
- **Größe wählen** — S (120×48), M (150×60, Standard), L (200×80)
- **Embed-Code** als HTML-Snippet
- **Einbau-Anleitungen** für WordPress, Shopify, Wix/Squarespace und allgemeines HTML

![Aktives Badge mit Embed-Code](/screenshots/badge-tutorial/12-badge-aktiv-embed-code.png)

Klicken Sie auf **„Code kopieren"**. Das Snippet sieht so aus:

```html
<!-- Hugo Check Verified Badge -->
<a href="https://www.fraghugo.de/verified/IHR-BADGE-ID"
   target="_blank" rel="noopener">
  <img src="https://verify.fraghugo.de/badge/IHR-BADGE-ID.svg"
       alt="Hugo Check Verified – Datenschutz geprüft"
       width="150" height="60" loading="lazy" />
</a>
```

Das Bild ist ein SVG (klein, scharf auf jedem Display) und ist mit `loading="lazy"` versehen — kein Performance-Verlust.

## 6. Badge in die Website einbauen

### WordPress

Im Admin-Bereich: **Design → Widgets** → Block „Custom HTML" in den Footer-Bereich ziehen → Snippet einfügen → Speichern.

Alternativ in der `footer.php` Ihres Child-Themes direkt vor dem schließenden `</footer>`-Tag einfügen.

### Shopify

**Online-Store → Themes → Edit code** → `sections/footer.liquid` öffnen → Snippet vor dem Copyright-Block einfügen → Save.

### Wix / Squarespace / Jimdo

Footer-Bereich → **„Embed Code"-Element** hinzufügen → HTML-Snippet einfügen → Veröffentlichen.

### Astro / Next.js / statisches HTML

Snippet 1:1 in die Footer-Komponente einsetzen. Hier ein Beispiel aus einer echten Astro-Site (`cuttofame.com`):

```astro
<div class="footer-bottom">
  <p class="footer-copy">&copy; 2026 Firmenname</p>
  <!-- Hugo Check Verified Badge -->
  <a class="footer-badge" href="https://www.fraghugo.de/verified/IHR-BADGE-ID"
     target="_blank" rel="noopener">
    <img src="https://verify.fraghugo.de/badge/IHR-BADGE-ID.svg"
         alt="Hugo Check Verified – Datenschutz geprüft"
         width="150" height="60" loading="lazy" />
  </a>
</div>
```

Nach dem Deployment erscheint das Badge automatisch — wir hosten das SVG, Sie laden es nur per `<img>`.

## 7. Was sehen Besucher?

Ein klickbares Siegel im Footer:

![Badge live im Footer](/screenshots/badge-tutorial/13-badge-live-cuttofame-footer.png)

Klick darauf führt zu `www.fraghugo.de/verified/IHR-BADGE-ID` — einer öffentlichen Detail-Seite mit Score, Prüfdatum, Domain und allen bestandenen Checks. Das schafft Vertrauen ohne den Besucher mit Details zu überfrachten.

## Häufige Fragen

**Wie lange ist das Badge gültig?**
12 Monate ab Aktivierung. Vor Ablauf bekommen Sie eine Erinnerungsmail mit einem Re-Scan-Link. Verbessert sich Ihr Score (oder bleibt stabil ≥ 60), wird automatisch verlängert.

**Was passiert, wenn mein Score nach einem Update der Website fällt?**
Wir scannen Ihre Website nicht automatisch. Solange Sie kein neues Scan-Ergebnis hochladen, bleibt das Badge aktiv. Mit **Hugo Check Pro** (29 €/Monat) bekommen Sie wöchentliches Monitoring + automatisches Badge-Update.

**Wie viel kostet das Badge?**
Komplett kostenlos im Free-Tarif. Pro-Nutzer bekommen zusätzlich gebrandetes Badge-Design.

**Kann ich das Badge auf mehreren Websites einbauen?**
Nein, pro Badge-ID ist genau **eine Domain** verifiziert. Für weitere Domains starten Sie einen neuen Scan dieser Domain — dann erhalten Sie ein eigenes Badge.

**Was wenn meine E-Mail nicht auf der Domain liegt (z. B. `vorname@gmail.com`)?**
Dann nutzen Sie die DNS-TXT-Methode (Schritt 4b). Funktioniert garantiert, egal welcher Anbieter.

**Wie sieht die Verifikations-Seite aus?**
[Beispiel: cuttofame.com Trust-Seal](https://www.fraghugo.de/verified/3181460b-b93c-4805-9dc0-6eefc821e356) — Sie sehen Score, Bewertung, alle geprüften Punkte und Prüfdatum.

**Kann ich das Badge wieder entfernen?**
Entfernen Sie den HTML-Snippet aus dem Footer. In Ihren App-Einstellungen können Sie zusätzlich das Badge im Backend deaktivieren — dann liefert die SVG-URL ein neutrales „Nicht mehr aktiv"-Bild aus.

## Verwandte Themen

- [Neuer Scan: Was wird geprüft?](/website-it-sicherheit/neuer-scan/)
- [Monitoring: Automatisch täglich scannen](/website-it-sicherheit/monitoring/)
- [Scan-Übersicht: Alle Ihre Scans im Verlauf](/website-it-sicherheit/scan-uebersicht/)
