---
title: "FAQ – Technische Fragen"
description: "Browser-Anforderungen, Mobile-Nutzung, Mitarbeiter-Einladung, SSO – die häufigsten technischen Fragen zu den Hugo-Produkten."
---

<div class="article-meta">
  <span><span class="label">Für:</span> IT-Leiter, Admin, Webmaster</span>
  <span><span class="label">Lesezeit:</span> 4 Minuten</span>
</div>

Diese Seite beantwortet die häufigsten technischen Fragen. Wenn Sie etwas vermissen, schreiben Sie uns – wir ergänzen die Liste regelmäßig.

## Browser-Kompatibilität

### Welche Browser werden unterstützt?

Wir testen aktiv:

- **Chrome / Chromium** ab Version 100
- **Firefox** ab Version 100
- **Safari** ab Version 15
- **Edge** ab Version 100
- **Brave**, **Vivaldi**, **Opera** – funktionieren erfahrungsgemäß ohne Probleme

Was wir **nicht** unterstützen:
- **Internet Explorer** (jeglicher Version)
- **Sehr alte Versionen** (älter als 4 Jahre)

### Funktioniert es im inkognito-Modus?

Ja. Wir nutzen kein Tracking, das vom inkognito-Modus blockiert würde. Login funktioniert wie gewohnt.

### Was, wenn ein bestimmtes Feature nicht funktioniert?

1. Browser neu laden mit `Strg + F5` (Hard-Refresh)
2. Cache leeren
3. Anderen Browser probieren
4. Wenn das Problem bleibt: Schreiben Sie uns mit Browser-Version und einem Screenshot

## Mobile-Nutzung

### Funktioniert es auf dem Handy?

**Ja, vollständig.** Alle Hugo-Produkte sind responsiv – sie funktionieren auf Smartphone, Tablet und Desktop. Wir haben besonders auf Tablet-Bedienbarkeit geachtet, weil viele Datenschutzbeauftragte mit dem iPad arbeiten.

### Gibt es eine native App?

**Nein, und das ist Absicht.** Eine Web-App hat gegenüber nativen Apps Vorteile:
- Keine Installation auf dem Gerät
- Immer aktuell
- Funktioniert auf jedem Betriebssystem
- Weniger Angriffsfläche
- Kein App-Store-Tracking

### Was, wenn ich offline arbeiten will?

Hugo Check und Hugo Shield brauchen Internet. Hugo DSB hat einen **Offline-Modus** für die wichtigsten Module (VVT, AVV) – Sie können Daten lokal eintragen, beim nächsten Online-Gehen synchronisiert es sich automatisch.

## Mitarbeiter und Zugänge

### Wie lade ich Mitarbeiter ein?

Siehe Anleitung [Mitarbeiter einladen](/hugo-dsb/mitarbeiter-einladen/). Kurz: Account öffnen, „Team" oder „Mitarbeiter" wählen, E-Mail eingeben, Einladung senden.

### Welche Rollen gibt es?

Standard-Rollen in Hugo DSB:

- **Admin** – alles, inklusive Abrechnung
- **DSB** – alles außer Abrechnung
- **Bearbeiter** – einzelne Module bearbeiten
- **Lesen** – nur Anschauen
- **Mitarbeiter** – nur Schulungen + persönliche Daten

Im Enterprise-Tarif können Sie eigene Rollen mit feingranularen Berechtigungen definieren.

### Single Sign-On (SSO)

SSO ist im **Enterprise-Tarif** verfügbar. Wir unterstützen:

- **SAML 2.0** (Microsoft Entra ID, Okta, OneLogin)
- **OpenID Connect** (Google Workspace, Azure AD, Auth0)
- **LDAP-Sync** (für klassisches Active Directory)

Setup dauert ca. 1–2 Stunden, gemeinsam mit Ihrer IT.

### Kann ich mehrere Personen für einen Login nutzen?

**Nein.** Jede Person bekommt einen eigenen Account. Das ist wichtig für:
- Audit-Trail (wer hat was geändert?)
- Compliance (DSGVO verlangt nachvollziehbare Zugriffe)
- Sicherheit (kompromittierte Passwörter wirken sich nur auf einen Account aus)

## Integrationen

### Mit welchen Tools können Sie integrieren?

**Direkt:**
- **Microsoft 365 / Azure AD** (SSO, Mitarbeiter-Sync)
- **Google Workspace** (SSO, Mitarbeiter-Sync)
- **Slack** (Benachrichtigungen)
- **Microsoft Teams** (Benachrichtigungen)
- **Webhook-Endpoints** (eigene Systeme)

