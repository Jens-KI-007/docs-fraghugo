---
title: "ISMS in 4 Wochen — Roadmap für KMU"
description: "Klassisch dauert ein ISMS 6 Monate. Mit Hugos Cross-Modul-Bridge zum VVT schaffen Sie es in 4 Wochen. Hier ist die Wochen-Roadmap."
---

Klassisches ISMS-Setup für 100-MA-Betriebe dauert **3-6 Monate** (verinice, opus i). Mit Hugo schaffen Sie es in **4 Wochen** — weil VVT-Daten als Asset-Basis genutzt werden, BSI-47-Bedrohungen importiert sind und 10 Master-Richtlinien direkt einsatzbereit sind.

## Voraussetzung

Hugo DSB **bereits aktiv** mit gefüllten Modulen:

- VVT mit ≥ 5 Verfahren
- AVV-Liste mit Empfängern
- Datenpannen-Modul (sofern Vorfälle existieren)

Wenn nicht, machen Sie zuerst die VVT-Erfassung — die Daten sind die Grundlage der ISMS-Bridge.

## Woche 1 — Asset-Register

**Ziel:** Vollständiges Inventar Ihrer Informationswerte.

### Tag 1: Cross-Modul-Bridge VVT → ISMS aktivieren

1. In `/dsb/isms/assets` öffnen
2. Klick **„Aus VVT vorschlagen lassen"**
3. Hugo durchsucht Ihre VVT-Recipients und schlägt Assets vor:
   - Outlook (External Service)
   - Salesforce CRM (External Service)
   - DATEV (External Service)
   - usw.
4. Pro Vorschlag: **„Übernehmen"** → Asset wird mit `linked_vvt_ids` angelegt

→ In 1-2 Stunden haben Sie 30-50 Assets erfasst.

### Tag 2-3: Manuelle Ergänzung

- Server / Hardware (was VVT nicht erfasst)
- Standorte (Büros, Rechenzentren)
- Kritische Dokumente (z.B. Source-Code-Repositories)
- Personenbezogene-Daten-Datenbanken

### Tag 4-5: CIA-Klassifikation

Pro Asset: **C/I/A** auf 3 Stufen (normal/hoch/sehr hoch).

→ `/dsb/isms/schutzbedarf` öffnet die Auto-Vererbung-Page.

## Woche 2 — Schutzbedarf + Risiken

### Tag 6-7: Schutzbedarfs-Analyse

In `/dsb/isms/schutzbedarf` zeigt Hugo Auto-Vorschläge:

- Verfahren mit Art. 9-Daten → Vertraulichkeit ≥ hoch
- Drittland-Transfer → Vertraulichkeit ≥ hoch
- Externer Dienstleister → Verfügbarkeit ≥ hoch (BCM)

Klick **„Vorschlag übernehmen"** pro Asset. In 1-2 Stunden alle Schutzbedarfe gesetzt.

### Tag 8-10: Risiko-Register

In `/dsb/isms/risiken`:

1. Klick **„Risiko anlegen"**
2. Bedrohung wählen aus 47 BSI-Elementaren-Gefährdungen:
   - G.0.39 Schadprogramme (Ransomware)
   - G.0.42 Social Engineering
   - G.0.16 Diebstahl Geräte
   - usw.
3. Schaden × Wahrscheinlichkeit (5×5-Matrix)
4. Behandlungsstrategie (vermeiden/reduzieren/transferieren/akzeptieren)

→ Realistisch 15-20 Risiken im Detail.

## Woche 3 — Maßnahmen + Richtlinien

### Tag 11-13: Maßnahmen-Register

In `/dsb/isms/massnahmen`:

1. Pro Risiko 1-3 Maßnahmen anlegen
2. ISO-27001-Annex-A-Control wählen (alle 93 importiert)
3. Reifegrad nach CMMI 1-5 setzen
4. Verantwortlicher + Frist + Status

→ Hugo erzeugt Auto-Maßnahmen aus Audit-Findings (siehe Woche 4).

### Tag 14-15: Master-Richtlinien adoptieren

In `/dsb/isms/richtlinien`:

