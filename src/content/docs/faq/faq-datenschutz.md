---
title: "FAQ – Datenschutz & Sicherheit"
description: "Wo liegen Ihre Daten? Wer hat Zugriff? Ist frag.hugo selbst DSGVO-konform? Antworten auf die häufigsten Fragen zu Datenschutz und Sicherheit."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, DSB, IT-Leiter</span>
  <span><span class="label">Lesezeit:</span> 5 Minuten</span>
</div>

Wenn Sie ein Datenschutz-Tool nutzen, sollte das Tool selbst datenschutzkonform sein. Logisch. Diese Seite beantwortet alle Fragen, die uns Geschäftsführer und DSBs typischerweise vor dem ersten Login stellen.

## Wo liegen meine Daten?

**In Deutschland.** Alle Hugo-Produkte werden auf Servern von **Hetzner** (Standort: Falkenstein und Nürnberg) sowie unserer eigenen Supabase-Instanz (Standort: Hetzner Hamburg) betrieben. Es findet **kein Daten-Transfer in die USA** statt.

Konkret:
- **Hugo Check:** Server in Falkenstein, Backups in Nürnberg
- **Hugo DSB:** Server in Hamburg (eigene Supabase-Instanz)
- **Hugo Shield:** Server in Hamburg
- **Hugo Learn (Schulungen):** Server in Hamburg

## Wer hat Zugriff auf meine Daten?

**Nur Sie und die Personen, die Sie freischalten.** Niemand bei frag.hugo hat im Normalbetrieb Zugriff auf Ihre Inhalte. Wir können nur dann auf Ihre Daten zugreifen, wenn Sie uns für einen Support-Fall explizit Berechtigung geben (Audit-Log).

Ausnahmen:
- **Verschlüsselte Backups** – wir haben Zugriff auf die Backup-Files, aber nicht auf die Inhalte (Backups sind verschlüsselt)
- **Server-Logs** – wir sehen Zugriffsmuster, aber nicht die Inhalte
- **Notfallzugriff** – im Notfall (z. B. Ransomware-Verdacht) können wir mit zwei Mitarbeitern und Audit-Log temporär zugreifen

## Ist Hugo DSB selbst DSGVO-konform?

**Ja. Wir nutzen es selbst.** Frag.hugo dokumentiert alle eigenen Verarbeitungen in unserer eigenen Hugo DSB Instanz – inklusive AVVs mit unseren Dienstleistern, TOMs, Schulungen.

Zertifizierungen:
- **ISO 27001:** in Vorbereitung (geplant Q3 2026)
- **TISAX:** noch nicht relevant
- **C5:** noch nicht relevant für KMU
- **AVV mit allen Kunden:** Standard, automatisch beim Onboarding

## Welche Subprozessoren setzen Sie ein?

Eine vollständige Liste pflegen wir transparent:

| Dienstleister | Zweck | Standort |
|---|---|---|
| Hetzner | Hosting, Backups | DE (Falkenstein, Nürnberg) |
| Supabase (selbst gehostet) | Datenbank | DE (Hamburg) |
| Cloudflare | DNS, CDN, DDoS-Schutz | EU |
| Brevo (Sendinblue) | E-Mail-Versand | EU (Frankreich) |
| Stripe | Zahlungsabwicklung | EU |
| OpenAI / OpenRouter | KI-Analysen | EU-Endpoint, Daten-Verarbeitung in USA möglich |

> ⚠️ **Wichtig zu OpenAI:** Bei den KI-Features (Hugo Check) werden minimale Inhalte (HTML-Snippets, Texte) zur Analyse an OpenAI gesendet. Wir haben mit OpenAI einen DPA (Data Processing Agreement) und nutzen die EU-Region. Wenn Sie das nicht wollen, können Sie die KI-Features deaktivieren.

## Wie ist die Übertragung verschlüsselt?

- **Web-Zugriff:** TLS 1.2+ (wir nutzen TLS 1.3 wo möglich)
- **HSTS aktiv** mit Preloading
- **Datenbank-Verbindungen:** TLS-verschlüsselt
- **Backups:** AES-256 verschlüsselt
- **E-Mails:** SMTPS / STARTTLS

## Wie sind die Daten in der Datenbank gespeichert?

- **Passwörter:** mit bcrypt gehasht (kein Plaintext)
- **API-Keys:** verschlüsselt
- **Sensible Felder** (z. B. AVV-Inhalte, Kundennamen): in der Datenbank verschlüsselt
- **Anonyme Hinweise im Hinweisgeberschutz:** Pseudonymisiert, kein Klartext-Bezug zur Identität

## Wer bei frag.hugo kann was?

- **Entwickler:** Zugriff auf Test-Daten, kein Zugriff auf Kunden-Daten
- **Operations / Support:** Read-Zugriff auf Server-Logs, Notfallzugriff mit Audit-Log
- **Geschäftsführung:** Vollzugriff auf alle Server, im Audit-Log dokumentiert
- **Externe Dienstleister:** kein Zugriff (Hetzner, Cloudflare etc. sind Auftragsverarbeiter)

