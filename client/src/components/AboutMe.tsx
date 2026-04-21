import { useTranslation } from "@/contexts/TranslationContext";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 fade-in-up stagger-1 leading-tight">
            {t("about.title")}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Responsive Layout - Mobile First */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image Column - Mobile First (Top on Mobile) */}
          <div className="relative fade-in-up lg:fade-in-right order-1 lg:order-2">
            <figure className="w-full max-w-sm sm:max-w-md mx-auto lg:max-w-full">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src="/jose-estevez-automatizacion-ia-republica-dominicana.png"
                  srcSet="/jose-estevez-automatizacion-ia-republica-dominicana.png 320w, /jose-estevez-automatizacion-ia-republica-dominicana.png 400w, /jose-estevez-automatizacion-ia-republica-dominicana.png 600w, /jose-estevez-automatizacion-ia-republica-dominicana.png 800w"
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                  alt="Jose Estevez experto en automatización IA en República Dominicana"
                  title="Jose Estevez - Experto en Automatización IA en República Dominicana"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=center&auto=format&q=80";
                  }}
                />
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <figcaption className="mt-3 text-center text-sm text-slate-400">
                <h2 className="text-base font-semibold text-slate-300 inline">Jose Estevez</h2>
                {" — "}Experto en Automatización IA
              </figcaption>
            </figure>
          </div>

          {/* Text Content - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 fade-in-up lg:fade-in-left order-2 lg:order-1">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t("about.intro")}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t("about.career")}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t("about.focus")}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t("about.collaboration")}
            </p>

            {/* Mobile CTA Button */}
            <div className="pt-4 sm:pt-6 lg:hidden">
              <a
                href="#contact"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg text-center min-w-[200px]"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
