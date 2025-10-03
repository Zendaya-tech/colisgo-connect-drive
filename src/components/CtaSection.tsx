import { CheckCircle, Apple, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getTranslationArray } from "@/types/translations";

const CtaSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 text-white bg-indigo-950">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold ring-1 ring-orange-400/20 text-orange-200">
              {t("cta.badge")}
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-lg text-white/85 max-w-prose">
              {t("cta.subtitle")}
            </p>

            <ul className="mt-6 space-y-2">
              {getTranslationArray(t, "cta.features").map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-400" />
                  <span className="text-white/90">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#"
                aria-label="Disponible sur Google Play"
                className="group inline-flex items-center gap-3 rounded-xl border border-orange-400/30 bg-orange-500/10 px-4 py-3 text-left transition-colors hover:bg-orange-500/20"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/20 text-orange-300">
                  <Play className="h-4 w-4" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider text-orange-200">
                    {t("cta.getItOn")}
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {t("cta.googlePlay")}
                  </span>
                </span>
              </a>
              <a
                href="#"
                aria-label="Télécharger dans l'App Store"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-left transition-colors hover:bg-white/10"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Apple className="h-4 w-4" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider text-white/70">
                    {t("cta.downloadOn")}
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {t("cta.appStore")}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* QR card */}
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-2xl border border-white/15 bg-white/5  shadow-xl">
              <div className="rounded-xl bg-white p-3">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                    "https://colisgo.example.com/app"
                  )}`}
                  alt={t("cta.qrAlt")}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
