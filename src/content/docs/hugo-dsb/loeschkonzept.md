---
title: "Löschkonzept einrichten"
description: "Ein Löschkonzept erfüllt Art. 5(1)(e) DSGVO. Mit Hugo DSB legen Sie Löschfristen pro Datenkategorie an, mit Vorlagen und Automatisierung."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, DSB, IT-Leiter</span>
  <span><span class="label">Lesezeit:</span> 5 Minuten</span>
</div>

Ein **Löschkonzept** beantwortet eine simple Frage: **„Wann werden welche Daten gelöscht?"** Klingt einfach, ist es aber selten. Die meisten Unternehmen haben Daten gespeichert, die seit 10 Jahren niemand mehr braucht – und genau das ist nach Art. 5(1)(e) DSGVO unzulässig.



![Löschkonzept-Modul in Hugo DSB](/screenshots/dsb-loeschkonzept.png)

## Warum brauche ich ein Löschkonzept?

Die DSGVO formuliert das **Speicherbegrenzungs-Prinzip**: Daten dürfen nur so lange gespeichert werden, wie sie für den ursprünglichen Zweck erforderlich sind. Danach müssen sie gelöscht werden.

Klingt logisch, ist in der Praxis aber kompliziert, weil:

- **Verschiedene Daten** haben **verschiedene Aufbewahrungspflichten** (Steuer 10 Jahre, Personalakte 10 Jahre nach Austritt, Kundendaten variabel)
- **Backups** enthalten alte Daten oft jahrelang
- **Niemand fühlt sich zuständig** dafür, Löschungen tatsächlich anzustoßen

Ein dokumentiertes Löschkonzept löst genau das: Es benennt **Verantwortliche, Fristen und Prozesse**.

## Schritt 1: Modul öffnen

In Hugo DSB klicken Sie auf **„Löschkonzept"** in der linken Navigation. Sie sehen ein leeres Dashboard mit dem Hinweis **„Noch keine Löschregeln angelegt"**.

Klicken Sie auf **„Neue Löschregel anlegen"** oder **„Aus Vorlage starten"**.

## Schritt 2: Mit Vorlagen starten

Hugo DSB hat eine Datenbank mit **Standard-Aufbewahrungsfristen** für die häufigsten Datenkategorien:

| Datenkategorie | Aufbewahrung | Rechtsgrundlage |
|---|---|---|
| Lohn- und Gehaltsunterlagen | 10 Jahre | §147 AO, §41 EStG |
| Personalakten | bis 3 Jahre nach Austritt | BGB, ggf. länger bei laufenden Verfahren |
| Bewerbungsunterlagen | 6 Monate | AGG-Klagefrist |
| Handels- und Geschäftsbriefe | 6 Jahre | §147 AO, §257 HGB |
| Buchungsbelege, Rechnungen | 10 Jahre | §147 AO, §14 UStG |
| Kundenstammdaten (B2B) | 10 Jahre nach letztem Auftrag | §147 AO |
| Newsletter-Anmeldungen | bis Widerruf | DSGVO Art. 7 |
| Bewerber-CV (mit Zustimmung) | 24 Monate | DSGVO Art. 6 |
| Server-Log-Dateien | 7 Tage | technisch erforderlich |
| Videoüberwachung | 72 Stunden | DSGVO Art. 6 |
| CRM-Lead-Daten | 3 Jahre nach letztem Kontakt | DSGVO Art. 6 |

Klicken Sie eine Vorlage an, und Hugo DSB fügt sie Ihrem Konzept hinzu. Sie können die Frist anpassen, wenn Ihre Branche etwas anderes vorschreibt.

## Schritt 3: Eigene Regeln ergänzen

Manche Daten sind branchen- oder firmenspezifisch. Beispiele:

