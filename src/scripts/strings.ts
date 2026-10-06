// Text the client scripts write into the page, in the page's language (<html lang>).
const es = {
  copied: 'Copiado',
  copyFailed: 'Selecciona y copia',
  copy: 'Copiar',
  dlWin: 'Descargar para Windows',
  dlLinux: 'Descargar para Linux',
  dlOther: 'Ver descargas',
  linuxNote: '.deb para Ubuntu, Debian, Mint y Pop!_OS · .rpm para Fedora y openSUSE · AppImage para cualquier otra.',
  macNote: 'Todavía no hay versión para macOS. Disponible para Windows 10/11 y Linux.',
  openApp: 'Abres la app',
  connecting: 'Conectando…',
  buffering: 'Llenando el búfer…',
  ready: 'Listo: empieza la película',
  decimal: ',',
};

const en: typeof es = {
  copied: 'Copied',
  copyFailed: 'Select and copy',
  copy: 'Copy',
  dlWin: 'Download for Windows',
  dlLinux: 'Download for Linux',
  dlOther: 'See downloads',
  linuxNote: '.deb for Ubuntu, Debian, Mint and Pop!_OS · .rpm for Fedora and openSUSE · AppImage for any other.',
  macNote: 'There is no macOS version yet. Available for Windows 10/11 and Linux.',
  openApp: 'You open the app',
  connecting: 'Connecting…',
  buffering: 'Filling the buffer…',
  ready: 'Ready: the movie starts',
  decimal: '.',
};

export const text = document.documentElement.lang === 'en' ? en : es;
