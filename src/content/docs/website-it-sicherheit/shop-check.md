---
title: Shop-Check
description: Fünf Prüfpunkte für Online-Shops — EU-Gewährleistungslabel, Widerrufsbutton, Produktsicherheit, Umweltaussagen und KI-Hinweis am Chat. Was geprüft wird, wie Produktseiten gefunden werden, wo die Grenzen liegen.
---

<img src="/screenshots/website-it-sicherheit/shop-check.webp" alt="Die Kategorie „Shop & Werbung“ im Scan-Ergebnis eines Test-Shops: Zeile Online-Shop (Shopware 6 erkannt) und die fünf Prüfpunkte EU-Gewährleistungslabel, Widerrufsbutton, Produktsicherheitsangaben, Umweltaussagen und KI-Hinweis am Chat-Fenster, jeweils mit Ampel, Punktzahl und Befund" width="816" height="578" loading="lazy" />

Wenn Hugo auf Ihrer Website einen Online-Shop erkennt, prüft er zusätzlich zu den DSGVO-Checks fünf
Punkte, die für den Verkauf an Verbraucher gelten. Sie erscheinen im Scan-Ergebnis als eigene
Kategorie **„Shop & Werbung“** mit einem eigenen **Shop-Score** von 0 bis 100.

Der Shop-Score steht neben dem DSGVO-Score und fließt **nicht** in ihn ein. So bleibt Ihr
Datenschutz-Wert über die Zeit vergleichbar, auch wenn die Shop-Prüfung dazukommt.

:::note[Was der Scan leistet — und was nicht]
Der automatische Scan prüft öffentlich sichtbare Merkmale auf einer begrenzten Zahl von
Produktseiten. Er ersetzt keine Rechtsberatung, und Ausnahmen — etwa Sektorprodukte oder reine
B2B-Shops — kann er nicht zuverlässig erkennen.
:::

## Was geprüft wird

| Prüfpunkt | Rechtsgrund | Gilt ab |
|---|---|---|
| EU-Gewährleistungslabel | Art. 246a § 1 Abs. 1 S. 1 Nr. 11 EGBGB in Verbindung mit Anhang I der Durchführungsverordnung (EU) 2025/1960 | 27.09.2026, keine Übergangsfrist |
| Umweltaussagen | Anhang zu § 3 Abs. 3 UWG Nr. 2a, 4a, 4b, 4c, 10a in der ab dem 27.09.2026 geltenden Fassung | 27.09.2026 |
| Produktsicherheitsangaben | Art. 19 Buchst. a–d der Verordnung (EU) 2023/988 | seit 13.12.2024 |
| KI-Hinweis am Chat-Fenster | Art. 50 Abs. 1 der Verordnung (EU) 2024/1689 | seit 02.08.2026 |
| Widerrufsbutton | § 356a BGB | seit 19.06.2026 |

### 1. EU-Gewährleistungslabel

Ab dem **27.09.2026** müssen Sie beim Verkauf von **Waren** an Verbraucher ein einheitliches
Label zur gesetzlichen Gewährleistung anzeigen. Rechtsgrund ist Art. 246a § 1 Abs. 1 S. 1 Nr. 11
EGBGB — das Einführungsgesetz zum Bürgerlichen Gesetzbuch, in dem die Informationspflichten im
Fernabsatz stehen — in Verbindung mit Anhang I der Durchführungsverordnung (EU) 2025/1960, die das
Label grafisch vorgibt. **Eine Übergangsfrist gibt es nicht.**

Für reine Dienstleistungen und digitale Inhalte schulden Sie nur einen Hinweis auf die
gesetzliche Gewährleistung, **kein Label**.

Hugo sucht das Label mehrgleisig: als Bild (über `alt`, `src` und `title`), als sichtbaren Textblock
in der Nähe von Preis und Kaufbutton, über `aria-label` sowie über die CSS-Klassen der bekannten
Shop-Plugins. Der Scan prüft dabei die **Produktseite, nicht den Bestellvorgang** — der Warenkorb
und die Kasse werden nicht durchlaufen.

**Bewertung:** vor dem Stichtag gilt ein fehlendes Label als Hinweis (gelb, „ab 27.09.2026
Pflicht“), ab dem Stichtag als Fehler (rot). Erkennt Hugo einen B2B-Shop — etwa an
Netto-Preisen oder am Hinweis „nur für Gewerbetreibende“ —, wird der Punkt nur zur Information
angezeigt.

