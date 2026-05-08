---
title: "VVT-Vorlagen importieren — Tutorial in 5 Minuten"
description: "Wie Sie aus 277 Hugo-VVT-Master-Vorlagen die richtigen für Ihre Branche auswählen und in 1 Klick importieren."
---

Hugos VVT-Vorlagen-Library enthält **362 Master-Verfahren** in 14 Bereichen und 15 Branchen. Diese Anleitung zeigt, wie Sie in 5 Minuten 30 Verfahren auf einmal importieren — ohne 4 Stunden Excel-Arbeit pro Verfahren.

## Schritt 1: Zur Vorlagen-Library navigieren

1. Loggen Sie sich in `app.fraghugo.de` ein
2. In der Sidebar: **Datenschutz → Verarbeitungsverzeichnis**
3. Klicken Sie oben rechts auf **„Vorlagen-Library"**

→ URL: `/dsb/vvt/vorlagen`

## Schritt 2: Branche oder Bereich filtern

Sie haben drei Filter-Möglichkeiten:

### Option A: Branche wählen
Im Industrie-Filter die passende Branche wählen:
- Steuerberater (30 Verfahren)
- IT-Systemhaus (30)
- Hotel/Gastro (30)
- Versicherungs-Makler (25)
- Anwaltskanzlei (25)
- Apotheke (20)
- KFZ-Werkstatt (20)
- Handwerk (20)
- Praxis/Gesundheit (20)
- E-Commerce (25)
- SaaS (20)
- Beratung/Agentur (15)
- NPO/Verein (15)
- Industrie (25)
- Logistik (20)

### Option B: Bereich wählen
14 Tab-Bereiche oben:
- IT (allg.)
- IT-Office-365
- EDV-IT
- Personal
- Buchhaltung
- Vertrieb
- Marketing
- Einkauf
- Logistik
- Fuhrpark
- Webseite & Social Media
- Videoüberwachung
- DSK / Datenschutz-Kerngeschäft
- Sonstige

### Option C: Suche
Suchfeld: „Outlook", „Lohn", „Mahnwesen" — findet alle Vorlagen mit diesem Stichwort.

## Schritt 3: Bulk-Select + Import

1. **Branche wählen** (z.B. „Steuerberater")
2. **„Alle aus Steuerberater wählen"** klicken — markiert alle 30 Verfahren
3. Unten am Bildschirmrand erscheint Bulk-Bar: **„30 ausgewählt — Importieren"**
4. Klick → 30 Verfahren werden mit Status „Entwurf" angelegt

→ Statt 4 Wochen Excel-Doku in **5 Minuten**.

## Schritt 4: Vorlagen anpassen

Nach Import landen Sie in der VVT-Liste. Jedes Verfahren hat:

- Status: **„Entwurf"** (gelb)
- Quelle: **„Aus Vorlage [Name]"**
- Alle Pflichtfelder vorausgefüllt

Pro Verfahren öffnen und an Ihre Realität anpassen:

- Verantwortliche Abteilung
- Konkrete Empfänger (z.B. Ihre DATEV-Beraternummer)
- Drittland-Details, falls relevant
- TOM-Liste anpassen

## Schritt 5: Zur Prüfung an DSB übergeben

Wenn alle Verfahren angepasst sind:

1. **„Alle als zur Prüfung markieren"** in der VVT-Liste
2. DSB bekommt Notification (Bell-Icon mit Counter)
3. DSB prüft in **Admin → Freigabe-Inbox**
4. Status wird auf **„Freigegeben"** (grün) gesetzt

## Tipp: Diff-View bei Master-Update

Wenn die DSK eine Empfehlung ändert, aktualisiert frag.hugo die Master-Vorlage. Sie bekommen eine Banner-Mitteilung:

> „Master-Vorlage „Lohnabrechnung" wurde am 15.01.2027 aktualisiert. **Diff sehen** | **Übernehmen** | **Skip**"

Diff-View zeigt rot/grün-Markierung der Änderungen. Sie entscheiden pro Mandant, ob übernommen wird.

**Niemand sonst hat das im Markt** (Proliance 360, ProDataMan, audatis, caralegal — alle nicht).

## KI-Risiko-Auto-Flags

Hugo prüft beim Import + bei jedem Edit automatisch:

- **DSFA-Pflicht**: Verarbeitung von Art. 9-Daten? Profiling? Massendaten?
- **Drittland-Risiko**: Salesforce/HubSpot/AWS ohne SCC?
- **Art. 9-Sondertaten**: Gesundheit, Religion, Biometrie?
- **DSK-Blacklist**: TikTok Pixel, Meta Custom Audiences?

→ Banner-Hinweis im Wizard ab Step 7. Beispiel:

> „⚠️ KI-Risiko-Hinweis: Verfahren `Newsletter` mit Recipient `Mailchimp` — US-Cloud-Anbieter, Drittland-Transfer-Flag prüfen. SCC dokumentieren."

## Plan-Verfügbarkeit

- **Hugo DSB Starter (149 €/Mo):** alle 362 Templates lesen + max 50 Aktiv-Importe
- **Pro (299 €):** unlimited Importe + eigene Vorlagen + Diff-View bei Master-Update
- **Enterprise (499 €):** + DSB-Multi-Tenant-Push + Branchen-Pakete + KI-Risiko-Coach

## Konkurrenz-Vergleich

| Anbieter | Anzahl Vorlagen | Bulk-Import | Diff-View |
|---|---|---|---|
| **Hugo DSB** | **362** | **ja** | **ja** |
| Proliance 360 | 120 | manuell | nein |
| ProDataMan | 150 | KI-Vervollständigung | nein |
| audatis | 200+ | Pay-per-Branche | nein |
| caralegal | 50 | manuell | nein |
| dsm-online | 80+ | manuell | nein |

## Nächste Schritte

- [VVT-Wizard im Detail](/hugo-dsb/vvt-anlegen/)
- [Mehrfach-Rechtsgrundlagen erklärt](/hugo-dsb/vvt-anlegen/#mehrfach-rechtsgrundlagen)
- [DSB-Multi-Tenant-Push für externe DSBs](/hugo-dsb/multi-tenant-push/)
