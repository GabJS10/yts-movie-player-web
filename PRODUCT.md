# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static site (no SSR, no adapter), Node 24, deployed to Netlify (`*.netlify.app`). Tokens as CSS custom properties; Tailwind optional. Minimal JS: OS detection and scroll animation. Decided in the app repo's `docs/WEB.md`.

## Users

The person from the app's PRODUCT.md: someone on Linux or Windows who today downloads movies by hand from yts.gg and wants to browse the catalog and press play instead. On this site they arrive cold, decide in a glance whether the app is worth installing, and need the right installer for their system.

## Product Purpose

Public site for YTS Player (the desktop app in `../yts-movie-player`): a landing that persuades and routes to the correct installer, plus documentation (`/descargar`, `/docs/subtitulos`, `/docs/datos`, `/docs/compilar`), changelog (`/novedades`) and legal (`/legal`). Success: a first-time visitor understands what the app is and downloads the installer for their OS.

## Positioning

Not a streaming service and not a content site: a desktop client over the public YTS catalog whose playback is a live torrent. Inherited from the app.

## Operating Context

- Visitors come from GitHub, links and search; desktop first (Linux/Windows), but the site must work 375–1920 px.
- Release data (tag, date, asset URLs per platform) is fetched from the GitHub API at build time, with a fallback to the releases page.

## Capabilities and Constraints

- App features to communicate (README "Qué hace"): personalised home with rotating banner, streaming that starts in seconds with seeking, automatic Spanish subtitles (OpenSubtitles, user's free API key), Mi lista and Continuar viendo (resumes to the second), downloads for offline viewing, trailers, filtered search, full keyboard navigation, offline mode, HEVC opens in VLC.
- Platforms: Windows 10/11 (`.exe`), Ubuntu/Debian/Mint/Pop!_OS (`.deb`), Fedora/openSUSE (`.rpm`), any Linux (AppImage). macOS not yet.
- All copy in Spanish.
- Legal limits (non-negotiable): the app is only a client and hosts/distributes nothing; never promise "free movies" or similar; never present the YTS brand as ours or imply a relation with YTS or OpenSubtitles; visible short legal notice on the landing (copyrighted catalogue, may be illegal per country, user's responsibility, BitTorrent also uploads) linking to `/legal`; no real movie posters outside the existing screenshots.

## Brand Commitments

- Same identity as the app: its DESIGN.md tokens verbatim (yts.gg greys, YTS green as the only accent, Archivo variable condensed heavy titles), dark theme only. User-pinned.
- Green reserved for the primary action (Descargar) and point accents.
- Commercial tone: hook and benefits first; technical detail (seeds, buffer, x265/VLC, paths) goes to docs and FAQ.
- Must not read as a piracy site (loud banners, "gratis", movie counters as bait), a generic SaaS template (icon-tile grids, gradients), or a sober README (needs real motion and energy).

## Evidence on Hand

- Screenshots 1440×900: `docs/screenshots/inicio.png`, `ficha.png`, `buscar.png` (app repo).
- Icon: `design/icon/app-icon.svg`, `design/icon/preview.png`. Fonts: `design/prototype/fonts/`.
- App components may be recreated in HTML/CSS as animated demonstrations (buffer piece map, release plate, five-bar signal, continue-watching bar) with sample data, labelled as illustration; no real posters. User-approved.
- No testimonials, user counts, download counts or benchmarks exist; do not invent them.

## Product Principles

1. One glance to understand, one click to the right installer.
2. Show the app working rather than describing it.
3. Benefits up front, mechanics in the docs.
4. Honest about what it is: a client, with its legal weight stated plainly.

## Accessibility & Inclusion

Visible focus as in the app, AA contrast, keyboard navigable, `alt` on screenshots, full `prefers-reduced-motion` support.
