import { ExternalLink, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { t } = useTranslation();
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({ isOpen: false, title: "", content: "" });

  const projects = [
    {
      title: t("projects.restaurant.title"),
      description: t("projects.restaurant.desc"),
      extended: t("projects.restaurant.extended"),
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=300",
      url: "https://menutechstyles.netlify.app/",
    },
    {
      title: t("projects.menu.title"),
      description: t("projects.menu.desc"),
      extended: t("projects.menu.extended"),
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=300",
      url: "https://menutechstyles.netlify.app/",
    }, 
    {
      title: t("projects.realestate.title"),
      description: t("projects.realestate.desc"),
      extended: t("projects.realestate.extended"),
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=300",
      url: "https://realtypilot.netlify.app/",
    }, 
  ];

  const openModal = (title: string, content: string) => {
    setModalData({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: "", content: "" });
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 fade-in-up stagger-1">
            {t("projects.title")}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto fade-in-up stagger-2 px-4">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`ai-card rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group fade-in-up stagger-${ 
                index + 3
              }`}
            >
              <div className="overflow-hidden">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} - AI automation services for restaurants and real estate - automatización con IA para restaurantes e inmobiliarias`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.title} - AI automation services for restaurants and real estate - automatización con IA para restaurantes e inmobiliarias`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-pink-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex items-center gap-3">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-red-500 transition-all duration-300 font-medium flex items-center hover:translate-x-1 min-h-[44px] py-2 touch-manipulation text-sm sm:text-base"
                    >
                      {t("common.visit_site")} 
                      <ExternalLink className="ml-1" size={16} />
                    </a>
                  ) : (
                    <button
                      onClick={() => openModal(project.title, project.extended)}
                      className="text-pink-500 hover:text-red-500 transition-all duration-300 font-medium flex items-center hover:translate-x-1 min-h-[44px] py-2 touch-manipulation text-sm sm:text-base"
                    >
                      {t("common.read_more")} 
                      <ExternalLink className="ml-1" size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in-up stagger-6">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg bounce-gentle min-h-[48px] touch-manipulation text-sm sm:text-base">
            <FolderOpen className="mr-2" size={18} />
            {t("projects.explore_all")}
          </Button>
        </div>

        <ProjectModal
          isOpen={modalData.isOpen}
          onClose={closeModal}
          title={modalData.title}
          content={modalData.content}
        />
      </div>
    </section>
  );
}
