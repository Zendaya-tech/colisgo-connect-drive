import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Package,
  Users,
  MapPin,
  Shield,
  Clock,
  CreditCard,
  Car,
  Truck,
  Building2,
  Edit3,
  Search,
  CheckCircle,
  Smartphone,
  DollarSign as Dollar,
  PlayCircle,
  Download,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CommentCaMarche = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-900">
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("commentCaMarche.hero.title")}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {t("commentCaMarche.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Download className="w-5 h-5 mr-2" />
                {t("commentCaMarche.hero.downloadApp")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-blue-800 hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base hover:scale-105 group"
              >
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t("hero.watchDemo")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Particulier qui expédie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {t("commentCaMarche.profiles.0.title")}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("commentCaMarche.profiles.0.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t("commentCaMarche.profiles.0.steps", {
                returnObjects: true,
              }).map((step: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {index + 1}
                    </div>
                    {index === 0 && <Edit3 className="w-5 h-5 text-blue-900" />}
                    {index === 1 && <Users className="w-5 h-5 text-blue-900" />}
                    {index === 2 && (
                      <CreditCard className="w-5 h-5 text-blue-900" />
                    )}
                    {index === 3 && (
                      <MapPin className="w-5 h-5 text-blue-900" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Particulier qui transporte */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {t("commentCaMarche.profiles.1.title")}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("commentCaMarche.profiles.1.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t("commentCaMarche.profiles.1.steps", {
                returnObjects: true,
              }).map((step: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {index + 1}
                    </div>
                    {index === 0 && (
                      <Search className="w-5 h-5 text-orange-500" />
                    )}
                    {index === 1 && (
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                    )}
                    {index === 2 && (
                      <Package className="w-5 h-5 text-orange-500" />
                    )}
                    {index === 3 && (
                      <MapPin className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transporteur professionnel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {t("commentCaMarche.profiles.2.title")}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("commentCaMarche.profiles.2.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t("commentCaMarche.profiles.2.steps", {
                returnObjects: true,
              }).map((step: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {index + 1}
                    </div>
                    {index === 0 && (
                      <Building2 className="w-5 h-5 text-blue-900" />
                    )}
                    {index === 1 && (
                      <Search className="w-5 h-5 text-blue-900" />
                    )}
                    {index === 2 && <Users className="w-5 h-5 text-blue-900" />}
                    {index === 3 && (
                      <Dollar className="w-5 h-5 text-blue-900" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entreprise qui expédie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {t("commentCaMarche.profiles.3.title")}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("commentCaMarche.profiles.3.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t("commentCaMarche.profiles.3.steps", {
                returnObjects: true,
              }).map((step: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {index + 1}
                    </div>
                    {index === 0 && (
                      <Building2 className="w-5 h-5 text-orange-500" />
                    )}
                    {index === 1 && (
                      <Package className="w-5 h-5 text-orange-500" />
                    )}
                    {index === 2 && (
                      <Users className="w-5 h-5 text-orange-500" />
                    )}
                    {index === 3 && (
                      <Smartphone className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("commentCaMarche.features.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("commentCaMarche.features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t("commentCaMarche.features.list", { returnObjects: true }).map(
              (feature: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center border border-gray-200"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    {index === 0 && <Shield className="w-8 h-8" />}
                    {index === 1 && <Clock className="w-8 h-8" />}
                    {index === 2 && <CreditCard className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("commentCaMarche.cta.title")}
            </h2>
            <p className="text-blue-100 mb-8">
              {t("commentCaMarche.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Package className="w-5 h-5 mr-2" />
                {t("commentCaMarche.cta.sendPackage")}
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Car className="w-5 h-5 mr-2" />
                {t("commentCaMarche.cta.becomeCarrier")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommentCaMarche;
