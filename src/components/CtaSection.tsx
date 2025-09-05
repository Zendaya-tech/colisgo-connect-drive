import { Button } from "@/components/ui/button";
import { Download, Smartphone, ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Prêt à révolutionner vos envois ?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Rejoignez la communauté ColisGo et découvrez une nouvelle façon d'envoyer et recevoir vos colis. 
              Simple, rapide et en toute confiance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg h-auto rounded-xl hover-scale"
            >
              <Download className="w-5 h-5" />
              Télécharger maintenant
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg h-auto rounded-xl hover-scale"
            >
              <Smartphone className="w-5 h-5" />
              Voir sur mobile
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-white/80">Utilisateurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">5K+</div>
              <div className="text-white/80">Colis livrés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-white/80">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/80">Support client</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-white font-medium mb-2">
              🎉 Offre de lancement
            </p>
            <p className="text-white/90 text-sm">
              Vos 3 premiers envois sont gratuits ! 
              Profitez-en pour tester notre service sans engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;