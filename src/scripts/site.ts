// Shared on every page: solid top bar once scrolled, and scroll-in reveals.
const bar = document.getElementById('top');
const onScroll = () => bar?.classList.toggle('solid', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }),
  { rootMargin: '0px 0px -10% 0px' },
);
document.querySelectorAll('.rv').forEach((el) => io.observe(el));

// An explicit language pick is remembered: the root's first-visit redirect (Base.astro) honours it.
document.querySelectorAll<HTMLAnchorElement>('[data-lang-pick]').forEach((a) =>
  a.addEventListener('click', () => {
    try {
      localStorage.setItem('lang', a.dataset.langPick!);
    } catch {
      /* storage blocked: the switch still works, it just isn't remembered */
    }
  }),
);
