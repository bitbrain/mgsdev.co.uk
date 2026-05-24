# mgsdev.co.uk website

The MGS DEV consultancy website. Deployed as a fully static site to GitHub
Pages — no server, no runtime JavaScript.

## Stack

- [Gea.js](https://github.com/dashersw/gea) — compiler-first reactive UI framework
- [Vite 8](https://vitejs.dev/) — build tool
- [`linkedom`](https://github.com/WebReflection/linkedom) — DOM implementation for SSG
- Plain CSS with [Inter](https://rsms.me/inter/) from Google Fonts

## Architecture

```
src/
├── app.tsx               # Root component composing the page
├── ssr.ts                # SSR entry, re-exports App
├── main.ts               # Client entry (dev-mode only)
├── styles.css            # All visual styles
├── globals.d.ts          # Ambient TS module declarations
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    └── Features.tsx

index.html                # HTML shell, app is injected at SSG time
ssg.mjs                   # Static site generator (linkedom + Gea)
vite.config.ts            # Vite + @geajs/vite-plugin
```

## Commands

```bash
npm install               # install deps
npm run dev               # dev server with HMR (client-rendered)
npm run build             # produce dist/ — static HTML, CSS, assets
npm run preview           # serve dist/ locally
```

## How the build works

1. `vite build --ssr src/ssr.ts --outDir dist-ssr` — compiles the App
   component (with `@geajs/vite-plugin` JSX transform) into a Node-importable
   ESM bundle at `dist-ssr/ssr.js`.
2. `node ssg.mjs` — sets up a `linkedom` DOM, dynamically imports the SSR
   bundle, instantiates `App`, renders into a detached container, and
   injects the resulting HTML into `index.html`. The dev-mode `<script>` tag
   is stripped, leaving zero client JavaScript.
3. The final `dist/` directory contains `index.html`, `styles.css`, and any
   files from `public/`. This is what gets deployed.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) runs `npm run build` on every
push to `main` and publishes `dist/` to the `gh-pages` branch.
