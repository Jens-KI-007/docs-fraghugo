---
title: Portal für Datenschutz-Anfragen
description: Öffentliches Formular für Betroffenenanfragen. Per Link, Iframe oder Skript auf Ihrer Website, ohne DNS-Eintrag.
---

Statt einer Mailadresse, an der alle möglichen Anliegen landen, schicken Sie Betroffene auf ein **strukturiertes Formular**. Die Person wählt, was sie möchte (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit oder Widerspruch), und die Anfrage kommt vollständig bei Ihnen an.

Sie erreichen die Einstellungen über **Betroffenenanfragen** und dort die Kachel **Portal für Datenschutz-Anfragen**.

## Einrichten

1. **Portal aktivieren.**
2. **Adresse festlegen:** Ihr Portal liegt unter `https://app.fraghugo.de/m/<ihre-adresse>`. Erlaubt sind Kleinbuchstaben, Ziffern und Bindestriche.
3. **Auftritt:** Firmenname, Logo (PNG, JPG, SVG oder WebP, bis 2 MB) und Akzentfarbe.
4. **Links zu Datenschutzerklärung und Impressum:** Das Portal zeigt sie unter dem Formular.
5. **Benachrichtigung:** eine oder mehrere E-Mail-Adressen, die bei jeder neuen Anfrage Bescheid bekommen.
6. **Speichern.**

Eine eigene Subdomain (CNAME) gibt es nicht und ist auch nicht nötig.

## Auf Ihrer Website einbinden

![Drei Code-Varianten zum Kopieren: Link, Iframe und Skript](/screenshots/vorfaelle/public-portal-einbinden.png)

Sobald das Portal aktiv ist, zeigt die Seite drei Varianten mit Ihrer Adresse. **kopieren** legt den Code in die Zwischenablage.

- **A: Link.** Für Datenschutzerklärung, Footer und Kontaktseite. Der einfachste Weg.
- **B: Iframe mit fester Höhe.** Das Formular steht direkt auf Ihrer Seite. Für Baukästen, die keine Skripte erlauben.
- **C: Skript (empfohlen).** Setzt das Iframe ein und passt seine Höhe automatisch an den Inhalt an, auch am Handy. Beim Wechsel zum nächsten Schritt holt es den Formularanfang ins Bild.

Einbetten lässt sich das Portal auf jeder Seite, die per HTTPS ausgeliefert wird. Hat Ihre Website eine Content Security Policy, muss `frame-src` die Adresse `https://app.fraghugo.de` erlauben, für Variante C außerdem Inline-Skripte.

## So sieht es für die anfragende Person aus

1. Sie wählt, was sie möchte.
2. Sie gibt Name, E-Mail-Adresse und Postleitzahl an und beschreibt ihr Anliegen.
3. Optional lädt sie Nachweise hoch, zum Beispiel eine geschwärzte Ausweiskopie (bis 3 Dateien, je 5 MB).
4. Eine Bot-Prüfung (Cloudflare Turnstile) läuft im Hintergrund.
5. Sie bekommt eine Mail mit einem Bestätigungslink, der 7 Tage gilt.

Bei Ihnen erscheint eine neue [Betroffenenanfrage](/vorfaelle/betroffenenanfragen/). Antwort und Versand lassen sich erst freigeben, wenn die E-Mail-Adresse bestätigt ist.

## Aufsichtsbehörden (Art. 77)

Das Portal nennt die für Ihr Unternehmen zuständige Aufsichtsbehörde und, anhand der Postleitzahl, die Landesbehörde am Wohnort der Person. Hinterlegt sind die 16 Landesbehörden und die Bundesbeauftragte.

## Geschützte Antwort

Antworten gehen nicht als offene Mail mit Anhang raus. Die Person bekommt einen Link, über den sie die Antwort abruft. Der Link gilt 7 Tage, der Abruf wird mit Zeitpunkt protokolliert.
