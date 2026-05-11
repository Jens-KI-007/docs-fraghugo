---
title: Datenschutzerklärung (DSE)
description: Generator für die Website-Datenschutzerklärung — bleibt automatisch aktuell, wenn Sie AVV/VVT änderst.
---

![DSE-Generator mit Live-Vorschau](/screenshots/datenschutz/dse.png)

Die Datenschutzerklärung ist Pflicht auf jeder Website. Statt sie manuell zu pflegen (und dabei zu vergessen, dass Sie letzten Monat Matomo installiert hast), erzeugst Sie sie hier automatisch.

## So funktioniert's

1. **Bausteine wählen** — Hugo zeigt typische Bausteine (Hosting, Cookies, Newsletter, Kontaktformular, Tracking, Google Maps, YouTube-Embed, ...). Sie haken an, was bei Ihnen zutrifft.
2. **Felder ausfüllen** — pro Baustein nur Pflicht-Felder (Anbieter, Zweck, Rechtsgrundlage, Aufbewahrungsfrist). Vieles ist vorbefüllt aus VVT/AVV.
3. **KI-Verbesserung** — "Mit Hugo polieren" macht aus den Bullet-Points einen rechtssicheren Fließtext.
4. **Vorschau** — wie das auf Ihrer Website aussieht.
5. **Veröffentlichen** — Sie kopieren das HTML oder laden Markdown herunter und stecken es in Ihre Website. Alternativ: JS-Snippet einbetten, dann updated sich die DSE automatisch bei Änderungen.

## Aktualisieren

Bei einer neuen Verarbeitung oder einem neuen AVV schlägt Hugo automatisch eine DSE-Anpassung vor. Sie bekommen eine Benachrichtigung "Ihre DSE ist 23 Tage alt — möchtest Sie sie aktualisieren?".

## Versionierung

Jede veröffentlichte Version wird gespeichert. Sie können zurückspringen, vergleichen, alte Versionen exportieren (wichtig bei Streit: welche Version galt zum Zeitpunkt X?).

## Mehrsprachig

Klicken Sie "Sprache hinzufügen" → Englisch, Französisch etc. Hugo übersetzt automatisch, Sie reviewen.

## Tipps

- **Impressum** ist NICHT die DSE. Beides brauchen Sie separat. Hugo bietet auch einen Impressums-Generator (Bereich: Dokumente).
- **Datum der letzten Änderung** wird unter der DSE automatisch ausgewiesen — wichtig wegen Transparenzpflicht.
