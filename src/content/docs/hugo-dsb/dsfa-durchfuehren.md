---
title: "DSFA – Wann und wie?"
description: "Eine Datenschutz-Folgenabschätzung (DSFA) ist nach Art. 35 DSGVO bei riskanten Verarbeitungen Pflicht. Mit Hugo DSB führen Sie sie geführt durch."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, DSB, Projektleiter</span>
  <span><span class="label">Lesezeit:</span> 5 Minuten</span>
</div>

Eine **Datenschutz-Folgenabschätzung (DSFA)** ist nach **Art. 35 DSGVO** Pflicht, wenn eine geplante Verarbeitung **voraussichtlich ein hohes Risiko** für die Rechte und Freiheiten der Betroffenen birgt. Klingt abstrakt – hier wird es konkret.

## Wann brauche ich eine DSFA?

Die einfache Faustregel: Eine DSFA ist Pflicht, wenn **mindestens zwei** der folgenden Punkte zutreffen:

- **Großflächige Verarbeitung** (viele Personen)
- **Sensible Daten** (Gesundheit, Religion, Sexualität, Strafregister, Biometrie, Genetik)
- **Profiling oder Scoring**
- **Systematische Überwachung** (Videoüberwachung, Mitarbeiter-Tracking, Web-Tracking im großen Stil)
- **Automatisierte Entscheidungen** mit Rechtsfolgen
- **Innovative Technologien** (KI, IoT, Gesichtserkennung)
- **Verknüpfung von Datensätzen** aus verschiedenen Quellen
- **Daten von schutzbedürftigen Personen** (Kinder, Patienten, Mitarbeiter)

Beispiele für **DSFA-pflichtige** Verarbeitungen in KMU:

- Zeiterfassung mit GPS oder Fingerabdruck
- Videoüberwachung am Arbeitsplatz
- KI-gestütztes Bewerber-Screening
- Telematik-Daten in Firmenwagen
- Patientendaten in Arztpraxen
- E-Learning mit detaillierten Lernprofilen
- Predictive Maintenance mit Maschinendaten und Mitarbeiterzuordnung

## Schritt 1: DSFA-Pflicht prüfen

In Hugo DSB öffnen Sie das Modul **„DSFA"**. Bevor Sie eine DSFA durchführen, klicken Sie auf **„Pflichtprüfung starten"**. Hugo führt Sie durch eine kurze Checkliste:

- Welche Verarbeitung planen Sie?
- Welche Datenkategorien?
- Wie viele Betroffene?
- Welche Technologie?
- Welche Risiken sehen Sie?

Am Ende sagt Hugo: **„DSFA pflichtig"** oder **„DSFA empfohlen, aber nicht zwingend"** oder **„DSFA nicht erforderlich"**. Diese Vorprüfung dokumentieren Sie auch dann, wenn keine DSFA pflichtig ist – als Nachweis.

## Schritt 2: DSFA-Wizard starten

Wenn die Prüfung positiv ausfällt, klicken Sie auf **„Neue DSFA starten"**. Der Wizard führt Sie durch sechs Phasen:

### Phase 1: Beschreibung der Verarbeitung

- Was wird verarbeitet?
- Wer ist betroffen?
- Welche Technologie?
- Wer ist beteiligt (Verantwortlicher, Auftragsverarbeiter, Empfänger)?

### Phase 2: Notwendigkeit und Verhältnismäßigkeit

- Wozu ist die Verarbeitung nötig?
- Gibt es mildere Mittel, dasselbe Ziel zu erreichen?
- Sind die Daten zweckgebunden?
- Werden Daten minimiert?

### Phase 3: Risikoanalyse

Hugo DSB schlägt typische Risiken vor (Identitätsdiebstahl, Diskriminierung, Reputationsschaden, finanzielle Schäden, Bewegungs-Profiling, etc.) und Sie bewerten:

- **Eintrittswahrscheinlichkeit** (gering, mittel, hoch)
- **Schadenshöhe** (gering, mittel, hoch)

