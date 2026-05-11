---
title: Verarbeitungsverzeichnis (VVT)
description: Pflicht-Liste aller Datenverarbeitungen nach Art. 30 DSGVO — mit KI-Vorschlägen, AVV-Verknüpfung und Behörden-Export.
---

![VVT-Übersicht mit allen Verarbeitungen](/screenshots/datenschutz/vvt.png)

Die Pflicht-Übersicht aller Verarbeitungen personenbezogener Daten. Wenn die Aufsichtsbehörde anruft, ist das **das erste Dokument**, das sie sehen will.

## Was Sie hier machen

### Neue Verarbeitung anlegen

Klicken Sie "Neu" oben rechts. Zwei Wege:

- **Aus Vorlage** — 400+ vorbefüllte Vorlagen (Mitarbeiterstamm, Bewerbungen, Newsletter, Webshop-Bestellungen, CRM, Cloud-Backup, Videoüberwachung, ...). Spart 80 % der Zeit.
- **Leer** — wenn Sie eine spezifische Eigen-Verarbeitung hast.

Der Wizard fragt:
- Was wird verarbeitet (Datenkategorien)
- Warum (Zweck + Rechtsgrundlage — Hugo schlägt Art. 6/9 vor)
- Von wem (intern/extern)
- Wie lange (Aufbewahrungsfrist)
- Wer kriegt's (Empfänger, Auftragsverarbeiter)
- Wie geschützt (Verweis auf TOMs)
- Drittland-Transfer (ja/nein, welche Garantien)

### Bestehende bearbeiten

Klicken Sie auf einen Eintrag. Sie können Felder ändern, **mit KI verbessern** (Hugo prüft Plausibilität und schlägt fehlende Felder vor), historisierte Versionen einsehen.

### Status

- **Entwurf** — Sie bearbeiten.
- **Zur Prüfung** — externer DSB bekommt eine Mail und prüft.
- **Freigegeben** — geht in den Compliance-Score ein.
- **Veraltet** — wird aus aktiven Listen ausgeblendet, bleibt aber im Archiv.

### Filter / Suche

Oben Filter nach: Status, Kategorie, Rechtsgrundlage, Hat-DSFA-Pflicht, Drittland.

### Export

- **PDF** — formales Verzeichnis mit Header/Logo Ihrer Firma, für die Aufsichtsbehörde.
- **Excel** — zum Bearbeiten, falls jemand offline reviewen will.
- **JSON** — für Backup oder Migration.

## Was MUSS rein?

Faustregel: **Wenn personenbezogene Daten verarbeitet werden, ja**. Auch wenn nur ein Mitarbeiter betroffen ist. Beispiele:

- Mitarbeiterstamm (Lohn, Krankenstand, Urlaub)
- Bewerbungen
- Kundendaten / CRM
- Newsletter
- Website-Tracking (Matomo, GA, ...)
- Videoüberwachung
- Cloud-Speicher mit personenbezogenen Files
- Online-Bewerbungs-Plattform
- Recruiting-Plattform extern (z.B. Indeed)

## Tipps

- **Pflege-Rhythmus**: 1× im Jahr durchsehen, ob noch alles stimmt. Bei jeder Änderung (neue Software, neuer Prozess) zeitnah aktualisieren.
- **DSFA-Indikator**: Eine Verarbeitung mit roter Markierung ist DSFA-pflichtig (z.B. systematische Überwachung, Profiling, besondere Datenkategorien). Hugo sagt's Ihnen.
- **AVV-Verknüpfung**: Wenn Sie einen Auftragsverarbeiter im VVT angibst, wird automatisch ein AVV-Eintrag verlangt — die beiden Bereiche sind verknüpft.
