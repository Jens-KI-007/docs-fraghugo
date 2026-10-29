---
title: Datenschutz & Sicherheit (FAQ)
description: Wo werden Daten gehostet, wer hat Zugriff, was passiert bei Kündigung.
---

## Wo werden meine Daten gehostet?

Ihre Daten werden **in Deutschland** verarbeitet, auf einem eigenen Server der Hetzner Online GmbH in Nürnberg. Die Sicherungen werden clientseitig verschlüsselt und liegen auf einer Hetzner Storage Box (Deutschland) und bei Cloudflare R2 (EU). Kein Drittland-Transfer.

## Wer hat Zugriff auf meine Daten?

- **Sie und Ihre Mitarbeiter** (je nach Rollen-Berechtigung in der App)
- **frag.hugo Support-Team** nur auf ausdrückliche Anfrage von Ihnen + mit Audit-Log
- **Externer DSB Nils** nur, wenn Sie ihn als Ihren DSB benennen (mit Bestellungsurkunde)
- **Aufsichtsbehörden** im Rahmen von § 44a / § 40 BDSG bei berechtigtem Anlass

Nicht zugreifend:
- Niemand bei OpenAI / Anthropic (KI-Anfragen werden ANONYMISIERT verarbeitet, kein Re-Training auf Ihren Daten)
- Niemand außerhalb der EU
- Keine Werbung-Partner
- Kein Microsoft / Google (außer Sie nutzen M365-Sync, dann liest Hugo Ihr Verzeichnis lesend)

## Sind meine Daten verschlüsselt?

- **Übertragung**: per TLS verschlüsselt
- **Sensitive Felder** (wie Hinweisgeber-Identität): zusätzliche Field-Level-Verschlüsselung
- **Sicherungen**: clientseitig verschlüsselt, bevor sie den Server verlassen, und räumlich getrennt abgelegt — auf einer Hetzner Storage Box (Deutschland) und bei Cloudflare R2 (EU)
- **Server**: bei der Hetzner Online GmbH in Nürnberg (Deutschland)

## Werden meine Daten von KI mittrainiert?

**Nein.** Wir nutzen API-Anfragen an OpenAI / Anthropic mit dem No-Training-Opt-out (zero retention). Ihre VVT-Einträge, Datenpannen, Mitarbeiter-Antworten werden nicht zum Training fremder Modelle benutzt.

## Was passiert bei einer Datenpanne bei frag.hugo?

- **Innerhalb 24 h** Mail an alle betroffenen Kunden mit Details + Maßnahmen
- **Externer Krisen-Stab** für Forensik aktiviert
- **Aufsichtsbehörde** gemeldet (BfDI bzw. Landesbehörde)
- **Status-Page** zeigt live den Zustand
- **Post-Mortem** veröffentlicht binnen 7 Tagen

## Kann ich meine Daten exportieren?

Ja, immer. **Einstellungen → Daten-Export** → ZIP mit allen Ihren Daten als JSON + PDFs. Das ist nicht nur DSGVO-Pflicht (Art. 20), sondern auch eine ehrliche Lock-in-Freiheit von uns.

## Was passiert nach Kündigung?

- **90 Tage** bleiben Ihre Daten erreichbar, Sie können exportieren
- Nach 90 Tagen: **automatische Komplett-Löschung** (alle Datensätze + alle Backups)
- **Bestätigungs-PDF** der Löschung wird Ihnen per Mail geschickt

## Auftragsverarbeitung — gibt es einen AVV mit frag.hugo?

Ja, **immer**. Wenn Sie bei uns Kunde werden, bekommen Sie automatisch einen AVV nach Art. 28 DSGVO zu unterschreiben. Sie finden ihn in den **Einstellungen → Recht → AVV-Vertrag** als PDF.

## Pen-Tests / Sicherheits-Audits

- **Jährlich externer Pen-Test** durch SySS GmbH
- **Bug-Bounty-Programm** auf intigriti (responsible disclosure)
- **Ergebnisse zusammengefasst** auf der Status-Page
