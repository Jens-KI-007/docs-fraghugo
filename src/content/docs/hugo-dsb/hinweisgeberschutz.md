---
title: "Hinweisgeberschutz – Meldekanal einrichten"
description: "Das HinSchG verlangt einen Meldekanal für Hinweisgeber. Mit Hugo DSB richten Sie ihn DSGVO-konform und anonym in 30 Minuten ein."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer ab 50 Mitarbeitern, Compliance</span>
  <span><span class="label">Lesezeit:</span> 4 Minuten</span>
</div>

Das **Hinweisgeberschutzgesetz (HinSchG)** ist seit Juli 2023 in Kraft. Es verpflichtet Unternehmen ab **50 Mitarbeitern**, einen **internen Meldekanal** einzurichten, über den Hinweisgeber Verstöße melden können – anonym, geschützt, ohne Repressalien.

Wer keinen Kanal hat, riskiert Bußgelder bis 50.000 €.

## Wer ist betroffen?

- **Alle Unternehmen ab 50 Beschäftigten** (Vollzeit-Äquivalente)
- Unabhängig von Branche oder Rechtsform
- Kleinere Unternehmen können freiwillig einen Kanal einrichten

**Wichtig:** Die Schwelle „50 Mitarbeiter" wird **konzernweit** gezählt. Wenn Ihr Standort 30 Mitarbeiter hat, der Konzern aber 200, sind Sie betroffen.

## Was muss der Kanal leisten?

Das Gesetz verlangt:

- **Vertraulichkeit** – die Identität des Hinweisgebers wird geschützt
- **Anonyme Meldung möglich** – der Hinweisgeber muss seinen Namen nicht angeben
- **Zwei-Wege-Kommunikation** – die Bearbeitenden können nachfragen, der Hinweisgeber kann antworten
- **Eingangsbestätigung** innerhalb von 7 Tagen
- **Rückmeldung** zum Stand innerhalb von 3 Monaten
- **Dokumentation** aller Meldungen
- **Schutz vor Repressalien** für den Hinweisgeber

## Schritt 1: Modul aktivieren

In Hugo DSB öffnen Sie **„Einstellungen → Module"** und schalten **„Hinweisgeberschutz"** frei. Im Hinweisgeberschutz-Modul richten Sie Ihren Kanal ein.

## Schritt 2: Meldeseite konfigurieren

Hugo DSB stellt eine vorgefertigte Melde-Webseite bereit – unter einer URL wie:

```
hinweise.ihre-firma.de
```

(Die Subdomain richten Sie über Ihren DNS-Anbieter ein – Hugo DSB liefert die Anleitung.)

Sie passen an:

- **Logo** und **Firmenname**
- **Sprachen** (Deutsch, Englisch, ggf. weitere)
- **Themen-Auswahl** (Korruption, Diskriminierung, Datenschutz, Arbeitssicherheit, Steuerverstöße, etc.)
- **Disclaimer** und **Datenschutzhinweise**

![Hinweisgeberschutz-Modul in Hugo DSB](/screenshots/dsb-hinweisgeberschutz.png)

## Schritt 3: Bearbeitende benennen

Sie wählen mindestens **eine Person**, die Hinweise entgegennimmt. Diese Person muss:

- **Unparteiisch und unabhängig** sein
- **Nicht weisungsgebunden** in dieser Rolle
- **Geschult** sein im Umgang mit Hinweisen
- **Erreichbar** sein (E-Mail-Benachrichtigung bei neuen Meldungen)

In KMU ist das oft die **Geschäftsführung selbst** oder eine externe Person (Anwalt, Compliance-Berater).

## Schritt 4: Meldeprozess einrichten

Hugo DSB hat einen **vorgefertigten Workflow**:

1. **Eingang** – Hinweis kommt rein, Bearbeitende werden informiert
2. **Eingangsbestätigung** – automatisch nach 24 Stunden
3. **Triage** – Bearbeitende prüft: relevant? falscher Kanal? Sofortmaßnahme nötig?
4. **Untersuchung** – ggf. Rückfragen über das anonyme Postfach
5. **Maßnahmen** – Was wird getan?
6. **Rückmeldung** an den Hinweisgeber innerhalb 3 Monaten
7. **Dokumentation** für die Akte

Jeder Schritt wird protokolliert – revisionssicher.

## Schritt 5: Mitarbeiter informieren

Das Gesetz verlangt, dass alle Mitarbeiter **wissen**, dass der Kanal existiert. Hugo DSB liefert:

- Eine **Aushang-Vorlage** (PDF) für das schwarze Brett
- Eine **Mail-Vorlage** für die interne Information
- Einen **Schulungs-Baustein** in Hugo Learn („So nutzen Sie den Hinweisgeberkanal")

## Schritt 6: Anonyme Kommunikation

Der wichtigste Teil: Der Hinweisgeber soll **anonym bleiben können**. Hugo DSB nutzt dafür ein **anonymes Postfach-System**:

- Beim Absenden des Hinweises bekommt der Hinweisgeber einen **Code**
- Mit dem Code kann er die Meldeseite erneut besuchen und nachschauen, ob jemand geantwortet hat
- Die Bearbeitenden sehen **keine IP-Adresse, keine Browser-Daten, kein Cookie** – nur den Inhalt der Meldung

Selbst der Server-Betreiber (Hugo DSB) kann den Hinweisgeber nicht identifizieren.

## FAQ

**„Wir haben nur 30 Mitarbeiter – brauchen wir das?"**
Pflicht erst ab 50. Aber: Wenn Sie wachsen, ist es einfacher, den Kanal einzurichten **bevor** die Schwelle erreicht wird.

**„Können wir den Kanal extern auslagern?"**
Ja. Viele Unternehmen lagern den Bearbeitenden-Teil an einen externen Anwalt oder Compliance-Berater aus. Mit Hugo DSB können Sie diesen Externen als „eingeschränkten Nutzer" einladen.

**„Was, wenn ein Hinweis offensichtlich erfunden ist?"**
Sie dokumentieren das, machen einen Vermerk im Akteneintrag und schließen den Vorgang. Auch das ist eine zulässige Bearbeitung – nur sollten Sie dem Hinweisgeber das nachvollziehbar erklären.

**„Was dürfen wir mit den Daten der Bearbeitenden machen?"**
Die Mitglieder der Bearbeitenden-Stelle unterliegen der **Verschwiegenheit**. Sie dürfen Inhalte nur intern weitergeben, wenn das für die Bearbeitung erforderlich ist.

**„Wie lange müssen wir Hinweise speichern?"**
Mindestens **3 Jahre** nach Abschluss des Verfahrens. Bei laufenden gerichtlichen Verfahren länger.

<div class="related-articles">

### Verwandte Artikel
- [Mitarbeiter einladen](/hugo-dsb/mitarbeiter-einladen/)
- [Schulungen starten](/hugo-dsb/schulungen-starten/)
- [Datenpanne melden](/hugo-dsb/datenpanne-melden/)

</div>

<div class="cta-banner">
  <h3>Meldekanal in 30 Minuten einrichten</h3>
  <p>HinSchG-konform, anonym, Hugo DSB Professional 14 Tage gratis.</p>
  <a href="https://dsb.fraghugo.de/pricing" class="cta-button">14 Tage Pro testen →</a>
</div>
