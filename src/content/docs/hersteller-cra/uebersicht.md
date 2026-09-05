---
title: Hugo Hersteller (Cyber Resilience Act)
description: Was der Bereich abdeckt, was Hugo ISMS vorbehalten bleibt, was er kostet — und was wir ausdrücklich nicht für Sie tun.
---

Hugo Hersteller ist der Bereich für Unternehmen, die Software oder vernetzte Produkte in der
EU bereitstellen und deshalb unter die Verordnung (EU) 2024/2847 fallen — den Cyber Resilience
Act. Er bündelt die Pflichten, die an **Ihrem Produkt** hängen: Produktregister, Software-Stückliste,
Meldungen an das CSIRT, Schwachstellenrichtlinien, Fristen.

Sie finden ihn in der Anwendung unter *Hersteller & CRA* — die Startseite liegt auf
`/dsb/hersteller`.

:::note[Zwei Daten, nicht eines]
Der Cyber Resilience Act gilt ab dem **11. Dezember 2027**. Die Meldepflichten des Artikels 14
gelten bereits seit dem **11. September 2026** (Art. 71 Abs. 2). Die Meldepflicht erfasst dabei
auch Produkte, die vor dem 11. Dezember 2027 in Verkehr gebracht wurden (Art. 69 Abs. 3). Für
diese Bestandsprodukte greifen die übrigen Anforderungen erst, wenn sie nach dem 11. Dezember
2027 einer wesentlichen Änderung unterliegen (Art. 69 Abs. 2).
:::

## Die Bausteine

| Baustein | Wofür | Wo in der Anwendung |
|---|---|---|
| [Hersteller-Check](/hersteller-cra/hersteller-check/) | Rolle, Produktklasse, Pflichtenliste | `/dsb/hersteller/check` |
| [Produktregister](/hersteller-cra/produktregister/) | Stammdaten, Unterstützungszeitraum, Konformität, CE | `/dsb/hersteller/produkte` |
| [SBOM-Import](/hersteller-cra/sbom-import/) | Komponentenliste je Produktversion | `/dsb/hersteller/produkte` |
| [Meldeassistent](/hersteller-cra/meldung-erstellen/) | Frühwarnung, Meldung, Zwischen- und Abschlussbericht | `/dsb/hersteller/meldungen` |
| [Bereitschaft](/hersteller-cra/bereitschaft/) | Wer meldet, wer vertritt, wer ist nachts erreichbar | `/dsb/hersteller/bereitschaft` |
| [Richtlinien, CVD und security.txt](/hersteller-cra/richtlinien-cvd-security-txt/) | Schwachstellen-Handhabung, Offenlegung, Kontaktweg | `/dsb/hersteller/richtlinien` |
| [Fristen](/hersteller-cra/fristen/) | Kalender je Produkt, ICS-Export | `/dsb/hersteller/fristen` |
| [Prozessnachweis](/hersteller-cra/prozessnachweis/) | Nachweis-Paket und Ereignisprotokoll | `/dsb/hersteller/richtlinien` |

Dazu kommt eine öffentliche Seite: Ihre CVD-Seite unter `app.fraghugo.de/cvd/<ihr-kürzel>` mit
der dazugehörigen `security.txt`. Sie ist ohne Anmeldung erreichbar — dorthin schicken Sie
Menschen, die eine Schwachstelle melden wollen.

## Die Startseite

Oben stehen vier Kacheln: **Produkte** im Register, **offene Meldungen** mit der jeweils
nächsten Frist, der Stand der **Bereitschaft** und die **nächste Frist** über alle Produkte
hinweg. Darunter steht die Liste „Was jetzt zu tun ist" — abgeleitet aus dem, was fehlt: ein
Produkt ohne Unterstützungszeitraum, eine Meldung mit laufender Uhr, eine Richtlinie ohne Stand,
eine Bereitschaftsrolle ohne Person.

Die Liste ist kein Postfach. Sie leert sich, wenn die Angabe da ist — nicht, wenn jemand einen
Haken setzt.

## Für wen der Bereich gedacht ist

**Hersteller** ist, wer ein Produkt mit digitalen Elementen entwickelt oder entwickeln lässt und
unter eigenem Namen oder eigener Marke vermarktet — gegen Bezahlung, zur Monetarisierung oder
unentgeltlich (Art. 3 Nr. 13). Der mittlere Fall ist der, den man leicht übersieht: kostenlose
Software, die über Support, Dual-Lizenz oder eine Pro-Version Geld verdient.

