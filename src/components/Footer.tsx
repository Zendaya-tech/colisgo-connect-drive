import {
  Package,
  Mail,
  Phone,
  MapPin,
  Download,
  Apple,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Top grid */}
        <div className="grid gap-10 lg:grid-cols-5 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-extrabold font-space">
                ColisGo
              </span>
            </div>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              {t("footer.tagline")}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@colisgo.org</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 418 812 9475</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Chicoutimi, Québec</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg font-space">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  to="/particulier"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {t("footer.links.individuals")}
                </Link>
              </li>
              <li>
                <Link
                  to="/transporteur"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {t("footer.links.carriers")}
                </Link>
              </li>
              <li>
                <Link
                  to="/comment-ca-marche"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {t("footer.links.howItWorks")}
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {t("footer.links.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-lg font-space">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  to="/qui-sommes-nous"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {t("footer.links.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {t("footer.links.contact")}
                </Link>
              </li>
              <li>
                <a
                  href="/#temoignages"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {t("footer.links.testimonials")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {t("footer.links.careers")}
                </a>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="font-bold mb-6 text-lg font-space">
              {t("footer.downloadApp")}
            </h4>
            <div className="sm:flex-col flex gap-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 group"
              >
                <img
                  src="./store_logos/appstore.png"
                  className="w-8 h-8 text-white group-hover:text-orange-400 transition-colors"
                />{" "}
                <div>
                  <div className="text-xs text-white/60">
                    {t("footer.downloadOn")}
                  </div>
                  <div className="font-semibold">{t("footer.appStore")}</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 group"
              >
                <img
                  src="./store_logos/play.png"
                  className="w-8 h-8 text-white group-hover:text-orange-400 transition-colors"
                />
                <div>
                  <div className="text-xs text-white/60">
                    {t("footer.availableOn")}
                  </div>
                  <div className="font-semibold">{t("footer.googlePlay")}</div>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">{t("footer.followUs")}</h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61579959190808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/colisgoexpress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/@colisgo-officiel?si=zblwxGH2FAaeUI0f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-white/60 text-sm space-y-2">
              <p className="font-medium">
                © {new Date().getFullYear()} ColisGo.{" "}
                {t("footer.legal.copyright")}
              </p>
            </div>

            <nav className="text-sm">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/70">
                <li>
                  <Link
                    to="/cgu"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    {t("footer.legal.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/politique-confidentialite"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    {t("footer.legal.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mentions-legales"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    {t("footer.legal.legalNotices")}
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    {t("footer.legal.cookies")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
