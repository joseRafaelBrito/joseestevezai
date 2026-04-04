import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TranslationProvider } from "@/contexts/TranslationContext";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Preloader from "@/components/Preloader";
import SeoLanding from "@/pages/SeoLanding";
import BlogPostPage from "@/pages/BlogPostPage";
import type { SeoLandingId } from "@/lib/seoRoutes";

type LandingSpec = { path: string; pageId: SeoLandingId; locale: "en" | "es" };

const LANDING_SPECS: LandingSpec[] = [
  { path: "/about", pageId: "about", locale: "en" },
  { path: "/about/", pageId: "about", locale: "en" },
  { path: "/es/about", pageId: "about", locale: "es" },
  { path: "/es/about/", pageId: "about", locale: "es" },
  { path: "/services", pageId: "services", locale: "en" },
  { path: "/services/", pageId: "services", locale: "en" },
  { path: "/projects", pageId: "projects", locale: "en" },
  { path: "/projects/", pageId: "projects", locale: "en" },
  { path: "/pricing", pageId: "pricing", locale: "en" },
  { path: "/pricing/", pageId: "pricing", locale: "en" },
  { path: "/faq", pageId: "faq", locale: "en" },
  { path: "/faq/", pageId: "faq", locale: "en" },
  { path: "/restaurant-automation", pageId: "restaurant-automation", locale: "en" },
  { path: "/restaurant-automation/", pageId: "restaurant-automation", locale: "en" },
  {
    path: "/real-estate-ai-automation",
    pageId: "real-estate-ai-automation",
    locale: "en",
  },
  {
    path: "/real-estate-ai-automation/",
    pageId: "real-estate-ai-automation",
    locale: "en",
  },
  {
    path: "/restaurant-menu-builder",
    pageId: "restaurant-menu-builder",
    locale: "en",
  },
  {
    path: "/restaurant-menu-builder/",
    pageId: "restaurant-menu-builder",
    locale: "en",
  },
  { path: "/digital-menu-creator", pageId: "digital-menu-creator", locale: "en" },
  { path: "/digital-menu-creator/", pageId: "digital-menu-creator", locale: "en" },
  {
    path: "/business-automation-services",
    pageId: "business-automation-services",
    locale: "en",
  },
  {
    path: "/business-automation-services/",
    pageId: "business-automation-services",
    locale: "en",
  },
  { path: "/workflow-automation", pageId: "workflow-automation", locale: "en" },
  { path: "/workflow-automation/", pageId: "workflow-automation", locale: "en" },
];

const landingRoutes = LANDING_SPECS.map((spec) => {
  const Comp = () => (
    <SeoLanding pageId={spec.pageId} locale={spec.locale} />
  );
  Comp.displayName = `SeoLandingRoute(${spec.pageId},${spec.locale})`;
  return (
    <Route key={spec.path} path={spec.path} component={Comp} />
  );
});

const BlogIndexLanding = () => <SeoLanding pageId="blog" locale="en" />;

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/es" component={Home} />
      <Route path="/es/" component={Home} />
      <Route path="/blog/" component={BlogIndexLanding} />
      <Route path="/blog" component={BlogIndexLanding} />
      <Route path="/blog/:slug/" component={BlogPostPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />
      {landingRoutes}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TranslationProvider>
          <Preloader />
          <Toaster />
          <Router />
        </TranslationProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
