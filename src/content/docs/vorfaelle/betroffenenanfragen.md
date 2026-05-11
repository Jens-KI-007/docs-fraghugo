---
title: Betroffenenanfragen (DSAR)
description: Auskunft, Berichtigung, Löschung beantworten — 1-Monats-Frist, mit Verifizierung.
---

![Übersicht aller Betroffenenanfragen](/screenshots/vorfaelle/dsar.png)

Wenn jemand fragt "Welche Daten habt ihr von mir?" / "Bitte löscht meine Daten" — das ist eine **Datenschutz-Auskunfts-Anfrage (DSAR)** nach Art. 15-22 DSGVO. Sie haben **1 Monat** zum Antworten.

## Was geht hier ein

Vier Wege, wie eine DSAR auf der Plattform landet:

1. **Manuell anlegen** — Sie bekommen eine Mail von einem Betroffenen und trägst sie hier ein.
2. **Public-Portal** — Betroffener füllt selbst ein Formular auf Ihrer Website aus (siehe [Public-Portal](/vorfaelle/public-portal/)).
3. **Mitarbeiter-Meldung** — interner Mitarbeiter erfasst über das Mitarbeiter-Portal.
4. **API** — z.B. aus Ihrem CRM, wenn dort ein Lösch-Antrag eingeht.

## Anfrage-Typen (DSGVO-Artikel)

- **Art. 15 — Auskunft** ("Welche Daten habt ihr?")
- **Art. 16 — Berichtigung** ("Mein Name ist falsch geschrieben")
- **Art. 17 — Löschung** ("Vergesst mich")
- **Art. 18 — Einschränkung** ("Verwendet meine Daten vorübergehend nicht")
- **Art. 20 — Datenübertragbarkeit** ("Gebt mir meine Daten in einer Form, dass ich sie zu Anbieter B mitnehmen kann")
- **Art. 21 — Widerspruch** (gegen Direkt-Marketing meist sofort, sonst Einzelfall)

## Workflow

### 1. Eingang & Verifizierung
- **Identität prüfen** — Betroffener muss beweisen, dass er der ist. Hugo erzeugt eine **Verifizierungsmail** mit Code, oder fordert Ausweis-Upload an.
- **Anonyme Anfragen ohne Verifizierung** können Sie ablehnen.

### 2. Daten sammeln
- **Hugo hilft** beim Durchsuchen: Sie geben Name/Mail an, Hugo zeigt Ihnen, in welchen Bereichen (VVT-basiert) Daten zu dieser Person liegen könnten.
- Pro System trägst Sie ein, was Sie gefunden hast.

### 3. Antwort vorbereiten
- Hugo generiert Antwort-Brief aus Vorlage. Sie wählen Auskunfts-Typ, Hugo füllt aus.
- Bei Löschung: Lösch-Bestätigung pro System.
- Bei Berichtigung: Änderungsnachweis.

### 4. Sicher zustellen
- **Secure-Reply-Portal**: Antwort liegt verschlüsselt auf einer URL, Betroffener loggt sich mit Code ein (keine personenbezogenen Daten per offener Mail!).
- Alternativ: per Post.

### 5. Schließen
- Status "Beantwortet". Hugo speichert den vollen Vorgang inkl. Beweise.

## Frist-Tracker

Pro Anfrage sehen Sie **Tage bis Frist**. Bei 7 Tagen Restzeit kommt Erinnerung, bei 3 Tagen "Eilt!".

## Aufsichtsbehörden-Anfrage (Art. 77)

Wenn ein Betroffener sich bei der Aufsichtsbehörde beschwert hat und die bei Ihnen nachfragt — gleiches Vorgehen, aber mit verschärftem Logging und automatischer Eskalation an Geschäftsführung.

## Tipps

- **30 Tage sind knapp** — fang am Tag 1 an, nicht am Tag 28.
- **Verifizierung ernst nehmen** — sonst geben Sie Daten an Fremde raus (auch eine Datenpanne!).
- **Standard-Anfragen automatisieren**: Newsletter-Abmeldung ist Art. 21, kein langer Prozess nötig.
