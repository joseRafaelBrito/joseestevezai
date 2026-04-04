import { Zap, BarChart3, MessageSquare, Lightbulb } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Features() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Zap,
      title: t('features.automation.title'),
      description: t('features.automation.desc'),
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.desc'),
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: MessageSquare,
      title: t('features.language.title'),
      description: t('features.language.desc'),
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: t('features.smart.title'),
      description: t('features.smart.desc'),
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up stagger-1">{t('features.title')}</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto fade-in-up stagger-2">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`ai-card rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group fade-in-up stagger-${index + 3}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform pulse-slow`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-pink-500 transition-colors">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
