---
title: "Audits — Übersicht und Best Practices"
description: "7 mitgelieferte Audit-Kataloge: Datenschutz, BSI-Grundschutz, NIS2, VS-NfD, VVT-Aufnahme, Datengeheimnis."
---

Hugo Audit ist ein **strukturierter Fragebogen-Workflow** mit Auto-Maßnahmen-Generierung. Sie wählen einen der 7 mitgelieferten Kataloge, beantworten die Fragen, Hugo erzeugt Maßnahmen aus den Korrekturtexten und schreibt einen Bericht in 3 Stilen.

## 7 Master-Kataloge

| Slug | Name | Default-Recall | Quelle |
|------|------|----------------|--------|
| `datenschutzaudit` | Datenschutzaudit (Standard) | 24 Monate | BfDI/LDA-Material |
| `bsi-grundschutz-reifegrad` | BSI Grundschutz Reife | 12 Monate | BSI-Standard 200-2 |
| `bsi-grundschutz-zusatz` | BSI Grundschutz Zusatz | 12 Monate | BSI 200-2 vertieft |
| `nis2-audit` | NIS2-Audit | 36 Monate | §30 BSIG / NIS2-RL |
| `vs-nfd-audit` | VS-NfD-Audit | 12 Monate | BSI CON.11.1 (Geheimschutz) |
| `verarbeitungstaetigkeiten` | VVT-Aufnahme-Audit | 12 Monate | DSGVO Art. 30 |
| `verpflichtung-datengeheimnis` | Datengeheimnis-Verpflichtung | 24 Monate | §6/§88 BDSG |

## VS-NfD: deutschlandweit einzigartig

VS-NfD = **Verschluss-Sache niedrigster Geheimhaltungsgrad**. Pflicht für Behörden-Auftragnehmer (BSI CON.11.1). **Kein anderer DACH-Anbieter hat einen VS-NfD-Standardkatalog.**

## Workflow

1. **Audit starten**: `/dsb/audits/neu` → Katalog wählen → Recall-Cycle (12/18/24/36 Monate) → Start.
2. **Frage-Wizard**: Save-as-Draft, Antwort (ja/nein/teilweise/n.r.) + Begründung.
3. **KI-Antwort-Coach** (Pro+): "Was prüft die Frage?" + Beispielantwort + Maßnahmen-Vorschlag.
4. **Auto-Maßnahmen**: Bei Nein/Teilweise legt Hugo automatisch Maßnahmen mit 90-Tage-Frist an.
5. **Bericht generieren**: 3 Stile (GF-1-Pager / Audit-Report / Behörden-Format) als HTML.
6. **Recall**: Nach 12-36 Monaten wird automatisch Magic-Link-Mail an Mandant gesendet.

## 5-Stufen-Eskalation

Wenn Mandant beim Re-Audit nicht reagiert:

| Stufe | Zeit | Aktion |
|-------|------|--------|
| 1 | T-30 | Initial-Magic-Link an Mandant + DSB |
| 2 | T-14 | Reminder-Mail |
| 3 | T-3 | Letzte Mahnung |
| 4 | T+3 | DSB-Eskalation |
| 5 | T+14 | GF-Eskalation |

→ Cron-Job läuft täglich 7:00 Uhr.

## Magic-Link ohne Login

Hugos USP: Mandant beantwortet den Re-Audit-Fragebogen über einen **Magic-Link ohne Login**. Niemand sonst im DACH-Markt hat das.

→ [Magic-Link Re-Audit-Dokumentation](/audit/recall-magic-link/)
