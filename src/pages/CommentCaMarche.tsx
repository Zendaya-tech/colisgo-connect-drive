import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Users, MapPin } from "lucide-react";

const steps = [
    {
        icon: Package,
        title: "Publiez votre envoi",
        description: "Décrivez votre colis, les adresses et la période souhaitée.",
    },
    {
        icon: Users,
        title: "Choisissez un voyageur",
        description: "Comparez les profils, tarifs et avis, puis confirmez.",
    },
    {
        icon: MapPin,
        title: "Suivez et recevez",
        description: "Suivi en temps réel et confirmation sécurisée de la livraison.",
    },
];

const CommentCaMarche = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <section className="relative overflow-hidden bg-[url('/hero.png')] bg-cover bg-center">
                <div className="absolute z-0 inset-0 bg-blue-300/40 pointer-events-none" />
                <div className="container mx-auto px-4 pt-32 pb-20 z-10 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            Comment ça marche
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-prose">
                            Utiliser ColisGo est simple et rapide. Suivez ces étapes pour envoyer ou transporter un colis en toute confiance.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-gray-100 rounded-2xl p-6">
                                <div className="mx-auto mb-4 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-secondary/10">
                                    <step.icon className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                                <p className="mt-2 text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CommentCaMarche;


