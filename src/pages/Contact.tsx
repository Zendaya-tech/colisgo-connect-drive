import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import deliveryImg from "@/assets/hero-delivery.jpg";
import { Download, PlayCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden bg-[url('/car.png')]   bg-cover bg-center" >
        <div className="absolute z-0 inset-0 bg-blue-300/50 pointer-events-none" />
        <div className="container mx-auto px-4 pt-32 pb-20 z-10 relative">
          <div className="flex flex-col  justify-center">
            <div className="space-y-8 animate-fade-in flex flex-col  justify-center">
              <div className="space-y-4 flex flex-col  justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Envoyez.{" "}
                  <span className="text-primary">Le Support</span>{" "}
                  <span className="text-white">Qui fait sourire</span>
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

      {/* Bloc 1: Avant tout, consultez notre FAQ */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Avant tout,
                <br /> consultez notre FAQ
              </h1>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Vous avez une question sur le fonctionnement de ColisGo ? Notre FAQ est là pour ça ! Que ce soit pour le paiement, l’assurance ou d'autres infos utiles, elle répond aux questions les plus posées par nos utilisateurs.
                </p>
                <p>
                  Mot de passe oublié ? Pas de panique, vous pouvez le réinitialiser ici :
                  <span className="ml-1 font-semibold text-foreground underline underline-offset-4">Réinitialiser mon mot de passe</span>.
                </p>
              </div>
              <Button className="mt-6">Consultez la FAQ ColisGo</Button>
            </div>
            <div className="relative">
              <img src={deliveryImg} alt="FAQ ColisGo" className="w-full h-[360px] md:h-[420px] object-cover rounded-3xl" />
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl px-5 py-3 shadow-lg">
                <span className="text-2xl">🙂</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 2: Contactez notre équipe support */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={deliveryImg} alt="Support ColisGo" className="w-full h-[360px] md:h-[420px] object-cover rounded-3xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Contactez notre
                <br /> équipe support
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Un problème que vous ne pouvez pas résoudre ? Envoyez‑nous un mail à
                  <a href="mailto:contact@colisgo.com" className="ml-1 font-semibold text-foreground underline underline-offset-4">contact@colisgo.com</a>
                  , notre équipe se fera un plaisir de vous aider !
                </p>
                <p>
                  Nous répondons dans les 24h (sauf weekends et jours fériés).
                </p>
                <p>
                  Notre support est basé en France, disponible du lundi au vendredi de 9h30 à 17h30. Chez ColisGo, pas de robots, que des vrais humains !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;