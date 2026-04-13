---
title: "KI-Analyse – Was die KI prüft"
description: "Hugo Check nutzt KI für 5 zusätzliche Analysen, die kein automatisierter Scanner kann. Cookies, Tech-Stack, Impressum, Dark Patterns und Geo-Risiken – verständlich erklärt."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Alle Nutzer</span>
  <span><span class="label">Lesezeit:</span> 5 Minuten</span>
</div>

Klassische Scanner prüfen technische Header. Aber DSGVO-Compliance ist mehr als Technik – sie ist auch Sprache, Gestaltung und juristische Auslegung. Hugo Check nutzt KI, um genau diese Punkte zu prüfen, die ein Skript nicht beurteilen kann.

Es gibt fünf KI-Analysen. Alle sind im Free-Tarif enthalten.

## 1. Cookie-Tabelle (was tut welcher Cookie?)

Wenn Sie einen Cookie-Banner haben, sieht der Nutzer in der Regel nur „Notwendig", „Funktional", „Marketing". Aber was steckt dahinter? Welche Cookies werden gesetzt, von wem, mit welcher Lebensdauer?

Die KI öffnet Ihre Seite, lässt die Cookies setzen, liest sie aus und ordnet jeden einzelnen einem Zweck zu.

![DSE-Vollständigkeitsanalyse mit kritischen Mängeln](/screenshots/check-dse-analyse.png)

**Was Sie damit anfangen:**
- Sie sehen, ob Sie heimlich Tracker laden (passiert oft bei alten WordPress-Plugins)
- Sie können prüfen, ob die Zwecke in Ihrem Cookie-Banner zur Realität passen
- Sie haben eine Vorlage für Ihre Datenschutzerklärung, die Sie nur noch übernehmen müssen

## 2. Tech-Stack-Erkennung

Welche Tools laufen auf Ihrer Website? CMS, Tracking, Hosting, CDN, Schriften – die KI erkennt das automatisch und ordnet jedem Tool ein DSGVO-Risiko zu.

**Beispiel:**
- Google Analytics (USA, Kategorie: Tracking) → Risiko: hoch
- Vercel (USA, Kategorie: Hosting) → Risiko: mittel (wegen US-Hosting)
- Plausible Analytics (EU, Kategorie: Tracking) → Risiko: niedrig
- Matomo selbst gehostet → Risiko: keines

**Was Sie damit anfangen:**
- Sie sehen sofort, welche Tools Sie überdenken sollten
- Sie erfahren, wo es DSGVO-konforme Alternativen gibt
- Sie können belegen, dass Sie wissen, was auf Ihrer Seite läuft (wichtig im Beschwerdefall)

## 3. Impressum-Checkliste

Die KI liest Ihr Impressum und gleicht es mit den Pflichtangaben aus §5 TMG ab. Fehlt was? Ist die Telefonnummer zu schwer auffindbar? Steht da eine Privatadresse, obwohl Sie eigentlich eine Firmenadresse haben sollten?

**Beispiel-Output:**
- ✅ Firmenname und Rechtsform
- ✅ Vollständige Postanschrift
- ⚠️ Vertretungsberechtigte Person (gefunden, aber unklar formuliert)
- ❌ Umsatzsteuer-ID fehlt
- ❌ Aufsichtsbehörde fehlt (bei genehmigungspflichtigen Berufen Pflicht)
- ✅ Telefonnummer
- ✅ E-Mail-Adresse

**Was Sie damit anfangen:**
- Sie wissen sofort, was Sie ergänzen müssen
- Sie haben einen objektiven Beleg, dass Ihr Impressum geprüft wurde
- Sie sparen sich das Lesen langer Gesetzeskommentare

## 4. Dark Patterns erkennen

Dark Patterns sind manipulative Designs, die Nutzer zu Entscheidungen drängen, die sie eigentlich nicht treffen wollen. Bei Cookie-Bannern besonders häufig: „Alles akzeptieren" ist groß und grün, „Ablehnen" klein und grau.

Die KI prüft Ihren Banner auf typische Dark Patterns:
- Asymmetrische Gestaltung („Akzeptieren" viel auffälliger als „Ablehnen")
- Versteckte Ablehn-Option (erst nach Klick auf „Mehr Infos")
- Vorausgewählte Häkchen
- Manipulative Sprache („Wir möchten Ihnen das beste Erlebnis bieten")
- Cookie-Wall (kein Zugang ohne Einwilligung)

**Warum das wichtig ist:**
Die deutschen Datenschutzbehörden mahnen seit 2023 verstärkt Cookie-Banner ab, die manipulative Elemente nutzen. Eine 2024er Entscheidung des Hamburger Datenschutzbeauftragten hat klargestellt: „Asymmetrie zwischen Akzeptieren und Ablehnen ist eine unwirksame Einwilligung."

## 5. Geo-Risiko-Analyse

Die KI prüft, in welche Länder Ihre Website Daten überträgt. Das ist relevant, weil Übertragungen in „unsichere Drittländer" (vor allem USA) zusätzliche Schutzmaßnahmen erfordern.

**Beispiel-Analyse:**
- 🇩🇪 Hosting: Deutschland (Hetzner)
- 🇺🇸 Tracking: USA (Google Analytics) → Standardvertragsklauseln nötig
- 🇺🇸 Schriften: USA (Google Fonts CDN) → Selbsthosten oder ersetzen
- 🇮🇪 CDN: Irland (Cloudflare) → DSGVO-konform mit AVV

**Was Sie damit anfangen:**
- Sie wissen, ob Sie ein Schrems-II-Problem haben
- Sie können in Ihrem VVT die Drittlandtransfers korrekt eintragen
- Sie sehen, wo Sie auf EU-Anbieter wechseln sollten

## „KI ist doch nicht zuverlässig…"

Das stimmt für viele Anwendungen – aber nicht hier. Wir nutzen die KI nicht, um Rechtsrat zu erteilen, sondern um Muster zu erkennen, die ein Mensch ohnehin erkennen würde, wenn er sich Zeit nähme. Außerdem zeigt Hugo Check immer:

- die **Quelle** (welcher HTML-Block, welcher Cookie, welche URL)
- die **Begründung** (warum die KI das so einordnet)
- den **Confidence-Wert** (wie sicher die KI ist)

So können Sie jede Aussage selbst überprüfen.

<div class="related-articles">

### Verwandte Artikel
- [Scan-Ergebnis verstehen](/hugo-check/scan-ergebnis-verstehen/)
- [Pro-Features im Überblick](/hugo-check/pro-features/)
- [Konkurrenz-Vergleich (Agentur)](/hugo-check/konkurrenz-vergleich/)

</div>

<div class="cta-banner">
  <h3>Probieren Sie die KI-Analyse aus</h3>
  <p>Alle 5 KI-Features sind im Free-Tarif enthalten. Kein Login nötig.</p>
  <a href="https://check.fraghugo.de" class="cta-button">Jetzt scannen →</a>
</div>
