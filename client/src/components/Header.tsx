import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="text-white text-sm" size={16} />
            </div>
            <span className="text-xl font-bold text-white">MidAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-pink-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("blog")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("pages")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Pages
            </button>
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              Let's Talk
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
          <div className="md:hidden mt-4 space-y-3">
            <button 
              onClick={() => scrollToSection("home")}
              className="block text-white hover:text-pink-500 transition-colors py-2 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block text-slate-300 hover:text-white transition-colors py-2 w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="block text-slate-300 hover:text-white transition-colors py-2 w-full text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="block text-slate-300 hover:text-white transition-colors py-2 w-full text-left"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("blog")}
              className="block text-slate-300 hover:text-white transition-colors py-2 w-full text-left"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("pages")}
              className="block text-slate-300 hover:text-white transition-colors py-2 w-full text-left"
            >
              Pages
            </button>
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-all mt-4">
              Let's Talk
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
