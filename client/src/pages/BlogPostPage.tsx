import { useEffect, useLayoutEffect, useMemo } from "react";
import { useParams } from "wouter";
import Home from "@/pages/home";
import { useTranslation } from "@/contexts/TranslationContext";
import { blogPosts, type BlogSlug } from "@/lib/seoRoutes";
import {
  applyPageSeo,
  canonicalFromPath,
  resetPageSeo,
} from "@/lib/applyDocumentSeo";

const blogIndexMeta = {
  title:
    "Blog — AI Automation, Restaurants & Real Estate | Jose Estevez AI",
  description:
    "Articles on AI automation for restaurants, digital menus, real estate workflows, and business automation trends in the USA and Latin America.",
};

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = (params.slug ?? "").replace(/\/$/, "") as BlogSlug | string;
  const { setLanguage } = useTranslation();

  const entry = useMemo(
    () => (slug in blogPosts ? blogPosts[slug as BlogSlug] : undefined),
    [slug]
  );

  useEffect(() => {
    const lang = entry?.language ?? "en";
    setLanguage(lang);
  }, [entry, setLanguage]);

  useEffect(() => {
    const prevLang = document.documentElement.lang;
    const lang = entry?.language ?? "en";
    document.documentElement.lang = lang === "es" ? "es" : "en";
    return () => {
      document.documentElement.lang = prevLang;
    };
  }, [entry]);

  useEffect(() => {
    if (entry) {
      applyPageSeo({
        title: entry.title,
        description: entry.description,
        canonical: canonicalFromPath(entry.canonicalPath),
        ogType: "article",
      });
    } else {
      applyPageSeo({
        title: blogIndexMeta.title,
        description: blogIndexMeta.description,
        canonical: canonicalFromPath("/blog/"),
        ogType: "website",
      });
    }
    return () => resetPageSeo();
  }, [entry]);

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(() => {
      setTimeout(() => {
        document.getElementById("blog")?.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }, 50);
    });
    return () => cancelAnimationFrame(raf);
  }, [slug]);

  return <Home />;
}
