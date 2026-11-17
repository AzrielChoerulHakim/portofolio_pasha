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

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const video = document.getElementById('nature-video');
    if (video) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      const tryPlay = async () => {
        try { await video.play(); } catch (_) { /* Browser may block autoplay. */ }
      };
      if (video.readyState >= 2) tryPlay();
      else video.addEventListener('canplay', tryPlay, { once: true });
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden && video.paused) tryPlay();
      });
    }

    const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
    const pages = [...document.querySelectorAll('main section[id]')];
    const ledger = [...document.querySelectorAll('.ledger-row')];
    const progress = document.querySelector('.reading-progress__bar');
    let raf = 0;
    const update = () => {
      raf = 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const fraction = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      if (progress) progress.style.transform = `scaleX(${fraction})`;
      header.classList.toggle('scrolled', window.scrollY > 20);

      const line = window.innerHeight * .36;
      let active = pages[0];
      for (const section of pages) {
        if (section.getBoundingClientRect().top <= line) active = section;
      }
      navLinks.forEach((link) => {
        const current = active && link.getAttribute('href') === '#' + active.id;
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      if (ledger.length) {
        let nearest = null;
        let distance = Infinity;
        for (const row of ledger) {
          const rect = row.getBoundingClientRect();
          if (rect.bottom < 90 || rect.top > window.innerHeight * .85) continue;
          const d = Math.abs(rect.top + rect.height / 2 - window.innerHeight * .5);
          if (d < distance) { distance = d; nearest = row; }
        }
        ledger.forEach((row) => row.classList.toggle('is-reading', row === nearest));
      }
    };
    const schedule = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('pageshow', schedule, { passive: true });
    schedule();

    if ('IntersectionObserver' in window && !reduced.matches) {
      document.documentElement.classList.add('scroll-enhanced');
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view');
            observer.unobserve(entry.target);
          }
        }
      }, { rootMargin: '0px 0px 50px 0px', threshold: .08 });
      // Editorial reveals are restrained: only meaningful content groups, not every line.
      const revealTargets = document.querySelectorAll(
        '.project-story, .intro-lead, .intro-article, .journey-heading > div, .skills-header, .contact-content, .moment-note > h2'
      );
      revealTargets.forEach((item) => {
        // Keep immediately visible content fully readable during the first paint.
        if (item.getBoundingClientRect().top > window.innerHeight * .9) {
          item.classList.add('reveal-on-scroll');
        }
      });
      document.querySelectorAll('.album-card, .paper-scrap, .crochet-scene, .reveal-on-scroll')
        .forEach((item) => observer.observe(item));
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      if (reduced.matches) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'instant' });
        history.replaceState(null, '', '#' + id);
      }
    }));
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
