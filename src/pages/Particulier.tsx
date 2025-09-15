import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecuritySection from "@/components/SecuritySection";
import FeaturesSection from "@/components/FeaturesSection";
import FaqSection from "@/components/FaqSection";
import { Package, MapPin, CheckCircle, Clock, Shield, Euro, Users, Smartphone, Truck, Building2, Car, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import deliveryImg from "@/assets/hero-delivery.jpg";
import CtaSection from "@/components/CtaSection";

const senderSteps = [
  {
    step: "1",
    title: "Publiez votre envoi",
    description: "Décrivez votre colis et sa destination en quelques clics",
    icon: Package,
    details: [
      "Indiquez le poids et les dimensions",
      "Précisez les adresses de départ et d'arrivée",
      "Ajoutez des instructions spéciales si nécessaire"
    ]
  },
  {
    step: "2",
    title: "Choisissez votre transporteur",
    description: "Sélectionnez parmi les voyageurs disponibles sur votre trajet",
    icon: Users,
    details: [
      "Consultez les profils et avis",
      "Comparez les tarifs proposés",
      "Communiquez directement avec le transporteur"
    ]
  },
  {
    step: "3",
    title: "Suivez votre colis",
    description: "Suivi en temps réel jusqu'à la livraison",
    icon: MapPin,
    details: [
      "Géolocalisation GPS en temps réel",
      "Notifications à chaque étape",
      "Confirmation de livraison sécurisée"
    ]
  }
];

const senderBenefits = [
  {
    icon: Euro,
    title: "Économies Garanties",
    description: "Jusqu'à 50% moins cher que la concurrence",
    value: "-50%",
    subtitle: "vs transporteurs classiques"
  },
  {
    icon: Clock,
    title: "Livraison Rapide",
    description: "Des trajets directs pour une livraison plus rapide",
    value: "1-3j",
    subtitle: "délai moyen"
  },
  {
    icon: Shield,
    title: "100% Sécurisé",
    description: "Assurance et codes de sécurité inclus",
    value: "100%",
    subtitle: "des envois assurés"
  },
  {
    icon: Smartphone,
    title: "Suivi Live",
    description: "Géolocalisation en temps réel",
    value: "24/7",
    subtitle: "suivi disponible"
  }
];

const Particulier = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2">
              <Package className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">Espace Particulier</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">
              Envoyez vos colis
              <span className="text-secondary block">en toute simplicité</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez une nouvelle façon d'envoyer vos colis : plus rapide, moins cher
              et plus humain grâce à notre réseau de transporteurs vérifiés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                <Package className="w-5 h-5 mr-2" />
                Envoyer un Colis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Calculer le Prix
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {senderBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 text-center card-elevation">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-1">{benefit.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{benefit.subtitle}</div>
                  <h3 className="font-semibold text-foreground text-sm">{benefit.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <div className="space-y-20 rounded-t-[200px] overflow-hidden bg-white">


        {/* Intro section: Envoyez ou recevez simplement */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Left text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Envoyez ou recevez simplement !
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Cocolis est une solution de livraison collaborative qui s'appuie sur une communauté de livreurs particuliers et professionnels pour permettre des livraisons moins chères, plus écologiques dans des délais très courts, de presque tout, partout en France.
                  </p>
                  <p>
                    Cocolis permet la livraison de tout ce qui ne passe pas par les solutions d'envoi classiques ou qui coûte trop cher à expédier : mobilier, électroménager, vaisselle, objets de déco, miroirs, matériel de jardin, équipements de loisirs, etc.
                  </p>
                  <p>
                    Vous envoyez ou recevez vos objets volumineux, lourds ou fragiles à moindre coût et rapidement. Cocolis vous met en relation avec quelqu'un qui fait déjà le trajet !
                  </p>
                  <p>
                    Notre service fonctionne aussi pour les professionnels : si vous êtes commerçant et que vous avez besoin d'une nouvelle solution de livraison, contactez‑nous pour avoir plus d'infos !
                  </p>
                </div>
                <Button className="mt-6">Déposer une annonce</Button>
              </div>

              {/* Right image with badge */}
              <div className="relative w-full">
                <img
                  src={deliveryImg}
                  alt="Colis en livraison"
                  className="w-full rounded-2xl object-cover shadow-md"
                />
                <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-white text-blue-600 font-bold text-xl md:text-2xl rounded-2xl shadow-lg px-6 py-4">
                  <span className="block leading-tight">60%<span className="text-sm font-semibold align-top"> moins cher</span></span>
                  <span className="block text-xs text-blue-700">(en passant par nous)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profiles section */}
        <section className="pb-4">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Comment ça marche, en fonction de votre profil.
              </h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                Expéditeur ? Transporteur ? Particulier ou professionnel ? Découvrez la meilleure façon d'utiliser ColisGo selon vos besoins :
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {/* Card 1 */}
              <div className="bg-card rounded-2xl p-6 text-center card-elevation">
                <div className="mx-auto mb-4 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-secondary/10">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground">Je suis un particulier qui expédie</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vous voulez utiliser ColisGo en tant qu'expéditeur ou destinataire d'un colis ?
                </p>
                <Button variant="outline" size="sm" className="mt-4">En savoir plus</Button>
              </div>

              {/* Card 2 */}
              <div className="bg-card rounded-2xl p-6 text-center card-elevation">
                <div className="mx-auto mb-4 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Car className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground">Je suis un particulier qui transporte</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vous souhaitez rentabiliser vos trajets en transportant des colis sur votre route ?
                </p>
                <Button variant="outline" size="sm" className="mt-4">En savoir plus</Button>
              </div>

              {/* Card 3 */}
              <div className="bg-card rounded-2xl p-6 text-center card-elevation">
                <div className="mx-auto mb-4 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Building2 className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground">Je suis une entreprise qui expédie</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vous cherchez une solution flexible et économique pour livrer vos clients ?
                </p>
                <Button variant="outline" size="sm" className="mt-4">En savoir plus</Button>
              </div>

              {/* Card 4 */}
              <div className="bg-card rounded-2xl p-6 text-center card-elevation">
                <div className="mx-auto mb-4 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground">Je suis un transporteur professionnel</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vous disposez d'une licence de transport et souhaitez trouver du fret sur ColisGo ?
                </p>
                <Button variant="outline" size="sm" className="mt-4">En savoir plus</Button>
              </div>
            </div>
          </div>
        </section>

        {/* <SecuritySection /> */}
        {/* <FeaturesSection /> */}
        <FaqSection />
        <CtaSection />

      </div>
      <Footer />
    </div>
  );
};

export default Particulier;