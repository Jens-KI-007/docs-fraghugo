---
title: "Risiko-Matrix richtig befüllen"
description: "5×5-Matrix mit 47 BSI-Elementaren-Gefährdungen, CIA-Schadensbewertung und Behandlungsstrategien."
---

Die Risiko-Matrix ist die Visualisierung Ihrer Risikolandschaft. Hugo ISMS nutzt eine **5×5-Matrix** (BSI-Standard 200-3) mit folgender Logik:

```
Risk-Score = max(C, I, A) × Wahrscheinlichkeit
```

| Score-Range | Klasse | Farbe |
|-------------|--------|-------|
| 1-3 | niedrig | grün |
| 4-8 | mittel | amber |
| 9-15 | hoch | rosa |
| 16-25 | sehr hoch | rot |

## 47 BSI-Elementare-Gefährdungen

Hugo importiert beim Setup alle **47 elementaren Gefährdungen** aus BSI 200-3:

- G.0.1 Feuer
- G.0.8 Stromausfall
- G.0.14 Ausspähen (Social Engineering)
- G.0.16 Geräte-Diebstahl
- G.0.23 Unbefugtes Eindringen IT-Systeme (Hacking)
- G.0.39 Schadprogramme (Ransomware)
- G.0.42 Social Engineering
- ... bis G.0.47

→ Sie wählen aus der Liste, statt selber Bedrohungen zu erfinden.

## Behandlungsstrategien (4 Optionen)

Pro Risiko entscheiden Sie:

1. **Vermeiden** — Asset/Prozess abschalten
2. **Reduzieren** — TOMs implementieren (Default)
3. **Transferieren** — Cyber-Versicherung, Outsourcing
4. **Akzeptieren** — Restrisiko mit GF-Genehmigung

## Best Practices

- **Fokus auf Top-10**: Sie haben nicht 47 Risiken — höchstens 15-20 sind realistisch hoch.
- **Quartalsweise Re-Bewertung**: Wahrscheinlichkeiten ändern sich (neue Vorfälle in der Branche).
- **Cross-Modul-Bridge**: Wenn AVV existiert → Lieferanten-Risiko automatisch vorgeschlagen.
- **Datenpannen-Historie**: Hugo schaut in `data_breaches`, ob letzte 24 Monate Phishing/Lost-Device → Wahrscheinlichkeit anpassen.
