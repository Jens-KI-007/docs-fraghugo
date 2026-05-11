---
title: Auftragsverarbeiter (AVV)
description: Externe Dienstleister mit Datenzugriff — Art. 28 DSGVO. Mit Hugos KI-Bewertung pro Anbieter.
---

![Auftragsverarbeiter-Übersicht](/screenshots/datenschutz/avv.png)

Jeder externe Dienst, der personenbezogene Daten in deinem Auftrag verarbeitet (Cloud-Software, Newsletter-Versender, Buchhaltungsbüro), braucht einen **Auftragsverarbeitungsvertrag** nach Art. 28 DSGVO. Hier verwaltest du sie.

## Was du hier machst

### Neuer Auftragsverarbeiter

Klick "Neu". Du gibst Name, Webseite, Zweck ein. Hugo macht:

- **DPA-Check** — sucht automatisch den AVV-Vertrag des Anbieters (Microsoft, Google, AWS, HubSpot, Slack haben standardisierte Verträge im Netz).
- **Drittland-Bewertung** — Hauptsitz, Server-Standort, Standard-Vertragsklauseln (SCC), Angemessenheitsbeschluss.
- **Risiko-Ampel** — Grün / Gelb / Rot mit Begründung.
- **TOMs-Check** — was hat der Anbieter zertifiziert (ISO 27001, SOC 2, BSI C5)?

### Vertrag hochladen

Du kannst den unterschriebenen AVV als PDF hochladen. Erscheint in der Detailansicht, bei Audit ist alles parat.

### Status

- **Vertrag fehlt** — du musst noch einen abschließen.
- **Vertrag prüfen** — abgeschlossen aber Hugo hat Auffälligkeiten gefunden.
- **OK** — alles unterschrieben, geprüft.

### Mit VVT verknüpfen

Jeder AVV-Eintrag kann auf die Verarbeitungen verlinken, in denen er eingesetzt wird (z.B. "Microsoft 365" → "Mitarbeiter-Kommunikation" + "Kalender" + "Cloud-Speicher"). Bei AVV-Wechsel siehst du sofort, welche Verarbeitungen betroffen sind.

### Export

- **Liste aller AVV** als PDF/Excel — zur Behörden-Vorlage.
- **Lücken-Report** — alle AVV ohne Vertrag oder mit kritischen Punkten.

## Typische Auftragsverarbeiter, die jeder hat

- Microsoft 365 / Google Workspace
- Cloud-Backup (Dropbox, OneDrive, AWS S3)
- Newsletter (Brevo, Mailchimp, Resend)
- Buchhaltung (DATEV-Beraterzugang, lexoffice)
- CRM (HubSpot, Salesforce, Pipedrive)
- Steuerberater (auch er ist AVV!)
- Externer IT-Dienstleister
- Webhosting

## Tipps

- **Wer nicht?** — Eigene Mitarbeiter sind nie AVV (interne Verarbeitung). Versicherer/Banken sind keine AVV sondern eigene Verantwortliche.
- **Standardvertrag**: Hugo bietet einen mustergültigen AVV-Vertrag zum Herunterladen, den du Anbietern schicken kannst falls sie keinen eigenen haben.
