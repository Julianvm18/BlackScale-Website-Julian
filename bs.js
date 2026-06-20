/* ============================================================
   BLACKSCALE - interacciones compartidas (mockup)
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

  /* ---------- Simulador ROI ---------- */
  function initRoiSimulator() {
    var root = document.getElementById('roi-industria');
    if (!root) return;
    var MESES = 6;
    // Benchmarks editables: costo por reunion calificada (COP) por industria.
    // Derivados de CPL Colombia / tasa lead->reunion. Reemplazar con data real de BlackScale cuando exista.
    var CPA = { seguros:1400000, saas:870000, fintech:820000, logistica:690000, servicios:1500000 };
    var CONV_OPP = 0.6, RMIN = 10, RMAX = 15;
    var $ = function(id){ return document.getElementById(id); };
    function fmtCOP(n){
      if (n >= 1e9) return '$' + (n/1e9).toFixed(n>=1e10?0:1).replace('.',',') + ' B';
      if (n >= 1e6) return '$' + (n/1e6).toFixed(n>=1e7?0:1).replace('.',',') + ' M';
      return '$' + Math.round(n).toLocaleString('es-CO');
    }
    function fmtNum(n){ return n>=1 ? Math.round(n).toLocaleString('es-CO') : n.toFixed(1).replace('.',','); }
    // Separa miles con punto (formato Colombia) sin depender de Intl.
    function group(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
    function digitsOf(v){ return String(v == null ? '' : v).replace(/\D/g, ''); }
    function readMoney(id){ return parseInt(digitsOf($(id).value), 10) || 0; }
    // Reescribe el campo con separadores de miles conservando los digitos.
    function fmtMoneyInput(el){ var d = digitsOf(el.value); el.value = d ? group(parseInt(d, 10)) : ''; }
    var raf;
    function calc(){
      var ind = $('roi-industria').value;
      var ticket = readMoney('roi-ticket');
      var cierre = Math.min((+$('roi-cierre').value || 0) / 100, 1);
      var pauta = readMoney('roi-pauta');
      var inversion = +$('roi-inversion').value || 0;
      var slider = $('roi-inversion');
      var invLabel = $('roi-inversion-val');
      if (invLabel) invLabel.textContent = fmtCOP(inversion);
      if (slider) {
        var pct = (inversion - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = 'linear-gradient(90deg, var(--gold) ' + pct + '%, rgba(255,255,255,0.12) ' + pct + '%)';
      }
      var cpa = CPA[ind] || 1000000;
      var citasMes = 0;
      if (pauta > 0) {
        var cap = pauta / cpa;
        if (cap <= RMIN) { citasMes = cap; }
        else { var holgura = Math.min((cap - RMIN) / RMIN, 1); citasMes = RMIN + (RMAX - RMIN) * holgura; }
      }
      var citas = citasMes * MESES;
      var opps = citas * CONV_OPP;
      var clientes = opps * cierre;
      var revenue = clientes * ticket;
      var invTotal = (inversion + pauta) * MESES;
      var roi = invTotal > 0 ? revenue / invTotal : 0;
      var cpaReal = citas > 0 ? (pauta * MESES) / citas : 0;
      $('roi-s-citas').textContent = fmtNum(citas);
      $('roi-s-opps').textContent = fmtNum(opps);
      $('roi-s-clientes').textContent = fmtNum(clientes);
      $('roi-r-inv').textContent = fmtCOP(invTotal);
      $('roi-r-cpa').textContent = cpaReal > 0 ? fmtCOP(cpaReal) : '\u2014';
      $('roi-r-revenue').textContent = fmtCOP(revenue);
      $('roi-r-roi').textContent = roi > 0 ? (roi.toFixed(roi<10?1:0).replace('.',',') + '\u00d7') : '\u2014';
      var max = citas || 1;
      function setBar(id, v){ $(id).style.transform = 'scaleX(' + Math.min(v/max, 1) + ')'; }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function(){
        setBar('roi-b-citas', citas); setBar('roi-b-opps', opps); setBar('roi-b-clientes', clientes);
      });
    }
    ['roi-ticket','roi-pauta'].forEach(function(id){
      var el = $(id); if (!el) return;
      fmtMoneyInput(el);
      el.addEventListener('input', function(){ fmtMoneyInput(el); calc(); });
    });
    ['roi-industria','roi-cierre','roi-inversion'].forEach(function(id){
      var el = $(id); if (el) el.addEventListener('input', calc);
    });
    calc();
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
    initRoiSimulator();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
