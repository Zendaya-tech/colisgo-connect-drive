import { Button } from "@/components/ui/button";
import { Download, Package, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12  rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img className="w-12 h-12 text-white" src="/logo.png" />
          </div>
          <span className="text-2xl font-bold font-space bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            ColisGo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/particulier"
            className="text-slate-600 hover:text-orange-500 font-medium transition-colors duration-300 relative group"
          >
            {t("header.particuliers")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/transporteur"
            className="text-slate-600 hover:text-orange-500 font-medium transition-colors duration-300 relative group"
          >
            {t("header.transporteurs")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/comment-ca-marche"
            className="text-slate-600 hover:text-orange-500 font-medium transition-colors duration-300 relative group"
          >
            {t("header.howItWorks")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="text-slate-600 hover:text-orange-500 font-medium transition-colors duration-300 relative group"
          >
            {t("header.contact")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Language Selector */}
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm rounded-lg px-3 py-2 border border-slate-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          >
            <option value="fr">🇫🇷 FR</option>
            <option value="en">🇬🇧 EN</option>
          </select>

          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
            <Download className="w-4 h-4 mr-2" />
            {t("header.download")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors duration-300"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-slate-600" />
          ) : (
            <Menu className="w-6 h-6 text-slate-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link
              to="/particulier"
              className="block text-slate-600 hover:text-orange-500 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.particuliers")}
            </Link>
            <Link
              to="/transporteur"
              className="block text-slate-600 hover:text-orange-500 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.transporteurs")}
            </Link>
            <Link
              to="/comment-ca-marche"
              className="block text-slate-600 hover:text-orange-500 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.howItWorks")}
            </Link>
            <Link
              to="/contact"
              className="block text-slate-600 hover:text-orange-500 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.contact")}
            </Link>
            <div className="pt-4 border-t border-slate-200 space-y-3">
              {/* Mobile Language Selector */}
              <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full bg-slate-50 text-slate-600 text-sm rounded-lg px-3 py-2 border border-slate-200"
              >
                <option value="fr">🇫🇷 Français</option>
                <option value="en">🇬🇧 English</option>
              </select>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl">
                <Download className="w-4 h-4 mr-2" />
                {t("header.download")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
