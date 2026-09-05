---
title: Hersteller-Check
description: Neun Fragen zu Rolle, Produktklasse und Pflichten — wie das Ergebnis zu lesen ist und wo seine Grenzen liegen.
---

Der Hersteller-Check unter `/dsb/hersteller/check` stellt neun Fragen und beantwortet daraus
drei Dinge: **welche Rolle** Sie nach dem Cyber Resilience Act haben, **in welche Klasse** Ihr
Produkt fällt und **welche Pflichten** sich daraus ergeben. Er dauert wenige Minuten und lässt
sich jederzeit wiederholen — für jedes Produkt einzeln, denn die Antworten können sich
unterscheiden.

## Die neun Fragen

| # | Frage | Warum sie gestellt wird |
|---|---|---|
| 1 | Welche Rolle haben Sie beim Produkt? | Hersteller, Einführer, Händler oder Verwalter quelloffener Software — daran hängt der ganze Rest (Art. 3 Nr. 13 und 14, Art. 21, Art. 22) |
| 2 | Wie stellen Sie das Produkt bereit? | Nicht „entgeltlich oder nicht", sondern **gegen Bezahlung, zur Monetarisierung oder unentgeltlich** (Art. 3 Nr. 13) — und ob das im Rahmen einer Geschäftstätigkeit geschieht (Art. 3 Nr. 22) |
| 3 | Was liefern Sie aus? | Software, Hardware, App, Client, Agent — und ob ein von Ihnen entwickelter Dienst dazugehört, ohne den das Produkt eine seiner Funktionen nicht erfüllen kann (Art. 3 Nr. 1 und 2) |
| 4 | Fällt Ihr Produkt unter einen der Ausnahme-Rechtsakte? | Medizinprodukte (VO 2017/745), In-vitro-Diagnostika (VO 2017/746), Kraftfahrzeuge **soweit VO 2019/2144 gilt**, Luftfahrtprodukte **soweit nach VO 2018/1139 zertifiziert**, Schiffsausrüstung (RL 2014/90/EU), identische Ersatzteile, nationale Sicherheit, Verteidigung und Verschlusssachen (Art. 2 Abs. 2 bis 4, 6 und 7) |
| 5 | Weist Ihr Produkt die Kernfunktionen einer Kategorie aus Anhang III auf? | Entscheidet über „wichtiges Produkt" — getrennt nach Klasse I und Klasse II (Art. 7) |
| 6 | Fällt es unter Anhang IV? | Sicherheitsboxen, Smart-Meter-Gateways, Chipkarten und ähnliche Sicherheitselemente — dann ist es ein kritisches Produkt (Art. 8) |
| 7 | Wo werden die Entscheidungen zur Cybersicherheit Ihrer Produkte überwiegend getroffen? | Das bestimmt Ihre Hauptniederlassung und damit Ihr zuständiges CSIRT — nicht der Handelsregistersitz (Art. 14 Abs. 7 UAbs. 2) |
| 8 | Ist Ihr Produkt ein Hochrisiko-KI-System nach Art. 6 der KI-Verordnung? | Dann greift die Verzahnung des Art. 12 — die CRA-Anforderungen wirken zugleich für Art. 15 KI-VO |
| 9 | Wann wurde das Produkt in Verkehr gebracht, und steht eine wesentliche Änderung an? | Trennt Bestand von Neuware (Art. 69 Abs. 2 und 3, Art. 3 Nr. 30) |

## Wie das Ergebnis zu lesen ist

### Rolle

Vier Ergebnisse sind möglich. **Hersteller** ist der Regelfall. **Einführer** und **Händler**
werden zu Herstellern, sobald sie unter eigenem Namen in Verkehr bringen oder wesentlich ändern;
wer wesentlich ändert, ohne die Marke zu wechseln, trägt die Pflichten für den geänderten Teil
und für das ganze Produkt, wenn die Änderung dessen Cybersicherheit insgesamt betrifft
(Art. 22 Abs. 2).

**Verwalter quelloffener Software** ist eine eigene Rolle mit reduzierten Pflichten: eine
überprüfbar dokumentierte Cybersicherheitsstrategie und Zusammenarbeit mit den
Marktüberwachungsbehörden (Art. 24 Abs. 1 und 2).

:::caution[Verwalter melden nicht freiwillig]
Für Verwalter quelloffener Software gilt die Meldepflicht des Art. 14 Abs. 1, soweit sie an der
Entwicklung des Produkts beteiligt sind (Art. 24 Abs. 3). Freiwillig ist nur die Meldung nach
Art. 15, die jedem offensteht. Dafür dürfen Verwalter keine CE-Kennzeichnung anbringen
(Erwägungsgrund 19), und Geldbußen sind gegen sie ausgeschlossen (Art. 64 Abs. 10 lit. b).
:::

### Produktklasse

