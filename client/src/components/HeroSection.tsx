import { Rocket, Play, Star, Brain, TrendingUp, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We Are Building{" "}
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                AI Technology
              </span>{" "}
              That Helps Business Grow
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Leverage the power of artificial intelligence to transform your business operations, 
              boost efficiency, and drive unprecedented growth with our cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
                <Rocket className="mr-2" size={18} />
                Get Started
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-slate-400 hover:border-white text-slate-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all bg-transparent"
              >
                <Play className="mr-2" size={18} />
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span>Trusted by 200+ companies worldwide</span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
              {/* Central Platform */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full flex items-center justify-center relative">
                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-pulse">
                    <div className="w-8 h-8 bg-red-500 rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <TrendingUp size={16} className="text-white" />
                    </div>
                    <div className="w-6 h-6 bg-pink-500 rounded-full absolute bottom-8 right-8 flex items-center justify-center">
                      <Settings size={12} className="text-white" />
                    </div>
                    <div className="w-6 h-6 bg-blue-400 rounded-full absolute bottom-8 left-8 flex items-center justify-center">
                      <Brain size={12} className="text-white" />
                    </div>
                  </div>
                  {/* Central AI Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Brain className="text-white" size={24} />
                  </div>
                </div>
              </div>
              {/* Floating Data Points */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-blue-500/80 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white" size={20} />
              </div>
              <div className="absolute bottom-16 left-8 w-10 h-10 bg-purple-500/80 rounded-lg flex items-center justify-center">
                <Settings className="text-white" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
