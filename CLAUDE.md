# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing/landing website for "Cabañas Ucihuen", a cabin rental business in Lago Puelo, Chubut, Argentina. Live at [ucihuen.com.ar](https://ucihuen.com.ar).

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run Prettier + ESLint checks
- `npm run format` - Auto-format with Prettier

## Tech Stack

- **SvelteKit 2** with **Svelte 5** (uses `$state`, `$derived`, `$effect`, `$props`, `{@render}` runes syntax)
- **Vite 6** bundler
- **Vercel** adapter for deployment (`@sveltejs/adapter-vercel`)
- **Swiper 7** for carousels/sliders
- **svelte-modals** for modal dialogs
- Images hosted on **ImageKit** CDN (`ik.imagekit.io/ucihuen/`)
- Google Maps embed (API key via `import.meta.env.PUBLIC_API_KEY`)
- Google Analytics (gtag)

## Architecture

Two routes: `/` (home) and `/galeria` (photo gallery). No server-side data loading — all content is static/client-side.

Layout (`+layout.svelte`): Header, Nav, page content with transitions, floating WhatsApp FAB, Footer. URL passed as `key` from `+layout.js` to trigger page transitions.

Components live in `src/lib/components/`. Data (reviews JSON) in `src/lib/data/`.

## Code Style

- Tabs for indentation, single quotes, no trailing commas, 100 char print width (see `.prettierrc`)
- Content is in Spanish
- CSS uses custom properties defined in `static/global.css` (colors, fonts, shadows)
- Mobile-first with `@media (min-width: 1024px)` breakpoint for desktop
- Self-hosted fonts: Ovo (logo), Open Sans (body), Ruluko (sections)
