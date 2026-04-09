# Usability-Findings docs.fraghugo.de

**Datum:** 2026-04-09
**Tester:** Claude (Chrome MCP, Live-Seite https://docs.fraghugo.de)
**Methode:** 6 Personas, jede mit konkretem Auftrag, Live-Browser-Test
**Status:** **Nur Findings — keine Code-Änderungen außer kritischem Sidebar-Bug**

---

## A — User-Feedback (vom Auftraggeber)

Der User hat zur Live-Seite folgende konkrete Kritik geäußert. Diese landet hier 1:1, weil sie schwerer wiegt als alle Persona-Tests.

| # | Kritik | Schweregrad |
|---|---|---|
| **A1** | Hero-Eyebrow „DOKUMENTATION & ANLEITUNGEN" ist redundant — die Seite IST eine Anleitungsseite. Kein User braucht diesen Hinweis. | **HOCH** |
| **A2** | Hero-Title „Anleitungen. Antworten. Sofort." hat nichts mit fraghugo zu tun und ist langweilig. Braucht etwas Netteres. | **HOCH** |
| **A3** | Im Hero fehlt ein **Bild** — z. B. ein Bild von Nils oder dem Team (wie auf der fraghugo.de Hauptseite mit dem Nils-Foto). | **HOCH** |
| **A4** | Button „Erste Schritte →": Pfeil-Icon ist **versetzt**, hängt nicht ordentlich am Text. | **HOCH** |
| **A5** | Button „Erstgespräch buchen": Calendar-Icon ist auch **versetzt**, sitzt nicht zentriert auf der Höhe des Texts. | **HOCH** |
| **A6** | Hero-Stats-Row „41 Anleitungen / 3 Produkte abgedeckt / 15 min bis zur ersten Antwort": **Wen interessiert das?** Komische Headers ohne Mehrwert für den Besucher. | **HOCH** |
| **A7** | „Drei Produkte. Eine Anleitung." wiederholt sich gefühlt mit dem Hero. Reduktion nötig. | MITTEL |
| **A8** | **Produkt-Karten haben oben kein Bild.** Statt der abstrakten Glow + Glyph + Floating-Tags sollen oben **echte Screenshots/Mockups** der jeweiligen App rein (Hugo Check / Hugo DSB / Hugo Shield). Die Screenshots existieren bereits in `public/screenshots/`. | **HOCH** |
| **A9** | „Top 6" ist gut. | OK |
| **A10** | „Schulung machen. 15 Minuten. Fertig." ist okay. | OK |
| **A11** | **KRITISCHER BUG:** Auf den Article-Seiten ist die linke Sidebar nicht klickbar — Links sind sichtbar, aber nichts reagiert auf Klicks. | **KRITISCH (gefixt)** |

---

## B — Kritischer Bug-Fix (vorab gefixt)

**Bug:** Sidebar-Links auf Article-Seiten nicht klickbar.

**Root Cause (mit Chrome DevTools verifiziert):** Mein eigenes CSS hatte `main, .main-frame, .content-panel, header, .sidebar, .right-sidebar-container { position: relative; z-index: 1; }`. Da `main-frame` im DOM nach der Sidebar kommt und beide den gleichen `z-index: 1` hatten, hat der `main-frame` die Sidebar visuell und für Click-Events überdeckt. Verifiziert via `document.elementFromPoint(centerOfLink)` → gab `DIV.main-frame` zurück statt `A`.

**Fix:** Sidebar bekommt jetzt expliziten `z-index: 10`, Header `z-index: 20`, main-frame bleibt `z-index: 1`. Nach Build, Deploy und Cache-Purge verifiziert: Links sind klickbar.

**Status:** ✅ **bereits live auf docs.fraghugo.de**

---

## C — Persona-Tests

### Persona 1: Karl — Geschäftsführer, 30 MA, sucht externen DSB

**Auftrag:** Karl ist über Google bei docs.fraghugo.de gelandet, weil er einen externen Datenschutzbeauftragten sucht. Er will wissen, ob frag.hugo das richtige Produkt ist.

**Was er gemacht hat:**
1. Lande auf docs.fraghugo.de
2. Klick auf „Hugo DSB" Karte → landet bei „Ihr DSB-Dashboard verstehen"
3. Verwirrt — er hat das Tool ja noch gar nicht
4. Geht zurück, klickt „Tarife & Preise"
5. Findet endlich Tarif-Tabelle und Hinweis „externer DSB kostet 200–800€/Monat"
6. Klickt auf „Erste Schritte" → findet endlich „Welches Produkt für wen?"

**Findings (Karl):**

| # | Finding | Kategorie |
|---|---|---|
| K1 | Karl klickt auf eine Produkt-Karte und landet **direkt im Tool-Tutorial** statt auf einer „Was ist Hugo DSB / Wer wir sind / Was bekommen Sie"-Übersicht. Vergleichbar mit: Auto-Werbung sehen, draufklicken, im Bedienungshandbuch der Klimaanlage landen. | **KRITISCH** |
| K2 | Hero-Tagline erwähnt „VVT", „NIS2-Score", „Datenpanne" — alles **Begriffe, die Karl nicht kennt**. Er fühlt sich nicht abgeholt. | **HOCH** |
| K3 | Karl will eigentlich „Was kostet ein externer DSB im Vergleich?" sehen. Diese Antwort steht in `tarife.md`, aber **versteckt** im Fließtext. Sollte Tarif-Vergleichs-Block oben prominenter sein. | MITTEL |
| K4 | Es fehlt eine **Landing-artige „Was wir für Sie tun"-Seite** als zweite Anlaufstelle nach der Index — als Brücke zwischen „Ich kenne frag.hugo nicht" und „Hier ist die Anleitung zum Tool". | **HOCH** |
| K5 | Das Wort „Mandanten-Admins" auf der DSB-Dashboard-Seite ist **unklar**. Was ist ein Mandant? | NIEDRIG |
| K6 | Karl ist überrascht, dass eine Doku-Seite „verkauft" — er erwartet hier Hilfe, nicht Marketing. Die Doku **ist** ein Vertriebskanal, sollte sich aber nicht so anfühlen. Aktuell wirkt sie zwischen beidem. | MITTEL |

---

### Persona 2: Robert — Neukunde, 85 MA, will DSB einrichten + Mitarbeiter einladen + Shield nutzen

**Auftrag:** Robert hat eben Hugo DSB gebucht. Er will das System einrichten, seine 85 Mitarbeiter zur Schulung einladen, und Hugo Shield für seine Zulieferer aufsetzen. Er ist jetzt gerade „Tag 1" als Kunde.

**Was er gemacht hat:**
1. Sucht in der Top-6-Liste „Mitarbeiter einladen" → **nicht da**
2. Klickt „Hugo DSB" Karte → landet auf Dashboard-Anleitung
3. Findet in der Sidebar „Mitarbeiter einladen" → klickt → ✅ richtige Seite
4. Will jetzt zu Hugo Shield → muss in Sidebar scrollen, findet „Zulieferer einladen" → ✅

**Findings (Robert):**

| # | Finding | Kategorie |
|---|---|---|
| R1 | Robert hat **kein „Onboarding-Pfad"** für Neukunden. Es gibt keinen Workflow „Tag 1 → Tag 2 → Tag 3" oder „Wenn Sie neu sind, machen Sie das in dieser Reihenfolge". Er muss selbst die richtigen Anleitungen finden. | **HOCH** |
| R2 | „Mitarbeiter einladen" und „Zulieferer einladen" sind **unter ihren Produkten versteckt** statt in einer Quick-Action-Liste „Was tue ich am Tag 1?". | **HOCH** |
| R3 | Robert sollte beim Einrichten **eine Checkliste** sehen können: „VVT angelegt? AVVs hochgeladen? TOMs dokumentiert? Mitarbeiter eingeladen? DSE generiert?". Diese Sicht gibt es nicht. | MITTEL |
| R4 | Article-Seiten haben „Vorherige / Nächste Seite" Buttons unten — gut. **Aber** die Reihenfolge ist die Sidebar-Reihenfolge, nicht eine logische Onboarding-Reihenfolge. Robert wechselt zwischen DSB und Shield, will aber linear durch jedes Produkt gehen. | MITTEL |
| R5 | Es gibt keine Möglichkeit, **Anleitungen abzuhaken** („Erledigt — weiter"). Bei 41 Artikeln bräuchte man Fortschritts-Tracking. | NIEDRIG |
| R6 | Cross-Referenzen zwischen DSB und Shield („Wenn Sie auch Shield nutzen, beachten Sie…") fehlen. | MITTEL |

---

### Persona 3: Ulrich — NIS2-Beauftragter, 150 MA, kein GF

**Auftrag:** Ulrich wurde im Unternehmen beauftragt, NIS2-Compliance herzustellen. Er hat noch nie was von frag.hugo gehört, sucht aber gezielt nach NIS2-Hilfe und ob das Tool für ihn passt.

**Was er gemacht hat:**
1. Lande auf docs.fraghugo.de
2. Sieht „NIS2" nur am Rand erwähnt (in der Tagline und in der Hugo-DSB-Karte)
3. Sieht in Top 6 immerhin „BSI-Registrierung" und „GF-Schulung §38 BSIG"
4. Klickt „BSI-Registrierung" → liest, findet es informativ
5. Will jetzt wissen: „Bin ich überhaupt betroffen?" → findet es **nicht** in der NIS2-Sektion
6. Suche in Sidebar: „NIS2-Betroffenheitscheck" ist unter **Hugo Check**, nicht NIS2 (Logikbruch)

**Findings (Ulrich):**

| # | Finding | Kategorie |
|---|---|---|
| U1 | **NIS2 hat keine eigene Hauptkarte** auf der Index, obwohl es ein eigenes Modul mit 4 Anleitungen ist. NIS2-Suchende werden zu Hugo DSB durchgereicht, was nicht intuitiv ist. | **HOCH** |
| U2 | „Bin ich NIS2-betroffen?" ist die **erste Frage** eines NIS2-Suchenden. Diese Anleitung liegt in Hugo Check (unter „NIS2-Betroffenheitscheck"), nicht in der NIS2-Sektion. **Logikbruch.** | **HOCH** |
| U3 | Es fehlt eine **NIS2-Roadmap**: „Wenn Sie betroffen sind, machen Sie das in dieser Reihenfolge: 1. Betroffenheit prüfen, 2. BSI-Registrierung, 3. GF-Schulung, 4. ISMS aufbauen, 5. Lieferkette prüfen". | **HOCH** |
| U4 | NIS2-Frist 17. Januar 2025 wird in der BSI-Registrierungs-Anleitung erwähnt — aber **nicht prominent** auf der Index als „Frist abgelaufen — was jetzt?"-Hinweis. | MITTEL |
| U5 | Ulrich ist nicht GF — der CTA „GF-Schulung §38 BSIG" könnte für ihn als Mitarbeiter irreführend sein („das mache ich nicht"). | NIEDRIG |

---

### Persona 4: Sandra — HR-Sachbearbeiterin, 1 MA-Sicht, will Schulung in 15 Min schaffen

**Auftrag:** Sandra hat eine E-Mail bekommen mit Magic-Link zur Datenschutz-Schulung. Sie hat versehentlich docs.fraghugo.de geöffnet (statt direkt in der Schulung) und will jetzt verstehen, was sie tun muss.

**Was sie gemacht hat:**
1. Lande auf docs.fraghugo.de
2. Scrollt herunter, sieht „Für Mitarbeiter" Section weit unten
3. Klickt „Schulung machen" → landet auf richtiger Anleitung
4. Liest, ist beruhigt: 15 Minuten, einfacher Magic-Link

**Findings (Sandra):**

| # | Finding | Kategorie |
|---|---|---|
| S1 | „Für Mitarbeiter" steht **ganz unten** auf der Index, weit nach Tools und Top 6. Mitarbeiter müssen scrollen. | MITTEL |
| S2 | Die linke Sidebar ist **gigantisch und überfordernd** für Mitarbeiter, die nichts mit den Tools zu tun haben. Sie sehen Hugo Check, Hugo DSB, NIS2, Hugo Shield — alles irrelevant für sie. | **HOCH** |
| S3 | Es gibt keinen **„Mitarbeiter-Modus"**, in dem nur die 4 Mitarbeiter-Artikel sichtbar sind — z. B. eine eigene Subdomain oder ein Mode-Switch. | MITTEL |
| S4 | Die Anleitung „Schulung machen" beginnt direkt am Punkt — gut. Sie ist beruhigend. ✅ | OK |
| S5 | Es fehlt ein **Mobile-First** Layout für Mitarbeiter, die das schnell auf dem Handy machen wollen. Aktuell ist es responsiv, aber die Doku-Atmosphäre wirkt nicht „Mitarbeiter-freundlich". | NIEDRIG |

---

### Persona 5: Markus — Webdesigner-Agentur, 5 MA, prüft Hugo Check Agentur für Pitches

**Auftrag:** Markus hat eine kleine Webdesign-Agentur. Er sucht ein Tool, mit dem er seinen Kunden DSGVO-Probleme zeigen und sie als Argument für einen Relaunch nutzen kann.

**Was er gemacht hat:**
1. Lande auf docs.fraghugo.de
2. Sieht „Hugo Check" Karte → klickt
3. Landet auf „Ersten Scan durchführen" → das ist nicht was er sucht
4. Geht in Sidebar zu „Konkurrenz-Vergleich (Agentur)"
5. Liest — perfekt, das ist der Pitch-Hebel

**Findings (Markus):**

| # | Finding | Kategorie |
|---|---|---|
| M1 | „Konkurrenz-Vergleich (Agentur)" ist eine **starke Story**, aber sie ist **versteckt**. Auf der Index gibt es keinen Hinweis „Sind Sie Agentur? Hier entlang". | MITTEL |
| M2 | Der Hugo-Check-Agentur-Tarif ist von der Index aus **3 Klicks** entfernt (Hugo Check Karte → Sidebar → check-tarife). | MITTEL |
| M3 | Es fehlt eine **„Für wen ist das?"-Sektion** auf der Index, die Agenturen als Zielgruppe direkt anspricht (neben „Geschäftsführer" und „Mitarbeiter"). | NIEDRIG |
| M4 | Die White-Label-Funktion ist erwähnt, aber nicht visuell demonstriert. Ein Mockup „So sieht Hugo Check mit Ihrem Logo aus" würde überzeugen. | NIEDRIG |

---

### Persona 6: Petra — Zulieferer, kein DSGVO-Vorwissen, hat Einladungs-Mail bekommen

**Auftrag:** Petra arbeitet in einem 12-Mann-Familienbetrieb (Verpackungslieferant). Sie hat eine E-Mail von Hugo Shield bekommen — angeblich soll sie ein „Cyber-Assessment" ausfüllen. Sie ist verunsichert: „Wer ist Hugo? Warum will jemand wissen, wie meine IT aufgebaut ist?". Sie googelt „hugo shield" und landet auf docs.fraghugo.de.

**Was sie gemacht hat:**
1. Lande auf docs.fraghugo.de
2. Verwirrt: Was ist das? Eine Doku?
3. Findet in der Top 6 „Lieferketten-Assessment ausfüllen" → klickt
4. Liest die ersten Absätze — endlich versteht sie, dass das eine NIS2-Pflicht ist und ihr Auftraggeber sie deshalb eingeladen hat

**Findings (Petra):**

| # | Finding | Kategorie |
|---|---|---|
| P1 | Es gibt **keinen schnellen „Was ist Hugo Shield und warum bin ich hier?"** Einstieg. Der Assessment-Artikel beantwortet das auf Seite 1 — aber Petra muss erst raten, wo sie hinklicken soll. | **HOCH** |
| P2 | Petra hat **Angst und Unsicherheit** — sie braucht Beruhigung, nicht Marketing. Der Tonfall ist gut, aber **ein eigener Bereich „Sind Sie Zulieferer? Sie sind hier richtig"** würde helfen. | **HOCH** |
| P3 | Petra sollte in 30 Sekunden verstehen: „Es ist kostenlos. Niemand bekommt Ihre Antworten. Es dauert 30 Min." — diese 3 Aussagen sollten **vor** dem Klick auf den Artikel auf der Index stehen. | **HOCH** |
| P4 | Petra ist nicht der GF und hat wenig IT-Vorwissen. Der Artikel ist okay verständlich, könnte aber noch einfacher beginnen („Was ist überhaupt eine Lieferkette im Cyber-Sinn?"). | NIEDRIG |
| P5 | Es fehlt eine **Vertrauens-Stufe**: Logos der Auftraggeber, die Hugo Shield nutzen, oder eine Aussage „Bereits X Zulieferer haben das ausgefüllt". | NIEDRIG |

---

## D — Cross-Persona Findings (was alle 6 betrifft)

### D1 — Hero kommuniziert nicht „Wer wir sind, was Sie bekommen" *(KRITISCH)*

Alle 6 Personas — auch die, die schon Kunden sind — würden vom Hero profitieren, wenn dort sofort klar wäre:
- **Wer:** Wir sind frag.hugo aus Hamburg, Datenschutz-Spezialisten
- **Was:** Drei Tools (Check / DSB / Shield) für drei Probleme
- **Für wen:** Geschäftsführer von KMU
- **Warum hier:** Hier finden Sie Anleitungen zu jedem Tool

Aktueller Hero-Title „Anleitungen. Antworten. Sofort." sagt nichts davon. Die Tagline erwähnt VVT/NIS2/Datenpanne, was nur Insider verstehen.

### D2 — Persönlichkeit fehlt *(HOCH)*

Auf fraghugo.de ist Nils Oehmichen prominent (Bild, Zitate, Persönlichkeit). Auf docs.fraghugo.de gibt es nur einen kleinen CTA „Erstgespräch mit Nils" ganz unten. Kein Bild, kein „Hi, ich bin Nils, hier finden Sie Antworten". Die Doku wirkt **anonym**, fraghugo wirkt **persönlich**. Das ist ein Brand-Bruch.

### D3 — Produkt-Karten ohne Bild *(HOCH — direkt vom User kritisiert)*

Die hp-card mit Glow + Glyph + Floating-Tags wirkt cool, aber abstrakt. **Echte App-Screenshots** würden sofort kommunizieren, was die Tools tun. Screenshots existieren bereits in `public/screenshots/`:
- `check-startseite.png`, `check-pricing.png`, `check-ergebnis-fullpage.png`
- `dsb-startseite.png`, `dsb-pricing.png`
- `shield-startseite.png`, `shield-pricing.png`

### D4 — Zentrale Index-Sektionen sind redundant *(MITTEL)*

- Hero sagt „Anleitungen. Antworten. Sofort."
- Sektion 2 sagt „Drei Produkte. Eine Anleitung."
- Hero-Stats sagt „41 Anleitungen, 15 min bis zur ersten Antwort"

Drei Mal das gleiche „Anleitungen / Antworten" Versprechen, ohne neue Information. Eine der drei Aussagen reicht.

### D5 — Es fehlt eine „Welcher Weg ist Ihrer?"-Brücke *(HOCH)*

Karl, Robert, Ulrich, Sandra, Markus und Petra haben **6 verschiedene Bedürfnisse** und sollten **6 verschiedene Pfade** durch die Doku haben. Aktuell gibt es nur einen Pfad: „Wähle ein Produkt → lies durch die Sidebar". 

Idee: Eine **Persona-Box** auf der Index:
- „Sie sind Geschäftsführer und prüfen, ob frag.hugo passt?" → Erste Schritte
- „Sie sind neu und wollen einrichten?" → DSB Onboarding
- „Sie sind NIS2-pflichtig?" → NIS2-Roadmap
- „Sie sind Mitarbeiter mit Schulungs-Einladung?" → Mitarbeiter-Bereich
- „Sie sind Zulieferer mit Assessment-Einladung?" → Hugo Shield Free
- „Sie sind Webdesign-Agentur?" → Hugo Check Agentur

### D6 — Mitarbeiter-Bereich ist im falschen Kontext *(MITTEL)*

Die Mitarbeiter-Anleitungen sind in derselben Doku wie die GF-Anleitungen. Mitarbeiter sehen die ganze Sidebar mit Hugo Check, DSB, Shield — überfordernd. Idee: eigener Tab oder versteckte Sektion.

### D7 — Kein Suchergebnis-Feedback *(NIEDRIG)*

Die Search-Funktion (oben rechts) funktioniert (Pagefind), aber wenn ein User nach „externer DSB" sucht, sollte ein Featured Snippet erscheinen: „Frag Hugo bietet einen externen DSB ab 49€/Monat — siehe Erste Schritte". Aktuell bekommt er nur eine Liste von Markdown-Treffern.

---

## E — Visuelle Bug-Liste

| # | Bug | Wo |
|---|---|---|
| V1 | Pfeil-Icon im „Erste Schritte"-Button ist visuell **versetzt** (nicht zentriert auf Text-Höhe) | Hero-Pill primary |
| V2 | Calendar-Icon im „Erstgespräch buchen"-Button ist visuell **versetzt** | Hero-Pill secondary |
| V3 | Hero-Stats-Row (41/3/15min) nimmt Platz weg, der wertvoller eingesetzt werden könnte (z. B. für ein Nils-Bild) | Hero |
| V4 | Produkt-Karten haben oben **kein echtes Bild** — nur Glow + Glyph | Section „Drei Produkte" |
| V5 | Kein Hero-Bild (z. B. Nils) | Hero |

---

## F — Was bereits gut ist

Damit das nicht nur eine Mängelliste wird:

| # | Was | Warum gut |
|---|---|---|
| ✅ G1 | Dunkles Theme im fraghugo-Brand | Konsistenz mit Hauptseite |
| ✅ G2 | DM Serif Display Headlines | Eleganz, fraghugo-typisch |
| ✅ G3 | Pill-Buttons in Amber + Teal | Brand-konform |
| ✅ G4 | Sidebar funktioniert (nach Bug-Fix) | Click-fähig, klare Hierarchie, aktive Items markiert |
| ✅ G5 | Article-Layout (Title, Meta-Pill, Lead, H2) | Sauber, lesbar |
| ✅ G6 | Article-Anleitungen sind inhaltlich hochwertig | Schritt-für-Schritt, FAQ, Verwandte Artikel |
| ✅ G7 | Pagefind-Suche funktioniert | Schneller als Algolia für 41 Artikel |
| ✅ G8 | Mobile-Layout funktioniert (Menu-Button vorhanden) | Responsive |
| ✅ G9 | Tagline der Mitarbeiter-Schulung-Anleitung („Falsch. Hugo Learn dauert 15 Min.") | Direkt, konkret, beruhigend |
| ✅ G10 | Tarif-Tabellen sind transparent und vollständig | Keine „auf Anfrage"-Pricing |

---

## G — Empfohlene Änderungen, sortiert nach Impact

### Sofort umsetzen (Quick Wins, hoher Impact)

1. **Pfeil/Icon in Buttons zentrieren** (V1, V2) — kosmetischer Fix, 5 Min CSS
2. **Hero-Stats entfernen oder durch Nils-Foto + Zitat ersetzen** (A6, V3, D2) — sofort umsetzbar, hoher Brand-Effekt
3. **Echte App-Screenshots in den Produkt-Karten** (A8, D3) — Screenshots existieren bereits
4. **Hero-Title + Tagline überarbeiten** (A1, A2, K2) — neue Story, kein „Anleitungen. Antworten. Sofort." mehr
5. **„Bin ich NIS2 betroffen?" als Top-Link in NIS2-Sektion** (U2) — entweder umorganisieren oder cross-linken

### Mittelfristig umsetzen (höherer Aufwand, hoher Impact)

6. **„Welcher Weg ist Ihrer?"-Persona-Box** auf der Index (D5) — neue Komponente, 3-4 Stunden
7. **Onboarding-Roadmap pro Produkt** (R1, R3, U3) — neue Übersichtsseite je Produkt
8. **Eigene Übersichtsseite je Produkt** statt direkt im Tool-Tutorial zu landen (K1, K4) — 3 neue Seiten
9. **Mitarbeiter-Bereich als eigene Sicht** (S2, D6) — größerer Eingriff, eigenes Layout

### Langfristig / nice to have

10. **Fortschritts-Tracking** (R5)
11. **Cross-Referenzen DSB ↔ Shield** (R6)
12. **Vertrauens-Stufe für Zulieferer** (P5)
13. **Featured Snippets in der Suche** (D7)

---

## H — Was ich NICHT empfehle zu ändern

Damit der Scope klar bleibt:

- ❌ Sidebar-Struktur als Ganzes — sie funktioniert, ist klar gegliedert
- ❌ Article-Inhalte selbst — Inhalte sind stark, nur Findbarkeit ist das Problem
- ❌ Pagefind-Suche durch Algolia ersetzen — überdimensioniert für 41 Artikel
- ❌ Light-Mode hinzufügen — fraghugo ist dark only, das passt
- ❌ Komplette Index neu denken — die Struktur (Hero → Cards → Topics → Mitarbeiter → CTA) ist okay, nur die Inhalte/Bilder müssen besser

---

## I — Test-Artefakte

Alle Screenshots aus den Persona-Tests liegen in `screenshots/`:

- `p1-karl-1-landing.png` ... `p1-karl-5-uebersicht.png` (Karl-Flow)
- `p2-robert-1-landing.png` ... `p2-robert-3-zulieferer.png` (Robert-Flow)
- `p3-ulrich-1-landing.png`, `p3-ulrich-2-nis2.png` (Ulrich-Flow)
- `p4-sandra-schulung.png` (Sandra)
- `p5-markus-konkurrenz.png` (Markus)
- `p6-petra-assessment.png` (Petra)
- `mobile-1-index.png`, `mobile-2-fullpage.png`, `mobile-3-article.png` (Mobile)

---

## J — Nächste Entscheidung (Auftraggeber)

Ich habe **nichts** außer dem kritischen Sidebar-Bug gefixt. Bevor ich weiterarbeite, brauche ich Deine Entscheidung:

1. **Soll ich die Quick Wins (G1–G5) umsetzen?** Das wären die direkten Fixes auf Deine Hauptkritik (Buttons, Stats, Bilder, Tagline, NIS2-Pfad).
2. **Oder zuerst die mittelfristigen Themen (G6–G9)?** Persona-Box, Onboarding-Roadmap, Produkt-Übersichtsseiten, Mitarbeiter-Bereich.
3. **Oder beides — und wenn ja, in welcher Reihenfolge?**

Sag mir, was Du angehen willst, dann mache ich einen Plan und implementiere.
