import { Mail, MessageCircle, Linkedin, Facebook, Twitter, MapPin, Clock } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email officiel",
    value: "contact@colisgo.com",
    description: "Réponse sous 24h",
    action: "mailto:contact@colisgo.com",
    color: "primary"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    value: "+33 6 12 34 56 78",
    description: "Support instantané",
    action: "https://wa.me/33612345678",
    color: "green-500"
  }
];

const socialNetworks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "@ColisGo",
    url: "https://linkedin.com/company/colisgo",
    color: "blue-600"
  },
  {
    icon: Facebook,
    name: "Facebook",
    handle: "ColisGo Officiel",
    url: "https://facebook.com/colisgo",
    color: "blue-500"
  },
  {
    icon: Twitter,
    name: "Twitter",
    handle: "@ColisGo_FR",
    url: "https://twitter.com/colisgo_fr",
    color: "sky-500"
  }
];

const offices = [
  {
    city: "Paris",
    address: "Station F, 5 Parvis Alan Turing",
    status: "Siège social",
    icon: "🏢"
  },
  {
    city: "Lyon",
    address: "La Halle Girard, 25 Rue Louis Becker",
    status: "Bureau régional",
    icon: "🌟"
  },
  {
    city: "Marseille",
    address: "Euromed Center, 13002",
    status: "Antenne Sud",
    icon: "☀️"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Restons en contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  className="block bg-card rounded-2xl p-8 card-elevation hover-lift transition-smooth text-center animate-fade-in"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    method.color === 'primary' ? 'bg-primary' : `bg-${method.color}`
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-lg text-primary font-semibold mb-2">
                    {method.value}
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Social Networks */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Suivez-nous sur les réseaux
              </h3>
              <p className="text-muted-foreground">
                Actualités, témoignages et coulisses de l'équipe ColisGo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {socialNetworks.map((network, index) => {
                const Icon = network.icon;
                return (
                  <a
                    key={index}
                    href={network.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card rounded-2xl p-6 card-elevation hover-lift transition-smooth text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${network.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="font-bold text-foreground mb-1">
                      {network.name}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground">
                      {network.handle}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Offices */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Nos bureaux en France
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 card-elevation text-center">
                  <div className="text-3xl mb-3">{office.icon}</div>
                  
                  <h4 className="font-bold text-foreground mb-2">
                    {office.city}
                  </h4>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{office.address}</span>
                  </div>
                  
                  <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    {office.status}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold">
                Support disponible 24/7 - Équipe basée en France
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;