### 2. Umweltaussagen

Ab dem 27.09.2026 sind bestimmte Werbeaussagen zur Umwelt in jedem Fall unzulässig. Grundlage ist
der Anhang zu § 3 Abs. 3 UWG — das Gesetz gegen den unlauteren Wettbewerb — dort die Nummern
2a, 4a, 4b, 4c und 10a in der ab dem 27.09.2026 geltenden Fassung (Drittes Gesetz zur Änderung
des UWG vom 12.02.2026, BGBl. 2026 I Nr. 43).

Hugo geht in zwei Schritten vor. Zuerst sucht er im sichtbaren Text nach Begriffen wie
„klimaneutral“, „nachhaltig“, „umweltfreundlich“ oder „CO₂-neutral“ — auf der Startseite, den
Kategorieseiten, den Produktseiten und auf Seiten wie `/nachhaltigkeit`. Danach ordnet die KI jeden
Fund im Umfeld von rund 240 Zeichen ein:

- **unzulässig** — die Aussage fällt unter die genannten Verbotstatbestände (rot)
- **belegpflichtig** — die Aussage ist erlaubt, wenn Sie den Nachweis erbringen; ein Nachweis war
  auf der Seite nicht in Reichweite (gelb)
- **unkritisch** — kein Befund

Ein selbst gestaltetes Nachhaltigkeitssiegel ohne erkennbares Zertifizierungssystem wird als
belegpflichtig eingestuft.

**Zukunftsversprechen** wie „bis 2030 klimaneutral“ fallen **nicht** unter diese Liste. Fehlt
dafür ein detaillierter, überprüfbarer Plan, ist der Maßstab § 5 Abs. 3 Nr. 4 UWG — Hugo weist
solche Aussagen deshalb gesondert aus.

### 3. Produktsicherheitsangaben (GPSR)

Seit dem **13.12.2024** gilt die EU-Produktsicherheitsverordnung, kurz GPSR nach ihrem englischen
Namen *General Product Safety Regulation*. Art. 19 Buchst. a–d der Verordnung (EU) 2023/988
verlangt auf der Produktseite:

- Name beziehungsweise Firma, Postanschrift und elektronische Adresse des **Herstellers**
- bei Herstellern außerhalb der EU zusätzlich die **verantwortliche Person in der EU**
- die **Produktidentifikation** — Typ, Charge oder Seriennummer sowie eine Abbildung
- **Warnhinweise und Sicherheitsinformationen** in deutscher Sprache, soweit erforderlich

Hugo liest diese Angaben aus dem Seitentext und aus den strukturierten Daten (schema.org `Product`,
`Offer`, `brand`, `manufacturer`) und meldet je Produktseite, welche der vier Angaben er nicht
gefunden hat.

### 4. KI-Hinweis am Chat-Fenster

Seit dem **02.08.2026** gilt Art. 50 Abs. 1 der Verordnung (EU) 2024/1689: Menschen müssen
erfahren, dass sie mit einem KI-System sprechen, sofern das nicht ohnehin offensichtlich ist.
Absatz 1 richtet sich an den **Anbieter** des KI-Systems. Für Falschaussagen des Bots haftet
dagegen der **Betreiber der Website** (OLG Hamm, Urteil vom 12.05.2026, 4 UKl 3/25) — beides ist
ein Grund, den Hinweis sichtbar zu setzen.

Hugo erkennt gängige Chat-Widgets, öffnet das Fenster und prüft den Begrüßungstext auf einen
Hinweis wie „KI“, „künstliche Intelligenz“, „virtueller Assistent“ oder „automatisiert“. Lässt
sich das Widget nicht öffnen, meldet Hugo „nicht prüfbar“ statt eines Fehlers.

### 5. Widerrufsbutton

Seit dem **19.06.2026** muss ein Shop, der an Verbraucher verkauft, eine Widerrufsfunktion anbieten
(§ 356a BGB): einen gut lesbaren Link **„Vertrag widerrufen“** oder eine gleichbedeutende, eindeutige
Beschriftung, der während der Widerrufsfrist ständig verfügbar, hervorgehoben platziert und leicht
zugänglich ist (Abs. 1). Er führt zu einem Formular, in dem der Kunde Namen, Angaben zum Vertrag und
den Weg für die Bestätigung angibt und über **„Widerruf bestätigen“** absendet (Abs. 2 und 3). Danach
bekommt er unverzüglich eine Eingangsbestätigung mit Inhalt, Datum und Uhrzeit (Abs. 4). Nach der
Gesetzesbegründung (BT-Drs. 21/1856, S. 38) muss die Funktion grundsätzlich **ohne Anmeldung**
erreichbar sein — außer, man kann bei Ihnen nur über ein Kundenkonto bestellen.

