---
title: "Microsoft 365 Integration"
description: "Synchronisieren Sie Mitarbeiter aus Ihrem Microsoft 365 Tenant automatisch in Hugo DSB. Schulungen, Phishing-Tests und Zugriffe bleiben aktuell."
---

<div class="article-meta">
  <span><span class="label">Für:</span> IT-Administratoren, DSB</span>
  <span><span class="label">Lesezeit:</span> 3 Minuten</span>
</div>

Wer zehn oder mehr Mitarbeiter in Microsoft 365 verwaltet, will sie nicht jedes Mal manuell in Hugo DSB pflegen. Die **M365-Integration** synchronisiert Ihren Tenant einmalig oder geplant in das Mitarbeiter-Verzeichnis von Hugo DSB.

## Voraussetzungen

- Ein **Microsoft 365 Business**-Tenant (Business Basic genügt)
- **Global Admin** oder **Privileged Role Administrator** für die Erst-Verbindung
- Hugo DSB **Enterprise** Plan (Feature ist hochrisikoreich, daher in den höheren Plänen)

## Schritt 1: Verbindung herstellen

Im DSB-Modul **„Schulungen → Microsoft 365"** klicken Sie auf **„Mit Microsoft verbinden"**. Sie werden zu Microsoft umgeleitet und melden sich mit dem Admin-Konto an. Erlauben Sie folgende Berechtigungen:

- `User.Read.All` – Mitarbeiter-Liste auslesen
- `Group.Read.All` – Gruppen für Filter / Verteiler
- `Directory.Read.All` – Abteilungs-/Standort-Felder

Hugo DSB speichert ein **Refresh-Token** und kann ab da alle 24 Stunden neu lesen.

## Schritt 2: Filter setzen

Sie wollen meist nicht den ganzen Tenant synchronisieren, sondern z. B. nur eine Gruppe „Mitarbeiter" oder eine Abteilung „Marketing". Im Filter-Dialog wählen Sie:

- **Microsoft-365-Gruppe** (Sicherheits- oder M365-Gruppe)
- **Abteilung** (Department-Feld in M365)
- **Standort** (UsageLocation oder physisches Office)
- **Manuelle Whitelist** einzelner User-Principal-Names

Nutzer, die der Filter nicht trifft, werden **nicht** importiert.

## Schritt 3: Erst-Synchronisation

Nach Klick auf **„Jetzt synchronisieren"** sehen Sie eine Vorschau:

- Wie viele Personen werden importiert?
- Welche werden geupdated (Name geändert, Abteilung gewechselt)?
- Welche werden **deaktiviert** (im M365 nicht mehr aktiv)?

Hugo DSB löscht keine Mitarbeiter automatisch – ehemalige Mitarbeiter werden auf **inaktiv** gesetzt, behalten aber ihre Schulungs-Historie für Audit-Zwecke.

## Schritt 4: Automatische Schulungszuweisung

Sobald Mitarbeiter im System sind, können Sie Regeln definieren:

- „Jeder neue Mitarbeiter bekommt automatisch das **DSGVO-Basis-Modul**"
- „Mitarbeiter in Abteilung **HR** bekommen zusätzlich **Mitarbeiter-Datenschutz**"
- „Mitarbeiter mit Hochrisiko-KI-Zugang bekommen das **AI-Act-Modul**" (Pflicht ab 02.02.2026)

Hugo DSB erinnert die Person per E-Mail – über Ihr SMTP oder unsere Send-Domain.

## Schritt 5: Plan und Wartung

- **Sync-Intervall:** Standard 24 h, optional 6 h (Enterprise) oder manuell
- **Berechtigungs-Refresh:** Alle 90 Tage neu zustimmen (Microsoft-Vorgabe)
- **Token-Widerruf:** Wenn ein Admin den Token in M365 widerruft, fällt die Sync aus – Hugo DSB warnt per E-Mail

## Datenschutz und Rechtsgrundlage

Die M365-Integration ist **datensparsam** ausgelegt:

- Es werden nur Stammdaten gelesen (Name, E-Mail, Abteilung, ggf. Standort)
- **Keine** Mail-Inhalte, **kein** Kalender, **keine** Teams-Daten
- Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) zur Erfüllung der Schulungspflichten

Die Verarbeitung dokumentieren Sie als **AVV-Eintrag** mit der frag.hugo Informationssicherheit GmbH (Vorlage in Hugo DSB hinterlegt).

## FAQ

**„Wir nutzen Google Workspace, kein M365."**
Ein Google-Workspace-Sync ist auf der Roadmap – aktuell nur Microsoft. Manueller CSV-Import bleibt für alle Tenant-Typen verfügbar.

**„Was, wenn ein Mitarbeiter aus M365 entfernt wird?"**
Hugo DSB setzt den Eintrag auf **inaktiv** und sendet keine weiteren Schulungs-Reminder. Die Schulungs-Historie bleibt für die DSGVO-Aufbewahrung erhalten.

**„Kann ich die Sync rückgängig machen?"**
Ja: **„Verbindung trennen"** im M365-Settings. Refresh-Token wird gelöscht, Mitarbeiter-Daten bleiben (zur Bearbeitung) bis Sie sie manuell löschen.

<div class="related-articles">

### Verwandte Artikel
- [Mitarbeiter zur Schulung einladen](/hugo-dsb/mitarbeiter-einladen/)
- [Schulungen starten](/hugo-dsb/schulungen-starten/)
- [AVV erstellen](/hugo-dsb/avv-erstellen/)

</div>

<div class="cta-banner">
  <h3>M365-Sync inklusive im Enterprise Plan</h3>
  <p>Mitarbeiter automatisch importieren, Schulungen zuweisen, NIS2/AI-Act-Pflichten erfüllen.</p>
  <a href="https://dsb.fraghugo.de/pricing" class="cta-button">Enterprise testen →</a>
</div>