- **Architekt:** Bauakten 30 Jahre (Gewährleistung)
- **Arztpraxis:** Patientenakten 10 Jahre, bei Röntgen 30 Jahre
- **Anwalt:** Mandatsunterlagen 6 Jahre nach Mandatsende
- **Spediteur:** Frachtpapiere 6 Jahre

Für solche Fälle legen Sie **eigene Regeln** an – mit Frist, Begründung (Gesetzes-Verweis) und Verantwortlichem.

## Schritt 4: Verknüpfung mit dem VVT

Bei jeder Verarbeitung in Ihrem [VVT](/hugo-dsb/vvt-anlegen/) muss die Löschfrist genannt werden. Hugo DSB schlägt automatisch passende Löschregeln vor und verknüpft sie. So entsteht ein **roter Faden** zwischen Verarbeitung und Löschung.

## Schritt 5: Verantwortliche benennen

Pro Löschregel benennen Sie eine verantwortliche Person:

- **Lohn-Daten** → Geschäftsführung oder HR-Leitung
- **Buchhaltung** → Steuerberater oder interne Buchhaltung
- **CRM** → Vertriebsleitung
- **Server-Logs** → IT-Leitung

Hugo DSB schickt diesen Personen eine **Erinnerung**, wenn eine Löschfrist näher rückt. So passiert die Löschung nicht „irgendwann", sondern systematisch.

## Schritt 6: Automatisierung (wo möglich)

Manche Löschungen können Sie automatisieren:

- **CRM-Daten:** Hubspot, Salesforce und Pipedrive bieten Auto-Delete nach Inaktivität
- **Newsletter-Empfänger:** Brevo und Mailchimp können nach X Monaten Inaktivität automatisch löschen
- **Bewerbungen:** Personio und Recruitee löschen automatisch nach 6 Monaten
- **Server-Logs:** Logrotate auf Linux-Servern

Hugo DSB dokumentiert, **welche Prozesse automatisiert sind** und welche manuell laufen. So sehen Sie auf einen Blick, wo Sie Aufwand reduzieren könnten.

## Schritt 7: Backup-Problematik dokumentieren

**Achtung – häufiger Fehler:** Sie löschen Daten im Live-System, aber sie sind noch in Backups. Das ist DSGVO-rechtlich okay, **wenn Sie es dokumentieren**:

> „Daten, die im Produktivsystem gelöscht wurden, verbleiben im Backup für maximal X Tage. Eine Wiederherstellung erfolgt nur, wenn die Daten weiterhin erforderlich sind, andernfalls werden sie auch im Backup nicht reaktiviert."

Hugo DSB hat dafür eine fertige Klausel, die Sie in Ihr Konzept übernehmen.

## FAQ

**„Was passiert, wenn ich keine Löschungen mache?"**
Bei einem Audit ist das ein klassischer Befund. Bei einer Beschwerde („Bitte löschen Sie meine Daten") und Sie das nicht können, drohen Bußgelder.

**„Was, wenn die Aufbewahrungspflicht länger ist als das Bedürfnis?"**
Dann archivieren Sie die Daten **getrennt** vom Produktivsystem (z. B. in einem Read-only-Archiv) und beschränken den Zugriff. So sind sie aufbewahrt, aber nicht mehr aktiv im Umlauf.

**„Wie oft sollte ich das Löschkonzept überprüfen?"**
Einmal jährlich. Hugo DSB erinnert Sie automatisch.

<div class="related-articles">

### Verwandte Artikel
- [VVT anlegen](/hugo-dsb/vvt-anlegen/)
- [TOMs dokumentieren](/hugo-dsb/toms-dokumentieren/)
- [AVV erstellen](/hugo-dsb/avv-erstellen/)

</div>

<div class="cta-banner">
  <h3>Löschkonzept in 1 Stunde anlegen</h3>
  <p>Mit Vorlagen, Verknüpfungen und automatischen Erinnerungen.</p>
  <a href="https://app.fraghugo.de/dsb/pricing" class="cta-button">14 Tage Pro testen →</a>
</div>