<img src="/screenshots/website-it-sicherheit/shop-check-widerrufsbutton.webp" alt="Abschnitt „Widerrufsbutton“ im Scan-Ergebnis eines Test-Shops: Kennzeichnung „verbesserungswürdig“, Befund „Der Link steht in der Fußzeile und ist optisch nicht hervorgehoben“, Fundstelle mit Linktext „Vertrag widerrufen“, Bereich Fußzeile und Ziel, darunter drei Merkmale — eindeutig beschriftet ja, hervorgehoben nein, Formular zum Absenden ja — und die Liste der geprüften Seiten" width="744" height="417" loading="lazy" />

**Was Hugo prüft:** Er ruft Ihren Shop von außen und ohne Anmeldung auf — die Startseite und bis zu
zwei weitere schon geladene Seiten (die erste Produktseite und den Warenkorb, wenn er ohne Bestellung
erreichbar ist). Dort sucht er Links mit „Vertrag widerrufen“ oder einer gleichbedeutenden Beschriftung,
folgt dem besten Treffer einmal (auch auf eine andere Domain oder in einen eingebetteten Rahmen) und
meldet drei Merkmale:

- **Eindeutig beschriftet** — steht „Vertrag widerrufen“ oder etwas Gleichbedeutendes da?
- **Hervorgehoben** — hebt sich der Link von den Nachbar-Links ab, oder steht er unscheinbar zwischen
  Impressum und AGB?
- **Formular zum Absenden** — führt er zu einem Formular mit „Widerruf bestätigen“ oder nur zur
  Widerrufsbelehrung beziehungsweise zu einem PDF?

Hugo schickt dabei **nie** ein Formular ab.

**Bewertung:**

| Was Hugo findet | Kennzeichnung | Ampel | Punkte |
|---|---|---|---|
| Eindeutig beschriftet, hervorgehoben, Formular zum Absenden | in Ordnung | grün | 100 |
| Wie oben, aber nicht hervorgehoben | verbesserungswürdig | gelb | 70 |
| Formular vorhanden, Beschriftung nicht eindeutig | verbesserungswürdig | gelb | 60 |
| Nur nach Anmeldung erreichbar | nur nach Anmeldung | gelb | 40 |
| Link führt nur zur Belehrung oder zu einem PDF | nur Belehrung | gelb | 30 |
| Kein passender Link gefunden | nicht gefunden | **derzeit gelb** | 0 |
| Seiten ließen sich nicht vollständig lesen | nicht prüfbar | gelb | 50 |
| Kein Verbraucher-Shop erkannt (z. B. reiner B2B-Shop) | — | Info | 100 |

:::note[Derzeit höchstens Gelb]
Solange wir die Erkennung an echten Shops weiter abgleichen, meldet Hugo einen fehlenden Button als
Hinweis (gelb) und nicht als Fehler (rot). Die Punktzahl 0 zählt trotzdem im Shop-Score.
:::

**Grenzen:** Kundenkonto, Bestellbestätigung und App sieht der Scan nicht. Ob für Ihr gesamtes Sortiment
kein Widerrufsrecht besteht (dann brauchen Sie die Funktion nicht, § 312g Abs. 2 BGB), weiß er nicht.
Ob die Eingangsbestätigung ankommt, prüft er nicht, weil er nichts absendet.

