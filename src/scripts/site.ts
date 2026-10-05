// Shared on every page: solid top bar once scrolled, and scroll-in reveals.
const top = document.getElementById('top');
const onScroll = () => top?.classList.toggle('solid', scrollY > 40);
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
