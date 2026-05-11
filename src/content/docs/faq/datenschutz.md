---
title: Datenschutz & Sicherheit (FAQ)
description: Wo werden Daten gehostet, wer hat Zugriff, was passiert bei Kündigung.
---

## Wo werden meine Daten gehostet?

Alle Daten liegen **ausschließlich in Deutschland**, auf einem dedizierten Server bei Hetzner Online (Frankfurt). Kein US-Anbieter, kein Drittland-Transfer. Server-Standort verifiziert.

## Wer hat Zugriff auf meine Daten?

- **Du und deine Mitarbeiter** (je nach Rollen-Berechtigung in der App)
- **frag.hugo Support-Team** nur auf ausdrückliche Anfrage von dir + mit Audit-Log
- **Externer DSB Nils** nur, wenn du ihn als deinen DSB benennst (mit Bestellungsurkunde)
- **Aufsichtsbehörden** im Rahmen von §44a / §40 BDSG bei berechtigtem Anlass

Nicht zugreifend:
- Niemand bei OpenAI / Anthropic (KI-Anfragen werden ANONYMISIERT verarbeitet, kein Re-Training auf deinen Daten)
- Niemand außerhalb der EU
- Keine Werbung-Partner
- Kein Microsoft / Google (außer du nutzt M365-Sync, dann liest Hugo dein Verzeichnis lesend)

## Sind meine Daten verschlüsselt?

- **In Ruhe**: Postgres-DB-Volumes verschlüsselt (LUKS + dm-crypt)
- **Im Transit**: TLS 1.3 zwischen allen Komponenten
- **Sensitive Felder** (wie Hinweisgeber-Identität): zusätzliche Field-Level-Verschlüsselung
- **Backups**: ebenfalls verschlüsselt + räumlich getrennt

## Werden meine Daten von KI mittrainiert?

**Nein.** Wir nutzen API-Anfragen an OpenAI / Anthropic mit dem No-Training-Opt-out (zero retention). Deine VVT-Einträge, Datenpannen, Mitarbeiter-Antworten werden nicht zum Training fremder Modelle benutzt.

## Was passiert bei einer Datenpanne bei euch?

- **Innerhalb 24 h** Mail an alle betroffenen Kunden mit Details + Maßnahmen
- **Externer Krisen-Stab** für Forensik aktiviert
- **Aufsichtsbehörde** gemeldet (BfDI bzw. Landesbehörde)
- **Status-Page** zeigt live den Zustand
- **Post-Mortem** veröffentlicht binnen 7 Tagen

## Kann ich meine Daten exportieren?

Ja, immer. **Einstellungen → Daten-Export** → ZIP mit allen deinen Daten als JSON + PDFs. Das ist nicht nur DSGVO-Pflicht (Art. 20), sondern auch eine ehrliche Lock-in-Freiheit von uns.

## Was passiert nach Kündigung?

- **90 Tage** bleiben deine Daten erreichbar, du kannst exportieren
- Nach 90 Tagen: **automatische Komplett-Löschung** (alle Datensätze + alle Backups)
- **Bestätigungs-PDF** der Löschung wird dir per Mail geschickt

## Auftragsverarbeitung — habt ihr einen AVV?

Ja, **immer**. Wenn du bei uns Kunde wirst, bekommst du automatisch einen AVV nach Art. 28 DSGVO zu unterschreiben. Findest du in den **Einstellungen → Recht → AVV-Vertrag** als PDF.

## Pen-Tests / Sicherheits-Audits

- **Jährlich externer Pen-Test** durch SySS GmbH
- **Bug-Bounty-Programm** auf intigriti (responsible disclosure)
- **Ergebnisse zusammengefasst** auf der Status-Page
