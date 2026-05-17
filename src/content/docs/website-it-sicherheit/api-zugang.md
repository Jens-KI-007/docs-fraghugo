---
title: API-Zugang
description: Eigene Integration ins CRM oder Reporting — Scan-API, Webhooks, OpenAPI-Spec.
---

Sie wollen die DSGVO-Scores in Ihr eigenes Reporting bringen oder ein eigenes Frontend bauen? Der Agentur-Tarif bietet API-Zugriff.

## Was Sie können

- **Scan auslösen** per API-Call
- **Scan-Ergebnis** als JSON abrufen
- **Webhook** bei Scan-Abschluss in Ihr System feuern
- **Domains verwalten** (CRUD)
- **Monitoring** programmatisch konfigurieren

## Token erstellen

1. **Einstellungen → API** → "+ Neuer Token".
2. **Name + Scope** wählen (Read-only oder Write).
3. **Token kopieren** — wird nur einmal gezeigt!
4. **Speichern** in Ihrem Backend als Umgebungsvariable.

## Beispiel-Call

```bash
curl -X POST https://api.fraghugo.de/v1/scans \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.beispiel.de"}'
```

Response (asynchron):
```json
{
  "scan_id": "scan_abc123",
  "status": "running",
  "polling_url": "https://api.fraghugo.de/v1/scans/scan_abc123"
}
```

## Webhooks

Statt zu pollen, registriere einen Webhook → Sie bekommen POST-Call mit Scan-Ergebnis sobald fertig.

## OpenAPI-Spec

Volle Schnittstellen-Doku als Swagger-File auf Anfrage. Generierte Clients für TypeScript, Python, Go.

## Rate Limits

- **60 Scans/Stunde** für Agentur-Tarif.
- **Burst** bis 10 parallele Scans.
- **Mehr nötig?** Kontaktier uns — Enterprise-Custom geht.
