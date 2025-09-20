import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-foreground">ColisGo</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/particulier" className="text-muted-foreground hover:text-foreground transition-smooth">
            Particuliers
          </a>
          <a href="/transporteur" className="text-muted-foreground hover:text-foreground transition-smooth">
            Transporteurs
          </a>
          <a href="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
            Contact
          </a>
        </nav>

        <Button variant="download" size="lg" className="hidden md:flex">
          <Download className="w-4 h-4" />
          Télécharger
        </Button>
      </div>
    </header>
  );
};

export default Header;