**Per API (Enterprise):**
- ERP-Systeme (SAP, abas, Sage)
- Personalverwaltung (Personio, DATEV, Sage HR)
- Lieferantenmanagement
- ITSM-Tools (Jira, ServiceNow)

### Gibt es eine REST-API?

Ja, im Agentur- und Enterprise-Tarif. Dokumentation: `api.fraghugo.de/docs`

### Kann ich Daten aus anderen Tools importieren?

**Hugo DSB:**
- VVT als CSV oder Excel-Vorlage
- AVV-Liste als CSV
- Mitarbeiter-Liste als CSV
- TOMs aus ISO-27001-Templates

**Hugo Shield:**
- Lieferanten-Liste als CSV
- Bestehende Score-Daten (manuell einzutragen)

## Performance und Verfügbarkeit

### Wie schnell sind die Tools?

- **Seitenladen:** < 1 Sekunde (Median)
- **API-Antworten:** < 200 ms (Median)
- **Hugo Check Scan:** 30–60 Sekunden für 29 Checks
- **Hugo DSB Speichern:** sofort
- **Hugo Shield Assessment-Submit:** sofort

### Wie hoch ist die Verfügbarkeit?

Wir streben **99,5 % Uptime** an (Status-Page: `status.fraghugo.de`). Unsere Werte 2025:

- Hugo Check: 99,8 %
- Hugo DSB: 99,7 %
- Hugo Shield: 99,9 %

Geplante Wartung kündigen wir mindestens 24 Stunden im Voraus an.

### Was, wenn ein Tool down ist?

1. Auf `status.fraghugo.de` prüfen
2. Wenn ein Vorfall gemeldet ist: warten und Updates verfolgen
3. Wenn nichts steht aber das Tool nicht funktioniert: Schreiben Sie uns
4. Notfall-Kontakt: `notfall@fraghugo.de`

## Sicherheit für Admins

### Kann ich Login-Versuche überwachen?

Ja. Im Account-Bereich finden Sie ein **Login-Log** mit:
- Zeitpunkt jedes Logins
- IP-Adresse
- Browser
- Erfolgs- oder Fehlversuch

Bei verdächtigen Login-Versuchen bekommen Sie automatisch eine Mail.

### Kann ich Passwörter erzwingen?

Ja. Im Admin-Bereich können Sie konfigurieren:
- Mindestlänge (Standard: 12)
- Komplexität (Großbuchstabe, Zahl, Sonderzeichen)
- Maximal-Alter (Standard: aus – wir empfehlen *kein* erzwungenes Wechseln, weil das die Sicherheit eher senkt)
- Wiederverwendung verhindern

### Kann ich MFA erzwingen?

Ja. Im Admin-Bereich → „Sicherheit" → „MFA für alle User erforderlich". Empfohlen.

## Datenexport

### Wie exportiere ich meine Daten?

Im Account → Einstellungen → Datenexport. Format: ZIP mit JSON, PDF und CSV. Dauer: bei großen Accounts bis zu 24 Stunden, dann kommt eine Mail mit dem Download-Link.

### Wie oft kann ich exportieren?

So oft Sie wollen. Es gibt keine Beschränkung.

### Kann ich automatisierten Export einrichten?

Im Enterprise-Tarif ja. Per API + Webhook können Sie z. B. wöchentlich einen Snapshot in Ihr S3-Bucket schieben.

## Updates und Wartung

### Wie oft kommen Updates?

- **Bugfixes:** wöchentlich (oft täglich)
- **Neue Features:** monatlich (Roadmap auf `roadmap.fraghugo.de`)
- **Sicherheitsupdates:** sofort, ohne Ankündigung

### Wann ist Wartung?

- **Standard-Wartung:** Sonntag 02:00–04:00 Uhr (CET)
- **Notfall-Wartung:** angekündigt mit 1+ Stunden Vorlauf

### Bekomme ich Release Notes?

Ja. Im Account-Header sehen Sie ein „Was ist neu"-Icon. Außerdem schicken wir monatliche Release Notes per Mail.

<div class="related-articles">

### Verwandte Artikel
- [FAQ Preise & Abrechnung](/faq/faq-preise/)
- [FAQ Datenschutz & Sicherheit](/faq/faq-datenschutz/)
- [Account erstellen](/erste-schritte/account-erstellen/)

</div>

<div class="cta-banner">
  <h3>Technische Frage offen?</h3>
  <p>Schreiben Sie uns oder buchen Sie ein Erstgespräch – wir sind selbst Techniker und antworten ehrlich.</p>
  <a href="https://meet.brevo.com/fraghugo/intro" class="cta-button">Erstgespräch mit Nils →</a>
</div>
