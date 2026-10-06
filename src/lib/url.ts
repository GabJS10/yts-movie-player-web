// Pages build as /descargar.html (build.format 'file'); Netlify serves them at /descargar.
// Everything public (canonical, og:url, nav state) uses that clean form, matching the sitemap.
export function cleanPath(pathname: string): string {
  const p = pathname.replace(/(\/index)?\.html$/, '').replace(/\/+$/, '');
  return p === '' ? '/' : p;
}
