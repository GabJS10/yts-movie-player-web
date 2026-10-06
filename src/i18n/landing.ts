// Landing copy. es is the source; en must have the same shape. Strings rendered with set:html
// (marked *Html) may carry inline markup; links inside them already point at their language.
import { ROUTES, type Lang } from './routes';

const es = {
  title: 'YTS Player · Dale a play y en segundos ya la estás viendo',
  description:
    'App de escritorio para Windows y Linux: explora el catálogo de YTS como en Netflix y mira la película mientras se descarga, con subtítulos en español automáticos.',
  hero: {
    lines: ['Dale a play', 'y en segundos', 'ya la estás', 'viendo'],
    lead: 'Una app de escritorio para Windows y Linux: el catálogo de YTS como en Netflix, la película empieza mientras se descarga y los subtítulos en español se ponen solos.',
    download: 'Descargar',
    pkgLabel: 'Paquete de Linux',
    otherPlatforms: 'Otras plataformas',
    latest: 'Última versión',
    meta: ['Windows 10/11', 'Linux', 'Español e inglés', 'Código abierto · MIT'],
    alt: 'Inicio de YTS Player: banner con una película recomendada, sus datos de versión y los botones Reproducir y Más info; debajo, la fila Tendencias en YTS.',
  },
  clock: {
    label: 'De abrir la app a ver la película',
    now: 'Ahora',
    openApp: 'Abres la app',
    fine: 'Tiempos de ejemplo: dependen de tu conexión y de cuánta gente comparte la película.',
  },
  home: {
    now: 'Te recibe',
    h: 'Abres la app y ya sabe qué te gusta',
    body: 'El inicio cambia contigo: recomendaciones según lo que viste, lo que guardaste en tu lista y tus géneros, más filas de tendencias, recientes y mejor valoradas.',
    alt: 'Inicio de YTS Player con la fila Porque viste The Godfather y la fila Mi lista; una tarjeta ampliada muestra valoración, calidades disponibles y 100+ seeds.',
  },
  search: {
    now: 'Buscas',
    h: 'Encuentra cualquier cosa al escribir',
    body: 'Busca por título y filtra por género, calidad o valoración. Los filtros siguen ahí cuando vuelves.',
    alt: 'Búsqueda de YTS Player: el término matrix con filtros de género, calidad, valoración y orden, y ocho resultados.',
  },
  version: {
    now: 'Eliges versión',
    h: 'Eliges versión sabiendo cómo va a ir',
    body: 'Calidad, tamaño y cuánta gente la comparte, a la vista antes de darle a play. Las barras verdes te dicen si arrancará rápido.',
    alt: 'Ficha de una película en YTS Player con sinopsis, reparto y la tabla Elige versión.',
    table: 'Ejemplo: elige versión',
    head: ['Calidad', 'Fuente', 'Tamaño', 'Enjambre'],
    sizes: ['1,3 GB', '2,4 GB', '2,4 GB', '5,8 GB'],
    vlc: 'Se abre en VLC',
  },
  stream: {
    now: 'Le das a play',
    h: 'Empieza mientras se descarga',
    body: 'No esperas a que baje entera: con unos pocos megas listos, arranca. Y puedes adelantar a cualquier punto de la película.',
    aria: 'Ejemplo de la pantalla de carga: el búfer se llena mientras llegan peers, velocidad y megas listos.',
    size: '2,4 GB',
    connecting: 'Conectando…',
    legend: ['Descargado', 'Lo siguiente', 'Pendiente'],
    stats: ['Peers', 'Velocidad', 'Listo'],
    zero: '0,0',
  },
  subs: {
    now: 'Lees en español',
    h: 'Subtítulos en español, sin buscar nada',
    bodyHtml:
      'La app los encuentra y elige los que mejor encajan con tu versión. ¿Van adelantados? Ajusta el retraso al vuelo, o carga tu propio <span class="tnum">.srt</span>.',
    alt: 'Reproductor de YTS Player con un subtítulo en español en pantalla y el menú de subtítulos abierto, que marca las versiones que coinciden con la tuya.',
  },
  resume: {
    now: 'Y mañana sigues',
    h: 'Lo dejas, y retoma en el segundo exacto',
    body: 'Continuar viendo te devuelve a donde ibas. Y si prefieres tenerla sin conexión, descárgala: pausa, reanuda y elige la carpeta.',
    contAria: 'Ejemplo de Continuar viendo: Avengers: Infinity War, quedan 1 h 7 min.',
    contTxt: 'Quedan 1 h 7 min · 1:22:10 de 2:29:00',
    dlAria: 'Ejemplo de descargas: una película ya en la biblioteca y otra al 64 %.',
    dl: [
      { size: '1080p · 2,1 GB', state: 'En la biblioteca' },
      { size: '1080p · 1,8 GB', state: '64 % · 3,2 MB/s' },
    ],
  },
  finale: {
    now: 'Viendo la película',
    h: 'Ya la estás viendo.',
    cta: 'Descargar YTS Player',
    fine: 'Los tiempos del reloj son de ejemplo: dependen de tu conexión y de cuánta gente comparte la película.',
  },
  extras: {
    h: 'Y lo que no se ve en 30 segundos',
    items: [
      { word: 'Tráilers', text: 'Ve el tráiler sin salir de la app antes de decidirte.' },
      { word: 'Teclado', text: 'Todo se maneja sin ratón, y el reproductor tiene sus atajos.', keys: true },
      { word: 'Tu idioma', text: 'La app está en español y en inglés: sigue el idioma de tu sistema y se cambia en Ajustes › Idioma.' },
      { word: 'Sin conexión', text: 'Sin internet, tu biblioteca descargada sigue a mano.' },
      { word: 'VLC', text: 'Las versiones que la app no puede reproducir se abren en VLC, con sus subtítulos.' },
      { word: 'Al día', text: 'La app te avisa cuando sale una versión nueva.' },
    ],
    space: 'Espacio',
    left: 'Flecha izquierda',
    right: 'Flecha derecha',
  },
  downloads: {
    id: 'descargas',
    h: 'Descarga la tuya',
    platforms: 'Windows · Linux',
    howTo: 'Cómo instalar en cada sistema',
    whatsNew: (v: string | null) => (v ? `Qué hay de nuevo en la v${v}` : 'Qué hay de nuevo'),
    all: 'Todas las versiones en GitHub',
    mac: 'macOS: todavía no.',
  },
  faq: {
    h: 'Preguntas rápidas',
    items: [
      {
        q: '¿Necesito una cuenta?',
        aHtml: `Para explorar y ver, no. Para los subtítulos automáticos necesitas una API key gratuita de OpenSubtitles; se pega una vez en Ajustes. <a href="${ROUTES.subtitles.es}">Cómo conseguirla</a>.`,
      },
      {
        q: 'Windows dice que “protegió tu PC”. ¿Es normal?',
        aHtml:
          'Sí: el instalador no está firmado, porque un certificado de firma cuesta dinero. Pulsa <strong>Más información → Ejecutar de todas formas</strong>. El código está abierto en GitHub.',
      },
      {
        q: '¿Por qué algunas versiones se abren en VLC?',
        aHtml:
          'Algunas versiones 4K usan un formato (x265/HEVC) que la app no siempre puede reproducir. Cuando pasa, te ofrece abrirla en VLC con sus subtítulos, o elegir otra versión.',
      },
      { q: '¿Hay versión para Mac?', aHtml: 'Todavía no. Por ahora, Windows 10/11 y Linux (.deb, .rpm y AppImage).' },
      {
        q: '¿Dónde guarda las películas y los ajustes?',
        aHtml: `En tu carpeta de usuario, y puedes mover la caché y las descargas al disco que quieras desde Ajustes. <a href="${ROUTES.data.es}">Todas las rutas</a>.`,
      },
    ],
  },
  legal: {
    h: 'Aviso legal',
    parasHtml: [
      'YTS Player es solo un cliente: no aloja, sube ni distribuye contenido. Muestra el catálogo público de la API de YTS y usa BitTorrent para descargar lo que tú eliges; mientras descargas, también compartes partes del archivo con otras personas.',
      `Gran parte de ese catálogo tiene derechos de autor, y descargarlo o compartirlo puede ser ilegal en tu país. El uso de la app es responsabilidad de quien la usa. Este proyecto no tiene relación con YTS ni con OpenSubtitles. <a href="${ROUTES.legal.es}">Aviso legal completo</a>.`,
    ],
  },
};

