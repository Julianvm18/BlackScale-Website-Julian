/* ============================================================
   BLACKSCALE — interacciones compartidas (mockup)
   Solo transform / opacity. Sin librerías.
   ============================================================ */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Nav burger ---------- */
  function initNav() {
    var burger = document.querySelector('.nav__burger');
    var menu = document.getElementById('mobileMenu');
    if (!burger || !menu) return;
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
      burger.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove('open');
        burger.classList.remove('open');
      }
    });
  }

  /* ---------- Reveal on scroll + stagger ---------- */
  function initReveal() {
    var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    document.querySelectorAll('[data-stagger]').forEach(function (group) {
      var children = group.querySelectorAll('.reveal');
      children.forEach(function (el, i) {
        el.style.setProperty('--reveal-delay', (i * 0.07) + 's');
      });
    });
    if (!('IntersectionObserver' in window) || reduceMotion) {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Lazo: trazo que se dibuja (stroke-dashoffset) ---------- */
  function initLazo() {
    var paths = document.querySelectorAll('.lazo path[data-draw]');
    if (!paths.length) return;
    paths.forEach(function (p) {
      var len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = reduceMotion ? 0 : len;
    });
    if (reduceMotion) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseFloat(entry.target.getAttribute('data-draw')) || 0;
          setTimeout(function () { entry.target.style.strokeDashoffset = 0; }, delay * 1000);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    paths.forEach(function (p) { io.observe(p); });
  }

  /* ---------- Spotlight gold en cards ---------- */
  function initSpotlight() {
    if (!finePointer) return;
    document.addEventListener('pointermove', function (e) {
      var card = e.target.closest ? e.target.closest('.card') : null;
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* ---------- Magnetic en CTAs principales ---------- */
  function initMagnetic() {
    if (!finePointer || reduceMotion) return;
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      var strength = 0.22;
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = 'translate(' + (dx * strength) + 'px,' + (dy * strength) + 'px)';
      });
      el.addEventListener('pointerleave', function () {
        el.style.transform = 'translate(0,0)';
      });
    });
  }

  /* ---------- Back to top ---------- */
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        btn.classList.toggle('visible', window.scrollY > 500);
        ticking = false;
      });
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Validación de formularios ---------- */
  function initForms() {
    document.querySelectorAll('form[data-validate]').forEach(function (form) {
      var fields = form.querySelectorAll('input[required]:not([type="checkbox"])');
      function check(input, report) {
        var val = input.value.trim();
        var ok = val.length > 0;
        if (ok && input.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        if (!ok && report) {
          input.classList.add('invalid');
          input.classList.remove('valid');
        } else if (ok) {
          input.classList.remove('invalid');
          input.classList.add('valid');
        } else {
          input.classList.remove('invalid', 'valid');
        }
        return ok;
      }
      fields.forEach(function (input) {
        input.addEventListener('blur', function () { check(input, input.value.trim().length > 0 || input.dataset.touched === '1'); });
        input.addEventListener('input', function () {
          input.dataset.touched = '1';
          check(input, true);
        });
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var allOk = true;
        fields.forEach(function (input) { if (!check(input, true)) allOk = false; });
        var consent = form.querySelector('input[type="checkbox"][required]');
        var errorBox = form.querySelector('.form-error');
        if (errorBox) { errorBox.style.display = 'none'; errorBox.textContent = ''; }
        if (consent && !consent.checked) {
          allOk = false;
          if (errorBox) {
            errorBox.textContent = 'Debes autorizar el tratamiento de datos para continuar.';
            errorBox.style.display = 'block';
          }
        } else if (!allOk && errorBox) {
          errorBox.textContent = 'Revisa los campos marcados antes de enviar.';
          errorBox.style.display = 'block';
        }
        if (!allOk) return;

        /* Envío real al webhook de BlackScale Nexus */
        function val(name) {
          var el = form.elements[name];
          return el ? el.value.trim() : '';
        }
        function getUTM(name) {
          var m = window.location.search.match(new RegExp('[?&]' + name + '=([^&]*)'));
          return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
        }
        var submitBtn = form.querySelector('button[type="submit"]');
        var btnOriginal = submitBtn ? submitBtn.textContent : '';
        var payload = {
          name:         val('nombre') || val('name'),
          email:        val('email'),
          phone:        val('telefono'),
          company:      val('empresa'),
          message:      val('mensaje'),
          source:       'website',
          utm_source:   getUTM('utm_source'),
          utm_medium:   getUTM('utm_medium'),
          utm_campaign: getUTM('utm_campaign'),
          _honey:       val('_honey'),
          website_url:  val('website_url')
        };
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Enviando…'; }
        fetch('https://nexus.blackscale.consulting/api/webhook', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).then(function (response) {
          if (response.status === 201 || response.ok) {
            /* Conversión: solo se dispara si el usuario ya dio consentimiento
               (fbq/gtag únicamente existen tras activarse vía Klaro). */
            try { if (window.fbq) window.fbq('track', 'Lead', { content_name: payload.source }); } catch (e) { /* noop */ }
            try { if (window.gtag) window.gtag('event', 'generate_lead', { currency: 'COP', value: 0 }); } catch (e) { /* noop */ }
            form.reset();
            form.style.display = 'none';
            var success = form.parentElement.querySelector('.form-success');
            if (success) {
              success.style.display = 'block';
              success.classList.add('reveal', 'in-view');
            }
          } else {
            throw new Error('HTTP ' + response.status);
          }
        }).catch(function () {
          if (errorBox) {
            errorBox.textContent = 'No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos a servicio@blackscale.consulting';
            errorBox.style.display = 'block';
          }
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = btnOriginal; }
        });
      });
    });
  }

  /* ---------- Tweaks (protocolo host) ---------- */
  var DEFAULTS = (window.TWEAK_DEFAULTS || { florituras: 80, glow: 40 });
  function loadTweaks() {
    try {
      var saved = JSON.parse(localStorage.getItem('bsTweaks') || 'null');
      if (saved) return Object.assign({}, DEFAULTS, saved);
    } catch (e) { /* noop */ }
    return Object.assign({}, DEFAULTS);
  }
  var tweaks = loadTweaks();
  function applyTweaks() {
    document.documentElement.style.setProperty('--flor-mult', (tweaks.florituras / 30).toFixed(3));
    document.documentElement.style.setProperty('--glow-mult', (tweaks.glow / 40).toFixed(3));
  }
  function saveTweaks() {
    try { localStorage.setItem('bsTweaks', JSON.stringify(tweaks)); } catch (e) { /* noop */ }
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: tweaks }, '*');
    } catch (e) { /* noop */ }
  }
  function buildPanel() {
    var panel = document.createElement('aside');
    panel.className = 'tweaks';
    panel.setAttribute('aria-label', 'Tweaks');
    panel.innerHTML =
      '<div class="tweaks__head"><strong>Tweaks</strong>' +
      '<button class="tweaks__close" type="button" aria-label="Cerrar">&times;</button></div>' +
      '<label><span>Florituras <em id="twFlorVal">' + tweaks.florituras + '%</em></span>' +
      '<input id="twFlor" type="range" min="0" max="100" step="5" value="' + tweaks.florituras + '"></label>' +
      '<label><span>Glow burgundy <em id="twGlowVal">' + tweaks.glow + '%</em></span>' +
      '<input id="twGlow" type="range" min="0" max="100" step="5" value="' + tweaks.glow + '"></label>';
    document.body.appendChild(panel);
    panel.querySelector('#twFlor').addEventListener('input', function (e) {
      tweaks.florituras = +e.target.value;
      panel.querySelector('#twFlorVal').textContent = tweaks.florituras + '%';
      applyTweaks(); saveTweaks();
    });
    panel.querySelector('#twGlow').addEventListener('input', function (e) {
      tweaks.glow = +e.target.value;
      panel.querySelector('#twGlowVal').textContent = tweaks.glow + '%';
      applyTweaks(); saveTweaks();
    });
    panel.querySelector('.tweaks__close').addEventListener('click', function () {
      panel.classList.remove('open');
      try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) { /* noop */ }
    });
    return panel;
  }
  function initTweaks() {
    var panel = null;
    window.addEventListener('message', function (e) {
      var d = e.data || {};
      if (d.type === '__activate_edit_mode') {
        if (!panel) panel = buildPanel();
        panel.classList.add('open');
      } else if (d.type === '__deactivate_edit_mode') {
        if (panel) panel.classList.remove('open');
      }
    });
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) { /* noop */ }
  }

  /* ---------- Boot ---------- */
  function boot() {
    initNav();
    initReveal();
    initLazo();
    initSpotlight();
    initMagnetic();
    initBackToTop();
    initForms();
    applyTweaks();
    initTweaks();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
