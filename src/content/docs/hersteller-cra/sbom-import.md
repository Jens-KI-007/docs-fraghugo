---
title: SBOM-Import
description: CycloneDX und SPDX einlesen, Grenzen des Imports, warum manche Komponenten nicht überwacht werden können — und wie die Datei in der Pipeline entsteht.
---

Eine Software-Stückliste (SBOM) listet die Komponenten Ihres Produkts. Der Import liegt im
[Produktregister](/hersteller-cra/produktregister/) an der jeweiligen Produktversion: Datei
hochladen, Hugo liest sie ein und legt die Komponenten mit Name, Version, Lizenz und
Package-URL ab.

## Was der Cyber Resilience Act verlangt

> Schwachstellen und Komponenten der Produkte mit digitalen Elementen ermitteln und dokumentieren,
> u. a. durch Erstellung einer Software-Stückliste in einem gängigen maschinenlesbaren Format, aus
> der zumindest die obersten Abhängigkeiten der Produkte hervorgehen.
> (Anhang I Teil II Nr. 1)

Drei Klarstellungen dazu, weil sie im Umlauf regelmäßig falsch wiedergegeben werden:

:::note[Kein Format ist vorgeschrieben]
Verlangt ist ein **gängiges maschinenlesbares Format**. CycloneDX und SPDX sind unsere Wahl, weil
die Werkzeuge dafür da sind — eine Vorgabe der Verordnung sind sie nicht. Format und Elemente kann
die Kommission per Durchführungsrechtsakt festlegen (Art. 13 Abs. 24).
:::

:::note[Veröffentlichen müssen Sie sie nicht]
Die SBOM gehört in die technische Dokumentation und geht **auf begründetes Verlangen** an die
Marktüberwachungsbehörde (Anhang VII Nr. 2 lit. b und Nr. 8). Eine Veröffentlichungspflicht gibt
es nicht. Stellen Sie sie Ihren Nutzern freiwillig bereit, muss in den Produktinformationen
stehen, wo sie zu finden ist (Anhang II Nr. 9).
:::

Verlangt sind **mindestens die obersten Abhängigkeiten**. Tiefer zu gehen ist erlaubt und für die
Schwachstellenüberwachung nützlich — der Import verarbeitet beides.

## Unterstützte Formate

| Format | Versionen | Dateiform |
|---|---|---|
| CycloneDX | 1.4, 1.5, 1.6 | JSON und XML |
| SPDX | 2.2, 2.3 | JSON und tag-value (`.spdx`) |

Erkannt wird das Format am Inhalt, nicht an der Dateiendung. Passt eine Datei zu keinem der
beiden Schemata, bricht der Import mit einer Fehlermeldung ab, statt eine halbe Komponentenliste
anzulegen.

## Grenzen

| Grenze | Wert | Was passiert beim Überschreiten |
|---|---|---|
| Dateigröße | 10 MB | Der Upload wird abgelehnt, bevor er verarbeitet wird |
| Komponenten je Datei | 20.000 | Der Import bricht ab und nennt die Zahl |

Kommen Sie an die Grenzen, liegt das fast immer daran, dass die SBOM den kompletten
Abhängigkeitsbaum einer Container-Basis mitschreibt. Zwei Wege heraus: die SBOM auf die
Anwendungsebene beschränken, oder das Produkt in mehrere Produktversionen aufteilen, die
ohnehin getrennt ausgeliefert werden.

## Was „nicht überwachbar" bedeutet

Nach dem Import steht an manchen Komponenten die Markierung **nicht überwachbar**. Sie bedeutet
genau eine Sache: Diese Komponente lässt sich nicht zuverlässig gegen Schwachstellendaten
abgleichen. Zwei Ursachen gibt es.

- **Keine Package-URL (`purl`).** Ohne sie ist unklar, welches Paket aus welchem Ökosystem
  gemeint ist. „openssl" gibt es als Systempaket, als npm-Wrapper und als Vendor-Kopie im Quellbaum.
- **Keine Version.** Ohne Version lässt sich nicht sagen, ob eine bekannte Schwachstelle dieses
  Stück Software betrifft.

Die Komponente bleibt im Register stehen — sie verschwindet nicht und sie wird nicht stillschweigend
ignoriert. Sie zählt nur nicht in die Überwachung. Wo die Angaben fehlen, liegt es meistens am
erzeugenden Werkzeug oder an einer von Hand gepflegten Liste; ergänzen Sie `purl` und Version an
der Quelle, nicht in Hugo, sonst ist die Lücke beim nächsten Build wieder da.

## Die Datei in der Pipeline erzeugen

Erzeugen Sie die SBOM dort, wo Sie auch das Artefakt bauen. Dann passt sie zur Version, die Sie
ausliefern.

**npm-Projekt mit `cyclonedx-npm`:**

```yaml
# .github/workflows/release.yml (Ausschnitt)
- name: SBOM erzeugen
  run: npx --yes @cyclonedx/cyclonedx-npm@latest
       --omit dev
       --output-format JSON
       --output-file sbom.cdx.json

- name: SBOM als Artefakt ablegen
  uses: actions/upload-artifact@v4
  with:
    name: sbom
    path: sbom.cdx.json
```

`--omit dev` lässt Entwicklungsabhängigkeiten weg — sie werden nicht ausgeliefert und blähen die
Liste sonst um ein Vielfaches auf.

**Beliebiges Projekt oder Container-Image mit `syft`:**

```bash
# Quellbaum
syft scan dir:. -o cyclonedx-json=sbom.cdx.json

# oder das fertige Image, so wie es der Kunde bekommt
syft scan ghcr.io/ihr-team/ihr-produkt:1.4.2 -o spdx-json=sbom.spdx.json
```

Für den Nachweis ist das Image die ehrlichere Quelle: Es enthält auch das, was aus der Basis
mitkommt und nicht in Ihrer `package.json` steht.

Laden Sie die Datei nach jedem Release hoch. Hugo hält die Stände je Produktversion vor, sodass
sich im [Prozessnachweis](/hersteller-cra/prozessnachweis/) belegen lässt, welche Komponenten zu
welchem Zeitpunkt ausgeliefert wurden.

## Wenn in einer Komponente etwas gefunden wird

Zwei Pflichten, die dann auseinanderzuhalten sind:

- **Melden an den Betreuer der Komponente.** Stellen Sie eine Schwachstelle in einer eingebundenen
  Komponente fest — auch in einer quelloffenen —, melden Sie sie der Person oder Einrichtung, die
  die Komponente herstellt oder wartet, und stellen einen von Ihnen entwickelten Fix samt
  Unterlagen zur Verfügung (Art. 13 Abs. 6). Das gilt unabhängig davon, ob jemand angreift.
- **Melden an das CSIRT und die ENISA.** Das ist etwas anderes und setzt voraus, dass die
  Schwachstelle **in Ihrem Produkt** aktiv ausgenutzt wird. Ist der verwundbare Code bei Ihnen
  nicht erreichbar oder wurde er in Ihrem Produkt nicht ausgenutzt, besteht keine Meldepflicht —
  eine freiwillige Meldung nach Art. 15 bleibt möglich (Kommissionsleitlinie C(2026) 5252,
  Rn. 218). Den Weg beschreibt [Meldung erstellen](/hersteller-cra/meldung-erstellen/).
