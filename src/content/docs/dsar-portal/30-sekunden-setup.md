---
title: "Public-DSAR-Portal in 30 Sekunden einrichten"
description: "3 Embed-Varianten ohne CNAME, mit Code-Snippets zum Copy-Paste."
---

Im Gegensatz zu OneTrust (4-8 Wochen Setup) oder DataGuard (2-4 Wochen mit Beratung) richten Sie Ihr Public-DSAR-Portal mit Hugo in **30 Sekunden** ein.

## Schritt 1: Portal aktivieren

1. Im Mandanten-Account einloggen unter `app.fraghugo.de`
2. Sidebar → Vorfälle & Anfragen → Public-Portal
3. **Slug** definieren (z. B. `musterfirma`)
4. **Firmen-Name + Akzent-Farbe** für Branding setzen
5. **Notification-Mails** definieren (DSB + Datenschutz-Team)
6. Speichern → Portal aktiv

→ URL: `https://app.fraghugo.de/m/musterfirma`

## Schritt 2: Embed-Variante wählen

### Variante A — Direct-Link (0 Setup, 30 Sekunden)

Auf Datenschutzerklärung packen:

```html
<a href="https://app.fraghugo.de/m/musterfirma"
   target="_blank" rel="noopener">
  Datenschutz-Anfrage stellen
</a>
```

### Variante B — Iframe-Embed

Vollständig in eigene Seite einbetten:

```html
<iframe src="https://app.fraghugo.de/m/musterfirma?embed=1"
        style="width:100%;height:780px;border:0"
        title="Datenschutz-Anfrage"
        loading="lazy"></iframe>
```

### Variante C — Direct-URL teilen

Magic-Link an Antragsteller schicken oder in Mail-Signatur einbinden:

```
https://app.fraghugo.de/m/musterfirma
```

## Vergleich mit Konkurrenz

| Anbieter | Setup-Zeit | DNS/CNAME | DACH-Aufsichtsbehörden |
|----------|------------|-----------|-------------------------|
| Hugo DSB | 30 Sek | nein | ja, alle 17 |
| Iubenda | 5-10 Min | nein | nein |
| SAR Portal | 5 Min | nein | nein |
| OneTrust | 4-8 Wochen | meist ja | ja (Enterprise) |
| Securiti | 4-8 Wochen | ja | nein |

## Custom-Subdomain (Pro+)

Statt `app.fraghugo.de/m/musterfirma` können Sie eigene Subdomain wie `anfrage.musterfirma.de` einrichten.

1. CNAME auf `dsar.fraghugo.de` setzen
2. Im Portal-Settings „Custom-Subdomain" eintragen
3. Cloudflare-for-SaaS macht den Rest automatisch

→ 5-10 Minuten DNS-Aufwand, aber für Trust und Branding wertvoll.

## Apex-Domain (Enterprise)

Komplette Domain wie `datenschutz.musterfirma.de` als eigene Apex-Domain. 15 Minuten DNS-Setup.
