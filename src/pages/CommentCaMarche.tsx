import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Package,
  Users,
  MapPin,
  Shield,
  Clock,
  CreditCard,
  Car,
  Truck,
  Building2,
  Edit3,
  Search,
  CheckCircle,
  Smartphone,
  DollarSign as Dollar,
  PlayCircle,
  Download,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const profiles = [
  {
    id: "particulier-expedie",
    title: "Particulier qui expédie",
    icon: Package,
    color: "blue",
    steps: [
      {
        icon: Edit3,
        title: "Créez votre annonce",
        description:
          "Décrivez votre colis : origine, destination, poids, dimensions et proposez un prix.",
      },
      {
        icon: Users,
        title: "transporteur intéressés",
        description: "Les transporteurs manifestent leur intéret",
      },
      {
        icon: CreditCard,
        title: "Payez en sécurité",
        description: "payez via notre plateforme sécurisée.",
      },
      {
        icon: MapPin,
        title: "Suivez votre colis",
        description: "Suivi GPS en temps réel jusqu'à la livraison confirmée.",
      },
    ],
  },
  {
    id: "particulier-transporte",
    title: "Particulier qui transporte",
    icon: Car,
    color: "orange",
    steps: [
      {
        icon: Search,
        title: "Trouvez des annonces",
        description:
          "Consultez les demandes d'envoi sur vos trajets habituels.",
      },
      {
        icon: CheckCircle,
        title: "Acceptez une mission",
        description:
          "Proposez vos services avec votre tarif et vos disponibilités.",
      },
      {
        icon: Package,
        title: "Récupérez le colis",
        description: "Rendez-vous au point de départ pour récupérer le colis.",
      },
      {
        icon: MapPin,
        title: "Livrez et gagnez",
        description:
          "Effectuez la livraison et recevez votre paiement automatiquement.",
      },
    ],
  },
  {
    id: "transporteur-pro",
    title: "Transporteur professionnel",
    icon: Truck,
    color: "blue",
    steps: [
      {
        icon: Building2,
        title: "Créez votre profil pro",
        description:
          "Renseignez vos licences, véhicules et zones de couverture.",
      },
      {
        icon: Search,
        title: "Accédez aux demandes",
        description:
          "Consultez une base élargie de clients professionnels et particuliers.",
      },
      {
        icon: Users,
        title: "Optimisez vos tournées",
        description:
          "Remplissez vos trajets disponibles avec des envois rentables.",
      },
      {
        icon: Dollar,
        title: "Développez votre activité",
        description:
          "Augmentez vos revenus avec des outils de gestion adaptés.",
      },
    ],
  },
  {
    id: "entreprise",
    title: "Entreprise qui expédie",
    icon: Building2,
    color: "orange",
    steps: [
      {
        icon: Building2,
        title: "Compte entreprise",
        description:
          "Créez votre compte professionnel avec facturation dédiée.",
      },
      {
        icon: Package,
        title: "Envois en volume",
        description:
          "Publiez plusieurs envois simultanément avec tarifs négociés.",
      },
      {
        icon: Users,
        title: "Réseau de transporteurs",
        description:
          "Accédez à notre réseau de transporteurs vérifiés et fiables.",
      },
      {
        icon: Smartphone,
        title: "Suivi centralisé",
        description:
          "Tableau de bord pour suivre tous vos envois en temps réel.",
      },
    ],
  },
];

const features = [
  {
    icon: Shield,
    title: "100% Sécurisé",
    description: "Vérification d'identité et assurance incluse",
  },
  {
    icon: Clock,
    title: "Rapide",
    description: "Livraison plus rapide que les transporteurs classiques",
  },
  {
    icon: CreditCard,
    title: "Économique",
    description: "Jusqu'à 70% moins cher que la concurrence",
  },
];

const CommentCaMarche = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-900">
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comment ça marche ?
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Découvrez comment ColisGo révolutionne la livraison collaborative
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Download className="w-5 h-5 mr-2" />
                Télécharger l'app
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Voir la démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Particulier qui expédie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Particulier qui expédie
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Envoyez vos colis en toute simplicité
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {profiles[0].steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {index + 1}
                    </div>
                    <step.icon className="w-5 h-5 text-blue-900" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Particulier qui transporte */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Particulier qui transporte
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Gagnez de l'argent sur vos trajets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {profiles[1].steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {index + 1}
                    </div>
                    <step.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transporteur professionnel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Transporteur professionnel
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Développez votre activité de transport
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {profiles[2].steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {index + 1}
                    </div>
                    <step.icon className="w-5 h-5 text-blue-900" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entreprise qui expédie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Entreprise qui expédie
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Solutions logistiques pour entreprises
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {profiles[3].steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {index + 1}
                    </div>
                    <step.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir ColisGo ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les avantages de la livraison collaborative
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center border border-gray-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center text-white">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-blue-100 mb-8">
              Rejoignez des milliers d'utilisateurs qui font confiance à ColisGo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Package className="w-5 h-5 mr-2" />
                Envoyer un colis
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Car className="w-5 h-5 mr-2" />
                Devenir transporteur
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommentCaMarche;