## Was passiert, wenn frag.hugo gehackt wird?

Wir hoffen, dass das nicht passiert. Aber für den Fall:

1. **Vorfall sofort feststellen** (24/7 Monitoring)
2. **Schaden begrenzen** (Systeme isolieren)
3. **Forensik** (Logs auswerten)
4. **Sie informieren** – innerhalb 72 Stunden, wenn Ihre Daten betroffen sind
5. **Behörde informieren** – wenn Pflicht
6. **Ursache beheben**
7. **Nachbericht an alle betroffenen Kunden**

Wir haben einen **Incident Response Plan** und üben den jährlich.

## Was passiert mit meinen Daten, wenn ich kündige?

- **Sie haben 30 Tage** nach Kündigung, um Ihre Daten zu exportieren
- Nach 30 Tagen werden alle Live-Daten **gelöscht**
- **Backups** verbleiben für maximal **90 Tage** und werden dann ebenfalls gelöscht
- Für **Audit-Zwecke** (z. B. Buchhaltung) speichern wir Rechnungen und Vertragsdaten 10 Jahre

Sie bekommen einen schriftlichen **Löschnachweis** auf Anfrage.

## Was passiert bei einer Insolvenz von frag.hugo?

Frag.hugo ist eine GmbH mit deutschem Sitz. Im Insolvenzfall:

- **Ihre Daten gehören Ihnen** – wir können sie nicht verkaufen
- **Insolvenzverwalter** würde gemäß DSGVO und HGB damit umgehen
- Wir würden alle Kunden **rechtzeitig informieren** und Migration unterstützen
- **Daten-Export** ist jederzeit möglich (siehe unten)

## Datenexport

Sie können Ihre Daten jederzeit exportieren – ohne Sonderwunsch, ohne Gebühren:

- **Hugo Check:** alle Scans + Reports als ZIP
- **Hugo DSB:** alle Module (VVT, AVV, TOMs, …) als JSON + PDF
- **Hugo Shield:** alle Assessments + Scores als CSV
- **Hugo Learn:** alle Schulungs-Daten + Zertifikate als ZIP

Im Account unter **Einstellungen → Datenexport**.

## Auftragsverarbeitungsvertrag (AVV)

Ein AVV nach Art. 28 DSGVO ist im Onboarding **automatisch enthalten**. Sie müssen ihn nur einmal bestätigen. Eine PDF-Version können Sie jederzeit herunterladen.

Wenn Sie einen **eigenen AVV-Vorlage** verwenden wollen, können wir das prüfen. Das funktioniert besonders bei Konzernen mit Standard-Templates.

## Standardvertragsklauseln (SCCs)

Da unsere Daten **in der EU** verarbeitet werden, sind keine SCCs notwendig. Ausnahme: KI-Features mit OpenAI – dort haben wir SCCs hinterlegt.

## Sicherheit für Ihre Mitarbeiter

Damit Ihre Mitarbeiter sicher mit Hugo arbeiten:

- **Sie können MFA für alle User aktivieren** (in den Account-Einstellungen)
- **Single Sign-On (SSO)** ist im Enterprise-Tarif verfügbar (SAML 2.0, OpenID Connect)
- **IP-Whitelisting** im Enterprise-Tarif
- **Login-Versuche** werden protokolliert und Sie können sie einsehen
- **Brute-Force-Schutz** verhindert automatisiertes Erraten

## FAQ kürzeste Antworten

**„Liegen die Daten in der EU?"** Ja, in Deutschland.
**„Wer kann auf meine Daten zugreifen?"** Nur Sie und Ihre eingeladenen Personen.
**„Sind Sie ISO-zertifiziert?"** ISO 27001 in Vorbereitung.
**„Was, wenn ich kündige?"** 30 Tage Export-Frist, dann Löschung.
**„Habe ich einen AVV?"** Ja, automatisch beim Onboarding.
**„Werden Daten an die USA übertragen?"** Nein, außer bei freiwillig nutzbaren KI-Features.

<div class="related-articles">

### Verwandte Artikel
- [FAQ Preise & Abrechnung](/faq/faq-preise/)
- [FAQ Technik](/faq/faq-technik/)
- [Account erstellen](/erste-schritte/account-erstellen/)

</div>

<div class="cta-banner">
  <h3>Detail-Frage zur Sicherheit?</h3>
  <p>15 Minuten mit Nils. Wir antworten auf jede technische Detail-Frage.</p>
  <a href="https://meet.brevo.com/fraghugo/intro" class="cta-button">Erstgespräch mit Nils →</a>
  <small style="display:block;margin-top:0.5rem;opacity:0.6;">Lieber erstmal schreiben? <a href="https://www.fraghugo.de/kontakt/#formular">Kontaktformular →</a></small>
</div>
