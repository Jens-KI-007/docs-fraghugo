---
title: "AVV – Auftragsverarbeitung dokumentieren"
description: "Wann brauche ich einen Auftragsverarbeitungsvertrag (AVV)? Mit Hugo DSB erstellen oder verwalten Sie AVVs für DATEV, Microsoft 365, Salesforce und Co."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, Einkauf, Datenschutzkoordinator</span>
  <span><span class="label">Lesezeit:</span> 5 Minuten</span>
</div>

Ein **Auftragsverarbeitungsvertrag (AVV)** ist nach Art. 28 DSGVO Pflicht, sobald Sie einem Dienstleister erlauben, personenbezogene Daten **in Ihrem Auftrag** zu verarbeiten. In der Praxis betrifft das fast jedes Unternehmen – meistens ohne dass es jemand merkt.

## Was ist ein AVV?

Ein AVV ist ein Vertrag zwischen Ihnen (dem **Verantwortlichen**) und einem Dienstleister (dem **Auftragsverarbeiter**), der regelt:

- Welche Daten der Dienstleister verarbeiten darf
- Zu welchem Zweck
- Wie lange
- Welche Sicherheitsmaßnahmen er einhalten muss
- Welche Subunternehmer er einsetzen darf
- Was bei einer Datenpanne passiert
- Wann die Daten zurückgegeben oder gelöscht werden

Der AVV schützt **Sie** – wenn der Dienstleister Mist baut, können Sie die Verantwortung an ihn weiterreichen. Aber: Sie müssen den AVV haben, sonst sind beide Seiten in der Pflicht.

## Wann brauche ich einen AVV?

**Pflicht** ist ein AVV bei jedem Dienstleister, der **echten Zugriff** auf Ihre personenbezogenen Daten hat. Beispiele:

- **DATEV** – verarbeitet Ihre Lohn- und Buchhaltungsdaten
- **Microsoft 365 / Google Workspace** – speichert Ihre Mails, Dateien, Kalender
- **Salesforce / Pipedrive / HubSpot** – CRM mit Kundendaten
- **Mailchimp / Brevo / ActiveCampaign** – Newsletter-Tools
- **Hetzner / AWS / Strato** – Hosting Ihrer Website
- **Zoom / Microsoft Teams** – Videokonferenzen mit Aufzeichnungen
- **Externe IT-Dienstleister** – wenn sie Zugriff auf Ihre Systeme haben
- **Reinigungsfirmen mit Zutritt zu Personalakten** – ja, auch das

**Keinen AVV** brauchen Sie bei:
- **Banken** (sind keine Auftragsverarbeiter, sondern selbst verantwortlich)
- **Steuerberatern** (eigenes Berufsgeheimnis, nicht Auftragsverarbeitung)
- **Anwälten** (eigenes Berufsgeheimnis)
- **Postdienstleistern** für Briefe (DPD, DHL, Hermes – auch wenn das viele anders sehen)

## Schritt 1: AVV-Modul öffnen

In Hugo DSB öffnen Sie das Modul **„Auftragsverarbeitung"** in der linken Navigation. Sie sehen eine Liste aller AVV-Beziehungen, die Sie bisher angelegt haben.

Klicken Sie auf **„Neue Auftragsverarbeitung anlegen"**.

## Schritt 2: Dienstleister wählen

Hugo DSB hat eine Datenbank der häufigsten Auftragsverarbeiter mit **vorgeprüften AVV-Vorlagen**:

- DATEV
- Microsoft 365
- Google Workspace
- Salesforce
- HubSpot
- Brevo / Sendinblue
- Mailchimp
- AWS / Hetzner / Strato / IONOS
- Zoom / Teams
- DocuSign
- Slack

Tippen Sie den Namen ein – wenn der Dienstleister in der Datenbank ist, erscheint er als Vorschlag. Klicken Sie ihn an, und Hugo DSB lädt automatisch:

- den **offiziellen AVV-Link** des Dienstleisters
- die typischen **Subprozessoren**
- die typischen **Drittlandtransfers**
- empfohlene **Standardvertragsklauseln**

## Schritt 3: AVV verlinken oder hochladen

Sie haben drei Optionen:

**Option A: Online-AVV verlinken (empfohlen)**
Viele große Dienstleister (DATEV, Microsoft, Google) bieten ihren AVV als Web-Dokument an. Sie verlinken einfach die URL – das spart Speicherplatz und ist immer aktuell.

**Option B: PDF hochladen**
Wenn Sie einen unterschriebenen AVV als PDF haben, laden Sie ihn hoch. Hugo DSB speichert ihn verschlüsselt und versioniert.

**Option C: Hugo-Vorlage nutzen**
Für kleinere Dienstleister (z. B. Ihre regionale IT-Firma), die keinen eigenen AVV haben, generiert Hugo DSB einen aus der **Mustervorlage des BfDI**. Sie passen Firma, Anschrift und Datenkategorien an, drucken aus, beide unterschreiben.

![AVV-Übersicht mit Dienstleister-Liste](/screenshots/dsb-avv.png)

## Schritt 4: Verknüpfung mit dem VVT

Hugo DSB fragt Sie: **„Welche Verarbeitungen aus Ihrem VVT sind betroffen?"** Sie wählen aus der Liste – und ab sofort sind beide Module verknüpft. Wenn Sie später jemanden einladen, das VVT zu prüfen, sieht er sofort, welche AVV zu welcher Verarbeitung gehört.

## Schritt 5: Erinnerung für Re-Check setzen

Manche AVVs haben Laufzeiten oder müssen jährlich überprüft werden. Hugo DSB setzt automatisch eine **Erinnerung** für ein Jahr nach Anlage. Sie bekommen dann eine Mail: „Ist dieser AVV noch aktuell? Hat sich beim Dienstleister etwas geändert?"

## Häufige Fragen

**„Ich habe keinen AVV mit Microsoft – ist das schlimm?"**
Microsoft schließt den AVV automatisch über die **Online Services Terms**, wenn Sie ein kostenpflichtiges Microsoft-365-Abo haben. Sie müssen den AVV nur einmal akzeptieren und das Datum dokumentieren.

**„Wie viele AVVs hat ein typisches KMU?"**
Erfahrungsgemäß zwischen 8 und 20. Sie wären überrascht, wie viele Dienstleister Sie haben.

**„Was, wenn ein Dienstleister keinen AVV anbietet?"**
Dann sollten Sie ihn **nicht nutzen**. Wenn das nicht geht (weil keine Alternative existiert), nutzen Sie unsere Mustervorlage und versuchen, ihn zur Unterschrift zu bewegen. Wenn er sich weigert, dokumentieren Sie das – und suchen mittelfristig einen Ersatz.

**„Ein US-Dienstleister – was ist mit Schrems II?"**
Bei US-Anbietern brauchen Sie zusätzlich die **Standardvertragsklauseln (SCCs)** und ein **Transfer Impact Assessment (TIA)**. Beides ist im Hugo DSB Professional-Tarif als Modul enthalten.

<div class="related-articles">

### Verwandte Artikel
- [VVT anlegen](/hugo-dsb/vvt-anlegen/)
- [TOMs dokumentieren](/hugo-dsb/toms-dokumentieren/)
- [Datenpanne melden](/hugo-dsb/datenpanne-melden/)

</div>

<div class="cta-banner">
  <h3>AVVs in 30 Minuten ordnen</h3>
  <p>Hugo DSB Professional 14 Tage gratis – mit AVV-Vorlagen für 50+ Dienstleister.</p>
  <a href="https://app.fraghugo.de/dsb/pricing" class="cta-button">14 Tage Pro testen →</a>
</div>
