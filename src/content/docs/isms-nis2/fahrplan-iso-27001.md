---
title: Fahrplan zur ISO 27001
description: "Zwölf Schritte bis zum Audit nach ISO 27001 ohne Berater: was jeder Schritt verlangt, Grundlagen, Anwendbarkeitserklärung, Managementbewertung, Unterlagen und die Suche nach einer Zertifizierungsstelle."
sidebar:
  order: 2
---

Der **Fahrplan zur ISO 27001** führt Ihre Firma in zwölf Schritten durch das, was die Norm bis zum Audit verlangt.
Je Schritt sehen Sie, ob er erledigt ist, was noch fehlt und wo Sie es in Hugo erledigen. Die Software führt, die
Entscheidungen treffen Sie. Das Zertifikat vergibt eine unabhängige Zertifizierungsstelle.

:::note[Kein Prozentwert]
Der Fahrplan zählt erledigte Schritte („5 von 12 Schritten erledigt“) und nennt je Schritt, was fehlt. Ob ein Audit
bestanden wird, entscheidet die Zertifizierungsstelle; deshalb gibt es keinen Bereitschaftswert in Prozent.
:::

## Voraussetzungen

- Der Bereich **Informationssicherheit** (Hugo ISMS in jeder Stufe oder die Compliance Suite).
- Ihre Rolle ist Hauptadministrator oder Administrator. Mitarbeitende ohne Verwaltungsrechte sehen den Fahrplan nicht.
- Hilfreich: ein abgeschlossener [Sicherheits-Check](/lieferkette/sicherheits-check/). Er zeigt die größten Lücken,
  bevor Sie mit der Norm beginnen.

## Wo Sie den Fahrplan finden

