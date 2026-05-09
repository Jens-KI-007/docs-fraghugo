---
title: "AVV-Pack — Mustervertrag + 5 Provider-Vorlagen"
description: "AVV-Mustervertrag nach Art. 28 DSGVO + ausgefüllte Vorlagen für die 5 häufigsten Auftragsverarbeiter (Microsoft 365, Google Workspace, AWS, DATEV, HubSpot). Sofort einsetzbar."
---

Wer einen Cloud-Service nutzt, braucht einen Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO. Die meisten Anbieter haben eigene Standard-AVVs, die mal mehr, mal weniger DSGVO-konform sind. Mit unserem AVV-Pack haben Sie einen **eigenen Mustervertrag** für alle Provider, die keinen sauberen AVV anbieten — plus geprüfte Anpassungen für die fünf häufigsten Anbieter.

## Was ist enthalten?

- **AVV-Mustervertrag DE** (24 Seiten) — vollständig nach Art. 28 III, mit allen Pflichtinhalten plus Subprozessoren-Liste, TIA-Block und Audit-Recht
- **5 Anbieter-Pakete** mit fertig ausgefüllten Anpassungen, Subprozessoren-Listen, Audit-Berichten und SCC-Status:
  1. Microsoft 365 (Business Standard / E3 / E5)
  2. Google Workspace (Business Standard / Plus / Enterprise)
  3. AWS (mit DPA + EU Data Boundary)
  4. DATEV (DUO + Cloud-Lösungen)
  5. HubSpot (Marketing Hub / CRM)
- **TIA-Vorlage** (Transfer Impact Assessment) für US-/Drittländer-Transfers
- **Subprozessoren-Audit-Checkliste** (15 Prüfpunkte)
- **Eskalations-Vorlage** für nicht-kooperative Anbieter

## Auszug: Die 5 Provider-Pakete

### 1. Microsoft 365

- DPA-Version: **Microsoft Products and Services DPA**, derzeit Stand März 2026
- **EU Data Boundary** seit Q1/2025 produktiv für die meisten Workloads — TIA-Status: „nahezu kein Drittland-Transfer"
- Subprozessoren-Liste: 80+, dokumentiert unter `https://aka.ms/Subprocessors`
- Audit-Berichte: SOC 1/2 Typ 2, ISO 27001, BSI C5 (DE)
- Achtung: **Copilot for M365** hat eigene Datenflüsse — separater Beipack im Magnet

### 2. Google Workspace

- DPA-Version: **Cloud Data Processing Addendum**, Stand Februar 2026
- Datenstandort: konfigurierbar auf EU
- TIA-Status: Drittland-Transfer USA, mitigiert durch SCCs + Verschlüsselung
- Achtung: Google Analytics 4 ist **kein Workspace-Bestandteil** und braucht eigenen AVV

### 3. AWS

- DPA-Version: **AWS GDPR Data Processing Addendum**, plus **AWS Service Terms**
- EU Data Boundary 2024 angekündigt — Status im Magnet
- TIA: pflicht für jeden Service einzeln (RDS, S3, Lambda jeweils separat)
- Achtung: bei eigenen Anwendungen sind Sie **gleichzeitig Verantwortlicher und Verarbeiter** — Stack genau dokumentieren

### 4. DATEV

- AVV ist **Standard-Bestandteil** der DATEV-Cloud-Verträge, kein separates Dokument nötig
- Datenstandort: ausschließlich Deutschland (Nürnberg)
- TIA: nicht erforderlich (kein Drittland)
- Achtung: bei DATEV Unternehmen Online ist die **Steuerkanzlei** Verantwortlicher, nicht Sie

### 5. HubSpot

- DPA-Version: **HubSpot Data Processing Agreement**
- Datenstandort: EU-Region wählbar (Frankfurt)
- TIA: pflicht — HubSpot ist US-Konzern, auch bei EU-Hosting
- Achtung: **Sales-Tools** (Calling, Recording) lösen oft DSFA-Pflicht aus

## AVV-Pack anfordern

<form action="https://www.fraghugo.de/api/lead-capture" method="POST" class="lead-magnet-form">
  <input type="hidden" name="magnet" value="avv-pruefung" />
  <input type="hidden" name="source" value="docs.fraghugo.de/lead-magnete/avv-pack" />
  <label>
    <span>Ihre E-Mail-Adresse</span>
    <input type="email" name="email" required placeholder="ihre@email.de" autocomplete="email" />
  </label>
  <label class="consent">
    <input type="checkbox" name="consent" required />
    <span>Ich akzeptiere die <a href="https://www.fraghugo.de/datenschutzerklaerung/">Datenschutzhinweise</a>. Abmeldung jederzeit.</span>
  </label>
  <button type="submit">AVV-Pack per E-Mail anfordern</button>
</form>

## Verwandte Anleitungen

- [AVV erstellen](/hugo-dsb/avv-erstellen/)
- [VVT anlegen](/hugo-dsb/vvt-anlegen/)
- [TOMs dokumentieren](/hugo-dsb/toms-dokumentieren/)
