(() => {
  const init = () => {
    const header = document.querySelector('.site-header');
    const menu = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (!header || !menu || !nav) return;

    const closeMenu = () => {
      header.classList.remove('menu-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Buka menu');
    };

    menu.addEventListener('click', () => {
      const isOpen = header.classList.toggle('menu-open');
      menu.setAttribute('aria-expanded', String(isOpen));
      menu.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const video = document.getElementById('nature-video');
    if (video) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      const tryPlay = async () => {
        try {
          await video.play();
        } catch (error) {
          /* autoplay can fail silently in some browser modes */
        }
      };
      if (video.readyState >= 2) tryPlay();
      else video.addEventListener('canplay', tryPlay, { once: true });
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden && video.paused) tryPlay();
      });
    }

    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const anchors = [...document.querySelectorAll('a[href^="#"]')];
    anchors.forEach((link) => link.addEventListener('click', (event) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      if (motionReduced.matches) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'instant' });
        history.replaceState(null, '', '#' + id);
      }
    }));
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
