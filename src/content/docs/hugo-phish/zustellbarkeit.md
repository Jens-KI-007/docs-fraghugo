---
title: Hugo Phish — Zustellbarkeit einrichten
description: Simulations-Mails ausdrücklich erlauben, damit sie im Posteingang ankommen und nicht in der Quarantäne landen. Schritt für Schritt für Microsoft 365, Exchange Server im eigenen Haus, Google Workspace und vorgelagerte Gateways.
---

Ohne diese einmalige Freigabe behandeln Sicherheitsfilter die Übungs-Mails wie echtes Phishing und
verschieben sie in die Quarantäne. Die Klickrate wäre dann 0 % — und Sie hielten Ihre Belegschaft
fälschlich für vorbildlich. Eine Übungs-Mail im Spam misst Ihren Filter, nicht Ihre Leute.

Deshalb gilt in der Plattform: **Solange die Zustellung nicht bestätigt ist, wird keine Übung
versendet.** Die Kampagne bleibt stehen und wartet. Das sieht aus wie Stillstand, ist aber der
Schutz davor, eine ganze Übung in den Papierkorb zu schicken.

Rechnen Sie mit **rund einer halben Stunde** einmalig. Danach prüft die Plattform automatisch nach.

## Die Werte holen Sie sich hier

Die konkreten Angaben — **Absender-Domain**, **Sende-IP** und die **Simulations-URL** — hängen an der
Domain, die Ihrem Konto zugewiesen ist, und stehen zum Kopieren im Cockpit unter
**Simulation → Zustellung prüfen**. Nehmen Sie die Werte von dort, nicht aus dieser Anleitung — so
erwischen Sie immer die richtige Domain, auch wenn wir sie einmal wechseln.

![Der Assistent „Zustellbarkeit einrichten“ in der Plattform: links die Warnung zur Quarantäne und die Schritt-für-Schritt-Anleitung je Umgebung, rechts das Feld, um eine Prüfmail an ein Postfach zu senden. Oben die Statusampel je Umgebung.](/screenshots/hugo-phish/zustellbarkeit.jpg)

:::tip[Der schnelle Weg: ein Klick]
Für **Microsoft 365** gibt es in der Plattform (unter *Simulation → Zustellung prüfen*, Reiter
Microsoft 365) den Knopf **„In Microsoft 365 freischalten“**. Ihr Administrator meldet sich einmalig
bei Microsoft an und bestätigt — die Freigabe wird dann automatisch eingetragen. Wir speichern
**keinen** dauerhaften Zugang, und bestehende Einträge bleiben unangetastet. Wer die Rechte lieber
nicht erteilt oder ein anderes Mailsystem nutzt, trägt die Werte von Hand ein — diese Anleitung
zeigt wie.
:::

## Microsoft 365 (Defender)

Microsoft hat für genau diesen Fall einen eigenen Bereich — die **erweiterte Zustellung**
(*Advanced Delivery*). Dort eingetragene Absender werden von der Filterung ausgenommen, **ohne** als
„sicher“ markiert zu werden. Das ist wichtig: Ein Eintrag in der normalen Absender-Allowlist würde
dazu führen, dass gemeldete Übungs-Mails nicht mehr sauber im Meldeprozess auftauchen — die
erweiterte Zustellung hat dieses Problem nicht.

