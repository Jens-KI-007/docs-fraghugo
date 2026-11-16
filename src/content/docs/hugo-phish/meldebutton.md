---
title: Hugo Phish — Meldebutton (Outlook / Google)
description: Ein-Klick-Meldung im Postfach ausrollen — erkennt Simulationen automatisch, leitet echte Verdachtsmails an die IT weiter.
---

Der Meldebutton bringt das Melden dorthin, wo die Mail ankommt: ins Postfach. Er erkennt
Simulationen automatisch (und wertet sie als Meldung) und leitet **echte** verdächtige Mails an die
IT-Sicherheit weiter.

## Microsoft 365 / Outlook — zentral ausrollen

:::note[Nur mit Microsoft 365 (Exchange Online)]
Mit einem **Exchange Server im eigenen Haus** (2016, 2019, Subscription Edition) lädt Outlook den
Knopf nicht: Microsoft lässt dort nur ältere Add-in-Versionen zu, der Knopf braucht eine neuere.
Nutzen Sie in diesem Fall das **Melde-Postfach** — Meldungen fließen darüber genauso automatisch in die
Auswertung (siehe [Zustellbarkeit → Exchange Server im eigenen Haus](/hugo-phish/zustellbarkeit/#exchange-server-im-eigenen-haus)).
:::

1. Microsoft 365 Admin Center öffnen → *Einstellungen → Integrierte Apps*.
2. *Benutzerdefinierte App hochladen* → *Manifestdatei (.xml)*.
3. Manifest-URL angeben: `https://app.fraghugo.de/phish-addin/manifest.xml`
   (oder die Datei herunterladen und hochladen).
4. Zuweisung wählen (ganze Organisation oder bestimmte Gruppen) und bereitstellen.
5. Nach kurzer Verteilzeit erscheint in Outlook (Desktop, Web, Mac) der Button **„Phishing melden“**.

## Google Workspace
Ein gleichwertiges Add-on steht auf Anfrage bereit; die Meldung läuft über denselben Endpoint.

## Ohne Add-in: Melde-Postfach
Alternativ können Mitarbeiter verdächtige Mails an ein eingerichtetes Melde-Postfach weiterleiten —
die Zuordnung erfolgt automatisch über die Simulations-Kennung.

## Was gemeldet wird
- **Simulation:** wird als Meldung gewertet, der Mitarbeiter erhält Punkte, die Melderate steigt.
- **Echte Verdachtsmail:** wird an die hinterlegte Sicherheitsadresse Ihres Unternehmens
  weitergeleitet und im Cockpit vermerkt.
