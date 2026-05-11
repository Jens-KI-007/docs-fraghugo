---
title: Risiko-Register
description: Bedrohungen pro Asset identifizieren, bewerten, priorisieren. Mit Heat-Map und Hugo-Vorschlägen.
---

![Risiko-Register mit Heat-Map](/screenshots/isms-nis2/risiko-register.png)

Hier listest du, **was schief gehen kann**. Pro Risiko: Wahrscheinlichkeit × Schadenshöhe = Risikowert.

## Risiko anlegen

Du gibst pro Risiko ein:
- **Asset** (welches deiner Assets ist betroffen)
- **Bedrohung** — was kann passieren (Hardware-Ausfall, Phishing-Angriff, Insider-Diebstahl, Naturkatastrophe, Lieferanten-Pleite, Cyber-Erpressung, ...)
- **Wahrscheinlichkeit**: sehr gering / gering / mittel / hoch / sehr hoch
- **Schadenshöhe**: sehr gering / gering / mittel / hoch / sehr hoch
- **Risikowert** — automatisch berechnet (Matrix 5×5)
- **Bisherige Maßnahmen** — was schützt schon
- **Verbleibendes Risiko** nach Maßnahmen
- **Entscheidung**: akzeptieren / mindern / übertragen (Versicherung) / vermeiden

## Hugo-Bedrohungs-Katalog

Klick "Bedrohungen vorschlagen" → Hugo zeigt dir die typischen Bedrohungen für die Asset-Klasse, basierend auf BSI-Grundschutz-Bausteinen + ENISA-Empfehlungen. Du kannst die übernehmen oder ignorieren.

## Heat-Map

Visualisierung: Wahrscheinlichkeit × Schadenshöhe als 5×5-Matrix, jeder Punkt ein Risiko. Roter Quadrant oben rechts = hohe Priorität.

## Top-10-Liste

Für GF-Meeting: Liste der 10 größten Risiken als ein Klick. Wird auch im NIS2-Bericht und Jahres-Audit verwendet.

## Tracking

- **Risikowert verändert sich** über Zeit (Cyber-Angriffe werden wahrscheinlicher, deine Maßnahmen verbessern Schutz). Hugo erinnert dich an Re-Bewertung jährlich.
- **Risiko geschlossen** wenn der Asset abgeschaltet ist oder die Bedrohung nicht mehr relevant (z.B. Software ausgemustert).

## Tipps

- **Nicht zu kleinteilig** — 50 Risiken sind realistisch zu managen, 500 niemand pflegt.
- **Konsistenz** — wenn "Phishing" wahrscheinlich hoch ist für E-Mail, sollte es für gleiche Systeme auch hoch sein. Hugo prüft das.
- **Maßnahmen müssen wirken** — wenn du nach Maßnahmen das Risiko nicht reduzierst, hast du die falsche Maßnahme.
