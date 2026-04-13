---
title: "NIS2-Compliance-Dashboard verstehen"
description: "Das NIS2-Dashboard in Hugo DSB zeigt Ihren Compliance-Stand in 8 Kacheln. So lesen Sie Score, Pflicht-Status und To-Do-Liste richtig."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, Compliance-Beauftragte</span>
  <span><span class="label">Lesezeit:</span> 4 Minuten</span>
</div>

Wer NIS2-betroffen ist, hat **plötzlich viele Pflichten** – BSI-Registrierung, Vorfall-Meldung, Geschäftsführerschulung, Lieferketten-Sicherheit. Das NIS2-Dashboard in Hugo DSB zeigt Ihnen auf einen Blick, wo Sie stehen.

## Wo finde ich das Dashboard?

In Hugo DSB klicken Sie in der linken Navigation auf **„NIS2-Compliance"**. Das Modul ist nur freigeschaltet, wenn Sie im Onboarding angegeben haben, dass Sie NIS2-betroffen sind. Falls nicht: Schalten Sie es unter **„Einstellungen → Module"** frei.

## Der NIS2-Score (0–100)

Oben links sehen Sie eine Zahl: Ihren NIS2-Score. Er zeigt, wie weit Sie auf dem Weg zur Compliance sind.

| Score | Bedeutung |
|---|---|
| **0–30** | Kritisch. Sie haben mit fast nichts begonnen. |
| **30–60** | Auf dem Weg. Wichtige Pflichten sind noch offen. |
| **60–80** | Solide. Einzelne Punkte fehlen noch. |
| **80–100** | Bereit. Sie sind audit-fähig. |

> 💡 **„Was bedeutet 64 %?"**
> Es bedeutet: Sie haben rund zwei Drittel der Pflichten dokumentiert oder umgesetzt. Konkret: BSI-Registrierung erfolgt, ISMS in Aufbau, GF-Schulung absolviert, aber noch keine durchgeführte Lieferketten-Risikobewertung oder Notfall-Übung.

![NIS2-Dashboard in Hugo DSB](/screenshots/dsb-nis2-dashboard.png)

## Die acht Kacheln

Unter dem Score sehen Sie acht Kacheln. Jede entspricht einer der **acht Pflichten** aus §30 BSIG (Mindestmaß an Cybersicherheit):

### 1. Risikomanagement
- Risiken identifiziert?
- Bewertung dokumentiert?
- Maßnahmen abgeleitet?

### 2. Bewältigung von Sicherheitsvorfällen
- Notfallplan vorhanden?
- Eskalations-Prozess definiert?
- Meldewege eingerichtet?

### 3. Aufrechterhaltung des Betriebs
- Backup-Strategie?
- Wiederherstellungs-Tests?
- Notfall-Wiederanlauf-Plan?

### 4. Sicherheit der Lieferkette
- Lieferanten-Übersicht?
- Sicherheits-Anforderungen vereinbart?
- Audits durchgeführt? (Hier verbindet sich Hugo DSB mit [Hugo Shield](/hugo-shield/assessment-ausfuellen/))

### 5. Sicherheit in Erwerb, Entwicklung und Wartung
- Patch-Management?
- Sichere Entwicklung?
- Wartung dokumentiert?

### 6. Bewertung der Wirksamkeit
- Regelmäßige Audits?
- KPI-System?
- Berichts-Pflichten gegenüber GF?

### 7. Kryptographie und Verschlüsselung
- Verschlüsselungs-Standards definiert?
- Zertifikats-Management?
- Schlüssel-Verwaltung?

### 8. Personal-Sicherheit, Zutritt, Awareness
- Schulungsplan?
- Zugriffsmanagement?
- Hintergrund-Prüfungen?

Jede Kachel zeigt einen Status (**Grün/Gelb/Rot**) und einen Prozentwert.

## Die To-Do-Liste

Rechts neben den Kacheln sehen Sie eine **priorisierte Aufgabenliste**:

- 🔴 **BSI-Registrierung noch nicht abgeschlossen** → Frist: 17. Januar 2025 (überfällig!)
- 🔴 **GF-Schulung nach §38 BSIG noch nicht absolviert** → Frist: 17. Oktober 2024 (überfällig!)
- 🟡 **Lieferanten-Übersicht unvollständig** → 14 von 23 erfasst
- 🟡 **Notfall-Übung steht an** → Empfehlung: Q2/2026
- 🟢 **Patch-Management** dokumentiert
- 🟢 **MFA für privilegierte Accounts** eingeführt

Klick auf eine Aufgabe → Sie landen direkt im passenden Modul, das Sie bearbeiten müssen.

## Verbindung mit anderen Modulen

Das NIS2-Dashboard ist **kein isoliertes Modul**. Es liest Daten aus den anderen Hugo-DSB-Modulen:

- **VVT** und **TOMs** liefern den Status für „Risikomanagement" und „Personal-Sicherheit"
- **Datenpannen** liefern den Status für „Bewältigung von Sicherheitsvorfällen"
- **Hugo Shield** liefert den Status für „Sicherheit der Lieferkette"
- **Hugo Learn** liefert den Status für „Personal-Sicherheit, Awareness"

So müssen Sie nichts doppelt pflegen – die NIS2-Sicht ist automatisch aktuell.

## NIS2-Reports

Im Dashboard finden Sie auch den Button **„NIS2-Bericht generieren"**. Hugo DSB erstellt ein PDF mit:

- Aktueller Score und Trend
- Status aller acht Pflichten
- Offene Aufgaben
- Bereits umgesetzte Maßnahmen
- Empfehlungen für die nächsten 90 Tage

Das ist Ihr **Quartalsbericht für die Geschäftsführung**. Sie können ihn auch dem BSI oder Auditoren auf Anfrage vorlegen.

## FAQ

**„Mein Score ist 30 %. Was zuerst angehen?"**
Die roten Punkte. Wenn Ihre BSI-Registrierung noch nicht erfolgt ist, machen Sie das **heute**. Alles andere kann eine Woche warten.

**„Ich habe schon ein ISO 27001 – brauche ich das noch?"**
ISO 27001 deckt einen großen Teil der NIS2-Pflichten ab, aber nicht alle. Hugo DSB zeigt Ihnen die **Lücken** zwischen Ihrem ISO-Stand und NIS2.

**„Was, wenn ich nicht weiß, ob ein Punkt erfüllt ist?"**
Klicken Sie die Kachel an. Hugo DSB stellt Ihnen Ja/Nein-Fragen und schlägt automatisch Maßnahmen vor.

<div class="related-articles">

### Verwandte Artikel
- [BSI-Registrierung Schritt für Schritt](/nis2/bsi-registrierung/)
- [Vorfall melden (24h-Frist)](/nis2/vorfall-melden/)
- [GF-Schulung §38 BSIG](/nis2/gf-schulung/)

</div>

<div class="cta-banner">
  <h3>NIS2-Score in 30 Minuten verstehen</h3>
  <p>15 Minuten mit Nils. Wir gehen Ihren Score gemeinsam durch.</p>
  <a href="https://meet.brevo.com/fraghugo/intro" class="cta-button">Erstgespräch mit Nils →</a>
</div>
