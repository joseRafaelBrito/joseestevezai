import { Calendar, Clock, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

export default function BlogSection() {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: "How AI Automation Helps Small Businesses in Latin America",
      titleEs: "Cómo la Automatización con IA Ayuda a Pequeñas Empresas en Latinoamérica",
      excerpt: "Discover how AI automation services are transforming small businesses across Latin America, from restaurant digital menus to real estate automation solutions.",
      excerptEs: "Descubre cómo los servicios de automatización con IA están transformando pequeñas empresas en Latinoamérica, desde menús digitales para restaurantes hasta soluciones de automatización inmobiliaria.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      alt: "AI automation for small businesses in Latin America - automatización con IA para pequeñas empresas",
      date: "2024-08-30",
      readTime: "8 min read",
      category: "AI Automation",
      categoryEs: "Automatización IA",
      slug: "ai-automation-small-businesses-latin-america"
    },
    {
      id: 2,
      title: "Benefits of AI Automation for Restaurants: Complete Guide",
      titleEs: "Beneficios de la Automatización con IA para Restaurantes: Guía Completa",
      excerpt: "Learn how restaurant automation with AI can streamline operations, improve customer experience, and increase profits through digital menus and intelligent workflows.",
      excerptEs: "Aprende cómo la automatización de restaurantes con IA puede optimizar operaciones, mejorar la experiencia del cliente y aumentar ganancias con menús digitales y flujos inteligentes.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      alt: "Restaurant AI automation benefits - beneficios automatización restaurantes con IA",
      date: "2024-08-28",
      readTime: "12 min read",
      category: "Restaurant Tech",
      categoryEs: "Tecnología Restaurantes",
      slug: "automatizacion-ia-restaurantes-beneficios"
    },
    {
      id: 3,
      title: "Real Estate AI Automation: Transform Your Property Business",
      titleEs: "Automatización IA Inmobiliaria: Transforma tu Negocio de Propiedades",
      excerpt: "Explore how real estate professionals are using AI automation to generate leads, manage properties, and close deals faster with intelligent automation solutions.",
      excerptEs: "Explora cómo los profesionales inmobiliarios usan automatización IA para generar leads, gestionar propiedades y cerrar ventas más rápido con soluciones inteligentes.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      alt: "Real estate AI automation solutions - soluciones automatización IA inmobiliaria",
      date: "2024-08-25",
      readTime: "10 min read",
      category: "Real Estate",
      categoryEs: "Inmobiliaria",
      slug: "real-estate-ai-automation-transform-business"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        {/* SEO-Optimized Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up stagger-1">
            AI Automation Blog | Automatización con IA
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto fade-in-up stagger-2">
            Expert insights on AI automation services for restaurants, real estate, and businesses. 
            Learn how automation with AI transforms operations across USA and Latin America.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-2">
              Latest Articles on Business Automation
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Discover proven strategies for implementing AI automation in your restaurant, 
              real estate business, or company. From Python workflows to n8n automation, 
              we cover everything you need to succeed with intelligent business solutions.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`ai-card rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group fade-in-up stagger-${
                index + 3
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-pink-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-sm font-medium text-slate-200 mb-1">En Español:</h4>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                    {post.excerptEs}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-pink-500 hover:text-red-500 transition-all duration-300 font-medium flex items-center hover:translate-x-1"
                  >
                    Read More <ArrowRight className="ml-1" size={16} />
                  </a>
                  <Globe className="text-slate-500" size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 fade-in-up stagger-6">
          <div className="ai-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Why Choose Our AI Automation Services?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-pink-500">
                  Restaurant Automation Solutions
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Digital menu automation and optimization</li>
                  <li>• Order processing and inventory management</li>
                  <li>• Customer engagement and loyalty systems</li>
                  <li>• Multi-location restaurant chain automation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-pink-500">
                  Real Estate AI Automation
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Lead generation and qualification systems</li>
                  <li>• Property management automation</li>
                  <li>• Client communication workflows</li>
                  <li>• Market analysis and reporting tools</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-300 mb-4">
                <strong>Serving businesses across USA and Latin America</strong> with custom AI workflows, 
                Python automation, n8n integrations, and intelligent business solutions that drive growth.
              </p>
              <p className="text-slate-400 text-sm">
                <em>Automatización con inteligencia artificial para restaurantes, inmobiliarias y empresas 
                en Estados Unidos y Latinoamérica.</em>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up stagger-7">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
            <Globe className="mr-2" size={18} />
            Explore All AI Automation Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
