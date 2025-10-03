import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { getTranslationArray } from "@/types/translations";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  return (
    <section id="fonctionnement" className="py-20 bg-[#f5f5ff]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left: textual steps */}
          <div className="space-y-10">
            {getTranslationArray(t, "howItWorks.steps").map((step, index) => (
              <div key={index}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
              </div>
            ))}
            <Button size="sm" className="inline-flex items-center gap-2">
              {t("howItWorks.button")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right: big headline and illustration */}
          <div className="flex flex-col items-start md:items-end w-full">
            <div className="w-28 h-28 mb-6 ml-auto">
              <img
                src="/dancing.png"
                alt={t("howItWorks.mascotAlt")}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-xl md:text-right">
              {t("howItWorks.title")}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
