---
title: "Auftraggeber-Dashboard – Scores im Überblick"
description: "Das Auftraggeber-Dashboard von Hugo Shield zeigt alle Zulieferer-Scores auf einen Blick. So lesen Sie die Übersicht und filtern nach Risiko."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Auftraggeber, Einkauf, Compliance, GF</span>
  <span><span class="label">Lesezeit:</span> 4 Minuten</span>
</div>

Wenn Sie Ihre Zulieferer eingeladen haben und die ersten Assessments eintrudeln, brauchen Sie eine **Übersicht**: Wer ist sicher, wer ist riskant, wo müssen Sie eingreifen? Das **Auftraggeber-Dashboard** in Hugo Shield ist Ihr Cockpit dafür.

## Was sehe ich im Dashboard?

Das Dashboard hat vier Bereiche:

### 1. KPI-Kacheln (oben)

- **Eingeladene Zulieferer:** wie viele insgesamt
- **Abgeschlossene Assessments:** wie viele haben den Fragebogen ausgefüllt
- **Durchschnittlicher Score:** Branchenbenchmark
- **Risiko-Lieferanten:** wie viele haben einen kritischen Score

![Shield Lieferketten-Dashboard mit 6 Zulieferern und KPI-Kacheln](/screenshots/shield-dashboard.png)

### 2. Score-Verteilung

Eine Grafik (Histogramm) zeigt, wie viele Zulieferer welche Note haben:

- Wie viele A?
- Wie viele B?
- Wie viele C, D, E, F?

So sehen Sie auf einen Blick, ob Ihre Lieferkette stark oder schwach ist.

### 3. Zulieferer-Liste

Eine sortier- und filterbare Liste aller Zulieferer mit:

- **Firmenname**
- **Branche**
- **Score** (Note + Punkte)
- **Letztes Assessment** (Datum)
- **Status** (offen / abgeschlossen / überfällig)
- **Aktion** (Erinnerung senden, Details ansehen)

Sie können filtern nach:
- Score (z. B. „nur D, E, F anzeigen")
- Branche
- Status
- Letzte Aktivität
- Einlade-Zeitraum

### 4. Zeitachse / Historie

Eine Zeitleiste zeigt, wie sich Ihre Lieferketten-Sicherheit über die Zeit entwickelt:

- Anzahl Zulieferer: steigend?
- Durchschnitts-Score: besser oder schlechter?
- Anzahl Risiko-Lieferanten: weniger?

## Was sehe ich NICHT?

Hugo Shield schützt die Vertraulichkeit der Zulieferer. Sie sehen:

- **Den aggregierten Score** (Note A–F + Punkte)
- **Block-Scores** (welche Themenbereiche stark/schwach)
- **Letzte Aktivität**

Sie sehen **NICHT**:

- **Einzelne Antworten** auf Fragen
- **Welche Tools** der Zulieferer einsetzt
- **Welche internen Prozesse** er hat

Das ist gewollt: Wenn Sie Detail-Antworten hätten, würden viele Zulieferer aus Wettbewerbsschutz nicht ehrlich antworten. So bekommen Sie aussagekräftige Scores – ohne Geschäftsgeheimnisse zu lüften.

## Detail-Ansicht eines Zulieferers

Klicken Sie auf einen Zulieferer in der Liste, um die Detail-Ansicht zu öffnen. Sie sehen:

- **Stammdaten** (Firma, Ansprechpartner, Branche)
- **Assessment-Historie** (alle Assessments, mit Datum und Score)
- **Score-Trend** (Diagramm über Zeit)
- **Block-Details** (Radar-Chart des aktuellen Assessments)
- **Notizen** (intern, sieht nur Ihre Seite)
- **Verbundene Aufträge** (wenn Sie Hugo Shield mit Ihrem ERP gekoppelt haben)

## Risiko-Ampel

Hugo Shield verwendet eine **Ampel-Logik**:

- **Grün** – Score B oder besser, kein Handlungsbedarf
- **Gelb** – Score C oder D, Verbesserung erwarten
- **Rot** – Score E oder F, akuter Handlungsbedarf

Sie können die Schwellen pro Auftraggeber-Account anpassen, falls Sie strengere oder lockerere Standards haben.

## Aktionen aus dem Dashboard

Direkt aus der Übersicht können Sie:

- **Erinnerung senden** (an Zulieferer, die noch nicht abgeschlossen haben)
- **Eskalations-Mail** versenden
- **Frist verlängern**
- **Notiz hinzufügen** (für interne Doku)
- **Auf E-Mail klicken** und direkt schreiben
- **Detail-Ansicht öffnen**
- **Report exportieren** (siehe [Reports](/hugo-shield/shield-reports/))

## Filter und Suche

Über der Zulieferer-Liste finden Sie eine Suchleiste und Filter:

- **Suche** – Firmenname, E-Mail, ID
- **Filter Score** – Schieberegler von Min/Max
- **Filter Status** – Drop-down
- **Filter Branche** – Multi-Select
- **Filter Region** – wenn Stammdaten gepflegt sind
- **Filter Aktivität** – „Inaktive länger als 30 Tage", etc.

So finden Sie auch in einer Liste mit 200 Zulieferern schnell die kritischen.

## Tipps für die Praxis

**1. Setzen Sie sich einen festen Compliance-Tag pro Monat.**
Einmal pro Monat öffnen Sie das Dashboard, prüfen die Risiko-Lieferanten, schicken Erinnerungen und exportieren einen Bericht für die Geschäftsleitung. Das dauert ~30 Minuten.

**2. Nutzen Sie Notizen aktiv.**
Wenn Sie z. B. mit einem Zulieferer telefoniert haben oder eine Eskalation läuft, halten Sie das in der Notiz fest. So weiß auch ein Vertretungs-Kollege, was Sache ist.

**3. Filtern Sie nach „inaktiv".**
Manche Zulieferer öffnen die Einladung, fangen an und bleiben dann hängen. Filter „seit 14 Tagen inaktiv" zeigt Ihnen genau diese Fälle. Eine kurze Mail bringt sie meistens zurück.

## FAQ

**„Wie viele Zulieferer kann ich verwalten?"**
- Starter: bis 25
- Team: bis 100
- Enterprise: unbegrenzt

**„Können mehrere Personen das Dashboard sehen?"**
Ja. Im Team- und Enterprise-Tarif können Sie Kollegen einladen – z. B. Einkauf, Compliance, Geschäftsführung. Jede Person bekommt eine eigene Rolle (Lesen, Bearbeiten, Admin).

**„Bekomme ich Alerts bei Score-Verschlechterungen?"**
Ja. Sie können Alerts einrichten: „Schick mir eine Mail, wenn ein Zulieferer von B auf C oder schlechter fällt."

**„Kann ich das Dashboard in PowerBI / Looker einbinden?"**
Im Enterprise-Tarif: ja. Es gibt einen API-Endpoint, der die Daten als JSON liefert.

<div class="related-articles">

### Verwandte Artikel
- [Zulieferer einladen](/hugo-shield/zulieferer-einladen/)
- [Reports erstellen](/hugo-shield/shield-reports/)
- [Score verstehen](/hugo-shield/score-verstehen/)

</div>

<div class="cta-banner">
  <h3>Dashboard im Team-Tarif testen</h3>
  <p>14 Tage gratis – mit allen Filtern, Alerts und Reports.</p>
  <a href="https://app.fraghugo.de/shield/pricing" class="cta-button">Team testen →</a>
</div>
