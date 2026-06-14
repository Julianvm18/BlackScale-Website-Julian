# CLAUDE.md — Contexto del proyecto BlackScale Consulting

Guía para retomar el proyecto en cualquier sesión nueva. Léela completa antes de hacer cambios.

## ⚡ Actualización (rediseño v2 aplicado)
Se integró el rediseño completo (nivel Awwwards/Directive) sobre el sitio de producción:
- **Stylesheet único nuevo: `bs.css`** (tokens del manual + componentes). **JS único: `bs.js`** (reveal on scroll,
  spotlight en cards, magnetic CTAs, nav móvil, back-to-top, validación + envío real de forms al webhook de Nexus).
- Se ELIMINARON `style.css`, `script.js` y `translations.js` (el i18n ya estaba inerte; el sitio quedó solo en ES).
- Includes compartidos: `footer.js` y `contact-cta.js` (se inyectan en `[data-include="footer"]` / `[data-include="contact"]`
  en páginas interiores). `image-slot.js` solo se usaría para imágenes del blog (hoy el blog NO usa fotos).
- Assets del rediseño en `assets/` (florituras del manual, `logo-horizontal-blanco.svg`, `simbolo-blanco.svg`, `fig-floritura.svg`).
- **Compliance conservado**: Klaro + GA4/Meta Pixel gateados, schema JSON-LD, canonicals/OG, Habeas Data en los forms,
  link "Preferencias de Cookies" (footer.js + footer inline de index). Se quitó el `cookie-consent.js` del handoff (Klaro lo reemplaza).
- `sistema.html` = documentación viva del design system (marcada `noindex`, no va en sitemap ni nav).
- Las páginas mantienen las MISMAS URLs en español y el blog sigue en `/blog/` (índice en `blog/index.html`, 6 posts re-estilizados a `bs.css`).
- El push vía `origin` funciona en algunas sesiones y en otras da 403 (depende de los permisos que tenga
  la GitHub App ese día): si falla, usar el PAT como describe "Cómo subir cambios". El deploy a producción
  (main → Hostinger) sigue igual.

## Qué es
Sitio web estático (HTML + CSS + JS vanilla) de **BlackScale Consulting**, posicionado como
**"acelerador de ventas B2B para empresas en Colombia"** (marketing + ventas + revenue ops).
Dominio: https://blackscale.consulting

## Repositorio y ramas
- GitHub: `Julianvm18/BlackScale-Website-Julian`
- Rama de producción: `main` (de aquí despliega Hostinger).
- Rama de desarrollo: `claude/festive-johnson-szqcby` (se mantiene sincronizada con main).

## ⚠️ Cómo subir cambios (IMPORTANTE)
- Este entorno solo tiene acceso de **lectura** por git y por la API MCP de GitHub (dan 403 al escribir).
- Para pushear se usa un **Personal Access Token** del dueño contra github.com directamente:
  `git push https://x-access-token:TOKEN@github.com/Julianvm18/BlackScale-Website-Julian.git main:main`
  (pedir el token a Julian cada sesión; recordarle revocarlo al terminar).
- Solución definitiva pendiente: dar permiso de escritura a la GitHub App de Claude sobre el repo.
- Tras cada cambio: commit a `main`, sincronizar la rama de desarrollo, y avisar a Julian para que
  haga **Redesplegar** en Hostinger.

## Despliegue (Hostinger)
- Hostinger NO hace auto-deploy. Julian entra a hPanel → Avanzado → GIT → "Redesplegar" (hace git pull
  de `main` a public_html). Los renombrados/borrados de git se reflejan solos. Luego purgar caché.
- Pendiente recomendado: configurar el webhook de auto-deploy de Hostinger en GitHub.
- El entorno NO puede ver el sitio en vivo (Hostinger bloquea el acceso con WAF/403). Para estética,
  pedir capturas a Julian.