Auch **Einführer und Händler** werden zu Herstellern, wenn sie unter eigenem Namen in Verkehr
bringen oder eine wesentliche Änderung vornehmen (Art. 21). Wer sonst wesentlich ändert, trägt
die Pflichten für den geänderten Teil — und für das ganze Produkt, wenn die Änderung dessen
Cybersicherheit insgesamt betrifft (Art. 22 Abs. 2).

**Reine Cloud-Dienste** fallen nicht unter den CRA, sondern unter NIS2. Erfasst ist
Datenfernverarbeitung nur, soweit ohne sie das Produkt eine seiner Funktionen nicht erfüllen
könnte (Art. 3 Nr. 2, Erwägungsgründe 11 und 12). Wer neben dem Webdienst eine App, einen
Desktop-Client oder einen Agenten ausliefert, ist dafür Hersteller — und die zugehörige
Backend-Schnittstelle wird dann mit erfasst.

Ob das auf Sie zutrifft, klärt der [Hersteller-Check](/hersteller-cra/hersteller-check/) in neun
Fragen.

## Was Hugo ISMS vorbehalten bleibt

Hugo Hersteller arbeitet am Produkt. Das Managementsystem darum herum gehört in
[Hugo ISMS](/isms-nis2/uebersicht/):

- Asset-Register mit CIA-Klassifikation und Schutzbedarfsfeststellung
- Risiko-Register mit den elementaren BSI-Bedrohungen
- ISO 27001 Annex A mit Reifegrad und Statement of Applicability
- Audit-Exporte und externer Auditor-Zugang

Und die Pflichten, die an Ihrer **Einrichtung** hängen — Registrierung beim Bundesamt,
Vorfallmeldung nach § 32 BSIG, Schulung der Geschäftsleitung — liegen in
[Hugo NIS2 Basis](/isms-nis2/nis2-basis/). Die beiden Meldeketten sind verschieden: NIS2 meldet
die Einrichtung, der CRA meldet das Produkt. Es kann sein, dass beides zugleich fällig wird.

## Preis und Laufzeit

**99 € im Monat oder 990 € im Jahr**, jeweils netto. Monatlich kündbar über das Stripe Customer
Portal unter *Einstellungen → Abonnement*. Keine Mindestlaufzeit, keine Einrichtungsgebühr.

Enthalten in **Hugo ISMS Enterprise**. Wer diesen Tarif hat, braucht Hugo Hersteller nicht
zusätzlich zu buchen.

## Was wir nicht tun

- **Wir melden nicht für Sie.** Die Uhr rechnet, der Export ist feldgenau vorbereitet — abgeben
  müssen Sie die Meldung selbst, über die Meldeplattform. Warum das so ist, steht unter
  [Meldung erstellen](/hersteller-cra/meldung-erstellen/).
- **Wir registrieren Sie nirgends.** Der Zugang zur Meldeplattform läuft über eine benannte
  Ansprechperson Ihres Unternehmens mit EU-Login. Diesen Schritt kann niemand für Sie tun.
- **Wir bewerten keine Konformität.** Wo eine notifizierte Stelle nötig ist, sagen wir es — sein
  können wir sie nicht. Die CE-Kennzeichnung bringen Sie an, und mit der EU-Konformitätserklärung
  übernehmen Sie die Verantwortung für die Konformität des Produkts (Art. 28 Abs. 4).
- **Wir ersetzen keine Rechtsberatung.** Zu jeder Einstufung und jeder Frist nennen wir die
  Fundstelle, damit Sie sie nachlesen können. Maßgeblich ist der Verordnungstext, nicht unsere
  Zusammenfassung.
- **Wir prüfen Ihren Quellcode nicht.** Die Software-Stückliste erzeugen Sie in Ihrer Pipeline;
  wir lesen sie ein und halten sie nach.

## Wo Sie anfangen

1. [Hersteller-Check](/hersteller-cra/hersteller-check/) ausfüllen — neun Fragen, danach wissen
   Sie Ihre Rolle und Ihre Produktklasse.
2. Das erste Produkt ins [Produktregister](/hersteller-cra/produktregister/) eintragen und den
   Unterstützungszeitraum festlegen.
3. Die [Bereitschaft](/hersteller-cra/bereitschaft/) besetzen. Das ist der Schritt, den man vor
   sich herschiebt und der im Ernstfall über die 24 Stunden entscheidet.
