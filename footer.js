/* Footer compartido - inyectado en páginas interiores */
(function () {
  var html = '\
  <footer class="footer" data-screen-label="Footer">\
    <div class="cta-strip">\
      <img class="flor flor--big" style="top:-240px; right:-200px;" src="assets/fig-floritura.svg" alt="" aria-hidden="true">\
      <div class="container cta-strip__inner">\
        <div>\
          <h3>¿Listo para escalar tu revenue?</h3>\
          <p>Hablemos de tus objetivos de crecimiento. Sin presentación corporativa, solo estrategia.</p>\
        </div>\
        <a href="/contacto" class="btn btn--primary" data-magnetic>Contáctanos</a>\
      </div>\
    </div>\
    <div class="container footer__grid">\
      <div class="footer__brand">\
        <a href="/" aria-label="BlackScale, inicio"><img src="assets/logo-horizontal-blanco.svg" alt="BlackScale" width="160" height="32"></a>\
        <p>Agencia B2B con base en Bogotá, Colombia. Especialistas en generación de demanda, revenue operations y habilitación comercial.</p>\
        <a class="footer__contact" href="mailto:servicio@blackscale.consulting">\
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>\
          servicio@blackscale.consulting\
        </a>\
        <div class="footer__social">\
          <a href="https://www.linkedin.com/company/blackscale-consulting/" aria-label="LinkedIn" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>\
        </div>\
      </div>\
      <div class="footer__col">\
        <h4>Empresa</h4>\
        <ul>\
          <li><a href="/por-que-nosotros">Por Qué BlackScale</a></li>\
          <li><a href="/proceso">Nuestro Proceso</a></li>\
          <li><a href="/contacto">Contacto</a></li>\
        </ul>\
      </div>\
      <div class="footer__col">\
        <h4>Legal y Políticas</h4>\
        <ul>\
          <li><a href="/legal#privacy">Política de Privacidad</a></li>\
          <li><a href="/legal#data-management">Gestión de Datos</a></li>\
          <li><a href="/legal#terms">Términos de Servicio</a></li>\
          <li><a href="/legal#cookies">Política de Cookies</a></li>\
          <li><a href="#" onclick="if(window.klaro){klaro.show();}return false;">Preferencias de Cookies</a></li>\
          <li><a href="/legal#accessibility">Accesibilidad</a></li>\
        </ul>\
      </div>\
    </div>\
    <div class="footer__bottom">\
      <div class="container footer__bottom-inner">\
        <p>&copy; 2026 BlackScale Consulting. Todos los derechos reservados.</p>\
        <div>\
          <a href="/legal#privacy">Privacidad</a>\
          <a href="/legal#terms">Términos</a>\
          <a href="/legal#cookies">Cookies</a>\
        </div>\
      </div>\
    </div>\
  </footer>';
  var slot = document.querySelector('[data-include="footer"]');
  if (slot) slot.outerHTML = html;
})();
