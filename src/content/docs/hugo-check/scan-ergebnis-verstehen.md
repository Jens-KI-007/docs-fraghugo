---
title: "Scan-Ergebnis verstehen"
description: "Was bedeutet Ihr DSGVO-Score? Wie sind die 29 Checks aufgebaut? Diese Anleitung erklärt jedes Symbol, jede Farbe und jede Kategorie."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, IT-Leiter, Webmaster</span>
  <span><span class="label">Lesezeit:</span> 5 Minuten</span>
</div>

Sie haben Ihren ersten Scan durchgeführt – jetzt sehen Sie eine Zahl zwischen 0 und 100 und viele Häkchen, Warnungen und Kreuze. Diese Seite erklärt, was das alles bedeutet.

## Der DSGVO-Score (0–100)

Der Score ist ein gewichteter Durchschnitt aus allen 29 Einzelchecks. So lesen Sie ihn:

| Score | Farbe | Bedeutung |
|---|---|---|
| **90–100** | Grün | Sehr gut. Keine kritischen Probleme. |
| **70–89** | Hellgrün | Gut. Einzelne Verbesserungen möglich. |
| **50–69** | Gelb | Mittelmäßig. Sie haben blinde Flecken. |
| **30–49** | Orange | Schlecht. Mehrere ernste Probleme. |
| **0–29** | Rot | Kritisch. Abmahn-Risiko. |

![Ergebnis-Seite mit Score-Kreis](/screenshots/check-ergebnis.png)

> ⚠️ **Wichtig:** Ein Score von 100 heißt nicht „rechtssicher". Hugo Check prüft technische Punkte, die automatisiert messbar sind. Ob Ihr Impressum inhaltlich korrekt ist oder Ihre Cookie-Zwecke wirklich passen, kann nur ein Mensch beurteilen.

## Die vier Kategorien

### 1. Datenschutz (8 Checks)

Hier prüfen wir alles, was direkt mit der DSGVO zu tun hat:

- **Cookie-Banner vorhanden?** – Auch dann, wenn Sie nur einen Tracker haben
- **Cookie-Banner mit echter Ablehnen-Option?** – „OK" und „Mehr erfahren" reicht nicht
- **Impressum erreichbar?** – Vollständig, mit Pflichtangaben
- **Datenschutzerklärung erreichbar?** – Verlinkt im Footer und im Cookie-Banner
- **Tracking-Tools erkannt?** – Google Analytics, Meta Pixel, etc.
- **Tracker laden vor Einwilligung?** – Häufiger Fehler bei selbstgebauten Bannern
- **Externe Schriften?** – Google Fonts ohne Selbsthosting ist problematisch
- **YouTube/Vimeo-Embeds?** – Mit oder ohne Cookie-Schutz?

### 2. E-Mail (6 Checks)

E-Mail-Sicherheit ist Datenschutz, weil Phishing in Ihrem Namen ein Schadensfall sein kann.

- **SPF-Eintrag** – Wer darf in Ihrem Namen Mails versenden?
- **DKIM-Eintrag** – Sind Ihre Mails kryptografisch signiert?
- **DMARC-Eintrag** – Was passiert, wenn jemand fälscht?
- **DMARC-Modus** – `none`, `quarantine` oder `reject`?
- **MX-Einträge** – Wer empfängt Ihre Mails?
- **TLS-Verschlüsselung** – Verschlüsselte Übertragung zum Mailserver?

### 3. Header (10 Checks)

HTTP-Header sind technische Anweisungen, die Browser vor Angriffen schützen:

- **HTTPS aktiv?** – Sollte 2025 selbstverständlich sein
- **HSTS gesetzt?** – Erzwingt HTTPS auch beim ersten Besuch
- **HSTS Preload** – Im Browser fest verankert
- **Content-Security-Policy** – Verhindert Code-Injection
- **X-Frame-Options** – Schutz vor Clickjacking
- **X-Content-Type-Options** – Schutz vor MIME-Sniffing
- **Referrer-Policy** – Welche Daten werden bei Links weitergegeben?
- **Permissions-Policy** – Welche Browser-APIs darf die Seite nutzen?
- **Cross-Origin-Resource-Policy** – Schutz vor Ressourcen-Diebstahl
- **Server-Header** – Verrät Ihre Server Software und Version?

### 4. Domain (5 Checks)

- **DNSSEC aktiv?** – Schutz vor DNS-Spoofing
- **CAA-Eintrag?** – Wer darf Zertifikate für Ihre Domain ausstellen?
- **TLS-Version** – Ist Ihr Server auf dem neuesten Stand?
- **Zertifikat gültig?** – Nicht abgelaufen, korrekte Domain
- **HTTP/2 oder HTTP/3?** – Performance und Sicherheit

## Die Symbole

Jeder Check zeigt ein Symbol:

- **✅** – Alles in Ordnung
- **⚠️** – Verbesserungswürdig, aber kein Showstopper
- **❌** – Problem. Sollten Sie beheben.

Klicken Sie auf einen Check, um Details zu sehen: was geprüft wurde, was wir gefunden haben, und (im Pro-Tarif) eine Schritt-für-Schritt-Anleitung zur Behebung.

![Vollständiges Scan-Ergebnis mit allen Pro-Analysen](/screenshots/check-ergebnis-pro.png)

## „Mein Score ist schlecht – was jetzt?"

Keine Panik. Die meisten KMU haben beim ersten Scan einen Score zwischen 40 und 60. Das ist normal – kaum jemand setzt sich freiwillig mit HSTS und CSP auseinander.

So gehen Sie vor:

1. **Quick Wins zuerst:** Was können Sie heute beheben? Cookie-Banner austauschen, Google Fonts selbst hosten – das sind Aufgaben, die ein guter Webdesigner in einer Stunde erledigt.
2. **Mittelfristig:** Header-Konfiguration. Viele Hoster haben dafür eigene Anleitungen.
3. **Langfristig:** E-Mail-Authentifizierung (SPF/DKIM/DMARC) – das braucht oft Hilfe vom Mailprovider.

Im **Pro-Tarif** bekommen Sie für jeden Punkt eine konkrete Fix-Anleitung – inklusive Beispiel-Code für die häufigsten CMS (WordPress, Webflow, Shopify, Typo3).

<div class="related-articles">

### Verwandte Artikel
- [KI-Analyse: Was die KI prüft](/hugo-check/ki-features/)
- [Pro-Features im Überblick](/hugo-check/pro-features/)
- [Hugo Check: Free, Pro oder Agentur?](/hugo-check/check-tarife/)

</div>

<div class="cta-banner">
  <h3>Sie verstehen das Ergebnis nicht?</h3>
  <p>15 Minuten mit Nils. Wir gehen Ihren Scan gemeinsam durch.</p>
  <a href="https://meet.brevo.com/fraghugo/intro" class="cta-button">Erstgespräch mit Nils →</a>
  <small style="display:block;margin-top:0.5rem;opacity:0.6;">Lieber erstmal schreiben? <a href="https://www.fraghugo.de/kontakt/#formular">Kontaktformular →</a></small>
</div>
