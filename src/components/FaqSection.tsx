import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Comment garantissez-vous la sécurité de mes colis ?",
    answer: "Chaque voyageur est vérifié avec pièce d'identité. Nous utilisons un système de codes sécurisés pour chaque échange et proposons une assurance complète. Le suivi GPS en temps réel vous permet de suivre votre colis à tout moment."
  },
  {
    question: "Combien coûte l'envoi d'un colis avec ColisGo ?",
    answer: "Nos tarifs sont 30 à 50% inférieurs aux transporteurs traditionnels. Le prix final dépend de la distance, du poids et de la taille du colis. Les voyageurs proposent leurs tarifs, vous choisissez l'offre qui vous convient."
  },
  {
    question: "Que se passe-t-il si mon colis est perdu ou endommagé ?",
    answer: "Tous les envois sont couverts par notre assurance partenaire. En cas de problème, notre service client intervient immédiatement. Le système de codes sécurisés et la vérification des voyageurs minimisent considérablement les risques."
  },
  {
    question: "Comment devenir voyageur ColisGo ?",
    answer: "Il suffit de créer votre profil, vérifier votre identité et indiquer vos trajets habituels. Vous recevrez des propositions d'envois sur vos parcours. C'est un excellent moyen de rentabiliser vos déplacements existants."
  },
  {
    question: "Dans quelles villes ColisGo est-il disponible ?",
    answer: "ColisGo couvre actuellement plus de 1,250 villes en Europe, avec une expansion continue. Notre réseau s'agrandit quotidiennement grâce à notre communauté grandissante de voyageurs."
  },
  {
    question: "Puis-je suivre mon colis en temps réel ?",
    answer: "Absolument ! Notre application mobile vous permet de suivre votre colis via GPS en temps réel. Vous recevez des notifications à chaque étape : prise en charge, transit, arrivée et livraison confirmée."
  },
  {
    question: "Y a-t-il une limite de poids ou de taille pour les colis ?",
    answer: "Les colis doivent être transportables à la main (max 20kg) et tenir dans un bagage cabine standard. Pour des envois plus volumineux, notre algorithme trouve automatiquement des voyageurs équipés de véhicules adaptés."
  },
  {
    question: "Comment le paiement est-il sécurisé ?",
    answer: "Tous les paiements transitent par notre plateforme sécurisée. Le voyageur n'est payé qu'après confirmation de la livraison par le destinataire. Nous acceptons cartes bancaires, PayPal et virements."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Toutes les réponses à vos questions sur la sécurité, les coûts et le fonctionnement de ColisGo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-2xl card-elevation overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <div className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Une autre question ?
              </h3>
              <p className="text-muted-foreground mb-4">
                Notre équipe est disponible 24/7 pour vous accompagner
              </p>
              <div className="inline-flex items-center space-x-2 text-primary font-semibold">
                <span>💬</span>
                <span>Contactez notre support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;