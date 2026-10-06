// Landing only: OS-aware download button, the scroll-driven clock, parallax and the scene demos.
import { detectOs, markRows, type Pkg } from './os';
import { text } from './strings';

const d = document;
const $ = <T extends HTMLElement = HTMLElement>(id: string) => d.getElementById(id) as T;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = (ms: number) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));

/* ---------- download button ---------- */
{
  const main = $<HTMLAnchorElement>('dl-main');
  const label = $('dl-main-label');
  const note = $('os-note');
  const pkg = $<HTMLSelectElement>('pkg');
  const urls = JSON.parse(main.dataset.urls || '{}') as Record<Pkg, string>;
  const mark = markRows;
  const os = detectOs();

  if (os === 'win') {
    label.textContent = text.dlWin;
    main.href = urls.win;
    mark('win');
  } else if (os === 'linux') {
    label.textContent = text.dlLinux;
    pkg.classList.add('on');
    note.textContent = text.linuxNote;
    note.hidden = false;
    const set = () => {
      const key = pkg.value as Pkg;
      main.href = urls[key];
      mark(key);
    };
    pkg.addEventListener('change', set);
    set();
  } else {
    label.textContent = text.dlOther;
  }
  if (os === 'mac') {
    note.textContent = text.macNote;
    note.hidden = false;
  }
}

/* ---------- the clock ---------- */
const ticks = $('ticks');
for (let i = 0; i < 30; i++) ticks.appendChild(d.createElement('i'));
const tickEls = [...ticks.children];
const tc = $('tc'), tcM = $('tc-m'), tcS = $('tc-s'), now = $('now');
const scenes = [...d.querySelectorAll<HTMLElement>('[data-t]')];
const clockSec = $('reloj');
let anchors: [number, number][] = [];

const measure = () => {
  const y0 = clockSec.getBoundingClientRect().top + scrollY;
  anchors = [
    [y0 - innerHeight * 0.25, 0],
    ...scenes.map((s): [number, number] => [s.getBoundingClientRect().top + scrollY + s.offsetHeight * 0.45 - innerHeight * 0.5, +s.dataset.t!]),
  ];
};
const timeAt = (y: number) => {
  if (y <= anchors[0][0]) return 0;
  for (let i = 1; i < anchors.length; i++) {
    const [ya, ta] = anchors[i - 1], [yb, tb] = anchors[i];
    if (y < yb) return ta + ((tb - ta) * (y - ya)) / (yb - ya);
  }
  return 30;
};

let lastSec = -1;
const fired = new Set<HTMLElement>();
const runClock = () => {
  const t = Math.max(0, Math.min(30, timeAt(scrollY)));
  const s = Math.floor(t);
  if (s !== lastSec) {
    lastSec = s;
    tcS.textContent = String(s).padStart(2, '0');
    tc.classList.toggle('run', s > 0);
    tcM.classList.toggle('on', s > 0);
    tcS.classList.toggle('on', s > 0);
    tickEls.forEach((el, i) => el.classList.toggle('held', i < s));
    let cur = text.openApp;
    scenes.forEach((sc) => { if (t >= +sc.dataset.t! - 0.5) cur = sc.dataset.now!; });
    now.textContent = cur;
  }
  scenes.forEach((sc) => {
    if (t >= +sc.dataset.t! - 1 && !fired.has(sc)) {
      fired.add(sc);
      live(sc);
    }
  });
};

/* ---------- parallax ---------- */
const pars = reduce ? [] : [...d.querySelectorAll<HTMLElement>('.par')];
const heroWin = $('hero-win');
const runPar = () => {
  const vh = innerHeight;
  pars.forEach((el) => {
    const r = el.parentElement!.getBoundingClientRect();
    if (r.bottom < -100 || r.top > vh + 100) return;
    const c = (r.top + r.height / 2 - vh / 2) * +el.dataset.par!;
    el.style.transform = `translate3d(0, ${Math.max(-24, Math.min(24, c)).toFixed(1)}px, 0)`;
  });
  if (!reduce && innerWidth > 900) {
    const p = Math.min(1, scrollY / (vh * 0.8));
    heroWin.style.transform = `rotateY(${(-9 + 9 * p).toFixed(2)}deg) rotateX(${(3 - 3 * p).toFixed(2)}deg) translate3d(0, ${(p * -30).toFixed(1)}px, 0) scale(${(1 - p * 0.04).toFixed(3)})`;
  }
};
heroWin.addEventListener('animationend', () => { heroWin.style.animation = 'none'; runPar(); }, { once: true });

let ticking = false;
const frame = () => { ticking = false; runClock(); runPar(); };
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
addEventListener('resize', () => { measure(); frame(); });
addEventListener('load', () => { measure(); frame(); });
measure();
frame();

/* ---------- 00:09 release timetable (interactive radio group) ---------- */
const tt = $('tt');
const ttRows = [...tt.querySelectorAll<HTMLElement>('.tt-row')];
const pick = (row: HTMLElement) =>
  ttRows.forEach((r) => { r.setAttribute('aria-checked', String(r === row)); r.tabIndex = r === row ? 0 : -1; });
ttRows.forEach((r, i) => {
  r.tabIndex = i === 0 ? 0 : -1;
  r.addEventListener('click', () => pick(r));
  r.addEventListener('keydown', (e) => {
    const k = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!k) return;
    e.preventDefault();
    const n = ttRows[(i + k + ttRows.length) % ttRows.length];
    pick(n);
    n.focus();
  });
});

/* ---------- 00:14 buffer, replayed each time it comes into view ---------- */
const pieces = $('pieces');
for (let i = 0; i < 160; i++) pieces.appendChild(d.createElement('i'));
const cells = [...pieces.children];
const fmt = (n: number) => n.toFixed(1).replace('.', text.decimal);

async function runBuffer() {
  const phase = $('phase'), peers = $('st-peers'), speed = $('st-speed'), mb = $('st-mb');
  if (reduce) {
    cells.slice(0, 64).forEach((c) => c.classList.add('held'));
    peers.textContent = '38'; speed.textContent = fmt(6.4); mb.textContent = fmt(8);
    phase.textContent = text.ready;
    return;
  }
  phase.textContent = text.connecting;
  await wait(700);
  phase.textContent = text.buffering;
  const order = Array.from({ length: 64 }, (_, i) => i);
  for (let i = 0; i < 18; i++) order.push(64 + Math.floor(Math.random() * 96));
  for (let k = 0; k < order.length; k++) {
    const c = cells[order[k]];
    c.classList.add('want');
    setTimeout(() => { c.classList.remove('want'); c.classList.add('held'); }, 160);
    const p = (k + 1) / order.length;
    peers.textContent = String(Math.round(4 + 34 * Math.min(1, p * 1.4)));
    speed.textContent = fmt(0.8 + 5.6 * Math.min(1, p * 1.2));
    mb.textContent = fmt(8 * p);
    await wait(28);
  }
  phase.textContent = text.ready;
}

let bufRunning = false;
new IntersectionObserver(
  (entries) =>
    entries.forEach(async (e) => {
      if (!e.isIntersecting || bufRunning) return;
      bufRunning = true;
      cells.forEach((c) => (c.className = ''));
      await wait(400);
      await runBuffer();
      bufRunning = false;
    }),
  { threshold: 0.6 },
).observe($('buf'));

function live(sc: HTMLElement) {
  sc.classList.add('live');
  if (sc.dataset.t === '9') setTimeout(() => pick(tt.querySelector<HTMLElement>('[data-pick]')!), reduce ? 0 : 700);
}
