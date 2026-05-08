---
title: "Secure-Reply-Portal mit Magic-Link"
description: "DSB-Antworten auf DSAR sicher übermitteln: 24h-Token, 1×-Abruf, kein Mail-Anhang mit PII."
---

Das **Secure-Reply-Portal** ersetzt die unsichere Praxis, sensible Daten als Mail-Anhang zu schicken. Stattdessen erhält der Antragsteller einen **Magic-Link**, der genau **einmal** abgerufen werden kann.

## Der Workflow

1. **DSB öffnet** die DSAR im Hugo-Modul (`/dsb/admin/dsar/{id}`).
2. **KI-Auto-Response generieren** (GPT-4o + DACH-Recht-Prompt + VVT-Kontext).
3. DSB **prüft + editiert** den Draft.
4. Klick **„Über Secure-Reply-Portal versenden"**.
5. Hugo erzeugt 24h-Token, sendet Mail an Antragsteller mit Magic-Link `https://app.fraghugo.de/r/{token}`.
6. Antragsteller klickt → sieht die Antwort genau **1× für 60 Sekunden**.
7. Danach wird Inhalt im Browser nicht mehr nachgeladen, im Server nach Ablauf gelöscht.

## Sicherheit

- **24h-Expiry**: Token läuft nach 24 Stunden ab.
- **1×-Abruf**: Nach erstem Öffnen zählt der Server-Counter. Zweiter Aufruf liefert „bereits abgerufen".
- **Hash-Chain-Audit**: Jede Aktion (gesendet, abgerufen, abgelaufen) wird im `dsar_audit_trail` mit SHA-256-Hash verkettet.
- **IP-Logging**: Wer hat wann von wo abgerufen?

## Vorteil gegenüber Mail-Anhang

| Aspekt | Mail-Anhang | Secure-Reply |
|--------|-------------|---------------|
| Verschlüsselung | meist nur Transport | Zugriff per Token + 1× |
| Forwarded? | unkontrolliert | Token wird mit erstem Klick verbraucht |
| Audit-Trail | kein | Hash-Chain mit IP+Timestamp |
| Behördenfest | mäßig | revisionssicher |

## DSGVO-Konformität

Art. 32 DSGVO verlangt **angemessene Sicherheit**. Bei Auskunftsanfragen mit personenbezogenen Daten ist Mail-Anhang oft **unzureichend** (insbesondere ohne S/MIME oder PGP, was im KMU-Bereich die Ausnahme ist).

Secure-Reply löst das Problem **ohne** dass der Antragsteller einen Account einrichten muss.

## Konkurrenz

OneTrust und Securiti haben Secure-Reply-Portale, aber als Enterprise-Feature ab 25.000 USD/Jahr. Bei Hugo ist es im **DSB-Pro-Plan** (299 €/Mo) inkludiert.
