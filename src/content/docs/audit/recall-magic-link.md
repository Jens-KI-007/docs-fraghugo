---
title: "Re-Audit per Magic-Link ohne Login"
description: "Wie Mandanten den Re-Audit-Fragebogen ohne Account beantworten. 5-Stufen-Eskalation, Diff-View."
---

Klassische Audit-Tools wie caralegal oder ConSense erfordern, dass der Mandant einen **Login** hat. Hugo macht das anders: **Magic-Link ohne Login** — niemand sonst im DACH-Markt hat das.

## Wie funktioniert es?

1. **Re-Audit fällig**: Cron prüft täglich 7:00 Uhr alle `audit_recall_schedules` mit `next_recall_at <= NOW()+30d`.
2. **Magic-Token wird erzeugt**: 64-Bytes-Hex, 60 Tage Gültigkeit, neuer Audit-Run wird automatisch angelegt.
3. **Initial-Mail an Mandant** (CC: DSB) mit Direct-Link auf `/dsb/audits/run/{run-id}`.
4. **Mandant öffnet Link**: Vorausgefülltes Formular mit Antworten aus dem letzten Audit.
5. **Diff-View**: Geänderte Antworten werden rot/grün markiert.
6. **Auto-Maßnahmen** aus geänderten Antworten.

## 5-Stufen-Eskalation

| Stufe | Zeitpunkt | Aktion |
|-------|-----------|--------|
| 1 | T-30 | Initial-Magic-Link an Mandant + DSB |
| 2 | T-14 | Reminder-Mail an Mandant |
| 3 | T-3 | Letzte Mahnung |
| 4 | T+3 | DSB-Eskalation: Mail an interne Admins |
| 5 | T+14 | GF-Eskalation: Mail an alle Org-Admins |

Optional: Stufe 6 — Eintrag im Tätigkeitsbericht „Mandant XY hat Re-Audit verweigert".

## Sicherheit

- **Cloudflare Turnstile** vor Antwort-Speicher
- **Rate-Limit** pro Token (5/Tag)
- **IP-Logging** + User-Agent für Audit-Trail
- **Hash-Chain** des Audit-Run-Workflow

## Konfiguration pro Katalog

| Katalog | Default-Recall | Konfigurierbar |
|---------|----------------|----------------|
| Datenschutzaudit | 24 Monate | 12/18/24/36 |
| BSI-Grundschutz Reife | 12 Monate | fix |
| NIS2-Audit | 36 Monate | fix (KRITIS) |
| VS-NfD | 12 Monate | fix (BSI CON.11.1) |
| Datengeheimnis | 24 Monate | bei Mitarbeiter-Änderungen ad-hoc |

→ Mandant kann pro Katalog überschreiben (12 / 18 / 24 / 36 Monate) im Wizard beim Audit-Start.
