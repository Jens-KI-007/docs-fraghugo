---
title: "Datenpannen-Notfallplan — 72-h-Workflow"
description: "Schritt-für-Schritt-Workflow für die Meldung einer Datenpanne nach Art. 33 DSGVO. Inklusive Eskalationsmatrix, Mustermeldung an die Aufsichtsbehörde und Betroffenen-Information nach Art. 34."
---

Wenn es passiert, läuft eine Uhr: **72 Stunden** zwischen „Kenntnisnahme" und Meldung an die Aufsichtsbehörde (Art. 33 I). Die meisten Bußgelder, die wir gesehen haben, gehen nicht auf die Datenpanne selbst zurück — sondern darauf, dass die Frist **versäumt** oder die Meldung **unvollständig** war. Mit diesem Notfallplan wissen Sie und Ihr Team in den ersten 90 Minuten, was zu tun ist.

## Was ist enthalten?

- **72-h-Ablaufplan** mit konkreten Verantwortlichkeiten (Wer macht was bis wann?)
- **Erstbewertungs-Bogen**: Datenpanne ja/nein, Risiko-Einstufung, Meldepflicht
- **Eskalationsmatrix**: GF / DSB / IT / Rechtsabteilung / Versicherung / externer Dienstleister
- **Mustermeldung** an die Aufsichtsbehörde (alle 16 Bundesländer + BfDI + EDPB)
- **Mustertext** zur Information der Betroffenen nach Art. 34
- **Internes Datenpannen-Register** (Word + Excel) — Pflicht nach Art. 33 V
- **Forensik-Checkliste**: Was darf nicht angefasst werden, bis IT-Forensik da ist?

## Der 72-h-Workflow im Überblick

### T+0 bis T+90 Min — Erstreaktion

1. **Eindämmung**: Betroffenes System vom Netz, Logs sichern
2. **Kernteam alarmieren**: GF, DSB, IT-Lead — telefonisch, nicht per E-Mail (E-Mail-System könnte selbst kompromittiert sein)
3. **Erstbewertungs-Bogen** ausfüllen: Was ist passiert, wer ist betroffen, welche Datenkategorien?

### T+90 Min bis T+24 h — Bewertung

4. **Risiko bewerten** (kein / niedrig / hoch) — Vorlage in der Mappe
5. **Meldepflicht prüfen** — Art. 33 (Behörde) und Art. 34 (Betroffene)
6. **Externe Hilfe** holen, wenn nötig: Forensik, Cyber-Versicherung, Rechtsanwalt

### T+24 h bis T+72 h — Meldung

7. **Meldung an Aufsichtsbehörde** (Online-Portal — Liste aller 17 Behörden im Notfallplan)
8. **Betroffene informieren** (wenn Risiko hoch — Mustertext liegt bei)
9. **Internes Datenpannen-Register** aktualisieren
10. **Lessons Learned**: was war die Ursache, welche TOMs versagen, was passt zukünftig

## Eskalationsmatrix — wer wird wann informiert?

| Schweregrad | GF | DSB | IT-Lead | Aufsicht | Betroffene |
|------------:|----|-----|---------|----------|------------|
| Kein Risiko (z. B. verschlüsseltes Notebook gestohlen) | ja | ja | ja | nein | nein |
| Niedrig (Logfile mit IPs offen) | ja | ja | ja | ja | nein |
| Mittel (Mailfehlversand mit Klarnamen) | ja | ja | ja | ja | ggf. (Einzelfall) |
| Hoch (Hack mit Datenabfluss) | ja | ja | ja | ja | ja (Art. 34) |

## Datenpannen-Notfallplan anfordern

<form action="https://www.fraghugo.de/api/lead-capture" method="POST" class="lead-magnet-form">
  <input type="hidden" name="magnet" value="datenschutz-notfallplan" />
  <input type="hidden" name="source" value="docs.fraghugo.de/lead-magnete/datenpannen-notfallplan" />
  <label>
    <span>Ihre E-Mail-Adresse</span>
    <input type="email" name="email" required placeholder="ihre@email.de" autocomplete="email" />
  </label>
  <label class="consent">
    <input type="checkbox" name="consent" required />
    <span>Ich akzeptiere die <a href="https://www.fraghugo.de/datenschutzerklaerung/">Datenschutzhinweise</a>. Abmeldung jederzeit.</span>
  </label>
  <button type="submit">Notfallplan per E-Mail anfordern</button>
</form>

## Tipp: Üben, bevor es ernst wird

Eine Datenpanne ist kein guter Zeitpunkt, um den Notfallplan **zum ersten Mal** zu lesen. Wir empfehlen einen **zweistündigen Tabletop-Test** pro Quartal — Vorlagen für drei Szenarien (Phishing-Hit, Laptop-Verlust, Insider-Datenklau) sind im Pack enthalten.

## Verwandte Anleitungen

- [Datenpanne in 72 h melden](/hugo-dsb/datenpanne-melden/)
- [Mitarbeiter-Workflow Datenpanne](/mitarbeiter/mitarbeiter-datenpanne/)
- [NIS2-Vorfallmeldung in 24 h](/nis2/vorfall-melden/)
