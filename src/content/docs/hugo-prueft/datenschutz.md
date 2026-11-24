---
title: Datenschutz bei Hugo prüft
description: Was Hugo prüft speichert und was nicht, was an OpenAI geht, warum die Firma nie sieht, wer was geprüft hat — und was im AV-Vertrag steht.
head:
  - tag: meta
    attrs: { name: robots, content: noindex }
---

Mitarbeitende prüfen nur dann ehrlich, wenn sie sicher sein können, dass niemand mitliest. Deshalb ist Hugo prüft
so gebaut, dass möglichst wenig übrig bleibt. Diese Seite fasst zusammen, was mit einer geprüften Nachricht passiert.

## Die Firma sieht nie, wer was geprüft hat

Der Monatsblick und die Monatsmail zeigen nur Zahlen für die ganze Firma: wie viele Prüfungen, davon Betrug und
verdächtig, welche Arten, die häufigsten Betrugs-Domains, Chef-Rückfragen mit Ja, Nein oder ohne Antwort. Es gibt
keine Auswertung je Person, keine Rangliste und keine Punkte. Das ist auch für den Betriebsrat wichtig: Hugo prüft
liefert keine Daten über einzelne Personen.

Bei der Chef-Anruf-Bestätigung sehen natürlich die beiden Beteiligten, wer wen gefragt hat. Sagt die gefragte Person
*Nein*, bekommen Geschäftsführung und IT eine Mail über einen möglichen Chef-Betrug — mit Uhrzeit, ohne Inhalte.

## Was gespeichert wird — und was nicht

| Gespeichert je Prüfung | Nicht gespeichert |
|---|---|
| Firma (oder keine) | der Text der Nachricht |
| Weg: Mail, Handy, Meldeknopf, Melde-Postfach | Bilder, Fotos, Rechnungen |
| Art (z. B. Paket-SMS) und Urteil | wer geprüft hat |
| Kürzel der erkannten Merkmale, Zeitpunkt | Adressen der Empfänger |
| nur bei Betrug und Verdacht: die Domains von Absender und Links (etwa `dhl-zustellung-info.com`, ohne den Namen vor dem @) | |

Nach **13 Monaten** ist auch das gelöscht. Mit *Alles löschen* unter [Einrichten](/hugo-prueft/einrichten/#einstellungen)
löschen Sie die gezählten Prüfungen Ihrer Firma sofort.

Damit die Antwort per Mail zurückkommt, liest Hugo die Absenderadresse der weitergeleiteten Mail. Sie wird für
die Zuordnung zur Firma und den Versand der Antwort genutzt; in der gespeicherten Prüfung steht sie nicht.

## Was an OpenAI geht

Hugo prüft zuerst mit festen Regeln — etwa ob ein Link eine bekannte Marke nachahmt, wie alt eine Domain ist oder ob
ein Kurzlink das Ziel versteckt. Danach fasst eine KI von OpenAI das Ergebnis zusammen und liest Bilder.

* **Text wird vorher geschwärzt.** Namen, Telefonnummern und Kontodaten werden unkenntlich gemacht, bevor der Text an
  OpenAI geht.
* **Bilder gehen ungeschwärzt an OpenAI** — Bildschirmfotos, Fotos von Briefen und Rechnungen.
* **OpenAI kann Anfragen bis zu 30 Tage aufbewahren**, um Missbrauch zu erkennen. Danach werden sie gelöscht.

**KI abschalten:** Hat Ihre Firma die KI in den Einstellungen abgeschaltet, urteilt Hugo nur mit den festen Regeln.
Im Ergebnis steht dann: „KI ist in Ihrer Firma abgeschaltet — Urteil nur aus festen Prüfregeln.“ Fotos lassen sich
ohne KI nicht lesen; Text, Links und QR-Codes prüft Hugo weiter.

<img src="/screenshots/hugo-prueft/ergebnis-ki-aus-handy.webp" alt="Ergebnis von Hugo prüft auf dem Handy bei abgeschalteter KI, mit dem Hinweis „KI ist in Ihrer Firma abgeschaltet — Urteil nur aus festen Prüfregeln“" width="390" height="664" loading="lazy" />

## Links und Anhänge werden nie geöffnet

Hugo prüft nur den Namen der Adresse, auf die ein Link zeigt. Er ruft die Seite nicht auf — so merkt der Absender
nicht, dass jemand nachsieht, und ein Einmal-Link bleibt unbenutzt. Anhänge werden nicht ausgeführt; Rechnungen als
PDF oder Foto werden nur gelesen.

## Firmen-Link und Chef-Anruf

* Der **Firmen-Link** trägt seinen Schlüssel hinter einem `#`. Dieser Teil wird vom Browser nie an einen Server
  geschickt und taucht deshalb in keinem Protokoll auf. Wer ohne Anmeldung prüft, hinterlässt keinen Verlauf.
* Angemeldet merkt sich nur **Ihr eigenes Gerät** die letzten zehn Prüfungen (Urteil, Art, Zeit), nicht der Server.
* Für die **Chef-Anruf-Bestätigung** speichert Hugo je Gerät das Mitteilungs-Abo und den öffentlichen Teil des
  Passkeys. Fingerabdruck und Gesicht verlassen das Handy nie — die Prüfung macht das Gerät selbst.

## AV-Vertrag

Bevor jemand für Ihre Firma prüft, stimmt die Verwaltung beim [Einschalten](/hugo-prueft/einrichten/#1-einschalten)
dem Vertrag zur Auftragsverarbeitung „Hugo prüft“ zu (Art. 28 DSGVO). Fassung, Zeitpunkt und Person werden
gespeichert; das PDF lässt sich in der App jederzeit öffnen. Er nennt als Unterauftragnehmer:

| Unterauftragnehmer | Wofür |
|---|---|
| OpenAI Ireland Ltd | Beurteilung von Nachrichten, die Beschäftigte zur Prüfung einreichen; Text vorher geschwärzt, Bilder ungeschwärzt; Speicherung bei OpenAI bis zu 30 Tage zur Missbrauchserkennung |
| Resend | Versand der Antwortmails |
| Hetzner (Deutschland) | Server für Mail-Eingang und Datenbank |

Die übrigen technischen und organisatorischen Maßnahmen sind dieselben wie bei allen frag.hugo-Diensten, siehe
[AV-Vertrag mit frag.hugo](/erste-schritte/av-vertrag/).

## Siehe auch

* [Hugo prüft einrichten](/hugo-prueft/einrichten/)
* [Mail an Hugo weiterleiten](/hugo-prueft/mail-weiterleiten/)
* [Chef-Anruf-Bestätigung einrichten](/hugo-prueft/chef-anruf/)
* [Datenschutz & Sicherheit (FAQ)](/faq/datenschutz/)
