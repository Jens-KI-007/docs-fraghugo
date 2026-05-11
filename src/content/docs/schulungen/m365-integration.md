---
title: M365-Integration
description: Mitarbeiter automatisch aus Microsoft 365 synchronisieren — keine manuelle Liste mehr pflegen.
---

![M365-Integration Setup](/screenshots/schulungen/m365.png)

Wenn deine Firma Microsoft 365 nutzt, hast du dort schon alle Mitarbeiter mit Mail, Abteilung, Position gepflegt. Doppelt eintragen wäre dumm. Mit dem M365-Connector kommt's automatisch.

## Was synchronisiert wird

- **Mitarbeiter** (alle aktiven Accounts in deinem M365-Tenant)
- **Abteilungen** + **Manager-Hierarchie** (für Rollen-basierte Schulungen)
- **An-/Abmeldungen** — neuer User in M365 → automatisch in Hugo, Kursauswahl, Begrüßungsmail
- **Off-Boarding** — gelöschter M365-User → in Hugo deaktiviert, Audit-Daten archiviert

## Setup

1. **Einstellungen → Schulungen → M365 verbinden**
2. **OAuth-Flow** — du loggst dich als Global-Admin in Microsoft 365 ein, gibst Hugo Read-Only-Rechte auf Verzeichnisdaten.
3. **Erste Synchronisierung** — dauert je nach Tenant-Größe 1–5 Minuten.
4. **Sync-Frequenz wählen** — täglich (empfohlen) oder stündlich.

## Was Hugo NICHT macht

- **Keine Schreibzugriffe** auf M365 — wir lesen nur.
- **Keine Mail-Inhalte** — nur Verzeichnis (Mitarbeiter-Stammdaten).
- **Keine Kalender-Daten** — wir wissen nicht, wo du wann bist.

## Sicherheit

- Token wird verschlüsselt gespeichert
- Du kannst die Verbindung jederzeit trennen
- Audit-Log zeigt, was Hugo wann gelesen hat

## Alternative: Azure AD / Entra ID nur

Wenn du Azure AD ohne M365 hast (z.B. nur für Single-Sign-On), funktioniert die Integration auch — gleiche Felder, gleiche Berechtigung.

## Andere HR-Systeme

Direkt-Connect nur für M365. Für Personio, HRWORKS, SAP Successfactors etc. nutze den CSV-Import oder die API.

## Tipps

- **Manager-Hierarchie hilft** — Hugo kann dann Schulungs-Reports an Manager schicken ("Folgende deiner Mitarbeiter sind im Phishing-Test durchgefallen").
- **Filter** — du kannst sagen "nur Mitarbeiter mit Domain @meine-firma.de synchronisieren, externe Gäste ignorieren".
