import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";

const HeroSection = () => {
  return (
    <section className="pt-40 h-[800px] max-h-[90vh] pb-16 ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Envoyez.{" "}
                <span className="text-primary">Voyagez.</span>{" "}
                <span className="text-white">Recevez.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-200">
                En toute confiance.
              </h2>
            </div>

            <p className="text-lg text-gray-100 max-w-lg">
              La première application de livraison collaborative qui connecte les expéditeurs,
              les voyageurs et les destinataires pour des envois rapides, sécurisés et économiques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="hero-shadow">
                <Download className="w-5 h-5" />
                Télécharger l'app
              </Button>
              <Button variant="outline" size="lg" className="transition-smooth hover-lift">
                <PlayCircle className="w-5 h-5" />
                Voir la démo
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Utilisateurs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Colis livrés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative ">
            <div className="relative w-96">
              <img
                src={"/hero.png"}
                alt="ColisGo - Livraison collaborative"
                className="w-full h-auto rounded-2xlanimate-float"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;