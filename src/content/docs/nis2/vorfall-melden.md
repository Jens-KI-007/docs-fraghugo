---
title: "Sicherheitsvorfall melden (24h-Frist)"
description: "NIS2 verlangt die Meldung von Sicherheitsvorfällen ans BSI in 3 Stufen – 24h Erstmeldung, 72h Update, 30 Tage Abschlussbericht. So vermeiden Sie Fristverletzungen."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, IT-Leiter, Notfall-Team</span>
  <span><span class="label">Lesezeit:</span> 6 Minuten</span>
</div>

Wer NIS2-betroffen ist, hat im Vorfall **drei Fristen** parallel:

1. **24 Stunden** – Erstmeldung ans BSI
2. **72 Stunden** – Update mit ersten Erkenntnissen
3. **30 Tage** – Abschlussbericht

Zusätzlich gilt unverändert die **DSGVO-72h-Frist** für die Datenschutzbehörde, falls personenbezogene Daten betroffen sind.

Das ist eng – aber mit einem geübten Ablauf machbar. Diese Anleitung zeigt, wie Sie mit Hugo DSB alle Fristen einhalten.

## Was zählt als „Sicherheitsvorfall"?

Nach NIS2 ist ein Vorfall **alles, was die Verfügbarkeit, Vertraulichkeit, Integrität oder Authentizität** Ihrer Daten oder Dienste **gefährdet oder beeinträchtigt**. Konkret:

- Ransomware oder andere Malware
- Datenabfluss (auch nur Verdacht)
- DDoS-Angriffe
- Phishing-Wellen mit Erfolg
- Kompromittierte Admin-Accounts
- Manipulierte Backups
- Betriebsunterbrechungen durch Cyberangriffe
- Verlust kritischer Geräte (Server, Notebooks mit Admin-Zugang)

> ⚠️ **Wichtig:** „Erheblicher" Vorfall im Sinne der NIS2 ist nicht jeder Klick auf eine Phishing-Mail. Erheblich ist es, wenn der Vorfall Ihre **Diensterbringung beeinträchtigen** kann oder einen **wesentlichen Schaden** verursacht. Für die Bewertung gibt Hugo DSB Ihnen einen Wizard.

## Die 3 Stufen im Detail

### Stufe 1: Erstmeldung – innerhalb 24h

**Was muss drin sein?**
- Knappe Beschreibung: Was ist passiert?
- Wann wurde es entdeckt?
- Welche Dienste sind betroffen?
- Erste Einschätzung: kriminelle Tat? grenzüberschreitend?

**Format:**
- Über das BSI-Meldeportal (oder per Mail an `meldungen@bsi.bund.de`)
- Hugo DSB hat eine vorgefertigte **Meldekarte** mit den Pflichtfeldern

> 💡 **Tipp:** Die 24h-Erstmeldung darf **unvollständig** sein. Lieber mit „Wir wissen noch wenig, aber das hier sind die ersten Erkenntnisse" melden, als die Frist verpassen.

### Stufe 2: Update – innerhalb 72h

**Was muss drin sein?**
- Aktualisierter Stand
- Erste Bewertung der Auswirkungen
- Bisher ergriffene Maßnahmen
- Kompromittierungs-Indikatoren (IoCs), wenn bekannt

**Format:**
- Über das BSI-Portal (Folge-Meldung zur Erstmeldung)
- Hugo DSB liest die Erstmeldung und befüllt das Update-Formular vor

### Stufe 3: Abschlussbericht – innerhalb 30 Tagen

**Was muss drin sein?**
- Vollständige Beschreibung des Vorfalls
- Wurzel-Ursache
- Auswirkungen (technisch, wirtschaftlich, rechtlich)
- Ergriffene Maßnahmen
- Lessons Learned und Verbesserungen

**Format:**
- Strukturierter Bericht über das BSI-Portal
- Hugo DSB generiert eine Vorlage aus den vorherigen Meldungen

## So nutzen Sie Hugo DSB im Vorfall

### Phase 1: Vorfall erfassen (Minute 0)

In Hugo DSB öffnen Sie **„NIS2 → Vorfall melden"** und klicken auf **„Neuer Vorfall"**. Hugo zeigt einen großen **Countdown-Timer** mit den drei Fristen:

```
24h-Erstmeldung: noch 23h 47min
72h-Update:      noch 71h 47min
30-Tage-Bericht: noch 29 Tage
```

![Vorfall-Wizard mit Countdown](/screenshots/dsb-features.png)

So sehen Sie immer, was als Nächstes ansteht.

### Phase 2: Erstmeldung erstellen (innerhalb der ersten 12h)

