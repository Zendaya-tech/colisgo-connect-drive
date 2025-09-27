import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CGU = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <section className="bg-gray-50">
                <div className="container mx-auto px-4 pt-28 pb-16">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Conditions Générales d'Utilisation</h1>
                    <div className="prose prose-gray max-w-none">
                        <p>
                            Ces conditions encadrent l'utilisation de la plateforme ColisGo. En accédant au site et à l'application, vous acceptez sans réserve les présentes CGU.
                        </p>
                        <h2>1. Objet</h2>
                        <p>Mettre en relation expéditeurs et voyageurs pour le transport collaboratif de colis.</p>
                        <h2>2. Comptes</h2>
                        <p>Vous êtes responsable de la confidentialité de vos identifiants et de l'exactitude des informations fournies.</p>
                        <h2>3. Paiements et sécurité</h2>
                        <p>Les transactions sont sécurisées. Le paiement au voyageur intervient après confirmation de livraison.</p>
                        <h2>4. Responsabilités</h2>
                        <p>ColisGo agit en qualité d'intermédiaire et n'est pas transporteur.</p>
                        <h2>5. Données personnelles</h2>
                        <p>Vos données sont traitées selon notre politique de confidentialité.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CGU;


