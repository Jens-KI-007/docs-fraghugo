---
title: KI-Dokumente
description: Pflicht-Dokumentation für Hochrisiko-KI — Konformitätsbewertung, Logging, Risiko-Management.
---

![KI-Dokumente Übersicht](/screenshots/ki-compliance/ki-dokumente.png)

Für **Hochrisiko-KI** müssen Sie eine umfangreiche technische Dokumentation führen. Hier verwalten Sie die.

## Pflicht-Dokumente (AI Act Anhang IV)

1. **Allgemeine Beschreibung** — Zweck, Architektur, Schnittstellen
2. **Datenanforderungen & -qualität** — Training, Validierung, Test-Daten
3. **Bias-Testing** — Ergebnisse pro Gruppe, Maßnahmen
4. **Genauigkeits- & Robustheits-Berichte**
5. **Cybersicherheit der KI**
6. **Konformitätsbewertung**
7. **Risiko-Management-System**
8. **Menschliche Aufsicht** — Konzept + Verantwortliche
9. **Logging-Konzept** — was wird wie lange protokolliert
10. **Lifecycle-Doku** — Updates, Modell-Versionen, Rollback-Strategie

## Pro Hochrisiko-KI

Hugo zeigt eine Checkliste mit allen 10 Pflicht-Bausteinen, Status (vorhanden / fehlt / abgelaufen), Owner.

## Vorlagen

Pro Baustein gibt's Hugo-Vorlagen mit Mustertexten — Sie müssen sie nur an Ihre konkrete KI anpassen. Spart wochenlange Compliance-Schreiberei.

## Externe Dokumente

Manche Dokumente kommen vom Anbieter (z.B. OpenAI bei GPT-4, Anthropic bei Claude). Sie laden sie hoch + ergänzt firmenspezifische Anteile.

## Konformitäts-Erklärung

Für jede Hochrisiko-KI müssen Sie **vor In-Betrieb-Nahme** eine **Konformitätserklärung** abgeben. Hugo erzeugt das offizielle PDF mit allen Pflicht-Inhalten.

## EU-Datenbank-Anmeldung

Hochrisiko-KI muss in der **EU-AI-Datenbank** registriert werden. Hugo zeigt Ihnen das Eingabe-Mapping (welcher Wert wo eingegeben werden muss).

## Tipps

- **Erstmal nur für Hochrisiko machen** — bei begrenztem Risiko reichen Transparenz-Maßnahmen, vollständige Doku ist überdimensioniert.
- **Anbieter-Verträge prüfen** — Lieferanten von Hochrisiko-KI sind verpflichtet, Ihnen Doku zu liefern. Wenn nicht, fordern Sie ein.
