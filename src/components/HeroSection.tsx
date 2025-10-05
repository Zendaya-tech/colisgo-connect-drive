import { Button } from "@/components/ui/button";
import {
  Download,
  PlayCircle,
  Package,
  Users,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white/90 text-sm font-medium border border-white/10 fade-in-up hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Star className="w-4 h-4 text-orange-400 group-hover:wiggle" />
              <span className="hidden sm:inline">{t("hero.badge")}</span>
              <span className="sm:hidden">{t("hero.badgeMobile")}</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1
                className="font-space text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight fade-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  {t("hero.title").split(" ")[0]}
                </span>
                <br />
                <span className="gradient-text hover:scale-105 inline-block transition-transform duration-300 cursor-pointer">
                  {t("hero.title").split(" ")[1]}
                </span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  {t("hero.title").split(" ")[2]}
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 fade-in-left"
                style={{ animationDelay: "0.4s" }}
              >
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Features list */}
            {/* <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              {[
                "Livraison jusqu'à 70% moins chère",
                "Suivi en temps réel de votre colis",
                "Assurance et paiement sécurisé inclus",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/90 text-left"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div
              className="flex gap-4 justify-center lg:justify-start fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 pulse-glow text-sm sm:text-base hover:scale-105 group"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:bounce-in" />
                {t("hero.downloadApp")}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-blue-800 hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base hover:scale-105 group"
              >
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t("hero.watchDemo")}
              </Button>
            </div>
          </div>

          {/* Right content - Responsive phone mockup */}
          <div
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 fade-in-right"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="relative group">
              {/* Main phone mockup */}
              <div className="relative w-64 h-[480px] sm:w-72 sm:h-[540px] lg:w-80 lg:h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] lg:rounded-[3rem] p-1.5 lg:p-2 shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group-hover:rotate-1">
                <div className="w-full h-full bg-gradient-to-b from-white to-slate-50 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden">
                  {/* Phone screen content */}
                  <div className="p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5 lg:space-y-6">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-xs text-slate-600">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-1.5 lg:w-4 lg:h-2 bg-slate-300 rounded-sm"></div>
                        <div className="w-3 h-1.5 lg:w-4 lg:h-2 bg-slate-300 rounded-sm"></div>
                        <div className="w-3 h-1.5 lg:w-4 lg:h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-space">
                        ColisGo
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        Livraison collaborative
                      </p>
                    </div>

                    {/* Feature cards */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 sm:p-4 rounded-xl lg:rounded-2xl border border-orange-200 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg group">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 text-sm sm:text-base">
                              {t("hero.appFeatures.sendPackage")}
                            </h4>
                            <p className="text-xs text-slate-600">
                              {t("hero.appFeatures.sendPackageDesc")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-4 rounded-xl lg:rounded-2xl border border-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg group">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 text-sm sm:text-base">
                              {t("hero.appFeatures.becomeCarrier")}
                            </h4>
                            <p className="text-xs text-slate-600">
                              {t("hero.appFeatures.becomeCarrierDesc")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 sm:p-4 rounded-xl lg:rounded-2xl border border-green-200 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg group">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 text-sm sm:text-base">
                              {t("hero.appFeatures.secure")}
                            </h4>
                            <p className="text-xs text-slate-600">
                              {t("hero.appFeatures.secureDesc")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom section with rating */}
                    <div className="bg-slate-50 rounded-xl lg:rounded-2xl p-3 sm:p-4 text-center">
                      <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600">
                        <span className="font-bold">4.9/5</span> • 15,649 avis
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration - subtle */}
              <div className="absolute -z-10 top-4 left-4 lg:top-8 lg:left-8 w-full h-full bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-[2.5rem] lg:rounded-[3rem] blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
