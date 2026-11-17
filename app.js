(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
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
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const video = document.getElementById('nature-video');
  const toggle = document.getElementById('video-toggle');
  const icon = toggle.querySelector('.video-toggle-icon');
  const label = toggle.querySelector('.video-toggle-label');
  const updateVideo = () => {
    const playing = !video.paused;
    toggle.setAttribute('aria-pressed', String(playing));
    icon.textContent = playing ? 'Ⅱ' : '▶';
    label.textContent = playing ? 'jeda sebentar' : 'putar cerita';
  };
  toggle.addEventListener('click', async () => {
    try {
      if (video.paused) await video.play();
      else video.pause();
    } catch (error) {
      label.textContent = 'video belum bisa diputar';
    }
    updateVideo();
  });
  video.addEventListener('play', updateVideo);
  video.addEventListener('pause', updateVideo);
  // Pausing on exit avoids playing muted footage out of view.
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting && !video.paused) video.pause();
    }, {threshold:.05});
    videoObserver.observe(video);
  }
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  document.addEventListener('scroll', onScroll, {passive: true});
  onScroll();
  const anchors = [...document.querySelectorAll('a[href^="#"]')];
  anchors.forEach(link => link.addEventListener('click', event => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    if (motionReduced.matches) { event.preventDefault(); target.scrollIntoView({behavior:'instant'}); history.replaceState(null, '', '#'+id); }
  }));
})();
