
// ── Form Validation ──────────────────────────────────────────
var CALENDLY_URL = 'https://calendly.com/julian-vallejo-blackscale/30min';

var VALIDATORS = {
  required: function(val) { return val.trim().length > 0; },
  email:    function(val) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim()); },
  phone:    function(val) { return val.trim() === '' || /^[\+\d][\d\s\-\.\(\)]{5,}$/.test(val.trim()); }
};

function validateField(input) {
  var val   = input.value;
  var type  = input.dataset.validate;
  var valid = VALIDATORS[type] ? VALIDATORS[type](val) : true;

  input.classList.toggle('invalid', !valid);
  input.classList.toggle('valid',    valid && val.trim().length > 0);
  return valid;
}

function validateAll(form) {
  var fields  = form.querySelectorAll('[data-validate]');
  var allValid = true;
  var first   = null;
  fields.forEach(function(input) {
    var ok = validateField(input);
    if (!ok && !first) first = input;
    if (!ok) allValid = false;
  });
  if (first) {
    first.focus();
    first.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return allValid;
}

// Live validation: validate on blur, clear error on input once invalid
document.querySelectorAll('[data-validate]').forEach(function(input) {
  input.addEventListener('blur', function() { validateField(this); });
  input.addEventListener('input', function() {
    if (this.classList.contains('invalid')) validateField(this);
  });
});

// ── Contact form submit ──────────────────────────────────────
var form        = document.getElementById('contactForm');
var formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Block submit if any required field is empty/invalid
    if (!validateAll(form)) return;

    // Disable button to prevent double submit
    var btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = '...'; }

    var data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(res) {
      if (res.ok) {
        form.style.display = 'none';
        if (formSuccess) formSuccess.classList.add('show');
        // Open Calendly after successful submission
        window.open(CALENDLY_URL, '_blank');
      } else {
        if (btn) { btn.disabled = false; btn.setAttribute('data-i18n', 'btn.book_call'); btn.textContent = 'Reserva tu llamada'; }
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(function() {
      if (btn) { btn.disabled = false; btn.textContent = 'Reserva tu llamada'; }
      alert('Network error. Please check your connection and try again.');
    });
  });
}
// Mobile menu toggle
(function() {
  var burger = document.querySelector('.nav__burger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (!burger || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) closeMenu();
  });
})();
// ─── Premium UI layer ───────────────────────────────────────
(function(){var nav=document.querySelector('.nav');if(!nav)return;
  addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>20);},{passive:true});})();

(function(){var els=document.querySelectorAll('.reveal');if(!els.length)return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}});},
    {threshold:.15,rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(el){io.observe(el);});})();

(function(){var groups=document.querySelectorAll('[data-stagger]');if(!groups.length)return;
  var sio=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;
    e.target.querySelectorAll('.reveal').forEach(function(c,i){c.style.transitionDelay=(i*100)+'ms';});
    sio.unobserve(e.target);});},{threshold:.2});
  groups.forEach(function(g){sio.observe(g);});})();

(function(){document.querySelectorAll('.card').forEach(function(card){
  card.addEventListener('mousemove',function(e){var r=card.getBoundingClientRect();
    card.style.setProperty('--mx',(e.clientX-r.left)+'px');
    card.style.setProperty('--my',(e.clientY-r.top)+'px');},{passive:true});});})();

(function(){if(!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  document.querySelectorAll('[data-magnetic]').forEach(function(el){
    el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect();
      el.style.transform='translate('+((e.clientX-r.left-r.width/2)*.25)+'px,'+((e.clientY-r.top-r.height/2)*.25)+'px)';},{passive:true});
    el.addEventListener('mouseleave',function(){el.style.transform='';});});})();
