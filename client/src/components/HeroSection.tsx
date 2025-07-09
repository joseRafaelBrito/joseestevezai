import { Rocket, Play, Star, Brain, TrendingUp, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight fade-in-up stagger-1">
              {t('hero.title').split('AI Technology').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                      AI Technology
                    </span>
                  )}
                </span>
              ))}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl fade-in-up stagger-2">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg bounce-gentle">
                <Rocket className="mr-2" size={18} />
                {t('hero.get_started')}
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-slate-400 hover:border-white text-slate-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all bg-transparent hover:scale-105"
              >
                <Play className="mr-2" size={18} />
                {t('hero.learn_more')}
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-400 fade-in-up stagger-4">
              <Star className="text-yellow-400 fill-yellow-400 pulse-slow" size={16} />
              <span>{t('hero.trusted_by')}</span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative fade-in-right">
            <div className="relative w-full h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50 hover:scale-105 transition-all duration-300">
              {/* Central Platform */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full flex items-center justify-center relative float-animation">
                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 rotate-slow">
                    <div className="w-8 h-8 bg-red-500 rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center pulse-slow">
                      <TrendingUp size={16} className="text-white" />
                    </div>
                    <div className="w-6 h-6 bg-pink-500 rounded-full absolute bottom-8 right-8 flex items-center justify-center bounce-gentle">
                      <Settings size={12} className="text-white" />
                    </div>
                    <div className="w-6 h-6 bg-blue-400 rounded-full absolute bottom-8 left-8 flex items-center justify-center pulse-slow">
                      <Brain size={12} className="text-white" />
                    </div>
                  </div>
                  {/* Central AI Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl pulse-slow">
                    <Brain className="text-white" size={24} />
                  </div>
                </div>
              </div>
              {/* Floating Data Points */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-blue-500/80 rounded-lg flex items-center justify-center float-animation hover:scale-110 transition-transform">
                <TrendingUp className="text-white" size={20} />
              </div>
              <div className="absolute bottom-16 left-8 w-10 h-10 bg-purple-500/80 rounded-lg flex items-center justify-center bounce-gentle hover:scale-110 transition-transform">
                <Settings className="text-white" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
