import { Brain, Twitter, Linkedin, Github } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Footer() {
  const { t } = useTranslation();
  
  const services = [
    t('footer.service.automation'),
    t('footer.service.analytics'),
    t('footer.service.ml'),
    t('footer.service.data'),
    t('footer.service.consulting')
  ];

  const company = [
    t('footer.company.about'),
    t('footer.company.team'),
    t('footer.company.careers'),
    t('footer.company.news'),
    t('footer.company.contact')
  ];

  const support = [
    t('footer.support.docs'),
    t('footer.support.help'),
    t('footer.privacy'),
    t('footer.terms'),
    t('footer.support.status')
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4 fade-in-up stagger-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center pulse-slow">
                <Brain className="text-white text-sm" size={16} />
              </div>
              <span className="text-xl font-bold text-white">MidAI</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110">
                <Twitter className="text-white" size={16} />
              </button>
              <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110">
                <Linkedin className="text-white" size={16} />
              </button>
              <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110">
                <Github className="text-white" size={16} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="fade-in-up stagger-2">
            <h4 className="text-white font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-slate-300 hover:text-white transition-all duration-300 text-left hover:translate-x-1">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="fade-in-up stagger-3">
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button className="text-slate-300 hover:text-white transition-all duration-300 text-left hover:translate-x-1">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="fade-in-up stagger-4">
            <h4 className="text-white font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <button className="text-slate-300 hover:text-white transition-all duration-300 text-left hover:translate-x-1">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8 fade-in-up stagger-5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-105">{t('footer.privacy')}</button>
              <button className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-105">{t('footer.terms')}</button>
              <button className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-105">{t('footer.cookies')}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
