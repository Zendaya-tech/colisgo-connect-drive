import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <section id="fonctionnement" className="py-20 bg-[#f5f5ff] ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left: textual steps */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                Créez une demande de transport
              </h3>
              <p className="mt-3 text-muted-foreground">
                Renseignez les caractéristiques du colis à envoyer (description, dimensions et poids). Ajoutez une photo et validez le prix.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                Validez votre réservation
              </h3>
              <p className="mt-3 text-muted-foreground">
                Payez en ligne et bénéficiez de l’assurance Cocolis. Cocolis est tiers de confiance : le paiement est versé au transporteur une fois le colis livré.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                Recevez des propositions
              </h3>
              <p className="mt-3 text-muted-foreground">
                Nous transmettons votre demande d'envoi à notre communauté : des voyageurs et des transporteurs dont le trajet coïncide avec votre livraison.
              </p>
            </div>
            <Button size="lg" className="inline-flex items-center gap-2">
              Comment ça marche
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          {/* Right: big headline and illustration */}
          <div className="flex flex-col items-start md:items-end w-full">
            <div className="w-28 h-28 mb-6 ml-auto">
              <img src="/dancing.png" alt="Mascotte" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-xl md:text-right">
              Expédier ou recevoir un colis avec Cocolis, comment ça marche ?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;