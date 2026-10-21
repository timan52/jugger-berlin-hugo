(() => {
 const btn = document.querySelector('.menu-toggle');
 const nav = document.getElementById('main-nav');
 if (btn && nav) {
   const closeMenu = () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-label','Menü öffnen'); };
   btn.addEventListener('click', () => {
     const open = btn.getAttribute('aria-expanded') !== 'true';
     nav.classList.toggle('open',open);
     btn.setAttribute('aria-expanded',String(open));
     btn.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');
   });
   nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
   document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
   document.addEventListener('click', e => { if (!btn.contains(e.target) && !nav.contains(e.target)) closeMenu(); });
 }
 // Enhancement only: content stays visible without JS or when reduced motion is requested.
 if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
   }, {threshold:.06, rootMargin:'0px 0px 25px 0px'});
   document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 }
})();
