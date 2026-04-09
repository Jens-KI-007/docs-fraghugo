---
title: "Maßnahmenplan – So verbessern Sie Ihren Score"
description: "Im Hugo Shield Premium-Tarif bekommen Sie einen KI-generierten Maßnahmenplan. So setzen Sie ihn Schritt für Schritt um und tracken den Fortschritt."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Zulieferer (Premium-Tarif)</span>
  <span><span class="label">Lesezeit:</span> 5 Minuten</span>
</div>

Sie haben das Assessment ausgefüllt, kennen Ihren Score – und wissen, dass Sie besser werden sollten. Aber wie? Der **Maßnahmenplan** im Hugo Shield Premium-Tarif gibt Ihnen eine konkrete Antwort: priorisiert, mit Aufwandsschätzung, mit Schritt-für-Schritt-Anleitungen.

## Wie der Plan entsteht

Hugo Shield analysiert Ihre Antworten und identifiziert die **größten Hebel**:

- **Wo verlieren Sie am meisten Punkte?**
- **Wo ist die Umsetzung am schnellsten?**
- **Wo ist der Aufwand-Nutzen am besten?**

Daraus generiert die KI einen Plan mit **10 bis 20 konkreten Maßnahmen**, sortiert nach Priorität.

![Maßnahmenplan Dashboard](/screenshots/shield-features.png)

## Aufbau einer Maßnahme

Jede Maßnahme im Plan enthält:

