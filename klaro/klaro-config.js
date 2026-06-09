var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: 'cookie',
  cookieName: 'klaro-blackscale',
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: true,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: true,
  translations: {
    es: {
      consentModal: {
        title: 'Tu privacidad importa',
        description: 'Usamos cookies para analizar el uso del sitio y mostrarte contenido relevante. Puedes aceptar todas, rechazarlas o personalizarlas. Más info en nuestra <a href="/legal#cookies">Política de Cookies</a>.'
      },
      consentNotice: {
        title: 'Cookies',
        description: 'Usamos cookies de analítica y marketing. {purposes}.',
        changeDescription: 'Hemos actualizado nuestras cookies. Revisa tus preferencias.',
        learnMore: 'Personalizar'
      },
      purposes: {
        analytics: { title: 'Analítica' },
        marketing: { title: 'Marketing' }
      },
      ok: 'Aceptar todas',
      decline: 'Rechazar',
      save: 'Guardar selección',
      close: 'Cerrar',
      acceptAll: 'Aceptar todas',
      acceptSelected: 'Aceptar selección',
      service: {
        disableAll: { title: 'Activar / desactivar todos los servicios' },
        optOut: { title: '(opt-out)', description: 'Este servicio se carga por defecto' },
        required: { title: '(siempre activo)', description: 'Este servicio es esencial' },
        purposes: 'Finalidades',
        purpose: 'Finalidad'
      },
      poweredBy: ''
    }
  },
  services: [
    {
      name: 'google-analytics',
      title: 'Google Analytics 4',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/, /^_gat/],
      required: false,
      optOut: false,
      onlyOnce: true
    },
    {
      name: 'meta-pixel',
      title: 'Meta Pixel (Facebook)',
      purposes: ['marketing'],
      cookies: [/^_fbp/, /^_fbc/],
      required: false,
      optOut: false,
      onlyOnce: true
    },
    {
      name: 'linkedin-insight',
      title: 'LinkedIn Insight Tag',
      purposes: ['marketing'],
      cookies: [/^li_/, /^bcookie/, /^lidc/, /^UserMatchHistory/],
      required: false,
      optOut: false,
      onlyOnce: true
    }
  ]
};
