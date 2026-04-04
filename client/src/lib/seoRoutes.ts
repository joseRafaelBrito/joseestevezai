export const SITE_ORIGIN = "https://joseestevezai.com";

type LocaleMeta = { title: string; description: string };

export type SeoLandingId =
  | "about"
  | "services"
  | "projects"
  | "pricing"
  | "faq"
  | "blog"
  | "restaurant-automation"
  | "real-estate-ai-automation"
  | "restaurant-menu-builder"
  | "digital-menu-creator"
  | "business-automation-services"
  | "workflow-automation";

export type SeoLandingConfig = {
  scrollTo: string;
  /** English canonical path (no origin, with leading slash) */
  pathEn: string;
  /** Spanish canonical path when localized; omit if same as English-only page */
  pathEs?: string;
  en: LocaleMeta;
  es?: LocaleMeta;
};

export const seoLandings: Record<SeoLandingId, SeoLandingConfig> = {
  about: {
    scrollTo: "about",
    pathEn: "/about",
    pathEs: "/es/about",
    en: {
      title: "About Jose Estevez | AI Automation Expert & Restaurant Menu Builder",
      description:
        "Meet Jose Estevez: AI automation specialist helping restaurants and real estate businesses with digital menus, workflows, and intelligent business solutions in the USA and Latin America.",
    },
    es: {
      title: "Sobre Jose Estevez | Experto en Automatización IA y Menús Digitales",
      description:
        "Conoce a Jose Estevez: especialista en automatización IA para restaurantes e inmobiliarias con menús digitales, flujos de trabajo y soluciones inteligentes en EE. UU. y América Latina.",
    },
  },
  services: {
    scrollTo: "services",
    pathEn: "/services",
    en: {
      title: "AI Automation Services for Restaurants & Real Estate | Jose Estevez AI",
      description:
        "Explore AI automation services: restaurant digital menus, n8n workflows, Python integrations, marketing automation, and real estate AI solutions tailored to your business.",
    },
  },
  projects: {
    scrollTo: "projects",
    pathEn: "/projects",
    en: {
      title: "AI Automation Projects & Case Studies | Jose Estevez AI",
      description:
        "See real AI automation projects: restaurant dashboards, digital menu solutions, and real estate automation platforms built for growth in the USA and Latin America.",
    },
  },
  pricing: {
    scrollTo: "pricing",
    pathEn: "/pricing",
    en: {
      title: "Pricing — AI Automation & Restaurant Web Design | Jose Estevez AI",
      description:
        "Transparent pricing for AI automation services and restaurant digital menu / web design packages. Choose a plan that fits your restaurant or real estate business.",
    },
  },
  faq: {
    scrollTo: "faq",
    pathEn: "/faq",
    en: {
      title: "FAQ — Restaurant Menu Builder & Business Automation | Jose Estevez AI",
      description:
        "Answers to common questions about restaurant menu builders, digital menus, business automation, workflow automation, and real estate AI services.",
    },
  },
  blog: {
    scrollTo: "blog",
    pathEn: "/blog",
    en: {
      title: "Blog — AI Automation, Restaurants & Real Estate | Jose Estevez AI",
      description:
        "Articles on AI automation for restaurants, digital menus, real estate workflows, and business automation trends in the USA and Latin America.",
    },
  },
  "restaurant-automation": {
    scrollTo: "services",
    pathEn: "/restaurant-automation",
    en: {
      title: "Restaurant Automation & Digital Menu Solutions | Jose Estevez AI",
      description:
        "Automate restaurant operations with AI: digital menus, reservations, SEO-friendly content, and workflows that save time and grow revenue.",
    },
  },
  "real-estate-ai-automation": {
    scrollTo: "services",
    pathEn: "/real-estate-ai-automation",
    en: {
      title: "Real Estate AI Automation & CRM Workflows | Jose Estevez AI",
      description:
        "Real estate AI automation for listings, lead nurturing, documents, and market insights — built for agents and teams in competitive markets.",
    },
  },
  "restaurant-menu-builder": {
    scrollTo: "services",
    pathEn: "/restaurant-menu-builder",
    en: {
      title: "Restaurant Menu Builder & Digital Menu Creator | Jose Estevez AI",
      description:
        "Professional restaurant menu builder and digital menu creator: beautiful menus, QR ordering, multilingual support, and SEO-optimized content.",
    },
  },
  "digital-menu-creator": {
    scrollTo: "services",
    pathEn: "/digital-menu-creator",
    en: {
      title: "Digital Menu Creator for Restaurants | Jose Estevez AI",
      description:
        "Create stunning digital menus for restaurants with AI-assisted design, branding consistency, and integrations for modern dining experiences.",
    },
  },
  "business-automation-services": {
    scrollTo: "services",
    pathEn: "/business-automation-services",
    en: {
      title: "Business Automation Services | Workflows, AI & Integrations",
      description:
        "End-to-end business automation services: connect your tools, eliminate repetitive work, and scale operations with AI and low-code workflows.",
    },
  },
  "workflow-automation": {
    scrollTo: "services",
    pathEn: "/workflow-automation",
    en: {
      title: "Workflow Automation with AI | n8n, Python & Custom Integrations",
      description:
        "Design reliable workflow automation with n8n, Python, and APIs. Streamline approvals, data sync, notifications, and reporting for your team.",
    },
  },
};

