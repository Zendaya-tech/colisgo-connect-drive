import { Link, Bell, Users, Zap, Smartphone, Globe } from "lucide-react";

const features = [
  {
    icon: Link,
    title: "Deep Link Intelligent",
    description:
      "Liens sécurisés qui s'adaptent à votre appareil et vous dirigent directement vers l'action à effectuer",
    highlight: "Innovation",
  },
  {
    icon: Bell,
    title: "Notifications Push & SMS",
    description:
      "Restez informé à chaque étape : prise en charge, transit, arrivée et livraison confirmée",
    highlight: "Temps réel",
  },
  {
    icon: Users,
    title: "Conversion Automatique",
    description:
      "Les récepteurs deviennent naturellement expéditeurs, créant un cercle vertueux d'engagement",
    highlight: "Viral",
  },
  {
    icon: Smartphone,
    title: "Application Mobile Native",
    description:
      "Interface optimisée iOS et Android avec géolocalisation précise et notifications intelligentes",
    highlight: "Performance",
  },
  {
    icon: Globe,
    title: "Réseau International",
    description:
      "Couverture dollarpéenne avec expansion mondiale prévue, connectant les voyageurs du monde entier",
    highlight: "Expansion",
  },
  {
    icon: Zap,
    title: "IA Prédictive",
    description:
      "Algorithme intelligent qui prédit les meilleurs voyageurs selon votre trajet et vos préférences",
    highlight: "Futur",
  },
];

const FeaturesSection = () => {
  return (
    <section id="fonctionnalites" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fonctionnalités révolutionnaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une technologie de pointe au service d'une expérience utilisateur
            exceptionnelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative">
                <div
                  className="bg-card rounded-2xl p-6 card-elevation hover-lift transition-smooth h-full animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Highlight badge */}
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {feature.highlight}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à révolutionner vos envois ?
            </h3>
            <p className="text-lg mb-8 text-white/90">
              Rejoignez les milliers d'utilisateurs qui ont déjà adopté ColisGo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 rounded-2xl px-6 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  10,000+ utilisateurs actifs
                </span>
              </div>
              <div className="bg-white/20 rounded-2xl px-6 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  50,000+ colis livrés
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
