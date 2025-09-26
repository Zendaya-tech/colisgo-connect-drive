import { Smartphone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ColisGo</span>
            </div>
            <p className="text-black/80 text-sm">
              La première application de livraison collaborative qui connecte les expéditeurs,
              voyageurs et destinataires.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#fonctionnement" className="text-foreground/80 hover:text-black transition-smooth">Fonctionnement</a></li>
              <li><a href="#avantages" className="text-foreground/80 hover:text-black transition-smooth">Avantages</a></li>
              <li><a href="#temoignages" className="text-foreground/80 hover:text-black transition-smooth">Témoignages</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-black/80 hover:text-black transition-smooth">Centre d'aide</a></li>
              <li><a href="#" className="text-black/80 hover:text-black transition-smooth">FAQ</a></li>
              <li><a href="#" className="text-black/80 hover:text-black transition-smooth">Contact</a></li>
              <li><a href="#" className="text-black/80 hover:text-black transition-smooth">Conditions générales</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-black/80">
                <Mail className="w-4 h-4" />
                <span>contact@colisgo.com</span>
              </div>
              <div className="flex items-center space-x-2 text-black/80">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center space-x-2 text-black/80">
                <Clock className="w-4 h-4" />
                <span>Support 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-black/60 text-sm">
            © 2024 ColisGo. Tous droits réservés. Révolutionnons ensemble la livraison collaborative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;