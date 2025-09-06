import { Check, X, Clock, Euro, Shield, Zap } from "lucide-react";

const comparisonFeatures = [
  {
    feature: "Temps de livraison",
    colisgo: "1-3 jours",
    traditional: "3-7 jours",
    icon: Clock
  },
  {
    feature: "Prix moyen",
    colisgo: "30-50% moins cher",
    traditional: "Prix standard élevé",
    icon: Euro
  },
  {
    feature: "Suivi en temps réel",
    colisgo: true,
    traditional: false,
    icon: Shield
  },
  {
    feature: "Contact direct",
    colisgo: true,
    traditional: false,
    icon: Zap
  },
  {
    feature: "Flexibilité horaire",
    colisgo: true,
    traditional: false,
    icon: Clock
  },
  {
    feature: "Impact écologique",
    colisgo: "Optimisé (trajets existants)",
    traditional: "Transport dédié",
    icon: Shield
  }
];

const ComparisonSection = () => {
  return (
    <section id="comparaison" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Pourquoi choisir ColisGo ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les avantages de notre solution collaborative face aux méthodes traditionnelles
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl p-8 card-elevation overflow-hidden">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-muted-foreground">Critères</h3>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-2xl px-6 py-3">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                  <h3 className="text-lg font-bold text-primary">ColisGo</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-muted rounded-2xl px-6 py-3">
                  <div className="w-6 h-6 bg-muted-foreground rounded-full"></div>
                  <h3 className="text-lg font-semibold text-muted-foreground">Traditionnel</h3>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {comparisonFeatures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="grid grid-cols-3 gap-4 items-center py-4 border-b border-border/50 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-medium text-foreground">{item.feature}</span>
                    </div>
                    
                    <div className="text-center">
                      {typeof item.colisgo === 'boolean' ? (
                        item.colisgo ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full">
                            <Check className="w-5 h-5 text-primary" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-destructive/20 rounded-full">
                            <X className="w-5 h-5 text-destructive" />
                          </div>
                        )
                      ) : (
                        <span className="text-primary font-semibold bg-primary/10 rounded-lg px-3 py-1">
                          {item.colisgo}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-center">
                      {typeof item.traditional === 'boolean' ? (
                        item.traditional ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full">
                            <Check className="w-5 h-5 text-primary" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-destructive/20 rounded-full">
                            <X className="w-5 h-5 text-destructive" />
                          </div>
                        )
                      ) : (
                        <span className="text-muted-foreground bg-muted rounded-lg px-3 py-1">
                          {item.traditional}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-8 py-4">
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold">
              Rejoignez la révolution de la livraison collaborative
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;