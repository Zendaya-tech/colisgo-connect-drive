import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Étudiante",
    content: "J'ai envoyé un cadeau d'anniversaire à ma sœur en Belgique. Le voyageur était super sympa et j'ai suivi le colis en temps réel. Une expérience formidable !",
    rating: 5,
    avatar: "👩‍🎓"
  },
  {
    name: "Thomas Martin",
    role: "Voyageur",
    content: "En tant que commercial qui voyage souvent, ColisGo me permet d'arrondir mes fins de mois facilement. L'app est intuitive et les clients très reconnaissants.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Sophie Chen",
    role: "Entrepreneuse",
    content: "Pour mon e-commerce, ColisGo est devenu indispensable. Livraisons rapides, coûts réduits et service client exceptionnel. Je recommande à 100% !",
    rating: 5,
    avatar: "👩‍💻"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus de 10 000 utilisateurs nous font confiance pour leurs envois
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-200 rounded-2xl p-6 hover-lift transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                <p className="text-muted-foreground italic pl-4">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-card rounded-2xl px-8 py-4 card-elevation">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-current" />
              ))}
            </div>
            <div className="text-foreground">
              <span className="font-bold text-lg">4.9/5</span>
              <span className="text-muted-foreground ml-2">sur 2,347 avis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;