import { ArrowRight } from "lucide-react";
import iconSender from "@/assets/icon-sender.jpg";
import iconTraveler from "@/assets/icon-traveler.jpg";
import iconReceiver from "@/assets/icon-receiver.jpg";

const steps = [
  {
    id: 1,
    title: "Expéditeur",
    subtitle: "Publie sa demande",
    description: "Décrivez votre colis et choisissez votre destination. Notre communauté de voyageurs se charge du reste.",
    icon: iconSender,
    color: "primary"
  },
  {
    id: 2,
    title: "Voyageur", 
    subtitle: "Accepte la mission",
    description: "Les voyageurs consultent les demandes sur leur trajet et proposent leurs services pour gagner de l'argent.",
    icon: iconTraveler,
    color: "secondary"
  },
  {
    id: 3,
    title: "Récepteur",
    subtitle: "Reçoit son colis",
    description: "Suivez votre colis en temps réel et recevez-le directement des mains du voyageur. Simple et sécurisé.",
    icon: iconReceiver,
    color: "primary"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="fonctionnement" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple en 3 étapes qui révolutionne la façon d'envoyer et recevoir vos colis
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="bg-card rounded-2xl p-8 card-elevation hover-lift transition-smooth text-center h-full">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={step.icon} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white ${step.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}>
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {step.subtitle}
                </p>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-primary rounded-full p-2">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold">
              Processus 100% sécurisé avec suivi en temps réel
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;