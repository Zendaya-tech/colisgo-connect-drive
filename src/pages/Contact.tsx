import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Notre équipe répond en moins de 2h",
    contact: "contact@colisgo.com",
    availability: "Réponse sous 2h",
    color: "primary"
  },
  {
    icon: MessageCircle,
    title: "Chat WhatsApp",
    description: "Support instantané pour vos questions",
    contact: "+33 6 12 34 56 78",
    availability: "7j/7 - 8h à 22h",
    color: "secondary"
  },
  {
    icon: Phone,
    title: "Assistance Téléphonique",
    description: "Parlez directement à notre équipe",
    contact: "+33 1 23 45 67 89",
    availability: "Lun-Ven 9h-18h",
    color: "primary"
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/colisgo",
    icon: "💼",
    description: "Suivez nos actualités professionnelles"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/colisgo",
    icon: "📘",
    description: "Rejoignez notre communauté"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/colisgo",
    icon: "🐦",
    description: "Dernières nouvelles et mises à jour"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/colisgo",
    icon: "📸",
    description: "Découvrez l'envers du décor"
  }
];

const offices = [
  {
    city: "Paris",
    address: "15 Rue de la Paix, 75001 Paris",
    type: "Siège Social",
    hours: "Lun-Ven 9h-18h"
  },
  {
    city: "Lyon",
    address: "42 Place Bellecour, 69002 Lyon", 
    type: "Bureau Régional",
    hours: "Lun-Ven 9h-17h"
  },
  {
    city: "Marseille",
    address: "8 La Canebière, 13001 Marseille",
    type: "Bureau Régional", 
    hours: "Lun-Ven 9h-17h"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Contactez-nous</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Une question ?
              <span className="text-primary block">Nous sommes là pour vous</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Notre équipe dédiée est disponible 24/7 pour répondre à toutes vos questions 
              et vous accompagner dans l'utilisation de ColisGo.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-6 text-center card-elevation">
              <div className="text-2xl font-bold text-primary mb-1">&lt; 2h</div>
              <div className="text-sm text-muted-foreground">Temps de réponse moyen</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center card-elevation">
              <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support disponible</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center card-elevation">
              <div className="text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comment nous contacter ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez le moyen qui vous convient le mieux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-8 card-elevation hover-lift transition-smooth">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    method.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-semibold text-foreground">{method.contact}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{method.availability}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant={method.color === 'primary' ? 'default' : 'secondary'} 
                    className="w-full"
                  >
                    Contacter
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nos bureaux
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rencontrez nos équipes dans toute la France
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 card-elevation">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{office.city}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {office.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{office.address}</p>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Suivez-nous
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Restez connecté avec la communauté ColisGo
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl p-6 card-elevation hover-lift transition-smooth text-center group"
              >
                <div className="text-3xl mb-4">{social.icon}</div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground">{social.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-8 md:p-12 text-center card-elevation max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Urgence ou problème avec un colis ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Notre équipe d'urgence est disponible 24h/24 pour résoudre tout problème urgent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="default" size="lg" className="text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Ligne d'urgence: 01 23 45 67 89
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat d'urgence
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;