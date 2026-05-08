---
title: "Cross-Modul-Bridge VVT → ISMS"
description: "Niemand sonst hat das im KMU-Markt. Aus VVT-Daten werden Asset-Vorschläge, Schutzbedarf, Lieferanten-Risiken."
---

Die **Cross-Modul-Bridge** ist Hugos zentrales Differenzierungs-Feature gegenüber verinice, opus i, AKARION und secjur. Wenn Sie schon das **VVT** mit Hugo führen, lebt das ISMS aus diesen Daten — keine Doppelerfassung.

## Was wird automatisiert?

### 1. Asset-Vorschläge aus VVT-Empfängern

Wenn Sie im VVT „Outlook" als Empfänger gelistet haben, schlägt Hugo das automatisch als **External Service** mit Schutzbedarf-Vorschlag „Hoch" vor (Microsoft 365 = US-Cloud).

→ `/dsb/isms/assets` → "Aus VVT vorschlagen lassen"

### 2. Schutzbedarf aus Datenkategorien

Wenn Ihr VVT-Verfahren `gesundheitsdaten` (Art. 9) verarbeitet, schlägt Hugo Schutzbedarf **„Hoch" für Vertraulichkeit** vor — automatisch.

### 3. AVV → Lieferanten-Risiko

Jeder AVV-Eintrag wird im Risiko-Register als **„externer Dienstleister"** vorgemerkt mit Bedrohung „Lieferanten-Compromise / Datenleck Subdienstleister".

### 4. Datenpannen-Historie als Risiko-Validierung

Hugo schaut in `data_breaches` der letzten 24 Monate. Hatten Sie eine Phishing-Panne? → Risiko „Phishing" bekommt erhöhte Wahrscheinlichkeit auf 4-5 (von 1-5).

## Resultat: 4 Wochen statt 8 Wochen

Klassisches ISMS-Setup für 100 MA dauert **3-6 Monate** (verinice, opus i). Mit Cross-Modul-Bridge schaffen Sie es in **4 Wochen**:

| Woche | Klassisch | Mit Hugo |
|-------|-----------|----------|
| 1 | Workshop, Inventur-Vorbereitung | Cross-Modul-Import VVT, Asset-Vorschläge bestätigen |
| 2 | Asset-Inventur erstellen | Schutzbedarf-Analyse, Auto-Vererbung übernehmen |
| 3 | Schutzbedarf-Workshop | Risiko-Matrix befüllen mit BSI-47, Lieferanten-Auto-Eintrag |
| 4 | Risiko-Matrix manuell befüllen | 10 Master-Richtlinien adoptieren, SoA generieren |
| 5-12 | Maßnahmen, Reviews, Audit | (schon fertig) |

## Voraussetzung

Die Bridge funktioniert nur, wenn:

1. Mandant hat sowohl Hugo DSB Pro als auch Hugo ISMS Pro abonniert
2. VVT enthält mind. 5 Verfahren (sonst wenig zu importieren)
3. AVV-Liste enthält Empfänger (sonst keine Lieferanten-Vorschläge)

→ Combo-Rabatt 15 %: Promo-Code `COMBO-DSB-ISMS-15`.
