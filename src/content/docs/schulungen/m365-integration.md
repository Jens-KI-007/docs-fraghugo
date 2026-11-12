---
title: M365-Integration
description: Mitarbeiter automatisch aus Microsoft 365 synchronisieren — keine manuelle Liste mehr pflegen.
---

![M365-Integration Setup](/screenshots/schulungen/m365.png)

Wenn Ihre Firma Microsoft 365 nutzt, haben Sie dort schon alle Mitarbeiter mit Mail, Abteilung, Position gepflegt. Doppelt eintragen wäre dumm. Mit dem M365-Connector kommt's automatisch.

## Was synchronisiert wird

- **Mitarbeiter** (alle aktiven Konten in Ihrem Microsoft-365-Verzeichnis): Name, E-Mail-Adresse, Abteilung
- **Neue Konten** — neuer Benutzer in Microsoft 365 → beim nächsten Abgleich in Hugo, ohne Konto und ohne Mail.
  Eingeladen wird er, sobald Sie ihm eine Schulung zuweisen.
- **Off-Boarding** — deaktiviertes oder entferntes Konto → in Hugo stillgelegt, die Nachweise bleiben

## Setup

1. Im Menü **Personal-Abgleich** öffnen (`app.fraghugo.de/team/abgleich`) und in der Karte **Microsoft 365** auf
   „Verbinden“ klicken. Der Überblick über alle Quellen steht auf der Seite [Personal-Abgleich](/schulungen/personal-abgleich/).
2. **Zustimmung bei Microsoft** — ein Administrator Ihres Microsoft 365 meldet sich an und erlaubt Hugo, das
   Verzeichnis zu lesen.
3. **Erster Abgleich** — dauert je nach Größe des Verzeichnisses 1–5 Minuten.
4. Danach gleicht Hugo **jede Nacht** ab; „Jetzt abgleichen“ startet einen Lauf von Hand.

Microsoft 365 gehört zu Hugo Learn Programm, zur Datenschutz-Suite Pro und Premium und zur Compliance-Suite Pro und
Enterprise.

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

- Der Zugang wird verschlüsselt gespeichert
- Sie können die Verbindung jederzeit trennen; dabei wird nur die Verbindung gelöscht, Ihre Mitarbeitenden und alle
  Nachweise bleiben in Hugo
- Geht ein Abgleich schief, steht der Grund im Klartext auf der Karte

## Alternative: Azure AD / Entra ID nur

Wenn Sie Azure AD ohne M365 haben (z.B. nur für Single-Sign-On), funktioniert die Integration auch — gleiche Felder, gleiche Berechtigung.

## Andere Personalsysteme

**Personio** lässt sich direkt anbinden — mit Eintritts- und Austrittsdatum und auf Wunsch mit den
Teilnahmebescheinigungen zurück in die Personalakte: [Personio verbinden](/schulungen/personio/). Nutzen Sie Google
Workspace statt Microsoft 365, kommen die Mitarbeitenden aus dem Google-Verzeichnis:
[Google Workspace verbinden](/schulungen/google-workspace/). Für andere Personalsysteme legen Sie Mitarbeitende per CSV-Import in der [Mitarbeiterliste](/schulungen/mitarbeiter/) an.

## Tipps

- **Filter** — Sie können sagen „nur Mitarbeiter mit Domain @meine-firma.de synchronisieren, externe Gäste ignorieren“.
