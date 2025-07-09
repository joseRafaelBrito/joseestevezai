import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 fade-in-up">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 fade-in-left">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center pulse-slow">
              <Brain className="text-white text-sm" size={16} />
            </div>
            <span className="text-xl font-bold text-white">MidAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 fade-in-right">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-pink-500 transition-all duration-300 hover:scale-105"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {t('nav.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection("blog")}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {t('nav.blog')}
            </button>
            <button 
              onClick={() => scrollToSection("pages")}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {t('nav.pages')}
            </button>
            
            {/* Language Toggle Buttons */}
            <div className="flex items-center space-x-2 border border-slate-600 rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-white text-slate-900' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'es' 
                    ? 'bg-white text-slate-900' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                ES
              </button>
            </div>
            
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
            >
              {t('nav.lets_talk')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 fade-in-up">
            <button 
              onClick={() => scrollToSection("home")}
              className="block text-white hover:text-pink-500 transition-all duration-300 py-2 w-full text-left hover:translate-x-2"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block text-slate-300 hover:text-white transition-all duration-300 py-2 w-full text-left hover:translate-x-2"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="block text-slate-300 hover:text-white transition-all duration-300 py-2 w-full text-left hover:translate-x-2"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="block text-slate-300 hover:text-white transition-all duration-300 py-2 w-full text-left hover:translate-x-2"
            >
              {t('nav.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection("blog")}
              className="block text-slate-300 hover:text-white transition-all duration-300 py-2 w-full text-left hover:translate-x-2"
            >
              {t('nav.blog')}
            </button>
            <button 
              onClick={() => scrollToSection("pages")}
              className="block text-slate-300 hover:text-white transition-all duration-300 py-2 w-full text-left hover:translate-x-2"
            >
              {t('nav.pages')}
            </button>
            
            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-center space-x-2 border border-slate-600 rounded-full p-1 my-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-white text-slate-900' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'es' 
                    ? 'bg-white text-slate-900' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                ES
              </button>
            </div>
            
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-all mt-4 transform hover:scale-105">
              {t('nav.lets_talk')}
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
