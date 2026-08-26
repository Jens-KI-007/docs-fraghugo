---
title: Awareness — Support-Fälle
description: Einladung erneut senden, Person deaktivieren, Plätze aufstocken — und woran Sie erkennen, wann frag.hugo übernimmt.
---

Die meisten Rückfragen sind zwei: „Mein Mitarbeiter hat keine Einladung bekommen" und „Die
Mails landen im Spam". Beide lassen sich in der Mandanten-Konsole beantworten, ohne dass
jemand bei frag.hugo nachfragen muss.

## Die Support-Sicht

Unter **Simulation → Mandanten** sehen Sie je Kunde: wie viele Personen eingeladen wurden, wie
viele sich angemeldet haben, wann die letzte Zustellprüfung war und ob der nächtliche Abgleich
durchgelaufen ist. Preise und Abrechnungszahlen erscheinen dort **nicht** — dafür gibt es die
Vertriebssicht.

Was Sie in **keiner** Sicht sehen: welche einzelne Person auf eine Übungs-Mail geklickt hat.
Das ist keine Einstellung, die man umlegen kann. Wenn ein Kunde danach fragt, ist die Antwort:
Diese Auswertung gibt es nicht — auch nicht für ihn selbst, und genau deshalb stimmt sein
Betriebsrat dem Verfahren zu.

## Die häufigsten Fälle

**„Ich habe keine Einladung bekommen."**
Zuerst den Status in der Konsole nachsehen. Steht die Person auf *eingeladen*, ist die Mail
raus — dann liegt es am Spamfilter (siehe [Zustellung](/partner/awareness-zustellung/)). Steht
sie gar nicht in der Liste, hat der Abgleich sie nicht übertragen: meist fehlt die dienstliche
E-Mail-Adresse im Quellsystem. Erscheint neben der Zahl *„+n offen"*, wartet die Einladung noch:
Es gehen höchstens 200 Mails je Abgleich raus, der Rest folgt in der nächsten Nacht.

**„Kann ich die Einladung noch einmal schicken?"**
Ja, im Kundenkonto unter *Schulungen → Mitarbeiter* je Person. Der Link ist eine Stunde gültig;
wer ihn zu spät öffnet, fordert einfach einen neuen an.

**„Ein Mitarbeiter hat das Unternehmen verlassen."**
Nichts zu tun, wenn die Person im Quellsystem inaktiv gesetzt wurde — der nächtliche Abgleich
legt sie still. Wichtig: **Gelöscht wird sie nicht.** Ihre Schulungsnachweise bleiben, weil
genau die bei einer Prüfung nachgefragt werden. Der Platz wird sofort wieder frei.

**„Wir haben mehr Leute als Plätze."**
Der Abgleich lehnt dann vollständig ab und ändert nichts — Sie sehen in der Konsole die Pille
*Plätze überschritten*. Plätze aufstocken, dann läuft der nächste Abgleich sauber durch. Ein
halb übertragener Personalstamm entsteht dabei nicht.

**„Seit Tagen tut sich nichts."**
Sehen Sie auf die Statusspalte. *Zustellung ungeprüft* heißt: Die Plattform hält bewusst an,
bis eine Prüfmail angekommen ist. *Abgleich gestört* nennt die Ursache im Klartext. *Noch nicht
gestartet* ist kein Fehler — die erste Übung läuft frühestens zwei Wochen nach der Einrichtung
und danach quartalsweise.

## Wann frag.hugo übernimmt

| Fall | Wer |
|---|---|
| Einladung erneut senden, Person still legen, Plätze aufstocken | Sie |
| Allowlisting beim Kunden | Sie, gemeinsam mit dessen IT |
| Neue Sende-Domain einrichten, DNS-Einträge | frag.hugo |
| Abgleich meldet dauerhaft einen Fehler, den der Klartext nicht erklärt | frag.hugo |
| Kunde fragt nach personenbezogener Auswertung | Sie — die Antwort steht oben |
| Betriebsrat verlangt Unterlagen | frag.hugo liefert Muster-Betriebsvereinbarung und Protokoll |

Für alles in der unteren Hälfte: `info@fraghugo.de` mit Kundenname und, wenn vorhanden, dem
Fehlertext aus der Konsole.
