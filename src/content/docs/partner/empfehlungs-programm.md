---
title: "Empfehlungs-Programm für IT-Systemhäuser"
description: "Wie Mitarbeiter eines IT-Systemhauses Datenschutz-Mandanten an frag.hugo empfehlen, eine 12-monatige Provision verdienen und alles DATEV-konform per Lohnabrechnung läuft – ohne Aufwand für die Buchhaltung."
---

<div class="article-meta">
  <span><span class="label">Für:</span> IT-Systemhaus-GFs &amp; Mitarbeiter</span>
  <span><span class="label">Lesezeit:</span> 6 Minuten</span>
</div>

Ein IT-Systemhaus berät seine Kunden täglich: Server, Backup, Microsoft 365, Firewall. Datenschutz und NIS2 fallen dabei laufend mit auf den Tisch – und werden meistens an den Kunden zurückgegeben („Da brauchen Sie einen DSB"). Das **Empfehlungs-Programm von frag.hugo** dreht das um. Jeder Mitarbeiter kann den Datenschutz-Bedarf direkt platzieren, der Kunde bekommt eine fertige Lösung, der Mitarbeiter eine Provision – und die Geschäftsführung des Systemhauses muss nichts buchhalten, weil alles DATEV-konform automatisiert ist.

Diese Seite erklärt das Programm aus zwei Perspektiven: für **Mitarbeiter** (wie funktioniert das Portal, wie lege ich eine Empfehlung an?) und für **Geschäftsführer eines Systemhauses** (was kostet, was bringt es, wie läuft die Abrechnung?). Sie können das Modell 1:1 für Ihr eigenes Haus übernehmen.

## Wie das Programm funktioniert

Das Empfehlungs-Programm besteht aus drei Bausteinen:

1. **Mitarbeiter-Portal** unter `dsb.fraghugo.de/partner` – jeder Mitarbeiter Ihres Systemhauses bekommt einen eigenen Login. Hier legt er Empfehlungen an, sieht den Status seiner Leads, seine laufenden Provisionen, eine Rangliste und einen Provisions-Rechner.
2. **Lead-Pipeline mit automatischer Erst-Mail** – sobald ein Mitarbeiter eine Empfehlung anlegt, geht eine kontextsensitive Mail an den Kontakt. Nils oder ein anderer Berater von frag.hugo übernimmt das Erstgespräch, erstellt das Angebot und führt den Vertragsabschluss.
3. **DATEV-konforme Provisionsabrechnung** – läuft am 1. jedes Monats automatisch. Buchhaltung bekommt eine fertige CSV zum Direkt-Import in DATEV Lohn, frag.hugo stellt Ihrem Systemhaus die Sammelrechnung, der Mitarbeiter sieht den Bonus auf seiner nächsten Gehaltsabrechnung.

Der gesamte Lebenszyklus einer Empfehlung läuft so:

| Schritt | Wer | Was passiert |
|---------|-----|--------------|
| 1. Lead anlegen | Mitarbeiter | Im Portal: Firma, Ansprechpartner, E-Mail, geschätzte Mitarbeiterzahl |
| 2. Erst-Kontakt | Plattform | Automatisierte Erst-Mail an den Kontakt mit Vorstellung &amp; Termin-Link |
| 3. Erstgespräch | frag.hugo | Nils Oehmichen führt das 15-Minuten-Erstgespräch |
| 4. Angebot | frag.hugo | Vertrag &amp; Stripe-Checkout an den Kunden |
| 5. Mandant aktiv | Plattform | Status springt auf „Mandant!", Provision startet |
| 6. Monatliche Auszahlung | frag.hugo | Provision wird automatisch berechnet, DATEV-CSV erzeugt |
| 7. Lohn-Buchung | Buchhaltung | CSV in DATEV importieren, Mitarbeiter bekommt Bonus aufs Gehalt |

## Das Mitarbeiter-Portal

Mitarbeiter loggen sich unter `dsb.fraghugo.de/partner/login` mit ihrer Firmen-E-Mail ein. Beim ersten Login durchlaufen sie ein kurzes Onboarding (Personalnummer, Foto, Anzeigename in der Rangliste) und landen dann im Dashboard.

Das Dashboard hat drei Tabs – **Meine Empfehlungen** (alle Leads mit Status), **Meine Provision** (laufende Verträge, Auszahlungs-Historie, Rechner) und **Rangliste** (Quartals-Champion, Top-Empfehler im Team).

<div class="mockup-frame">
  <div class="mockup-phone">
    <div class="mockup-phone-screen">
      <div class="mockup-hero">
        <div class="mockup-hero-greeting">Hey Sascha 👋</div>
        <div class="mockup-stat-row">
          <div class="mockup-stat">
            <div class="mockup-stat-icon">€</div>
            <div class="mockup-stat-label">Diesen Monat</div>
            <div class="mockup-stat-value">89,70 EUR</div>
          </div>
          <div class="mockup-stat">
            <div class="mockup-stat-icon" data-color="amber">↑</div>
            <div class="mockup-stat-label">Gesamt verdient</div>
            <div class="mockup-stat-value">412,30 EUR</div>
          </div>
          <div class="mockup-stat">
            <div class="mockup-stat-icon" data-color="green">⌘</div>
            <div class="mockup-stat-label">Aktive Kunden</div>
            <div class="mockup-stat-value">3</div>
          </div>
        </div>
        <div class="mockup-disclaimer">Brutto – wird über die Gehaltsabrechnung ausgezahlt</div>
        <div class="mockup-badges">
          <span class="mockup-badge active">🎯 Erster Lead!</span>
          <span class="mockup-badge active">🏆 Erster Abschluss!</span>
          <span class="mockup-badge active">💰 500€ Club!</span>
          <span class="mockup-badge">🔒 1.000€ Club</span>
          <span class="mockup-badge">🔒 Top-Empfehler</span>
        </div>
      </div>
      <div class="mockup-tabs">
        <div class="mockup-tab active">Meine Empfehlungen</div>
        <div class="mockup-tab">Meine Provision</div>
        <div class="mockup-tab">Rangliste</div>
      </div>
      <div class="mockup-content">
        <div class="mockup-filter-row">
          <span class="mockup-filter active">Alle</span>
          <span class="mockup-filter">Aktiv</span>
          <span class="mockup-filter">Gewonnen</span>
          <span class="mockup-filter">Verloren</span>
        </div>
        <div class="mockup-card">
          <div class="mockup-card-head">
            <div>
              <div class="mockup-card-title">Becker Maschinenbau GmbH</div>
              <div class="mockup-card-sub">Markus Becker</div>
            </div>
            <span class="mockup-status won">Mandant!</span>
          </div>
          <div class="mockup-card-provision">29,90 EUR/Monat × noch 9 Monate</div>
          <div class="mockup-card-date">14.03.2026</div>
        </div>
        <div class="mockup-card">
          <div class="mockup-card-head">
            <div>
              <div class="mockup-card-title">Petersen Logistik</div>
              <div class="mockup-card-sub">Anke Petersen</div>
            </div>
            <span class="mockup-status meeting">Erstgespräch geplant</span>
          </div>
          <div class="mockup-card-date">02.04.2026</div>
        </div>
        <div class="mockup-card">
          <div class="mockup-card-head">
            <div>
              <div class="mockup-card-title">Heinrichsen &amp; Partner</div>
              <div class="mockup-card-sub">Ole Heinrichsen</div>
            </div>
            <span class="mockup-status sent">Mail gesendet</span>
          </div>
          <div class="mockup-card-date">21.04.2026</div>
        </div>
      </div>
      <div class="mockup-fab">+</div>
    </div>
  </div>
  <p class="mockup-caption">Mitarbeiter-Dashboard <code>dsb.fraghugo.de/partner</code> – Live-Mockup wie es im Browser des Mitarbeiters aussieht. Provisionen, Leads und Milestones auf einen Blick.</p>
</div>

### Schritt 1: Empfehlung anlegen

Tippt der Mitarbeiter unten rechts auf das Plus-Symbol, öffnet sich das Lead-Formular mit fünf Pflichtfeldern: **Firmenname**, **Ansprechpartner**, **E-Mail**, geschätzte **Mitarbeiterzahl** und ein optionales **Notiz**-Feld („Hat in einem Termin neulich gefragt, ob wir auch DSGVO machen"). Danach ein Klick auf „Empfehlung speichern" – das war's.

Ab diesem Moment bekommt der Mitarbeiter Status-Updates direkt im Portal: **Mail gesendet → Kontaktiert → Erstgespräch geplant → Angebot raus → Mandant!**

### Schritt 2: Provision verfolgen

Sobald der Status auf **Mandant!** springt, läuft die Provision. Der Tab **Meine Provision** zeigt dem Mitarbeiter genau, was er aktuell verdient, was bereits ausgezahlt wurde und wann jede Provisionslinie ausläuft.

<div class="mockup-frame">
  <div class="mockup-card-row">
    <div class="mockup-stat-card">
      <div class="mockup-stat-card-label">Aktive Provisionen</div>
      <div class="mockup-stat-card-value">89,70 EUR <span>/Monat</span></div>
      <div class="mockup-stat-card-sub">3 aktive Mandate</div>
    </div>
    <div class="mockup-stat-card">
      <div class="mockup-stat-card-label">Provisions-Verlauf</div>
      <div class="mockup-stat-card-value">412,30 EUR</div>
      <div class="mockup-stat-card-sub">Bisher ausgezahlt</div>
    </div>
    <div class="mockup-stat-card highlighted">
      <div class="mockup-stat-card-label">Provisions-Rechner</div>
      <div class="mockup-stat-card-value teal">+29,90 EUR</div>
      <div class="mockup-stat-card-sub">Nächster Professional-Kunde → 119,60 EUR/Monat</div>
    </div>
  </div>
  <div class="mockup-payout-list">
    <div class="mockup-payout-row">
      <span class="mockup-payout-icon paid">✓</span>
      <span class="mockup-payout-month">März 2026</span>
      <span class="mockup-payout-amount">89,70 EUR</span>
      <span class="mockup-payout-status paid">ausgezahlt</span>
    </div>
    <div class="mockup-payout-row">
      <span class="mockup-payout-icon paid">✓</span>
      <span class="mockup-payout-month">Februar 2026</span>
      <span class="mockup-payout-amount">59,80 EUR</span>
      <span class="mockup-payout-status paid">ausgezahlt</span>
    </div>
    <div class="mockup-payout-row">
      <span class="mockup-payout-icon paid">✓</span>
      <span class="mockup-payout-month">Januar 2026</span>
      <span class="mockup-payout-amount">29,90 EUR</span>
      <span class="mockup-payout-status paid">ausgezahlt</span>
    </div>
  </div>
  <p class="mockup-caption">Tab „Meine Provision" – aktive Linien, Auszahlungshistorie und ein Rechner, der zeigt, was der nächste Lead bringt.</p>
</div>

## Provisionsmodell

Das Modell ist bewusst einfach gehalten: **10 % vom Mandanten-Monatsbeitrag, 12 Monate lang.** Es spielt keine Rolle, wie groß das empfohlene Unternehmen ist – die Provision bemisst sich nur am gewählten Tarif.

| Tarif | Mandanten-Beitrag | Provision/Monat | Provision gesamt (12 Monate) |
|-------|-------------------|-----------------|------------------------------|
| Hugo DSB Starter | 149 € netto | **14,90 €** | 178,80 € |
| Hugo DSB Professional | 299 € netto | **29,90 €** | 358,80 € |
| Hugo DSB Enterprise | 499 € netto | **49,90 €** | 598,80 € |

Ein Mitarbeiter, der über zwölf Monate fünf Professional-Mandate platziert, verdient **149,50 € pro Monat** zusätzlich aufs Gehalt – steuerpflichtig, regulär verbeitragt, im Lohnnachweis nachvollziehbar. Wir zahlen bewusst keine Einmal-Boni: Eine laufende Provision motiviert den Mitarbeiter, **Kunden zu empfehlen, von denen er weiß, dass sie auch dranbleiben**.

> **Pragmatik geht vor Pomp.** Wir sehen die Empfehlung als **dauerhafte Brücke** zwischen Ihrem Systemhaus und dem Mandanten – nicht als One-Shot. Deshalb 12 Monate Provision, nicht 1.
> — Nils Oehmichen, Datenschutzberater frag.hugo

## Wie der DATEV-Export funktioniert

Hier kommt der Teil, der für Geschäftsführer und Buchhaltung relevant ist. Am **1. jedes Monats um 8:00 Uhr** läuft im Hintergrund eine automatisierte Funktion (`partner-export`), die folgendes tut:

1. **Provisionen berechnen** – alle aktiven Mandate werden durchgerechnet, jedem Mitarbeiter wird seine Monatssumme zugeordnet.
2. **DATEV-CSV erzeugen** – im offiziellen DATEV-Lohnimport-Format: `Personalnummer;Nachname;Vorname;Lohnart;Betrag;Bezeichnung;Monat;Jahr`. UTF-8 mit BOM, Semikolon-getrennt, deutsches Zahlenformat (Komma statt Punkt). Ein Eintrag pro Mitarbeiter pro Mandant.
3. **Drei E-Mails versenden:**
   - **An die Buchhaltung** Ihres Systemhauses: Detailtabelle aller Mitarbeiter und ihrer Mandanten + DATEV-CSV als Anhang + Sammelrechnung von frag.hugo (Bruttosumme × 1,22 Arbeitgeber-Pauschale + 19 % USt).
   - **An die Geschäftsführung**: Kennzahlen-Übersicht (Top-Empfehler des Monats, Pipeline, MRR aus Empfehlungen, ROI-Vergleich Provisionen vs. Neuumsatz).
   - **An jeden Mitarbeiter persönlich**: seine Provisionssumme, Aufschlüsselung pro Mandant, sein aktueller Stand, eine motivierende Nächster-Schritt-Box.
4. **CSV ins Archiv legen** – jede Datei wird unter `partner-invoices/datev/datev-import-YYYY-MM.csv` versioniert abgelegt, jederzeit nachvollziehbar.

Der Buchhaltung bleibt **eine** Aktion: CSV aus der Mail ziehen, in DATEV importieren, fertig. Kein manuelles Eintippen pro Mitarbeiter, keine Formelarbeit, keine Dopplung.

<div class="mockup-frame">
  <div class="mockup-csv">
    <div class="mockup-csv-head">
      <span class="mockup-csv-icon">📄</span>
      <span class="mockup-csv-name">tippgeber-provision-2026-04.csv</span>
      <span class="mockup-csv-meta">UTF-8 · 7 Zeilen · 614 Bytes</span>
    </div>
    <pre class="mockup-csv-body">Personalnummer;Nachname;Vorname;Lohnart;Betrag;Bezeichnung;Monat;Jahr
1042;Behrens;Sascha;9001;29,90;Tippgeber-Provision: Becker Maschinenbau GmbH;04;2026
1042;Behrens;Sascha;9001;29,90;Tippgeber-Provision: Petersen Logistik;04;2026
1042;Behrens;Sascha;9001;29,90;Tippgeber-Provision: Heinrichsen &amp; Partner;04;2026
1058;Kowalski;Mira;9001;14,90;Tippgeber-Provision: Tellmann Steuerberatung;04;2026
1058;Kowalski;Mira;9001;49,90;Tippgeber-Provision: Holm &amp; Söhne KG;04;2026
1071;Akbulut;Deniz;9001;29,90;Tippgeber-Provision: Norddeutsche Werft;04;2026
</pre>
  </div>
  <p class="mockup-caption">DATEV-Lohnimport-CSV (Beispiel) – ein Eintrag pro Mitarbeiter pro Mandant, Lohnart frei konfigurierbar (Standard: 9001).</p>
</div>

### Was die Buchhaltung sieht

Die Buchhaltung Ihres Systemhauses bekommt eine eigens gestaltete Mail mit Detail-Tabelle, Anhang und Rechnung. Das sieht so aus:

<div class="mockup-frame">
  <div class="mockup-email">
    <div class="mockup-email-head">
      <div class="mockup-email-from">frag.hugo Partner <span class="mockup-email-addr">&lt;noreply@fraghugo.de&gt;</span></div>
      <div class="mockup-email-to">An: rechnungen@ihr-systemhaus.de · CC: buchhaltung@ihr-systemhaus.de</div>
      <div class="mockup-email-subject">Frag Hugo Provisionsabrechnung April 2026 – Rechnung + DATEV-Import</div>
    </div>
    <div class="mockup-email-body">
      <div class="mockup-email-banner">frag.hugo <span style="color:#0EA5E9">Partner</span> · Tippgeber-Abrechnung</div>
      <p>Hallo zusammen,<br>anbei die monatliche Provisionsabrechnung für <strong>April 2026</strong>.</p>
      <div class="mockup-email-summary">
        <div class="mockup-email-summary-label">Kurzfassung</div>
        <p>Im April 2026 haben <strong>3 Mitarbeiter</strong> aktive Empfehlungs-Provisionen für insgesamt <strong>6 frag.hugo-Mandanten</strong> erhalten.</p>
      </div>
      <table class="mockup-email-table">
        <thead><tr><th>Pers-Nr</th><th>Mitarbeiter</th><th>Mandant</th><th>Plan</th><th>Provision</th></tr></thead>
        <tbody>
          <tr><td>1042</td><td>Behrens, S.</td><td>Becker Maschinenbau</td><td>Professional</td><td>29,90 €</td></tr>
          <tr><td>1042</td><td>Behrens, S.</td><td>Petersen Logistik</td><td>Professional</td><td>29,90 €</td></tr>
          <tr><td>1042</td><td>Behrens, S.</td><td>Heinrichsen &amp; Partner</td><td>Professional</td><td>29,90 €</td></tr>
          <tr><td>1058</td><td>Kowalski, M.</td><td>Tellmann Steuerber.</td><td>Starter</td><td>14,90 €</td></tr>
          <tr><td>1058</td><td>Kowalski, M.</td><td>Holm &amp; Söhne KG</td><td>Enterprise</td><td>49,90 €</td></tr>
          <tr><td>1071</td><td>Akbulut, D.</td><td>Norddeutsche Werft</td><td>Professional</td><td>29,90 €</td></tr>
        </tbody>
      </table>
      <div class="mockup-email-totals">
        <div><span>Summe Provisionen (netto)</span><strong>184,40 €</strong></div>
        <div><span>AG-Pauschale (×1,22)</span><strong>225,00 €</strong></div>
        <div><span>zzgl. 19 % USt</span><strong>42,75 €</strong></div>
        <div class="mockup-email-totals-final"><span>Rechnungsbetrag</span><strong>267,75 €</strong></div>
      </div>
      <div class="mockup-email-attach">📎 tippgeber-provision-2026-04.csv (DATEV-Import) · 614 Bytes</div>
    </div>
  </div>
  <p class="mockup-caption">Automatisch generierte Buchhaltungs-Mail mit Detailtabelle und CSV-Anhang. Die Sammelrechnung ist beigefügt – Ihr Systemhaus zahlt einmal an frag.hugo, intern wird per Lohnabrechnung weitergegeben.</p>
</div>

## Was Sie als Geschäftsführer eines Systemhauses davon haben

Das Programm wurde mit **hagel IT** als erstem Partner pilotiert – einem Hamburger IT-Systemhaus mit gut 30 Mitarbeitern. Die Logik ist auf andere Häuser direkt übertragbar:

- **Zusatz-Umsatz, kein Zusatz-Aufwand für Ihre Berater.** Ihre Mitarbeiter kennen den Datenschutz-Schmerz Ihrer Kunden, wollen sich aber nicht selbst zum DSB ausbilden lassen. Mit dem Programm haben sie ein Werkzeug, das sie an einen Spezialisten reichen können – und einen finanziellen Anreiz, den Schmerz aktiv anzusprechen.
- **Mitarbeiter-Bindung.** Die laufende Provision ist eine Form von Bonus-Modell, das jeder Mitarbeiter selbst beeinflussen kann. Es schafft eine zweite Vergütungsebene jenseits des Festgehalts.
- **Cross-Selling-Pfade in Ihre eigenen Bestandsservices.** Wer einen DSB-Mandanten an frag.hugo gibt, gewinnt häufig auch ein technisches Mandat für Ihr Haus (M365-Härtung, Backup, Phishing-Schulung). Der Datenschutz öffnet die Tür, das Systemhaus bekommt den IT-Vertrag.
- **Buchhaltung läuft komplett automatisiert.** Sie als GF treffen die Entscheidung einmal („wir machen mit"), danach läuft die Abrechnung automatisch. Ihre Buchhaltung bekommt monatlich **eine** Rechnung, **eine** CSV, **eine** klare Zuordnung pro Mitarbeiter.
- **Volle Transparenz für Ihre Compliance.** Jeder DATEV-Eintrag hat Bezug („Tippgeber-Provision: Firma X"), die Lohnart ist konfigurierbar, das Archiv ist versioniert. Lohnsteuer-Außenprüfung kein Thema.

### Was es Sie kostet

frag.hugo stellt Ihrem Systemhaus monatlich die **Bruttoprovision × 1,22** in Rechnung – das deckt die Arbeitgeber-Sozialversicherungs-Pauschale, die ohnehin bei jeder Lohnzahlung anfällt. Auf diese Sammelrechnung kommen 19 % USt, die Sie regulär als Vorsteuer ziehen.

Ein Beispiel: Drei Mitarbeiter platzieren in einem Monat sechs Mandate – Provisionssumme 184,40 € brutto. Die Sammelrechnung an Ihr Systemhaus liegt dann bei **267,75 € (inkl. USt)**. Ihre Mitarbeiter bekommen 184,40 € netto-brutto auf die Lohnabrechnung – die Lohnsteuer wird regulär abgeführt.

Im Gegenzug entsteht an Ihren Empfehlungen ein laufender MRR von **184,40 € × 12 Monate = 2.212,80 €** für frag.hugo. Wir teilen davon 1/12 mit Ihrem Mitarbeiter (also 14 %, weil 10 % Provision × 1,22 Pauschale × 1,19 USt = ~14,5 % auf den Netto-Beitrag des Kunden). **Ein Modell, das nur funktioniert, wenn beide Seiten es transparent sehen** – deshalb steht es so offen in der Doku.

## Häufige Fragen

**Müssen wir als Systemhaus einen Vertrag mit frag.hugo schließen?**
Ja – es gibt einen schlanken Partner-Rahmenvertrag (Provisionsmodell, Datenschutz, Geheimhaltung). Wird einmal unterzeichnet, dann läuft alles über das Portal.

**Was passiert, wenn ein Mitarbeiter Ihr Haus verlässt?**
Die Provisionen für bereits gewonnene Mandate laufen die vollen 12 Monate weiter und werden korrekt zugeordnet ausgezahlt. Empfehlungen, die noch in der Pipeline stecken, werden eingefroren oder einem anderen Mitarbeiter zugeordnet.

**Können wir das Modell auch mit einer eigenen Marke verkaufen?**
White-Label ist nicht vorgesehen, aber Co-Branding ist möglich. Die Erst-Mail an den Endkunden kann den Hinweis tragen, dass die Empfehlung über Ihr Systemhaus kommt.

**Wie wird der Datenschutz-Aspekt der Empfehlung gehandhabt?**
Der Mitarbeiter darf nur Empfehlungen anlegen, deren Kontakte er beruflich kennt und für die ein berechtigtes Interesse zur Erst-Kontaktaufnahme nach Art. 6 (1) f DSGVO besteht. Die Erst-Mail von frag.hugo enthält stets einen Opt-out und einen Verweis auf Ihre Mitarbeiter-Empfehlung.

**Gibt es Mindestziele oder Mindest-Mandanten?**
Nein. Es gibt keinen Druck, keine Quote, keine „mindestens X im Quartal"-Logik. Wer empfiehlt, verdient. Wer nicht empfiehlt, verdient nichts. Das war's.

**Wie hoch ist die Wahrscheinlichkeit, dass eine Empfehlung zum Mandanten wird?**
Aus dem Pilot mit hagel IT: rund **40 % aller persönlich angesprochenen Empfehlungen** werden Mandant, weil der Erst-Kontakt durch jemanden vermittelt wurde, dem der Kunde bereits vertraut. Bei kalten Empfehlungen liegt die Quote deutlich darunter – die laufenden Mitarbeiter-Empfehlungen sind also effizienter als jeder Outbound-Sales-Versuch.

<div class="related-articles">

### Verwandte Artikel
- [Tarife &amp; Preise](/erste-schritte/tarife/)
- [DSB-Dashboard verstehen](/hugo-dsb/dsb-dashboard/)
- [Mitarbeiter zur Schulung einladen](/hugo-dsb/mitarbeiter-einladen/)

</div>

<div class="cta-banner">
  <h3>Wollen Sie das Programm in Ihrem Systemhaus aufsetzen?</h3>
  <p>15 Minuten mit Nils und Jens reichen, um Vertrag, Onboarding und Mitarbeiter-Schulung durchzusprechen. Persönlich, kostenlos, kein Vertriebs-Pitch.</p>
  <a href="https://meet.brevo.com/fraghugo/intro" class="cta-button">Erstgespräch vereinbaren →</a>
  <small style="display:block;margin-top:0.5rem;opacity:0.6;">Lieber erstmal schreiben? <a href="https://www.fraghugo.de/kontakt/#formular">Kontaktformular →</a></small>
</div>
