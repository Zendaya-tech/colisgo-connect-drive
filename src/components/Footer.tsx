import { Smartphone, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-extrabold">ColisGo</span>
            </div>
            <p className="text-white/70 text-sm">
              La livraison collaborative simple, économique et sécurisée.
            </p>
          </div>

          {/* A propos */}
          <div>
            <h4 className="font-semibold mb-4">A propos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/#faq" className="hover:text-white">FAQ</a></li>
              <li><Link to="/qui-sommes-nous" className="hover:text-white">Qui sommes-nous ?</Link></li>
              <li><Link to="/contact" className="hover:text-white">Nous contacter</Link></li>
              <li><a href="/#temoignages" className="hover:text-white">Témoignages</a></li>
            </ul>
          </div>

          {/* Conseils pratiques */}
          <div>
            <h4 className="font-semibold mb-4">Conseils pratiques</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/comment-ca-marche" className="hover:text-white">Comment ça marche ?</Link></li>
              <li><a href="/#fonctionnement" className="hover:text-white">Fonctionnement</a></li>
              <li><a href="/#avantages" className="hover:text-white">Avantages</a></li>
              <li><a href="/#faq" className="hover:text-white">Questions fréquentes</a></li>
            </ul>
          </div>

          {/* Plus d'infos */}
          <div>
            <h4 className="font-semibold mb-4">Plus d'infos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/particulier" className="hover:text-white">Pour les particuliers</Link></li>
              <li><Link to="/transporteur" className="hover:text-white">Pour les transporteurs</Link></li>
              <li><Link to="/" className="hover:text-white">Accueil</Link></li>
            </ul>
          </div>

          {/* App / Social / Language */}
          <div>
            <h4 className="font-semibold mb-4">Application mobile</h4>
            <div className="flex gap-3">
              <a href="#" className="px-3 py-2 rounded-lg bg-white text-black text-xs font-semibold">App Store</a>
              <a href="#" className="px-3 py-2 rounded-lg bg-white text-black text-xs font-semibold">Google Play</a>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Nous suivre</h5>
              <div className="flex items-center gap-4 text-white/80">
                <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
                <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
                <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="w-5 h-5" /></a>
                <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Langue</h5>
              <select className="w-full bg-white/10 text-white/90 text-sm rounded-lg px-3 py-2 border border-white/20">
                <option value="fr">FR Français</option>
                <option value="en">EN English</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white/70 text-sm space-y-1 max-w-xl">
              <p>Copyright ColisGo {new Date().getFullYear()}. Tous droits réservés.</p>
              <p className="text-white/60">ColisGo est enregistré à l'ORIAS sous le numéro 20002332.</p>
              <p className="text-white/60">ColisGo est noté 4,7/5 avec 19 649 avis.</p>
            </div>
            <nav className="text-sm">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/80">
                <li><Link to="/cgu" className="hover:text-white">CGU</Link></li>
                <li><a href="#" className="hover:text-white">Charte de confidentialité</a></li>
                <li><a href="#" className="hover:text-white">*Conditions de l'offre</a></li>
                <li><Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;