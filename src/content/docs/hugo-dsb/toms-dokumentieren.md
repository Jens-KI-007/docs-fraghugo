---
title: "TOMs – Technische und organisatorische Maßnahmen"
description: "Was sind TOMs und wie dokumentieren Sie sie nach Art. 32 DSGVO? Mit Hugo DSB nutzen Sie KI-Vorschläge statt 50-seitige Vorlagen."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, IT-Leiter, DSB</span>
  <span><span class="label">Lesezeit:</span> 5 Minuten</span>
</div>

**TOMs** (Technische und Organisatorische Maßnahmen) sind die konkreten Schutzmechanismen, mit denen Sie personenbezogene Daten absichern. Pflicht nach **Art. 32 DSGVO**. In der Praxis ist das das Modul, das die meisten Unternehmer hassen – weil 50-seitige Excel-Listen mit „Verschlüsselung am Arbeitsplatz: Ja/Nein" nichts mit ihrer Realität zu tun haben.

Hugo DSB macht es anders.

## Was sind TOMs überhaupt?

TOMs sind alles, was Sie tun, um Ihre Daten vor Verlust, Diebstahl, Manipulation oder unbefugtem Zugriff zu schützen. Die DSGVO unterscheidet sieben Kategorien:

1. **Vertraulichkeit** – Wer darf Daten sehen?
2. **Integrität** – Werden Daten unverändert übertragen?
3. **Verfügbarkeit** – Sind Daten zugänglich, wenn sie gebraucht werden?
4. **Resilienz** – Kann das System Angriffe überstehen?
5. **Wiederherstellbarkeit** – Backups, Notfallpläne
6. **Verfahren zur Überprüfung** – Wer kontrolliert das?
7. **Pseudonymisierung & Verschlüsselung** – Wie schützen Sie technisch?

## Schritt 1: TOMs-Modul öffnen

In Hugo DSB klicken Sie in der linken Navigation auf **„TOMs"**. Sie sehen ein Dashboard mit den sieben Kategorien als Kacheln. Pro Kategorie sehen Sie eine Vollständigkeit (z. B. 67 %).

## Schritt 2: KI-Vorschläge nutzen

Statt mit einer leeren Liste anzufangen, lassen Sie Hugo DSB Vorschläge machen. Die KI fragt Sie nach **fünf einfachen Eckdaten**:

- Wie viele Mitarbeiter haben Sie?
- Welche Branche?
- Wo arbeiten Ihre Mitarbeiter (Büro, Homeoffice, hybrid)?
- Welche IT-Systeme nutzen Sie hauptsächlich (Windows, Mac, Cloud, On-Premise)?
- Welche besonders sensiblen Daten verarbeiten Sie (Gesundheit, Finanzen, Strafregister, etc.)?

Aus diesen fünf Antworten generiert Hugo DSB **30 bis 60 vorgeschlagene TOMs**, die typischerweise zu Ihrem Profil passen.

Beispiel-Output für ein 50-MA-Architekturbüro:

**Vertraulichkeit:**
- ✓ Zutrittskontrolle (elektronisches Schließsystem)
- ✓ Bildschirmsperre nach Inaktivität (10 Min)
- ✓ Clean Desk Policy
- ✓ Vertraulichkeitsverpflichtung im Arbeitsvertrag
- ⚠️ Verschlüsselung mobiler Geräte (BitLocker / FileVault)
- ⚠️ MFA für Cloud-Zugriffe

**Integrität:**
- ✓ HTTPS für alle Dienste
- ✓ Versionierung von Dateien (Office 365)
- ⚠️ Regelmäßige Integritätsprüfung Backups

…und so weiter.

![TOMs-Dashboard mit KI-Vorschlägen](/screenshots/dsb-features.png)

## Schritt 3: Anpassen, was nicht passt

Die KI ist ein Vorschlag, kein Diktat. Für jede Maßnahme klicken Sie eine von vier Optionen:

- **„Aktiv"** – Wir machen das so
- **„Geplant"** – Wir wollen das einführen, Frist: \[Datum]
- **„Nicht relevant"** – Begründung: \[Text]
- **„Eigene Maßnahme stattdessen"** – Wir haben etwas Vergleichbares

So bekommen Sie schnell einen Stand, der **wirklich Ihre Situation** abbildet – nicht nur ein abgeschriebener Mustertext.

## Schritt 4: Verknüpfung mit Verarbeitungen

Bei jeder Verarbeitung in Ihrem [VVT](/hugo-dsb/vvt-anlegen/) müssen Sie angeben, welche TOMs greifen. Hugo DSB schlägt automatisch passende vor – z. B. „Lohnabrechnung" → Verschlüsselung Übertragung zum Lohndienstleister, Zugriffsbeschränkung HR, Audit-Trail.

So entsteht eine **lückenlose Verbindung** zwischen Verarbeitung und Schutzmaßnahme.

## Schritt 5: Mit dem ISO/TISAX-Audit kompatibel halten

Wenn Sie ISO 27001 oder TISAX-zertifiziert sind (oder werden wollen), brauchen Sie einen **Mapping-Report**: Welche DSGVO-TOMs entsprechen welchen ISO-Controls?

Hugo DSB Professional generiert diesen Report auf Knopfdruck. Praktisch für die nächste Audit-Vorbereitung.

## Was Sie als Geschäftsführer wissen sollten

**TOMs sind kein einmaliges Dokument.** Sie ändern sich, weil Ihre IT sich ändert. Wenn Sie nächstes Jahr von On-Premise auf Cloud wechseln, müssen die TOMs aktualisiert werden.

**TOMs sind kein Selbstzweck.** Sie sind die Antwort auf die Frage: „Was tun Sie konkret, um die Daten Ihrer Kunden zu schützen?" Wenn Sie diese Frage einem Kunden im Aufzug erklären können, sind Sie gut.

**TOMs sind das, was die Aufsicht zuerst sehen will.** Wenn die Datenschutzbehörde anklopft, zählt nicht „Wir haben Verschlüsselung", sondern „Wir haben am 12. März 2026 BitLocker auf allen Notebooks aktiviert, hier ist der Audit-Log".

## FAQ

**„Brauche ich auch TOMs, wenn ich nur 5 Mitarbeiter habe?"**
Ja. Die Pflicht gilt unabhängig von der Größe. Aber Ihre TOMs dürfen einfacher sein – „Bürotür ist abgeschlossen, Notebooks haben Passwort, Backups laufen wöchentlich" reicht für viele kleine Firmen.

**„Was sind die häufigsten Lücken bei KMU?"**
- Keine Verschlüsselung mobiler Geräte
- Kein MFA für Cloud-Zugriffe
- Keine schriftliche Backup-Strategie
- Keine Vertraulichkeitsverpflichtung im Arbeitsvertrag
- Keine geregelte Datenträgervernichtung

**„Wie lange dauert das?"**
Mit den KI-Vorschlägen 1–2 Stunden für die Initialerfassung. Danach jährliches Review (~ 30 Minuten).

<div class="related-articles">

### Verwandte Artikel
- [VVT anlegen](/hugo-dsb/vvt-anlegen/)
- [DSFA durchführen](/hugo-dsb/dsfa-durchfuehren/)
- [Löschkonzept einrichten](/hugo-dsb/loeschkonzept/)

</div>

<div class="cta-banner">
  <h3>TOMs in 2 Stunden dokumentieren</h3>
  <p>Mit Hugo DSB Professional und KI-gestützten Vorschlägen.</p>
  <a href="https://dsb.fraghugo.de/pricing" class="cta-button">14 Tage Pro testen →</a>
</div>
