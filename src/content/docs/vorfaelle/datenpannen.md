---
title: Datenpannen melden (72-h-Pflicht)
description: Datenpanne dokumentieren, Schweregrad bewerten, an Behörde melden — alles mit Zeitstempel.
---

![Datenpannen-Übersicht mit Status](/screenshots/vorfaelle/datenpannen.png)

Wenn personenbezogene Daten **unbefugt** offengelegt, verändert oder verloren wurden — Stichworte: Phishing-Klick, Laptop verloren, Mail an falschen Empfänger, Cyber-Angriff — ist das eine Datenpanne nach Art. 4 Nr. 12 DSGVO. Du musst die in 72 h an die Aufsichtsbehörde melden, sonst Bußgeld.

## Neuen Vorfall melden

Klick "+ Neue Datenpanne" oben rechts. Wizard:

### Schritt 1: Was ist passiert
- Beschreibung in eigenen Worten
- Zeitpunkt des Eintretens (Schätzung reicht)
- Zeitpunkt der Kenntnisnahme (wichtig! Die 72 h laufen ab hier)
- Wer hat's entdeckt

### Schritt 2: Welche Daten betroffen
- Kategorien (Namen, Adressen, Bankdaten, Gesundheitsdaten, ...)
- Anzahl Betroffene (Schätzung reicht)
- Welche Personengruppen (Mitarbeiter, Kunden, Bewerber, ...)

### Schritt 3: Ursache
- Eingrenzung (technisch, organisatorisch, menschlicher Fehler, externer Angriff)
- Was war die Schwachstelle

### Schritt 4: Bewertung (Hugo hilft)
- **Wahrscheinlichkeit eines Schadens** für Betroffene: gering / mittel / hoch
- **Schwere des Schadens**: gering / mittel / hoch

Hugo gibt einen Vorschlag basierend auf Datenkategorie und Umfang. Du kannst überschreiben.

### Schritt 5: Maßnahmen
- Was hast du sofort getan (Passwort zurückgesetzt, Konto gesperrt, Backup geprüft)
- Was planst du noch (Pen-Test, Schulung, ...)

### Schritt 6: Meldung
Je nach Bewertung:

- **Hohes Risiko → Aufsichtsbehörde melden** (binnen 72 h)
- **Sehr hohes Risiko → zusätzlich Betroffene informieren** (Art. 34)
- **Geringes Risiko → nur intern dokumentieren**

Hugo erzeugt die **Meldung an die Aufsichtsbehörde** als PDF, vorbefüllt mit allen Daten — du musst nur die Online-Schnittstelle der zuständigen Behörde nutzen (Adresse zeigt Hugo).

## Status-Tracking

Pro Vorfall siehst du eine **72-h-Uhr** mit Countdown. Wenn die Uhr rot ist, ist's eilig.

Status:
- **Entwurf** — wird noch beschrieben
- **Meldung vorbereitet** — PDF erzeugt, Behörden-URL parat
- **Bei Behörde eingereicht** — Datum + Aktenzeichen eingetragen
- **Geschlossen** — Vorgang beendet
- **Nachmeldung** — falls neue Erkenntnisse später

## Audit-Log

Jeder Klick wird protokolliert (wer hat wann was geändert). Bei Rückfragen der Behörde kann jeder Schritt nachvollzogen werden.

## Häufige Fragen

- **"Auch wenn kein Schaden entstanden ist?"** — Ja, dokumentieren musst du immer. Melden nur bei hohem Risiko.
- **"E-Mail an falsche Person — Panne?"** — Ja, wenn personenbezogene Daten drin sind. Wenn der Empfänger zur eigenen Firma gehört + die Mail sofort gelöscht hat, meist geringes Risiko.
- **"Was ist mit Datenpanne beim Auftragsverarbeiter?"** — Der muss sie dir melden (steht im AVV). Du dokumentierst sie hier genauso wie eigene Pannen.
