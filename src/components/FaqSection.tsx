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
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="py-20 bg-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            FAQ Covoiturage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquentes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => {
              const isOpen = expanded.has(index);
              return (
                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed ${isOpen ? '' : 'line-clamp-3'}`}>
                    {faq.answer}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-3 text-secondary font-semibold hover:underline focus:outline-none"
                  >
                    {isOpen ? 'Lire moins' : 'Lire la suite'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;