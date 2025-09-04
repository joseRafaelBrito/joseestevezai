import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <Header onContactModalOpen={() => setIsContactModalOpen(true)} />
      <HeroSection onContactModalOpen={() => setIsContactModalOpen(true)} />
      <AboutMe />
      <Features />
      <Services />
      <Projects />
      <Testimonials />
      <Pricing onContactModalOpen={() => setIsContactModalOpen(true)} />
      <BlogSection />
      <FAQSection />
      <Footer />

      {/* Contact Modal - Rendered at body level via Portal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => {
          console.log("Closing modal from Home component");
          setIsContactModalOpen(false);
        }}
      />
    </div>
  );
}