| Ergebnis | Bedeutung | Fundstelle |
|---|---|---|
| weder wichtig noch kritisch | die Restkategorie — der größte Teil aller Produkte | Art. 7 im Umkehrschluss |
| wichtig, **Klasse I** | u. a. Identitätsmanagement, Browser, Passwort-Manager, VPN, Betriebssysteme, Router und Switches, Smart-Home-Produkte **mit Sicherheitsfunktionen**, vernetztes Spielzeug | Anhang III Klasse I |
| wichtig, **Klasse II** | nur vier Kategorien: Hypervisoren und Container-Runtimes, **Firewalls, IDS und IPS**, manipulationssichere Mikroprozessoren, manipulationssichere Mikrocontroller | Anhang III Klasse II |
| kritisch | Hardwaregeräte mit Sicherheitsboxen, Smart-Meter-Gateways und Geräte für fortgeschrittene Sicherheitszwecke, Chipkarten und ähnliche Sicherheitselemente | Anhang IV |

Zwei Punkte, an denen sich die meisten verschätzen:

- **Firewalls sind Klasse II, nicht Klasse I.** Der Unterschied ist teuer: An der
  Konformitätsbewertung von Klasse-II-Produkten ist **stets** ein Dritter beteiligt, auch wenn
  Sie harmonisierte Normen vollständig anwenden (Art. 32 Abs. 3, Erwägungsgrund 91).
- **Eine Maschinensteuerung ist kein wichtiges Produkt.** Industriesteuerungen stehen nicht in
  Anhang III. Wichtig wird ein Produkt nur, wenn es die **Kernfunktionen** einer gelisteten
  Kategorie aufweist (Art. 7 Abs. 1). Und die Integration einer solchen Komponente macht das
  umgebende Produkt für sich genommen nicht zum wichtigen Produkt.

„Standard" oder „Standardprodukt" verwenden wir in der Oberfläche als Kurzform. Im
Verordnungstext kommt das Wort nicht vor — dort heißt es „weder wichtig noch kritisch".

### Pflichtenliste

Aus Rolle und Klasse leitet der Check ab, was für Sie gilt: Unterstützungszeitraum,
Software-Stückliste, Strategie zur koordinierten Offenlegung, Kontaktadresse, zentrale
Anlaufstelle, Meldewege, Konformitätsweg, CE. Jeder Eintrag nennt seine Fundstelle und verlinkt
den Ort in der Anwendung, an dem er abgearbeitet wird.

Für **Bestandsprodukte** — in Verkehr gebracht vor dem 11. Dezember 2027 — bleibt die Liste
kurz: Es gilt die Meldepflicht des Art. 14 (Art. 69 Abs. 3), der übrige Katalog erst bei der
nächsten wesentlichen Änderung (Art. 69 Abs. 2).

## Grenzen der Einschätzung

:::caution[Der Check ist eine Vorsortierung, keine Rechtsauskunft]
Er arbeitet mit Ihren Angaben und mit dem Wortlaut der Verordnung. Er kennt Ihr Produkt nicht.
:::

Drei Stellen, an denen er bewusst zurückhaltend antwortet:

- **Die Kategorien der Anhänge III und IV werden erst durch Rechtsakte technisch beschrieben.**
  Die Kommission legt diese Beschreibungen per Durchführungsrechtsakt fest (Art. 7 Abs. 4); die
  Listen selbst kann sie per delegiertem Rechtsakt ändern (Art. 7 Abs. 3, Art. 8 Abs. 2). Bis
  dahin ist die Zuordnung eine Auslegung des Kategorienamens.
- **Der Kernfunktions-Test ist eine Wertung.** Ob Ihr Produkt „die Kernfunktionen" eines VPN oder
  eines Identitätsmanagementsystems aufweist, entscheidet niemand automatisch. Der Check fragt
  danach, er misst es nicht.
- **Sitzen Sie außerhalb der EU, sind Sie trotzdem erfasst.** Hersteller ohne Hauptniederlassung
  in der Union melden nach einer Rangfolge: Land des Bevollmächtigten, sonst des Einführers,
  sonst des Händlers, sonst das Land mit den meisten Nutzern (Art. 14 Abs. 7 UAbs. 3). Der Check
  zeigt diese Kaskade an, wählt aber nicht für Sie aus.

Wenn Frage 8 ein Hochrisiko-KI-System ergibt, verweist das Ergebnis auf
[Hugo KI](/ki-compliance/uebersicht/). Nach Art. 12 gelten solche Produkte als konform mit den
Cybersicherheitsanforderungen des Art. 15 KI-VO, wenn sie die grundlegenden Anforderungen des
Anhangs I Teil I erfüllen, die Verfahren dem Anhang I Teil II entsprechen und beides in der
EU-Konformitätserklärung nachgewiesen ist. Die Arbeit fällt also einmal an, nicht zweimal.
