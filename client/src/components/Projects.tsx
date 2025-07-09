import { ExternalLink, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Projects() {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: t('projects.personality.title'),
      description: t('projects.personality.desc'),
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      title: t('projects.voice.title'),
      description: t('projects.voice.desc'),
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      title: t('projects.emotion.title'),
      description: t('projects.emotion.desc'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up stagger-1">{t('projects.title')}</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto fade-in-up stagger-2">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`ai-card rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group fade-in-up stagger-${index + 3}`}
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-pink-500 transition-colors">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <button className="text-pink-500 hover:text-red-500 transition-all duration-300 font-medium flex items-center hover:translate-x-1">
                  {t('common.read_more')} <ExternalLink className="ml-1" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in-up stagger-6">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg bounce-gentle">
            <FolderOpen className="mr-2" size={18} />
            {t('projects.explore_all')}
          </Button>
        </div>
      </div>
    </section>
  );
}
