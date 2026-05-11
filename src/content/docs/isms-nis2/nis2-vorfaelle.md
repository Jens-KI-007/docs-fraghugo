---
title: NIS2-Vorfälle
description: Schwerwiegende Sicherheitsvorfälle nach NIS2 — 24-h-Erstmeldung, 72-h-Update, 1-Monat-Abschlussbericht.
---

![NIS2-Vorfälle Übersicht mit Frist-Trackern](/screenshots/isms-nis2/nis2-vorfaelle.png)

Wenn ein **schwerwiegender Cybersicherheits-Vorfall** auftritt, hast du nach NIS2 (§32 BSIG) eine Meldekette mit harten Fristen.

## Fristen-Kette

| Frist | Was du melden musst |
|---|---|
| **24 h ab Kenntnis** | Erstmeldung an BSI: kurze Beschreibung |
| **72 h ab Kenntnis** | Update mit ersten Bewertungen |
| **1 Monat** | Abschlussbericht mit Ursache, Schaden, Maßnahmen |
| **freiwillig** | Zwischenmeldungen, falls relevant |

## Wann ist's ein NIS2-Vorfall?

**Schwerwiegend** heißt nach BSI:
- Erhebliche Auswirkung auf die Verfügbarkeit, Integrität oder Vertraulichkeit
- ODER finanzieller Schaden > 100.000 €
- ODER Auswirkungen auf andere (Kunden, Lieferkette)
- ODER Hinweis auf Pflicht-Verstöße

Beispiele: Ransomware-Angriff, größerer Datenabfluss, signifikanter DDoS, kompromittierter Admin-Account.

## Workflow

1. **Vorfall anlegen** — Hugo startet den Frist-Tracker (24-h-Uhr läuft).
2. **Erstmeldung** — Wizard zeigt das BSI-Meldeportal-Template, du fügst Beschreibung ein.
3. **Bei BSI einreichen** — Über das BSI-Meldeportal (Hugo zeigt URL + dein Aktenzeichen einzutragen).
4. **Update nach 72 h** — Hugo erinnert. Du ergänzt Bewertung.
5. **Abschlussbericht** — formaler Bericht mit Root-Cause, Lessons Learned, Maßnahmen.

## Verbindung zu Datenpannen

Vorfälle können gleichzeitig **NIS2 + DSGVO-Datenpanne** sein. Dann brauchst du beide Meldungen (BSI + Landesdatenschutzbehörde). Hugo legt parallel die Vorfälle in beiden Modulen an.

## Audit-Log

Jeder Vorfall hat einen vollständigen Audit-Trail. Bei späteren Behörden-Rückfragen kannst du jeden Schritt nachweisen.

## Tipps

- **24 h ist viel kürzer als gedacht** — Wochenende zählt mit. Schicht-Bereitschaft im Compliance-Team einplanen.
- **Erstmeldung darf unvollständig sein** — du musst nicht alles wissen, "Wir wissen es passierte was am Datum X, Details prüfen wir" reicht für die Erstmeldung.
- **Kommunikation mit IT-Forensik** — wenn ext. Forensiker dran arbeiten, halt sie informiert über die Fristen.
