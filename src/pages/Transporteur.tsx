import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecuritySection from "@/components/SecuritySection";
import FeaturesSection from "@/components/FeaturesSection";
import FaqSection from "@/components/FaqSection";
import { Truck, MapPin, Euro, Clock, Shield, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const transporterSteps = [
  {
    step: "1",
    title: "Inscrivez-vous",
    description: "Créez votre profil transporteur en quelques minutes",
    icon: Users,
    details: [
      "Vérification d'identité rapide",
      "Renseignez vos trajets habituels",
      "Définissez vos disponibilités"
    ]
  },
  {
    step: "2",
    title: "Recevez des propositions",
    description: "Notre algorithme vous propose des colis sur vos parcours",
    icon: MapPin,
    details: [
      "Colis adaptés à vos trajets",
      "Tarifs attractifs proposés",
      "Flexibilité totale d'acceptation"
    ]
  },
  {
    step: "3",
    title: "Transportez & Gagnez",
    description: "Récupérez, transportez et livrez en toute sécurité",
    icon: Euro,
    details: [
      "Codes sécurisés pour chaque échange",
      "Suivi GPS automatique",
      "Paiement immédiat après livraison"
    ]
  }
];

const transporterBenefits = [
  {
    icon: Euro,
    title: "Revenus Supplémentaires",
    description: "Rentabilisez vos déplacements existants",
    value: "30-80€",
    subtitle: "par trajet en moyenne"
  },
  {
    icon: Clock,
    title: "Flexibilité Totale",
    description: "Choisissez quand et où vous transportez",
    value: "100%",
    subtitle: "liberté de choix"
  },
  {
    icon: Shield,
    title: "Protection Complète",
    description: "Assurance et assistance 24/7",
    value: "24/7",
    subtitle: "support disponible"
  },
  {
    icon: Star,
    title: "Communauté",
    description: "Rejoignez un réseau de transporteurs fiables",
    value: "4.8/5",
    subtitle: "satisfaction moyenne"
  }
];

const Transporteur = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Espace Transporteur</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Transformez vos trajets en
              <span className="text-primary block">revenus supplémentaires</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Rejoignez la communauté ColisGo et monétisez vos déplacements quotidiens. 
              Simple, flexible et sécurisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="default" size="lg" className="text-lg px-8 py-4">
                <Truck className="w-5 h-5 mr-2" />
                Devenir Transporteur
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Voir les Tarifs
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {transporterBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 text-center card-elevation">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{benefit.value}</div>
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
              Comment devenir transporteur ColisGo ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              En 3 étapes simples, commencez à gagner de l'argent avec vos trajets
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {transporterSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-card rounded-2xl p-8 card-elevation h-full">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10">
                          <Icon className="w-6 h-6 text-secondary" />
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
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {index < transporterSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary" />
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

export default Transporteur;