- **Titel** – kurz und konkret (z. B. „MFA für alle Admin-Accounts einführen")
- **Begründung** – warum das wichtig ist
- **Aufwand** – Stunden oder Tage
- **Kosten** – ungefähre Kostenangabe (oft 0 €)
- **Score-Effekt** – wie viele Punkte Sie gewinnen
- **Schwierigkeit** – einfach / mittel / schwer
- **Schritt-für-Schritt-Anleitung** – wie Sie es konkret umsetzen
- **Verantwortlicher** – wer es bei Ihnen tun sollte
- **Status** – offen / in Bearbeitung / erledigt / verschoben

## Beispiele typischer Maßnahmen

### Maßnahme 1: MFA für Admin-Accounts (1 Tag, +8 Punkte)

**Warum:** Ein kompromittiertes Admin-Konto ohne MFA ist eine der häufigsten Ursachen für Datendiebstahl.

**Wie:**
1. Liste aller Admin-Accounts erstellen
2. Microsoft 365: MFA über Azure AD aktivieren (15 Min Konfiguration)
3. Andere Tools (DATEV, Salesforce, etc.): MFA in den Sicherheits-Einstellungen aktivieren
4. Mitarbeiter informieren und unterstützen
5. Test durchführen (Login mit MFA klappt?)

**Aufwand:** ½ Tag Konfiguration + ½ Tag Mitarbeiter-Support
**Kosten:** 0 € (in den meisten Tools enthalten)
**Score-Effekt:** +8 Punkte

### Maßnahme 2: Backup-Wiederherstellung testen (½ Tag, +5 Punkte)

**Warum:** Backups sind nutzlos, wenn die Wiederherstellung nicht funktioniert. Viele Unternehmen merken das erst, wenn es ernst wird.

**Wie:**
1. Eine zufällige Datei aus dem Backup wiederherstellen (in einem Testordner)
2. Inhalt prüfen: ist die Datei intakt?
3. Zeit messen: wie lange dauert es?
4. Ergebnis dokumentieren
5. Bei Problemen: Backup-Strategie überarbeiten

**Aufwand:** 2–4 Stunden
**Kosten:** 0 €
**Score-Effekt:** +5 Punkte

### Maßnahme 3: Phishing-Awareness-Schulung (2 Wochen, +12 Punkte)

**Warum:** 95 % aller erfolgreichen Cyberangriffe beginnen mit einer Phishing-Mail. Geschulte Mitarbeiter sind die wirksamste Abwehr.

**Wie:**
1. Schulungs-Tool wählen (oder die kostenlose [Hugo Learn Schulung](/hugo-dsb/schulungen-starten/) nutzen)
2. Alle Mitarbeiter einladen
3. Erinnerungen für Nicht-Teilnehmer setzen
4. Quiz-Ergebnisse dokumentieren
5. Zertifikate ablegen

**Aufwand:** 2 Stunden Setup + ~15 Min pro Mitarbeiter
**Kosten:** 0 € (mit Hugo Learn) oder 30–80 €/MA bei externen Anbietern
**Score-Effekt:** +12 Punkte

## Plan abarbeiten

Im Maßnahmenplan-Dashboard sehen Sie alle Maßnahmen als Liste. Sie können:

- Eine Maßnahme **„starten"** → Status wird auf „in Bearbeitung" gesetzt
- Eine Maßnahme **„abschließen"** → Status wird auf „erledigt" gesetzt
- Eine Maßnahme **„verschieben"** → mit Begründung
- Verantwortliche **zuweisen** → die Person bekommt eine Mail

Hugo Shield verfolgt automatisch Ihren Fortschritt und zeigt Ihnen einen **Score-Vorschau**:

> „Wenn Sie alle aktuell offenen Maßnahmen umsetzen, steigt Ihr Score von 45 auf 78."

## KI-Chat für schnelle Fragen

Im Premium-Tarif haben Sie zusätzlich einen **KI-Chat**. Sie können direkt fragen:

- „Wie aktiviere ich MFA in Office 365?"
- „Wir haben kein VPN – brauchen wir das?"
- „Was ist ein Notfallplan und wie schreibe ich einen?"

Die KI antwortet in einfacher Sprache, gibt konkrete Schritte und verweist auf weiterführende Quellen. So müssen Sie nicht für jede Detail-Frage einen externen Berater anrufen.

## Score-Verbesserung sichtbar machen

Sobald Sie eine Maßnahme als erledigt markieren, aktualisiert Hugo Shield den **simulierten Score**. Sie sehen:

- Aktueller Score: 45
- Maßnahmen erledigt: 7 von 18
- Simulierter Score nach allen Maßnahmen: 78
- Geschätzter Aufwand bis Ziel: 18 Tage

Wenn Sie das nächste Re-Assessment machen, vergleichen Sie den simulierten mit dem tatsächlichen Score – das zeigt, wie gut die Umsetzung war.

## Plan exportieren

Sie können den Maßnahmenplan als **PDF exportieren**. Praktisch für:

- Interne Besprechungen
- Vorlage beim Auftraggeber („Hier ist unser Plan – wir verbessern uns")
- Compliance-Akte

## FAQ

**„Wer setzt die Maßnahmen um?"**
Sie selbst, Ihre IT, Ihr externer Dienstleister – wer auch immer für IT-Sicherheit verantwortlich ist. Hugo Shield gibt Ihnen den Plan, die Umsetzung müssen Sie selbst machen (oder beauftragen).

**„Was, wenn eine Maßnahme nicht zu uns passt?"**
Sie können sie als „Nicht relevant" markieren – mit Begründung. Hugo Shield zieht sie aus dem Score-Effekt heraus.

**„Was kostet das?"**
Premium kostet 19 € pro Monat. Wenn Ihr Auftraggeber Sie eingeladen hat, können Sie auch im Free-Tarif bleiben – der Maßnahmenplan ist nicht enthalten, aber Sie sehen alle Schwächen und können selbst recherchieren.

**„Wie lange dauert es, einen Score von 45 auf 80 zu bringen?"**
Erfahrungsgemäß 3 bis 6 Monate, wenn Sie konsequent jede Woche etwas tun. Die größten Sprünge gibt es in den ersten 4 Wochen – „Quick Wins" sind oft schnell umsetzbar.

<div class="related-articles">

### Verwandte Artikel
- [Score verstehen](/hugo-shield/score-verstehen/)
- [Re-Assessment](/hugo-shield/re-assessment/)
- [Assessment ausfüllen](/hugo-shield/assessment-ausfuellen/)

</div>

<div class="cta-banner">
  <h3>Maßnahmenplan im Premium-Tarif</h3>
  <p>19€ im Monat – mit KI-Chat, Anleitungen und Express-Re-Assessment.</p>
  <a href="https://shield.fraghugo.de/pricing" class="cta-button">Premium testen →</a>
</div>
