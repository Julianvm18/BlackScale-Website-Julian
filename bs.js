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
      /* Marca de tiempo para el control anti-bot: un humano no completa
         el formulario en menos de ~3 s desde que se carga la pagina. */
      var formShownAt = Date.now();
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

        /* ---- Anti-bot (capa cliente; Nexus revalida del lado servidor) ----
           1) Honeypot: campos ocultos que solo un bot rellena.
           2) Timing: envíos en menos de 3 s desde la carga son automatizados.
           En ambos casos simulamos éxito y NO enviamos: el bot cree que pasó
           y no reintenta, sin gastar cupo del webhook ni ensuciar el CRM. */
        var elapsedMs = Date.now() - formShownAt;
        if (val('_honey') || val('website_url') || elapsedMs < 3000) {
          form.reset();
          form.style.display = 'none';
          var honeySuccess = form.parentElement.querySelector('.form-success');
          if (honeySuccess) {
            honeySuccess.style.display = 'block';
            honeySuccess.classList.add('reveal', 'in-view');
          }
          return;
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
          website_url:  val('website_url'),
          elapsed_ms:   elapsedMs
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
    if(!document.getElementById('roi-industria')) return;
var MESES=6, CONV_OPP=0.6, CAP=6.0, FLOOR=1.2;
  // Curva de arranque: fraccion del ritmo pleno por mes (montaje los primeros meses).
  // Alineada al pricing: mes1 diagnostico, mes2 pipeline arranca, mes3 medible, mes4-6 pleno.
  var CURVA=[0.25,0.55,0.80,1.0,1.0,1.0];
  var CURVA_SUM=CURVA.reduce(function(a,b){return a+b},0); // 4.6 meses-equivalentes
  var IND = {
    saas:      { tmin:20000000,  tmax:200000000,  tdef:110000000, cierre:22, reun:12, atrib:0.42, fee:6000000 },
    fintech:   { tmin:200000000, tmax:600000000,  tdef:400000000, cierre:18, reun:10, atrib:0.17, fee:14000000 },
    seguros:   { tmin:100000000, tmax:400000000,  tdef:250000000, cierre:16, reun:11, atrib:0.26, fee:12000000 },
    logistica: { tmin:40000000,  tmax:240000000,  tdef:140000000, cierre:20, reun:12, atrib:0.33, fee:9000000 },
    servicios: { tmin:30000000,  tmax:300000000,  tdef:90000000,  cierre:18, reun:11, atrib:0.62, fee:10000000 }
  };
  var $=function(id){return document.getElementById(id)};
  function fmtCOP(n){
    if(n>=1e6){
      var millones=n/1e6;
      // siempre 1 decimal con coma; miles separados por punto (formato Colombia)
      var s=millones.toLocaleString('es-CO',{minimumFractionDigits:1, maximumFractionDigits:1});
      return '$'+s+' M';
    }
    return '$'+Math.round(n).toLocaleString('es-CO');
  }
  function fmtNum(n){return n>=1?Math.round(n).toLocaleString('es-CO'):n.toFixed(1).replace('.',',')}
  function fmtX(n){return n.toFixed(1).replace('.',',')+'\u00d7'}

  function syncIndustry(){
    var ind=$('roi-industria').value, d=IND[ind];
    // Solo actualiza las pistas por sector; los campos quedan en lo que ponga el usuario (arrancan en 0).
    $('roi-ticket-range').innerHTML='Rango típico en tu sector: <b>'+fmtCOP(d.tmin)+' a '+fmtCOP(d.tmax)+'</b>';
    $('roi-cierre-sug').textContent=d.cierre+'%';
  }

  function fmtMiles(n){ return Math.round(n).toLocaleString('es-CO'); }
  function parseNum(str){ return +(String(str).replace(/[^\d]/g,'')) || 0; }
  // formatea un input de texto con puntos de miles conservando la posicion del cursor al final
  function formatInput(el){
    var raw=parseNum(el.value);
    el.value = raw>0 ? fmtMiles(raw) : '';
  }

  var raf;
  function calc(){
    var ind=$('roi-industria').value, d=IND[ind];
    var ticket=parseNum($('roi-ticket').value);
    var adj=$('roi-ticket-adjust');
    if(ticket && ticket<d.tmin){ adj.classList.add('show'); } else { adj.classList.remove('show'); }
    var ticketCalc=Math.max(ticket, d.tmin); // piso por industria para el calculo
    var cierre=Math.min((+$('roi-cierre').value||0)/100,1);
    var pauta=parseNum($('roi-pauta').value);

    var reunMes=d.reun;                       // ritmo pleno en regimen
    var citasTotal=reunMes*CURVA_SUM;         // acumulado 6m con curva de arranque
    var opps=citasTotal*CONV_OPP;
    var clientes=opps*cierre;
    var revenue=clientes*ticketCalc*d.atrib;
    var invTotal=(d.fee+pauta)*MESES;
    var roiReal=invTotal>0?revenue/invTotal:0;
    var roiShow=Math.max(Math.min(roiReal,CAP),FLOOR);

    $('roi-floornote').classList.toggle('show', roiReal<FLOOR);

    $('roi-s-citas').textContent=fmtNum(reunMes);
    $('roi-s-citas-total').textContent='≈ '+fmtNum(citasTotal)+' en 6 meses';
    $('roi-s-opps').textContent=fmtNum(opps);
    $('roi-s-clientes').textContent=fmtNum(clientes);
    $('roi-r-inv').textContent=fmtCOP(invTotal);
    var revShow = (roiReal>CAP) ? CAP*invTotal : revenue;
    $('roi-r-revenue').textContent=fmtCOP(revShow);
    $('roi-r-roi').textContent=roiShow>0?fmtX(roiShow):'\u2014';

    var max=citasTotal||1;
    function setBar(id,v){$(id).style.transform='scaleX('+Math.min(v/max,1)+')'}
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(function(){setBar('roi-b-citas',citasTotal);setBar('roi-b-opps',opps);setBar('roi-b-clientes',clientes)});
  }

  $('roi-industria').addEventListener('change',function(){syncIndustry();calc();});
  ['roi-ticket','roi-pauta'].forEach(function(id){
    $(id).addEventListener('input',function(){ formatInput(this); calc(); });
  });
  $('roi-cierre').addEventListener('input',calc);
  syncIndustry(); calc();
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
