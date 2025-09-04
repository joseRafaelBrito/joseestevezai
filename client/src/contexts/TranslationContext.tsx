import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "en" | "es";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "AI Automation Services",
    "nav.projects": "Projects",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.pages": "Pages",
    "nav.lets_talk": "Let's Talk",

    // Hero Section - SEO Optimized
    "hero.title":
      "Restaurant Menu Builder & Digital Menu Creator | Business Automation Services",
    "hero.subtitle":
      "Professional restaurant menu builder and digital menu creator. Expert business automation services for restaurants and real estate. Workflow automation with AI to streamline your operations in USA and Latin America.",
    "hero.description":
      "Transform your business operations with our expert AI automation services. We specialize in restaurant automation, real estate AI solutions, and custom workflows that streamline processes, reduce costs, and increase efficiency. Our automation with AI technology serves small businesses, restaurants, and real estate professionals across the United States and Latin America.",
    "hero.get_started": "Get Restaurant Menu Builder",
    "hero.learn_more": "View Restaurant Solutions", 
    "hero.trusted_by":
      "Trusted by 200+ restaurants and real estate businesses in USA and Latin America",

    // Features
    "features.title": "AI Automation Services & Intelligent Solutions",
    "features.subtitle":
      "Streamline your restaurant and real estate operations with powerful AI automation platforms like Python scripts, n8n workflows, and intelligent business solutions that eliminate repetitive tasks, integrate your apps, and boost overall productivity.",
    "features.automation.title": "AI Automation Services",
    "features.automation.desc":
      "Streamline your restaurant and real estate workflows with powerful AI automation platforms like Python scripts, n8n, and intelligent business solutions that eliminate repetitive tasks, integrate your apps, and boost overall productivity.",
    "features.analytics.title": "Restaurant Digital Menus & Analytics",
    "features.analytics.desc":
      "Leverage data with advanced analytics solutions — from Python-powered models to restaurant-specific tools that forecast demand, optimize digital menus, and inform strategic business decisions for restaurants and real estate businesses.",
    "features.language.title": "Intelligent Business Solutions",
    "features.language.desc":
      "Harness the latest AI technology to improve customer communication, automate support, and enhance human-AI interaction for seamless restaurant and real estate automation experiences.",
    "features.smart.title": "Real Estate AI Automation",
    "features.smart.desc":
      "Intelligent AI algorithms that adapt to your unique restaurant and real estate challenges, from real-time reporting to process optimization, helping your business scale faster and smarter with automation solutions.",

    // Services
    "services.title": "AI Automation Services for Restaurants and Real Estate",
    "services.subtitle":
      "We provide comprehensive AI automation services tailored to restaurant digital menus and real estate automation needs, ensuring optimal performance and measurable results across USA and Latin America",
    "services.marketing.title": "Digital Marketing & Google Ads AI",
    "services.marketing.desc":
      "Create targeted marketing campaigns using AI-driven customer insights and behavioral analysis to maximize conversion rates and ROI for restaurants and real estate businesses.",
    "services.chatbots.title": "AI-Powered Restaurant Solutions",
    "services.chatbots.desc":
      "Deploy intelligent conversational AI that provides 24/7 customer support, handles inquiries, and improves user experience for restaurant digital menus and real estate automation.",
    "services.automation.title": "Restaurant Automation Solutions",
    "services.automation.desc":
      "Track and measure key performance indicators in real time to monitor business growth, improve decision-making, and optimize performance across all restaurant and real estate departments with AI automation.",
    "services.analytics.title": "Real Estate AI Automation",
    "services.analytics.desc":
      "Simplify real estate automation with structured workflows that automate property management, client communications, and market analysis — ensuring faster delivery and higher quality solutions.",
    "common.learn_more": "Learn More",

    // Projects
    "projects.title": "AI Automation Projects for Restaurants and Real Estate",
    "projects.subtitle":
      "Explore our portfolio of innovative AI automation services and intelligent business solutions tailored for restaurant digital menus and real estate automation across USA and Latin America.",
    "projects.restaurant.title": "Restaurant Digital Menus with AI Automation",
    "projects.restaurant.desc":
      "An advanced AI automation dashboard that integrates restaurant digital menu management with SEO optimization, helping restaurants improve online visibility, attract more customers, and increase reservations through intelligent automation solutions.",
    "projects.restaurant.extended":
      "Our Restaurant Digital Menu AI automation platform is a comprehensive solution that combines powerful menu management capabilities with advanced AI automation features. The platform allows restaurant owners to easily update their digital menus, manage pricing, and automatically generate SEO-friendly content that improves search engine rankings. Key features include real-time analytics, customer behavior tracking, reservation integration, and automated social media posting. The dashboard provides insights into popular menu items, peak dining times, and customer preferences, enabling data-driven decisions that boost revenue and customer satisfaction through intelligent automation solutions.",
    "projects.menu.title": "AI-Powered Restaurant Digital Menu Solutions",
    "projects.menu.desc":
      "A smart AI automation tool that creates visually appealing, professionally styled digital menus optimized for both digital and print, enhancing customer experience and brand consistency for restaurants.",
    "projects.menu.extended":
      "Our AI automation Menu Styling solution revolutionizes how restaurants present their offerings to customers. Using AI-powered design algorithms, the tool automatically creates stunning, professional digital menus that reflect your brand identity and optimize customer engagement. The system analyzes menu psychology, color theory, and layout best practices to increase order values and customer satisfaction. Features include customizable templates, automatic nutritional information display, multilingual support, QR code integration for contactless ordering, and seamless integration with POS systems. The tool ensures consistency across all platforms while maintaining the flexibility to adapt to seasonal changes and special promotions through intelligent automation.",
    "projects.realestate.title": "Real Estate AI Automation Solutions",
    "projects.realestate.desc":
      "AI automation services for real estate that streamline property listings, automate client communications, and provide market insights for faster, smarter decision-making through intelligent automation solutions.",
    "projects.realestate.extended":
      "Our Real Estate AI Automation platform transforms how real estate professionals manage their business operations. The system automates property listing creation, client follow-ups, and market analysis while providing intelligent insights for better decision-making. Key features include automated property valuation using machine learning algorithms, intelligent lead scoring and nurturing, automated document generation, virtual tour integration, and predictive market analytics. The platform streamlines communication with clients through automated email sequences, SMS notifications, and personalized property recommendations. Real estate agents can focus on building relationships while the system handles routine tasks, resulting in increased productivity and higher conversion rates through AI automation services.",
    "projects.explore_all": "Explore All AI Automation Projects",
    "common.read_more": "Read More",

    // Testimonials
    "testimonials.title": "AI Automation Success Stories",
    "testimonials.subtitle":
      "See what our restaurant and real estate partners have to say about their experience with our AI automation services and intelligent business solutions.",
    "testimonials.rating": "5.0 Rating",
    "testimonials.sarah.text":
      "Before working with Jose Estevez AI automation services, we struggled to get our restaurant digital menu seen online. Their AI automation dashboard made a huge difference—our restaurant now shows up first in local searches, and we've noticed more new customers coming in every week. It feels like we finally have control over our online presence through intelligent automation solutions.",
    "testimonials.sarah.author": "Maria Rodriguez",
    "testimonials.sarah.role": "Restaurant Owner",
    "testimonials.michael.text":
      "The AI automation menu styling tool completely transformed how we present our food to customers. Our new restaurant digital menus look so professional, and we've seen a 25% increase in average order value since implementing the AI automation design recommendations. Customers always comment on how beautiful our digital menus look.",
    "testimonials.michael.author": "David Thompson",
    "testimonials.michael.role": "Restaurant Owner",

    // Blog
    "blog.title": "Latest AI Automation Insights & Articles",
    "blog.subtitle":
      "Stay updated with the latest trends, insights, and developments in AI automation services, restaurant digital menus, and real estate automation",
    "blog.post1.title":
      "The Future of AI Automation Services in Restaurant Digital Menus",
    "blog.post1.excerpt":
      "Discover how AI automation services are reshaping restaurant digital menu processes and driving unprecedented efficiency gains across the restaurant industry.",
    "blog.post2.title":
      "Real Estate AI Automation: Transforming Property Management",
    "blog.post2.excerpt":
      "Learn how AI automation services powered by machine learning can help real estate businesses make smarter, data-driven decisions for property management.",
    "blog.post3.title":
      "Building Intelligent Restaurant Solutions with AI Automation",
    "blog.post3.excerpt":
      "Explore the latest advancements in AI automation services and how they're improving restaurant digital menu interactions and customer experience.",
    "blog.read_time": "min read",
    "blog.view_all": "View All AI Automation Articles",

    // Footer
    "footer.description":
      "Empowering restaurants and real estate businesses with cutting-edge AI automation services that drive growth, efficiency, and innovation across USA and Latin America.",
    "footer.services": "AI Automation Services",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.copyright":
      " 2024 Jose Estevez AI Technologies. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.service.automation": "AI Automation Services",
    "footer.service.analytics": "Restaurant Digital Menus",
    "footer.service.ml": "Real Estate AI Automation",
    "footer.service.data": "Intelligent Business Solutions",
    "footer.service.consulting": "AI Automation Consulting",
    "footer.company.about": "About Us",
    "footer.company.team": "Our Team",
    "footer.company.careers": "Careers",
    "footer.company.news": "News",
    "footer.company.contact": "Contact",
    "footer.support.docs": "Documentation",
    "footer.support.help": "Help Center",
    "footer.support.status": "Status",

    // Pricing
    "pricing.title":
      "Affordable AI automation services to grow your restaurant and real estate business.",
    "pricing.subtitle":
      "Choose the perfect plan to transform your restaurant digital menus and real estate automation with cutting-edge AI automation services and professional web design.",
    "pricing.most_popular": "Most Popular",
    "pricing.get_started": "Get Started",
    "pricing.contact_us": "Contact Us",
    "pricing.ai.title": "AI Automation Services",
    "pricing.web.title": "Restaurant Digital Menus & Web Design",

    // Contact Modal
    "contact.title": "Let's Talk About AI Automation Services",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.date": "Date",
    "contact.time": "Time",
    "contact.optional": "optional",
    "contact.submit": "Schedule AI Automation Consultation",
    "contact.sending": "Sending...",
    "contact.success":
      "Thank you! We'll be in touch soon about your AI automation services.",
    "contact.error": "Something went wrong. Please try again.",
    "contact.firstNamePlaceholder": "John",
    "contact.lastNamePlaceholder": "Doe",
    "contact.emailPlaceholder": "john@restaurant.com",
    "contact.messagePlaceholder":
      "Tell us about your restaurant digital menu or real estate automation needs...",
    "contact.selectTime": "Select time",

    // About Me Section
    "about.title": "About Me - AI Automation Expert",
    "about.intro":
      "I'm an AI automation expert and software developer with over 10 years of experience helping restaurants and real estate businesses grow through intelligent automation solutions and digital marketing strategies.",
    "about.career":
      "Throughout my career, I've specialized in creating AI automation services that combine technical innovation with real-world business results. My expertise spans restaurant digital menus, real estate automation, and intelligent business solutions for USA and Latin America markets.",
    "about.expertise.ai":
      "with Python to create intelligent, automated solutions for restaurant digital menus and real estate automation workflows.",
    "about.expertise.restaurant":
      "using n8n to streamline operations, manage digital menus, and save businesses time across USA and Latin America.",
    "about.expertise.marketing":
      "strategies, including intelligent campaigns to boost visibility and drive customer acquisition for restaurants and real estate businesses.",
    "about.expertise.realestate":
      "with modern tools and frameworks to build intelligent systems that streamline property management and client communications.",
    "about.focus":
      "My focus is always on creating AI automation services that deliver real business value—helping restaurants and real estate companies become more efficient, profitable, and prepared for the future through intelligent automation solutions.",
    "about.collaboration":
      "If you're looking for an AI automation expert who can merge technology, AI, and marketing into a strategy that drives growth for your restaurant or real estate business in USA or Latin America, I'd love to collaborate with you.",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios de Automatización IA",
    "nav.projects": "Proyectos",
    "nav.pricing": "Precios",
    "nav.blog": "Blog",
    "nav.pages": "Páginas",
    "nav.lets_talk": "Hablemos",

    // Hero Section
    "hero.title":
      "Crear Menú de Restaurante & Menú Digital | Servicios de Automatización de Negocios",
    "hero.subtitle":
      "Creador profesional de menús de restaurante y menús digitales. Servicios expertos de automatización de negocios para restaurantes e inmobiliarias. Automatización de flujos de trabajo con IA para optimizar tus operaciones en Estados Unidos y América Latina.",
    "hero.get_started": "Crear Menú de Restaurante",
    "hero.learn_more": "Ver Soluciones para Restaurantes",
    "hero.trusted_by":
      "Confiado por más de 200 restaurantes y negocios inmobiliarios en Estados Unidos y América Latina",

    // Features
    "features.title":
      "Servicios de Automatización IA y Soluciones Inteligentes",
    "features.subtitle":
      "Optimiza las operaciones de tu restaurante e inmobiliaria con potentes plataformas de automatización IA como scripts de Python, flujos de trabajo n8n y soluciones empresariales inteligentes que eliminan tareas repetitivas, integran tus aplicaciones y aumentan la productividad general.",
    "features.automation.title": "Servicios de Automatización IA",
    "features.automation.desc":
      "Optimiza los flujos de trabajo de tu restaurante e inmobiliaria con potentes plataformas de automatización IA como scripts de Python, n8n y soluciones empresariales inteligentes que eliminan tareas repetitivas, integran tus aplicaciones y aumentan la productividad general.",
    "features.analytics.title": "Menús Digitales de Restaurantes y Análisis",
    "features.analytics.desc":
      "Aprovecha los datos con soluciones de análisis avanzadas — desde modelos impulsados por Python hasta herramientas específicas para restaurantes que pronostican la demanda, optimizan menús digitales e informan decisiones estratégicas empresariales para restaurantes y negocios inmobiliarios.",
    "features.language.title": "Soluciones Empresariales Inteligentes",
    "features.language.desc":
      "Aprovecha la última tecnología IA para mejorar la comunicación con clientes, automatizar el soporte y mejorar la interacción humano-IA para experiencias perfectas de automatización de restaurantes e inmobiliaria.",
    "features.smart.title": "Automatización IA Inmobiliaria",
    "features.smart.desc":
      "Algoritmos IA inteligentes que se adaptan a tus desafíos únicos de restaurante e inmobiliaria, desde reportes en tiempo real hasta optimización de procesos, ayudando a tu negocio a escalar más rápido e inteligentemente con soluciones de automatización.",

    // Services
    "services.title":
      "Servicios de Automatización IA para Restaurantes e Inmobiliaria",
    "services.subtitle":
      "Proporcionamos servicios integrales de automatización IA adaptados a las necesidades de menús digitales de restaurantes y automatización inmobiliaria, asegurando rendimiento óptimo y resultados medibles en Estados Unidos y América Latina",
    "services.marketing.title": "Marketing Digital y Google Ads IA",
    "services.marketing.desc":
      "Crea campañas de marketing dirigidas usando perspectivas de clientes impulsadas por IA y análisis de comportamiento para maximizar las tasas de conversión y ROI para restaurantes y negocios inmobiliarios.",
    "services.chatbots.title": "Soluciones IA para Restaurantes",
    "services.chatbots.desc":
      "Despliega IA conversacional inteligente que proporciona soporte al cliente 24/7, maneja consultas y mejora la experiencia del usuario para menús digitales de restaurantes y automatización inmobiliaria.",
    "services.automation.title":
      "Soluciones de Automatización para Restaurantes",
    "services.automation.desc":
      "Rastrea y mide indicadores clave de rendimiento en tiempo real para monitorear el crecimiento del negocio, mejorar la toma de decisiones y optimizar el rendimiento en todos los departamentos de restaurantes e inmobiliaria con automatización IA.",
    "services.analytics.title": "Automatización IA Inmobiliaria",
    "services.analytics.desc":
      "Simplifica la automatización inmobiliaria con flujos de trabajo estructurados que automatizan la gestión de propiedades, comunicaciones con clientes y análisis de mercado — asegurando entregas más rápidas y soluciones de mayor calidad.",
    "common.learn_more": "Saber Más",

    // Projects
    "projects.title":
      "Proyectos de Automatización IA para Restaurantes e Inmobiliaria",
    "projects.subtitle":
      "Explora nuestro portafolio de servicios innovadores de automatización IA y soluciones empresariales inteligentes diseñadas para menús digitales de restaurantes y automatización inmobiliaria en Estados Unidos y América Latina.",
    "projects.restaurant.title":
      "Menús Digitales de Restaurantes con Automatización IA",
    "projects.restaurant.desc":
      "Un dashboard avanzado de automatización IA que integra la gestión de menús digitales de restaurantes con optimización SEO, ayudando a los restaurantes a mejorar la visibilidad online, atraer más clientes y aumentar las reservas a través de soluciones inteligentes de automatización.",
    "projects.restaurant.extended":
      "Nuestra plataforma de Menús Digitales de Restaurantes con Automatización IA es una solución integral que combina potentes capacidades de gestión de menús con características avanzadas de automatización IA. La plataforma permite a los propietarios de restaurantes actualizar fácilmente sus menús digitales, gestionar precios y generar automáticamente contenido amigable para SEO que mejora el ranking en motores de búsqueda. Las características clave incluyen análisis en tiempo real, seguimiento del comportamiento del cliente, integración de reservas y publicación automatizada en redes sociales. El dashboard proporciona insights sobre elementos populares del menú, horarios pico de comidas y preferencias del cliente, permitiendo decisiones basadas en datos que impulsan los ingresos y la satisfacción del cliente a través de soluciones inteligentes de automatización.",
    "projects.menu.title": "Soluciones IA para Menús Digitales de Restaurantes",
    "projects.menu.desc":
      "Una herramienta inteligente de automatización IA que crea menús digitales visualmente atractivos y profesionalmente estilizados, optimizados tanto para digital como para impresión, mejorando la experiencia del cliente y la consistencia de marca para restaurantes.",
    "projects.menu.extended":
      "Nuestra solución de Estilización de Menús con Automatización IA revoluciona cómo los restaurantes presentan sus ofertas a los clientes. Usando algoritmos de diseño impulsados por IA, la herramienta crea automáticamente menús digitales impresionantes y profesionales que reflejan la identidad de tu marca y optimizan el engagement del cliente. El sistema analiza la psicología de menús, teoría del color y mejores prácticas de diseño para aumentar el valor de las órdenes y la satisfacción del cliente. Las características incluyen plantillas personalizables, visualización automática de información nutricional, soporte multiidioma, integración de códigos QR para pedidos sin contacto e integración perfecta con sistemas POS. La herramienta asegura consistencia en todas las plataformas mientras mantiene la flexibilidad para adaptarse a cambios estacionales y promociones especiales a través de automatización inteligente.",
    "projects.realestate.title": "Soluciones de Automatización IA Inmobiliaria",
    "projects.realestate.desc":
      "Servicios de automatización IA para inmobiliaria que agilizan los listados de propiedades, automatizan las comunicaciones con clientes y proporcionan insights de mercado para una toma de decisiones más rápida e inteligente a través de soluciones inteligentes de automatización.",
    "projects.realestate.extended":
      "Nuestra plataforma de Automatización IA Inmobiliaria transforma cómo los profesionales inmobiliarios gestionan sus operaciones comerciales. El sistema automatiza la creación de listados de propiedades, seguimientos de clientes y análisis de mercado mientras proporciona insights inteligentes para una mejor toma de decisiones. Las características clave incluyen valuación automática de propiedades usando algoritmos de aprendizaje automático, puntuación y nutrición inteligente de leads, generación automática de documentos, integración de tours virtuales y análisis predictivo de mercado. La plataforma agiliza la comunicación con clientes a través de secuencias automatizadas de email, notificaciones SMS y recomendaciones personalizadas de propiedades. Los agentes inmobiliarios pueden enfocarse en construir relaciones mientras el sistema maneja tareas rutinarias, resultando en mayor productividad y tasas de conversión más altas a través de servicios de automatización IA.",
    "projects.explore_all": "Explorar Todos los Proyectos de Automatización IA",
    "common.read_more": "Leer Más",

    // Testimonials
    "testimonials.title": "Historias de Éxito de Automatización IA",
    "testimonials.subtitle":
      "Ve lo que nuestros socios de restaurantes e inmobiliaria tienen que decir sobre su experiencia con nuestros servicios de automatización IA y soluciones empresariales inteligentes.",
    "testimonials.rating": "Calificación 5.0",
    "testimonials.sarah.text":
      "Antes de trabajar con los servicios de automatización IA de Jose Estevez, luchábamos para que nuestro menú digital de restaurante fuera visto en línea. Su dashboard de automatización IA hizo una gran diferencia—nuestro restaurante ahora aparece primero en búsquedas locales, y hemos notado más clientes nuevos llegando cada semana. Se siente como si finalmente tuviéramos control sobre nuestra presencia en línea a través de soluciones inteligentes de automatización.",
    "testimonials.sarah.author": "María Rodríguez",
    "testimonials.sarah.role": "Propietaria de Restaurante",
    "testimonials.michael.text":
      "La herramienta de estilización de menús con automatización IA transformó completamente cómo presentamos nuestra comida a los clientes. Nuestros nuevos menús digitales de restaurante se ven tan profesionales, y hemos visto un aumento del 25% en el valor promedio de pedidos desde implementar las recomendaciones de diseño de automatización IA. Los clientes siempre comentan lo hermosos que se ven nuestros menús digitales.",
    "testimonials.michael.author": "David Thompson",
    "testimonials.michael.role": "Propietario de Restaurante",

    // Blog
    "blog.title": "Últimas Perspectivas e Artículos de Automatización IA",
    "blog.subtitle":
      "Mantente actualizado con las últimas tendencias, perspectivas y desarrollos en servicios de automatización IA, menús digitales de restaurantes y automatización inmobiliaria",
    "blog.post1.title":
      "El Futuro de los Servicios de Automatización IA en Menús Digitales de Restaurantes",
    "blog.post1.excerpt":
      "Descubre cómo los servicios de automatización IA están remodelando los procesos de menús digitales de restaurantes e impulsando ganancias de eficiencia sin precedentes en toda la industria restaurantera.",
    "blog.post2.title":
      "Automatización IA Inmobiliaria: Transformando la Gestión de Propiedades",
    "blog.post2.excerpt":
      "Aprende cómo los servicios de automatización IA impulsados por aprendizaje automático pueden ayudar a los negocios inmobiliarios a tomar decisiones más inteligentes basadas en datos para la gestión de propiedades.",
    "blog.post3.title":
      "Construyendo Soluciones Inteligentes para Restaurantes con Automatización IA",
    "blog.post3.excerpt":
      "Explora los últimos avances en servicios de automatización IA y cómo están mejorando las interacciones de menús digitales de restaurantes y la experiencia del cliente.",
    "blog.read_time": "min de lectura",
    "blog.view_all": "Ver Todos los Artículos de Automatización IA",

    // Footer
    "footer.description":
      "Empoderando restaurantes y negocios inmobiliarios con servicios de automatización IA de vanguardia que impulsan el crecimiento, la eficiencia y la innovación en Estados Unidos y América Latina.",
    "footer.services": "Servicios de Automatización IA",
    "footer.company": "Empresa",
    "footer.support": "Soporte",
    "footer.copyright":
      "© 2024 Jose Estevez AI Technologies. Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.cookies": "Política de Cookies",
    "footer.service.automation": "Servicios de Automatización IA",
    "footer.service.analytics": "Menús Digitales de Restaurantes",
    "footer.service.ml": "Automatización IA Inmobiliaria",
    "footer.service.data": "Soluciones Empresariales Inteligentes",
    "footer.service.consulting": "Consultoría de Automatización IA",
    "footer.company.about": "Acerca de Nosotros",
    "footer.company.team": "Nuestro Equipo",
    "footer.company.careers": "Carreras",
    "footer.company.news": "Noticias",
    "footer.company.contact": "Contacto",
    "footer.support.docs": "Documentación",
    "footer.support.help": "Centro de Ayuda",
    "footer.support.status": "Estado",

    // Pricing
    "pricing.title":
      "Servicios asequibles de automatización IA para hacer crecer tu restaurante y negocio inmobiliario.",
    "pricing.subtitle":
      "Elige el plan perfecto para transformar tus menús digitales de restaurantes y automatización inmobiliaria con servicios de automatización IA de vanguardia y diseño web profesional.",
    "pricing.most_popular": "Más Popular",
    "pricing.get_started": "Comenzar",
    "pricing.contact_us": "Contáctanos",
    "pricing.ai.title": "Servicios de Automatización IA",
    "pricing.web.title": "Menús Digitales de Restaurantes y Diseño Web",

    // Contact Modal
    "contact.title": "Hablemos Sobre Servicios de Automatización IA",
    "contact.firstName": "Nombre",
    "contact.lastName": "Apellido",
    "contact.email": "Correo Electrónico",
    "contact.message": "Mensaje",
    "contact.date": "Fecha",
    "contact.time": "Hora",
    "contact.optional": "opcional",
    "contact.submit": "Programar Consulta de Automatización IA",
    "contact.sending": "Enviando...",
    "contact.success":
      "¡Gracias! Nos pondremos en contacto pronto sobre tus servicios de automatización IA.",
    "contact.error": "Algo salió mal. Por favor intenta de nuevo.",
    "contact.firstNamePlaceholder": "Juan",
    "contact.lastNamePlaceholder": "Pérez",
    "contact.emailPlaceholder": "juan@restaurante.com",
    "contact.messagePlaceholder":
      "Cuéntanos sobre tus necesidades de menú digital de restaurante o automatización inmobiliaria...",
    "contact.selectTime": "Seleccionar hora",

    // About Me Section
    "about.title": "Sobre Mí - Experto en Automatización IA",
    "about.intro":
      "Soy un experto en automatización IA y desarrollador de software con más de 10 años de experiencia ayudando a restaurantes y negocios inmobiliarios a crecer a través de soluciones inteligentes de automatización y estrategias de marketing digital.",
    "about.career":
      "A lo largo de mi carrera, me he especializado en crear servicios de automatización IA que combinan innovación técnica con resultados empresariales del mundo real. Mi experiencia abarca menús digitales de restaurantes, automatización inmobiliaria y soluciones empresariales inteligentes para mercados de Estados Unidos y América Latina.",
    "about.expertise.ai":
      "Servicios de Automatización IA con Python para crear soluciones inteligentes y automatizadas para menús digitales de restaurantes y flujos de trabajo de automatización inmobiliaria.",
    "about.expertise.restaurant":
      "Soluciones de Automatización para Restaurantes usando n8n para optimizar operaciones, gestionar menús digitales y ahorrar tiempo a las empresas en Estados Unidos y América Latina.",
    "about.expertise.marketing":
      "Estrategias de Marketing Digital y Google Ads IA, incluyendo campañas inteligentes para aumentar la visibilidad e impulsar la adquisición de clientes para restaurantes y negocios inmobiliarios.",
    "about.expertise.realestate":
      "Automatización IA Inmobiliaria con herramientas y frameworks modernos para construir sistemas inteligentes que optimicen la gestión de propiedades y comunicaciones con clientes.",
    "about.focus":
      "Mi enfoque siempre está en crear servicios de automatización IA que entreguen valor empresarial real—ayudando a restaurantes y empresas inmobiliarias a ser más eficientes, rentables y preparadas para el futuro a través de soluciones inteligentes de automatización.",
    "about.collaboration":
      "Si buscas un experto en automatización IA que pueda fusionar tecnología, IA y marketing en una estrategia que impulse el crecimiento para tu restaurante o negocio inmobiliario en Estados Unidos o América Latina, me encantaría colaborar contigo.",
  },
};

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