Daraus berechnet Hugo das Gesamtrisiko (Risiko-Matrix).

### Phase 4: Schutzmaßnahmen

Welche TOMs greifen, um die Risiken zu reduzieren? Hugo DSB schlägt automatisch passende vor (z. B. Verschlüsselung, Pseudonymisierung, Zugriffsbeschränkung) und Sie wählen aus.

### Phase 5: Restrisiko bewerten

Nach Anwendung der Schutzmaßnahmen: Wie hoch ist das **verbleibende Risiko**?

- **Niedrig** → Sie können die Verarbeitung starten
- **Mittel** → Sie sollten die Geschäftsführung informieren
- **Hoch** → Sie müssen die **Aufsichtsbehörde konsultieren** (Art. 36 DSGVO), bevor Sie starten

### Phase 6: Dokumentation und Freigabe

Hugo DSB generiert ein PDF mit der vollständigen DSFA. Sie holen die Freigabe ein (Geschäftsführung, DSB, ggf. Betriebsrat) und legen das Dokument in die Compliance-Akte.

![DSFA-Übersicht in Hugo DSB](/screenshots/dsb-dsfa.png)

## Schritt 3: Regelmäßige Überprüfung

Eine DSFA ist kein einmaliges Dokument. Wenn sich an der Verarbeitung etwas ändert (neue Technologie, neue Empfänger, mehr Daten), muss die DSFA aktualisiert werden. Hugo DSB erinnert Sie automatisch alle **12 Monate** daran.

## Praxis-Beispiele

**Beispiel 1: Videoüberwachung im Lager**
Risiko: Mitarbeiter werden überwacht, Bewegungsprofile entstehen.
Maßnahme: Aufzeichnung nur in Betriebszeiten, Kameras nur auf Eingang, Löschung nach 72h, Hinweisschilder, Mitbestimmung Betriebsrat.
Restrisiko: niedrig.

**Beispiel 2: KI-Bewerber-Screening**
Risiko: Diskriminierung, Intransparenz, fehlerhafte Aussortierung.
Maßnahme: KI nur als Vorschlag, finale Entscheidung durch Mensch, regelmäßige Bias-Prüfung, Bewerber wird informiert.
Restrisiko: mittel → Information an GF, ggf. Anpassung Modell.

**Beispiel 3: Gesundheits-App für Mitarbeiter**
Risiko: Sensible Gesundheitsdaten, Profiling, Versicherungs-Diskriminierung.
Maßnahme: Freiwilligkeit, Pseudonymisierung, kein Zugriff durch Arbeitgeber, externe Verarbeitung.
Restrisiko: hoch → Konsultation mit Aufsichtsbehörde nötig.

## FAQ

**„Wie lange dauert eine DSFA?"**
Mit Hugo DSB ca. 2 bis 4 Stunden für eine durchschnittliche Verarbeitung. Ohne Tool: einen Tag oder mehr.

**„Wer macht die DSFA – ich oder mein DSB?"**
Sie sind verantwortlich, aber Sie können den DSB einbeziehen. Optimal: Sie füllen die fachlichen Felder aus, der DSB prüft die juristischen Aspekte.

**„Was, wenn die Behörde sagt, die Verarbeitung ist zu riskant?"**
Dann dürfen Sie sie nicht durchführen. Die Konsultation ist deshalb so wichtig: Sie wissen früh, ob Ihr Plan tragfähig ist.

<div class="related-articles">

### Verwandte Artikel
- [VVT anlegen](/hugo-dsb/vvt-anlegen/)
- [TOMs dokumentieren](/hugo-dsb/toms-dokumentieren/)
- [Datenpanne melden](/hugo-dsb/datenpanne-melden/)

</div>

<div class="cta-banner">
  <h3>DSFA mit geführtem Wizard</h3>
  <p>Pflichtprüfung, Risikomatrix, Maßnahmen-Empfehlungen – alles in Hugo DSB Professional.</p>
  <a href="https://dsb.fraghugo.de/pricing" class="cta-button">14 Tage Pro testen →</a>
</div>
