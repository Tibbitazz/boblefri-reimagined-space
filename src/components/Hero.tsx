import { Button } from "@/components/ui/button";
import { ChevronDown, Waves, Fish } from "lucide-react";
import logoWhite from "@/assets/logo-white.svg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-deep"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Waves className="w-8 h-8 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-wave">
          <Fish className="w-6 h-6 text-accent/40" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 right-1/3 animate-wave" style={{ animationDelay: '4s' }}>
          <div className="w-2 h-2 bg-accent/30 rounded-full"></div>
        </div>
      </div>
      
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