import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/car.png')]   bg-cover bg-center" >
      <div className="absolute z-0 inset-0 bg-blue-300/50 pointer-events-none" />
      <div className="container mx-auto px-4 pt-32 pb-20 z-10 relative">
        <div className="flex flex-col  justify-center">
          <div className="space-y-8 animate-fade-in flex flex-col  justify-center">
            <div className="space-y-4 flex flex-col  justify-center">
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Envoyez.{" "}
                <span className="text-primary">Voyagez.</span>{" "}
                <span className="text-white">Recevez.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-200">
                En toute confiance.
              </h2>
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="sm" className="hero-shadow ">
                <Download className="w-5 h-5" />
                Télécharger l'app
              </Button>
              <Button variant="outline" size="lg" className="transition-smooth hover-lift px-8 py-6 text-lg">
                <PlayCircle className="w-5 h-5" />
                Voir la démo
              </Button>
            </div>

            {/* <div className="flex items-center space-x-6 pt-4">
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
            </div> */}
          </div>

          {/* <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[420px] md:w-[520px]">
              <img
                src={"/hero.png"}
                alt="ColisGo - Livraison collaborative"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full opacity-90 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-90 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;