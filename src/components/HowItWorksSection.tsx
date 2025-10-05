import {
  ArrowRight,
  Package,
  Car,
  Truck,
  Building2,
  Edit3,
  Users,
  MapPin,
  Shield,
  Lock,
  CreditCard,
  Navigation,
  CheckCircle,
  DollarSign as Dollar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { getTranslationArray } from "@/types/translations";
import { useState } from "react";

const HowItWorksSection = () => {
  const { t } = useTranslation();
  const [activeProfile, setActiveProfile] = useState(0);
  const profiles = getTranslationArray(t, "howItWorks.profiles");
  const processSteps = getTranslationArray(t, "howItWorks.steps.list");
  const securityFeatures = getTranslationArray(
    t,
    "howItWorks.security.features"
  );
  const pricingFeatures = getTranslationArray(t, "howItWorks.pricing.features");

  const getIcon = (iconName: string, size = "w-8 h-8") => {
    const iconProps = { className: size };
    switch (iconName) {
      case "package":
        return <Package {...iconProps} />;
      case "car":
        return <Car {...iconProps} />;
      case "truck":
        return <Truck {...iconProps} />;
      case "building":
        return <Building2 {...iconProps} />;
      case "edit":
        return <Edit3 {...iconProps} />;
      case "users":
        return <Users {...iconProps} />;
      case "tracking":
        return <MapPin {...iconProps} />;
      case "shield":
        return <Shield {...iconProps} />;
      case "protection":
        return <Lock {...iconProps} />;
      case "payment":
        return <CreditCard {...iconProps} />;
      case "location":
        return <Navigation {...iconProps} />;
      default:
        return <Package {...iconProps} />;
    }
  };

  const getGradient = (index: number) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-purple-500 to-pink-600",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section
      id="fonctionnement"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        {/* Section 1: Header & Profile Tabs */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            {t("howItWorks.subtitle")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("howItWorks.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Profile Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {profiles.map((profile, index) => (
            <button
              key={profile.id}
              onClick={() => setActiveProfile(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeProfile === index
                  ? `bg-gradient-to-r ${getGradient(
                      index
                    )} text-white shadow-lg transform scale-105`
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  activeProfile === index ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                {getIcon(profile.icon)}
              </div>
              <span className="hidden sm:block text-sm font-semibold">
                {profile.title.split(" ").slice(-2).join(" ")}
              </span>
            </button>
          ))}
        </div>

        {/* Active Profile Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div
              className={`h-2 bg-gradient-to-r ${getGradient(activeProfile)}`}
            ></div>
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div
                  className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${getGradient(
                    activeProfile
                  )} text-white shadow-lg`}
                >
                  {getIcon(profiles[activeProfile].icon)}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {profiles[activeProfile].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {profiles[activeProfile].description}
                  </p>
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${getGradient(
                      activeProfile
                    )} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    {t("howItWorks.button")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2: Process Steps */}
        {/* <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("howItWorks.steps.title")}
            </h3>
            <p className="text-gray-600 text-lg">
              {t("howItWorks.steps.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getGradient(
                        index
                      )} flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {step.number}
                    </div>
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${getGradient(
                        index
                      )} text-white`}
                    >
                      {getIcon(step.icon, "w-6 h-6")}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
        {/* {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* Section 3: Security Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("howItWorks.security.title")}
            </h3>
            <p className="text-gray-600 text-lg">
              {t("howItWorks.security.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getGradient(
                    index
                  )} flex items-center justify-center text-white mb-4`}
                >
                  {getIcon(feature.icon, "w-6 h-6")}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Pricing */}
        {/* <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Dollar className="w-4 h-4" />
                {t("howItWorks.pricing.subtitle")}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {t("howItWorks.pricing.title")}
              </h3>
              <p className="text-blue-100 text-lg">
                {t("howItWorks.pricing.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {t("howItWorks.button")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            {profiles.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProfile === index
                    ? `bg-gradient-to-r ${getGradient(index)} scale-125`
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
