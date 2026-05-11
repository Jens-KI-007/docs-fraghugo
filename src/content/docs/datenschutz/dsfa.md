---
title: DSFA — Datenschutz-Folgenabschätzung
description: Pflicht-Risiko-Analyse bei riskanten Verarbeitungen — Art. 35 DSGVO. Mit Wizard und Hugo-KI.
---

![DSFA-Übersicht](/screenshots/datenschutz/dsfa.png)

Bei einer Verarbeitung mit hohem Risiko für Betroffene musst du **vor Start** eine Datenschutz-Folgenabschätzung machen — Art. 35 DSGVO. Wenn du das nicht tust und es geht schief, ist das Bußgeld doppelt so teuer.

## Wann ist DSFA Pflicht?

Hugo markiert im VVT automatisch DSFA-pflichtige Verarbeitungen. Typische Auslöser:

- **Systematische Überwachung** (Videoüberwachung, GPS-Tracking, Browser-Logging)
- **Profiling / automatisierte Entscheidungen** (Kredit-Scoring, KI-Bewerbersortierung)
- **Besondere Datenkategorien in großem Umfang** (Gesundheits-, biometrische Daten)
- **Daten von Schutzbedürftigen** (Kinder, Mitarbeiter mit gehäuften personenbezogenen Maßnahmen)
- **Neue Technologie** (KI, Gesichtserkennung)

DSK-Liste der pflichtigen Verarbeitungen ist im Wizard hinterlegt.

## Wie der Wizard läuft

1. **Schritt 1: Beschreibung** — Was verarbeitest du, warum, wie. Du kannst aus VVT-Eintrag übernehmen.
2. **Schritt 2: Notwendigkeit & Verhältnismäßigkeit** — Brauchst du wirklich diese Daten? Gibt's mildere Mittel?
3. **Schritt 3: Risiken identifizieren** — Hugo schlägt typische Risiken pro Verarbeitungstyp vor (Identitätsdiebstahl, Diskriminierung, finanzieller Schaden, ...).
4. **Schritt 4: Schadenswahrscheinlichkeit + Schwere bewerten** — 4×4-Matrix, Hugo gibt Default-Werte.
5. **Schritt 5: Maßnahmen zur Risiko-Minderung** — was kannst du tun (Pseudonymisierung, Zugriffsbeschränkung, Schulung, Audit).
6. **Schritt 6: Restrisiko** — wenn nach Maßnahmen immer noch hoch: **Aufsichtsbehörde konsultieren** (Art. 36).

## Output

Vollständiger **DSFA-Bericht als PDF** — entspricht der Empfehlung der DSK. Hänge an den VVT-Eintrag, präsentiere bei Audits.

## Re-DSFA

Bei Änderungen an der Verarbeitung (neue Tools, Erweiterung des Datenumfangs) zeigt Hugo "DSFA aktualisieren". Mindestens 1× jährlich erinnert die Plattform an Review.

## Beispiel

Du installierst eine Kamera in der Lagerhalle für Diebstahlschutz. Mitarbeiter werden aufgezeichnet. → **DSFA-pflichtig**, weil systematische Überwachung. Im Wizard:

- Risiken: Bewegungsprofile, Druck auf Mitarbeiter
- Maßnahmen: Schwenkbereich begrenzen, max. 24 h Speicherung, Hinweis-Schild, Betriebsrat einbeziehen, Live-Bild für niemanden
- Restrisiko: mittel → DSFA OK, keine Behörden-Konsultation nötig
