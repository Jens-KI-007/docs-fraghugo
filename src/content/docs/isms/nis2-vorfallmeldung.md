---
title: "NIS2-Vorfallmeldung 24h/72h/30T"
description: "Pflicht-Fristen nach §30 BSIG: Erstmeldung 24h, Folgemeldung 72h, Abschlussbericht 30 Tage."
---

NIS2-betroffene Unternehmen müssen erhebliche Sicherheitsvorfälle in **drei Stufen** melden:

## Die drei Fristen

| Frist | Was wird gemeldet? |
|-------|---------------------|
| **24 Stunden** ab Kenntniserlangung | Frühwarnung: Verdacht auf Vorfall, Art (Ransomware, DDoS …) |
| **72 Stunden** ab Kenntniserlangung | Erstmeldung: Konkrete Auswirkungen, Indikatoren, Eindämmungsstatus |
| **30 Tage** | Abschlussbericht: Ursache, Auswirkung, Maßnahmen, Lessons Learned |

## Wer ist betroffen?

- KRITIS-Sektoren: Energie, Wasser, Verkehr, Gesundheit, Banken, Verwaltung
- Wichtige Einrichtungen: ab 50 MA / 10 Mio € Umsatz in NIS2-Branchen
- IT-Dienstleister, Cloud-Provider, Postdienste

→ Unklar? [NIS2-Schnellcheck](https://www.fraghugo.de/nis2-schnellcheck/) in 2 Minuten.

## Hugo ISMS NIS2-Tracker

Unter `/dsb/isms/nis2-vorfaelle` legen Sie einen Vorfall an. Hugo zeigt **Live-Countdowns** für alle drei Fristen:

```
Erkannt: 2026-05-08 14:30
└─ 24h-Erstmeldung:    bis 2026-05-09 14:30 (noch 18 h)
└─ 72h-Folgemeldung:   bis 2026-05-11 14:30 (noch 66 h)
└─ 30T-Abschluss:      bis 2026-06-07 14:30 (noch 30 d)
```

## Eskalations-Mails

Hugo sendet automatisch **Reminder-Mails** an DSB und Geschäftsleitung:

- T-6h vor Erstmeldung
- T-12h vor Folgemeldung
- T-3d vor Abschlussbericht
- Bei Überfälligkeit sofort

## BSI-Meldeportal

Die Meldung selbst erfolgt über das **BSI-Meldeportal** (`bsi.bund.de/Meldeportal`). Hugo speichert das BSI-Aktenzeichen im Vorfall-Datensatz.

## Strafen bei Verstoß

NIS2 sieht Bußgelder bis **10 Mio. € oder 2 % des weltweiten Jahresumsatzes** vor. Persönliche Haftung der Geschäftsleitung möglich.

→ Geschäftsleitung muss **§38-BSIG-Schulung** absolvieren (Hugo Learn integriert).
