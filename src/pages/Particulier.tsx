import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecuritySection from "@/components/SecuritySection";
import FeaturesSection from "@/components/FeaturesSection";
import FaqSection from "@/components/FaqSection";
import { Package, MapPin, CheckCircle, Clock, Shield, Euro, Users, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const senderSteps = [
  {
    step: "1",
    title: "Publiez votre envoi",
    description: "Décrivez votre colis et sa destination en quelques clics",
    icon: Package,
    details: [
      "Indiquez le poids et les dimensions",
      "Précisez les adresses de départ et d'arrivée",
      "Ajoutez des instructions spéciales si nécessaire"
    ]
  },
  {
    step: "2",
    title: "Choisissez votre transporteur",
    description: "Sélectionnez parmi les voyageurs disponibles sur votre trajet",
    icon: Users,
    details: [
      "Consultez les profils et avis",
      "Comparez les tarifs proposés",
      "Communiquez directement avec le transporteur"
    ]
  },
  {
    step: "3",
    title: "Suivez votre colis",
    description: "Suivi en temps réel jusqu'à la livraison",
    icon: MapPin,
    details: [
      "Géolocalisation GPS en temps réel",
      "Notifications à chaque étape",
      "Confirmation de livraison sécurisée"
    ]
  }
];

const senderBenefits = [
  {
    icon: Euro,
    title: "Économies Garanties",
    description: "Jusqu'à 50% moins cher que la concurrence",
    value: "-50%",
    subtitle: "vs transporteurs classiques"
  },
  {
    icon: Clock,
    title: "Livraison Rapide",
    description: "Des trajets directs pour une livraison plus rapide",
    value: "1-3j",
    subtitle: "délai moyen"
  },
  {
    icon: Shield,
    title: "100% Sécurisé",
    description: "Assurance et codes de sécurité inclus",
    value: "100%",
    subtitle: "des envois assurés"
  },
  {
    icon: Smartphone,
    title: "Suivi Live",
    description: "Géolocalisation en temps réel",
    value: "24/7",
    subtitle: "suivi disponible"
  }
];

const Particulier = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2">
              <Package className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">Espace Particulier</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Envoyez vos colis
              <span className="text-secondary block">en toute simplicité</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez une nouvelle façon d'envoyer vos colis : plus rapide, moins cher 
              et plus humain grâce à notre réseau de transporteurs vérifiés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                <Package className="w-5 h-5 mr-2" />
                Envoyer un Colis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Calculer le Prix
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {senderBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 text-center card-elevation">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-1">{benefit.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{benefit.subtitle}</div>
                  <h3 className="font-semibold text-foreground text-sm">{benefit.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comment envoyer avec ColisGo ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              En 3 étapes simples, votre colis est entre de bonnes mains
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {senderSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-card rounded-2xl p-8 card-elevation h-full">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {index < senderSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-secondary" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SecuritySection />
      <FeaturesSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Particulier;