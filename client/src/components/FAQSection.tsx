import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function FAQSection() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What AI automation services do you offer for restaurants?",
      questionEs: "¿Qué servicios de automatización IA ofrecen para restaurantes?",
      answer: "We provide comprehensive AI automation services for restaurants including digital menu creation and optimization, order processing automation, inventory management systems, customer engagement platforms, and multi-location restaurant chain automation. Our solutions help restaurants streamline operations, reduce costs, and improve customer experience.",
      answerEs: "Proporcionamos servicios integrales de automatización IA para restaurantes incluyendo creación y optimización de menús digitales, automatización de procesamiento de pedidos, sistemas de gestión de inventario, plataformas de engagement de clientes y automatización para cadenas de restaurantes multi-ubicación. Nuestras soluciones ayudan a los restaurantes a optimizar operaciones, reducir costos y mejorar la experiencia del cliente."
    },
    {
      question: "How does real estate AI automation work?",
      questionEs: "¿Cómo funciona la automatización IA para inmobiliarias?",
      answer: "Our real estate AI automation solutions include lead generation and qualification systems, automated property management, client communication workflows, market analysis tools, and automated reporting. We use Python, n8n workflows, and custom AI integrations to help real estate professionals close deals faster and manage properties more efficiently.",
      answerEs: "Nuestras soluciones de automatización IA para inmobiliarias incluyen sistemas de generación y calificación de leads, gestión automatizada de propiedades, flujos de trabajo de comunicación con clientes, herramientas de análisis de mercado y reportes automatizados. Usamos Python, flujos de trabajo n8n e integraciones IA personalizadas para ayudar a profesionales inmobiliarios a cerrar ventas más rápido y gestionar propiedades más eficientemente."
    },
    {
      question: "What countries do you serve with AI automation services?",
      questionEs: "¿En qué países ofrecen servicios de automatización IA?",
      answer: "We serve businesses across the United States and Latin America, including Mexico, Colombia, Argentina, Chile, Peru, Ecuador, Venezuela, and Brazil. Our bilingual team provides AI automation services in both English and Spanish, ensuring effective communication and culturally appropriate solutions.",
      answerEs: "Servimos empresas en Estados Unidos y Latinoamérica, incluyendo México, Colombia, Argentina, Chile, Perú, Ecuador, Venezuela y Brasil. Nuestro equipo bilingüe proporciona servicios de automatización IA tanto en inglés como en español, asegurando comunicación efectiva y soluciones culturalmente apropiadas."
    },
    {
      question: "How much do AI automation services cost?",
      questionEs: "¿Cuánto cuestan los servicios de automatización IA?",
      answer: "Our AI automation services are priced based on your specific needs and business size. We offer flexible pricing plans starting from basic automation packages for small businesses to enterprise solutions for large organizations. Contact us for a free consultation and custom quote based on your automation requirements.",
      answerEs: "Nuestros servicios de automatización IA tienen precios basados en sus necesidades específicas y tamaño de empresa. Ofrecemos planes de precios flexibles desde paquetes básicos de automatización para pequeñas empresas hasta soluciones empresariales para grandes organizaciones. Contáctanos para una consulta gratuita y cotización personalizada basada en sus requerimientos de automatización."
    },
    {
      question: "What technologies do you use for AI automation?",
      questionEs: "¿Qué tecnologías usan para automatización IA?",
      answer: "We use cutting-edge technologies including Python for custom automation scripts, n8n for workflow automation, AI/ML frameworks, cloud platforms, and various APIs for integrations. Our technology stack is designed to be scalable, reliable, and easily maintainable for long-term business growth.",
      answerEs: "Usamos tecnologías de vanguardia incluyendo Python para scripts de automatización personalizados, n8n para automatización de flujos de trabajo, frameworks de IA/ML, plataformas en la nube y varias APIs para integraciones. Nuestro stack tecnológico está diseñado para ser escalable, confiable y fácilmente mantenible para crecimiento empresarial a largo plazo."
    },
    {
      question: "How long does it take to implement AI automation solutions?",
      questionEs: "¿Cuánto tiempo toma implementar soluciones de automatización IA?",
      answer: "Implementation time varies based on project complexity. Simple automation workflows can be deployed in 1-2 weeks, while comprehensive restaurant or real estate automation systems typically take 4-8 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.",
      answerEs: "El tiempo de implementación varía según la complejidad del proyecto. Flujos de trabajo de automatización simples pueden desplegarse en 1-2 semanas, mientras que sistemas integrales de automatización para restaurantes o inmobiliarias típicamente toman 4-8 semanas. Proporcionamos cronogramas detallados del proyecto durante nuestra consulta inicial y te mantenemos actualizado durante todo el proceso de desarrollo."
    }
  ];

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <section id="faq" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up stagger-1">
              Frequently Asked Questions | Preguntas Frecuentes
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto fade-in-up stagger-2">
              Get answers about our AI automation services for restaurants, real estate, and businesses. 
              Encuentra respuestas sobre nuestros servicios de automatización IA para restaurantes, inmobiliarias y empresas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`ai-card rounded-xl mb-4 overflow-hidden fade-in-up stagger-${index + 3}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-slate-400 italic">
                      {faq.questionEs}
                    </p>
                  </div>
                  <div className="ml-4">
                    {openItems.includes(index) ? (
                      <Minus className="text-red-500" size={20} />
                    ) : (
                      <Plus className="text-red-500" size={20} />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 border-t border-slate-700/50">
                    <div className="pt-4">
                      <p className="text-slate-300 leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      <div className="border-l-2 border-red-500 pl-4">
                        <p className="text-slate-400 text-sm italic">
                          <strong>En Español:</strong> {faq.answerEs}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional SEO Content */}
          <div className="max-w-4xl mx-auto mt-12 fade-in-up stagger-8">
            <div className="ai-card rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions About AI Automation Services?
              </h3>
              <p className="text-slate-300 mb-6">
                Our team of AI automation experts is ready to help you transform your restaurant, 
                real estate business, or company with intelligent automation solutions. 
                Contact us for a free consultation and discover how automation with AI can drive your business growth.
              </p>
              <p className="text-slate-400 text-sm mb-6">
                <em>¿Aún tienes preguntas sobre servicios de automatización IA? 
                Nuestro equipo de expertos está listo para ayudarte a transformar tu restaurante, 
                inmobiliaria o empresa con soluciones inteligentes de automatización.</em>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg inline-block"
                >
                  Get Free AI Automation Consultation
                </a>
                <a
                  href="tel:+1-555-0123"
                  className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all inline-block"
                >
                  Call Now: +1 (555) 012-3456
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
