---
title: "TOMs-Vorlage — 14 Bereiche mit je 5 Maßnahmen"
description: "Technisch-organisatorische Maßnahmen nach Art. 32 DSGVO. 14 Bereiche, 70 konkrete Maßnahmen, mit Status-Bewertung und Audit-Trail. Direkt einsetzbar."
---

Die TOMs-Dokumentation ist Pflicht (Art. 32 DSGVO + § 64 BDSG) — und sie ist eines der ersten Dokumente, die jede Aufsichtsbehörde sehen will. Mit dieser Vorlage liefern Sie eine **Audit-feste Dokumentation** über 14 Bereiche, die alle gängigen Prüfraster (BSI Grundschutz, ISO 27001 Anhang A, EU-DSGVO) abdecken.

## Was ist enthalten?

- **14 Bereiche × 5 Maßnahmen = 70 konkrete TOMs**
- Pro Maßnahme: Beschreibung, Verantwortlicher, Status (umgesetzt / in Umsetzung / geplant / nicht relevant), Wirksamkeitsprüfung, Datum letzte Prüfung
- **Cross-Mapping** zu BSI Grundschutz-Bausteinen + ISO 27001 Annex A
- **Word-Vorlage** für die DSB-Akte + **Excel-Tracker** für laufende Statusprüfung
- **3 Reife-Stufen** (Basis / Mittel / Hoch) — passend zur Risikobewertung Ihrer Verarbeitungstätigkeiten

## Die 14 Bereiche

| # | Bereich | Beispiel-Maßnahmen |
|---|---------|---------------------|
| 1 | Zutrittskontrolle | Schließanlage, Besucher-Logbuch, Videoüberwachung |
| 2 | Zugangskontrolle | MFA, Passwort-Policy, Account-Lifecycle |
| 3 | Zugriffskontrolle | RBAC, Need-to-know-Prinzip, Audit-Logs |
| 4 | Trennungskontrolle | Mandantentrennung, Test-/Prod-Trennung, DB-Schemata |
| 5 | Pseudonymisierung & Anonymisierung | Hashing, Tokenisierung, K-Anonymität |
| 6 | Verschlüsselung | TLS 1.3, AES-256 at-rest, Key-Management |
| 7 | Vertraulichkeit | NDA, Verpflichtung auf Datengeheimnis, Clean-Desk |
| 8 | Integrität | Hash-Verifikation, Signatur, Eingabevalidierung |
| 9 | Verfügbarkeit | Backup 3-2-1, Redundanz, RTO/RPO definiert |
| 10 | Belastbarkeit | DDoS-Schutz, Skalierung, Penetration Tests |
| 11 | Wiederherstellbarkeit | Restore-Tests quartalsweise, Notfall-Doku |
| 12 | Auftragskontrolle | AVV-Verzeichnis, Subprozessoren-Audit |
| 13 | Datenschutz-Management | DSB benannt, VVT, DSFA, Schulungen |
| 14 | Incident Response | 72-h-Meldeprozess, CIRT-Team, Forensik-Bereitschaft |

## Auszug: Die 5 Maßnahmen für Bereich 2 — Zugangskontrolle

1. **Multi-Faktor-Authentifizierung** (TOTP, WebAuthn, FIDO2) für alle privilegierten Konten — verpflichtend, sonst Login gesperrt
2. **Passwort-Policy** mindestens 14 Zeichen, ohne Wechselzwang (BSI 2025) — durchgesetzt durch Identity-Provider
3. **Account-Lifecycle**: Onboarding → Active → Inactive (90 Tage ohne Login) → Deaktivierung → Löschung (1 Jahr)
4. **Privileged Access Management**: separate Admin-Accounts, JIT-Erhöhung, Session-Recording
5. **Single-Sign-On** für alle SaaS-Tools — ein zentraler Audit-Trail, ein Off-Boarding-Prozess

## TOMs-Vorlage anfordern

<form action="https://www.fraghugo.de/api/lead-capture" method="POST" class="lead-magnet-form">
  <input type="hidden" name="magnet" value="toms-vorlage" />
  <input type="hidden" name="source" value="docs.fraghugo.de/lead-magnete/toms-vorlage" />
  <label>
    <span>Ihre E-Mail-Adresse</span>
    <input type="email" name="email" required placeholder="ihre@email.de" autocomplete="email" />
  </label>
  <label class="consent">
    <input type="checkbox" name="consent" required />
    <span>Ich akzeptiere die <a href="https://www.fraghugo.de/datenschutzerklaerung/">Datenschutzhinweise</a>. Abmeldung jederzeit.</span>
  </label>
  <button type="submit">TOMs-Vorlage per E-Mail anfordern</button>
</form>

## Wozu die drei Reife-Stufen?

Nicht jede Verarbeitungstätigkeit braucht „Hochsicherheit". Wer beispielsweise ausschließlich öffentlich zugängliche Marketing-Inhalte verarbeitet, braucht keine Pseudonymisierung. Die Vorlage zeigt für jede Maßnahme: Was ist Pflicht (Basis), was steigert die Reife (Mittel), was ist State-of-the-Art (Hoch). So entsteht keine Über-Dokumentation, sondern eine Risiko-angemessene TOMs-Doku — genau wie Art. 32 I DSGVO es fordert.

## Verwandte Anleitungen

- [TOMs dokumentieren](/hugo-dsb/toms-dokumentieren/)
- [Risiko-Matrix nach BSI 200-3](/isms/risiko-matrix/)
- [Asset-Register](/isms/asset-register/)
