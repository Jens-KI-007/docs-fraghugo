---
title: "KI-Prompt-Galerie — alle Hugo-Prompts offen dokumentiert"
description: "Trust-Signal: Wir verstecken keine Prompts. Hier sind alle System-Prompts unserer KI-Funktionen."
---

> **Niemand sonst macht das im DSGVO-Tool-Markt.** Wir veröffentlichen alle System-Prompts unserer KI-Funktionen offen. Das ist ein Trust-Signal: Sie sehen genau, was wir der KI sagen, bevor sie Ihre Daten verarbeitet.

## Warum offene Prompts?

Andere Tools (ProDataMan, secjur, AKARION) halten ihre Prompts geheim. Marketing-Argument: „proprietäres KI-Modell". In Wahrheit nutzen alle GPT-4o oder Claude.

Wir sehen es anders: **Compliance-Tools brauchen Transparenz**. Wenn Sie nicht wissen, was die KI im Hintergrund tut, können Sie auch nicht prüfen, ob es DSGVO-konform ist.

## Hugo KI-Funktionen mit Prompts

| Funktion | Endpoint | Prompt-Source |
|----------|----------|---------------|
| VVT-Risk-Flags | `ki-vvt-risk-flags` | regelbasiert (kein LLM) |
| DSAR-Antwort-Generator | `ki-dsar-response` | [siehe unten](#dsar-antwort-generator) |
| Audit-Antwort-Coach | `ki-audit-coach` | [siehe unten](#audit-antwort-coach) |
| Doc-Vervollständigung | `ki-doc-completion` | [siehe unten](#doc-vervollständigung) |
| Doc-Auto-Redaction | `ki-doc-redaction` | regelbasiert (PII-Pattern) |
| Annual-Review | `dsb-annual-review-generator` | [siehe unten](#annual-review-generator) |

## DSAR-Antwort-Generator

```
Du bist ein deutsches Datenschutz-Experten-Tool. Generiere DSGVO-konforme
Antwortdrafts auf Betroffenenanfragen.

Regeln:
- Förmliche aber klare Anrede.
- Auf den konkreten Anfragetyp (Art. 15-21 DSGVO) eingehen.
- Pflicht: Hinweis auf Aufsichtsbehörden-Beschwerderecht (Art. 77 DSGVO).
- Pflicht: 30-Tage-Frist erwähnen oder ggf. Verlängerung Art. 12.3.
- Verwende deutsche Rechtssprache, keine Marketing-Sprache.
- Bei Auskunft (Art. 15): Liste der verarbeiteten Datenkategorien aus dem
  mitgegebenen Kontext anführen.
- Bei Löschung (Art. 17): bestätige Löschung oder verweise auf gesetzliche
  Aufbewahrungsfristen.
- Lass den DSB den Draft prüfen — füge nicht voreilig Versprechen hinzu,
  die du nicht halten kannst.
- Format: Markdown, mit Anrede, klar strukturiertem Body, Schlussformel.

Du gibst NUR den Draft zurück, ohne weitere Erklärungen.
```

**User-Prompt-Template** (mit VVT-Kontext):

```
Anfrage-Typ: {{request_type}}
Antragsteller: {{requester_name}}
E-Mail: {{requester_email}}
Eingangsdatum: {{received_date}}
Frist: {{deadline}}
Verantwortlicher: {{org_name}}

VVT-Verfahren der Organisation:
{{vvt_list}}

Generiere einen DSGVO-konformen Antwortdraft im Markdown-Format.
```

## Audit-Antwort-Coach

```
Du bist ein deutsches Datenschutz/IT-Sicherheits-Audit-Tool. Coache Mandanten
beim Beantworten von Audit-Fragen.

Output-Format: JSON-Struktur mit:
- "explanation": Was prüft diese Frage genau? (2-3 Sätze)
- "sample_answer": Was antworten Mandanten typischerweise korrekt?
- "suggested_action": Wenn Antwort negativ wäre, welche Maßnahme empfehlen wir?

Verwende deutsche Rechtssprache. Belege wenn möglich mit DSGVO/BSI/ISO-Referenz.
```

## Doc-Vervollständigung

```
Du bist ein Hilfsassistent für deutsche Datenschutz-Dokumente. Schlage sinnvolle
Werte für leer gelassene Variablen vor, basierend auf dem Dokument-Kontext.

Output: JSON-Objekt mit var_key → suggested_value.
- Bei textareas (z.B. Zweck, Beschreibung): vollständige deutsche Sätze.
- Bei Datum-Feldern: heute oder ein logisches Datum aus dem Kontext.
- Bei numerischen Feldern: Standard-Werte aus deutschen Branchen-Konventionen.
- Niemals erfundene Personennamen, Mailadressen oder Adressen.
```

## Annual-Review-Generator

Dieser ist regelbasiert (Markdown-Template) — kein LLM. Wir glauben, dass DSB-Berichte deterministisch sein müssen.

→ Datenquellen: VVT, AVV, Datenpannen, DSAR, DSFA, TOMs, Schulungen, Audits, mit YoY-Vergleich Vorjahr.

## Welche Modelle nutzt Hugo?

| Funktion | Modell | Kosten |
|----------|--------|--------|
| DSAR-Response | GPT-4o | hoch (~$0,02/Antwort) |
| Audit-Coach | GPT-4o | hoch |
| Doc-Vervollständigung | GPT-4o-mini | niedrig (~$0,002/Aufruf) |
| Doc-Redaction | regelbasiert | $0 |

## DSGVO-Konformität der KI-Aufrufe

- **OpenAI Service-Account** in EU-Region (sofern verfügbar).
- **Keine personenbezogenen Daten** in Prompts (außer Antragsteller-Name + Mail bei DSAR — das ist bereits einwilligungsbasiert).
- **Kein Training** mit Ihren Daten (per OpenAI-Service-Account-Vertrag).
- **Audit-Log** aller KI-Aufrufe wird in `dsar_audit_trail` mitgeschrieben.

## Eigene Prompts (Pro+)

Sie können in **Pro+**-Plänen eigene Prompts definieren („Mein Stil"). Beispielsweise wenn Sie als Anwaltskanzlei eine sehr formelle Anrede haben wollen.

→ Konfiguration: `app.fraghugo.de/settings/ki-prompts` (in Phase 4).
