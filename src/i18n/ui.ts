// Site chrome shared by every page (header, footer, doc nav, download table, commands).
// es is the source; en must have the same shape.
import type { Lang } from './routes';

const es = {
  navLabel: 'Principal',
  footLabel: 'Pie',
  download: 'Descargar',
  docs: 'Documentación',
  changelog: 'Novedades',
  legal: 'Legal',
  /** Switcher: the link to the other language, written in that language. */
  switchTo: { label: 'English', short: 'EN', title: 'Read this page in English' },
  license: { pre: 'Código bajo ', link: 'licencia MIT', post: '. La licencia cubre la app, no el contenido al que se accede con ella.' },
  docNav: 'Documentación',
  docLinks: {
    download: 'Descargar e instalar',
    subtitles: 'Subtítulos',
    data: 'Dónde guarda las cosas',
    build: 'Compilar desde el código',
    changelog: 'Novedades',
    legal: 'Aviso legal y licencia',
  },
  ogAlt: 'Inicio de YTS Player con una película destacada y la fila Tendencias.',
  platforms: {
    win: { title: 'Windows 10 / 11', note: 'Instalador por usuario, sin permisos de administrador' },
    deb: { title: 'Ubuntu · Debian · Mint · Pop!_OS', note: 'Instala solo lo necesario para reproducir' },
    rpm: { title: 'Fedora · openSUSE', note: 'Instala solo lo necesario para reproducir' },
    appimage: { title: 'Cualquier Linux', note: 'Un solo archivo, sin instalar; trae todo incluido' },
  },
  yourSystem: 'Tu sistema',
  onGitHub: 'Disponible en GitHub',
  latest: 'Última versión',
  copy: 'Copiar',
  copyCmd: (cmd: string) => `Copiar el comando: ${cmd}`,
};

export type Ui = typeof es;

const en: Ui = {
  navLabel: 'Main',
  footLabel: 'Footer',
  download: 'Download',
  docs: 'Docs',
  changelog: 'Changelog',
  legal: 'Legal',
  switchTo: { label: 'Español', short: 'ES', title: 'Leer esta página en español' },
  license: { pre: 'Code under the ', link: 'MIT licence', post: '. The licence covers the app, not the content you reach with it.' },
  docNav: 'Documentation',
  docLinks: {
    download: 'Download and install',
    subtitles: 'Subtitles',
    data: 'Where it keeps things',
    build: 'Build from source',
    changelog: 'Changelog',
    legal: 'Legal notice and licence',
  },
  ogAlt: 'YTS Player home screen with a featured movie and the Trending row.',
  platforms: {
    win: { title: 'Windows 10 / 11', note: 'Per-user installer, no administrator rights needed' },
    deb: { title: 'Ubuntu · Debian · Mint · Pop!_OS', note: 'Installs only what playback needs' },
    rpm: { title: 'Fedora · openSUSE', note: 'Installs only what playback needs' },
    appimage: { title: 'Any Linux', note: 'A single file, nothing to install; everything included' },
  },
  yourSystem: 'Your system',
  onGitHub: 'Available on GitHub',
  latest: 'Latest version',
  copy: 'Copy',
  copyCmd: (cmd: string) => `Copy the command: ${cmd}`,
};

export const UI: Record<Lang, Ui> = { es, en };
