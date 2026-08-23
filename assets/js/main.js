/* YouCanRecover — progressive enhancement only.
   The page is fully readable and usable without this file. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // Current year in the footer
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // close after tapping a link
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Contact form — demo handler (no backend). Confirms without navigating away.
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var name = (document.getElementById('name') || {}).value || 'there';
      note.textContent = 'Thank you, ' + name.trim().split(' ')[0] + ' — a member of our care team will reach out shortly. (Demo: no message was actually sent.)';
      note.classList.add('ok');
      form.reset();
    });
  }

  // Reveal-on-scroll — enhancement only; content is visible by default.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var targets = document.querySelectorAll('.card, .care, .story, .section-head, .families-card, .partners-cloud span');
    targets.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  }
})();