## Seguridad (auditoría jun 2026, aplicada)
- Historial de git auditado completo: **cero llaves, tokens o secretos commiteados** (mantenerlo así).
- `.htaccess` responde **404** a `/.git/`, a todo archivo oculto (excepto `/.well-known/`, lo usa el SSL)
  y a `CLAUDE.md`/`README.md`. Razón: Hostinger hace git pull dentro de public_html y `.git/` queda en la
  raíz web. `pricing.md` y `llms.txt` SÍ son públicos a propósito. NO quitar estas reglas.
- **Klaro auto-hospedado**: `klaro/klaro-no-css-0.7.18.js` (extraído del paquete oficial de npm, sha512
  verificado contra el registro). Ya NO se carga desde cdn.jsdelivr.net. Para actualizar versión: bajar el
  tgz de npm, verificar integrity, guardar con el número de versión en el nombre (el caché de JS es de 1 año
  immutable) y actualizar el `<script>` en las 14 páginas.
- CSP conservadora en `.htaccess` (`frame-ancestors`/`object-src`/`base-uri`). NO agregar `script-src`
  sin poder probar el sitio en vivo.
- El webhook de Nexus (`nexus.blackscale.consulting/api/webhook`) es público sin auth: el rate limiting y
  la validación van del lado de Nexus, no de este repo.
- Tras cada redeploy verificar: `/.git/config` y `/CLAUDE.md` deben devolver 404 en el sitio en vivo.

## Reglas de marca (INVIOLABLES)
- **Cero guiones largos (—) ni medios (–)** en texto visible ni meta tags. Usar coma o dos puntos.
  (Excepción: guiones en URLs/slugs, clases CSS, IDs.)
