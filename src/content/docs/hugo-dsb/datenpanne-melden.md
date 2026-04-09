---
title: "Datenpanne – Was tun in den ersten 24 Stunden?"
description: "Eine Datenpanne muss innerhalb von 72h an die Datenschutzbehörde gemeldet werden. Bei NIS2 sogar innerhalb 24h ans BSI. So gehen Sie systematisch vor."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, IT-Leiter, DSB</span>
  <span><span class="label">Lesezeit:</span> 6 Minuten</span>
</div>

Eine **Datenpanne** ist jeder Vorfall, bei dem personenbezogene Daten unbeabsichtigt zugänglich werden, verloren gehen, manipuliert werden oder offengelegt werden. Die DSGVO verpflichtet Sie, sie **innerhalb von 72 Stunden** an die zuständige Datenschutzbehörde zu melden (Art. 33 DSGVO).

Wenn Sie zusätzlich NIS2-betroffen sind, kommt eine zweite Meldepflicht hinzu: **innerhalb von 24 Stunden** ans BSI. Mehr dazu im Artikel [Sicherheitsvorfall melden](/nis2/vorfall-melden/).

Diese Anleitung beschreibt, wie Sie mit Hugo DSB beide Meldepflichten in den richtigen Zeitfenstern erfüllen.

## Phase 1: Sofort (0–60 Minuten)

Sobald Sie von einer möglichen Datenpanne erfahren – egal ob durch einen Mitarbeiter, eine Beschwerde oder einen IT-Alarm – tun Sie diese drei Dinge:

1. **Schaden begrenzen** – Wenn der Vorfall noch läuft (Phishing, Ransomware), trennen Sie betroffene Systeme vom Netz
2. **Hugo DSB aufrufen** und **„Neue Datenpanne erfassen"** klicken
3. **Beweise sichern** – Screenshots, Logs, E-Mails, alles was später relevant sein könnte

## Phase 2: Dokumentation in Hugo DSB (1–4 Stunden)

Hugo DSB führt Sie durch ein **Incident-Formular** mit den Pflichtfeldern aus Art. 33 DSGVO:

### A: Was ist passiert?

- **Zeitpunkt** des Vorfalls (oder Zeitraum)
- **Zeitpunkt** der Entdeckung
- **Wer hat es gemeldet** (Mitarbeiter, Externer, System)
- **Kurzbeschreibung** in eigenen Worten

### B: Was ist betroffen?

- **Welche Datenkategorien** sind betroffen? (Stammdaten, Kontodaten, Gesundheitsdaten, etc.)
- **Wie viele Personen** sind betroffen? (geschätzt)
- **Welche Verarbeitungen** aus Ihrem VVT sind betroffen?

### C: Wie sind die Daten betroffen?

- **Vertraulichkeit** verletzt? (z. B. Daten an Dritte sichtbar)
- **Integrität** verletzt? (z. B. Daten manipuliert)
- **Verfügbarkeit** verletzt? (z. B. Daten verloren)

### D: Mögliche Folgen

- Was kann mit den Daten geschehen?
- Welche Schäden für die Betroffenen drohen?
- Identitätsdiebstahl? Reputationsschaden? Finanzieller Schaden?

### E: Bereits ergriffene Maßnahmen

- Was haben Sie schon getan?
- Wer wurde informiert?
- Sind die Daten noch verbreitet?

![Datenpannen-Formular im Hugo DSB](/screenshots/dsb-features.png)

## Phase 3: Risikobewertung (4–24 Stunden)

Hugo DSB rechnet automatisch ein **Risiko-Profil** aus, basierend auf Ihren Antworten:

- **Geringes Risiko** → Meldung an Behörde **nicht zwingend** (aber empfohlen)
- **Mittleres Risiko** → Meldung an Behörde **innerhalb 72h**
- **Hohes Risiko** → Meldung an Behörde **innerhalb 72h** **plus** Information der Betroffenen

Beispiele für die Einstufung:

| Vorfall | Risiko |
|---|---|
| Mail an falschen Kollegen, ohne sensible Inhalte | Niedrig |
| Zugriff auf Lohnliste durch unbefugten Mitarbeiter | Mittel |
| Ransomware mit Datenabfluss | Hoch |
| Verlust eines verschlüsselten Notebooks ohne sensible Daten | Niedrig |
| Verlust eines unverschlüsselten USB-Sticks mit Patientendaten | Hoch |

