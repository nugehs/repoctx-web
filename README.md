# otito-web

Marketing site for [Òtítọ́](https://github.com/BASHBOP/otito) — deterministic
repository evidence for agents and reviewers.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).
The brand is original to Òtítọ́ and **terminal-native**: the whole page is the
terminal. Dark canvas (`#0d1117`), JetBrains Mono everywhere, the ASCII rainbow
wordmark as the hero, box-drawing UI, and the CLI's own GitHub-dark syntax
palette (the same stops as the rainbow seam). It tells the trust-layer story —
context → tests → permissions → review → evidence.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output in dist/
npm run preview  # serve the production build locally
```

## Structure

```
src/
  layouts/Layout.astro      page shell, fonts, meta
  components/Header.astro    sticky nav
  components/Footer.astro    footer columns
  components/Terminal.astro  reusable terminal panel (CLI dark canvas)
  pages/index.astro          landing page (hero, trust layer, features, MCP, CTA)
  styles/global.css          Tailwind v4 + @theme brand tokens
public/
  logo.svg / favicon.svg     Òtítọ́ terminal mark
```

## Deploy

The site is fully static. Any static host works (GitHub Pages, Vercel,
Netlify, Cloudflare Pages). Set the canonical URL in `astro.config.mjs`
(`site`) before deploying.