export type BlogSlug =
  | "ai-automation-small-businesses-latin-america"
  | "automatizacion-ia-restaurantes-beneficios";

export type BlogPostSeo = {
  scrollTo: "blog";
  canonicalPath: string;
  language: "en" | "es";
} & LocaleMeta;

export const blogPosts: Record<BlogSlug, BlogPostSeo> = {
  "ai-automation-small-businesses-latin-america": {
    scrollTo: "blog",
    canonicalPath: "/blog/ai-automation-small-businesses-latin-america/",
    language: "en",
    title:
      "AI Automation for Small Businesses in Latin America | Jose Estevez AI",
    description:
      "How small businesses in Latin America use AI automation to compete: practical workflows, tools, and outcomes for restaurants, services, and real estate.",
  },
  "automatizacion-ia-restaurantes-beneficios": {
    scrollTo: "blog",
    canonicalPath: "/blog/automatizacion-ia-restaurantes-beneficios/",
    language: "es",
    title:
      "Automatización IA en Restaurantes: Beneficios y Casos de Uso | Jose Estevez AI",
    description:
      "Beneficios de la automatización IA para restaurantes: menús digitales, operaciones, marketing y experiencia del cliente — guía práctica para dueños y equipos.",
  },
};

/** Default document meta (matches index.html) for cleanup on route unmount */
export const defaultSeo = {
  title:
    "Restaurant Menu Builder & Business Automation | Crear Menú de Restaurante & Automatización de Negocios | Jose Estevez AI",
  description:
    "Professional restaurant menu builder & digital menu creator. Business automation services for restaurants & real estate. Workflow automation with AI. Creador de menús digitales para restaurantes, automatización de negocios e inmobiliarias. Serving USA, Latin America & worldwide.",
  canonical: `${SITE_ORIGIN}/`,
  ogType: "website",
} as const;

export type LanguageCode = "en" | "es";

/** URL-driven language for SSR-free SPA (initial load + static routes) */
export function languageHintFromPath(pathname: string): LanguageCode | null {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (p === "/es" || p.startsWith("/es/")) return "es";

  for (const cfg of Object.values(seoLandings)) {
    const enP = cfg.pathEn.replace(/\/+$/, "");
    const esP = cfg.pathEs?.replace(/\/+$/, "");
    if (esP && p === esP) return "es";
    if (p === enP) return "en";
  }

  for (const post of Object.values(blogPosts)) {
    const cp = post.canonicalPath.replace(/\/+$/, "");
    if (p === cp) return post.language;
  }

  return null;
}
