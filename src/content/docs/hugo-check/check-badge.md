---
title: "Hugo Check Badge für Ihre Website"
description: "Zeigen Sie auf Ihrer Website, dass Sie geprüft sind. So generieren Sie das Hugo Check Badge, binden den Embed-Code ein und nutzen die Verifizierungsseite."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Pro- und Agentur-Nutzer</span>
  <span><span class="label">Lesezeit:</span> 3 Minuten</span>
</div>

Wer einen guten DSGVO-Score hat, darf das zeigen. Mit dem **Hugo Check Badge** binden Sie ein kleines Vertrauenssymbol auf Ihrer Website ein – Besucher sehen, dass Sie geprüft sind, und können Ihren aktuellen Score verifizieren.

## Wozu ein Badge?

**Conversions steigern.**
Studien zeigen, dass Vertrauenssignale (Trustpilot, ISO-Logos, TÜV-Siegel) die Conversion-Rate um 10–15 % erhöhen. Ein DSGVO-Badge ist 2026 ein noch ungewohntes, aber stark wirkendes Signal – besonders im B2B.

**Differenzierung im Wettbewerb.**
Wenn Ihre Konkurrenz kein Badge hat (was wahrscheinlich ist), heben Sie sich bei genau dem Punkt ab, der Geschäftsführer am meisten interessiert.

**Selbstverpflichtung.**
Wer ein Badge einbindet, will den Score nicht verlieren. Das Badge ist ein interner Anreiz, Compliance dauerhaft zu pflegen.

## Schritt 1: Badge generieren

Loggen Sie sich auf [check.fraghugo.de](https://check.fraghugo.de) ein. Wählen Sie unter „Meine Domains" die Domain aus, für die Sie das Badge wollen. Klicken Sie auf **„Badge generieren"**.

![Badge-Generator mit Vorschau](/screenshots/check-badge.png)

Sie können wählen zwischen:
- **Style:** Hell, Dunkel, Minimal
- **Größe:** Klein (120px), Mittel (180px), Groß (240px)
- **Anzeige:** Score sichtbar oder nur „Geprüft"
- **Sprache:** Deutsch oder Englisch

## Schritt 2: Embed-Code kopieren

Hugo Check generiert einen kleinen HTML-Snippet – ungefähr so:

```html
<a href="https://check.fraghugo.de/verify/ihre-domain.de" target="_blank" rel="noopener">
  <img src="https://check.fraghugo.de/badge/ihre-domain.de.svg"
       alt="DSGVO-geprüft mit Hugo Check"
       width="180" height="60" />
</a>
```

Diesen Code fügen Sie an der Stelle ein, wo das Badge erscheinen soll – meistens im **Footer**.

## Schritt 3: In Ihr CMS einbauen

**WordPress:**
- Öffnen Sie „Design → Widgets" oder „Footer-Editor"
- Fügen Sie ein **Custom HTML**-Block ein
- Embed-Code einfügen, speichern

**Webflow:**
- Drag & Drop **Embed**-Element in den Footer
- Code einfügen, publishen

**Shopify:**
- Theme → Code-Editor → `footer.liquid`
- Code an der gewünschten Stelle einfügen

**Statisches HTML:**
- Direkt in Ihre Footer-HTML-Datei einfügen

## Schritt 4: Verifizierung prüfen

Das Badge ist nicht statisch. Wenn jemand drauf klickt, landet er auf einer **Verifizierungsseite**:

```
check.fraghugo.de/verify/ihre-domain.de
```

Dort sieht der Besucher:
- Aktueller Score (live, nicht aus dem Embed)
- Datum des letzten Scans
- Welche Kategorien geprüft wurden
- Link zum vollständigen Bericht (optional, Sie können das aktivieren oder deaktivieren)

So kann niemand Ihren Score „faken" – die Verifizierungsseite zeigt immer den echten, aktuellen Stand.

## Schritt 5: Badge automatisch aktualisieren

Im Pro-Tarif wird Ihr Score täglich neu berechnet. Das Badge auf Ihrer Website zeigt **automatisch den aktuellen Wert** – Sie müssen nichts ändern. Das SVG holt sich live den aktuellen Score von unserer Domain.

> ⚠️ **Achtung:** Wenn Ihr Score unter eine bestimmte Schwelle fällt (Standard: 70), versteckt sich das Badge automatisch. Sie wollen ja nicht mit einem schlechten Score werben. Sie können das in den Einstellungen ändern oder ausschalten.

## Was, wenn mein Score schlechter wird?

Hugo Check schickt Ihnen einen Alert, sobald Ihr Score unter die Badge-Schwelle fällt. Sie haben dann zwei Optionen:

1. **Ursache beheben** – Hugo Check zeigt Ihnen genau, was sich verschlechtert hat
2. **Badge vorübergehend ausblenden** – bis das Problem behoben ist

Niemand sieht ein schlechtes Badge.

<div class="related-articles">

### Verwandte Artikel
- [Pro-Features im Überblick](/hugo-check/pro-features/)
- [Monitoring einrichten](/hugo-check/monitoring-einrichten/)
- [Scan-Ergebnis verstehen](/hugo-check/scan-ergebnis-verstehen/)

</div>

<div class="cta-banner">
  <h3>Badge in 5 Minuten auf Ihrer Website</h3>
  <p>Pro-Tarif 14 Tage gratis – inklusive Badge und Monitoring.</p>
  <a href="https://check.fraghugo.de/pricing" class="cta-button">Pro testen →</a>
</div>
