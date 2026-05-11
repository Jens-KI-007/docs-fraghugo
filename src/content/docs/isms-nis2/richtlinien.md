---
title: Richtlinien (Policies)
description: Schriftliche Sicherheitsregeln Ihrer Firma — Passwort, Backup, Notfall, Off-Boarding, ...
---

![Richtlinien-Übersicht](/screenshots/isms-nis2/richtlinien.png)

Maßnahmen müssen schriftlich fixiert werden — sonst kann niemand danach handeln und kein Auditor das prüfen. Das sind Richtlinien.

## Standard-Richtlinien (Templates)

Hugo bietet ~30 vorgefertigte Richtlinien:

- **Informationssicherheits-Leitlinie** (Dach-Policy)
- **Passwort-Richtlinie**
- **Backup- und Recovery-Richtlinie**
- **Notfall- und Wiederanlauf-Richtlinie** (BCP)
- **Mobile-Device-Richtlinie**
- **Home-Office-Richtlinie**
- **Cloud-Nutzungs-Richtlinie**
- **Email-Sicherheits-Richtlinie**
- **Social-Media-Richtlinie**
- **KI-Nutzungs-Richtlinie** (immer wichtiger!)
- **Off-Boarding-Richtlinie**
- **Lieferanten-Sicherheits-Richtlinie**
- **Pen-Test-Richtlinie**
- **Vorfall-Reaktions-Plan (IRP)**
- ... und mehr

## Pro Richtlinie

- **Titel + Version**
- **Geltungsbereich** (gesamt / Bereich X)
- **Verantwortlicher Owner**
- **Inhalt** — Markdown-Editor mit Vorlagen
- **In Kraft seit** — Datum
- **Nächste Review** — Plattform erinnert
- **Freigegeben von** — Geschäftsführer-Unterschrift erforderlich
- **Mitarbeiter-Bestätigungen** — wer hat die Richtlinie zur Kenntnis genommen

## Workflow

1. Vorlage öffnen
2. Anpassen (auf Ihre Firma, Ihre Tools, Ihre Größe)
3. Geschäftsführung freigibt
4. **An Mitarbeiter verteilen** — automatischer Versand per Mail, mit "Gelesen-und-verstanden"-Bestätigung
5. Re-Approval mind. jährlich

## Versionierung

Jede Änderung erzeugt eine neue Version. Alte Versionen bleiben einsehbar — wichtig im Streitfall ("Welche Policy galt am Datum X?").

## Verteilung an Mitarbeiter

- **Per Mail** mit Lesebestätigungs-Link
- **Mitarbeiter-Portal** — neue Richtlinie erscheint auf der persönlichen Übersicht
- **Microsoft Teams / Slack** — Webhook-Push

## Tipps

- **Kurz halten** — eine Passwort-Policy mit 30 Seiten liest niemand. 1-2 Seiten reichen.
- **Konkret** — "Sichere Passwörter" ist sinnlos. "Mindestens 12 Zeichen, 2FA Pflicht, kein Mehrfachgebrauch" ist umsetzbar.
- **Lebendiges Dokument** — wenn Sie ein Tool wechseln, Richtlinie anpassen, nicht ignorieren.