Hugo DSB führt Sie durch ein Formular mit den Pflichtfeldern:
- Wann wurde der Vorfall entdeckt?
- Was ist passiert (Kurzbeschreibung)?
- Welche Systeme/Dienste sind betroffen?
- Erste Schadensschätzung (Verfügbarkeit, Vertraulichkeit, Integrität)
- Sind personenbezogene Daten betroffen? (→ parallele DSGVO-Meldung)
- Hat der Vorfall grenzüberschreitende Auswirkungen?

Klicken Sie auf **„Erstmeldung generieren"**. Hugo erstellt ein PDF und eine vorgefertigte Mail an das BSI. Sie senden ab.

### Phase 3: 72h-Update vorbereiten

Sobald die Erstmeldung raus ist, erinnert Hugo DSB Sie an das 72h-Update. Sie öffnen den Vorgang erneut und ergänzen die neuen Erkenntnisse. Hugo zeigt Ihnen, was sich im Vergleich zur Erstmeldung geändert hat – und generiert ein zweites PDF.

### Phase 4: Abschlussbericht erstellen

Innerhalb 30 Tagen erstellen Sie den **Abschlussbericht**. Hugo bündelt alle gesammelten Informationen und schlägt eine Struktur vor:

1. Zusammenfassung
2. Chronologie
3. Wurzel-Ursache
4. Auswirkungen
5. Maßnahmen
6. Lessons Learned

Sie ergänzen die fehlenden Punkte, generieren das PDF und senden es ans BSI.

## Unterschied DSGVO-Meldung vs NIS2-Meldung

| Punkt | DSGVO-Meldung | NIS2-Meldung |
|---|---|---|
| **Empfänger** | Datenschutzbehörde Ihres Bundeslandes | Bundesamt für Sicherheit in der Informationstechnik (BSI) |
| **Frist** | 72h | 24h Erstmeldung, 72h Update, 30 Tage Abschluss |
| **Auslöser** | Personenbezogene Daten betroffen | Erheblicher Sicherheitsvorfall (auch ohne PB-Daten) |
| **Inhalt** | Was, wer, wie viele, Folgen, Maßnahmen | Was, wann, betroffene Dienste, IoCs, Maßnahmen |
| **Pflicht zur Information der Betroffenen** | Bei hohem Risiko ja | Nicht direkt – aber kann sich aus Vertragspflichten ergeben |

> ⚠️ **Wichtig:** Beide Meldungen sind **unabhängig**. Sie machen ggf. **beide parallel**, nicht entweder/oder. Hugo DSB führt Sie automatisch durch beide Prozesse.

## Wer darf melden?

Die Meldung muss aus dem Unternehmen kommen, das beim BSI registriert ist. In der Praxis ist das:

- Der **Geschäftsführer** persönlich
- Der **IT-Leiter** oder **CISO** mit Vollmacht
- Der **dokumentierte Notfall-Ansprechpartner** aus der BSI-Registrierung

Externe Dienstleister (z. B. Ihr IT-Provider) können Sie unterstützen, aber die Meldung selbst muss aus Ihrem Haus kommen.

## Häufige Fehler

**Den Vorfall verschweigen, in der Hoffnung, dass ihn niemand bemerkt.**
Schlechte Idee. Wenn das BSI über andere Wege erfährt (Versicherer, Kunden, Presse), verschärft das die Folgen erheblich.

**Die 24h-Frist erst nach interner Untersuchung melden.**
Schlechte Idee. Die Frist beginnt mit der **Entdeckung**, nicht mit dem Verständnis. Lieber unvollständig melden, als verspätet.

**Externe Berater fragen, bevor man meldet.**
Berater sind hilfreich, aber sie dürfen Sie nicht von der Meldepflicht abbringen. Wenn Sie unsicher sind, **melden Sie**.

**Nur an die Datenschutzbehörde melden, nicht ans BSI.**
Häufiger Fehler bei Erstvorfällen. NIS2 verlangt **zusätzlich** zur DSGVO-Meldung eine BSI-Meldung.

<div class="related-articles">

### Verwandte Artikel
- [BSI-Registrierung](/nis2/bsi-registrierung/)
- [NIS2-Dashboard](/nis2/nis2-dashboard/)
- [Datenpanne melden (DSGVO)](/hugo-dsb/datenpanne-melden/)

</div>

<div class="cta-banner">
  <h3>Akuter Vorfall? Wir helfen sofort.</h3>
  <p>Im Notfall erreichen Sie Nils direkt – nicht über ein Ticket-System.</p>
  <a href="https://meet.brevo.com/fraghugo/intro" class="cta-button">Notfall-Termin buchen →</a>
</div>
