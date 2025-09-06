import { Shield, Lock, MapPin, Eye, CheckCircle, Clock, Truck, Package } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Vérification des voyageurs",
    description: "Chaque voyageur est vérifié avec pièce d'identité et avis de la communauté",
    color: "primary"
  },
  {
    icon: Lock,
    title: "Codes sécurisés",
    description: "Système de codes uniques pour chaque échange, généré automatiquement",
    color: "secondary"
  },
  {
    icon: Eye,
    title: "Suivi en temps réel",
    description: "Géolocalisation et notifications à chaque étape du transport",
    color: "primary"
  }
];

const trackingSteps = [
  {
    icon: Package,
    title: "Pris en charge",
    description: "Le voyageur confirme la récupération",
    status: "completed",
    color: "primary"
  },
  {
    icon: Truck,
    title: "En transit",
    description: "Suivi GPS en temps réel du parcours",
    status: "active",
    color: "secondary"
  },
  {
    icon: MapPin,
    title: "Arrivé",
    description: "Le voyageur est arrivé à destination",
    status: "pending",
    color: "muted"
  },
  {
    icon: CheckCircle,
    title: "Livré",
    description: "Remise confirmée au destinataire",
    status: "pending",
    color: "muted"
  }
];

const SecuritySection = () => {
  return (
    <section id="securite" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sécurité & Confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Votre tranquillité d'esprit est notre priorité absolue
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color === 'primary' ? 'bg-primary' : 'bg-secondary'} card-elevation`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tracking Timeline */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Suivi détaillé en temps réel
            </h3>
            <p className="text-lg text-muted-foreground">
              Suivez chaque étape de votre envoi avec notre système de codes sécurisés
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-8 left-8 right-8 h-0.5 bg-border hidden md:block">
                <div className="h-full w-1/2 bg-primary"></div>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative">
                      <div className="text-center space-y-4">
                        <div className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl ${
                          step.status === 'completed' ? 'bg-primary' : 
                          step.status === 'active' ? 'bg-secondary' : 'bg-muted'
                        } card-elevation`}>
                          <Icon className={`w-8 h-8 ${
                            step.status === 'completed' || step.status === 'active' ? 'text-white' : 'text-muted-foreground'
                          }`} />
                          {step.status === 'completed' && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                          {step.status === 'active' && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                              <Clock className="w-4 h-4 text-white animate-pulse" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2">
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-card rounded-2xl px-8 py-4 card-elevation">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-foreground font-semibold">
                Code de suivi: #CG2024-8F9K-MX7P
              </span>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;