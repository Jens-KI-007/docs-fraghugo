---
title: M365-Integration
description: Mitarbeiter automatisch aus Microsoft 365 synchronisieren — keine manuelle Liste mehr pflegen.
---

![M365-Integration Setup](/screenshots/schulungen/m365.png)

Wenn Ihre Firma Microsoft 365 nutzt, haben Sie dort schon alle Mitarbeiter mit Mail, Abteilung, Position gepflegt. Doppelt eintragen wäre dumm. Mit dem M365-Connector kommt's automatisch.

## Was synchronisiert wird

- **Mitarbeiter** (alle aktiven Accounts in Ihrem M365-Tenant)
- **Abteilungen** + **Manager-Hierarchie** (für Rollen-basierte Schulungen)
- **An-/Abmeldungen** — neuer User in M365 → automatisch in Hugo, Kursauswahl, Begrüßungsmail
- **Off-Boarding** — gelöschter M365-User → in Hugo deaktiviert, Audit-Daten archiviert

## Setup

1. **Einstellungen → Schulungen → M365 verbinden**
2. **OAuth-Flow** — Sie loggen sich als Global-Admin in Microsoft 365 ein, geben Hugo Read-Only-Rechte auf Verzeichnisdaten.
3. **Erste Synchronisierung** — dauert je nach Tenant-Größe 1–5 Minuten.
4. **Sync-Frequenz wählen** — täglich (empfohlen) oder stündlich.

## Die drei Berechtigungssätze

Dieselbe Verbindung trägt je nach Bedarf unterschiedlich viele Leserechte. Es gibt drei Sätze, und
**Sie entscheiden, wie weit Sie gehen** — jede Erweiterung ist eine neue Zustimmung im
Microsoft-Dialog. Eine zweite Anbindung brauchen Sie dafür nicht.

| Satz | Berechtigungen | Wofür |
|---|---|---|
| **`basis`** | `User.Read.All` | Der Nutzer-Abgleich auf dieser Seite: Mitarbeiter, Abteilungen, An- und Abmeldungen. Mehr nicht. |
| **`radar`** | zusätzlich `Application.Read.All`, `Directory.Read.All`, `AuditLog.Read.All` | Der [Schatten-KI-Radar](/ki-compliance/schatten-ki-radar/): welche KI-Dienste mit Firmenkonten verbunden sind und welche davon benutzt werden |
| **`radar_reports`** | zusätzlich `Reports.Read.All` | Zusätzlich der Copilot-Nutzungsbericht |

Alle Berechtigungen sind **lesend**. Für den Nutzer-Abgleich allein bleibt es bei `basis` — der
Radar wird getrennt aktiviert und ist nicht automatisch an, nur weil M365 verbunden ist.

Zwei Punkte, die beim Erweitern regelmäßig Zeit kosten:

- **Die zustimmende Person braucht zusätzlich eine Verzeichnisrolle** — Globaler Leser,
  Berichtsleser oder Sicherheitsleser. Ein Anwendungsadministrator reicht nicht; dann gelingt die
  Zustimmung, und die Abfrage antwortet trotzdem mit einem 403.
- **`Directory.Read.All` ist nicht überflüssig.** Die Abfrage der erteilten Zustimmungen braucht
  genau diese Berechtigung, `Application.Read.All` allein genügt dort nicht.

Wie der Radar aktiviert wird, was er liest und was ausdrücklich nicht, steht auf der Seite
[Schatten-KI-Radar](/ki-compliance/schatten-ki-radar/).

## Was Hugo NICHT macht

- **Keine Schreibzugriffe** auf M365 — wir lesen nur.
- **Keine Mail-Inhalte** — nur Verzeichnis (Mitarbeiter-Stammdaten).
- **Keine Kalender-Daten** — wir wissen nicht, wo Sie wann sind.

## Sicherheit

- Token wird verschlüsselt gespeichert
- Sie können die Verbindung jederzeit trennen
- Audit-Log zeigt, was Hugo wann gelesen hat

## Alternative: Azure AD / Entra ID nur

Wenn Sie Azure AD ohne M365 hast (z.B. nur für Single-Sign-On), funktioniert die Integration auch — gleiche Felder, gleiche Berechtigung.

## Andere HR-Systeme

Direkt-Connect nur für M365. Für Personio, HRWORKS, SAP Successfactors etc. nutzen Sie den CSV-Import oder die API.

## Tipps

- **Manager-Hierarchie hilft** — Hugo kann dann Schulungs-Reports an Manager schicken ("Folgende Ihrer Mitarbeiter sind im Phishing-Test durchgefallen").
- **Filter** — Sie können sagen "nur Mitarbeiter mit Domain @meine-firma.de synchronisieren, externe Gäste ignorieren".
