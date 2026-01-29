import { ArrowUp } from "lucide-react";
import ondscLogo from "@/assets/ondsc-logo.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = {
    navigation: [
      { label: "Accueil", href: "#accueil" },
      { label: "À Propos", href: "#apropos" },
      { label: "Sports", href: "#sports" },
      { label: "Culture", href: "#culture" },
      { label: "Actualités", href: "#actualites" },
      { label: "Contact", href: "#contact" },
    ],
    sports: [
      { label: "Football", href: "#" },
      { label: "Basketball", href: "#" },
      { label: "Athlétisme", href: "#" },
      { label: "Handball", href: "#" },
      { label: "Tennis", href: "#" },
    ],
    culture: [
      { label: "Musique", href: "#" },
      { label: "Danse", href: "#" },
      { label: "Arts visuels", href: "#" },
      { label: "Patrimoine", href: "#" },
      { label: "FNAC", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 bg-background rounded-lg p-3 inline-block">
              <img 
                src={ondscLogo} 
                alt="ONDSC Gabon" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-background/70 leading-relaxed mb-4 max-w-sm">
              Office National de Développement du Sport et de la Culture.
              Au service de l'excellence sportive et culturelle gabonaise.
            </p>
            <p className="text-background/50 text-sm">
              © 2026 ONDSC Gabon. Tous droits réservés.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-background font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports Links */}
          <div>
            <h4 className="text-background font-bold mb-4">Sports</h4>
            <ul className="space-y-2">
              {links.sports.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Culture Links */}
          <div>
            <h4 className="text-background font-bold mb-4">Culture</h4>
            <ul className="space-y-2">
              {links.culture.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-accent transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Mentions légales
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center text-accent-foreground transition-all duration-200 hover:-translate-y-1"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
