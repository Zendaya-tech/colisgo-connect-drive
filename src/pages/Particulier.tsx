import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecuritySection from "@/components/SecuritySection";
import FeaturesSection from "@/components/FeaturesSection";
import FaqSection from "@/components/FaqSection";
import { Package, MapPin, CheckCircle, Clock, Shield, Euro, Users, Smartphone, Truck, Building2, Car, User, Download, PlayCircle } from "lucide-react";
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

const types = [
  {
    icon: Package,
    title: "Je suis un particulier qui expédie",
    description: "Vous voulez utiliser ColisGo en tant qu'expéditeur ou destinataire d'un colis ?",
  },
  {
    icon: Truck,
    title: "Je suis un particulier qui transporte",
    description: "Vous souhaitez rentabiliser vos trajets en transportant des colis sur votre route ?",
  },
  {
    icon: User,
    title: "Je suis un transporteur professionnel",
    description: "Vous disposez d'une licence de transport et souhaitez trouver du fret sur ColisGo ?",
  },
  {
    icon: Building2,
    title: "Je suis une entreprise qui expédie",
    description: "Vous cherchez une solution flexible et économique pour livrer vos clients ?",
  },

];

const Particulier = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[url('/particulier.png')]   bg-cover bg-center" >
        <div className="absolute z-0 inset-0 bg-blue-300/50 pointer-events-none" />
        <div className="container mx-auto px-4 pt-32 pb-20 z-10 relative">
          <div className="flex flex-col  justify-center">
            <div className="space-y-8 animate-fade-in flex flex-col  justify-center">
              <div className="space-y-4 flex flex-col  justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Envoyez.{" "}
                  <span className="text-primary">Voyagez.</span>{" "}
                  <span className="text-white">Recevez.</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-200">
                  En toute confiance.
                </h2>
              </div>


              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="sm" className="hero-shadow ">
                  <Download className="w-5 h-5" />
                  Télécharger l'app
                </Button>
                <Button variant="outline" size="sm" className="">
                  <PlayCircle className="w-5 h-5" />
                  Voir la démo
                </Button>
              </div>

              {/* <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Utilisateurs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Colis livrés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div> */}
            </div>

            {/* <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[420px] md:w-[520px]">
              <img
                src={"/hero.png"}
                alt="ColisGo - Livraison collaborative"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full opacity-90 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-90 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div> */}
          </div>
        </div>
      </section>


      <div className=" overflow-hidden bg-white">


        {/* Intro section: Envoyez ou recevez simplement */}


        {/* Profiles section */}
        <section className="py-20">
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
              {/* Cards */}
              {
                types.map((type, index) => (
                  <div className="bg-gray-100 rounded-2xl p-6 text-center ">
                    <div className="mx-auto mb-4 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-secondary/10">
                      <type.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{type.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {type.description}
                    </p>
                    <Button variant="outline" size="sm" className="mt-4">En savoir plus</Button>
                  </div>
                ))
              }

              {/* Cards */}





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