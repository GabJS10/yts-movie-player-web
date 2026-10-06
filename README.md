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
npm run check    # astro check (tipos)
```

## Datos en tiempo de build

- **Release:** `src/lib/release.ts` lee la última release de `GabJS10/yts-movie-player` desde la API de GitHub (versión, fecha y un instalador por plataforma, asociado por sufijo). Usa `GITHUB_TOKEN` si existe. Si la API falla, el build no se rompe: los enlaces apuntan a `/releases/latest`.
- **Novedades:** `src/lib/changelog.ts` descarga `CHANGELOG.md` de la rama `main` del repo de la app; si no puede, usa la copia de `src/content/CHANGELOG.md`. El changelog está solo en inglés: `/novedades` lo muestra tal cual, marcado `lang="en"` y con una nota.

Un build hook de Netlify se dispara al publicar una release en el repo de la app, así que la web se actualiza sola.

## Idiomas

Español en la raíz e inglés bajo `/en`, cada uno con sus slugs. El mapa de páginas pareadas está en `src/i18n/routes.ts` (lo usan el selector de idioma de la cabecera, los `hreflang` y el sitemap). Textos compartidos en `src/i18n/ui.ts`, la landing en `src/i18n/landing.ts` (un solo componente, `src/components/Landing.astro`) y los textos de los scripts de cliente en `src/scripts/strings.ts`. Las páginas de documentación tienen una versión por idioma.

En la primera visita a `/` desde fuera del sitio, un script en `Base.astro` lleva a `/en` si el primer idioma del navegador no es español. Una elección hecha con el selector (guardada en `localStorage`) siempre gana, y los rastreadores no se redirigen.

## Estructura

| Ruta (es) | Ruta (en) | Archivo |
|---|---|---|
| `/` | `/en` | `src/pages/index.astro`, `src/pages/en/index.astro` → `src/components/Landing.astro` |
| `/descargar` | `/en/download` | `src/pages/descargar.astro`, `src/pages/en/download.astro` |
| `/docs/*` | `/en/docs/*` | `src/pages/docs/`, `src/pages/en/docs/` |
| `/novedades` | `/en/changelog` | `src/pages/novedades.astro`, `src/pages/en/changelog.astro` |
| `/legal` | `/en/legal` | `src/pages/legal.astro`, `src/pages/en/legal.astro` |

Tokens y estilos base en `src/styles/global.css`; las capturas de la app en `src/assets/screenshots/` (servidas con `astro:assets`, AVIF + WebP).


## Licencia

[MIT](LICENSE).
