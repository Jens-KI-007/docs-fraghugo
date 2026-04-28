---
title: "frag.hugo Datenschutz-Siegel einbinden"
description: "Mit dem Trust-Siegel zeigen Sie Besuchern, dass Ihre Website von einem TÜV-zertifizierten Datenschutzberater betreut wird – verifizierbar in Echtzeit."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Geschäftsführer, Marketing, Web-Verantwortliche</span>
  <span><span class="label">Lesezeit:</span> 3 Minuten</span>
</div>

Vertrauen ist im Web ein Wettbewerbsvorteil. Das **frag.hugo Datenschutz-Siegel** auf Ihrer Website zeigt Besuchern, dass ein **TÜV-zertifizierter Datenschutzberater** die Verarbeitung dokumentiert hat – mit Echtzeit-Verifikation auf `verify.fraghugo.de`.

## Was das Siegel leistet

- **Trust-Booster** – Conversion-Rate steigt nachweislich, wenn Besucher ein verifiziertes Trust-Element sehen
- **Echtzeit-Verifikation** – Klick aufs Siegel zeigt Status, Gültigkeit, Mandanten-Hash – nicht zu fälschen
- **DSGVO-Signal** – Sie behaupten nicht, Sie zeigen Belege
- **Drei Status:** *Aktiv* (grün), *Wird geprüft* (amber), *Inaktiv* (rot)

## Voraussetzungen

- Hugo DSB **Professional** oder **Enterprise** mit aktiver DSB-Betreuung
- Mindestbestand an gepflegten Modulen: VVT, Datenschutzerklärung, TOMs (Hugo prüft automatisch beim Aktivieren)

## Schritt 1: Siegel erzeugen

Im Modul **„Siegel"** klicken Sie auf **„Siegel generieren"**. Hugo DSB prüft automatisch, ob die Compliance-Mindestanforderungen erfüllt sind. Bei grünem Licht erhalten Sie:

- Eine eindeutige **Siegel-ID** (Hash-basiert, nicht erraten)
- Die **Verifikations-URL** (`https://verify.fraghugo.de/seal/<id>`)
- Einen **Embed-Code** (1-Zeilen-Snippet) für Ihre Website

## Schritt 2: Größe und Stil wählen

Das Siegel ist responsive und kommt in drei Größen:

- **Small** – z. B. neben Logo im Header (40×40)
- **Medium** – Footer oder Sidebar (Standard, 80×80)
- **Large** – Trust-Badge auf Landing-Pages (160×160)

Drei Hintergrund-Varianten: Hell, Dunkel, Transparent. Vorschau in der App live.

## Schritt 3: Einbau auf der Website

### WordPress

1. Admin → **Design** → **Widgets** oder **Customizer → Footer**
2. **„Individuelles HTML"**-Widget einfügen
3. Embed-Code aus Hugo DSB einfügen
4. Speichern – Siegel erscheint sofort

### Shopify

1. **Online Store** → **Themes** → **Customize** → Footer-Bereich
2. Abschnitt **„Custom Liquid"** oder **„Custom HTML"** hinzufügen
3. Embed-Code einfügen, speichern

### Wix

1. Wix Editor öffnen → **HTML-Embed**-Element ins Footer ziehen
2. Embed-Code einfügen, **Übernehmen**, **Veröffentlichen**

### Allgemein HTML / eigene Site

Embed-Code kurz vor `</body>` einfügen. Snippet ist `async`-geladen, blockiert das Rendering nicht.

## Schritt 4: Validität und Verifikation

Klickt ein Besucher aufs Siegel, öffnet sich `verify.fraghugo.de/seal/<id>` in einem neuen Tab. Dort steht:

- **Inhaber** (Firmenname)
- **Status:** Aktiv / Wird geprüft / Inaktiv
- **Gültig bis:** Datum (Standard 12 Monate, automatische Verlängerung bei aktivem DSB-Vertrag)
- **Letzte Compliance-Prüfung:** Datum

Das ist es, was das Siegel von einem dummen JPEG unterscheidet: **Belastbar geprüfte Echtzeit-Aussage.**

## Schritt 5: Pflege

- Hugo DSB prüft **monatlich** automatisch, ob die Compliance-Mindestbedingungen weiter erfüllt sind
- Bei Verstoß (z. B. VVT veraltet, AVV abgelaufen): Status springt auf **„Wird geprüft"**, E-Mail-Warnung an GF/DSB
- Wird der Mangel nicht binnen 30 Tagen behoben, wird das Siegel deaktiviert
- Reaktivierung sofort nach Behebung

## FAQ

**„Darf ich das Siegel auch ohne Hugo DSB nutzen?"**
Nein. Die Verifikation läuft gegen unsere Datenbank – ohne aktiven Hugo-DSB-Account kein gültiger Eintrag.

**„Kann das Siegel meinen Page Speed verschlechtern?"**
Praktisch nicht: Embed-Code ist `async`, ca. 8 KB gzipped, kein Render-Blocker.

**„Was, wenn meine Website kein WordPress/Shopify ist?"**
Jede Website, die HTML einbinden lässt, kann das Siegel nutzen. Für Headless-Setups (React, Vue, Next.js) das `<script>`-Tag direkt in das Layout/Footer-Component einbauen.

**„Werden Besucher beim Klick auf das Siegel getrackt?"**
Nein. Die Verifikations-Seite setzt keine Cookies und nutzt keine Analytik-Tools.

<div class="related-articles">

### Verwandte Artikel
- [VVT anlegen](/hugo-dsb/vvt-anlegen/)
- [TOMs dokumentieren](/hugo-dsb/toms-dokumentieren/)
- [DSB Dashboard verstehen](/hugo-dsb/dsb-dashboard/)

</div>

<div class="cta-banner">
  <h3>Trust-Siegel inklusive ab Professional</h3>
  <p>Verifiziertes Datenschutz-Siegel für Ihre Website – generiert in 30 Sekunden.</p>
  <a href="https://dsb.fraghugo.de/pricing" class="cta-button">14 Tage kostenlos testen →</a>
</div>
