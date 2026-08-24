---
title: Hugo Phish — Zustellbarkeit einrichten
description: Allowlisting je E-Mail-Umgebung, damit Simulations-Mails ankommen und nicht in der Quarantäne landen.
---

Ohne Allowlisting behandeln Sicherheitsfilter die Simulations-Mails wie echtes Phishing und
verschieben sie in die Quarantäne. Die Klickrate wäre dann 0 % — und Sie hielten Ihre Belegschaft
fälschlich für vorbildlich. Deshalb startet **keine Kampagne, bevor die Zustellung bestätigt ist**.

Im Cockpit unter *Zustellung prüfen* finden Sie die konkreten Werte (Absender-Domains, Sende-IP,
URL-Muster) zum Kopieren. Tragen Sie sie in Ihrer Umgebung ein:

## Microsoft 365 (Defender)
1. Microsoft Defender Portal öffnen (`security.microsoft.com`).
2. *E-Mail & Zusammenarbeit → Richtlinien & Regeln → Bedrohungsrichtlinien → Erweiterte Zustellung*.
3. Reiter **Phishingsimulation** → Eintrag hinzufügen.
4. Sendedomänen, Sende-IP und Simulations-URLs (`domain.de/*`) eintragen. Speichern — nach bis zu
   einer Stunde aktiv.

## Google Workspace
1. Admin-Konsole → *Apps → Google Workspace → Gmail → Spam, Phishing und Malware*.
2. Sende-IP zur E-Mail-Zulassungsliste hinzufügen; Inhaltscompliance-Regel für die Absenderdomains.

## Mimecast / Proofpoint / Hornetsecurity
Absenderdomains und Sende-IP auf die Permit-/Allowlist; URL-Rewriting/ATP für die Landing-Domains
deaktivieren. Details je Anbieter im Cockpit.

## Prüfen
Senden Sie eine **Prüfmail** an ein Postfach der jeweiligen Umgebung. Kommt sie im Posteingang an und
Sie bestätigen sie, wird die Umgebung **grün**. Erst dann sind Kampagnen startbar. Wir prüfen die
Zustellung monatlich automatisch nach.
