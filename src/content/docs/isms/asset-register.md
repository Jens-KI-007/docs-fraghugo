---
title: "Asset-Register Best Practices"
description: "Wie Sie alle Informationswerte vollständig erfassen: 8 Kategorien, CIA-Klassifikation, Cross-Modul-Bridge zum VVT."
---

Das Asset-Register ist die **Grundlage** Ihres ISMS. Ohne vollständiges Inventar kein Schutzbedarf, keine Risikoanalyse, keine TOMs.

## 8 Asset-Kategorien

Hugo ISMS nutzt 8 Standard-Kategorien gemäß BSI 200-2:

1. **System** — Server, Netzwerk-Komponenten, Hardware
2. **Software** — Anwendungen, Cloud-Services, SaaS
3. **Personenbezogene Daten** — VVT-Verfahren, Datenkategorien
4. **Prozess** — Geschäftsprozesse, Workflows
5. **Standort** — Rechenzentren, Büros, Werke
6. **Dokument** — Verträge, Richtlinien, Pläne
7. **Cloud** — IaaS/PaaS/SaaS-Dienste
8. **Externer Dienstleister** — AVV-Auftragsverarbeiter, Lieferanten

## CIA-Klassifikation

Jedes Asset bekommt drei Schutzbedarfsklassen (BSI 200-2):

| Klasse | Vertraulichkeit | Integrität | Verfügbarkeit |
|--------|-----------------|-----------|---------------|
| Normal | Allgemein zugänglich | Fehlerquote tolerierbar | Ausfall < 24 h tolerierbar |
| Hoch | Eingeschränkter Kreis | Fehler haben Folgen | Ausfall 4-24 h kritisch |
| Sehr hoch | Vertraulich, Art. 9 | Fehler nicht tolerierbar | Ausfall > 4 h katastrophal |

## Cross-Modul-Bridge VVT → ISMS

**Niemand sonst hat das im KMU-Markt.** Hugo nutzt Ihre VVT-Daten, um Asset-Vorschläge zu generieren:

- Empfänger im VVT (Outlook, Salesforce, AWS) → Asset-Vorschlag der Kategorie "External Service"
- Datenkategorien Art. 9 (Gesundheit, Religion etc.) → Schutzbedarf-Vorschlag "Hoch" für Vertraulichkeit
- AVV → Risiko-Eintrag "Lieferanten-Compromise"

→ Zugang über `/dsb/isms/assets` → Button "Aus VVT vorschlagen lassen".

## Best Practices

1. **Nicht zu granular**: Pro Domäne ein Asset, nicht pro Server. „Kunden-CRM" reicht, nicht 12 Datenbank-Instanzen einzeln.
2. **Verantwortliche pro Asset**: Wer kümmert sich? Wenn niemand → Verwaisung-Risiko.
3. **Schutzbedarf vererben**: VVT-Verfahren mit Art. 9-Daten erbt automatisch hohe Vertraulichkeit.
4. **Quartalsweise Review**: 1× im Quartal Asset-Liste durchgehen, neue Cloud-Tools nachtragen.
