---
title: "Public-Portal aktivieren — Tutorial in 5 Minuten"
description: "Wie Sie das Public-DSAR-Portal in 5 Minuten konfigurieren — Slug, Branding, Notification-Mails, 3 Embed-Varianten."
---

In 5 Minuten haben Sie Ihr eigenes Datenschutz-Anfrage-Portal live. Hier die Schritt-für-Schritt-Anleitung.

## Voraussetzung

Hugo DSB Starter (149 €/Mo) oder höher. Tier-1-Features (Direct-Link, Iframe, JS-Widget, Magic-Link, Hash-Chain) sind alle inkludiert.

## Schritt 1: Settings öffnen

1. In `app.fraghugo.de` einloggen
2. Sidebar: **Vorfälle & Anfragen → Public-Portal**

→ URL: `/dsb/dsar/public-portal`

## Schritt 2: Slug definieren

Der **Slug** ist der URL-Pfad:

`https://app.fraghugo.de/m/{slug}`

Empfehlungen:

- Kurz: `musterfirma` statt `musterfirma-gmbh`
- Klein-Buchstaben + Bindestriche
- Keine Leerzeichen, keine Sonderzeichen

Hugo schlägt automatisch einen Slug aus dem Org-Namen vor.

## Schritt 3: Branding konfigurieren

### Firmen-Name
Wird auf dem Portal als Überschrift gezeigt: „Datenschutz-Anfrage an **Musterfirma GmbH**".

### Logo URL
PNG/SVG-URL eines bereitgestellten Logos. Empfehlung: 200×80 px transparent.

### Akzent-Farbe
Hex-Code Ihrer Marken-Farbe (z.B. `#0EA5E9` für blau, `#F59E0B` für amber). Wird genutzt für:

- Top-Border des Portal-Cards
- Buttons („Weiter", „Anfrage senden")
- Active-Step-Indicator

## Schritt 4: Notification-Mails

Tragen Sie kommagetrennt die Mails ein, die bei Anfrage-Eingang benachrichtigt werden:

```
dsb@musterfirma.de, datenschutz@musterfirma.de
```

Falls leer: nur die DSB-Admins der Org bekommen Notifications.

## Schritt 5: Whitelabel (Pro+)

Wenn Sie **Whitelabel** aktivieren:
- Kein „Powered by frag.hugo Datenschutz"-Footer
- Komplett im Stil Ihrer Marke

Kostet `Pro`-Tier (299 €/Mo).

## Schritt 6: Speichern + Aktivieren

Klick **„Speichern"** → Portal ist live unter `https://app.fraghugo.de/m/{slug}`.

## Schritt 7: Embed-Variante wählen

Sie sehen 3 Snippets zum Copy-Paste:

### Variante A: Direct-Link (30 Sekunden)

```html
<a href="https://app.fraghugo.de/m/musterfirma"
   target="_blank" rel="noopener">
  Datenschutz-Anfrage stellen
</a>
```

→ Auf Datenschutzerklärung packen.

### Variante B: Iframe-Embed

```html
<iframe src="https://app.fraghugo.de/m/musterfirma?embed=1"
        style="width:100%;height:780px;border:0"
        title="Datenschutz-Anfrage"
        loading="lazy"></iframe>
```

→ Vollständig in eigene Seite einbetten.

### Variante C: Direct-URL teilen

Magic-Link an Antragsteller schicken:
```
https://app.fraghugo.de/m/musterfirma
```

## Schritt 8: Custom-Subdomain (Pro+)

Wenn Sie eigene Subdomain `anfrage.musterfirma.de` möchten:

1. CNAME-Record auf `dsar.fraghugo.de` setzen
2. In Portal-Settings „Custom-Subdomain" eintragen
3. Cloudflare-for-SaaS macht den Rest

→ 5-10 Min DNS-Aufwand.

## Schritt 9: Testen

Öffnen Sie `https://app.fraghugo.de/m/{slug}` selbst — gehen Sie als Antragsteller den 4-Step-Wizard durch:

1. Anliegen wählen (z.B. Auskunft Art. 15)
2. Daten eingeben (Name, E-Mail, optional PLZ)
3. Details (Freitext)
4. Bestätigen

→ Magic-Link-Mail kommt an Ihre Test-Mail.

## Schritt 10: Im Admin-Bereich prüfen

Nach Test-Submission sehen Sie die Anfrage in:

- `/dsb/admin/freigaben` (Tab „DSAR")
- `/dsb/admin/dsar` (Cross-Mandanten-Liste)
- Bell-Icon-Notification mit Counter

## Was passiert technisch?

1. **Antragsteller submited** → `dsar-portal-submit` Edge Function
2. **Cloudflare Turnstile** prüft Captcha
3. Magic-Token (64 Bytes) wird erzeugt, 24h gültig
4. **DSAR-Datensatz** angelegt mit Status `offen`, `verified_at = NULL`
5. **Hash-Chain Audit-Trail** Eintrag „eingang"
6. **Resend-Mail** an Antragsteller mit Verifikations-Link
7. Antragsteller klickt → `dsar-portal-verify` Edge Function
8. `verified_at` wird gesetzt, **30-Tage-Frist startet** ab jetzt
9. Hash-Chain Eintrag „identity_verified"
10. **DSB-Notification** über `dsb-review-notifier`

## Frist-Tracking

Die 30-Tage-Frist startet **erst nach Magic-Link-Klick**, nicht beim Eingang. Hugo zeigt:

- In der DSAR-Liste: Live-Countdown („18 Tage verbleibend")
- 7 Tage vor Frist: Reminder-Mail an DSB
- Bei Überfälligkeit: rote Markierung in der Liste

## Verlängerung Art. 12.3

Bei komplexen Anfragen können Sie 2 Monate verlängern:

1. DSAR-Detail öffnen
2. Klick **„Frist verlängern"**
3. Begründung eingeben
4. Hugo sendet automatisch Mail an Antragsteller mit Verlängerungs-Hinweis (Pflicht nach Art. 12.3)

## Konkurrenz-Vergleich

| Anbieter | Setup | DACH-Behörden | Pricing |
|----------|-------|---------------|---------|
| **Hugo DSB** | **30 Sek** | **ja, alle 17** | **149-499 €/Mo** |
| Iubenda | 5-10 Min | nein | ≈100 €/Mo |
| SAR Portal | 5 Min | nein | 29-199 €/Mo |
| OneTrust | 4-8 Wochen | nur Enterprise | 25-60k$/J |

## Plan-Verfügbarkeit

- **Hugo DSB Starter (149 €/Mo):** Tier-1-Features, max 100 Anfragen/Mo, KI-Auto-Response 5×/Mo
- **Pro (299 €):** unlimited + Custom-Subdomain + Auto-Redaction + Whitelabel + KI-Response unlimited
- **Enterprise (499 €):** + Multi-Brand + Webhooks + DSR-API + Auto-Discovery + IMAP-Konnektor

## Nächste Schritte

- [30-Sekunden-Setup im Detail](/dsar-portal/30-sekunden-setup/)
- [Aufsichtsbehörden Art. 77 erklärt](/dsar-portal/aufsichtsbehoerden-art-77/)
- [Secure-Reply-Portal mit Magic-Link](/dsar-portal/secure-reply/)
- [Lead-Magnet: Setup-Guide PDF](https://www.fraghugo.de/dsar-portal-setup-guide/)