Öffnen Sie **Informationssicherheit**. Der Fahrplan ist die erste Karte des Bereichs. Die Adresse ist
[app.fraghugo.de/dsb/isms/fahrplan](https://app.fraghugo.de/dsb/isms/fahrplan).

## Brauchen Sie das Zertifikat?

Rechts neben den Schritten steht der Kasten **Brauche ich das Zertifikat?**. Kurz gefasst:

- **Ihr Kunde will nur eine Auskunft:** Dann reichen meist der [Sicherheits-Check](/lieferkette/sicherheits-check/)
  und die [Nachweismappe](/lieferkette/nachweismappe/).
- **Ihr Kunde will ein kleines, geprüftes Testat:** Dafür gibt es die VdS 10000 mit einem Quick-Audit durch eine
  Prüfstelle, ein Angebot außerhalb von Hugo.
- **Ihr Kunde verlangt ISO 27001:** Dann führt Sie dieser Fahrplan durch Schritte und Unterlagen.

## Die zwölf Schritte

<img src="/screenshots/isms-nis2/fahrplan-iso-27001-1-schritte.webp" alt="Seite „Fahrplan zur ISO 27001“ mit der Zeile „5 von 12 Schritten erledigt“ und zwölf Balken, darunter Schritt 1 „Geltungsbereich und Umfeld festlegen“ erledigt, Schritt 2 „Leitlinie beschließen“ offen mit „Das fehlt noch“ und dem Knopf „Zu den Richtlinien“, Schritte 3 und 4 erledigt, Schritt 5 in Arbeit; rechts der Kasten „Brauche ich das Zertifikat?“" width="1184" height="900" loading="lazy" />

Der nächste offene Schritt ist aufgeklappt und hat den Hauptknopf; erledigte Schritte zeigen ihr Datum, wo Hugo eines
kennt. Jeder Schritt hat den Stand **erledigt**, **in Arbeit** oder **offen** und unter **Das fehlt noch** die
konkreten Lücken.

| Nr. | Schritt | Norm | Wo in Hugo |
|---|---|---|---|
| 1 | Geltungsbereich und Umfeld festlegen | 4.1–4.3 | Grundlagen |
| 2 | Leitlinie beschließen | 5.2 | [Richtlinien](/isms-nis2/richtlinien/) |
| 3 | Zuständige benennen | 5.3 | Grundlagen |
| 4 | Ziele setzen (mindestens drei, mit Messgröße, Verantwortlichem und Termin) | 6.2 | Grundlagen |
| 5 | Werte erfassen und Schutzbedarf bestimmen | A.5.9, 8.1 | [Asset-Register](/isms-nis2/asset-register/), [Schutzbedarf](/isms-nis2/schutzbedarf/) |
| 6 | Risiken beurteilen | 6.1.2, 8.2 | [Risiko-Register](/isms-nis2/risiko-register/) |
| 7 | Maßnahmen wählen (Anwendbarkeitserklärung) | 6.1.3 | Anwendbarkeit |
| 8 | Maßnahmen umsetzen | 8.1, 8.3 | [Maßnahmen](/isms-nis2/massnahmen/) |
| 9 | Regeln bekannt machen und schulen | 7.2, 7.3, 7.5 | [Richtlinien](/isms-nis2/richtlinien/), Hugo Learn |
| 10 | Intern prüfen | 9.2 | [Audits](/datenschutz/audits/) mit Auditprogramm |
| 11 | Leitung bewertet | 9.3 | Managementbewertung |
| 12 | Abweichungen beheben | 10.2 | [Maßnahmen](/isms-nis2/massnahmen/) |

Die Schwellen, ab wann ein Schritt als erledigt zählt (etwa 80 % der anwendbaren Maßnahmen umgesetzt oder in Umsetzung
in Schritt 8), sind Arbeitsmaßstäbe von frag.hugo, keine Forderungen der Norm.

## Schritt für Schritt

### 1. Grundlagen festhalten (Schritte 1, 3 und 4)

**Grundlagen öffnen** führt auf eine Seite mit vier Abschnitten: Geltungsbereich (Standorte, Abläufe, Systeme),
interessierte Parteien mit ihren Erwartungen, die zuständige Person mit Funktion und Vertretung sowie Ihre Ziele.
Dazu kommen Risikomethodik und Annahmegrenze für Schritt 6. Wo Hugo einen Vorschlag hat, steht er grau im leeren Feld
und wird erst mit **Vorschlag von Hugo übernehmen** gespeichert. Jedes Feld speichert beim Verlassen.

### 2. Anwendbarkeitserklärung (Schritt 7)

**Anwendbarkeit öffnen** listet alle 93 Maßnahmen aus Anhang A der ISO 27001 mit deutscher Kurzbezeichnung. Je
Maßnahme entscheiden Sie **Ja** oder **Nein**. Bei Nein schreiben Sie kurz, warum; fehlt die Begründung, steht das
rot am Feld und in der Kachel **Begründung fehlt**. Bei Ja wählen Sie den Stand der Umsetzung. Die Kacheln oben
zählen Entschiedenes, Anwendbares, nicht Anwendbares und Umgesetztes; der Filter zeigt **Alle**, **Offen** oder
**Nicht anwendbar**, die Suche findet Nummer und Stichwort.

<img src="/screenshots/isms-nis2/fahrplan-iso-27001-2-anwendbarkeit.webp" alt="Seite „Anwendbarkeitserklärung“, Schritt 7 des Fahrplans, Norm 6.1.3, mit dem Knopf „Anwendbarkeitserklärung (PDF)“, den Kacheln Entschieden 93/93, Anwendbar 92, Nicht anwendbar 1, Begründung fehlt 0, Umgesetzt 1, dem Filter Alle/Offen/Nicht anwendbar, der Suche und der Tabelle der organisatorischen Maßnahmen 5.1 bis 5.6 mit Ja/Nein, Begründung und Umsetzung" width="1184" height="900" loading="lazy" />

**Anwendbarkeitserklärung (PDF)** gibt die Erklärung als Dokument aus, wie die Zertifizierungsstelle sie sehen will.

### 3. Intern prüfen (Schritt 10)

Bei Schritt 10 planen Sie im **Auditprogramm**, welche Bereiche wann geprüft werden. Das Audit selbst läuft im
vorhandenen [Audit-Modul](/datenschutz/audits/) mit dem Katalog für Informationssicherheit. Wer prüft, darf nicht die
eigene Arbeit prüfen. Das kann jemand aus der eigenen Firma sein, solange er unparteiisch prüft.

### 4. Managementbewertung (Schritt 11)

**Managementbewertung öffnen** sammelt acht Eingaben, die meisten aus Hugo: etwa den Stand der Beschlüsse aus der
letzten Bewertung, Ihre Ziele und Termine, die Risiken und die Ergebnisse des internen Audits. Was Hugo nicht kennt, etwa Änderungen im Umfeld
oder Rückmeldungen interessierter Parteien, tragen Sie als Freitext ein. Die Geschäftsführung hakt jede Eingabe ab,
schreibt ihre Bewertung und die Beschlüsse; **Abschließen** speichert die Bewertung mit Datum und erzeugt das
Protokoll. Eine Bewertung zählt zwölf Monate.

### 5. Unterlagen prüfen

Unter den zwölf Schritten steht **Unterlagen, die das Audit sehen will**: die Dokumente, die die Norm verlangt, je mit
Abschnitt, Stand in Hugo und einem Knopf **Öffnen** oder **Anlegen**. „Vorhanden“ heißt „in Hugo hinterlegt“; ob eine
Unterlage genügt, entscheidet die Zertifizierungsstelle.

### 6. Zertifizierungsstelle finden

Ab neun erledigten Schritten ist der Abschnitt **Zertifizierungsstelle finden** aufgeklappt; vorher können Sie ihn
selbst öffnen. Er erklärt den Ablauf der Zertifizierung, verweist auf die Suche der Deutschen Akkreditierungsstelle
(DAkkS) nach akkreditierten Stellen und enthält eine **Anfrage-Vorlage** zum Kopieren. Die Vorlage füllt Hugo aus
Firmenprofil und Grundlagen; was fehlt, steht als „[…]“ da.

<img src="/screenshots/isms-nis2/fahrplan-iso-27001-3-stelle.webp" alt="Abschnitt „Zertifizierungsstelle finden“ mit den Absätzen „So läuft die Zertifizierung“, „Darf ich das ohne Berater?“ und „Akkreditierte Stellen suchen“ samt Link „Suche der DAkkS öffnen“, darunter die Anfrage-Vorlage mit Firma, Beschäftigten, Standorten, Geltungsbereich und gewünschtem Zeitraum, der Knopf „Kopieren“, der Satz „Holen Sie zwei bis drei Angebote ein.“ und der Knopf „Mappe für die Zertifizierungsstelle erstellen“" width="774" height="1081" loading="lazy" />

Holen Sie zwei bis drei Angebote ein. **Mappe für die Zertifizierungsstelle erstellen** führt zur
[Nachweismappe](/lieferkette/nachweismappe/) für die Stelle; einen Nur-Lese-Link dafür legen Sie danach im
Sicherheitsprofil an.

## Grenzen

- Hugo zertifiziert nicht und prüft Ihre Angaben nicht. Das Audit macht eine unabhängige Zertifizierungsstelle.
- Hugo empfiehlt keine Zertifizierungsstelle und nennt keine Preise. Die Stellen beraten Sie zum Managementsystem
  nicht; die Anfrage-Vorlage hilft beim Vergleich der Angebote.
- „Erledigt“ heißt: In Hugo ist hinterlegt, was der Schritt verlangt. Ob es inhaltlich genügt, zeigt erst das Audit.
- „Ihr Weg“ auf der Startseite bleibt unverändert; der Fahrplan ist ein eigener Weg im Bereich Informationssicherheit.

## Häufige Fehler

- **Die Seite leitet auf die Startseite.** Ihr Tarif enthält den Bereich Informationssicherheit nicht.
- **Schritt 7 bleibt „in Arbeit“, obwohl alle 93 entschieden sind.** Bei mindestens einer Maßnahme mit **Nein** fehlt
  die Begründung; der Filter **Offen** zeigt sie.
- **Schritt 9 bleibt offen.** Ohne erfasste Beschäftigte lässt sich die Kenntnisnahme der Richtlinien nicht zählen.
  Erfassen Sie Ihre Mitarbeitenden.
- **Schritt 12 steht auf „Kommt nach dem internen Audit“.** Es gibt noch kein abgeschlossenes internes Audit.

## Verwandte Seiten

- [Sicherheits-Check](/lieferkette/sicherheits-check/)
- [Nachweismappe und Nur-Lese-Link](/lieferkette/nachweismappe/)
- [ISMS / NIS2 — Übersicht](/isms-nis2/uebersicht/)
