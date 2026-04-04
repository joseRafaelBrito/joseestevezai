import { useEffect, useLayoutEffect } from "react";
import Home from "@/pages/home";
import { useTranslation } from "@/contexts/TranslationContext";
import type { SeoLandingId } from "@/lib/seoRoutes";
import { seoLandings, SITE_ORIGIN } from "@/lib/seoRoutes";
import { applyPageSeo, resetPageSeo } from "@/lib/applyDocumentSeo";

type Locale = "en" | "es";

export default function SeoLanding({
  pageId,
  locale,
}: {
  pageId: SeoLandingId;
  locale: Locale;
}) {
  const config = seoLandings[pageId];
  const { setLanguage } = useTranslation();

  const meta = locale === "es" && config.es ? config.es : config.en;
  const path =
    locale === "es" && config.pathEs ? config.pathEs : config.pathEn;
  const canonicalUrl = `${SITE_ORIGIN}${path.endsWith("/") ? path : `${path}/`}`;

  useEffect(() => {
    setLanguage(locale);
  }, [locale, setLanguage]);

  useEffect(() => {
    const prevLang = document.documentElement.lang;
    document.documentElement.lang = locale === "es" ? "es" : "en";
    return () => {
      document.documentElement.lang = prevLang;
    };
  }, [locale]);

  useEffect(() => {
    applyPageSeo({
      title: meta.title,
      description: meta.description,
      canonical: canonicalUrl,
      ogType: "website",
    });
    return () => resetPageSeo();
  }, [pageId, locale, meta.title, meta.description, canonicalUrl]);

  useLayoutEffect(() => {
    const id = config.scrollTo;
    const raf = requestAnimationFrame(() => {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }, 50);
    });
    return () => cancelAnimationFrame(raf);
  }, [pageId, config.scrollTo]);

  return <Home />;
}
