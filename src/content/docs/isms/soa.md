---
title: "Statement of Applicability (SoA)"
description: "ISO 27001:2022 Annex A — alle 93 Controls mit Reifegrad-Bewertung. Pflicht-Dokument für Audit."
---

Das **Statement of Applicability** (SoA) ist das **wichtigste Dokument** Ihrer ISO-27001-Zertifizierung. Es listet alle 93 Annex-A-Controls auf und sagt:

- Ist anwendbar? (ja/nein)
- Aktueller Reifegrad (1-5 CMMI)
- Begründung bei Nicht-Anwendung

## ISO 27001:2022 Annex A in 4 Themen

| Thema | Anzahl Controls |
|-------|-----------------|
| Organisatorisch (A.5) | 37 |
| Personell (A.6) | 8 |
| Physisch (A.7) | 14 |
| Technisch (A.8) | 34 |
| **Gesamt** | **93** |

## Reifegrade (CMMI)

| Stufe | Bedeutung |
|-------|-----------|
| 1 — initial | Ad-hoc, nicht dokumentiert |
| 2 — wiederholbar | Dokumentiert, aber nicht durchgängig |
| 3 — definiert | Standardisierter Prozess |
| 4 — gemessen | Messbare Effektivität |
| 5 — optimiert | Kontinuierliche Verbesserung |

→ Für ISO-27001-Zertifizierung typischerweise **Stufe 3** als Mindestziel.

## SoA-Generierung in Hugo

Hugo erzeugt das SoA automatisch:

1. Sie ordnen Maßnahmen einem Control zu (`isms_actions.iso_control_id`).
2. Hugo aggregiert den Reifegrad pro Control aus allen Maßnahmen (Mittelwert).
3. SoA wird als HTML-Download generiert, gegliedert nach 4 Themen.

→ Zugang: `/dsb/isms/reports` → Statement of Applicability → Download.

## Audit-Vorbereitung

Vor dem ISO-27001-Audit:

1. Alle 93 Controls durchgehen — mindestens „1" oder „nicht anwendbar".
2. Begründung pro Nicht-Anwendung dokumentieren.
3. Maßnahmen mit Reifegrad ≥ 3 sollten 70 %+ ausmachen.
4. SoA als PDF-Druck mit Stempel/Unterschrift der GF.

Der externe Auditor zertifiziert die ISO 27001 — wir bereiten Sie darauf vor.
