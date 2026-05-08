---
title: "Auto-Tätigkeitsbericht generieren — Tutorial"
description: "Wie Sie in 30 Sekunden den jährlichen DSB-Tätigkeitsbericht erzeugen — alle 3 Stile auf Knopfdruck."
---

Der jährliche DSB-Tätigkeitsbericht ist Pflicht-Lieferobjekt vieler externer DSB-Verträge. Klassisch dauert er **4-8 Tage** Schreibarbeit pro Mandant. Mit Hugo schaffen Sie es in **30 Sekunden** — automatisch aus allen DSB-Modul-Daten.

## Wann läuft der Auto-Generator?

| Modus | Trigger |
|-------|---------|
| **Automatisch** | Cron jeden 5. Januar 03:00 Uhr für alle Pro+-Mandanten |
| **On-Demand** | Klick „Bericht generieren" auf Mandanten-Detail |
| **Per Magic-Link** | GF kann selbst Generierung anfordern |

## Schritt 1: Zur Jahresbericht-Page navigieren

1. In `app.fraghugo.de` einloggen
2. Sidebar: **Datenschutz → Jahresbericht**

→ URL: `/dsb/jahresbericht`

## Schritt 2: Berichtsjahr + Stil wählen

3 Stilvarianten zur Auswahl:

| Stil | Empfänger | Format |
|------|-----------|--------|
| **GF-1-Pager** | Geschäftsleitung mit max 2 Min Zeit | A4-Quer, 1 Seite, KPI-Cards mit Ampeln |
| **Audit-Report** | ISO-Auditor, Wirtschaftsprüfer | A4-Hoch, 8-12 Seiten Detail |
| **Behörden-Format** | Aufsichtsbehörde | A4-Hoch, 4 Seiten nach §40 BDSG |

Tipp: **Erzeugen Sie alle 3 Stile gleichzeitig** — keine Mehrarbeit, alle aus den selben Daten.

## Schritt 3: Generieren

Klick **„Jetzt generieren"** → Edge Function `dsb-annual-review-generator` läuft:

1. Sammelt VVT-Verfahren (Anzahl, Vollständigkeit, neu/geändert)
2. Sammelt AVVs (mit Drittland-Flags)
3. Sammelt DSFAs (mit Restrisiko)
4. Sammelt Datenpannen (Anzahl, Meldungen Art. 33 + 34)
5. Sammelt DSARs (Anzahl, Bearbeitungs-Quote)
6. Sammelt TOM-Reifegrade (Score-Vergleich Jahresbeginn vs. -ende)
7. Sammelt Schulungs-Quote
8. Sammelt Audit-Ergebnisse
9. **YoY-Vergleich** mit Vorjahr
10. Generiert Markdown-Body in 3 Stilen

→ **30 Sekunden** für alle 3 Stile.

## Schritt 4: Bericht prüfen + anpassen

Nach Generierung sehen Sie den Bericht inline. Bearbeiten:

- Klick auf Bericht → Markdown-Editor öffnet
- Texte anpassen, Empfehlungen ergänzen
- KI-Vorschläge regenerieren (im Pro+)
- „Final freigeben" → PDF + DOCX + HTML werden gerendert

## Schritt 5: Magic-Link an GF

Klick **„Magic-Link teilen"** → 30-Tage-Link wird generiert.

Vorteil: GF bekommt **interaktive HTML-Variante** mit klickbaren Drilldowns:
- „Klicke auf Datenpannen-Anzahl → siehe alle Pannen"
- „Klicke auf TOM-Score → siehe Reifegrad-Spider"
- „Klicke auf DSAR → siehe Detail-Liste"

Kein PDF-Anhang, kein Mail-Verschicken.

## Pflicht-Kapitel im Bericht

Hugos Generator deckt 9 Pflicht-Kapitel ab — entsprechend §40 BDSG-Schema:

1. **Stammdaten** (Verantwortlicher, DSB, Datenschutz-Koordinatoren)
2. **Verfahrensverzeichnis** (Anzahl, Vollständigkeit, Top-5-Risiken)
3. **Auftragsverarbeitung** (Anzahl AVVs, Drittland-Flags)
4. **DSFA** (durchgeführt, Restrisiko)
5. **Datenpannen** (Anzahl, Art. 33 + 34, Reaktionszeit)
6. **Betroffenenanfragen** (DSAR, Quote, Aufteilung pro Anliegen)
7. **TOMs** (Reifegrad-Score Jahresbeginn vs. -ende)
8. **Schulungen** (Mitarbeiter-Quote)
9. **Audit-Ergebnisse + Ausblick** (Maßnahmen, geplante Recalls)

## YoY-Vergleichsbalken

Hugo vergleicht automatisch mit dem Vorjahr:

```
VVT-Verfahren        2025: 47   2026: 53   ▲ +6
Datenpannen          2025: 3    2026: 1    ▼ -2
DSAR                 2025: 8    2026: 14   ▲ +6
Schulungs-Quote      2025: 75%  2026: 89%  ▲ +14%
TOM-Reifegrad        2025: 68   2026: 78   ▲ +10
```

→ Visualisierter Compliance-Fortschritt für Geschäftsleitung.

## Pflicht oder freiwillig?

Gesetzlich **NICHT** verpflichtend (Art. 39 DSGVO + §40 BDSG enthalten keine explizite Pflicht). Aber **vertraglicher Marktstandard** — externe DSBs liefern ihn jährlich.

→ Marketing-Klartext: „Vertraglich Marktstandard, jetzt in 30 Sekunden — spart 119 € audatis-Add-on und 4-8 Tage Arbeit."

## Plan-Verfügbarkeit

- **Hugo DSB Starter:** alle 3 Stile, 1× pro Jahr automatisch
- **Pro:** + On-Demand-Generierung, KI-Texte editierbar als „Mein Stil"
- **Enterprise:** + Multi-Mandanten-Bulk-Generation, GF-Approval-Workflow

## Konkurrenz

| Tool | Auto-Generator | 3 Stile | Magic-Link |
|------|----------------|---------|------------|
| **Hugo DSB** | **vollautomatisch** | **ja** | **ja** |
| audatis | Mustervorlage 119 € extra | nein | nein |
| ProDataMan | KI-Texte 2026 neu | nein | nein |
| caralegal | Word-Export | nein | nein |
| Proliance 360 | Status-Quo + Reifegrad-Analyse | nein | nein |
| DataGuard | Pre-built Templates | begrenzt | nein |

→ Hugo ist **First-Mover-DACH** — niemand sonst macht es vollautomatisch mit 3 Stilen + Magic-Link.

## Nächste Schritte

- [Tätigkeitsbericht: Pflicht oder freiwillig?](/taetigkeitsbericht/uebersicht/)
- [3 Bericht-Stile im Detail](/audit/3-bericht-stile/)
- [Lead-Magnet: 3 Mustervorlagen-Pack](https://www.fraghugo.de/taetigkeitsbericht-mustervorlage/)
