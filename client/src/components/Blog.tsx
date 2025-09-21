import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Blog() {
  const { t } = useTranslation();
  
  const blogPosts = [
    {
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      date: "December 15, 2024",
      readTime: `5 ${t('blog.read_time')}`,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      date: "December 12, 2024",
      readTime: `7 ${t('blog.read_time')}`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: t('blog.post3.title'),
      excerpt: t('blog.post3.excerpt'),
      date: "December 10, 2024",
      readTime: `6 ${t('blog.read_time')}`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up stagger-1">{t('blog.title')}</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto fade-in-up stagger-2">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className={`ai-card rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group fade-in-up stagger-${index + 3}`}
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
                  <Calendar className="mr-2 pulse-slow" size={14} />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="mr-1 pulse-slow" size={14} />
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

        <div className="text-center mt-12 fade-in-up stagger-6">
          <button className="inline-flex items-center text-pink-500 hover:text-red-500 transition-all duration-300 font-medium hover:translate-x-1">
            {t('blog.view_all')} <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
