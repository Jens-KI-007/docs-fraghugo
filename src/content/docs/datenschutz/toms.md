---
title: TOMs — Technisch-organisatorische Maßnahmen
description: Sicherheits-Maßnahmen nach Art. 32 DSGVO — Vertraulichkeit, Integrität, Verfügbarkeit, Belastbarkeit.
---

![TOMs-Übersicht in Kategorien](/screenshots/datenschutz/toms.png)

Pflicht nach Art. 32 DSGVO: Sie müssen dokumentieren, **wie** Sie personenbezogene Daten technisch und organisatorisch schützt. Hier listest Sie das auf.

## Kategorien (Standardgliederung)

Hugo gibt 8 Kategorien vor, in denen Sie jeweils ankreuzt was Sie machen:

1. **Zutrittskontrolle** — Wer kommt in die Büros? (Alarmanlage, Schlüssel-Verwaltung, Empfang)
2. **Zugangskontrolle** — Wer kommt an die Systeme? (Passwortrichtlinie, 2FA, VPN, Single-Sign-On)
3. **Zugriffskontrolle** — Wer sieht welche Daten? (Rollenkonzept, least-privilege, Logging)
4. **Trennungskontrolle** — Kundendaten getrennt von Mitarbeiterdaten? (Mandanten-Trennung, Test/Prod-Trennung)
5. **Pseudonymisierung & Verschlüsselung** — wo verschlüsselst Sie? (in Ruhe, im Transit)
6. **Integrität** — Schutz vor unbefugter Änderung. (Backups, Versionierung, Integritätsprüfung)
7. **Verfügbarkeit & Belastbarkeit** — was wenn was ausfällt? (Redundanz, Notfallplan, Wiederherstellungstests)
8. **Auftragskontrolle** — wie kontrollierst Sie AVV? (Prüfung der Anbieter, Audit-Rechte)

## Was Sie hier machen

- **Maßnahmen ankreuzen** — pro Kategorie 5-15 Standard-Maßnahmen, Sie wählen.
- **Custom Maßnahmen** hinzufügen — falls Sie etwas Besonderes hast.
- **Status pro Maßnahme** — "Ja vollständig" / "Ja teilweise" / "Geplant" / "Nein".
- **Nachweis** — pro Maßnahme PDF anhängen (z.B. Pen-Test-Bericht, ISO-Zertifikat).
- **Letzte Prüfung** — wann haben Sie das zuletzt überprüft? (Pflicht: mind. 1× jährlich)

## Export

- **TOMs-Dokument** als PDF — anhang zu jedem AVV-Vertrag oder bei Behörden-Anfragen.
- Format folgt der **Empfehlung des BSI / der Datenschutzkonferenz**.

## Bei AVV anhängen

Jeder AVV bekommt eine Kopie Ihrer TOMs als Anlage 2 zum Vertrag. Hugo macht das automatisch bei AVV-Export.

## Tipps

- Bei kleinen Firmen reicht ein **Basis-Set von ~30 Maßnahmen**. Übertreibe nicht.
- Versprich nichts, was Sie nicht tust. Wenn "Vier-Augen-Prinzip" angekreuzt ist aber niemand das prüft, ist das schlechter als ehrliches "Nein, brauchen wir nicht weil Mini-Team".
- **Re-Review** mind. jährlich, sonst markiert Hugo das TOMs-Dokument als "veraltet".
