---
title: Asset-Register
description: Alle Werte, die Sie schützen musst — Hardware, Software, Daten, Prozesse, Menschen.
---

![Asset-Register Liste](/screenshots/isms-nis2/asset-register.png)

Bevor Sie schützen kannst, müssen Sie wissen WAS. Das Asset-Register ist die Grundlage des ganzen ISMS — alles andere baut darauf auf.

## Asset-Kategorien

Hugo unterscheidet 6 Klassen:

1. **Hardware** — Server, Laptops, Drucker, IoT-Geräte, Netzwerk-Komponenten
2. **Software** — Anwendungen, Betriebssysteme, Datenbanken, Cloud-Dienste
3. **Information** — Datenbestände (Kundenstamm, Produktionsdaten, Verträge, Source-Code)
4. **Personen** — kritische Rollen (Geschäftsführer, IT-Admin, Hauptkundenbetreuer)
5. **Prozesse** — kritische Geschäftsprozesse (Bestellung, Auslieferung, Rechnungsstellung)
6. **Sonstiges** — alles was nicht passt (Strom, Klima, physisches Gebäude)

## Asset anlegen

Klicken Sie "+ Asset". Pro Asset geben Sie an:
- Name
- Klasse
- Kategorie (innerhalb der Klasse, z.B. "Laptop" / "Server" / "VM")
- Verantwortlicher (Mitarbeiter, der dafür zuständig ist)
- Standort (physisch oder logisch)
- Schutzbedarf — wird im [nächsten Baustein](/isms-nis2/schutzbedarf/) festgelegt
- Verknüpfte Risiken / Maßnahmen (kommen später automatisch)

## Auto-Erkennung

Hugo kann **Microsoft-365-Sync** machen → alle Endgeräte + Lizenzen + User werden automatisch als Assets angelegt (Sie müssen nur einmalig OAuth-Zugriff geben). Spart Tage.

Ebenfalls möglich: Cloud-Konten (AWS, Azure, GCP), Netzwerk-Scan, CMDB-Import.

## Filter / Sichten

- **Kritische Assets** — Schutzbedarf hoch
- **Veraltete Verantwortlichkeit** — letzter Review > 12 Monate
- **Off-Boarding-Lücken** — User nicht mehr im Unternehmen, aber Asset noch zugewiesen

## Tipps

- **Nicht alles aufnehmen** — der Bürostuhl ist kein Asset im ISMS-Sinne. Faustregel: Was Sicherheitsbedeutung hat.
- **Mit Verantwortlichen sprechen** — Sie als Compliance-Officer kennst nicht alle Systeme. IT-Admin, HR, Buchhaltung müssen je ihre Assets bestätigen.
- **Granularität**: "Alle Bürorechner" als ein Asset reicht — nicht jeden einzeln aufnehmen, sondern als Klasse mit Stückzahl.
