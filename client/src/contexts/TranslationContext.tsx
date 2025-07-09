import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.pricing': 'Pricing',
    'nav.blog': 'Blog',
    'nav.pages': 'Pages',
    'nav.lets_talk': "Let's Talk",
    
    // Hero Section
    'hero.title': 'We Are Building AI Technology That Helps Business Grow',
    'hero.subtitle': 'Leverage the power of artificial intelligence to transform your business operations, boost efficiency, and drive unprecedented growth with our cutting-edge AI solutions.',
    'hero.get_started': 'Get Started',
    'hero.learn_more': 'Learn More',
    'hero.trusted_by': 'Trusted by 200+ companies worldwide',
    
    // Features
    'features.title': 'Intelligent Features',
    'features.subtitle': 'Discover our comprehensive suite of AI-powered features designed to revolutionize your business operations',
    'features.automation.title': 'Automation',
    'features.automation.desc': 'Streamline your workflows with intelligent automation that handles repetitive tasks and optimizes productivity.',
    'features.analytics.title': 'Predictive Analytics',
    'features.analytics.desc': 'Harness the power of data with advanced analytics that predict trends and inform strategic decisions.',
    'features.language.title': 'Language Model',
    'features.language.desc': 'Advanced natural language processing capabilities for better human-AI interaction and communication.',
    'features.smart.title': 'Smart Solutions',
    'features.smart.desc': 'Intelligent problem-solving algorithms that adapt to your unique business challenges and requirements.',
    
    // Services
    'services.title': 'Top-Notch Services And Solution To Ensure Your Success',
    'services.subtitle': 'We provide comprehensive AI solutions tailored to your business needs, ensuring optimal performance and measurable results',
    'services.marketing.title': 'Personalized Marketing',
    'services.marketing.desc': 'Create targeted marketing campaigns using AI-driven customer insights and behavioral analysis to maximize conversion rates and ROI.',
    'services.chatbots.title': 'AI-Powered Chatbots',
    'services.chatbots.desc': 'Deploy intelligent conversational AI that provides 24/7 customer support, handles inquiries, and improves user experience.',
    'services.automation.title': 'Process Automation',
    'services.automation.desc': 'Streamline business operations with intelligent automation solutions that reduce manual work and increase efficiency.',
    'services.analytics.title': 'Predictive Analytics',
    'services.analytics.desc': 'Leverage advanced machine learning algorithms to forecast trends, identify opportunities, and make data-driven decisions.',
    'common.learn_more': 'Learn More',
    
    // Projects
    'projects.title': 'Our Accomplished Projects',
    'projects.subtitle': 'Explore our portfolio of successful AI implementations that have transformed businesses across various industries',
    'projects.personality.title': 'Personality Prediction via CV',
    'projects.personality.desc': 'Advanced AI system that analyzes resumes to predict personality traits, helping HR teams make better hiring decisions.',
    'projects.voice.title': 'Voice-based Virtual Assistant',
    'projects.voice.desc': 'Intelligent voice assistant with natural language processing capabilities for seamless human-computer interaction.',
    'projects.emotion.title': 'Facial Emotion Recognition',
    'projects.emotion.desc': 'Real-time emotion detection system using computer vision to analyze facial expressions and emotional states.',
    'projects.explore_all': 'Explore All Projects',
    'common.read_more': 'Read More',
    
    // Testimonials
    'testimonials.title': 'Feedback From Clients',
    'testimonials.subtitle': 'See what our satisfied clients have to say about their experience with our AI solutions',
    'testimonials.rating': '5.0 Rating',
    'testimonials.sarah.text': "MidAI's predictive analytics solution transformed how we approach customer insights. The accuracy of their AI models exceeded our expectations, resulting in a 40% increase in conversion rates.",
    'testimonials.sarah.author': 'Sarah Johnson',
    'testimonials.sarah.role': 'CEO, TechCorp Solutions',
    'testimonials.michael.text': 'The automation solutions provided by MidAI revolutionized our workflow. We\'ve reduced manual processing time by 70% while maintaining the highest quality standards.',
    'testimonials.michael.author': 'Michael Chen',
    'testimonials.michael.role': 'CTO, Innovation Labs',
    
    // Blog
    'blog.title': 'Latest Blog & Articles',
    'blog.subtitle': 'Stay updated with the latest trends, insights, and developments in artificial intelligence and technology',
    'blog.post1.title': 'The Future of AI in Business Automation',
    'blog.post1.excerpt': 'Discover how artificial intelligence is reshaping business processes and driving unprecedented efficiency gains across industries.',
    'blog.post2.title': 'Predictive Analytics: Transforming Decision Making',
    'blog.post2.excerpt': 'Learn how predictive analytics powered by machine learning can help businesses make smarter, data-driven decisions.',
    'blog.post3.title': 'Building Intelligent Chatbots with NLP',
    'blog.post3.excerpt': 'Explore the latest advancements in natural language processing and how they\'re improving chatbot interactions.',
    'blog.read_time': 'min read',
    'blog.view_all': 'View All Articles',
    
    // Footer
    'footer.description': 'Empowering businesses with cutting-edge AI technology solutions that drive growth, efficiency, and innovation.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.copyright': '© 2024 MidAI Technologies. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.service.automation': 'AI Automation',
    'footer.service.analytics': 'Predictive Analytics',
    'footer.service.ml': 'Machine Learning',
    'footer.service.data': 'Data Processing',
    'footer.service.consulting': 'Consulting',
    'footer.company.about': 'About Us',
    'footer.company.team': 'Our Team',
    'footer.company.careers': 'Careers',
    'footer.company.news': 'News',
    'footer.company.contact': 'Contact',
    'footer.support.docs': 'Documentation',
    'footer.support.help': 'Help Center',
    'footer.support.status': 'Status',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.pricing': 'Precios',
    'nav.blog': 'Blog',
    'nav.pages': 'Páginas',
    'nav.lets_talk': 'Hablemos',
    
    // Hero Section
    'hero.title': 'Estamos Construyendo Tecnología IA Que Ayuda a Crecer los Negocios',
    'hero.subtitle': 'Aprovecha el poder de la inteligencia artificial para transformar las operaciones de tu negocio, aumentar la eficiencia y generar un crecimiento sin precedentes con nuestras soluciones de IA de vanguardia.',
    'hero.get_started': 'Comenzar',
    'hero.learn_more': 'Saber Más',
    'hero.trusted_by': 'Confiado por más de 200 empresas en todo el mundo',
    
    // Features
    'features.title': 'Características Inteligentes',
    'features.subtitle': 'Descubre nuestra suite integral de características impulsadas por IA diseñadas para revolucionar las operaciones de tu negocio',
    'features.automation.title': 'Automatización',
    'features.automation.desc': 'Optimiza tus flujos de trabajo con automatización inteligente que maneja tareas repetitivas y optimiza la productividad.',
    'features.analytics.title': 'Análisis Predictivo',
    'features.analytics.desc': 'Aprovecha el poder de los datos con análisis avanzados que predicen tendencias e informan decisiones estratégicas.',
    'features.language.title': 'Modelo de Lenguaje',
    'features.language.desc': 'Capacidades avanzadas de procesamiento de lenguaje natural para una mejor interacción y comunicación humano-IA.',
    'features.smart.title': 'Soluciones Inteligentes',
    'features.smart.desc': 'Algoritmos inteligentes de resolución de problemas que se adaptan a los desafíos y requisitos únicos de tu negocio.',
    
    // Services
    'services.title': 'Servicios y Soluciones de Primera Clase Para Garantizar Tu Éxito',
    'services.subtitle': 'Proporcionamos soluciones de IA integrales adaptadas a las necesidades de tu negocio, asegurando un rendimiento óptimo y resultados medibles',
    'services.marketing.title': 'Marketing Personalizado',
    'services.marketing.desc': 'Crea campañas de marketing dirigidas usando perspectivas de clientes impulsadas por IA y análisis de comportamiento para maximizar las tasas de conversión y ROI.',
    'services.chatbots.title': 'Chatbots Impulsados por IA',
    'services.chatbots.desc': 'Despliega IA conversacional inteligente que proporciona soporte al cliente 24/7, maneja consultas y mejora la experiencia del usuario.',
    'services.automation.title': 'Automatización de Procesos',
    'services.automation.desc': 'Optimiza las operaciones comerciales con soluciones de automatización inteligente que reducen el trabajo manual y aumentan la eficiencia.',
    'services.analytics.title': 'Análisis Predictivo',
    'services.analytics.desc': 'Aprovecha algoritmos avanzados de aprendizaje automático para pronosticar tendencias, identificar oportunidades y tomar decisiones basadas en datos.',
    'common.learn_more': 'Saber Más',
    
    // Projects
    'projects.title': 'Nuestros Proyectos Realizados',
    'projects.subtitle': 'Explora nuestro portafolio de implementaciones exitosas de IA que han transformado negocios en varias industrias',
    'projects.personality.title': 'Predicción de Personalidad via CV',
    'projects.personality.desc': 'Sistema de IA avanzado que analiza currículums para predecir rasgos de personalidad, ayudando a los equipos de RRHH a tomar mejores decisiones de contratación.',
    'projects.voice.title': 'Asistente Virtual Basado en Voz',
    'projects.voice.desc': 'Asistente de voz inteligente con capacidades de procesamiento de lenguaje natural para una interacción humano-computadora sin problemas.',
    'projects.emotion.title': 'Reconocimiento de Emociones Faciales',
    'projects.emotion.desc': 'Sistema de detección de emociones en tiempo real usando visión por computadora para analizar expresiones faciales y estados emocionales.',
    'projects.explore_all': 'Explorar Todos los Proyectos',
    'common.read_more': 'Leer Más',
    
    // Testimonials
    'testimonials.title': 'Comentarios de Clientes',
    'testimonials.subtitle': 'Ve lo que nuestros clientes satisfechos tienen que decir sobre su experiencia con nuestras soluciones de IA',
    'testimonials.rating': 'Calificación 5.0',
    'testimonials.sarah.text': 'La solución de análisis predictivo de MidAI transformó cómo abordamos las perspectivas de los clientes. La precisión de sus modelos de IA superó nuestras expectativas, resultando en un aumento del 40% en las tasas de conversión.',
    'testimonials.sarah.author': 'Sarah Johnson',
    'testimonials.sarah.role': 'CEO, TechCorp Solutions',
    'testimonials.michael.text': 'Las soluciones de automatización proporcionadas por MidAI revolucionaron nuestro flujo de trabajo. Hemos reducido el tiempo de procesamiento manual en un 70% mientras mantenemos los más altos estándares de calidad.',
    'testimonials.michael.author': 'Michael Chen',
    'testimonials.michael.role': 'CTO, Innovation Labs',
    
    // Blog
    'blog.title': 'Últimas Noticias y Artículos',
    'blog.subtitle': 'Mantente actualizado con las últimas tendencias, perspectivas y desarrollos en inteligencia artificial y tecnología',
    'blog.post1.title': 'El Futuro de la IA en la Automatización Empresarial',
    'blog.post1.excerpt': 'Descubre cómo la inteligencia artificial está remodelando los procesos empresariales e impulsando ganancias de eficiencia sin precedentes en todas las industrias.',
    'blog.post2.title': 'Análisis Predictivo: Transformando la Toma de Decisiones',
    'blog.post2.excerpt': 'Aprende cómo el análisis predictivo impulsado por aprendizaje automático puede ayudar a las empresas a tomar decisiones más inteligentes basadas en datos.',
    'blog.post3.title': 'Construyendo Chatbots Inteligentes con PLN',
    'blog.post3.excerpt': 'Explora los últimos avances en procesamiento de lenguaje natural y cómo están mejorando las interacciones de chatbots.',
    'blog.read_time': 'min de lectura',
    'blog.view_all': 'Ver Todos los Artículos',
    
    // Footer
    'footer.description': 'Empoderando negocios con soluciones tecnológicas de IA de vanguardia que impulsan el crecimiento, la eficiencia y la innovación.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.support': 'Soporte',
    'footer.copyright': '© 2024 MidAI Technologies. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.cookies': 'Política de Cookies',
    'footer.service.automation': 'Automatización IA',
    'footer.service.analytics': 'Análisis Predictivo',
    'footer.service.ml': 'Aprendizaje Automático',
    'footer.service.data': 'Procesamiento de Datos',
    'footer.service.consulting': 'Consultoría',
    'footer.company.about': 'Acerca de Nosotros',
    'footer.company.team': 'Nuestro Equipo',
    'footer.company.careers': 'Carreras',
    'footer.company.news': 'Noticias',
    'footer.company.contact': 'Contacto',
    'footer.support.docs': 'Documentación',
    'footer.support.help': 'Centro de Ayuda',
    'footer.support.status': 'Estado',
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}