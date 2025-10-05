import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import deliveryImg from "@/assets/hero-delivery.jpg";
import { Download, PlayCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden bg-[url('/contact_hero.png')]   bg-cover bg-center">
        <div className="absolute z-0 inset-0 bg-blue-300/50 pointer-events-none" />
        <div className="container mx-auto px-4 pt-32 pb-20 z-10 relative">
          <div className="flex flex-col  justify-center">
            <div className="space-y-8 animate-fade-in flex flex-col  justify-center">
              <div className="space-y-4 flex flex-col  justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
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
                <Button variant="outline" size="sm" className="">
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
                  Vous avez une question sur le fonctionnement de ColisGo ?
                  Notre FAQ est là pour ça ! Que ce soit pour le paiement,
                  l’assurance ou d'autres infos utiles, elle répond aux
                  questions les plus posées par nos utilisateurs.
                </p>
                <p>
                  Mot de passe oublié ? Pas de panique, vous pouvez le
                  réinitialiser ici :
                  <span className="ml-1 font-semibold text-foreground underline underline-offset-4">
                    Réinitialiser mon mot de passe
                  </span>
                  .
                </p>
              </div>
              <Button className="mt-6">Consultez la FAQ ColisGo</Button>
            </div>
            <div className="relative">
              <img
                src={deliveryImg}
                alt="FAQ ColisGo"
                className="w-full h-[360px] md:h-[420px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 2: Contactez notre équipe support */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={deliveryImg}
                alt="Support ColisGo"
                className="w-full h-[360px] md:h-[420px] object-cover rounded-3xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Contactez notre
                <br /> équipe support
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Un problème que vous ne pouvez pas résoudre ? Envoyez‑nous un
                  mail à
                  <a
                    href="mailto:contact@colisgo.com"
                    className="ml-1 font-semibold text-foreground underline underline-offset-4"
                  >
                    contact@colisgo.com
                  </a>
                  , notre équipe se fera un plaisir de vous aider !
                </p>
                <p>
                  Nous répondons dans les 24h (sauf weekends et jours fériés).
                </p>
                <p>
                  Notre support est basé en France, disponible du lundi au
                  vendredi de 9h30 à 17h30. Chez ColisGo, pas de robots, que des
                  vrais humains !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Une question spécifique ?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Remplissez le formulaire ci-contre et notre équipe vous
                  répondra dans les plus brefs délais.
                </p>
                <p>
                  Tous les champs marqués d'un astérisque (*) sont obligatoires.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    Réponse sous 24h
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    Support en français
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    Équipe basée en France
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="prenom"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Décrivez votre demande ou votre problème..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Envoyer le message
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  En envoyant ce formulaire, vous acceptez que vos données
                  soient utilisées pour vous recontacter dans le cadre de votre
                  demande.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
