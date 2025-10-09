import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Zap, Users, Lightbulb, CheckCircle } from "lucide-react";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-[url('/dancing.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Qui sommes‑nous ?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
              ColisGo est une plateforme de livraison collaborative qui connecte
              expéditeurs, voyageurs et destinataires pour des envois plus
              rapides, économiques et responsables.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {/* Mission */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Notre Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Aider nos clients à envoyer et recevoir leurs colis en toute
                  tranquillité, grâce à un service rapide, simple et
                  sécuritaire.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Notre Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Devenir la plateforme de livraison collaborative de référence,
                  connectant les villes et les personnes pour rendre
                  l'expédition de colis simple, rapide et sécuritaire partout
                  dans le monde.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 shadow-lg">
                <img
                  src="/hero.png"
                  alt="ColisGo - Livraison collaborative"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ces valeurs guident chacune de nos actions et définissent notre
              engagement envers nos utilisateurs et notre communauté.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Confiance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Confiance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nous plaçons la sécurité et la fiabilité au cœur de chaque
                expédition afin que nos clients envoient et reçoivent leurs
                colis en toute tranquillité.
              </p>
            </div>

            {/* Simplicité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Simplicité
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nous rendons l'expérience d'expédition fluide et accessible,
                grâce à une plateforme intuitive et facile à utiliser.
              </p>
            </div>

            {/* Rapidité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rapidité
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nous valorisons l'efficacité et la réactivité pour que chaque
                colis arrive à destination dans les meilleurs délais.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nous croyons à la force du partage et à la solidarité entre
                voyageurs et expéditeurs pour créer un modèle de livraison plus
                humain et durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              ColisGo en chiffres
            </h2>
            <p className="text-xl text-blue-100">
              Une communauté grandissante qui nous fait confiance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                15K+
              </div>
              <div className="text-blue-100">Utilisateurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                50K+
              </div>
              <div className="text-blue-100">Colis livrés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                1,250+
              </div>
              <div className="text-blue-100">Villes couvertes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                4.9/5
              </div>
              <div className="text-blue-100">Note moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Rejoignez la révolution de la livraison collaborative
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous soyez expéditeur ou transporteur, découvrez une nouvelle
            façon d'envoyer et de livrer, plus simple, plus économique et plus
            humaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-colors">
              Télécharger l'application
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-xl transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuiSommesNous;
