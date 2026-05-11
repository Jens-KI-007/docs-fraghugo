---
title: Datenschutzerklärung (DSE)
description: Generator für die Website-Datenschutzerklärung — bleibt automatisch aktuell, wenn du AVV/VVT änderst.
---

![DSE-Generator mit Live-Vorschau](/screenshots/datenschutz/dse.png)

Die Datenschutzerklärung ist Pflicht auf jeder Website. Statt sie manuell zu pflegen (und dabei zu vergessen, dass du letzten Monat Matomo installiert hast), erzeugst du sie hier automatisch.

## So funktioniert's

1. **Bausteine wählen** — Hugo zeigt typische Bausteine (Hosting, Cookies, Newsletter, Kontaktformular, Tracking, Google Maps, YouTube-Embed, ...). Du hakst an, was bei dir zutrifft.
2. **Felder ausfüllen** — pro Baustein nur Pflicht-Felder (Anbieter, Zweck, Rechtsgrundlage, Aufbewahrungsfrist). Vieles ist vorbefüllt aus VVT/AVV.
3. **KI-Verbesserung** — "Mit Hugo polieren" macht aus den Bullet-Points einen rechtssicheren Fließtext.
4. **Vorschau** — wie das auf deiner Website aussieht.
5. **Veröffentlichen** — du kopierst das HTML oder lädst Markdown herunter und steckst es in deine Website. Alternativ: JS-Snippet einbetten, dann updated sich die DSE automatisch bei Änderungen.

## Aktualisieren

Bei einer neuen Verarbeitung oder einem neuen AVV schlägt Hugo automatisch eine DSE-Anpassung vor. Du bekommst eine Benachrichtigung "Deine DSE ist 23 Tage alt — möchtest du sie aktualisieren?".

## Versionierung

Jede veröffentlichte Version wird gespeichert. Du kannst zurückspringen, vergleichen, alte Versionen exportieren (wichtig bei Streit: welche Version galt zum Zeitpunkt X?).

## Mehrsprachig

Klick "Sprache hinzufügen" → Englisch, Französisch etc. Hugo übersetzt automatisch, du reviewst.

## Tipps

- **Impressum** ist NICHT die DSE. Beides brauchst du separat. Hugo bietet auch einen Impressums-Generator (Bereich: Dokumente).
- **Datum der letzten Änderung** wird unter der DSE automatisch ausgewiesen — wichtig wegen Transparenzpflicht.
