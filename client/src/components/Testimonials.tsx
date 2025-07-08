import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "MidAI's predictive analytics solution transformed how we approach customer insights. The accuracy of their AI models exceeded our expectations, resulting in a 40% increase in conversion rates.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b78764c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
    },
    {
      text: "The automation solutions provided by MidAI revolutionized our workflow. We've reduced manual processing time by 70% while maintaining the highest quality standards.",
      author: "Michael Chen",
      role: "CTO, Innovation Labs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Feedback From Clients</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            See what our satisfied clients have to say about their experience with our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="ai-card rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400" size={16} />
                  ))}
                </div>
                <span className="text-slate-300 text-sm">5.0 Rating</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
