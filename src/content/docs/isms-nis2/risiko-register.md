---
title: Risiko-Register
description: Bedrohungen pro Asset identifizieren, bewerten, priorisieren. Mit Heat-Map und Hugo-Vorschlägen.
---

![Risiko-Register mit Heat-Map](/screenshots/isms-nis2/risiko-register.png)

Hier listest Sie, **was schief gehen kann**. Pro Risiko: Wahrscheinlichkeit × Schadenshöhe = Risikowert.

## Risiko anlegen

Sie geben pro Risiko ein:
- **Asset** (welches Ihrer Assets ist betroffen)
- **Bedrohung** — was kann passieren (Hardware-Ausfall, Phishing-Angriff, Insider-Diebstahl, Naturkatastrophe, Lieferanten-Pleite, Cyber-Erpressung, ...)
- **Wahrscheinlichkeit**: sehr gering / gering / mittel / hoch / sehr hoch
- **Schadenshöhe**: sehr gering / gering / mittel / hoch / sehr hoch
- **Risikowert** — automatisch berechnet (Matrix 5×5)
- **Bisherige Maßnahmen** — was schützt schon
- **Verbleibendes Risiko** nach Maßnahmen
- **Entscheidung**: akzeptieren / mindern / übertragen (Versicherung) / vermeiden

## Hugo-Bedrohungs-Katalog

Klicken Sie "Bedrohungen vorschlagen" → Hugo zeigt Ihnen die typischen Bedrohungen für die Asset-Klasse, basierend auf BSI-Grundschutz-Bausteinen + ENISA-Empfehlungen. Sie können die übernehmen oder ignorieren.

## Heat-Map

Visualisierung: Wahrscheinlichkeit × Schadenshöhe als 5×5-Matrix, jeder Punkt ein Risiko. Roter Quadrant oben rechts = hohe Priorität.

## Top-10-Liste

Für GF-Meeting: Liste der 10 größten Risiken als ein Klicken Sie. Wird auch im NIS2-Bericht und Jahres-Audit verwendet.

## Tracking

- **Risikowert verändert sich** über Zeit (Cyber-Angriffe werden wahrscheinlicher, Ihre Maßnahmen verbessern Schutz). Hugo erinnert Sie an Re-Bewertung jährlich.
- **Risiko geschlossen** wenn der Asset abgeschaltet ist oder die Bedrohung nicht mehr relevant (z.B. Software ausgemustert).

## Tipps

- **Nicht zu kleinteilig** — 50 Risiken sind realistisch zu managen, 500 niemand pflegt.
- **Konsistenz** — wenn "Phishing" wahrscheinlich hoch ist für E-Mail, sollte es für gleiche Systeme auch hoch sein. Hugo prüft das.
- **Maßnahmen müssen wirken** — wenn Sie nach Maßnahmen das Risiko nicht reduzierst, haben Sie die falsche Maßnahme.