export type LandingCopy = typeof es;

const en: LandingCopy = {
  title: 'YTS Player · Press play and you’re watching in seconds',
  description:
    'A desktop app for Windows and Linux: browse the YTS catalog like Netflix and watch the movie while it downloads, with subtitles in your language picked automatically.',
  hero: {
    lines: ['Press play', 'and in seconds', 'you’re already', 'watching'],
    lead: 'A desktop app for Windows and Linux: the YTS catalog browsed like Netflix, the movie starts while it downloads and subtitles in your language load on their own.',
    download: 'Download',
    pkgLabel: 'Linux package',
    otherPlatforms: 'Other platforms',
    latest: 'Latest version',
    meta: ['Windows 10/11', 'Linux', 'English & Spanish', 'Open source · MIT'],
    alt: 'YTS Player home screen: a banner with a recommended movie, its version details and the Play and More info buttons; below, the Trending on YTS row. The app is shown in Spanish.',
  },
  clock: {
    label: 'From opening the app to watching the movie',
    now: 'Now',
    openApp: 'You open the app',
    fine: 'Example timings: they depend on your connection and on how many people are sharing the movie.',
  },
  home: {
    now: 'It greets you',
    h: 'You open the app and it already knows your taste',
    body: 'Home changes with you: recommendations based on what you watched, what you saved to your list and your genres, plus rows of trending, recent and top-rated movies.',
    alt: 'YTS Player home with the rows Because you watched The Godfather and My list; an expanded card shows the rating, available qualities and 100+ seeds.',
  },
  search: {
    now: 'You search',
    h: 'Find anything as you type',
    body: 'Search by title and filter by genre, quality or rating. Your filters are still there when you come back.',
    alt: 'YTS Player search: the term matrix with genre, quality, rating and sort filters, and eight results.',
  },
  version: {
    now: 'You pick a version',
    h: 'Pick a version knowing how it will play',
    body: 'Quality, size and how many people are sharing it, all in view before you press play. The green bars tell you whether it will start fast.',
    alt: 'A movie page in YTS Player with synopsis, cast and the Choose a version table.',
    table: 'Example: choose a version',
    head: ['Quality', 'Source', 'Size', 'Swarm'],
    sizes: ['1.3 GB', '2.4 GB', '2.4 GB', '5.8 GB'],
    vlc: 'Opens in VLC',
  },
  stream: {
    now: 'You press play',
    h: 'It starts while it downloads',
    body: 'No waiting for the whole file: a few megabytes in, it starts. And you can skip to any point in the movie.',
    aria: 'Example of the loading screen: the buffer fills up as peers, speed and ready megabytes come in.',
    size: '2.4 GB',
    connecting: 'Connecting…',
    legend: ['Downloaded', 'Up next', 'Pending'],
    stats: ['Peers', 'Speed', 'Ready'],
    zero: '0.0',
  },
  subs: {
    now: 'Subtitles are on',
    h: 'Subtitles in your language, no searching',
    bodyHtml:
      'The app finds them and picks the ones that best match your version: Spanish by default, or English, Portuguese, French, Italian or German. Running early? Adjust the delay on the fly, or load your own <span class="tnum">.srt</span>.',
    alt: 'YTS Player’s player with a Spanish subtitle on screen and the subtitles menu open, marking the versions that match yours.',
  },
  resume: {
    now: 'Tomorrow you carry on',
    h: 'Stop, and it picks up at the exact second',
    body: 'Continue watching takes you back to where you were. And if you’d rather have it offline, download it: pause, resume and choose the folder.',
    contAria: 'Example of Continue watching: Avengers: Infinity War, 1 h 7 min left.',
    contTxt: '1 h 7 min left · 1:22:10 of 2:29:00',
    dlAria: 'Example of downloads: one movie already in the library and another at 64%.',
    dl: [
      { size: '1080p · 2.1 GB', state: 'In the library' },
      { size: '1080p · 1.8 GB', state: '64% · 3.2 MB/s' },
    ],
  },
  finale: {
    now: 'Watching the movie',
    h: 'And you’re watching.',
    cta: 'Download YTS Player',
    fine: 'The clock’s timings are examples: they depend on your connection and on how many people are sharing the movie.',
  },
  extras: {
    h: 'And what doesn’t fit in 30 seconds',
    items: [
      { word: 'Trailers', text: 'Watch the trailer without leaving the app before you decide.' },
      { word: 'Keyboard', text: 'Everything works without a mouse, and the player has its own shortcuts.', keys: true },
      { word: 'Your language', text: 'The app speaks English and Spanish: it follows your system language and you can switch it in Settings › Language.' },
      { word: 'Offline', text: 'No internet? Your downloaded library is still at hand.' },
      { word: 'VLC', text: 'Versions the app can’t play open in VLC, subtitles included.' },
      { word: 'Up to date', text: 'The app tells you when a new version is out.' },
    ],
    space: 'Space',
    left: 'Left arrow',
    right: 'Right arrow',
  },
  downloads: {
    id: 'downloads',
    h: 'Get yours',
    platforms: 'Windows · Linux',
    howTo: 'How to install on each system',
    whatsNew: (v: string | null) => (v ? `What’s new in v${v}` : 'What’s new'),
    all: 'All versions on GitHub',
    mac: 'macOS: not yet.',
  },
  faq: {
    h: 'Quick questions',
    items: [
      {
        q: 'Do I need an account?',
        aHtml: `To browse and watch, no. Automatic subtitles need a free OpenSubtitles API key, pasted once in Settings. <a href="${ROUTES.subtitles.en}">How to get one</a>.`,
      },
      {
        q: 'Windows says it “protected your PC”. Is that normal?',
        aHtml:
          'Yes: the installer isn’t signed, because a code-signing certificate costs money. Click <strong>More info → Run anyway</strong>. The code is open on GitHub.',
      },
      {
        q: 'Why do some versions open in VLC?',
        aHtml:
          'Some 4K versions use a format (x265/HEVC) the app can’t always play. When that happens, it offers to open it in VLC with its subtitles, or to pick another version.',
      },
      { q: 'Is there a Mac version?', aHtml: 'Not yet. For now, Windows 10/11 and Linux (.deb, .rpm and AppImage).' },
      {
        q: 'Where does it keep movies and settings?',
        aHtml: `In your user folder, and you can move the cache and downloads to any drive from Settings. <a href="${ROUTES.data.en}">All the paths</a>.`,
      },
    ],
  },
  legal: {
    h: 'Legal notice',
    parasHtml: [
      'YTS Player is only a client: it doesn’t host, upload or distribute any content. It shows the public catalog of the YTS API and uses BitTorrent to download what you choose; while you download, you also share pieces of the file with other people.',
      `Much of that catalog is copyrighted, and downloading or sharing it may be illegal in your country. Using the app is the responsibility of whoever uses it. This project has no connection with YTS or OpenSubtitles. <a href="${ROUTES.legal.en}">Full legal notice</a>.`,
    ],
  },
};

export const LANDING: Record<Lang, LandingCopy> = { es, en };
