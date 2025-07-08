import { Target, Bot, ServerCog, TrendingUp, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Personalized Marketing",
      description: "Create targeted marketing campaigns using AI-driven customer insights and behavioral analysis to maximize conversion rates and ROI.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Bot,
      title: "AI-Powered Chatbots",
      description: "Deploy intelligent conversational AI that provides 24/7 customer support, handles inquiries, and improves user experience.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: ServerCog,
      title: "Process Automation",
      description: "Streamline business operations with intelligent automation solutions that reduce manual work and increase efficiency.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage advanced machine learning algorithms to forecast trends, identify opportunities, and make data-driven decisions.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Top-Notch Services And Solution To Ensure Your Success
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            We provide comprehensive AI solutions tailored to your business needs, ensuring optimal performance and measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="ai-card rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button className="text-pink-500 hover:text-red-500 transition-colors font-medium flex items-center">
                    Learn More <ArrowRight className="ml-1" size={16} />
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
