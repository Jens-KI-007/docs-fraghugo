# Screenshots — Bereich Arbeitsschutz (Hugo Safe)

**Echte App-Screenshots** aus `app.fraghugo.de` → Bereich „Hugo Safe" (`/arbeitsschutz/*`),
aufgenommen mit Chrome DevTools (Retina, Sidebar/Overlay für den Fokus ausgeblendet, 2× DPI →
auf ~1760 px Breite skaliert). Das Nachweis-Dossier ist das echte, per „Dossier (PDF)" erzeugte PDF,
mit `pdftoppm` in PNG gerendert und auf den Inhaltsbereich beschnitten. **Keine** ausgedachten
Mockups, kein Fake-Browser-Chrome.

Eingebunden auf den Doku-Seiten über `![alt](/screenshots/arbeitsschutz/<name>.png)`. Die Doku-CSS
rahmt Bilder automatisch (dunkler Rand, Radius, Schatten) — daher die Screenshots ohne eigenen Rahmen
speichern.

## Inventar

| Datei | Zeigt | Eingebunden auf |
|---|---|---|
| `uebersicht.png` | Hugo-Safe-Übersicht: Banner (erledigt/offen, Komplett-Tarif) + Unterweisungs-Kacheln | index |
| `mitarbeiter-anlegen-zuweisen.png` | Mitarbeiter-Liste: Bereich-Auswahl, Fortschritt, Status (Bereich steuert Zuweisungszahl) | mitarbeiter-anlegen-zuweisen |
| `zuweisungen.png` | Pflicht-Zuweisungen je Bereich (Toggles + Rechtsgrundlage, GBU-Hinweis) | gefaehrdungsbeurteilung-verknuepfung |
| `unterweisung-durchfuehren.png` | Lern-Screen: Fortschritt, Illustration, ISO-7010-Sicherheitszeichen, Praxis-Hinweis | unterweisung-durchfuehren |
| `aktive-bestaetigung.png` | Aktive „Verstanden & befolge"-Bestätigung nach bestandenem Test | unterweisung-durchfuehren |
| `abschlusstest-frage.png` | Abschlusstest: Frage 1/8 mit vier Antwortoptionen | abschlusstest-zertifikat |
| `abschlusstest-zertifikat.png` | Ergebnis-Screen „Bestanden — 88 % (80 % benötigt)" | abschlusstest-zertifikat |
| `nachweis-dossier.png` | Echtes Nachweis-Dossier-PDF (Kopf + 3-Zeilen-Tabelle mit „Aufbew. bis") | nachweis-dossier |
| `nachweise-liste.png` | Nachweise-Übersicht: pro Mitarbeiter „Dossier (PDF)" + Aufbewahrungs-Hinweis | nachweis-dossier |
| `jahres-erinnerung.png` | Abschluss-Bestätigung mit „Nächste Wiederholung in 12 Monaten" | jahres-erinnerung |
| `ki-videos.png` | Lern-Screen mit eingebettetem KI-Avatar-Erklärvideo (Komplett-Tarif) | ki-videos |
| `ansprechperson-betrieb.png` | „Ansprechperson & Betrieb": benannte Person + betriebsspezifische Ergänzungen (DGUV-Kriterien) | rechtliche-hinweise |
| `unterweisung-intro.png` | „Bevor Sie starten": Rechtsgrundlage + Praxis-vor-Ort-Hinweis (Reserve, derzeit nicht eingebunden) | — |

Stand: 2026-06-05. Quelle: Live-App `app.fraghugo.de`, Org „Platform-Test GmbH (QA)" (Testdaten).
