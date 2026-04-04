import { defaultSeo, SITE_ORIGIN } from "./seoRoutes";

function setMetaContent(selector: string, content: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

export function applyPageSeo(opts: {
  title: string;
  description: string;
  /** Full canonical URL */
  canonical: string;
  ogType?: "website" | "article";
}) {
  const { title, description, canonical, ogType = "website" } = opts;
  document.title = title;
  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[property="og:url"]', canonical);
  setMetaContent('meta[property="og:type"]', ogType);
  setMetaContent('meta[property="twitter:title"]', title);
  setMetaContent('meta[property="twitter:description"]', description);
  setMetaContent('meta[property="twitter:url"]', canonical);
  const link = document.querySelector('link[rel="canonical"]');
  if (link) link.setAttribute("href", canonical);
}

export function resetPageSeo() {
  applyPageSeo({
    title: defaultSeo.title,
    description: defaultSeo.description,
    canonical: defaultSeo.canonical,
    ogType: defaultSeo.ogType,
  });
}

/** Build canonical URL from a path like `/blog/foo/` (slashes preserved) */
export function canonicalFromPath(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p}`;
}
