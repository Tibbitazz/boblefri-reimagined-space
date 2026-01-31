import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoBlue from "@/assets/logo-blue.svg";

const navigationItems = [
  { name: "Om oss", href: "/om-oss" },
  { name: "Bli medlem", href: "/bli-medlem" },
  { name: "Låneutstyr", href: "/laneutstyr" },
  { name: "Barnas Havfest", href: "/barnas-havfest" },
  { name: "Dokumentarkiv", href: "/dokumentarkiv" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoBlue} alt="Sola Fridykkeklubb" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg mt-2 shadow-float">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-accent/20 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
