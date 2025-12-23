import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl tracking-tight text-foreground">
                Atelier <span className="text-primary">Maatwerk</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Vakmanschap op maat – herstellingen en maatwerk met zorg en aandacht voor detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-foreground">Navigatie</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Diensten", href: "/diensten" },
                { name: "Galerij", href: "/galerij" },
                { name: "Over Ons", href: "/over-ons" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Voorbeeld Straat 123<br />
                  9000 Gent, België
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+32123456789"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +32 123 45 67 89
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-foreground">Openingsuren</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>Ma - Vr: 9:00 - 18:00</p>
                  <p>Za: 10:00 - 16:00</p>
                  <p>Zo: Gesloten</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Atelier Maatwerk. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacybeleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