1. **Microsoft Defender Portal** öffnen: [security.microsoft.com](https://security.microsoft.com).
   Sie brauchen die Rolle *Sicherheitsadministrator* oder *Organisationsverwaltung*.
2. Links im Menü **E-Mail & Zusammenarbeit → Richtlinien & Regeln → Bedrohungsrichtlinien**
   (englisch: *Email & collaboration → Policies & rules → Threat policies*).
3. Unter *Regeln* auf **Erweiterte Zustellung** (*Advanced delivery*).
4. Reiter **Phishingsimulation** (*Phishing simulation*) wählen → **Hinzufügen** (oder *Bearbeiten*,
   falls schon ein Eintrag besteht).
5. Eintragen — die Werte stehen im Cockpit:
   - **Domain:** die Absender-Domain(en) Ihres Kontos (dazu ggf. die genannten Ausweich-Adressen).
   - **Sendende IP:** `195.201.6.146`.
   - **Simulations-URLs:** das URL-Muster der Landing-Seite (z. B. `ihre-domain.de/*`).
6. **Speichern.** Die Regel ist nach **bis zu einer Stunde** aktiv.
7. **Safe Links und Safe Attachments für dieselbe Domain ausnehmen** (siehe unten) — sonst klickt der
   Filter die Links selbst an.

:::caution[Safe Links / Safe Attachments getrennt ausnehmen]
Ist der Schutz *Sichere Links* aktiv, ruft Microsoft jede URL vorab selbst auf — in der Auswertung
erscheinen dann Klicks, die kein Mensch gemacht hat. Nehmen Sie die Simulations-Domain in Ihrer
**Safe-Links-** und **Safe-Attachments-Richtlinie** aus (*Bedrohungsrichtlinien → Sichere Links* bzw.
*Sichere Anlagen → Richtlinie bearbeiten → Ausschluss*). Die Plattform erkennt maschinelle Klicks und
rechnet sie heraus — sauber ist die Messung aber nur, wenn der Scanner gar nicht erst klickt.
:::

## Exchange Server im eigenen Haus

Für einen Exchange Server, den Sie selbst betreiben (2016, 2019 oder Subscription Edition), gibt es
weder die erweiterte Zustellung noch die Ein-Klick-Freischaltung. Der Weg ist eine
**Nachrichtenflussregel**, die Mails von unserer Sende-IP **und** einer unserer Absender-Domains am
Spamfilter vorbeiführt. In der Plattform steht dafür unter *Simulation → Zustellung prüfen*, Reiter
**Exchange Server (lokal)**, ein fertiger Befehl mit Ihren Werten zum Kopieren.

**Im Exchange Admin Center** (`https://<Ihr-Exchange-Server>/ecp`):

1. *Nachrichtenfluss → Regeln → „+“ → Neue Regel erstellen… → Weitere Optionen…*
2. Bedingung: *Der Absender … → IP-Adresse liegt in einem dieser Bereiche* = `195.201.6.146`.
3. Zweite Bedingung: *Der Absender … → Domäne ist* = die Absender-Domain(s) aus dem Cockpit.
4. Aktion: *Nachrichteneigenschaften ändern → SCL (Spam Confidence Level) festlegen → Spamfilter umgehen*.
5. Regel ganz nach oben setzen und speichern.

**Oder in der Exchange-Verwaltungsshell** (Domains aus dem Cockpit einsetzen):

```powershell
New-TransportRule -Name "frag.hugo Phishing-Simulation" -Priority 0 `
  -SenderIpRanges 195.201.6.146 `
  -SenderDomainIs "ihre-absender-domain.de" `
  -SetSCL -1 `
  -SetHeaderName "X-MS-Exchange-Organization-BypassClutter" -SetHeaderValue "true"
```

Zurücknehmen lässt sich das jederzeit mit `Remove-TransportRule "frag.hugo Phishing-Simulation"`.

:::caution[Gateway oder Spamfilter vor dem Exchange]
Steht ein Edge-Transport-Server, ein Spamfilter oder ein Mail-Gateway davor (z. B. NoSpamProxy,
Sophos, Hornetsecurity), filtert dieses **zuerst**: Sende-IP und Absender-Domains dort ebenfalls
zulassen, Link-Prüfung für die Simulations-URLs abschalten. Sieht der Exchange nur die Adresse des
Gateways, greift die IP-Bedingung nicht — dann in der Regel nur die Domains als Bedingung nehmen.
:::

**Meldungen:** Der Outlook-Meldeknopf läuft mit einem lokalen Exchange nicht (siehe
[Meldebutton](/hugo-phish/meldebutton/)). Meldungen fließen stattdessen über das **Melde-Postfach**
automatisch in die Auswertung: Beschäftigte leiten verdächtige Mails an ein Postfach wie
`phishing@ihre-firma.de` weiter — am besten *als Anlage*, dann ist die Zuordnung eindeutig; beim
gewöhnlichen Weiterleiten ordnet Hugo über Absender und Betreff zu. Hugo ruft das Postfach alle
15 Minuten per IMAP ab. Dafür braucht es:

- ein eigenes Postfach mit Kennwort,
- die gestarteten Dienste „Microsoft Exchange IMAP4“ und „Microsoft Exchange IMAP4-Back-End“
  (ab Werk aus),
- ein gültiges, nicht selbstsigniertes Zertifikat für IMAP,
- Port 993, erreichbar von unserer Abruf-Adresse `195.201.6.146`.

## Google Workspace

**Admin-Konsole** ([admin.google.com](https://admin.google.com)) → *Apps → Google Workspace → Gmail*:

1. **Zugelassene Absender** (*Email Allowlist*, unter *Spam, Phishing und Malware*): die Sende-IP
   `195.201.6.146` eintragen.
2. **Spam** → neue Regel mit **„Absender-Domain überschreiben“** für Ihre Simulations-Domain; Option
   **„Interne Absender-Authentifizierung umgehen“** aktivieren.
3. Ist der **erweiterte Phishing- und Malware-Schutz** aktiv: dieselbe Domain dort ausnehmen.

Änderungen in Google Workspace brauchen erfahrungsgemäß bis zu einer Stunde, bis sie greifen.

## Vorgelagerte Gateways (Mimecast, Proofpoint, Hornetsecurity)

Sitzt vor Microsoft 365 oder Google ein eigenes Secure-E-Mail-Gateway, **filtert dieses zuerst** —
die Microsoft-/Google-Einstellung greift dann gar nicht mehr. Tragen Sie dieselben Werte deshalb
**auch dort** ein:

- **Absender-Domain** und **Sende-IP** `195.201.6.146` auf die **Permit-/Allowlist**.
- **URL-Rewriting / URL-Protection / ATP** (bei Mimecast *URL Protect*, bei Proofpoint *URL Defense*,
  bei Hornetsecurity die *Web-/Link-Prüfung*) für die **Landing-Domain deaktivieren** — sonst wird
  auch hier die URL maschinell geklickt.

## Prüfen — und wann es grün wird

Senden Sie im Cockpit eine **Prüfmail** an ein echtes Postfach der jeweiligen Umgebung.

- Kommt sie **im Posteingang** an, klicken Sie in der Mail auf **„Zustellung bestätigen“** → die
  Umgebung wird **grün**, und Übungen laufen an.
- Landet sie im **Spam** oder gar nicht: nacharbeiten (siehe Tabelle) und erneut prüfen.

Eine bestandene Prüfung gilt **90 Tage**. Danach fragt die Plattform erneut — Mailfilter ändern sich,
und eine ein Jahr alte Freigabe sagt nichts über heute.

## Wenn es trotzdem im Spam landet

| Beobachtung | Ursache | Was hilft |
|---|---|---|
| Mail kommt gar nicht an | Ein Gateway davor (Hornetsecurity, Mimecast, Proofpoint) filtert vorher | Dort dieselben Werte eintragen — die Microsoft-Einstellung greift erst danach |
| Exchange im Haus: Mail im Junk-Ordner trotz Regel | Regel greift nicht, weil der Exchange nur die Gateway-Adresse sieht, oder sie steht nicht ganz oben | Regel nach oben setzen; IP-Bedingung durch Domain-Bedingung ersetzen und am Gateway freigeben |
| Mail im Junk-Ordner | Freigabe fehlt oder steht auf der falschen Domain | Absender-Domain prüfen: Sie steht im Kopf der Prüfmail |
| Links werden sofort „geklickt“ | Sichere Links / URL-Rewriting ist aktiv | Domain von Safe Links / URL-Schutz ausnehmen |
| Nur einzelne Postfächer betroffen | persönliche Blockierliste der Person | Über das Postfach der Person entfernen |
| War grün, jetzt wieder rot | 90-Tage-Frist abgelaufen oder Filter geändert | Prüfmail erneut senden und bestätigen |

## Was wir tun — und was Sie tun

Wir richten die Sende-Domain ein, setzen SPF, DKIM und DMARC und prüfen die Zustellung, bevor etwas
rausgeht. Was wir **nicht** können, ist die Filterregeln in Ihrem Haus zu ändern — dieser eine
Schritt gehört zum Onboarding und ist mit dieser Anleitung in einer halben Stunde erledigt.
