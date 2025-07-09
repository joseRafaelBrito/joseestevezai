import { Target, Bot, ServerCog, TrendingUp, ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Services() {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Target,
      title: t('services.marketing.title'),
      description: t('services.marketing.desc'),
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Bot,
      title: t('services.chatbots.title'),
      description: t('services.chatbots.desc'),
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: ServerCog,
      title: t('services.automation.title'),
      description: t('services.automation.desc'),
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: t('services.analytics.title'),
      description: t('services.analytics.desc'),
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up stagger-1">
            {t('services.title')}
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto fade-in-up stagger-2">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`ai-card rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform pulse-slow`}>
                  <service.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-pink-500 transition-colors">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button className="text-pink-500 hover:text-red-500 transition-all duration-300 font-medium flex items-center hover:translate-x-1">
                    {t('common.learn_more')} <ArrowRight className="ml-1" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
