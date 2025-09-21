import { useTranslation } from "@/contexts/TranslationContext";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingProps {
  onContactModalOpen: () => void;
}

export default function Pricing({ onContactModalOpen }: PricingProps) {
  const { t } = useTranslation();

  const aiAutomationPlans = [
    {
      title: "Starter Automation",
      price: "$199",
      period: "/month",
      description:
        "Basic workflow automation (email responses, appointment scheduling)",
      features: [
        "Up to 2 automation workflows",
        "Email support",
        "Best for small restaurants starting with AI",
      ],
      popular: false,
    },
    {
      title: "Growth Automation",
      price: "$399",
      period: "/month",
      description:
        "Advanced workflows (inventory alerts, customer reminders, lead follow-up)",
      features: [
        "Up to 5 automation workflows",
        "Priority support",
        "Best for restaurants wanting to scale efficiency",
      ],
      popular: true,
    },
    {
      title: "Premium Automation",
      price: "$699",
      period: "/month",
      description: "Custom AI automations (chatbots, dashboards, integrations)",
      features: [
        "Unlimited workflows",
        "1-on-1 onboarding & training",
        "Full priority support",
        "Best for established restaurants & franchises",
      ],
      popular: false,
    },
  ];

  const webDesignPlans = [
    {
      title: "Menu Page Only",
      price: "$249",
      period: " one-time",
      description: "SEO-optimized digital menu",
      features: [
        "Mobile-friendly & shareable link",
        "Easy to update",
        "SEO optimized for restaurants",
      ],
      popular: false,
    },
    {
      title: "Restaurant Website",
      price: "$799",
      period: " one-time",
      description: "Full website (home, about, menu, contact)",
      features: [
        "SEO optimized for restaurants",
        "Integrated with Google Maps & social media",
        "Mobile-responsive design",
      ],
      popular: false,
    },
    {
      title: "Website + Digital Menu",
      price: "$999",
      period: " one-time",
      description: "Complete restaurant website package",
      features: [
        "Custom SEO-optimized menu pages for each item",
        "Review section & customer-friendly design",
        "Perfect for restaurants wanting strong online presence",
      ],
      popular: true,
    },
  ];

  const customPlan = {
    title: "Tailored Solutions",
    price: "Contact Us",
    period: "",
    description: "For larger restaurants & franchises",
    features: [
      "Multi-location website solutions",
      "Advanced AI automations & integrations",
      "Ongoing support & scaling options",
    ],
    popular: false,
    custom: true,
  };

  return (
    <section
      id="pricing"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t("pricing.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* AI Automation Services - Mobile Optimized */}
        <div className="mb-16 sm:mb-20 fade-in-up stagger-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            {t("pricing.ai.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {aiAutomationPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${
                  plan.popular
                    ? "border-pink-500 shadow-xl"
                    : "border-slate-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star size={14} />
                      <span>{t("pricing.most_popular")}</span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {plan.title}
                  </h4>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-600 text-base sm:text-lg">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={onContactModalOpen}
                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[48px] touch-manipulation text-sm sm:text-base"
                  >
                    {t("pricing.get_started")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web & Menu Design - Mobile Optimized */}
        <div className="mb-16 sm:mb-20 fade-in-up stagger-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            {t("pricing.web.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {webDesignPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${
                  plan.popular
                    ? "border-pink-500 shadow-xl"
                    : "border-transparent"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star size={14} />
                      <span>{t("pricing.most_popular")}</span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {plan.title}
                  </h4>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-600 text-base sm:text-lg">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={onContactModalOpen}
                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[48px] touch-manipulation text-sm sm:text-base"
                  >
                    {t("pricing.get_started")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Quote - Mobile Optimized */}
        <div className="fade-in-up stagger-3">
          <div className="bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white border border-slate-700/50">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              {customPlan.title}
            </h3>
            <p className="text-slate-300 mb-6 text-base sm:text-lg">
              {customPlan.description}
            </p>

            <ul className="space-y-3 mb-8 max-w-2xl mx-auto">
              {customPlan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center justify-center space-x-3"
                >
                  <Check className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span className="text-slate-200">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={onContactModalOpen}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[48px] touch-manipulation text-sm sm:text-base"
            >
              {t("pricing.contact_us")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
