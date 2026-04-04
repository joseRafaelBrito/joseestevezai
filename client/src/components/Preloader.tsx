import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide body scroll during preloader
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-t-transparent"></div>
        </div>
        <h1 className="text-2xl font-bold text-white md:text-3xl">
          Jose Estevez AI
        </h1>
        <p className="mt-2 text-lg text-slate-300 md:text-xl">
          AI Automation & Web Design for Restaurants and Real Estate
        </p>
      </div>
    </div>
  );
}