Was das Gesetz genau verlangt, wie Shopify, WooCommerce und Shopware die Funktion mitbringen und welche
Gestaltungen 2026 abgemahnt wurden, steht auf der Seite
[Widerrufsbutton-Check](https://www.fraghugo.de/tools/widerrufsbutton-check/) auf fraghugo.de.

## Wie der Scanner Produktseiten findet

Bevor geprüft wird, sucht Hugo Ihre Produktseiten — in dieser Reihenfolge:

1. **Sitemap** — `/sitemap.xml` und, falls vorhanden, eine gesonderte Produkt-Sitemap.
2. **Strukturierte Daten** — Produktlisten nach schema.org (`ItemList`), wie sie die meisten
   Shop-Systeme ausliefern.
3. **Links im Seitenquelltext**, deren Adresse auf eine Produktseite hindeutet — etwa `/produkt/`,
   `/product/`, `/products/`, `/p/`, `/artikel/` oder `/detail/`.
4. **Kategorieseiten**, denen Hugo **bis zu zwei Ebenen** tief folgt.

Aus den Kandidaten wählt Hugo die Seiten aus, die tatsächlich wie Produktseiten aussehen: Preis,
Kaufbutton und Produktdaten. Wie viele Seiten geprüft werden, hängt vom Tarif ab:

| Tarif | Produktseiten je Scan |
|---|---|
| Kostenlos | 8 |
| Pro | 25 |
| Agentur | 100 |

Den Widerrufsbutton sucht Hugo zusätzlich auf der Startseite und im Warenkorb — er hängt also nicht
davon ab, dass Produktseiten gefunden werden.

Die Grenze ist eine Frage der Laufzeit, nicht des Funktionsumfangs: Alle fünf Prüfpunkte sind in
jedem Tarif vollständig sichtbar. Nur die **Fix-Anleitungen** — die konkreten Schritte je
Shop-System — gibt es ab Pro.

## Eigene Produkt-URLs hinterlegen (Pro)

Manche Shops verstecken ihre Produktseiten hinter Filtern, Endlos-Scroll oder einer Suche. Dann
findet Hugo nichts Verwertbares und meldet „Produktseiten nicht automatisch auffindbar“.

Als Pro-Kunde geben Sie deshalb **bis zu fünf Beispiel-URLs** von Hand vor:

1. Öffnen Sie **Website & IT-Sicherheit → Scan-Übersicht** und dort die Einstellungen der Domain.
2. Tragen Sie unter **Produkt-URLs** je Zeile eine vollständige Adresse ein, zum Beispiel
   `https://www.ihr-shop.de/produkt/kaffeemuehle-classic`.
3. Speichern.

Der nächste Scan prüft **bevorzugt diese Seiten** und füllt erst danach mit automatisch gefundenen
Seiten auf. Wählen Sie Beispiele, die repräsentativ sind — je eine Seite aus verschiedenen
Kategorien sagt mehr aus als fünf Varianten desselben Artikels.

## Was „nicht prüfbar“ heißt

„Nicht prüfbar“ ist kein Fehler und kein Freispruch, sondern ein ehrliches „konnte ich nicht
sehen“. Es gibt drei Gründe:

| Grund | Was Sie tun können |
|---|---|
| **Die Seite ließ sich nicht laden** — Zeitüberschreitung, Serverfehler, Sperre für automatische Zugriffe | Seite im Browser aufrufen und prüfen, ob sie zuverlässig lädt. Sperrt eine Firewall oder ein Bot-Schutz den Scanner aus, lassen Sie die Hugo-Adressen zu und starten den Scan erneut. |
| **Ein Consent-Banner blockiert die Seite** — der Inhalt liegt hinter einer Einwilligungsschicht, die sich nicht schließen ließ | Prüfen Sie, ob sich Ihr Banner ohne Zustimmung schließen lässt. Bleibt es hart, hinterlegen Sie Produkt-URLs (Pro) und prüfen die betroffenen Punkte einmal von Hand. |
| **Die KI war nicht erreichbar** — die Einordnung der Umweltaussagen und der Produktsicherheitsangaben braucht sie | Der Scan bricht deswegen nicht ab: Sie bekommen das heuristische Ergebnis als Hinweis (gelb). Ein erneuter Scan liefert in aller Regel die vollständige Einordnung. |

Betrifft „nicht prüfbar“ einzelne Seiten, steht in den Details, welche das waren.

## Wie das Monitoring alarmiert

Wenn Sie [Monitoring](/website-it-sicherheit/monitoring/) für eine Domain aktiviert haben (ab Pro),
vergleicht Hugo bei jedem automatischen Scan auch die Shop-Kategorie mit dem Vorlauf.

- **Alarmtyp `shop_regression`** — verschlechtert sich einer der fünf Prüfpunkte, geht eine Mail
  an die hinterlegten Empfänger. Typischer Betreff: „Shop-Prüfung: ihr-shop.de — Gewährleistungslabel
  fehlt auf 3 Seiten.“ Damit fällt auf, wenn ein Theme-Update das Label aus der Produktseite wirft
  oder das Marketing eine neue Umweltaussage ergänzt.
- **Einmalige Stichtags-Mail am 27.09.2026** — an alle überwachten Domains, bei denen ein Shop
  erkannt wurde und das Gewährleistungslabel an diesem Tag noch nicht auf allen geprüften Seiten
  steht. Die Mail geht **nur bei Befund** raus; wer sauber ist, hört nichts. Sie wird genau einmal
  verschickt.

## Grenzen

- **Kein Bestellvorgang.** Hugo legt nichts in den Warenkorb und durchläuft die Kasse nicht.
  Pflichtangaben, die erst im Checkout oder in der Bestellbestätigung erscheinen, sieht er nicht.
- **Keine Sektor-Ausnahmen.** Lebensmittel, Arzneimittel, Medizinprodukte, Antiquitäten oder
  reparaturbedürftige Waren folgen eigenen Regeln. Hugo erkennt das nicht und meldet die
  allgemeinen Pflichten. Prüfen Sie solche Befunde von Hand.
- **Keine Marktplatz-Angebote.** Geprüft wird ausschließlich Ihr eigener Shop unter Ihrer Domain.
  Was Sie über Amazon, eBay, Otto oder Etsy verkaufen, bleibt außen vor — obwohl die Pflichten
  dort ebenso gelten.
- **Keine Rechtsberatung.** Der Scan ist eine technische Momentaufnahme öffentlich sichtbarer
  Merkmale. Er bewertet keine Einzelfälle und trifft keine juristische Aussage über Ihr Angebot.

## Häufige Fragen

**Warum sieht mein Shop keinen Shop-Score?**
Weil Hugo Ihre Seite nicht als Shop erkannt hat. Die Erkennung greift erst ab einer **Konfidenz von
0,5**: Ohne Warenkorb, Kaufbutton und Produktdaten gilt die Seite nicht als Shop, und die fünf
Prüfpunkte werden übersprungen — Sie sehen dann nur den Hinweis „Kein Online-Shop erkannt“. Das ist
Absicht, damit Firmen-Websites keine Fehlalarme bekommen. Halten Sie das für ein Fehlurteil, melden
Sie es uns bitte über das Feedback im Scan-Ergebnis; wir sehen uns die Domain an.

**Beeinflusst der Shop-Score meinen DSGVO-Score?**
Nein. Die Shop-Prüfpunkte haben im DSGVO-Gesamtscore das Gewicht null. Beide Werte stehen
nebeneinander.

**Ich verkaufe nur Dienstleistungen. Brauche ich das Label?**
Nein. Das Label ist beim Verkauf von Waren an Verbraucher Pflicht. Für reine Dienstleistungen und
digitale Inhalte genügt ein Hinweis auf die gesetzliche Gewährleistung ohne Label.

**Mein Shop richtet sich nur an Gewerbetreibende. Was passiert dann?**
Erkennt Hugo Anzeichen für einen B2B-Shop — Netto-Preise, ein Hinweis auf Gewerbetreibende,
eine Anmeldepflicht vor dem Preis —, zeigt er das Gewährleistungslabel nur als Information ohne
Bewertung an. Sicher unterscheiden kann er B2B und B2C nicht.

**Wie lange dauert ein Scan mit Shop-Prüfung?**
Im kostenlosen Tarif kommen rund 40 Sekunden dazu, bei Pro bis zu anderthalb Minuten — je nachdem,
wie viele Produktseiten geprüft werden und wie schnell Ihr Shop antwortet.

**Kann ich das Ergebnis weitergeben?**
Ja. Der PDF-Bericht enthält einen eigenen Abschnitt „Shop & Werbung“ mit dem Shop-Score und einer
Tabelle aller geprüften Produktseiten — geeignet für die Agentur, die Ihren Shop betreut, oder für
die Geschäftsführung.

**Wo bekomme ich die Anleitungen zum Beheben?**
Ab dem Pro-Tarif steht unter jedem Befund eine Anleitung für Ihr Shop-System — Shopware, Shopify,
WooCommerce, JTL und andere — samt Textbausteinen für das Label, den Herstellerblock, den
KI-Hinweis am Chat und den Link „Vertrag widerrufen“.
