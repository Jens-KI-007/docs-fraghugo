---
title: Klassifizierung (Risiko-Stufe)
description: Pro KI-System die Risiko-Klasse nach AI Act bestimmen — Verboten / Hochrisiko / Begrenzt / Minimal.
---

![Klassifizierungs-Wizard](/screenshots/ki-compliance/klassifizierung.png)

Der AI Act verlangt: für jede KI musst du wissen, in welcher Risiko-Klasse sie liegt. Hier macht's Hugo mit dir.

## Der Wizard

Pro KI-System klickst du dich durch ~10 Ja/Nein-Fragen:

1. Wird die KI für **verbotene Praktiken** eingesetzt (Social-Scoring, manipulative KI für vulnerable Gruppen)? → wenn ja: STOP, darfst du nicht.
2. Ist die KI in einem der **8 Hochrisiko-Anwendungsfelder**?
   - Bewerbung / HR-Entscheidung
   - Bildungs-Bewertung
   - Kreditscoring / Versicherung
   - Strafverfolgung
   - Migration / Asyl
   - Justiz / Demokratie
   - Kritische Infrastruktur (Energie, Wasser, Verkehr)
   - Sicherheitskomponenten in regulierten Produkten
3. **Spezifische Frage** je Hochrisiko-Feld zur Eingrenzung.
4. **Transparenz-Pflichten**: Generiert die KI Inhalte (Text, Bild, Audio)? Interagiert sie direkt mit Menschen? Erkennt sie Emotionen / Biometrie?

Output: **Risiko-Klasse + Begründung + Pflichten-Liste**.

## Was die Pflichten bedeuten

### Hochrisiko
- **Konformitätsbewertung** (du oder der Anbieter)
- **Risiko-Management-System**
- **Daten-Qualität & Bias-Tests**
- **Logging** von Entscheidungen (1 Jahr)
- **Menschliche Aufsicht** sichergestellt
- **Robustheit & Sicherheit**
- **Anmeldung in EU-Datenbank**
- Verstärkte Transparenz für Betroffene

### Begrenztes Risiko
- **Transparenzpflicht** — User muss wissen "Du sprichst mit einer KI"
- **Kennzeichnung von KI-generierten Inhalten**

### Minimal
- Keine speziellen Pflichten, aber freiwillig Verhaltenskodex möglich

## Re-Klassifizierung

Bei Änderungen an der KI (neuer Use-Case, neue Datenquelle, neue Funktion) → Re-Klassifizierung. Hugo erinnert mindestens jährlich.

## Tipps

- **Anbieter-Doku einbeziehen** — OpenAI, Microsoft, Anthropic veröffentlichen für ihre KI Risiko-Einstufungen. Pack die als Nachweis dazu.
- **Best Practice auch bei Begrenztem Risiko**: Logging + Menschliche Aufsicht freiwillig einführen — schützt vor späteren Eskalationen.
