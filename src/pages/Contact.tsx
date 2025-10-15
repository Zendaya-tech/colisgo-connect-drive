import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        "colisgo", // Your service ID
        "template_6xelug6", // You'll need to create a template in EmailJS and replace this
        form.current,
        "1RZnInwGiX02JlF0L" // You'll need to add your public key from EmailJS
      );
      setSubmitStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden bg-[url('/contact_hero.png')]   bg-cover bg-center">
        <div className="absolute z-0 inset-0 bg-blue-300/50 pointer-events-none" />
        <div className="container mx-auto px-4 pt-32 pb-20 z-10 relative">
          <div className="flex flex-col  justify-center">
            <div className="space-y-8 animate-fade-in flex flex-col  justify-center">
              <div className="space-y-4 flex flex-col  justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  <span className="text-primary">
                    {t("contact.hero.title")}
                  </span>{" "}
                  <span className="text-white">
                    {t("contact.hero.titleHighlight")}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-200">
                  {t("contact.hero.subtitle")}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="sm" className="hero-shadow ">
                  <Download className="w-5 h-5" />
                  {t("contact.hero.downloadApp")}
                </Button>
                <Button variant="outline" size="sm" className="">
                  <PlayCircle className="w-5 h-5" />
                  {t("contact.hero.watchDemo")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 1: Avant tout, consultez notre FAQ */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                {t("contact.faq.title")}
              </h1>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("contact.faq.description")}</p>
                <p>
                  {t("contact.faq.passwordReset")}
                  <span className="ml-1 font-semibold text-foreground underline underline-offset-4">
                    {t("contact.faq.resetLink")}
                  </span>
                  .
                </p>
              </div>
              <Button className="mt-6">{t("contact.faq.button")}</Button>
            </div>
            <div className="relative">
              <img
                src={"support1.jpg"}
                alt="FAQ ColisGo"
                className="w-full   rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 2: Contactez notre équipe support */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={"/support2.jpg"}
                alt="Support ColisGo"
                className="w-full  object-cover rounded-3xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                {t("contact.support.title")}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t("contact.support.description")}
                  <a
                    href="mailto:contact@colisgo.org"
                    className="ml-1 font-semibold text-foreground underline underline-offset-4"
                  >
                    {t("contact.support.email")}
                  </a>
                  {t("contact.support.description2")}
                </p>
                <p>{t("contact.support.responseTime")}</p>
                <p>
                  {t("contact.support.location")}
                  <a
                    href="tel:+14188129475"
                    className="ml-1 font-semibold text-foreground underline underline-offset-4"
                  >
                    {t("contact.support.phone")}
                  </a>
                  {t("contact.support.humanSupport")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("contact.form.title")}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("contact.form.description")}</p>
                <p>{t("contact.form.required")}</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    {t("contact.form.features.response")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    {t("contact.form.features.location")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    {t("contact.form.features.team")}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    {t("contact.form.success")}
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    {t("contact.form.error")}
                  </p>
                </div>
              )}
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact.form.fields.lastName")} *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="user_lastname"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder={t("contact.form.fields.lastNamePlaceholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="prenom"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact.form.fields.firstName")} *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="user_firstname"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder={t(
                        "contact.form.fields.firstNamePlaceholder"
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.fields.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder={t("contact.form.fields.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.fields.phone")}
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="country_code"
                      className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white"
                      defaultValue="+1"
                    >
                      <option value="+1">🇨🇦 +1</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+32">🇧🇪 +32</option>
                      <option value="+41">🇨🇭 +41</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+31">🇳🇱 +31</option>
                    </select>
                    <input
                      type="tel"
                      id="telephone"
                      name="user_phone"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="(418) 812-9475"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Format Canada: (XXX) XXX-XXXX • Format France: XX XX XX XX
                    XX
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.fields.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder={t("contact.form.fields.messagePlaceholder")}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? t("contact.form.sending")
                    : t("contact.form.submit")}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  {t("contact.form.privacy")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
