---
title: "Dokumenten-Vorlagen-Bibliothek"
description: "35 Master-Vorlagen mit 256 Variablen: NDAs, Einwilligungen, IT-Policies, DSAR-Antworten, DSFA-Templates."
---

Hugo Doku stellt **35 Master-Vorlagen** mit **256 Variablen** zur Verfügung. Variablen werden mit `{{firma}}`, `{{datum}}`-Platzhaltern in den Markdown-Body substituiert.

## Kategorien

| Kategorie | Anzahl | Beispiele |
|-----------|--------|-----------|
| Geheimhaltung | 5 | NDA bilateral, Verschwiegenheitserklärung MA, Geschäftsgeheimnis-Schutz |
| Einwilligungen | 5 | Mitarbeiterfoto, Newsletter, Marketing-Cookies, Drittland-Transfer |
| IT-Policies | 8 | AUP, MDM/BYOD, Clean-Desk, Passwort, Backup, Krypto, KI-Nutzung, BYOC |
| Datenpannen + DSAR | 5 | Art. 33 (Aufsicht), Art. 34 (Betroffene), DSAR-Auskunft, DSAR-Löschung, Verlängerung Art. 12.3 |
| Aushänge | 3 | Videoüberwachung, Sprachaufzeichnung, Besucher-Hinweis |
| DSFA / TOM | 3 | DSFA-Vorlage Art. 35, TIA, TOM-Beschreibung Standard |
| Schulungen | 2 | Allgemein, NIS2-§38-BSIG-GF |
| Whistleblower / Compliance | 4 | HinSchG-Eingangsbestätigung, Whistleblower-Policy, Code of Conduct, Anti-Bribery |

## Variablen-Engine

Hugo nutzt simple **`{{key}}`-Substitution** — kompatibel zu Liquid/Handlebars-Konventionen. Beispiel:

```markdown
# Verschwiegenheitserklärung

{{name}} erklärt hiermit gegenüber {{firma}}, {{firma_adresse}}:

1. Ich werde alle personenbezogenen Daten vertraulich behandeln.
2. ...

{{firma_ort}}, {{datum}}
___________________________
{{name}} ({{rolle}})
```

Beim Generieren werden die Variablen automatisch gefüllt. Vorausgefüllt:

- `{{firma}}` aus `organizations.name`
- `{{datum}}` automatisch heute (sofern nicht überschrieben)

## Variable-Wizard

Beim Klick auf eine Vorlage öffnet Hugo ein Modal mit allen Pflicht-Variablen. Variable-Typen:

- **text** — Single-line Input
- **textarea** — Multi-line Input
- **date** — Date-Picker
- **number** — Numerisches Feld
- **select** — Dropdown mit `var_options`

## KI-Vervollständigung (Pro+)

Klicken Sie „KI-Vorschlag" — Hugo schlägt sinnvolle Werte für leere Variablen vor:

- Bei textarea: vollständige deutsche Sätze
- Bei date: heute oder logisches Datum aus Kontext
- Bei numerischen Werten: deutsche Branchen-Konventionen (z. B. 12 Zeichen für Passwortlänge)

→ Niemals erfundene Personennamen oder Mailadressen.

## Eigene Vorlagen anlegen

Mandanten in **Pro+** können eigene Vorlagen anlegen — eigene Variablen, eigener Markdown-Body. Sichtbar nur im eigenen Account.

## Versionierung + Diff-View

Master-Vorlagen versionieren mit semver-light (1.0 / 1.1 / 2.0). Bei Update zeigt Hugo Diff-View und schlägt Re-Sign vor wenn mit Bulk-Sign-Off-Flow versendet.
