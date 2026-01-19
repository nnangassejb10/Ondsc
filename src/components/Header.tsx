import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "À Propos", href: "#apropos" },
    { label: "Sports", href: "#sports" },
    { label: "Culture", href: "#culture" },
    { label: "Actualités", href: "#actualites" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg md:text-xl">O</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-primary-foreground font-bold text-lg md:text-xl leading-tight">
                ONDSC
              </h1>
              <p className="text-primary-foreground/70 text-xs">Gabon</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-primary-foreground/90 hover:text-accent transition-colors duration-200 text-sm font-medium animated-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow font-semibold">
              Espace Membre
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-primary-foreground/90 hover:text-accent hover:bg-primary-foreground/5 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-4">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Espace Membre
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
