---
title: Hugo Phish — Zustellbarkeit einrichten
description: Simulations-Mails ausdrücklich erlauben, damit sie im Posteingang ankommen und nicht in der Quarantäne landen. Schritt für Schritt für Microsoft 365, Google Workspace und vorgelagerte Gateways.
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
erwischen Sie garantiert die richtige Domain, auch wenn wir sie einmal wechseln.

![Der Assistent „Zustellbarkeit einrichten“ in der Plattform: links die Warnung zur Quarantäne und die Schritt-für-Schritt-Anleitung je Umgebung, rechts das Feld, um eine Prüfmail an ein Postfach zu senden. Oben die Statusampel je Umgebung.](/screenshots/hugo-phish/zustellbarkeit.jpg)

:::note[Zwei Wege — Sie wählen]
Sie können die Freigabe **selbst** eintragen (diese Anleitung) oder uns die Werte geben und den
Schritt **von Ihrer IT** erledigen lassen. Beides führt zum selben Ziel: eine bestandene Prüfmail.
:::

## Microsoft 365 (Defender)

Microsoft hat für genau diesen Fall einen eigenen Bereich — die **erweiterte Zustellung**
(*Advanced Delivery*). Dort eingetragene Absender werden von der Filterung ausgenommen, **ohne** als
„sicher" markiert zu werden. Das ist wichtig: Ein Eintrag in der normalen Absender-Allowlist würde
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
   - **Sendende IP:** `116.203.38.76`.
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

## Google Workspace

**Admin-Konsole** ([admin.google.com](https://admin.google.com)) → *Apps → Google Workspace → Gmail*:

1. **Zugelassene Absender** (*Email Allowlist*, unter *Spam, Phishing und Malware*): die Sende-IP
   `116.203.38.76` eintragen.
2. **Spam** → neue Regel mit **„Absender-Domain überschreiben"** für Ihre Simulations-Domain; Option
   **„Interne Absender-Authentifizierung umgehen"** aktivieren.
3. Ist der **erweiterte Phishing- und Malware-Schutz** aktiv: dieselbe Domain dort ausnehmen.

Änderungen in Google Workspace brauchen erfahrungsgemäß bis zu einer Stunde, bis sie greifen.

## Vorgelagerte Gateways (Mimecast, Proofpoint, Hornetsecurity)

Sitzt vor Microsoft 365 oder Google ein eigenes Secure-E-Mail-Gateway, **filtert dieses zuerst** —
die Microsoft-/Google-Einstellung greift dann gar nicht mehr. Tragen Sie dieselben Werte deshalb
**auch dort** ein:

- **Absender-Domain** und **Sende-IP** `116.203.38.76` auf die **Permit-/Allowlist**.
- **URL-Rewriting / URL-Protection / ATP** (bei Mimecast *URL Protect*, bei Proofpoint *URL Defense*,
  bei Hornetsecurity die *Web-/Link-Prüfung*) für die **Landing-Domain deaktivieren** — sonst wird
  auch hier die URL maschinell geklickt.

## Prüfen — und wann es grün wird

Senden Sie im Cockpit eine **Prüfmail** an ein echtes Postfach der jeweiligen Umgebung.

- Kommt sie **im Posteingang** an, klicken Sie in der Mail auf **„Zustellung bestätigen"** → die
  Umgebung wird **grün**, und Übungen laufen an.
- Landet sie im **Spam** oder gar nicht: nacharbeiten (siehe Tabelle) und erneut prüfen.

Eine bestandene Prüfung gilt **90 Tage**. Danach fragt die Plattform erneut — Mailfilter ändern sich,
und eine ein Jahr alte Freigabe sagt nichts über heute.

## Wenn es trotzdem im Spam landet

| Beobachtung | Ursache | Was hilft |
|---|---|---|
| Mail kommt gar nicht an | Ein Gateway davor (Hornetsecurity, Mimecast, Proofpoint) filtert vorher | Dort dieselben Werte eintragen — die Microsoft-Einstellung greift erst danach |
| Mail im Junk-Ordner | Freigabe fehlt oder steht auf der falschen Domain | Absender-Domain prüfen: Sie steht im Kopf der Prüfmail |
| Links werden sofort „geklickt" | Sichere Links / URL-Rewriting ist aktiv | Domain von Safe Links / URL-Schutz ausnehmen |
| Nur einzelne Postfächer betroffen | persönliche Blockierliste der Person | Über das Postfach der Person entfernen |
| War grün, jetzt wieder rot | 90-Tage-Frist abgelaufen oder Filter geändert | Prüfmail erneut senden und bestätigen |

## Was wir tun — und was Sie tun

Wir richten die Sende-Domain ein, setzen SPF, DKIM und DMARC und prüfen die Zustellung, bevor etwas
rausgeht. Was wir **nicht** können, ist die Filterregeln in Ihrem Haus zu ändern — dieser eine
Schritt gehört zum Onboarding und ist mit dieser Anleitung in einer halben Stunde erledigt.
