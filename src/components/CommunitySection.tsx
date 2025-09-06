import { Users, Star, Trophy, Target, Globe, Heart } from "lucide-react";

const roles = [
  {
    icon: Users,
    title: "Expéditeur",
    description: "Envoyez vos colis facilement",
    badge: "🚀 Débutant",
    points: "+10 points",
    color: "primary"
  },
  {
    icon: Globe,
    title: "Voyageur",
    description: "Monétisez vos déplacements",
    badge: "✈️ Explorateur",
    points: "+25 points",
    color: "secondary"
  },
  {
    icon: Heart,
    title: "Récepteur",
    description: "Recevez vos colis en main propre",
    badge: "📦 Destinataire",
    points: "+5 points",
    color: "primary"
  }
];

const badges = [
  {
    icon: Star,
    title: "Voyageur de confiance",
    description: "Plus de 10 livraisons réussies",
    rarity: "Commun",
    color: "bg-yellow-500"
  },
  {
    icon: Trophy,
    title: "Super transporteur",
    description: "Plus de 50 livraisons parfaites",
    rarity: "Rare",
    color: "bg-orange-500"
  },
  {
    icon: Target,
    title: "Maître logisticien",
    description: "Plus de 100 livraisons excellentes",
    rarity: "Légendaire",
    color: "bg-purple-500"
  }
];

const stats = [
  { label: "Membres actifs", value: "10,247", icon: Users },
  { label: "Colis livrés", value: "52,891", icon: Globe },
  { label: "Villes couvertes", value: "1,250", icon: Target },
  { label: "Satisfaction", value: "4.9/5", icon: Star }
];

const CommunitySection = () => {
  return (
    <section id="communaute" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Rejoignez la communauté ColisGo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chacun peut être acteur du réseau : expéditeur, voyageur ou récepteur. Une communauté unie par la confiance.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roles */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 card-elevation hover-lift transition-smooth text-center h-full animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {role.points}
                    </div>
                  </div>

                  <div className="space-y-4 mt-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${role.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">
                      {role.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {role.description}
                    </p>

                    <div className="inline-block bg-muted rounded-full px-4 py-2 text-sm font-medium text-muted-foreground">
                      {role.badge}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gamification */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Système de récompenses & badges
            </h3>
            <p className="text-lg text-muted-foreground">
              Gagnez des badges exclusifs et montez en grade dans la communauté
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 card-elevation text-center hover-lift transition-smooth">
                  <div className="relative inline-block mb-4">
                    <div className={`w-16 h-16 ${badge.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-foreground mb-2">
                    {badge.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {badge.description}
                  </p>

                  <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                    badge.rarity === 'Commun' ? 'bg-green-100 text-green-800' :
                    badge.rarity === 'Rare' ? 'bg-orange-100 text-orange-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {badge.rarity}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-card rounded-2xl px-8 py-4 card-elevation">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Niveau 5</span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">1,247 points</span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-foreground">3 badges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;