import { Heart } from "lucide-react";
import logoWhite from "@/assets/logo-white.svg";

export function Footer() {
  return (
    <footer className="bg-gradient-deep text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoWhite} alt="Sola Fridykkeklubb" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Norges fremste fridykkeklubb. Vi tilbyr trygg og profesjonell 
              opplæring i fridykking for alle nivåer.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Hurtiglenker</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Om oss
                </a>
              </li>
              <li>
                <a href="#membership" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Bli medlem
                </a>
              </li>
              <li>
                <a href="#equipment" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Låneutstyr
                </a>
              </li>
              <li>
                <a href="/barnas-havfest" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Barnas Havfest
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Sola Badeplass, 4050 Sola</p>
              <p>+47 123 45 678</p>
              <p>post@solafridykkeklubb.no</p>
              <p className="pt-2">
                <strong>Treninger:</strong><br />
                Tirsdag og torsdag 19:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
              Laget med <Heart className="w-4 h-4 text-accent" /> for havet og fridykking
            </p>
            <p className="text-primary-foreground/60">
              © {new Date().getFullYear()} Sola Fridykkeklubb. Alle rettigheter forbeholdt.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}