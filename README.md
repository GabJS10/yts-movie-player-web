# YTS Player · sitio web

Sitio público de [YTS Player](https://github.com/GabJS10/yts-movie-player): landing, descargas, documentación, novedades y aviso legal. Publicado en **https://yts-player.netlify.app**.

Astro estático (sin SSR), desplegado en Netlify. Misma identidad visual que la app (`DESIGN.md` del repo de la app).

## Desarrollo

Requiere Node 24.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sitio estático en dist/
npm run preview  # sirve dist/
```

## Datos en tiempo de build

- **Release:** `src/lib/release.ts` lee la última release de `GabJS10/yts-movie-player` desde la API de GitHub (versión, fecha y un instalador por plataforma, asociado por sufijo). Usa `GITHUB_TOKEN` si existe. Si la API falla, el build no se rompe: los enlaces apuntan a `/releases/latest`.
- **Novedades:** `src/lib/changelog.ts` descarga `CHANGELOG.md` de la rama `main` del repo de la app; si no puede, usa la copia de `src/content/CHANGELOG.md`.

Un build hook de Netlify se dispara al publicar una release en el repo de la app, así que la web se actualiza sola.

## Estructura

| Ruta | Archivo |
|---|---|
| `/` | `src/pages/index.astro` |
| `/descargar` | `src/pages/descargar.astro` |
| `/docs/*` | `src/pages/docs/` |
| `/novedades` | `src/pages/novedades.astro` |
| `/legal` | `src/pages/legal.astro` |

Tokens y estilos base en `src/styles/global.css`; las capturas de la app en `src/assets/screenshots/` (servidas con `astro:assets`, AVIF + WebP).

