// Maison Belle — vanilla JS for static site
(function(){
  // Sticky nav scroll state
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
  // Mark active link
  const path = location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href').replace(/\.html$/, '').replace(/\/index$/, '/');
    if (href === path || (href === '/' && (path === '/' || path === ''))) a.classList.add('active');
  });
  // Reveal on scroll
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '-60px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }
  // Booking form
  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Booking request received', "We'll confirm your time within 2 hours.");
      form.reset();
    });
  }
  function showToast(title, msg){
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.innerHTML = '<strong></strong><span></span>';
    t.querySelector('strong').textContent = title;
    t.querySelector('span').textContent = msg;
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => t.classList.remove('show'), 4500);
  }
})();
