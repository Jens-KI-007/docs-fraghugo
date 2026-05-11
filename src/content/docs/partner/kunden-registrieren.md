---
title: Kunden registrieren (für Berater)
description: Als Partner einen neuen Mandanten in der Plattform anlegen — mit Vollmacht, eigenem Login und korrekter Rechnungsstellung.
---

Wenn Sie Berater, Buchhalter oder Systemhaus-Mitarbeiter sind und im Auftrag eines Kunden die Plattform einrichten sollen, geht das in zwei Wegen:

## Weg A: Kunde registriert selbst, Sie als Partner verbunden

Empfohlen, wenn der Kunde technisch fit ist:

1. **Sie verschicken einen Einladungslink** aus Ihrem Partner-Portal (`app.fraghugo.de/partner/lead-neu`).
2. **Kunde klickt** → landet auf einer kogebrandeten Signup-Seite ("Ihr Berater [Ihre Firma] hat Sie eingeladen").
3. **Kunde legt Konto an** + bucht Tarif. Stripe-Checkout läuft direkt mit Kunden-Karte.
4. **Sie sind als Partner verknüpft** — sehen den Status in Ihrem Dashboard, bekommen Provision.

## Weg B: Sie richten alles ein, Kunde unterschreibt

Empfohlen für Kunden ohne IT-Affinität:

1. **Im Partner-Portal** klicken Sie "Mandant für Kunden anlegen".
2. **Kunden-Daten erfassen** — Firma, USt-ID, Ansprechpartner, Branche, NIS2-Sektor.
3. **Vollmacht** — Sie laden eine unterschriebene Vollmacht hoch ("Ich, [Kunde], beauftrage [Partner], die Plattform für mich einzurichten und Verträge zu schließen").
4. **Tarif wählen** — Sie wählen den passenden Plan; Rechnung geht trotzdem an den Kunden, nicht an Sie.
5. **Erste Daten anlegen** — VVT-Grundgerüst, AVV-Standardliste (Microsoft 365, DATEV, ...), TOMs-Vorlage. Sie machen das in 1-2 h.
6. **Kunde wird übergeben** — Sie schalten den Kunden frei, er kann selbst weiterarbeiten oder Sie weiter operativ.

## Was Sie als Partner sehen

In Ihrem Mandanten-Portal (`app.fraghugo.de/partner/mandanten`):

- Liste aller Kunden, die Sie vertreten
- Letzte Aktivität pro Kunde
- Offene Aufgaben (z.B. "VVT von Kunde X braucht Review")
- Provisions-Stand pro Kunde
- Direkt-Login als Kunde (mit Audit-Log — der Kunde sieht später, wer wann was geändert hat)

## Datenschutz / Vollmacht

- **Sie sehen die Daten Ihres Kunden** wie ein interner Datenschutzbeauftragter — VVT, AVV, Datenpannen, Mitarbeiter-Liste.
- **Sie sehen NICHT die Daten anderer Mandanten** — Mandanten-Trennung in der DB ist hart, Sie kommen technisch nicht an fremde Daten.
- **Der Kunde kann Sie jederzeit aussperren** — über "Einstellungen → Berater entziehen". Sie verlieren Zugriff sofort.

## Rechnungsstellung

- Rechnung der Plattform geht **direkt an den Kunden** (nicht an Sie).
- Sie können dem Kunden parallel eine **eigene Rechnung** schreiben für Ihre Beratungsleistung ("Einrichtung Datenschutz-Plattform", "Monatliche Pflege").
- Plattform-Provision (12-Monats-Provision) bekommen Sie zusätzlich — siehe [Empfehlungs-Programm](/partner/empfehlungs-programm/).

## Wenn der Kunde wechselt

- Vom Berater zu sich selbst übernehmen: "Berater entziehen" durch den Kunden — Sie verlieren Zugriff, Provision läuft trotzdem 12 Monate weiter (laut Vertrag).
- Berater wechseln: Kunde lädt neuen Berater ein, alter wird ausgeladen.
- Sie kündigen die Partnerschaft: alle aktiven Mandanten zahlen weiter Provision bis Ablauf der 12-Monats-Periode.
