import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logoWhite from "@/assets/logo-white.svg";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="absolute inset-0 bg-primary/40"></div>
      
      {/* Animated background elements - removed */}
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <img 
              src={logoWhite} 
              alt="Sola Fridykkeklubb" 
              className="h-48 md:h-64 w-auto"
            />
          </div>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 leading-relaxed">
            Bli med oss under overflaten.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="ocean" 
              size="lg" 
              className="animate-scale-in"
              onClick={() => window.location.href = '/bli-medlem'}
            >
              Bli medlem
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
      </div>
    </section>
  );
}