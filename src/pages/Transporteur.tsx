import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import {
  Package,
  MapPin,
  DollarSign as Dollar,
  Clock,
  Shield,
  Users,
  Download,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Transporteur = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - aligned with Particulier */}
      <section className="relative overflow-hidden bg-[url('/car.png')]   bg-cover bg-center">
        <div className="absolute z-0 inset-0 bg-blue-300/50 pointer-events-none" />
        <div className="container mx-auto px-4 pt-32 pb-20 z-10 relative">
          <div className="flex flex-col  justify-center">
            <div className="space-y-8 animate-fade-in flex flex-col  justify-center">
              <div className="space-y-4 flex flex-col  justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  {t("transporteur.hero.title")}
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-200">
                  {t("transporteur.hero.subtitle")}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="sm" className="hero-shadow ">
                  <Download className="w-5 h-5" />
                  {t("transporteur.hero.downloadApp")}
                </Button>
                <Button variant="outline" size="sm" className="">
                  <PlayCircle className="w-5 h-5" />
                  {t("transporteur.hero.watchDemo")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" overflow-hidden bg-white">
        {/* Profiles-like section: 3-step cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
                {t("transporteur.howItWorks.title")}
              </h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                {t("transporteur.howItWorks.subtitle")}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {t("transporteur.howItWorks.steps", { returnObjects: true }).map(
                (step: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-2xl p-6 text-center "
                  >
                    <div className="mx-auto mb-4 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-secondary/10">
                      {index === 0 && (
                        <Users className="w-6 h-6 text-secondary" />
                      )}
                      {index === 1 && (
                        <Package className="w-6 h-6 text-secondary" />
                      )}
                      {index === 2 && (
                        <Dollar className="w-6 h-6 text-secondary" />
                      )}
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <FaqSection />
        <CtaSection />
      </div>

      <Footer />
    </div>
  );
};

export default Transporteur;
