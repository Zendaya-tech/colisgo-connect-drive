import { Calendar, ArrowRight, User, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "10 astuces pour envoyer un colis en toute sécurité",
    excerpt: "Découvrez nos conseils d'experts pour préparer et emballer vos colis comme un professionnel de la logistique.",
    category: "Conseils",
    date: "5 janvier 2024",
    readTime: "5 min",
    author: "Équipe ColisGo",
    image: "📦",
    featured: true
  },
  {
    title: "Portrait : Marie, voyageuse et entrepreneuse",
    excerpt: "Rencontrez Marie qui a transformé ses voyages d'affaires en source de revenus complémentaires grâce à ColisGo.",
    category: "Témoignage",
    date: "2 janvier 2024", 
    readTime: "3 min",
    author: "Thomas Martin",
    image: "👩‍💼",
    featured: false
  },
  {
    title: "L'avenir de la logistique collaborative",
    excerpt: "Comment la technologie révolutionne le transport de colis et crée de nouvelles opportunités économiques.",
    category: "Innovation",
    date: "28 décembre 2023",
    readTime: "7 min", 
    author: "Dr. Sophie Chen",
    image: "🚀",
    featured: false
  }
];

const categories = ["Tous", "Conseils", "Témoignages", "Innovation", "Actualités"];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Blog & Actualités
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conseils d'experts, témoignages inspirants et innovations dans le monde de la logistique collaborative
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 text-primary text-sm font-bold px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </div>
                  <div className="text-4xl">{blogPosts[0].image}</div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-lg text-muted-foreground">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                </div>

                <button className="inline-flex items-center space-x-2 text-primary font-semibold hover:underline">
                  <span>Lire l'article complet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">{blogPosts[0].image}</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-2 rounded-full">
                  À la une
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 card-elevation hover-lift transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/20 text-secondary text-sm font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                  <div className="text-2xl">{post.image}</div>
                </div>

                <h4 className="text-xl font-bold text-foreground">
                  {post.title}
                </h4>

                <p className="text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <button className="text-primary hover:underline font-medium text-sm">
                    Lire plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="text-center mt-16">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Restez informé
            </h3>
            <p className="text-muted-foreground mb-6">
              Recevez nos derniers articles et conseils directement dans votre boîte mail
            </p>
            <div className="flex items-center space-x-2 text-primary font-semibold">
              <span>📧</span>
              <span>Newsletter mensuelle - 0 spam garanti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
