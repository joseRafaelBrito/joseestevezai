import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

interface HeaderProps {
  onContactModalOpen: () => void;
}

export default function Header({ onContactModalOpen }: HeaderProps) {
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
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 fade-in-up">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Mobile Optimized */}
          <div className="flex items-center space-x-2 fade-in-left">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center pulse-slow">
              <Brain className="text-white text-sm" size={14} />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">
              Jose Estevez AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 fade-in-right">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-pink-500 transition-all duration-300 hover:scale-105 text-sm lg:text-base py-2 px-1"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 text-sm lg:text-base py-2 px-1"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 text-sm lg:text-base py-2 px-1"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 text-sm lg:text-base py-2 px-1"
            >
              {t("nav.pricing")}
            </button>

            {/* Language Toggle Buttons */}
            <div className="flex items-center space-x-1 border border-slate-600 rounded-full p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 min-h-[32px] touch-manipulation ${
                  language === "en"
                    ? "bg-white text-slate-900"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 min-h-[32px] touch-manipulation ${
                  language === "es"
                    ? "bg-white text-slate-900"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                ES
              </button>
            </div>

            <Button
              onClick={() => {
                console.log('Desktop Let\'s Talk button clicked');
                onContactModalOpen();
                console.log('Modal open handler called');
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all transform hover:scale-105 hover:shadow-lg text-sm lg:text-base min-h-[44px] touch-manipulation"
            >
              {t("nav.lets_talk")}
            </Button>
          </div>

          {/* Mobile Menu Button - Touch Optimized */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Touch Optimized */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 fade-in-up bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm">
            <button
              onClick={() => scrollToSection("home")}
              className="block text-white hover:text-pink-500 transition-all duration-300 py-3 px-4 w-full text-left hover:translate-x-2 hover:bg-slate-700/50 rounded-lg min-h-[48px] touch-manipulation"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block text-slate-300 hover:text-white transition-all duration-300 py-3 px-4 w-full text-left hover:translate-x-2 hover:bg-slate-700/50 rounded-lg min-h-[48px] touch-manipulation"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block text-slate-300 hover:text-white transition-all duration-300 py-3 px-4 w-full text-left hover:translate-x-2 hover:bg-slate-700/50 rounded-lg min-h-[48px] touch-manipulation"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block text-slate-300 hover:text-white transition-all duration-300 py-3 px-4 w-full text-left hover:translate-x-2 hover:bg-slate-700/50 rounded-lg min-h-[48px] touch-manipulation"
            >
              {t("nav.pricing")}
            </button>

            {/* Mobile Language Toggle - Touch Optimized */}
            <div className="flex items-center justify-center space-x-3 pt-3 pb-2">
              <span className="text-slate-400 text-sm">Language:</span>
              <div className="flex items-center space-x-1 border border-slate-600 rounded-full p-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-h-[40px] touch-manipulation ${
                    language === "en"
                      ? "bg-white text-slate-900"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-h-[40px] touch-manipulation ${
                    language === "es"
                      ? "bg-white text-slate-900"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  ES
                </button>
              </div>
            </div>

            <Button
              onClick={() => {
                console.log('Mobile Let\'s Talk button clicked');
                onContactModalOpen();
                console.log('Modal open handler called');
                setIsMenuOpen(false);
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-lg mt-4 min-h-[52px] touch-manipulation text-base font-semibold"
            >
              {t("nav.lets_talk")}
            </Button>
          </div>
        )}
      </nav>

    </header>
  );
}