10 Master-Richtlinien stehen bereit:

1. ISMS-Politik (von GF freizugeben)
2. Acceptable Use Policy (AUP)
3. Passwort-Richtlinie
4. Backup-Richtlinie
5. Mobile-Device-Management
6. Cloud-Service-Nutzung
7. Lieferanten-Sicherheit
8. Incident-Response-Plan
9. Patch-Management
10. Asset-Klassifikation

Pro Richtlinie: **„Übernehmen"** → wird als „Entwurf" in Ihre Org kopiert. Anpassen, GF freigeben, Mitarbeiter-Sign-Off auslösen.

## Woche 4 — Audit + Reports

### Tag 16-18: Internes Audit

In `/dsb/audits/neu`:

1. Katalog **„BSI-Grundschutz Reife"** wählen
2. 77 Fragen durchlaufen mit KI-Antwort-Coach
3. Auto-Maßnahmen werden bei Nein/Teilweise generiert

### Tag 19-20: Statement of Applicability + Reports

In `/dsb/isms/reports`:

- **Statement of Applicability** generieren (alle 93 ISO-Annex-A mit Reifegrad)
- **Risiko-Heatmap** als HTML-Download (5×5-Matrix)
- **Reifegrad-Bars** pro ISO-Themenfeld
- **Asset-Inventar** als CSV-Export

→ Sie haben jetzt **alle Pflicht-Dokumente** für ISO-27001-Vor-Audit.

## Vergleich: Hugo vs. Klassisch

| Schritt | Klassisch (verinice/opus i) | Mit Hugo |
|---------|------------------------------|----------|
| Asset-Inventur | 4-6 Wochen Workshop | 1 Woche (mit VVT-Bridge) |
| Schutzbedarfs-Analyse | 2-3 Wochen | 1-2 Tage (Auto-Vererbung) |
| Risiko-Register | 4-6 Wochen | 3-5 Tage (BSI-47 + Auto-Vorschläge) |
| Maßnahmen + Richtlinien | 6-8 Wochen | 1 Woche (10 Master + Adopt) |
| Audit + Reports | 2-4 Wochen | 1 Woche (7 Kataloge + Auto-SoA) |
| **Gesamt** | **18-27 Wochen** | **4 Wochen** |

## Was kommt nach Woche 4?

Nach 4 Wochen haben Sie:

✅ Asset-Register vollständig
✅ Schutzbedarfs-Analyse abgeschlossen
✅ Risiko-Register mit 15-20 Risiken
✅ Maßnahmen mit Reifegrad-Tracking
✅ 10 Richtlinien adoptiert + Mitarbeiter-Sign-Off läuft
✅ Internes Audit durchgeführt
✅ Statement of Applicability + Heatmap

→ **Audit-fähig.** Externer ISO-27001-Audit kann gebucht werden (typisch 6-9 Monate vor Zertifikats-Ausstellung).

## NIS2-Sicht

Wenn Sie NIS2-betroffen sind, schließen Sie ergänzend ab:

- BSI-Registrierung (siehe `/nis2/bsi-registrierung/`)
- GF-Schulung §38 BSIG (siehe `/nis2/gf-schulung/`)
- NIS2-Vorfall-Tracker aktivieren (`/dsb/isms/nis2-vorfaelle`)

## Plan-Verfügbarkeit

- **Hugo ISMS Starter (149 €/Mo):** alles für 4-Wochen-Setup mit max 50 Assets
- **Pro (349 €):** unlimited Assets + KI-Schutzbedarf-Vorschläge + Cross-Modul-Bridge aktiv
- **Enterprise (699 €):** + ISO-27001-Audit-Vorbereitung + externer Auditor-Zugang + Multi-Site

→ Combo-Rabatt 15 %: Promo-Code `COMBO-DSB-ISMS-15` auf DSB Pro + ISMS Pro.

## Nächste Schritte

- [Was ist ein ISMS?](/isms/was-ist-ein-isms/)
- [Asset-Register Best Practices](/isms/asset-register/)
- [Risiko-Matrix richtig befüllen](/isms/risiko-matrix/)
- [Statement of Applicability](/isms/soa/)
