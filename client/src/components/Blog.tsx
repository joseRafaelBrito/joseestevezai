import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how artificial intelligence is reshaping business processes and driving unprecedented efficiency gains across industries.",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Predictive Analytics: Transforming Decision Making",
      excerpt: "Learn how predictive analytics powered by machine learning can help businesses make smarter, data-driven decisions.",
      date: "December 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Building Intelligent Chatbots with NLP",
      excerpt: "Explore the latest advancements in natural language processing and how they're improving chatbot interactions.",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Blog & Articles</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and developments in artificial intelligence and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="ai-card rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-400 mb-3">
                  <Calendar className="mr-2" size={14} />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="mr-1" size={14} />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-pink-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center text-pink-500 hover:text-red-500 transition-colors font-medium">
            View All Articles <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
