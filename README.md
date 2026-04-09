# docs.fraghugo.de

Öffentliches Hilfe-Center für Hugo Check, Hugo DSB und Hugo Shield. Astro + Starlight, deutscher Content, Hugo-Branding.

## Entwicklung

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # → dist/
```

## Deployment auf Cloudflare Pages

1. Cloudflare Pages → **Create project** → **Connect to Git** (oder Direct Upload des `dist/`-Ordners)
2. **Build command:** `npm run build`
3. **Build output directory:** `dist`
4. **Node version:** 20+
5. **Custom domain:** `docs.fraghugo.de` → CNAME auf das Pages-Projekt

## Struktur

```
src/
├── content/docs/
│   ├── erste-schritte/   # 3 Artikel
│   ├── hugo-check/       # 9 Artikel
│   ├── hugo-dsb/         # 11 Artikel
│   ├── nis2/             # 4 Artikel
│   ├── hugo-shield/      # 7 Artikel
│   ├── mitarbeiter/      # 4 Artikel
│   ├── faq/              # 3 Artikel
│   └── index.mdx         # Landing Page
├── components/HeaderLinks.astro
├── styles/custom.css     # Hugo-Branding
└── content.config.ts
```

41 Artikel insgesamt. Jeder Artikel hat:
- Frontmatter (title, description)
- Article-Meta-Box (Zielgruppe, Lesezeit)
- Mindestens einen Screenshot-Verweis
- Verwandte Artikel
- CTA-Banner mit Brevo-Erstgesprächs-Link

## Branding

- **Farben:** Navy `#1A1F36`, Teal `#0EA5E9`, Amber `#F59E0B`
- **Fonts:** Plus Jakarta Sans (Body), DM Serif Display (Headlines)
- **Logo:** Hugo Oktopus (`/public/logo-octopus.svg`)

## Screenshots

Liegen in `public/screenshots/`. Aktuell aus den öffentlichen Landing-Pages der drei Apps. Interne Screen-Captures (VVT-Form, NIS2-Dashboard, etc.) werden später aus den App-Repos ergänzt – die `<img>`-Pfade in den Artikeln verweisen bereits auf die richtigen Dateinamen.

## Suche

Pagefind ist eingebaut, indexiert alle 41 Artikel automatisch beim Build.
