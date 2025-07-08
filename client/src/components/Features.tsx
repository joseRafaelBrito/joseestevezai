import { Zap, BarChart3, MessageSquare, Lightbulb } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline your workflows with intelligent automation that handles repetitive tasks and optimizes productivity.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Harness the power of data with advanced analytics that predict trends and inform strategic decisions.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: MessageSquare,
      title: "Language Model",
      description: "Advanced natural language processing capabilities for better human-AI interaction and communication.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Smart Solutions",
      description: "Intelligent problem-solving algorithms that adapt to your unique business challenges and requirements.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Intelligent Features</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Discover our comprehensive suite of AI-powered features designed to revolutionize your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="ai-card rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
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
