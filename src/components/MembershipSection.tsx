import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function MembershipSection() {
  return (
    <section id="membership" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bli medlem
          </h1>
        </div>

        {/* Intro Text */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Som medlem i Sola Fridykkeklubb blir du en del av et inkluderende miljø som legger vekt på gode opplevelser.
            </p>
            
            <p>
              Voksne medlemmer leier fridykkerutstyr til rabattert pris, barn låner gratis. Medlemmer får også rabatt på utstyr til fridykking og undervannsjakt hos enkelte forhandlere.
            </p>
            
            <p>
              Ukentlige bassengtreninger er inkludert i medlemsprisen.
            </p>
            
            <p>
              Som medlem i klubben blir du automatisk medlem i Norges Dykkeforbund, som også innebærer en rekke{" "}
              <a 
                href="https://ndf.no/klubb/klubbsupport/medlemsfordeler/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline inline-flex items-center gap-1"
              >
                medlemsfordeler
                <ExternalLink className="w-4 h-4" />
              </a>.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Individual Membership */}
          <Card className="shadow-depth">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Priser for individuelt medlemskap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Voksen</span>
                  <span className="font-semibold text-foreground">750 kr</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">Barn</span>
                  <span className="font-semibold text-foreground">300 kr</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Family Membership */}
          <Card className="shadow-depth">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Priser for familiemedlemskap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Familie – én voksen og inntil tre barn</span>
                  <span className="font-semibold text-foreground">750 kr</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Ekstra voksen</span>
                  <span className="font-semibold text-foreground">300 kr</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">Ekstra barn</span>
                  <span className="font-semibold text-foreground">300 kr</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            variant="ocean"
            size="lg" 
            className="gap-2"
            onClick={() => window.open('https://www.nif.no', '_blank')}
          >
            Meld deg inn via NIF
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
