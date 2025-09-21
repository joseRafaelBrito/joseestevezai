import { Rocket, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

interface HeroSectionProps {
  onContactModalOpen: () => void;
}

export default function HeroSection({ onContactModalOpen }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden min-h-[70vh] sm:min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Content - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8 fade-in-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight fade-in-up stagger-1">
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed fade-in-up stagger-2">
              {t("hero.subtitle")}
            </p>
            
            {/* Expanded SEO Content - Hidden on small mobile */}
            <div className="prose prose-slate prose-invert max-w-none fade-in-up stagger-2-5 hidden sm:block">
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {t("hero.description")}
              </p>
            </div>

            {/* Key Benefits for SEO - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm fade-in-up stagger-2-7">
              <div className="flex items-center space-x-2 text-slate-300">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span>Custom AI Workflows for Businesses</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span>Restaurant Automation Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span>Real Estate AI Automation</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span>Automatización Inteligente</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
              <Button
                onClick={onContactModalOpen}
                className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg bounce-gentle text-sm sm:text-base min-h-[48px] touch-manipulation"
              >
                <Rocket className="mr-2" size={18} />
                {t("hero.get_started")}
              </Button>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm text-slate-400 fade-in-up stagger-4">
              <Star
                className="text-yellow-400 fill-yellow-400 pulse-slow flex-shrink-0"
                size={16}
              />
              <span className="text-center sm:text-left">{t("hero.trusted_by")}</span>
            </div>
          </div>

          {/* Right Restaurant Image - Mobile Optimized */}
          <div className="relative fade-in-right order-1 lg:order-2">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[484px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=800&fit=crop&crop=top&auto=format&q=80"
                srcSet="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop&crop=top&auto=format&q=80 400w,
                        https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop&crop=top&auto=format&q=80 600w,
                        https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop&crop=top&auto=format&q=80 800w,
                        https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=800&fit=crop&crop=top&auto=format&q=80 1200w"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                alt="Restaurant menu builder and digital menu creator - business automation services for restaurants and real estate - creador de menús digitales para restaurantes y automatización de negocios"
                className="w-full h-full object-cover object-center"
                loading="eager"
                onError={(e) => {
                  // Fallback to a different bright restaurant image if the first one fails
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop&crop=center&auto=format&q=80";
                }}
              />
              {/* Reduced overlay for better brightness visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
