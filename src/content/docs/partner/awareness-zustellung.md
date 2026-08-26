---
title: Zustellung sicherstellen
description: Allowlisting in Microsoft 365 und Google Workspace, Prüfmail und was zu tun ist, wenn Übungs-Mails im Spam landen.
---

Das ist die häufigste Startschwierigkeit — und der einzige Punkt, an dem ein
Awareness-Projekt regelmäßig scheitert. Eine Übungs-Mail, die im Spam landet, misst den
Spamfilter, nicht die Belegschaft.

Deshalb gilt in der Plattform: **Ohne bestandene Zustellprüfung wird keine Übungs-Mail
versendet.** Die Übung bleibt stehen und wartet. Das sieht aus wie ein Stillstand, ist aber der
Schutz davor, eine ganze Kampagne in den Papierkorb zu schicken.

## Der Ablauf

1. Im Kundenkonto unter **Simulation → Zustellung** eine Prüfmail an eine echte Adresse des
   Kunden schicken.
2. Kommt sie im Posteingang an: Prüfung bestanden, die Übungen laufen an.
3. Landet sie im Spam oder gar nicht: allowlisten und erneut prüfen.

Eine bestandene Prüfung gilt **90 Tage**. Danach fragt die Plattform erneut — Mailfilter ändern
sich, und eine ein Jahr alte Freigabe sagt nichts über heute.

## Microsoft 365

Im **Microsoft Defender Portal** → *Richtlinien & Regeln* → *Bedrohungsrichtlinien* →
**Erweiterte Zustellung** (englisch: *Advanced Delivery*) gibt es einen eigenen Bereich für
**Phishing-Simulationen von Drittanbietern**. Genau dorthin gehören unsere Werte — **nicht** in
die normale Absender-Allowlist.

Der Unterschied ist wichtig: Die erweiterte Zustellung nimmt die Mails von der Filterung aus,
ohne sie als „sicher" zu markieren. Ein Eintrag in der normalen Allowlist würde dagegen dazu
führen, dass gemeldete Übungs-Mails nicht mehr im Meldeprozess auftauchen.

Einzutragen sind: die **Absender-Domain**, die **absendenden IP-Adressen** und die
**Landing-URL** der Übung. Alle drei Werte nennen wir Ihnen je Kunde — sie hängen an der
Sende-Domain, die dem Kunden zugewiesen ist.

Zusätzlich ausnehmen: **Sichere Links** und **Sichere Anlagen** für dieselbe Domain. Sonst
klickt der Filter die Links selbst an, und in der Auswertung erscheinen Klicks, die niemand
gemacht hat. (Die Plattform erkennt maschinelle Klicks und rechnet sie heraus — aber sauber ist
es nur, wenn der Scanner gar nicht erst klickt.)

## Google Workspace

**Admin-Konsole** → *Apps* → *Google Workspace* → *Gmail*:

* **Zugelassene Absender** (*Email Allowlist*): die absendenden IP-Adressen eintragen.
* **Spam** → Regel mit „Absender-Domain überschreiben" für die Sende-Domain, Option
  *Interne Absender-Authentifizierung umgehen* aktivieren.
* Bei aktiver **erweiterter Phishing-Schutz-Prüfung**: dieselbe Domain ausnehmen.

## Wenn es trotzdem im Spam landet

| Beobachtung | Ursache | Was hilft |
|---|---|---|
| Mail kommt gar nicht an | Gateway davor (Hornetsecurity, Mimecast, Proofpoint) filtert vorher | Dort dieselben Werte eintragen — die Microsoft-Einstellung greift erst danach |
| Mail im Junk-Ordner | Allowlist fehlt oder ist auf die falsche Domain gesetzt | Absender-Domain prüfen: Sie steht in der Prüfmail im Kopf |
| Links werden sofort „geklickt" | Sichere Links / URL-Rewriting ist aktiv | Domain von Safe Links ausnehmen |
| Nur einzelne Postfächer betroffen | persönliche Blockierliste der Person | Über das Postfach der Person entfernen |

## Was wir nicht zusichern

Wir richten die Sende-Domain ein, setzen SPF, DKIM und DMARC und prüfen die Zustellung, bevor
etwas rausgeht. Was wir nicht können, ist die Filterregeln im Haus Ihres Kunden zu ändern —
dieser Schritt gehört zum Onboarding und dauert erfahrungsgemäß eine halbe Stunde.
