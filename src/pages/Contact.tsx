import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import deliveryImg from "@/assets/hero-delivery.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

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