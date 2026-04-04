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
    <section id="services" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 fade-in-up stagger-1">
            {t('services.title')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto fade-in-up stagger-2 px-4">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`ai-card rounded-xl p-6 sm:p-8 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group fade-in-up stagger-${index + 3}`}
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform pulse-slow mx-auto sm:mx-0`}>
                  <service.icon className="text-white" size={20} />
                </div>
                <div className="text-center sm:text-left w-full">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-pink-500 transition-colors">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <a 
                    href={index === 0 ? "#projects" : index === 1 ? "#projects" : index === 2 ? "#faq" : "#pricing"}
                    className="text-pink-500 hover:text-red-500 transition-all duration-300 font-medium flex items-center justify-center sm:justify-start hover:translate-x-1 text-sm sm:text-base min-h-[44px] py-2 touch-manipulation"
                  >
                    {index === 0 ? "View AI automation case studies" : 
                     index === 1 ? "See restaurant automation projects" :
                     index === 2 ? "Learn about automation solutions" :
                     "Explore real estate AI pricing"} <ArrowRight className="ml-1" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
