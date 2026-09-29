/* ============================================================
   AECC — Motion system
   Scroll-reveal · counters · scroll progress · back-to-top ·
   interactive 3D card tilt · hero 3D parallax.
   Vanilla JS + IntersectionObserver, no libraries. GPU-friendly
   (transform/opacity), pointer-only, honours prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = !!(window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* Elements that fade-up as one block (no stagger) */
  var BLOCK = [
    '.section-head', '.stat-strip',
    '.about-grid', '.vm-grid', '.contact-grid',
  ].join(', ');

  /* Elements that stagger within their parent grid */
  var CARDS = [
    '.svc-card', '.pillar', '.step', '.mission-card', '.service-line',
    '.cc-sla-card', '.cc-reach-card', '.faq-item', '.reach-card',
    '.form-card', '.glance-card',
  ].join(', ');

  function rafThrottle(fn) {
    var ticking = false;
    return function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(function () { ticking = false; fn(); });
      }
    };
  }

  /* ============================================================
     1 · Scroll-reveal
     ============================================================ */
  function initReveal() {
    if (!window.IntersectionObserver || reduceMotion) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

    document.querySelectorAll(BLOCK).forEach(function (el) {
      if (el.classList.contains('will-animate')) return;
      el.classList.add('will-animate');
      io.observe(el);
    });

    document.querySelectorAll(CARDS).forEach(function (el) {
      if (el.classList.contains('will-animate')) return;
      var parent = el.parentElement;
      if (parent) {
        var idx = Array.prototype.indexOf.call(parent.children, el);
        el.style.setProperty('--stagger', Math.min(idx, 6));
      }
      el.classList.add('will-animate');
      io.observe(el);
    });
  }

  /* ============================================================
     2 · Stat counters — count up on first view
     ============================================================ */
  function fmt(n, decimals) {
    return decimals ? n.toFixed(decimals) : String(Math.round(n));
  }

  function countUp(el) {
    var target = parseFloat(el.dataset.target);
    var decimals = parseInt(el.dataset.decimals, 10) || 0;
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var dur = 1100, start = null;
    function ease(t) { return 1 - Math.pow(1 - t, 3); }   // easeOutCubic
    function tick(now) {
      if (start === null) start = now;
      var p = Math.min((now - start) / dur, 1);
      var val = p > 0.99 ? target : target * ease(p);   // snap the final 1% so it never reads e.g. 1,499
      el.textContent = prefix + fmt(val, decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + fmt(target, decimals) + suffix;
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    var nums = document.querySelectorAll('.stat__num, .stat-strip__num');
    if (!nums.length || !window.IntersectionObserver || reduceMotion) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    nums.forEach(function (el) {
      var raw = (el.textContent || '').trim();
      var m = raw.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
      if (!m) return;                       // no number → leave as-is
      el.dataset.prefix = m[1];
      el.dataset.target = m[2].replace(/,/g, '');
      el.dataset.suffix = m[3];
      el.dataset.decimals = String((m[2].split('.')[1] || '').length);
      el.textContent = m[1] + fmt(0, +el.dataset.decimals) + m[3];
      io.observe(el);
    });
  }

  /* ============================================================
     3 · Scroll-progress bar
     ============================================================ */
  function initProgress() {
    var bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    var update = rafThrottle(function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
    });
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  /* ============================================================
     4 · Back-to-top button
     ============================================================ */
  function initBackToTop() {
    var btn = document.createElement('button');
    btn.className = 'to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"' +
      ' stroke="currentColor" stroke-width="2.5" stroke-linecap="round"' +
      ' stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(btn);
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    var update = rafThrottle(function () {
      btn.classList.toggle('is-visible', window.scrollY > 600);
    });
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ============================================================
     5 · Interactive 3D tilt — cards rotate toward the cursor
     ============================================================ */
  function pointerCoarse() {
    return window.matchMedia && window.matchMedia('(hover: none)').matches;
  }

  function initTilt() {
    if (reduceMotion || pointerCoarse()) return;

    var SEL = '.pillar, .industry, .value-card, .svc-card, .service-line, .hseq-col';
    var MAX = 7;   // max rotation, degrees

    document.querySelectorAll(SEL).forEach(function (card) {
      var rect = null;
      card.style.willChange = 'transform';
      card.style.transformStyle = 'preserve-3d';

      card.addEventListener('mouseenter', function () {
        rect = card.getBoundingClientRect();
        card.style.transition = 'transform 90ms ease-out';
      });
      card.addEventListener('mousemove', function (e) {
        if (!rect) return;
        var px = (e.clientX - rect.left) / rect.width;   // 0..1
        var py = (e.clientY - rect.top) / rect.height;   // 0..1
        var ry = (px - 0.5) * (MAX * 2);                 // rotateY
        var rx = (0.5 - py) * (MAX * 2);                 // rotateX
        card.style.transform =
          'perspective(820px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' +
          ry.toFixed(2) + 'deg) translateY(-6px) scale(1.015)';
      });
      card.addEventListener('mouseleave', function () {
        rect = null;
        card.style.transition = 'transform 480ms cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.transform = '';
      });
    });
  }

  /* ============================================================
     6 · Hero 3D parallax — photo cluster tilts with the cursor
     ============================================================ */
  function initHeroParallax() {
    if (reduceMotion || pointerCoarse()) return;

    var hero = document.querySelector('.hero');
    var grid = document.querySelector('.hero__photo-grid');
    if (!hero || !grid) return;

    grid.style.transformStyle = 'preserve-3d';
    grid.style.willChange = 'transform';
    var rect = null;

    hero.addEventListener('mouseenter', function () {
      rect = hero.getBoundingClientRect();
      grid.style.transition = 'transform 160ms ease-out';
    });
    hero.addEventListener('mousemove', function (e) {
      if (!rect) return;
      var px = (e.clientX - rect.left) / rect.width;
      var py = (e.clientY - rect.top) / rect.height;
      var ry = (px - 0.5) * 10;     // ±5deg
      var rx = (0.5 - py) * 6;      // ±3deg
      grid.style.transform =
        'perspective(1100px) rotateY(' + ry.toFixed(2) + 'deg) rotateX(' +
        rx.toFixed(2) + 'deg)';
    });
    hero.addEventListener('mouseleave', function () {
      rect = null;
      grid.style.transition = 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)';
      grid.style.transform = '';
    });
  }

  /* ============================================================
     Boot — wait until React/Babel has rendered the page
     ============================================================ */
  function boot(attempt) {
    var ready = document.querySelector('.site-header') &&
                document.querySelector('.hero, .page-hero');
    if (!ready && attempt < 80) {
      return setTimeout(function () { boot(attempt + 1); }, 40);
    }
    initReveal();
    initCounters();
    initProgress();
    initBackToTop();
    initTilt();
    initHeroParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { boot(0); });
  } else {
    boot(0);
  }
})();
