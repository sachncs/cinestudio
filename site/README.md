# cinestudio — site/

The marketing site for [cinestudio](https://github.com/sachncs/cinestudio). This is
a standalone Vite + React + TypeScript + Tailwind app that builds to static HTML/CSS/JS
and is published to GitHub Pages.

It is intentionally decoupled from the main Next.js application — independent
`package.json`, independent install, independent build. Both can live in the same
repository without interfering.

## Develop

```bash
cd site
pnpm install
pnpm dev
```

The site runs at `http://localhost:5173`. When `GITHUB_PAGES` is not set, the Vite
base path is `/` so deep links work locally.

## Build

```bash
pnpm build
```

The static bundle is written to `site/dist/`. The CI workflow
`.github/workflows/site.yml` builds with `GITHUB_PAGES=1` so asset URLs resolve
under `/cinestudio/`, then deploys `dist/` to GitHub Pages.

## Layout

```
site/
├── public/             # favicon, og image
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css       # design tokens, base styles
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── sections/   # Hero, Overview, Capabilities, Pipeline, Showcase, Plans, FAQ, CTA
│   │   ├── ui/         # Mark, Section
│   │   └── visuals/    # HeroPreview, etc.
│   ├── content/
│   │   └── data.ts     # all marketing copy & data
│   └── lib/            # cn(), SITE constants
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## Brand

Deep editorial noir — ink/bone palette, gold/amber accents, serif display +
sans body + mono. Mirrors the runtime application's visual language defined in
`src/lib/design/tokens.ts`.