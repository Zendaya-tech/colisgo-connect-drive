import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getTranslationArray } from "@/types/translations";

const FaqSection = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="py-20 bg-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {getTranslationArray(t, "faq.questions").map((faq, index) => {
              const isOpen = expanded.has(index);
              return (
                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl border border-border/60 transition-shadow p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p
                    className={`text-muted-foreground leading-relaxed ${
                      isOpen ? "" : "line-clamp-3"
                    }`}
                  >
                    {faq.answer}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-3 text-secondary font-semibold hover:underline focus:outline-none"
                  >
                    {isOpen ? t("faq.readLess") : t("faq.readMore")}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
