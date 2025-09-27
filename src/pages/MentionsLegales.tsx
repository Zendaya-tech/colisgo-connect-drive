import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <section className="bg-gray-50">
                <div className="container mx-auto px-4 pt-28 pb-16">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Mentions légales</h1>
                    <div className="prose prose-gray max-w-none">
                        <h2>Éditeur</h2>
                        <p>ColisGo — Société fictive pour maquette. Adresse: Paris, France.</p>
                        <h2>Hébergement</h2>
                        <p>Hébergeur: Vercel/Netlify (à confirmer).</p>
                        <h2>Contact</h2>
                        <p>Email: contact@colisgo.com</p>
                        <h2>Propriété intellectuelle</h2>
                        <p>Les éléments du site sont protégés. Toute reproduction est interdite sans autorisation.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MentionsLegales;


