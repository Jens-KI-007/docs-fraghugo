---
title: "Hugo Check Badge für Ihre Website"
description: "Zeigen Sie auf Ihrer Website, dass Sie geprüft sind. So generieren Sie das Hugo Check Badge, binden den Embed-Code ein und nutzen die Verifizierungsseite."
---

<div class="article-meta">
  <span><span class="label">Für:</span> Pro- und Agentur-Nutzer</span>
  <span><span class="label">Lesezeit:</span> 3 Minuten</span>
</div>

Wer einen guten DSGVO-Score hat, darf das zeigen. Mit dem **Hugo Check Badge** binden Sie ein kleines Vertrauenssymbol auf Ihrer Website ein – Besucher sehen, dass Sie geprüft sind, und können Ihren aktuellen Score auf einer Verifizierungsseite live prüfen.

## Wozu ein Badge?

**Conversions steigern.**
Studien zeigen, dass Vertrauenssignale (Trustpilot, ISO-Logos, TÜV-Siegel) die Conversion-Rate um 10–15 % erhöhen. Ein DSGVO-Badge ist 2026 ein noch ungewohntes, aber stark wirkendes Signal – besonders im B2B.

**Differenzierung im Wettbewerb.**
Wenn Ihre Konkurrenz kein Badge hat (was wahrscheinlich ist), heben Sie sich bei genau dem Punkt ab, der Geschäftsführer am meisten interessiert.

**Selbstverpflichtung.**
Wer ein Badge einbindet, will den Score nicht verlieren. Das Badge ist ein interner Anreiz, Compliance dauerhaft zu pflegen.

## Schritt 1: Badge generieren

Starten Sie auf [check.fraghugo.de](https://check.fraghugo.de) einen Scan Ihrer Domain. Ab einem Score von 60 sehen Sie nach dem Scan die Option **„Badge generieren"**. Klicken Sie darauf – Hugo Check legt intern ein Trust-Seal mit einer eindeutigen Badge-ID (UUID) an und zeigt Ihnen den Embed-Code.

![Badge-Generator mit Vorschau](/screenshots/check-badge.png)

Zur Auswahl stehen drei Größen:
- **Klein (S):** 120 × 48 px
- **Mittel (M):** 150 × 60 px – empfohlen
- **Groß (L):** 200 × 80 px

Das Badge rendert als SVG (scharf auf Retina-Displays), ist mehrsprachig beschriftet („FRAG HUGO Verified") und zeigt Score + Gültigkeitsdatum.

## Schritt 2: Embed-Code kopieren

Hugo Check generiert einen HTML-Snippet – ungefähr so (`BADGE_ID` ist Ihre persönliche UUID):

```html
<!-- Hugo Check Verified Badge -->
<a href="https://www.fraghugo.de/verified/BADGE_ID"
   target="_blank" rel="noopener">
  <img src="https://verify.fraghugo.de/badge/BADGE_ID.svg"
       alt="Hugo Check Verified – Datenschutz geprüft"
       width="150" height="60" loading="lazy" />
</a>
```

Diesen Code fügen Sie an der Stelle ein, wo das Badge erscheinen soll – meistens im **Footer**.

> ℹ️ Das SVG wird von `verify.fraghugo.de` ausgeliefert (eigene Subdomain für Embed-Auslieferung), die Verifizierungsseite liegt auf `www.fraghugo.de/verified/…`. Beide URLs müssen unverändert bleiben – die Badge-ID in der URL ist Ihre Zuordnung.

## Schritt 3: In Ihr CMS einbauen

**WordPress:**
- Design → Widgets → „Individuelles HTML"-Widget in den Footer ziehen
- Embed-Code einfügen, speichern
- Alternativ via Elementor: Seite bearbeiten → HTML-Widget → Code einfügen → Aktualisieren

**Shopify:**
- Online Store → Themes → Actions → Edit code
- `sections/footer.liquid` öffnen
- Code vor dem schließenden `</footer>`-Tag einfügen, speichern

**Wix / Squarespace / Jimdo:**
- Element/Block hinzufügen → „HTML einbetten" bzw. „Code"
- Code einfügen, publishen

**Statisches HTML:**
- Direkt in Ihre Footer-HTML-Datei einfügen, per FTP/Git hochladen

## Schritt 4: Verifizierung prüfen

Das Badge ist nicht statisch. Wenn jemand darauf klickt, landet er auf Ihrer **Verifizierungsseite**:

```
https://www.fraghugo.de/verified/BADGE_ID
```

Dort sieht der Besucher:
- Aktueller Score (live, nicht aus dem Embed)
- Geprüfte Domain
- Datum des letzten Scans
- Gültigkeit des Badges

So kann niemand Ihren Score „faken" – die Verifizierungsseite zeigt immer den echten, aktuellen Stand.

## Schritt 5: Badge automatisch aktualisieren

Das Badge-SVG wird serverseitig generiert, wenn der Browser es lädt – mit jedem Seitenaufruf liest `verify.fraghugo.de` den aktuellen Datenstand aus der Datenbank. Sie müssen am Embed-Code **nichts ändern**, wenn Ihr Score sich verändert oder das Badge verlängert wird.

Im Pro-Tarif scannt Hugo Check Ihre Domain automatisch regelmäßig. Das Badge zeigt immer den zuletzt ermittelten Score.

## Was, wenn Ihr Score sinkt oder das Badge abläuft?

Wenn Ihr Score unter den Schwellenwert von 60 fällt oder das Siegel nicht rechtzeitig erneuert wurde, rendert `verify.fraghugo.de/badge/BADGE_ID.svg` automatisch die **Abgelaufen-Variante** (graues Siegel „Erneute Prüfung erforderlich"). Sie müssen das Badge nicht manuell entfernen – aber in der Regel wollen Sie die Ursache schnell beheben:

1. **Erneut scannen** – Hugo Check zeigt Ihnen genau, was sich verschlechtert hat.
2. **Score reparieren** – typisch: fehlende Datenschutzerklärung, Cookies ohne Consent, Tracking ohne Opt-in.
3. **Embed entfernen (Notlösung)** – falls die Reparatur länger dauert und Sie nicht mit „Abgelaufen" werben wollen.

## Troubleshooting

**„Das Badge erscheint nicht auf meiner Seite."**
Prüfen Sie im Browser-Inspektor, ob das `<img>`-Element geladen wird. Die SVG-URL (`https://verify.fraghugo.de/badge/BADGE_ID.svg`) sollte in einem neuen Tab das Siegel anzeigen. Falls nicht: Badge-ID prüfen (UUID, nicht Domain!) oder neues Badge generieren.

**„Mein Score ist aktuell, aber das Badge zeigt ‚Abgelaufen'."**
Das Trust-Seal hat ein Ablaufdatum (standardmäßig 1 Jahr nach Erstellung). Generieren Sie im Dashboard ein neues Badge oder verlängern Sie es.

**„Kann ich das Badge in einem Newsletter / PDF verwenden?"**
Das SVG lässt sich direkt einbetten. Für den Verifizierungs-Link achten Sie darauf, dass die UUID erhalten bleibt – sie ist Ihre Zuordnung.

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
