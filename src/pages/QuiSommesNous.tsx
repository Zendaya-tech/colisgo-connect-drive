import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Zap, Users, Lightbulb, CheckCircle } from "lucide-react";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              À propos de ColisGo
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
              Qui sommes‑nous
              <span className="text-orange-500">?</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              ColisGo est une plateforme de livraison collaborative qui connecte
              expéditeurs, voyageurs et destinataires pour des envois plus
              <span className="font-semibold text-orange-600"> rapides</span>,
              <span className="font-semibold text-blue-600"> économiques</span>{" "}
              et
              <span className="font-semibold text-green-600">
                {" "}
                responsables
              </span>
              .
            </p>

            {/* Stats preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                  15K+
                </div>
                <div className="text-sm text-slate-500">Utilisateurs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                  50K+
                </div>
                <div className="text-sm text-slate-500">Colis livrés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                  1,250+
                </div>
                <div className="text-sm text-slate-500">Villes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                  4.9/5
                </div>
                <div className="text-sm text-slate-500">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Notre Mission
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Aider nos clients à envoyer et recevoir leurs colis en toute
                  tranquillité, grâce à un service
                  <span className="font-semibold text-orange-600"> rapide</span>
                  ,<span className="font-semibold text-blue-600"> simple</span>{" "}
                  et
                  <span className="font-semibold text-green-600">
                    {" "}
                    sécuritaire
                  </span>
                  .
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Notre Vision
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Devenir la plateforme de livraison collaborative de référence,
                  connectant les villes et les personnes pour rendre
                  l'expédition de colis simple, rapide et sécuritaire partout
                  dans le monde.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 rounded-3xl p-8 shadow-xl border border-slate-100">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-200/30 rounded-full blur-xl"></div>

                <img
                  src="/hero.png"
                  alt="ColisGo - Livraison collaborative"
                  className="w-full h-auto rounded-2xl relative z-10 shadow-lg"
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
      <section className="py-20 bg-gradient-to-br from-blue-950 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[url()] opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              Nos performances
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ColisGo en chiffres
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Une communauté grandissante qui nous fait confiance chaque jour
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  15K+
                </div>
                <div className="text-slate-300 font-medium">
                  Utilisateurs actifs
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  50K+
                </div>
                <div className="text-slate-300 font-medium">Colis livrés</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  1,250+
                </div>
                <div className="text-slate-300 font-medium">
                  Villes couvertes
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  4.9/5
                </div>
                <div className="text-slate-300 font-medium">Note moyenne</div>
              </div>
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
