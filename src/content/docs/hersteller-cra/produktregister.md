---
title: Produktregister
description: Stammdaten je Produkt, Unterstützungszeitraum nach Art. 13 Abs. 8, Konformitätswege und die Frage, wo bei Software eigentlich das CE-Zeichen hinkommt.
---

Das Produktregister unter `/dsb/hersteller/produkte` ist die Grundlage für alles andere: Der
[Fristenkalender](/hersteller-cra/fristen/) rechnet je Produkt, der
[Meldeassistent](/hersteller-cra/meldung-erstellen/) füllt Produktname und Version aus dem
Register vor, und der [Prozessnachweis](/hersteller-cra/prozessnachweis/) zieht seinen Inhalt
von hier.

Legen Sie ein Produkt an, sobald Sie es in der EU bereitstellen — auch wenn es kostenlos ist und
auch wenn es ein Bestandsprodukt ist.

## Stammdaten

| Feld | Warum es gebraucht wird |
|---|---|
| Name und Versionen | Beide sind in jeder Meldung Pflichtangabe, schon in der Frühwarnung |
| Rolle | Hersteller, Einführer mit eigener Marke, wesentlicher Änderer, Verwalter quelloffener Software |
| Produktklasse | weder wichtig noch kritisch, wichtig Klasse I oder II, kritisch — aus dem [Hersteller-Check](/hersteller-cra/hersteller-check/) übernommen |
| Mitgliedstaaten der Bereitstellung | Steuert in der Meldung die Verteilung an die übrigen CSIRTs (Art. 14 Abs. 2 lit. a) |
| Datum des Inverkehrbringens | Trennt Bestand von Neuware (Art. 69 Abs. 2 und 3) |
| Datenfernverarbeitung | Ob ein von Ihnen verantworteter Dienst zum Funktionsumfang gehört (Art. 3 Nr. 2) |
| Unterstützungszeitraum mit Begründung | siehe unten |
| Konformitätsweg | siehe unten |
| CE-Kennzeichnung mit Ort | siehe unten |
| Kontaktadresse für Schwachstellenmeldungen | Anhang I Teil II Nr. 6 — wird auf der [CVD-Seite](/hersteller-cra/richtlinien-cvd-security-txt/) veröffentlicht |

Die Komponentenliste hängt an der Produktversion und kommt aus dem
[SBOM-Import](/hersteller-cra/sbom-import/).

## Unterstützungszeitraum

Der Unterstützungszeitraum ist der Zeitraum, in dem Sie sicherstellen müssen, dass Schwachstellen
des Produkts wirksam behandelt werden (Art. 3 Nr. 20).

:::caution[Fünf Jahre sind die Untergrenze, nicht die Regel]
Maßstab ist die **voraussichtliche Nutzungsdauer** des Produkts — mit Blick auf angemessene
Erwartungen der Nutzer, die Art des Produkts und seine Zweckbestimmung. Mindestens fünf Jahre.
Kürzer geht nur, wenn das Produkt voraussichtlich weniger als fünf Jahre genutzt wird
(Art. 13 Abs. 8 UAbs. 2 und 3).

Bei Routern, Betriebssystemen, Hauptplatinen, Mikroprozessoren und Software für industrielle
Umgebungen ist ein **längerer** Zeitraum die Regel (Erwägungsgrund 60). „Fünf Jahre" als
Voreinstellung wäre dort eine falsche Angabe — und sie ist öffentlich.
:::

Das Register fragt deshalb zwei Dinge ab: die **voraussichtliche Nutzungsdauer** und den
**festgelegten Unterstützungszeitraum**. Liegt der zweite unter der ersten, erscheint ein Hinweis
mit der Bitte um Begründung. Die Begründung gehört ohnehin in die technische Dokumentation
(Anhang VII).

Drei Pflichten hängen unmittelbar daran:

- **Das Enddatum steht beim Kauf**, leicht zugänglich, mit mindestens Monat und Jahr
  (Art. 13 Abs. 19). Ist es erreicht, sollen Sie die Nutzer darauf hinweisen, soweit technisch
  machbar.
- **Sicherheitsaktualisierungen bleiben mindestens zehn Jahre verfügbar** — oder für den Rest des
  Unterstützungszeitraums, wenn dieser länger ist (Art. 13 Abs. 9).
- **Technische Dokumentation und EU-Konformitätserklärung bewahren Sie mindestens zehn Jahre
  auf**, ebenfalls länger, wenn der Unterstützungszeitraum länger läuft (Art. 13 Abs. 13).

