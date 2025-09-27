import Header from "@/components/Header";
import Footer from "@/components/Footer";

const QuiSommesNous = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <section className="relative overflow-hidden bg-[url('/dancing.png')] bg-cover bg-center">
                <div className="absolute z-0 inset-0 bg-blue-300/40 pointer-events-none" />
                <div className="container mx-auto px-4 pt-32 pb-20 z-10 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            Qui sommes‑nous ?
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-prose">
                            ColisGo est une plateforme de livraison collaborative qui connecte expéditeurs, voyageurs et destinataires pour des envois plus rapides, économiques et responsables.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold">Notre mission</h3>
                            <p className="mt-3 text-muted-foreground">
                                Rendre la livraison plus simple, plus verte et plus accessible en s’appuyant sur les trajets existants.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold">Nos valeurs</h3>
                            <p className="mt-3 text-muted-foreground">
                                Confiance, transparence et sécurité. Chaque échange est sécurisé, tracé et assuré.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold">Notre vision</h3>
                            <p className="mt-3 text-muted-foreground">
                                Construire le plus grand réseau de livraison collaborative en Europe, porté par sa communauté.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default QuiSommesNous;


