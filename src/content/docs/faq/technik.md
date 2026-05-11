---
title: Technische Fragen (FAQ)
description: Browser-Support, App, Sprache, Single-Sign-On, Browser-Performance.
---

## Welche Browser werden unterstützt?

- **Chrome / Edge / Brave** (Chromium 100+) — voll unterstützt
- **Firefox** 100+ — voll unterstützt
- **Safari** 16+ — voll unterstützt
- **Mobile Safari** + **Chrome Mobile** — voll unterstützt
- Internet Explorer wird nicht unterstützt

## Gibt's eine native App?

Nein — die Plattform ist eine **Progressive Web App (PWA)**. Sie können sie aber auf dem Home-Screen Ihres Smartphones speichern und sie verhält sich wie eine App.

## Single-Sign-On (SSO) mit Microsoft / Google?

Aktuell:
- **Google Login** (für alle Plans verfügbar)
- **Microsoft 365 Login** (Enterprise-Plan)
- **SAML-SSO** für Enterprise auf Anfrage

## In welcher Sprache ist die Plattform?

- **Deutsch** (Standard)
- **Englisch** (Settings → Sprache umstellen)
- Mehrsprachige Dokumente: DSE, Schulungs-Inhalte für Mitarbeiter — auf Anfrage in EN/FR.

## Wie schnell ist die Plattform?

- **Erste Seite**: ~600 ms (DOM-Content-Loaded)
- **Interaktiv**: ~1.2 s
- **Suche**: Echtzeit, < 100 ms
- **Bei Hetzner-Hosting** (Frankfurt) — kurze Wege für DACH-User.

Wenn's bei Ihnen langsam ist: 1) Netzwerk testen 2) Browser-Cache leeren 3) Console-Errors prüfen (F12) → uns melden.

## API verfügbar?

Ja, ab Agentur-Tarif. REST + OpenAPI 3.0 Spec. Doku unter [/website-it-sicherheit/api-zugang/](/website-it-sicherheit/api-zugang/).

## Integrationen

- **M365** (Mitarbeiter-Sync) — eingebaut
- **Slack / Teams** (Webhooks für Alerts) — eingebaut
- **Brevo / Mailchimp** (Newsletter-Sync) — eingebaut
- **DATEV** (Buchhaltungs-Anbindung) — Roadmap
- **HubSpot / Pipedrive** (CRM) — Roadmap
- Eigene Integration via API möglich.

## Plattform-Updates

- Releases jeden Donnerstag (Standard-Features)
- Hotfixes wenn nötig sofort
- **Changelog** unter [docs.fraghugo.de/changelog](/changelog/)
- **Status-Page** unter [status.fraghugo.de](https://status.fraghugo.de)

## Wartungsfenster

Mittwochs 02:00–04:00 Uhr — meist transparent (Rolling Updates). Ankündigung 48 h vorher über Status-Page + Mail.

## Browser-Cache leeren

- **Chrome/Edge**: Strg + Shift + R (Force Reload)
- **Firefox**: Strg + Shift + R
- **Safari**: Cmd + Option + R

## Cookies in der App

Die Plattform setzt nur **technisch notwendige Cookies** (Session, CSRF-Token, Sprache, Layout-Präferenzen). Keine Tracking-Cookies, kein Cookie-Banner nötig — alle Cookies sind erforderlich für die Funktion.