Das Enddatum landet automatisch im [Fristenkalender](/hersteller-cra/fristen/), mit einer
Vorwarnung. Dass der Unterstützungszeitraum endet, beendet übrigens nicht die Meldepflicht: Die
Kommission stellt in ihrer Leitlinie klar, dass Art. 14 auch danach weiter gilt
(C(2026) 5252, Rn. 210).

## Konformitätswege

Welchen Weg Sie gehen dürfen, entscheidet die Produktklasse:

| Klasse | Zulässige Verfahren | Ist ein Dritter zwingend? |
|---|---|---|
| weder wichtig noch kritisch | Modul A (internes Kontrollverfahren) — oder B+C, H, europäisches Zertifizierungsschema | nein (Art. 32 Abs. 1) |
| wichtig, Klasse I | Modul A **nur**, wenn harmonisierte Normen, gemeinsame Spezifikationen oder eine europäische Cybersicherheitszertifizierung mindestens der Stufe „mittel" **vollständig** angewandt wurden; sonst B+C oder H | bedingt (Art. 32 Abs. 2, Erwägungsgrund 91) |
| wichtig, Klasse II | B+C, H oder europäisches Zertifizierungsschema ab Stufe „mittel" | ja, immer (Art. 32 Abs. 3) |
| kritisch | vorrangig europäisches Cybersicherheitszertifizierungsschema nach Art. 8 Abs. 1, sonst die Verfahren der Klasse II | ja (Art. 32 Abs. 4) |

:::note[Klasse I ist selten Selbstbewertung]
Solange zu Ihrem Produkt keine harmonisierten Normen im Amtsblatt gelistet sind, gibt es für
Klasse I praktisch keine Selbstbewertung — dann führt der Weg über eine notifizierte Stelle. Das
Register hält deshalb fest, **welche** Normen Sie anwenden, nicht nur, dass Sie welche anwenden.
:::

Zwei Erleichterungen, die kleine Häuser oft nicht kennen:

- **Kleinst- und Kleinunternehmen dürfen die technische Dokumentation in einem vereinfachten
  Format vorlegen**; notifizierte Stellen müssen dieses Formular akzeptieren (Art. 33 Abs. 5).
- **Die Gebühren für die Konformitätsbewertung werden für sie proportional gesenkt**
  (Art. 32 Abs. 6).

Hersteller quelloffener Software, deren Produkt in eine Anhang-III-Kategorie fällt, können die
Konformität über die Verfahren des Art. 32 Abs. 1 nachweisen, sofern die technische Dokumentation
zum Zeitpunkt des Inverkehrbringens öffentlich zugänglich gemacht wird (Art. 32 Abs. 5).

## CE-Kennzeichnung

Bei Software gibt es nichts, worauf man ein Zeichen kleben könnte. Die Verordnung löst das so:

> Bei Produkten mit digitalen Elementen in Form von Software wird die CE-Kennzeichnung entweder
> auf der EU-Konformitätserklärung oder auf der das Softwareprodukt begleitenden Website
> angebracht. Im letzteren Fall muss der relevante Abschnitt der Website für Verbraucher leicht
> und direkt zugänglich sein. (Art. 30 Abs. 1)

Das Register fragt deshalb nicht nur „CE ja/nein", sondern auch **wo** — Konformitätserklärung
oder Website — und im zweiten Fall die URL. War eine notifizierte Stelle nach Modul H beteiligt,
folgt auf die Kennzeichnung ihre Kennnummer (Art. 30 Abs. 4).

Die EU-Konformitätserklärung selbst regelt Art. 28 mit dem Muster in Anhang V; die vereinfachte
Fassung steht in Art. 13 Abs. 20 mit Anhang VI. Mit ihrer Ausstellung übernehmen Sie die
Verantwortung für die Konformität des Produkts (Art. 28 Abs. 4).

:::caution[Verwalter quelloffener Software: kein CE]
Weil für sie eine vereinfachte Regelung gilt, dürfen sie auf den Produkten, deren Entwicklung sie
unterstützen, keine CE-Kennzeichnung anbringen (Erwägungsgrund 19). Das Feld bleibt in diesem
Fall gesperrt.
:::

## Fristen je Produkt

Aus den Stammdaten entstehen die produktbezogenen Termine: Ende des Unterstützungszeitraums,
Vorwarnung dazu, der Stichtag 11. Dezember 2027 für Produkte, die danach in Verkehr gehen, und
die Aufbewahrungsfristen. Was daraus im Kalender wird und welche Termine ausdrücklich **nicht**
je Produkt gesetzt werden, steht unter [Fristen](/hersteller-cra/fristen/).