// Language detection utility functions
const detectLanguageFromBrowser = (): Language => {
  if (typeof navigator === "undefined") return "en";

  const browserLang = navigator.language || navigator.languages?.[0] || "en";
  const langCode = browserLang.toLowerCase();

  // Check for Spanish variants
  const spanishVariants = [
    "es",
    "es-do",
    "es-mx",
    "es-ar",
    "es-cl",
    "es-co",
    "es-pe",
    "es-ve",
    "es-ec",
    "es-bo",
    "es-py",
    "es-uy",
    "es-cr",
    "es-pa",
    "es-ni",
    "es-hn",
    "es-sv",
    "es-gt",
    "es-cu",
    "es-pr",
    "es-gt",
    "es-hn",
    "es-ni",
    "es-cr",
    "es-pa",
    "es-co",
    "es-ve",
    "es-ec",
    "es-pe",
    "es-bo",
    "es-cl",
    "es-ar",
    "es-py",
    "es-uy",
    "es-pe",
    "es-ve",
    "es-ec",
    "es-bo",
    "es-cl",
    "es-ar",
  ];

  if (spanishVariants.some((variant) => langCode.startsWith(variant))) {
    return "es";
  }

  return "en"; // Default to English
};

const detectLocationFromIP = async (): Promise<string | null> => {
  try {
    // Using ipapi.co free service (no API key required)
    const response = await fetch("https://ipapi.co/json/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) throw new Error("Geolocation API failed");

    const data = await response.json();
    return data.country_code || null;
  } catch (error) {
    console.warn("IP geolocation failed:", error);
    return null;
  }
};

const determineLanguageFromLocation = (
  countryCode: string | null
): Language => {
  if (!countryCode) return "en";

  const code = countryCode.toLowerCase();

  // Latin American countries → Spanish
  const spanishSpeakingCountries = [
    "do", // Dominican Republic
    "mx", // Mexico
    "es", // Spain
    "ar", // Argentina
    "cl", // Chile
    "co", // Colombia
    "pe", // Peru
    "ve", // Venezuela
    "ec", // Ecuador
    "bo", // Bolivia
    "py", // Paraguay
    "uy", // Uruguay
    "cr", // Costa Rica
    "pa", // Panama
    "ni", // Nicaragua
    "hn", // Honduras
    "sv", // El Salvador
    "gt", // Guatemala
    "cu", // Cuba
    "pr", // Puerto Rico
  ];

  if (spanishSpeakingCountries.includes(code)) {
    return "es";
  }

  // United States, Canada, UK, Australia → English
  const englishSpeakingCountries = ["us", "ca", "gb", "au", "nz"];
  if (englishSpeakingCountries.includes(code)) {
    return "en";
  }

  // Default to English for other countries
  return "en";
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage first
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-language");
      if (saved === "en" || saved === "es") {
        return saved;
      }
    }
    return "en"; // Default fallback
  });

  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  // Auto-detect language on component mount
  useEffect(() => {
    const detectAndSetLanguage = async () => {
      // Check if user has a saved preference first
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("preferred-language");
        if (saved === "en" || saved === "es") {
          setLanguage(saved);
          setIsLanguageDetected(true);
          return;
        }
      }

      if (isLanguageDetected) return; // Avoid re-detection

      // Step 1: Check browser language first
      const browserLanguage = detectLanguageFromBrowser();

      // Step 2: If browser suggests Spanish, use it immediately
      if (browserLanguage === "es") {
        setLanguage("es");
        setIsLanguageDetected(true);
        return;
      }

      // Step 3: For English or unknown, confirm with IP geolocation
      const countryCode = await detectLocationFromIP();
      const locationLanguage = determineLanguageFromLocation(countryCode);

      // Set the determined language
      setLanguage(locationLanguage);
      setIsLanguageDetected(true);
    };

    detectAndSetLanguage();
  }, [isLanguageDetected]);

  const t = (key: string): string => {
    const languageTranslations = translations[language] as Record<
      string,
      string
    >;
    return languageTranslations[key] || key;
  };

  // Custom setLanguage that allows manual override
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", newLanguage);
    }
  };

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
