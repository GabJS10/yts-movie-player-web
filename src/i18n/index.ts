import { cleanPath } from '../lib/url';
import { langOf, type Lang } from './routes';
import { UI } from './ui';

export * from './routes';
export { UI, type Ui } from './ui';

/** Language and chrome strings of the page being rendered. */
export function pageLang(url: URL): { lang: Lang; path: string; ui: (typeof UI)[Lang] } {
  const path = cleanPath(url.pathname);
  const lang = langOf(path);
  return { lang, path, ui: UI[lang] };
}
