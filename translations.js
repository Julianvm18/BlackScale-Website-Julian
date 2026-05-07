(function () {
  var T = {
    en: {
      // NAV
      'nav.services': 'What We Do',
      'nav.why': 'Why Us',
      'nav.process': 'Process',
      'nav.cta': 'Get in Touch',

      // FOOTER CTA STRIP
      'footer.cta.h': 'Ready to scale your revenue?',
      'footer.cta.p': "Let's talk about your growth goals. No pitch, just strategy.",
      'footer.contact_us': 'Contact Us',

      // FOOTER BRAND
      'footer.desc': 'B2B Marketing & Revenue Growth Consulting. We help ambitious companies build structured, measurable growth engines.',

      // FOOTER COLUMN TITLES
      'footer.col.services': 'Services',
      'footer.col.company': 'Company',
      'footer.col.legal': 'Legal & Policies',

      // FOOTER SERVICE LINKS
      'footer.svc.demand': 'Predictable Commercial Pipeline',
      'footer.svc.revops': 'More Meetings with Decision-Makers',
      'footer.svc.sales': 'Real Alignment: Marketing & Sales',
      'footer.svc.abm': 'Faster Deal Closing',
      'footer.svc.gtm': 'Expansion into New Markets',
      'footer.svc.analytics': 'Data-Driven Growth',

      // FOOTER COMPANY LINKS
      'footer.co.why': 'Why Blackscale',
      'footer.co.process': 'Our Process',
      'footer.co.team': 'The Team',
      'footer.co.success': 'Success Cases',
      'footer.co.careers': 'Careers',
      'footer.co.contact': 'Contact',

      // FOOTER LEGAL LINKS
      'footer.legal.privacy': 'Privacy Policy',
      'footer.legal.data': 'Data Management',
      'footer.legal.terms': 'Terms of Service',
      'footer.legal.cookie': 'Cookie Policy',
      'footer.legal.gdpr': 'GDPR Compliance',
      'footer.legal.access': 'Accessibility',

      // FOOTER BOTTOM
      'footer.copy': '\u00a9 2026 Blackscale Consulting. All rights reserved.',
      'footer.bottom.privacy': 'Privacy',
      'footer.bottom.terms': 'Terms',
      'footer.bottom.cookies': 'Cookies',

      // SHARED CONTACT FORM
      'form.name': 'Full Name *',
      'form.company': 'Company *',
      'form.email': 'Work Email *',
      'form.phone': 'Phone (optional)',
      'form.interest.label': 'Primary Interest',
      'form.interest.placeholder': 'What can we help with?',
      'form.interest.demand': 'Demand Generation',
      'form.interest.revops': 'Revenue Operations',
      'form.interest.sales': 'Sales Enablement',
      'form.interest.abm': 'Account-Based Marketing',
      'form.interest.gtm': 'Go-to-Market Strategy',
      'form.interest.analytics': 'Performance Analytics',
      'form.interest.notsure': 'Not sure yet',
      'form.challenge.label': "What's your biggest growth challenge? *",
      'form.challenge.placeholder': "Tell us about your current pipeline, revenue goals, or where you're stuck...",
      'form.submit': 'Send Message & Book a Call',
      'btn.book_call': 'Book Your Call',
      'form.note': 'One of our founders will contact you within one business day.',
      'form.success.h': 'Message received.',
      'form.success.p': 'Thank you for reaching out. A founder will be in touch within one business day to schedule your free strategy call.',

      // SECTION TAGS
      'tag.what_we_do': 'What We Do',
      'tag.why': 'Why Blackscale',
      'tag.team': 'The Team',
      'tag.how_we_work': 'How We Work',
      'tag.get_in_touch': 'Get in Touch',
      'tag.our_philosophy': 'Our Philosophy',
      'tag.our_values': 'Our Values',
      'tag.what_to_expect': 'What to Expect',

      // COMMON BUTTONS
      'btn.view_all': 'Learn more about what we do',
      'btn.learn_more': 'Learn More About Us',
      'btn.full_process': 'See the Full Process',
      'btn.strategy_call': 'Schedule Your Free Consultation',
      'btn.explore': 'Explore Services',

      // BREADCRUMBS
      'breadcrumb.home': 'Home',
      'breadcrumb.services': 'Services',
      'breadcrumb.why': 'Why Us',
      'breadcrumb.process': 'Process',
      'breadcrumb.contact': 'Get in Touch',

      // INDEX — HERO
      'hero.headline': 'Marketing designed to<br /><em>scale B2B businesses.</em>',
      'hero.sub': 'At Blackscale Consulting we help B2B companies generate high-quality leads and strengthen their sales pipeline through data-driven marketing strategies, digital advertising optimization, and sales enablement to convert more opportunities into clients.',
      'hero.stat1': 'LinkedIn Ads Specialization',
      'hero.stat2': 'Experience in Highly Competitive Markets',

      // INDEX — SERVICES PREVIEW
      'idx.svc.heading': 'Results you can<br /><em>achieve.</em>',
      'idx.svc.sub': 'From predictable pipeline to faster deal closure, every engagement is built around outcomes that matter to your business.',

      // SERVICE CARD HEADINGS & SHORT DESCRIPTIONS (index preview)
      'svc.demand.h': 'Predictable Commercial Pipeline',
      'svc.demand.p': 'We build demand generation systems that constantly feed your pipeline with qualified opportunities.',
      'svc.revops.h': 'More Meetings with Decision-Makers',
      'svc.revops.p': 'We activate campaigns and prospecting processes that connect your company directly with the right decision-makers.',
      'svc.sales.h': 'Real Alignment Between Marketing and Sales',
      'svc.sales.p': 'We integrate both teams under one strategy to transform leads into real business opportunities.',
      'svc.abm.h': 'Faster Deal Closing',
      'svc.abm.p': 'We optimize the commercial process with better messaging, processes, and follow-up to shorten sales cycles.',
      'svc.gtm.h': 'Expansion into New Markets',
      'svc.gtm.p': 'We design go-to-market strategies that allow you to launch products or enter new markets with greater probability of success.',
      'svc.analytics.h': 'Data-Driven Growth',
      'svc.analytics.p': 'Every action is measured and constantly optimized to scale revenue sustainably.',

      // INDEX — WHY US PREVIEW
      'idx.why.heading': "We don't do<br /><em>vanity metrics.</em>",
      'idx.why.sub': 'Most marketing agencies track clicks and impressions. We track pipeline, revenue, and growth. Every engagement is tied to outcomes that matter to your business.',
      'idx.why.li1.strong': 'Revenue-first mindset',
      'idx.why.li1.p': 'Every strategy and tactic is evaluated on its ability to drive measurable revenue impact.',
      'idx.why.li2.strong': 'Deep B2B expertise',
      'idx.why.li2.p': 'We work exclusively in B2B. We understand complex sales cycles, buying committees, and enterprise dynamics.',
      'idx.why.li3.strong': 'Embedded, not outsourced',
      'idx.why.li3.p': 'We work as an extension of your team, not a distant vendor. You get senior-level thinking and hands-on execution.',
      'idx.why.li4.strong': 'Built to scale with you',
      'idx.why.li4.p': 'Our frameworks are designed to be owned by your team long-term, not to create dependency on us.',

      // INDEX — FOUNDERS
      'founders.heading': 'Meet the<br /><em>founders.</em>',
      'founders.sub': 'The people behind Blackscale Consulting — building better B2B growth, together.',
      'founders.f1.title': 'Co-Founder & CEO',
      'founders.f2.title': 'Co-Founder & COO',
      'founders.bio': "Bio coming soon. We'll add a brief background about this founder's expertise, journey, and vision for Blackscale Consulting.",

      // INDEX — PROCESS PREVIEW
      'idx.process.heading': 'How we develop<br /><em>the strategy.</em>',
      'idx.process.sub': 'A structured six-step process that takes you from alignment to sustained, measurable growth.',
      'idx.process.s1.h': 'Strategic Onboarding',
      'idx.process.s1.p': 'We analyze your business, offer, market and commercial process to define growth objectives and the strategic focus.',
      'idx.process.s2.h': 'Audience & Message Definition',
      'idx.process.s2.p': 'We identify your ideal customer, refine positioning, and build messages designed to capture the attention of B2B decision-makers.',
      'idx.process.s3.h': 'Campaign Activation',
      'idx.process.s3.p': 'We launch campaigns on one or multiple platforms to attract qualified prospects and generate demand.',
      'idx.process.s4.h': 'Sales Team Integration',
      'idx.process.s4.p': 'We align marketing and sales through workshops, frameworks, and processes that convert demand into real opportunities.',
      'idx.process.s5.h': 'Prospecting & Pipeline Management',
      'idx.process.s5.p': 'We support the commercial operation with SDRs and specialists who qualify leads, manage conversations, and strengthen the pipeline.',
      'idx.process.s6.h': 'Continuous Measurement & Optimization',
      'idx.process.s6.p': 'We analyze campaign and pipeline performance to optimize strategy and scale results sustainably.',

      // SHARED CONTACT SECTION HEADER
      'contact.heading': 'Start the<br /><em>conversation.</em>',
      'contact.sub': "Tell us about your business and goals. We'll follow up within one business day to book your free strategy call.",

      // SERVICES PAGE
      'svc.page.tag': 'What We Do',
      'svc.page.h1': 'End-to-end B2B growth,<br /><em>done right.</em>',
      'svc.page.sub': 'From demand generation to deal closure, we cover every lever that drives revenue — with strategies built around your business, not a template.',

      // SERVICE CARDS — FULL (services page)
      'svc.demand.full_p': 'Build repeatable, scalable pipelines with targeted campaigns, content strategy, and multi-channel outreach. We identify your ideal buyer profile, map their journey, and design programs that bring the right opportunities to your funnel — consistently.',
      'svc.demand.li1': 'Outbound & inbound strategy',
      'svc.demand.li2': 'Content marketing & SEO',
      'svc.demand.li3': 'Paid media management',
      'svc.demand.li4': 'Lead scoring & nurturing',
      'svc.revops.full_p': 'Align your sales, marketing, and customer success teams around unified data, optimized processes, and the tools that make closing easier. We build the operational backbone that allows your revenue engine to run efficiently at scale.',
      'svc.revops.li1': 'CRM implementation & hygiene',
      'svc.revops.li2': 'Pipeline & forecast management',
      'svc.revops.li3': 'Tech stack audit & optimization',
      'svc.revops.li4': 'Cross-team alignment frameworks',
      'svc.sales.full_p': 'Give your sales team everything they need to close more deals, faster. We create the playbooks, messaging frameworks, objection handling guides, and competitive intelligence that turn good reps into great ones.',
      'svc.sales.li1': 'Sales playbooks & scripts',
      'svc.sales.li2': 'Competitive battle cards',
      'svc.sales.li3': 'Pitch decks & proposal templates',
      'svc.sales.li4': 'Rep training & onboarding',
      'svc.abm.full_p': 'Stop spraying and praying. We help you identify your highest-value accounts and build coordinated, personalized campaigns that open doors and accelerate deals with exactly the right buyers.',
      'svc.abm.li1': 'ICP definition & account selection',
      'svc.abm.li2': 'Personalized multi-touch campaigns',
      'svc.abm.li3': 'Intent data & signal monitoring',
      'svc.abm.li4': 'Sales & marketing coordination',
      'svc.gtm.full_p': 'Launch new products or enter new markets with confidence. We build GTM plans grounded in competitive research, ICP definition, and channel strategy — so you enter the market with precision, not guesswork.',
      'svc.gtm.li1': 'Market research & segmentation',
      'svc.gtm.li2': 'Positioning & messaging',
      'svc.gtm.li3': 'Channel & pricing strategy',
      'svc.gtm.li4': 'Launch execution planning',
      'svc.analytics.full_p': "Translate marketing data into clear revenue attribution. We build the dashboards, reporting systems, and measurement frameworks so you always know exactly what's working, what isn't, and where to invest next.",
      'svc.analytics.li1': 'Revenue attribution modeling',
      'svc.analytics.li2': 'Executive dashboards',
      'svc.analytics.li3': 'KPI definition & tracking',
      'svc.analytics.li4': 'Monthly performance reporting',

      // WHY US PAGE
      'why.page.tag': 'Why Blackscale',
      'why.page.h1': "We don't do<br /><em>vanity metrics.</em>",
      'why.page.sub': 'Most marketing agencies track clicks and impressions. We track pipeline, revenue, and growth. Every engagement is tied to outcomes that matter to your business.',
      'why.philosophy.heading': 'Revenue is the<br /><em>only metric that matters.</em>',
      'why.philosophy.sub': "We've seen too many companies invest in marketing that looks great on a dashboard but does nothing for the bottom line. Blackscale was built to do things differently — every strategy, tactic, and dollar is measured against one thing: revenue impact.",
      'why.li1.strong': 'Revenue-first mindset',
      'why.li1.p': "Every strategy and tactic is evaluated on its ability to drive measurable revenue impact. We don't celebrate traffic; we celebrate closed deals.",
      'why.li2.strong': 'Deep B2B expertise',
      'why.li2.p': 'We work exclusively in B2B. We understand complex sales cycles, buying committees, multi-stakeholder dynamics, and the nuances of enterprise purchasing decisions.',
      'why.li3.strong': 'Embedded, not outsourced',
      'why.li3.p': 'We work as a true extension of your team, not a distant vendor sending monthly reports. You get senior-level thinking and hands-on execution, every day.',
      'why.li4.strong': 'Built to scale with you',
      'why.li4.p': 'Our frameworks are designed to be owned by your team long-term. We build capability inside your organization, not dependency on us.',
      'why.li5.strong': 'Data-driven, not gut-driven',
      'why.li5.p': 'Every recommendation is backed by data. We audit before we advise, and we measure everything we execute so decisions compound over time.',

      // METRIC CARDS
      'metric.pipeline.label': 'Pipeline Generated',
      'metric.pipeline.trend': '+127% YoY',
      'metric.leads.label': 'Qualified Leads / Mo',
      'metric.leads.trend': '+89% from baseline',
      'metric.cycle.label': 'Avg. Sales Cycle',
      'metric.cycle.trend': 'Faster time to close',

      // VALUES
      'values.heading': 'What we believe<br /><em>shapes how we work.</em>',
      'values.sub': "These aren't words on a wall — they're the principles that guide every engagement we take on.",
      'values.v1.h': 'Honesty over comfort',
      'values.v1.p': "We'll tell you what you need to hear, not what you want to hear. If your strategy is broken, we'll say so — and then help you fix it.",
      'values.v2.h': 'Outcomes over activity',
      'values.v2.p': "More campaigns don't mean more revenue. We focus on the actions that actually move the needle, and we hold ourselves accountable to results.",
      'values.v3.h': 'Speed over perfection',
      'values.v3.p': "Done and tested beats perfect and pending. We move fast, learn from data, and iterate — because the market doesn't wait.",
      'values.v4.h': 'Partnership over transaction',
      'values.v4.p': "We're invested in your success. We win when you win, and that shapes how we show up every single day.",

      // PROCESS PAGE
      'process.page.tag': 'How We Work',
      'process.page.h1': 'A clear path from<br /><em>strategy to growth.</em>',
      'process.page.sub': 'No fluff. No 90-day onboarding. No smoke and mirrors. We get to work fast and show results early — with full transparency at every step.',
      'process.s1.h': 'Diagnose',
      'process.s1.p': 'We audit your current marketing and sales engine — identifying gaps, leaks, and untapped opportunities in your pipeline. No assumptions, just data.',
      'process.s2.h': 'Strategize',
      'process.s2.p': 'We build a tailored growth plan with clear priorities, channel selection, and 90-day milestones tied to your specific revenue targets.',
      'process.s3.h': 'Execute',
      'process.s3.p': 'We run the plays — campaigns, content, outreach, and enablement — with your team embedded at every step of execution.',
      'process.s4.h': 'Optimize',
      'process.s4.p': 'We measure, learn, and iterate. Monthly reporting keeps leadership informed and the strategy continuously improving.',

      // PROCESS DETAIL
      'detail.tag': 'What to Expect',
      'detail.heading': 'Inside each<br /><em>phase of engagement.</em>',
      'detail.sub': "Here's what we actually do — in detail — at each stage of working together.",
      'detail.d1.h': 'The Diagnosis Call',
      'detail.d1.p': "We start with a 60-minute deep-dive into your business — current pipeline, revenue targets, team structure, tools, and what's been tried before. This isn't a sales call; it's a working session. We come prepared with questions that surface the real growth blockers.",
      'detail.d2.h': 'The Growth Blueprint',
      'detail.d2.p': "Within two weeks of kick-off, you receive a full Growth Blueprint: a prioritized roadmap with specific initiatives, channel recommendations, 90-day milestones, and the KPIs we'll hold ourselves to. No fluff — just a clear plan of attack.",
      'detail.d3.h': 'Embedded Execution',
      'detail.d3.p': "We don't hand off a deck and disappear. Our team embeds with yours — running campaigns, building content, coordinating outreach, and iterating in real time. You always know what we're working on and why.",
      'detail.d4.h': 'Monthly Performance Reviews',
      'detail.d4.p': "Every month, we review what worked, what didn't, and where we're doubling down. These sessions are with your leadership team and are built around pipeline and revenue data — not activity metrics.",

      // CONTACT PAGE
      'contact.page.tag': "Let's Talk",
      'contact.page.h1': 'Start the<br /><em>conversation.</em>',
      'contact.page.sub': "Tell us about your business and where you want to grow. We'll follow up within one business day to book your free strategy call.",
      'contact.reach_out.tag': 'Reach Out',
      'contact.reach_out.heading': 'We respond<br /><em>within 24 hours.</em>',
      'contact.reach_out.sub': "No gatekeeping, no junior account rep. You'll hear directly from one of our founders within one business day.",
      'contact.next.label': 'What happens after you submit',
      'contact.next.s1.strong': 'We review your submission',
      'contact.next.s1.span': 'We read every submission personally — no auto-replies or bots.',
      'contact.next.s2.strong': 'We follow up within 24 hours',
      'contact.next.s2.span': 'A founder reaches out to schedule your free strategy call.',
      'contact.next.s3.strong': '30-minute strategy call',
      'contact.next.s3.span': 'We diagnose your biggest growth bottleneck — no commitment required.',

      // LEGAL PAGE
      'legal.page.tag': 'Compliance &amp; Transparency',
      'legal.page.h1': 'Legal &amp; <em>Policies</em>',
      'legal.page.sub': 'Our legal framework is grounded in Colombian law and aligned with international data protection standards. These documents define how we operate, how we protect your information, and your rights as a user.',
      'legal.breadcrumb': 'Legal &amp; Policies',

      // COMPANY SIZE (contact page only)
      'form.size.label': 'Company Size',
      'form.size.placeholder': 'Select company size',
      'form.size.1_10': '1\u201310 employees',
      'form.size.11_50': '11\u201350 employees',
      'form.size.51_200': '51\u2013200 employees',
      'form.size.201_500': '201\u2013500 employees',
      'form.size.500plus': '500+ employees',
    },

    es: {
      // NAV
      'nav.services': 'Qu\u00e9 hacemos',
      'nav.why': 'Por qu\u00e9 nosotros',
      'nav.process': 'Proceso',
      'nav.cta': 'Cont\u00e1ctanos',

      // FOOTER CTA STRIP
      'footer.cta.h': '\u00bfListo para escalar tus ingresos?',
      'footer.cta.p': 'Hablemos de tus metas de crecimiento.',
      'footer.contact_us': 'Cont\u00e1ctanos',

      // FOOTER BRAND
      'footer.desc': 'Consultor\u00eda de Marketing B2B y Crecimiento de Ingresos. Ayudamos a empresas ambiciosas a construir motores de crecimiento estructurados y medibles.',

      // FOOTER COLUMN TITLES
      'footer.col.services': 'Servicios',
      'footer.col.company': 'Empresa',
      'footer.col.legal': 'Legal y Pol\u00edticas',

      // FOOTER SERVICE LINKS
      'footer.svc.demand': 'Pipeline Comercial Predecible',
      'footer.svc.revops': 'M\u00e1s Reuniones con Decisores',
      'footer.svc.sales': 'Alineaci\u00f3n Real: Marketing y Ventas',
      'footer.svc.abm': 'Mayor Velocidad de Cierre',
      'footer.svc.gtm': 'Expansi\u00f3n a Nuevos Mercados',
      'footer.svc.analytics': 'Crecimiento Basado en Datos',

      // FOOTER COMPANY LINKS
      'footer.co.why': 'Por qu\u00e9 Blackscale',
      'footer.co.process': 'Nuestro Proceso',
      'footer.co.team': 'El Equipo',
      'footer.co.success': 'Casos de \u00c9xito',
      'footer.co.careers': 'Carreras',
      'footer.co.contact': 'Contacto',

      // FOOTER LEGAL LINKS
      'footer.legal.privacy': 'Pol\u00edtica de Privacidad',
      'footer.legal.data': 'Gesti\u00f3n de Datos',
      'footer.legal.terms': 'T\u00e9rminos de Servicio',
      'footer.legal.cookie': 'Pol\u00edtica de Cookies',
      'footer.legal.gdpr': 'Cumplimiento GDPR',
      'footer.legal.access': 'Accesibilidad',

      // FOOTER BOTTOM
      'footer.copy': '\u00a9 2026 Blackscale Consulting. Todos los derechos reservados.',
      'footer.bottom.privacy': 'Privacidad',
      'footer.bottom.terms': 'T\u00e9rminos',
      'footer.bottom.cookies': 'Cookies',

      // SHARED CONTACT FORM
      'form.name': 'Nombre Completo *',
      'form.company': 'Empresa *',
      'form.email': 'Correo Corporativo *',
      'form.phone': 'Tel\u00e9fono (opcional)',
      'form.interest.label': 'Inter\u00e9s Principal',
      'form.interest.placeholder': '\u00bfEn qu\u00e9 podemos ayudarte?',
      'form.interest.demand': 'Generaci\u00f3n de Demanda',
      'form.interest.revops': 'Operaciones de Ingresos',
      'form.interest.sales': 'Habilitaci\u00f3n de Ventas',
      'form.interest.abm': 'Marketing Basado en Cuentas',
      'form.interest.gtm': 'Estrategia Go-to-Market',
      'form.interest.analytics': 'Anal\u00edtica de Rendimiento',
      'form.interest.notsure': 'A\u00fan no lo s\u00e9',
      'form.challenge.label': 'Opcional: \u00bfqu\u00e9 te gustar\u00eda lograr o mejorar en esta etapa?',
      'form.challenge.placeholder': 'Cu\u00e9ntanos sobre tu pipeline actual, metas de ingresos o d\u00f3nde est\u00e1s atascado...',
      'form.submit': 'Enviar Mensaje y Reservar Llamada',
      'btn.book_call': 'Reserva tu llamada',
      'form.note': 'Uno de nuestros fundadores se contactar\u00e1 contigo en menos de un d\u00eda h\u00e1bil.',
      'form.success.h': 'Mensaje recibido.',
      'form.success.p': 'Gracias por contactarnos. Un fundador se comunicar\u00e1 contigo en un d\u00eda h\u00e1bil para programar tu llamada de estrategia gratuita.',

      // SECTION TAGS
      'tag.what_we_do': 'Qu\u00e9 hacemos',
      'tag.why': 'Por qu\u00e9 Blackscale',
      'tag.team': 'El Equipo',
      'tag.how_we_work': 'C\u00f3mo trabajamos',
      'tag.get_in_touch': 'Cont\u00e1ctanos',
      'tag.our_philosophy': 'Nuestra Filosof\u00eda',
      'tag.our_values': 'Nuestros Valores',
      'tag.what_to_expect': 'Qu\u00e9 esperar',

      // COMMON BUTTONS
      'btn.view_all': 'Conoce m\u00e1s a detalle lo que hacemos',
      'btn.learn_more': 'Conoce m\u00e1s sobre nosotros',
      'btn.full_process': 'Ver el Proceso Completo',
      'btn.strategy_call': 'Agenda tu Consultor\u00eda Gratuita',
      'btn.explore': 'Explorar Servicios',

      // BREADCRUMBS
      'breadcrumb.home': 'Inicio',
      'breadcrumb.services': 'Servicios',
      'breadcrumb.why': 'Por qu\u00e9 nosotros',
      'breadcrumb.process': 'Proceso',
      'breadcrumb.contact': 'Cont\u00e1ctanos',

      // INDEX — HERO
      'hero.headline': 'Marketing dise\u00f1ado para escalar negocios B2B.',
      'hero.sub': 'En Blackscale Consulting ayudamos a empresas B2B a generar leads de alta calidad y fortalecer su pipeline de ventas mediante estrategias de marketing basadas en datos, optimizaci\u00f3n de pauta digital y sales enablement para convertir m\u00e1s oportunidades en clientes.',
      'hero.stat1': 'Especializaci\u00f3n en LinkedIn Ads',
      'hero.stat2': 'Experiencia operando en mercados altamente competitivos',
      'hero.stat3': 'Enfoque en ingresos B2B',

      // INDEX — SERVICES PREVIEW
      'idx.svc.heading': 'Resultados que puedes<br /><em>obtener.</em>',
      'idx.svc.sub': 'Acompa\u00f1amos a las empresas desde la generaci\u00f3n de demanda hasta el cierre de ventas, alineando marketing y ventas para maximizar resultados.',

      // SERVICE CARD HEADINGS & SHORT DESCRIPTIONS
      'svc.demand.h': 'Pipeline Comercial Predecible',
      'svc.demand.p': 'Construimos sistemas de generaci\u00f3n de demanda que alimentan constantemente tu pipeline con oportunidades calificadas.',
      'svc.revops.h': 'M\u00e1s Reuniones con Decisores',
      'svc.revops.p': 'Activamos campa\u00f1as y procesos de prospecci\u00f3n que conectan tu empresa directamente con los tomadores de decisi\u00f3n correctos.',
      'svc.sales.h': 'Alineaci\u00f3n Real entre Marketing y Ventas',
      'svc.sales.p': 'Integramos ambos equipos bajo una misma estrategia para transformar leads en oportunidades reales de negocio.',
      'svc.abm.h': 'Mayor Velocidad de Cierre',
      'svc.abm.p': 'Optimizamos el proceso comercial con mejores mensajes, procesos y seguimiento para acortar ciclos de venta.',
      'svc.gtm.h': 'Expansi\u00f3n a Nuevos Mercados',
      'svc.gtm.p': 'Dise\u00f1amos estrategias go-to-market que permiten lanzar productos o entrar en nuevos mercados con mayor probabilidad de \u00e9xito.',
      'svc.analytics.h': 'Crecimiento Basado en Datos',
      'svc.analytics.p': 'Cada acci\u00f3n se mide y optimiza constantemente para escalar los ingresos de forma sostenida.',

      // INDEX — WHY US PREVIEW
      'idx.why.heading': 'No nos enfocamos en<br /><em>m\u00e9tricas de vanidad.</em>',
      'idx.why.sub': 'La mayor\u00eda de las agencias de marketing miden clics e impresiones. Nosotros medimos pipeline, ingresos y crecimiento. Cada compromiso est\u00e1 ligado a resultados que importan para tu negocio.',
      'idx.why.li1.strong': 'Mentalidad enfocada en ingresos',
      'idx.why.li1.p': 'Cada estrategia y t\u00e1ctica se eval\u00faa por su capacidad de generar un impacto medible en los ingresos.',
      'idx.why.li2.strong': 'Profunda experiencia en B2B',
      'idx.why.li2.p': 'Trabajamos exclusivamente en B2B. Entendemos los ciclos de venta complejos, los comit\u00e9s de compra y la din\u00e1mica empresarial.',
      'idx.why.li3.strong': 'Integrados, no subcontratados',
      'idx.why.li3.p': 'Trabajamos como una extensi\u00f3n de tu equipo, no como un proveedor distante. Obtienes pensamiento de nivel senior y ejecuci\u00f3n pr\u00e1ctica.',
      'idx.why.li4.strong': 'Basado en datos, no en corazonadas',
      'idx.why.li4.p': 'Cada recomendaci\u00f3n est\u00e1 respaldada por datos. Auditamos antes de asesorar, y medimos todo lo que ejecutamos para que las decisiones se acumulen con el tiempo.',

      // INDEX — FOUNDERS
      'founders.heading': 'Conoce a los<br /><em>fundadores.</em>',
      'founders.sub': 'Las personas detr\u00e1s de Blackscale Consulting \u2014 construyendo un mejor crecimiento B2B, juntos.',
      'founders.f1.title': 'Co-Fundador y CEO',
      'founders.f2.title': 'Co-Fundador y COO',
      'founders.bio': 'Biograf\u00eda pr\u00f3ximamente. A\u00f1adiremos una breve rese\u00f1a sobre la experiencia, trayectoria y visi\u00f3n de este fundador para Blackscale Consulting.',

      // INDEX — PROCESS PREVIEW
      'idx.process.heading': 'C\u00f3mo desarrollamos<br /><em>la estrategia.</em>',
      'idx.process.sub': 'Un proceso estructurado de seis pasos que te lleva desde la alineaci\u00f3n hasta un crecimiento sostenido y medible.',
      'idx.process.s1.h': 'Onboarding Estrat\u00e9gico',
      'idx.process.s1.p': 'Analizamos tu negocio, oferta, mercado y proceso comercial para definir los objetivos de crecimiento y el enfoque de la estrategia.',
      'idx.process.s2.h': 'Definici\u00f3n de Audiencia y Mensaje',
      'idx.process.s2.p': 'Identificamos tu cliente ideal, refinamos el posicionamiento y construimos mensajes dise\u00f1ados para captar la atenci\u00f3n de decisores B2B.',
      'idx.process.s3.h': 'Activaci\u00f3n de Campa\u00f1as',
      'idx.process.s3.p': 'Lanzamos campa\u00f1as en una o m\u00faltiples plataformas para atraer prospectos calificados y generar demanda.',
      'idx.process.s4.h': 'Integraci\u00f3n con el Equipo de Ventas',
      'idx.process.s4.p': 'Alineamos marketing y ventas mediante workshops, frameworks y procesos que permiten convertir demanda en oportunidades reales.',
      'idx.process.s5.h': 'Prospecci\u00f3n y Gesti\u00f3n del Pipeline',
      'idx.process.s5.p': 'Apoyamos la operaci\u00f3n comercial con SDRs y especialistas que califican leads, gestionan conversaciones y fortalecen el pipeline.',
      'idx.process.s6.h': 'Medici\u00f3n y Optimizaci\u00f3n Continua',
      'idx.process.s6.p': 'Analizamos el rendimiento de campa\u00f1as y pipeline para optimizar la estrategia y escalar resultados de forma sostenida.',

      // SHARED CONTACT SECTION HEADER
      'contact.heading': 'Inicia la<br /><em>conversaci\u00f3n.</em>',
      'contact.sub': 'Cu\u00e9ntanos sobre tu negocio y tus metas. Te contactaremos en menos de un d\u00eda h\u00e1bil para agendar una llamada de estrategia gratuita.',

      // SERVICES PAGE
      'svc.page.tag': 'Lo que hacemos',
      'svc.page.h1': 'Crecimiento B2B integral.',
      'svc.page.sub': 'Desde la generaci\u00f3n de demanda hasta el cierre de negocios, cubrimos cada palanca que impulsa los ingresos, con estrategias dise\u00f1adas para tu negocio.',

      // SERVICE CARDS — FULL (services page)
      'svc.demand.full_p': 'Construye pipelines repetibles y escalables con campa\u00f1as dirigidas, estrategia de contenido y alcance multicanal. Identificamos tu perfil de comprador ideal, mapeamos su recorrido y dise\u00f1amos programas que traen las oportunidades correctas a tu embudo \u2014 de forma consistente.',
      'svc.demand.li1': 'Estrategia outbound e inbound',
      'svc.demand.li2': 'Marketing de contenido y SEO',
      'svc.demand.li3': 'Gesti\u00f3n de medios pagados',
      'svc.demand.li4': 'Calificaci\u00f3n y nutrici\u00f3n de leads',
      'svc.revops.full_p': 'Alinea tus equipos de ventas, marketing y \u00e9xito del cliente en torno a datos unificados, procesos optimizados y las herramientas que facilitan el cierre. Construimos la columna vertebral operacional que permite que tu motor de ingresos funcione eficientemente a escala.',
      'svc.revops.li1': 'Implementaci\u00f3n y mantenimiento de CRM',
      'svc.revops.li2': 'Gesti\u00f3n de pipeline y pron\u00f3sticos',
      'svc.revops.li3': 'Auditor\u00eda y optimizaci\u00f3n del stack tecnol\u00f3gico',
      'svc.revops.li4': 'Marcos de alineaci\u00f3n entre equipos',
      'svc.sales.full_p': 'Dale a tu equipo de ventas todo lo que necesita para cerrar m\u00e1s negocios, m\u00e1s r\u00e1pido. Creamos los playbooks, marcos de mensajes, gu\u00edas de manejo de objeciones e inteligencia competitiva que convierten a buenos representantes en excelentes.',
      'svc.sales.li1': 'Playbooks y scripts de ventas',
      'svc.sales.li2': 'Tarjetas de batalla competitiva',
      'svc.sales.li3': 'Presentaciones y plantillas de propuestas',
      'svc.sales.li4': 'Capacitaci\u00f3n e incorporaci\u00f3n de representantes',
      'svc.abm.full_p': 'Deja de disparar al azar. Te ayudamos a identificar tus cuentas de mayor valor y a construir campa\u00f1as coordinadas y personalizadas que abren puertas y aceleran negocios con exactamente los compradores correctos.',
      'svc.abm.li1': 'Definici\u00f3n de ICP y selecci\u00f3n de cuentas',
      'svc.abm.li2': 'Campa\u00f1as personalizadas multicontacto',
      'svc.abm.li3': 'Datos de intenci\u00f3n y monitoreo de se\u00f1ales',
      'svc.abm.li4': 'Coordinaci\u00f3n entre ventas y marketing',
      'svc.gtm.full_p': 'Lanza nuevos productos o entra en nuevos mercados con confianza. Construimos planes GTM basados en investigaci\u00f3n competitiva, definici\u00f3n de ICP y estrategia de canales \u2014 para que entres al mercado con precisi\u00f3n, no con suposiciones.',
      'svc.gtm.li1': 'Investigaci\u00f3n de mercado y segmentaci\u00f3n',
      'svc.gtm.li2': 'Posicionamiento y mensajes',
      'svc.gtm.li3': 'Estrategia de canales y precios',
      'svc.gtm.li4': 'Planificaci\u00f3n de ejecuci\u00f3n del lanzamiento',
      'svc.analytics.full_p': 'Convierte los datos de marketing en atribuci\u00f3n de ingresos clara. Construimos los dashboards, sistemas de reporte y marcos de medici\u00f3n para que siempre sepas exactamente qu\u00e9 est\u00e1 funcionando, qu\u00e9 no, y d\u00f3nde invertir a continuaci\u00f3n.',
      'svc.analytics.li1': 'Modelado de atribuci\u00f3n de ingresos',
      'svc.analytics.li2': 'Dashboards ejecutivos',
      'svc.analytics.li3': 'Definici\u00f3n y seguimiento de KPIs',
      'svc.analytics.li4': 'Reportes mensuales de rendimiento',

      // WHY US PAGE
      'why.page.tag': 'Por qu\u00e9 Blackscale',
      'why.page.h1': 'Marketing enfocado en resultados comerciales',
      'why.page.sub': 'Nuestro enfoque va m\u00e1s all\u00e1 de la visibilidad. Medimos el impacto en pipeline, ingresos y crecimiento, asegurando que cada acci\u00f3n contribuya directamente a los resultados del negocio.',
      'why.philosophy.heading': 'Los ingresos son la<br /><em>\u00fanica m\u00e9trica que importa.</em>',
      'why.philosophy.sub': 'Hemos visto demasiadas empresas invertir en marketing que se ve bien en un dashboard pero no hace nada por los resultados finales. Blackscale fue construido para hacer las cosas de manera diferente \u2014 cada estrategia, t\u00e1ctica y d\u00f3lar se mide contra una sola cosa: el impacto en los ingresos.',
      'why.li1.strong': 'Mentalidad enfocada en ingresos',
      'why.li1.p': 'Cada estrategia y t\u00e1ctica se eval\u00faa por su capacidad de generar un impacto medible en los ingresos. No celebramos el tr\u00e1fico; celebramos los negocios cerrados.',
      'why.li2.strong': 'Profunda experiencia en B2B',
      'why.li2.p': 'Trabajamos exclusivamente en B2B. Entendemos los ciclos de venta complejos, los comit\u00e9s de compra, las din\u00e1micas de m\u00faltiples partes interesadas y los matices de las decisiones de compra empresarial.',
      'why.li3.strong': 'Integrados, no subcontratados',
      'why.li3.p': 'Trabajamos como una verdadera extensi\u00f3n de tu equipo, no como un proveedor distante que env\u00eda reportes mensuales. Obtienes pensamiento de nivel senior y ejecuci\u00f3n pr\u00e1ctica, todos los d\u00edas.',
      'why.li4.strong': 'Construido para escalar contigo',
      'why.li4.p': 'Nuestros marcos est\u00e1n dise\u00f1ados para ser apropiados por tu equipo a largo plazo. Construimos capacidad dentro de tu organizaci\u00f3n, no dependencia de nosotros.',
      'why.li5.strong': 'Basado en datos, no en corazonadas',
      'why.li5.p': 'Cada recomendaci\u00f3n est\u00e1 respaldada por datos. Auditamos antes de asesorar, y medimos todo lo que ejecutamos para que las decisiones se acumulen con el tiempo.',

      // METRIC CARDS
      'metric.pipeline.label': 'Pipeline Generado',
      'metric.pipeline.trend': '+127% interanual',
      'metric.leads.label': 'Leads Calificados / Mes',
      'metric.leads.trend': '+89% desde la l\u00ednea base',
      'metric.cycle.label': 'Ciclo de Ventas Prom.',
      'metric.cycle.trend': 'Cierre m\u00e1s r\u00e1pido',

      // VALUES
      'values.heading': 'Lo que creemos,<br /><em>define c\u00f3mo trabajamos.</em>',
      'values.sub': 'No son solo ideas, son los principios que aplicamos en cada estrategia para garantizar resultados consistentes.',
      'values.v1.h': 'Honestidad sobre comodidad',
      'values.v1.p': 'Nuestro enfoque se basa en la honestidad estrat\u00e9gica. Analizamos con objetividad, identificamos lo que no est\u00e1 funcionando y construimos soluciones para corregirlo.',
      'values.v2.h': 'Resultados sobre actividad',
      'values.v2.p': 'El crecimiento proviene de decisiones estrat\u00e9gicas, no de volumen. Ejecutamos con foco en impacto y responsabilidad sobre los resultados.',
      'values.v3.h': 'Velocidad sobre perfecci\u00f3n',
      'values.v3.p': 'Implementamos con agilidad, analizamos resultados y ajustamos la estrategia de forma continua.',
      'values.v4.h': 'Asociaci\u00f3n sobre transacci\u00f3n',
      'values.v4.p': 'Nuestro compromiso est\u00e1 alineado con tu crecimiento. Operamos con una mentalidad de partnership, donde tu \u00e9xito define nuestro trabajo y nuestros resultados.',

      // PROCESS PAGE
      'process.page.tag': 'C\u00f3mo trabajamos',
      'process.page.h1': 'Un camino claro desde<br /><em>la estrategia al crecimiento.</em>',
      'process.page.sub': 'Ejecuci\u00f3n directa y sin fricci\u00f3n. Activamos r\u00e1pido, generamos tracci\u00f3n desde el inicio y mantenemos total transparencia en cada etapa del proceso.',
      'process.s1.h': 'Diagnosticar',
      'process.s1.p': 'Auditamos tu motor actual de marketing y ventas \u2014 identificando brechas, fugas y oportunidades no aprovechadas en tu pipeline. Sin suposiciones, solo datos.',
      'process.s2.h': 'Estrategizar',
      'process.s2.p': 'Construimos un plan de crecimiento personalizado con prioridades claras, selecci\u00f3n de canales e hitos a 90 d\u00edas vinculados a tus metas de ingresos espec\u00edficas.',
      'process.s3.h': 'Ejecutar',
      'process.s3.p': 'Ejecutamos las iniciativas \u2014 campa\u00f1as, contenido, alcance y habilitaci\u00f3n \u2014 con tu equipo integrado en cada paso de la ejecuci\u00f3n.',
      'process.s4.h': 'Optimizar',
      'process.s4.p': 'Medimos, aprendemos e iteramos. Los reportes mensuales mantienen informado al liderazgo y la estrategia en constante mejora.',

      // PROCESS DETAIL
      'detail.tag': 'Qu\u00e9 esperar',
      'detail.heading': 'Dentro de cada<br /><em>fase del compromiso.</em>',
      'detail.sub': 'Este es el enfoque que aplicamos en cada fase del proceso para generar resultados consistentes.',
      'detail.d1.h': 'Llamada de Diagn\u00f3stico',
      'detail.d1.p': 'Comenzamos con una inmersi\u00f3n profunda de 60 minutos en tu negocio, pipeline actual, metas de ingresos, estructura del equipo, herramientas y lo que se ha intentado antes. No es una llamada de ventas; es una sesi\u00f3n de trabajo. Llegamos preparados con preguntas que revelan los verdaderos obst\u00e1culos de crecimiento.',
      'detail.d2.h': 'Plan de Crecimiento',
      'detail.d2.p': 'En las primeras dos semanas recibir\u00e1s un Plan de Crecimiento estructurado: una hoja de ruta personalizada con iniciativas concretas, canales definidos, hitos a 90 d\u00edas y KPIs claros. Un enfoque directo y accionable desde el inicio.',
      'detail.d3.h': 'Ejecuci\u00f3n Integrada',
      'detail.d3.p': 'Vamos m\u00e1s all\u00e1 de la planificaci\u00f3n. Trabajamos como una extensi\u00f3n de tu equipo, ejecutando campa\u00f1as, creando contenido y optimizando continuamente con total transparencia.',
      'detail.d4.h': 'Revisiones Mensuales de Rendimiento',
      'detail.d4.p': 'Realizamos revisiones mensuales enfocadas en resultados, identificando oportunidades de mejora y \u00e1reas de expansi\u00f3n, siempre con base en datos de pipeline e ingresos junto a tu equipo directivo.',

      // CONTACT PAGE
      'contact.page.tag': 'Hablemos',
      'contact.page.h1': 'Inicia la<br /><em>conversaci\u00f3n.</em>',
      'contact.page.sub': 'Cu\u00e9ntanos sobre tu negocio y d\u00f3nde quieres crecer. Te daremos seguimiento en un d\u00eda h\u00e1bil para agendar tu llamada de estrategia gratuita.',
      'contact.reach_out.tag': 'Comun\u00edcate',
      'contact.reach_out.heading': 'Respondemos<br /><em>en menos de 24 horas.</em>',
      'contact.reach_out.sub': 'Sin intermediarios, sin representantes junior. Escuchar\u00e1s directamente de uno de nuestros fundadores en un d\u00eda h\u00e1bil.',
      'contact.next.label': 'Qu\u00e9 sucede despu\u00e9s de enviar',
      'contact.next.s1.strong': 'Revisamos tu solicitud',
      'contact.next.s1.span': 'Leemos cada solicitud personalmente \u2014 sin respuestas autom\u00e1ticas ni bots.',
      'contact.next.s2.strong': 'Te contactamos en menos de 24 horas',
      'contact.next.s2.span': 'Un fundador se comunica para agendar tu llamada de estrategia gratuita.',
      'contact.next.s3.strong': 'Llamada de estrategia de 30 minutos',
      'contact.next.s3.span': 'Diagnosticamos tu mayor obst\u00e1culo de crecimiento \u2014 sin compromiso.',

      // LEGAL PAGE
      'legal.page.tag': 'Cumplimiento y Transparencia',
      'legal.page.h1': 'Legal y <em>Pol\u00edticas</em>',
      'legal.page.sub': 'Nuestro marco legal est\u00e1 fundamentado en la legislaci\u00f3n colombiana y alineado con los est\u00e1ndares internacionales de protecci\u00f3n de datos. Estos documentos definen c\u00f3mo operamos, c\u00f3mo protegemos tu informaci\u00f3n y tus derechos como usuario.',
      'legal.breadcrumb': 'Legal y Pol\u00edticas',

      // COMPANY SIZE (contact page only)
      'form.size.label': 'Tama\u00f1o de Empresa',
      'form.size.placeholder': 'Selecciona el tama\u00f1o de la empresa',
      'form.size.1_10': '1\u201310 empleados',
      'form.size.11_50': '11\u201350 empleados',
      'form.size.51_200': '51\u2013200 empleados',
      'form.size.201_500': '201\u2013500 empleados',
      'form.size.500plus': '500+ empleados',
    }
  };

  function applyLang(lang) {
    if (!T[lang]) return;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang][key] !== undefined) el.textContent = T[lang][key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (T[lang][key] !== undefined) el.placeholder = T[lang][key];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.style.display = el.getAttribute('data-lang-block') === lang ? '' : 'none';
    });

    try { localStorage.setItem('bs_lang', lang); } catch (e) {}
  }

  // Determine saved language
  var savedLang = 'en';
  try { savedLang = localStorage.getItem('bs_lang') || 'es'; } catch (e) {}

  // Apply immediately (script is at bottom of body, DOM is ready)
  applyLang(savedLang);

  // Wire up toggle buttons
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(this.dataset.lang);
    });
  });
})();
