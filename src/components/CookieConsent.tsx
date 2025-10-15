import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const hasAcceptedCookies = localStorage.getItem("colisgo-cookies-accepted");

    if (!hasAcceptedCookies) {
      // Délai pour l'animation d'entrée
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("colisgo-cookies-accepted", "true");
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleDecline = () => {
    localStorage.setItem("colisgo-cookies-accepted", "declined");
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Cookie Consent Popup */}
      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
        <div
          className={`bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 max-w-md w-full pointer-events-auto transform transition-all duration-500 ease-out ${
            isAnimating
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-full opacity-0 scale-95"
          }`}
        >
          {/* Header avec icône */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Cookie className="w-5 h-5 text-orange-600 cookie-icon-bounce" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800">
                {t("cookies.title")}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {t("cookies.description")}{" "}
            <Link
              to="/politique-confidentialite"
              className="text-orange-600 hover:text-orange-700 underline underline-offset-2 font-medium"
            >
              {t("cookies.privacyPolicy")}
            </Link>
            .
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAccept}
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t("cookies.accept")}
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl transition-all duration-300"
            >
              {t("cookies.decline")}
            </Button>
          </div>

          {/* Note légale */}
          <p className="text-xs text-slate-500 mt-4 text-center">
            {t("cookies.legalNote")}
          </p>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