## Phase 4: Behörden-Meldung (innerhalb 72h)

Wenn die Risikobewertung **mittel oder hoch** ergibt, generiert Hugo DSB die offizielle **Meldung an die Aufsichtsbehörde**.

Hugo DSB:
- Wählt automatisch die **richtige Behörde** (basierend auf Ihrem Sitz)
- Befüllt das **Meldeformular** mit Ihren Daten
- Generiert ein **PDF**, das Sie an die Behörde senden
- Erinnert Sie an die **72-Stunden-Frist**

> ⚠️ **Wichtig:** Auch wenn Sie noch nicht alle Details kennen, **melden Sie trotzdem**. Eine unvollständige Meldung mit dem Hinweis „Details folgen" ist besser als eine verspätete Meldung. Sie können später nachreichen.

## Phase 5: Information der Betroffenen (bei hohem Risiko)

Bei hohem Risiko **müssen** Sie zusätzlich die Betroffenen informieren (Art. 34 DSGVO). Die Information muss enthalten:

- Was passiert ist
- Welche Daten betroffen sind
- Welche Folgen drohen
- Was Sie tun, um das zu mildern
- Was die Betroffenen selbst tun können
- Wen sie kontaktieren können

Hugo DSB hat **Vorlagen für Informationsschreiben** in Deutsch und Englisch.

## Phase 6: Nachbearbeitung

Nach Abschluss des Vorfalls dokumentieren Sie in Hugo DSB:

- **Wurzel-Ursache** – warum konnte das passieren?
- **Maßnahmen** – was haben Sie geändert, damit es nicht wieder passiert?
- **Lessons Learned** – was nehmen Sie für die Zukunft mit?

Diese Dokumentation ist Teil Ihres **Audit-Trails** und wichtig, falls die Behörde nachfragt.

## Häufige Datenpannen in der Praxis

- **Mail an falschen Empfänger** (häufigste Ursache, oft niedriges Risiko)
- **Verlust eines Notebooks** (Risiko hängt davon ab, ob verschlüsselt)
- **Phishing-Erfolg** (oft hohes Risiko, weil Login-Daten kompromittiert)
- **Ransomware mit Datenabfluss** (immer hohes Risiko)
- **Falsch konfigurierter Cloud-Speicher** (z. B. öffentlicher S3-Bucket)
- **Datenträger nicht ordnungsgemäß vernichtet** (z. B. alte Festplatten)
- **Zugriffsrechte falsch gesetzt** (Mitarbeiter A sieht Daten von Mitarbeiter B)

## FAQ

**„Was, wenn ich es nicht in 72h schaffe?"**
Sie können die Meldung **verspätet abgeben**, müssen aber begründen, warum. Verspätungen werden manchmal toleriert, manchmal mit Bußgeld geahndet. Im Zweifel: lieber zu früh und unvollständig melden, als zu spät.

**„Muss ich den Mitarbeiter melden, der die Panne verursacht hat?"**
Nein. Die Meldung an die Behörde betrifft den Vorfall, nicht die Person. Intern können Sie natürlich Konsequenzen ziehen – das ist ein arbeitsrechtliches Thema, kein DSGVO-Thema.

**„Was passiert nach der Meldung?"**
Die Behörde prüft den Fall. In den meisten Fällen passiert nichts weiter. Manchmal kommen Rückfragen. Bußgelder sind selten – außer bei groben Versäumnissen.

<div class="related-articles">

### Verwandte Artikel
- [Sicherheitsvorfall melden (NIS2)](/nis2/vorfall-melden/)
- [VVT anlegen](/hugo-dsb/vvt-anlegen/)
- [Mitarbeiter einladen](/hugo-dsb/mitarbeiter-einladen/)

</div>

<div class="cta-banner">
  <h3>Notfall? Wir helfen sofort.</h3>
  <p>Bei einer akuten Datenpanne erreichen Sie Nils direkt – nicht über ein Ticket-System.</p>
  <a href="https://meet.brevo.com/fraghugo/intro" class="cta-button">Notfall-Termin buchen →</a>
</div>
