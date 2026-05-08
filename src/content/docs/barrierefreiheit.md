---
title: Erklärung zur Barrierefreiheit (Docs)
description: Barrierefreiheits-Erklärung für docs.fraghugo.de nach WCAG 2.2 AA
sidebar:
  hidden: true
---

Diese Erklärung gilt für **docs.fraghugo.de**. Die zentrale Erklärung für alle frag.hugo-
Angebote finden Sie unter <https://www.fraghugo.de/barrierefreiheit>.

## Stand der Vereinbarkeit

Die Doku-Site ist mit **Astro Starlight** gebaut, das WCAG 2.2 Level AA als Default
implementiert. Selbst-Audit Stand 8. Mai 2026:

- Semantic HTML5 mit `main`, `nav`, `article`, `header`, `footer`
- Heading-Hierarchie ohne Sprünge (h1 → h2 → h3)
- Tastatur-Navigation vollständig (Tab, Shift+Tab, Pfeiltasten)
- Skip-to-content-Link auf jeder Seite
- Kontrast-Werte ≥ 4,5:1 für Body-Text, ≥ 3:1 für UI-Elemente
- Code-Blöcke mit Syntax-Highlighting bleiben lesbar bei aktiviertem
  „Reduce Transparency"-System-Setting
- Suche per `/`-Hotkey, alternativ über sichtbares Search-Feld
- Mobile Responsive (Burger-Menü mit ARIA-Expanded)

## Bekannte Lücken

- **Mermaid-Diagramme** (Architektur-Übersichten in einigen Tutorials) sind nicht für
  Screenreader optimiert. Es wird ein Alt-Text bzw. eine textuelle Beschreibung mitgeliefert.
- **Animierte GIFs** in einigen Tutorials zeigen Workflows. Für deren Beschreibung wird
  die nebenstehende Schritt-für-Schritt-Anleitung herangezogen.

## Feedback

E-Mail: <barrierefreiheit@fraghugo.de> — wir antworten innerhalb von 14 Werktagen.

Vollständige Erklärung mit Schlichtungs- und Durchsetzungsverfahren:
<https://www.fraghugo.de/barrierefreiheit>
