---
title: Für Auftraggeber — Profile lesen
description: Wie Sie das Sicherheitsprofil eines Zulieferers lesen, was die Sichtbarkeitsstufen für Sie bedeuten, wie Sie das JSON in Ihren Prüfprozess übernehmen — und warum ein Profil eine Prüfung nicht ersetzt.
---

Wenn Sie Ihre Zulieferer prüfen — nach **§ 30 Abs. 2 Nr. 4 BSIG** (Umsetzung von Art. 21 Abs. 2
lit. d NIS2) oder weil **Art. 28 Abs. 1 DSGVO** von Ihnen verlangt, nur Auftragsverarbeiter
einzusetzen, die hinreichende Garantien bieten —, bekommen Sie zunehmend Antworten in Form eines
**Sicherheitsprofils**: eine Adresse statt einer ausgefüllten Tabelle.

Diese Seite erklärt, was Sie dort vorfinden. Wie Sie Zulieferer einladen und bewerten, steht unter
[Zulieferer verwalten](/lieferkette/zulieferer/).

## Wie Sie an ein Profil kommen

Ein Profil liegt immer unter `app.fraghugo.de/profil/<adresse>`. Den Link nennt Ihnen Ihr
Zulieferer — in der Antwortmail, im Angebot oder auf dem Deckblatt eines beantworteten
Fragebogens. Eine Suchfunktion über alle Profile gibt es bewusst nicht: Ob ein Unternehmen ein
Profil führt, ist dessen Sache.

## Was die Sichtbarkeitsstufen für Sie bedeuten

| Was Sie erleben | Was das heißt |
|---|---|
| Die Seite öffnet sich sofort | Das Profil ist **öffentlich**. |
| Der Link enthält einen langen Zusatz und funktioniert nur vollständig | Stufe **nur mit Link** — geben Sie ihn nur intern weiter, er ist der Schlüssel. |
| Sie werden nach Ihrer E-Mail-Adresse gefragt | Stufe **nach Nachweis**. Sie erhalten einen sechsstelligen Code, danach ist das Profil sieben Tage für Sie geöffnet. |
| „Nicht gefunden" | Das Profil ist privat, es existiert nicht, oder Ihr Link ist unvollständig. Welcher der drei Fälle vorliegt, sagt die Anwendung nicht — fragen Sie beim Zulieferer nach. |

In der Stufe **nach Nachweis** wird Ihr Zugriff protokolliert und ist für den Zulieferer sichtbar:
Adresse, Zeitpunkt. Das ist beabsichtigt und gehört zur Gegenleistung dafür, dass Sie Unterlagen
einsehen dürfen, die nicht öffentlich sind.

## Was Sie im Profil finden

Ansprechpartner für Sicherheit und Datenschutz, Zertifikate und Nachweise, Schulungs- und
Meldequote, einen Auszug der technischen und organisatorischen Maßnahmen, die Titel der geltenden
Richtlinien, die eingesetzten Auftragsverarbeiter, den Melde- und Notfallprozess, Angaben zu
Verfügbarkeit und Erreichbarkeit sowie den Verweis auf die Meldeseite für Schwachstellen. Jeder
Block ist vom Zulieferer einzeln freigeschaltet; oben steht der Stand.

Drei Dinge, auf die zu achten sich lohnt:

- **Zertifikate und eigene Nachweise stehen getrennt.** Einträge von unabhängigen Stellen
  (ISO/IEC 27001, ISO 9001, TISAX, SOC 2, BSI IT-Grundschutz) sind als solche gekennzeichnet,
  eigene Prüfergebnisse ebenfalls. Für Ihre Bewertung ist das der wichtigste Unterschied auf der
  ganzen Seite.
- **Abgelaufene Zertifikate erscheinen nicht.** Was Sie sehen, ist zum Stand des Profils gültig.
  Das Ablaufdatum steht dabei — notieren Sie es für die Wiedervorlage.
- **Fehlende Kennzahlen sind kein Mangel.** Schulungs- und Meldequote werden erst ab 25
  Beschäftigten ausgewiesen; darunter stünde eine Quote, die sich einzelnen Personen zuordnen
  ließe. Bei kleinen Zulieferern steht deshalb der Grund statt der Zahl. Fragen Sie die Quote in
  diesem Fall direkt ab, statt das Fehlen als Versäumnis zu werten.

## Das JSON in Ihrem Prüfprozess

Dieselbe Adresse mit der Endung `.json` liefert die Angaben strukturiert:

```
https://app.fraghugo.de/profil/<adresse>/json
```

- Es ist **JSON-LD** mit dem schema.org-Typ `Organization`; alles, wofür schema.org nichts
  vorsieht — Maßnahmen, Richtlinien, Auftragsverarbeiter, Kennzahlen, Prozesse, Verfügbarkeit —,
  steht in einem eigenen, benannten Namensraum.
- Zertifikate erscheinen als `EducationalOccupationalCredential`, der Aussteller als
  `recognizedBy`. Nur an dieser Stelle steht eine unabhängige Stelle — verlassen Sie sich für die
  Einordnung auf dieses Feld, nicht auf den Titel des Zertifikats.
- Das Feld `hugo:istSelbstauskunft` hat immer den Wert `true`. Wenn Ihr Prüfwerkzeug Quellen nach
  Belastbarkeit sortiert, ist das die Angabe, an der Sie es festmachen.
- Die Antwort wird eine Stunde zwischengespeichert. Für einen Tagesabgleich reicht ein Abruf.
- Ein verschlossenes Profil gibt maschinenlesbar **nichts** heraus — auch keine Teilangaben.

Für einen wiederkehrenden Abgleich genügt es, Adresse und Stand zu speichern und beim nächsten
Lauf zu vergleichen: Ändert sich der Stand nicht, hat der Zulieferer sein Profil nicht gepflegt.
Das ist eine brauchbare Frage für das nächste Gespräch.

## Ein Profil ist eine Selbstauskunft

:::caution[Was ein Profil leistet — und was nicht]
Ein Sicherheitsprofil ist die **Selbstauskunft** eines Unternehmens über sich selbst, erzeugt aus
dessen eigener Dokumentation. Es ist kein Audit, kein Testat und keine Bestätigung durch eine
unabhängige Stelle.

Belastbar ist daran, was von außen überprüfbar ist: ein Zertifikat mit Aussteller und Nummer, eine
erreichbare Meldeadresse, ein Prüfdatum. Alles andere ist eine Aussage, für die der Zulieferer
geradesteht.

Ein Profil ersetzt Ihre Prüfung nicht. Es macht sie schneller, weil Sie die immer gleichen
Grundfragen nicht mehr stellen müssen — und Ihre verbleibende Zeit auf das verwenden können, was
für Ihr konkretes Vorhaben zählt.
:::

## Verwandte Seiten

- [Zulieferer verwalten](/lieferkette/zulieferer/) — einladen, bewerten, Wiedervorlage
- [Auftraggeber-Dashboard](/lieferkette/dashboard/) — Status aller Zulieferer auf einen Blick
- [Eigene Fragen](/lieferkette/eigene-fragen/) — den Standardfragebogen um Ihre Punkte erweitern
- [Sicherheitsprofil](/lieferkette/sicherheitsprofil/) — dieselbe Sache aus Sicht des Zulieferers
