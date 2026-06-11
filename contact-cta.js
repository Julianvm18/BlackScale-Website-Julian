/* Sección de contacto reutilizable — inyectada al final de cada página antes del footer */
(function () {
  var html = '\
  <section class="section contact-cta-section" data-screen-label="Contacto CTA">\
    <img class="flor flor--big" style="bottom:-240px; left:-220px; transform: scaleX(-1);" src="assets/fig-floritura.svg" alt="" aria-hidden="true">\
    <div class="container">\
      <div class="section-header reveal">\
        <span class="tag">Contáctanos</span>\
        <h2>Hablemos de tu <em>pipeline</em></h2>\
        <p>Cuéntanos sobre tu empresa y tus objetivos. Te respondemos en menos de un día hábil para agendar tu diagnóstico gratuito.</p>\
      </div>\
      <div class="contact-inline__form reveal">\
        <form class="form" data-validate novalidate>\
          <div class="form-group">\
            <label for="cf-nombre">Nombre</label>\
            <input type="text" id="cf-nombre" name="nombre" placeholder="Tu nombre" required autocomplete="name">\
            <span class="field-error">Por favor ingresa tu nombre.</span>\
          </div>\
          <div class="form-group">\
            <label for="cf-empresa">Empresa</label>\
            <input type="text" id="cf-empresa" name="empresa" placeholder="Nombre de tu empresa" required autocomplete="organization">\
            <span class="field-error">Por favor ingresa el nombre de tu empresa.</span>\
          </div>\
          <div class="form-group">\
            <label for="cf-email">Email</label>\
            <input type="email" id="cf-email" name="email" placeholder="Tu correo corporativo" required autocomplete="email">\
            <span class="field-error">Ingresa un correo válido.</span>\
          </div>\
          <div class="form-consent">\
            <input type="checkbox" id="cf-habeas" name="habeas" required>\
            <label for="cf-habeas">Autorizo a BlackScale Consulting el tratamiento de mis datos personales conforme a la <a href="legal.html#privacy">Política de Privacidad</a>, de acuerdo con la Ley 1581 de 2012.</label>\
          </div>\
          <div class="form-error" role="alert" aria-live="polite" style="display:none; color:#e08a82; font-size:14px;"></div>\
          <button type="submit" class="btn btn--primary btn--full">Solicitar diagnóstico gratuito</button>\
        </form>\
        <div class="form-success">\
          <h3>Mensaje recibido.</h3>\
          <p>Gracias por escribirnos. Un fundador te contactará en menos de un día hábil para agendar tu sesión de diagnóstico gratuita.</p>\
        </div>\
      </div>\
    </div>\
  </section>';
  var slot = document.querySelector('[data-include="contact"]');
  if (slot) slot.outerHTML = html;
})();
