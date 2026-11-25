---
title: Chef-Anruf-Bestätigung einrichten
description: Ruft angeblich die Chefin an und will eine Überweisung? Mit Hugo prüft fragt die angerufene Person nach, die Chefin bestätigt mit Face ID oder Fingerabdruck. Einrichtung auf iPhone und Android.
---

Beim **Chef-Betrug** (auch CEO-Fraud) gibt sich jemand am Telefon, per Mail oder mit nachgemachter Stimme als Chefin
oder Chef aus und verlangt eine eilige Überweisung. Mit Hugo prüft fragt die angerufene Person mit einem Tipp nach.
Die echte Chefin bekommt auf ihrem Handy „Rufst du gerade an?“ und antwortet mit **Ja** oder **Nein** — bestätigt
mit Face ID, Fingerabdruck oder Geräte-PIN. Kommt keine Antwort, gilt: nicht bestätigt, nichts tun.

Es gibt dafür keine App aus dem Store und keine SMS. Alles läuft über `app.fraghugo.de`.

## Wer macht was

| Rolle | Wer | Braucht |
|---|---|---|
| **Verwaltung** | Hauptadministratoren | legt unter [Einrichten](/hugo-prueft/einrichten/#4-chef-anruf-bestätigung) fest, wer nachfragen darf und wer bestätigt |
| **Nachfragende** | z. B. Buchhaltung, Empfang | ein Konto bei frag.hugo |
| **Bestätigende** | z. B. Geschäftsführung | ein Konto und ein eingerichtetes Handy |

Neue Personen laden Sie direkt im Abschnitt *Chef-Anruf-Bestätigung* ein. Sie bekommen eine Mail mit einem Link
zur Anmeldung und belegen keinen Schulungsplatz.

## Handy einrichten (für Bestätigende)

Öffnen Sie auf Ihrem Handy `app.fraghugo.de`, melden Sie sich an und tippen Sie unter *Betrug prüfen* auf *Mein
Handy zum Bestätigen einrichten*. Die Seite führt Sie in bis zu vier Schritten durch:

<img src="/screenshots/hugo-prueft/handy-einrichten.webp" alt="Seite „Ihr Handy einrichten“ auf dem iPhone: „Schritt 1 von 4“, Karte „Zum Home-Bildschirm“ mit dem Satz „Ohne diesen Schritt kann das iPhone keine Mitteilungen zeigen“ und drei Bildern: in Safari auf Teilen tippen, „Zum Home-Bildschirm“ wählen, „Hinzufügen“ tippen" width="390" height="664" loading="lazy" />

1. **Zum Home-Bildschirm** — nur auf iPhone und iPad. Ohne diesen Schritt kann das iPhone keine Mitteilungen zeigen.
   In Safari unten auf *Teilen* tippen, *Zum Home-Bildschirm* wählen, *Hinzufügen* tippen. Öffnen Sie Hugo danach
   über das neue Symbol und machen Sie dort weiter. Auf Android und am Computer entfällt der Schritt.
2. **Mitteilungen erlauben** — Ihr Handy meldet sich, sobald jemand fragt. Lehnen Sie ab, kommt die Frage nur per
   Mail. Zusätzlich kommt jede Frage ohnehin auch per Mail.
3. **Mit Face ID bestätigen einrichten** — Ihr Gerät legt einen Passkey an: einen digitalen Schlüssel, der das Gerät
   nie verlässt. Nur Sie können damit eine Rückfrage beantworten. Er gilt nur für Rückfragen zu Chef-Anrufen, nicht
   für Ihre Anmeldung bei frag.hugo.
4. **Probe** — *Testfrage an mich senden*, einmal mit Face ID bestätigen, fertig.

Unten auf der Seite sehen Sie Ihre Geräte: ob Mitteilungen an sind, ob ein Passkey da ist und wann zuletzt etwas
zugestellt wurde. **Weiteres Gerät?** Öffnen Sie die Seite dort und gehen Sie die Schritte noch einmal durch —
Fragen gehen an alle eingerichteten Geräte.

| | iPhone / iPad | Android |
|---|---|---|
| Browser | Safari | Chrome |
| Mitteilungen | ab iOS 16.4, nur aus der Web-App auf dem Home-Bildschirm | direkt im Browser |
| Bestätigen mit | Face ID, Touch ID oder Gerätecode | Fingerabdruck, Gesichtserkennung oder Displaysperre |

**Handy verloren?** Entfernen Sie das alte Gerät auf derselben Seite unter *Ihre Geräte* (auch von einem anderen
Gerät aus) und richten Sie das neue Handy wie oben ein. Bis dahin kann die Verwaltung unter *Einrichten* den Haken
*Bestätigt Anrufe* bei Ihnen herausnehmen — dann gehen keine Fragen mehr an Sie.

## So läuft eine Rückfrage

**1. Nachfragen.** Die angerufene Person öffnet *Betrug prüfen → Chef-Anruf bestätigen lassen*, tippt auf die Person,
die angeblich anruft, wählt auf Wunsch den Anlass (Überweisung, Zugangsdaten, Daten herausgeben, Sonstiges) und
tippt auf *Jetzt fragen*. Das Gespräch kann dabei weiterlaufen.

<img src="/screenshots/hugo-prueft/rueckfrage-waehlen.webp" alt="Seite „Chef-Anruf bestätigen lassen“ auf dem Handy: unter „Wen fragen Sie?“ ist die Person „Abnahme Chef“ mit dem Hinweis „Aufs Handy und per Mail“ ausgewählt, darunter „Worum geht es?“ mit den Anlässen Überweisung, Zugangsdaten, Daten herausgeben und Sonstiges" width="390" height="664" loading="lazy" />

**2. Bestätigen.** Die gefragte Person bekommt eine Mitteilung aufs Handy und eine Mail. Ein Tipp öffnet die Frage
mit Anlass und Restzeit. *Ja, das bin ich* oder *Nein, das bin ich nicht* — beide Antworten werden mit Face ID,
Fingerabdruck oder Geräte-PIN bestätigt.

<img src="/screenshots/hugo-prueft/rueckfrage-antwort.webp" alt="Rückfrage auf dem Handy der gefragten Person: „Abnahme Fragende fragt: Rufst du gerade an?“, Anlass Überweisung, noch 2:56 Minuten, Knöpfe „Ja, das bin ich“ und „Nein, das bin ich nicht“, darunter der Hinweis, dass beide Antworten mit Face ID, Fingerabdruck oder Geräte-PIN bestätigt werden" width="390" height="786" loading="lazy" />

**3. Ergebnis.** Die nachfragende Person sieht die Antwort von selbst, ohne neu zu laden:

| Antwort | Was die nachfragende Person sieht |
|---|---|
| **Ja** | grün: Die Person hat um {Uhrzeit} bestätigt. Geht es um eine Überweisung, gilt trotzdem Ihr Vier-Augen-Prinzip. |
| **Nein** | rot: Legen Sie jetzt auf. Keine Zahlung, keine Gutscheincodes, keine Zugangsdaten — auch nicht, wenn erneut angerufen wird. Geschäftsführung und IT bekommen automatisch eine Mail. |
| **Keine Antwort in 3 Minuten** | gelb: Keine Bestätigung. Nichts überweisen, nichts herausgeben. Rufen Sie unter der Ihnen bekannten Nummer zurück. |

Die nachfragende Person kann die Frage zurückziehen. Eine Antwort nach Ablauf der drei Minuten zählt nicht mehr.

:::tip[Keine Antwort heißt: nichts tun]
Das Verfahren ist absichtlich so gebaut, dass Schweigen nie zu einer Zahlung führt. Ist die Chefin gerade im
Termin, wird eben zurückgerufen — über die bekannte Nummer, nicht über die, von der der Anruf kam.
:::

## Häufige Fragen

**Brauchen wir dafür eine App aus dem App Store?** Nein. Hugo prüft läuft im Browser und lässt sich auf dem iPhone
als Web-App auf den Home-Bildschirm legen.

**Was, wenn Mitteilungen nicht ankommen?** Jede Frage kommt zusätzlich per Mail. Der Knopf in der Mail öffnet
dieselbe Seite mit *Ja* und *Nein*.

**Wie viele Rückfragen gehen?** Bis zu 20 je Firma und Stunde. Mehr deutet auf etwas anderes hin — dann bitte
zurückrufen.

## Siehe auch

* [Hugo prüft einrichten](/hugo-prueft/einrichten/)
* [Datenschutz bei Hugo prüft](/hugo-prueft/datenschutz/)
* [Anruf-Drills (Hugo Learn)](/schulungen/anruf-drills/)
