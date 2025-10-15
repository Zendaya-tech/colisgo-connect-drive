import {
  Globe,
  Package,
  Users,
  Shield,
  Zap,
  DollarSign,
  MapPin,
  CheckCircle,
  Download,
  PlayCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const International = () => {
  const routes = [
    {
      route: "Canada ↔ Europe",
      description: "Liaison régulière entre le Canada et l'Europe",
      frequency: "Quotidienne",
      icon: <MapPin className="w-6 h-6" />,
      color: "orange",
    },
    {
      route: "Canada ↔ Afrique",
      description: "Connexion directe Canada-Afrique",
      frequency: "3x/semaine",
      icon: <MapPin className="w-6 h-6" />,
      color: "blue",
    },
    {
      route: "Europe ↔ Afrique",
      description: "Route Europe-Afrique très fréquentée",
      frequency: "Quotidienne",
      icon: <MapPin className="w-6 h-6" />,
      color: "orange",
    },
  ];

  const destinations = [
    {
      country: "France",
      flag: "🇫🇷",
      code: "FR",
      image: "/flags/france.jpg",
      averagePrice: "25€",
      description: "Paris, Lyon, Marseille",
    },
    {
      country: "Cameroun",
      flag: "🇨🇲",
      code: "CM",
      image: "/flags/cameroon.jpg",
      averagePrice: "35€",
      description: "Douala, Yaoundé",
    },
    {
      country: "RDC",
      flag: "🇨🇩",
      code: "CD",
      image: "/flags/drc.jpg",
      averagePrice: "40€",
      description: "Kinshasa, Lubumbashi",
    },
    {
      country: "Côte d'Ivoire",
      flag: "🇨🇮",
      code: "CI",
      image: "/flags/ivory-coast.jpg",
      averagePrice: "30€",
      description: "Abidjan, Bouaké",
    },
    {
      country: "États-Unis",
      flag: "🇺🇸",
      code: "US",
      image: "/flags/usa.jpg",
      averagePrice: "20€",
      description: "New York, Los Angeles",
    },
    {
      country: "Royaume-Uni",
      flag: "🇬🇧",
      code: "GB",
      image: "/flags/uk.jpg",
      averagePrice: "22€",
      description: "Londres, Manchester",
    },
    {
      country: "Sénégal",
      flag: "🇸🇳",
      code: "SN",
      image: "/flags/senegal.jpg",
      averagePrice: "32€",
      description: "Dakar, Saint-Louis",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      code: "CA",
      image: "/flags/canada.jpg",
      averagePrice: "18€",
      description: "Toronto, Montréal",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Créez votre compte",
      description:
        "Inscrivez-vous sur ColisGo International en quelques minutes",
    },
    {
      number: "2",
      title: "Abonnement annuel",
      description:
        "Souscrivez pour seulement 10$ par an (voyageurs et expéditeurs)",
    },
    {
      number: "3",
      title: "Publiez ou réservez",
      description: "Créez une annonce ou trouvez un voyageur pour votre colis",
    },
    {
      number: "4",
      title: "Payez 5$ par envoi",
      description: "Tarif fixe et transparent pour chaque expédition",
    },
    {
      number: "5",
      title: "Suivez votre colis",
      description: "Traçabilité complète jusqu'à la livraison",
    },
  ];

  const advantages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapidité et flexibilité",
      description: "Expédition selon les horaires des voyageurs",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Économique",
      description: "Moins cher que les transporteurs traditionnels",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurisé",
      description: "Vérification d'identité et plateforme sécurisée",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Écologique",
      description: "Réduction de l'empreinte carbone",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[url('/particulier.png')]   bg-cover bg-center">
        <div className="absolute z-0 inset-0 bg-blue-300/50 pointer-events-none" />
        <div className="container mx-auto px-4 pt-32 pb-20 z-10 relative">
          <div className="flex flex-col  justify-center">
            <div className="space-y-8 animate-fade-in flex flex-col  justify-center">
              <div className="space-y-4 flex flex-col  justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Envoyez. <span className="text-primary">Voyagez.</span>{" "}
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

      {/* Workflow Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment ça fonctionne
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre plateforme met en relation voyageurs et expéditeurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Voyageur
                </h3>
              </div>
              <p className="text-gray-700">
                Créez une annonce de vos kilos disponibles et monétisez votre
                voyage en transportant des colis pour la communauté.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Expéditeur
                </h3>
              </div>
              <p className="text-gray-700">
                Réservez des kilos auprès d'un voyageur et envoyez vos colis à
                prix réduit partout dans le monde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Principales routes disponibles
            </h2>
            <p className="text-gray-600">
              Corridors de transport les plus fréquentés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {routes.map((route, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      route.color === "orange" ? "bg-orange-500" : "bg-blue-900"
                    } text-white`}
                  >
                    {route.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {route.route}
                    </h3>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${
                        route.color === "orange"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {route.frequency}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{route.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-gray-600">Processus simple en 5 étapes</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-900 rounded-lg p-8 text-white text-center  mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              Tarification transparente
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">10$</div>
                <div className="text-lg">Abonnement annuel</div>
                <div className="text-sm opacity-90">
                  Voyageurs et expéditeurs
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">5$</div>
                <div className="text-lg">Par envoi</div>
                <div className="text-sm opacity-90">Montant fixe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir ColisGo International ?
            </h2>
            <p className="text-gray-600">Les avantages de notre service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {advantage.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Destinations populaires
            </h2>
            <p className="text-gray-600">
              Nos principales destinations avec tarifs moyens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-32 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                  <div className="text-6xl">{destination.flag}</div>
                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700">
                      {destination.code}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {destination.country}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Prix moyen</span>
                    <span className="font-bold text-orange-500 text-lg">
                      {destination.averagePrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sécurité et conformité</h2>
            <p className="text-blue-100">Votre sécurité est notre priorité</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">
                Vérification d'identité
              </h3>
              <p className="text-blue-100 text-sm">
                Vérification obligatoire pour tous les membres
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Conformité légale</h3>
              <p className="text-blue-100 text-sm">
                Respect des lois canadiennes et internationales
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Package className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Produits autorisés</h3>
              <p className="text-blue-100 text-sm">
                Liste des produits interdits dans nos{" "}
                <a href="/cgu" className="text-orange-400 underline">
                  CGU
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default International;
