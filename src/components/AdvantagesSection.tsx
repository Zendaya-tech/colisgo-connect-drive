import { Shield, Zap, TrendingUp, MapPin, Users, Star } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Simplicité",
    description: "Interface intuitive et processus simplifié. Envoyez un colis en moins de 2 minutes.",
    color: "primary"
  },
  {
    icon: MapPin,
    title: "Suivi en temps réel",
    description: "Suivez votre colis à chaque étape de son voyage grâce à notre géolocalisation avancée.",
    color: "secondary"
  },
  {
    icon: Shield,
    title: "Confiance totale",
    description: "Système de vérification des voyageurs, assurance incluse et service client 24/7.",
    color: "primary"
  }
];

const features = [
  {
    icon: Users,
    title: "Communauté active",
    stat: "10K+ membres",
    description: "Une communauté grandissante de voyageurs de confiance"
  },
  {
    icon: TrendingUp,
    title: "Croissance organique",
    stat: "300% par mois",
    description: "Les récepteurs deviennent expéditeurs, créant un écosystème viral"
  },
  {
    icon: Star,
    title: "Gamification",
    stat: "Points & badges",
    description: "Système de récompenses qui encourage l'engagement"
  }
];

const AdvantagesSection = () => {
  return (
    <section id="avantages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Pourquoi choisir ColisGo ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expérience révolutionnaire qui transforme chaque utilisateur en ambassadeur
          </p>
        </div>
        
        {/* Main Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${advantage.color === 'primary' ? 'bg-primary' : 'bg-secondary'} card-elevation`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Special Features */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              L'effet réseau ColisGo
            </h3>
            <p className="text-lg text-muted-foreground">
              Notre modèle unique transforme chaque livraison en opportunité de croissance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 card-elevation hover-lift transition-smooth text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {feature.stat}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;