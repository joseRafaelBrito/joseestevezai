import { Brain, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const services = [
    "AI Automation",
    "Predictive Analytics",
    "Machine Learning",
    "Data Processing",
    "Consulting"
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "News",
    "Contact"
  ];

  const support = [
    "Documentation",
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
    "Status"
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="text-white text-sm" size={16} />
              </div>
              <span className="text-xl font-bold text-white">MidAI</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Empowering businesses with cutting-edge AI technology solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors">
                <Twitter className="text-white" size={16} />
              </button>
              <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors">
                <Linkedin className="text-white" size={16} />
              </button>
              <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors">
                <Github className="text-white" size={16} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-slate-300 hover:text-white transition-colors text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button className="text-slate-300 hover:text-white transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <button className="text-slate-300 hover:text-white transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 MidAI Technologies. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-slate-400 hover:text-white transition-colors">Privacy Policy</button>
              <button className="text-slate-400 hover:text-white transition-colors">Terms of Service</button>
              <button className="text-slate-400 hover:text-white transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
