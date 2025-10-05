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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const profiles = [
  {
    id: "particulier-expedie",
    title: "Particulier qui expédie",
    icon: Package,
    color: "from-blue-500 to-blue-600",
    steps: [
      {
        icon: Edit3,
        title: "Créez votre annonce",
        description:
          "Décrivez votre colis : origine, destination, poids, dimensions et valeur.",
      },
      {
        icon: Users,
        title: "Recevez des propositions",
        description:
          "Les voyageurs disponibles vous proposent leurs services avec leurs tarifs.",
      },
      {
        icon: CreditCard,
        title: "Payez en sécurité",
        description:
          "Choisissez votre transporteur et payez via notre plateforme sécurisée.",
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
    color: "from-green-500 to-green-600",
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
    color: "from-orange-500 to-orange-600",
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
    color: "from-purple-500 to-purple-600",
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
  const [activeProfile, setActiveProfile] = useState(0);

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

      {/* Profile Selection */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre profil
            </h2>
            <p className="text-gray-600 text-lg">
              Chaque utilisateur a sa propre façon d'utiliser ColisGo
            </p>
          </div>

          {/* Profile Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {profiles.map((profile, index) => (
              <button
                key={profile.id}
                onClick={() => setActiveProfile(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeProfile === index
                    ? `bg-gradient-to-r ${profile.color} text-white shadow-lg transform scale-105`
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    activeProfile === index ? "bg-white/20" : "bg-gray-100"
                  }`}
                >
                  <profile.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold">{profile.title}</span>
              </button>
            ))}
          </div>

          {/* Active Profile Steps */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {profiles[activeProfile].title}
              </h3>
              <p className="text-gray-600">
                Voici comment procéder étape par étape
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {profiles[activeProfile].steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${profiles[activeProfile].color} flex items-center justify-center text-white font-bold`}
                    >
                      {index + 1}
                    </div>
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${profiles[activeProfile].color} text-white`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir ColisGo ?
            </h2>
            <p className="text-gray-600 text-lg">
              Les avantages de la livraison collaborative
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui font confiance à ColisGo
            pour leurs envois quotidiens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Envoyer un colis
            </Button>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Devenir transporteur
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommentCaMarche;