- Sin prueba social inventada (nada de nombres, métricas ni clientes falsos).
- Una sola red social: **LinkedIn de empresa** (https://www.linkedin.com/company/blackscale-consulting/).
  Nada de Instagram, Facebook social ni LinkedIn personal. (El Meta Pixel de tracking NO es presencia social.)
- Sin patrones de IA en copy: prohibido "No X. Es Y.", titulares partidos en cursiva forzada, cláusulas anidadas.
- Promesa de tiempo unificada: **"en semanas"** (NO "90 días" / "mes 1" como promesa de resultados en el hero).
  El "Plan a 90 días" / blueprint en proceso.html es un roadmap interno y SE MANTIENE.
- Colores: el style.css en vivo usa burgundy `#551C25`, gold `#D19C15`, negro `#11110F`, cream `#D7D2CB`.
  (El 404 y theme-color usan `#6B2737`/`#C9A84C`, una variante; no se unificó por decisión de Julian.)
- Tipografía: Cormorant Garamond (títulos) + Poppins (cuerpo).
- Email de contacto en minúscula: `servicio@blackscale.consulting`.

## Estructura del sitio (public_html / raíz del repo)
- Páginas root: `index.html`, `servicios.html`, `por-que-nosotros.html`, `proceso.html`,
  `contacto.html`, `diagnostico.html`, `legal.html`, `404.html`, `google98569ec779f152f6.html` (verificación).
- Blog en `/blog/`: index + posts (puntos-de-fuga, indicadores-salud-pipeline, checklist-habilitacion,
  revops-para-pymes-que-es, agencia-marketing-b2b-colombia, consultoria-ventas-b2b-colombia).
- Assets: `style.css`, `script.js`, `translations.js` (NO se carga motor i18n: los `data-i18n` son inertes;
  editar el HTML visible, no translations.js), `logo-horizontal-blanco.svg` (logo nav/footer),
  `logo.svg` (favicon), `og-image.jpg`, `klaro/` (consentimiento), `pricing.md`, `llms.txt`,
  `robots.txt`, `sitemap.xml`, `.htaccess`.

## URLs
- URLs públicas en español SIN extensión: `/servicios`, `/por-que-nosotros`, `/proceso`, `/contacto`,
  `/diagnostico`, `/legal`. El home queda en `/`.
- Los enlaces internos en el HTML usan `.html` (ej. `servicios.html`); el `.htaccess` limpia la extensión.
- `.htaccess`: fuerza HTTPS + non-www, redirects 301 de las URLs viejas en inglés a las nuevas en
  español (ANTES de las reglas de clean URLs), redirects 301 de URLs históricas del blog (3 posts que
  vivieron en la raíz → `/blog/`, y el directorio duplicado `/blog/blog/` → `/blog/`), redirect de
  barra final (`/pagina/` → `/pagina`), clean URLs, GZIP, cache, security headers, charset UTF-8,
  ErrorDocument 404. NO romper ese orden. (Las redirecciones históricas corrigen los errores de
  "página con redirección" y el 404 que reportaba Search Console en jun 2026.)

## Compliance (Colombia)
- **Klaro** gestiona cookies en las 14 páginas. GA4 (`G-NF8WJBGXBX`) y Meta Pixel (`1753512212293395`)
  van GATEADOS: `<script type="text/plain" data-name="google-analytics" / "meta-pixel">`. NO cargarlos
  sin gatear. GA con `anonymize_ip: true`. Config en `klaro/klaro-config.js`, estilos en `klaro/klaro.css`.
  El banner es una tarjeta discreta en la esquina inferior izquierda (Aceptar todas + Rechazar, sin Personalizar).
- Enlace "Preferencias de Cookies" en el footer (reabre Klaro con `klaro.show()`).
- **Habeas Data** (Ley 1581 de 2012): checkbox obligatorio en los 3 formularios (index, contacto, diagnostico),
  validado por JS (bloquea el envío si no se marca). Clase `.form-consent` en style.css.
- Honeypot anti-spam ya oculto por CSS inline en los formularios. NO tocar.

## SEO / GEO (ya implementado)
- Structured data: Organization, LocalBusiness, ProfessionalService, WebSite, FAQPage (home),
  Service+FAQPage (servicios), AboutPage (por-que-nosotros), HowTo+BreadcrumbList (proceso),
  Quiz (diagnostico), ContactPage (contacto), WebPage (legal), BlogPosting+FAQPage (cada post del blog).
- `llms.txt` y `pricing.md` para motores de IA. `robots.txt` permite GPTBot/ClaudeBot/PerplexityBot/Google-Extended
  y referencia el sitemap.
- Meta descriptions ≤160 ch, titles ≤60 ch, 1 H1 por página, canonicals + og:url en español.
- Skip-to-content link (`#contenido`) en todas las páginas para accesibilidad.

## Estética (decisión actual)
- Referencias visuales: Belkins y directiveconsulting.com (limpio, tipografía fuerte, mucho espacio,
  acentos de color, casi sin foto de stock).
- **Solo el blog usa imágenes.** El resto del sitio NO usa fotos: diseño dark + burgundy + dorado con
  degradados/glow burgundy, líneas doradas finas entre secciones y acentos dorados en hover de tarjetas.
- No volver a meter fotos de stock (Unsplash) fuera del blog salvo que Julian pase fotos propias de marca.
- Pendiente: afinar tipografía, espaciados y ritmo entre secciones con feedback visual (capturas) de Julian.

## Notas técnicas
- **NO usar `zoom` para escalar el sitio.** Hubo un `zoom: 1.1` en `bs.css` (un "+10% global") que
  descuadraba la página en móvil: al hacer pinch-to-zoom y volver, el viewport visual quedaba
  desincronizado del de layout (el contenido se apretaba a la izquierda con franja negra a la derecha
  y el nav fijo se veía a todo el ancho). El `zoom` es incompatible con el pinch en móvil sin importar
  el elemento, así que se ELIMINÓ y el sitio quedó a su tamaño real (100%). Si Julian quiere recuperar
  el +10%, hay que hacer escalado real (rem/tokens), NO volver a `zoom`. `overflow-x` es `clip` (no
  `hidden`) para recortar el sangrado de florituras sin crear contenedor de scroll.
- Los commits salen como "Unverified" en GitHub (sin firma GPG): es solo cosmético, no afecta nada.
- No incluir el identificador del modelo ni secretos en commits/PRs.
