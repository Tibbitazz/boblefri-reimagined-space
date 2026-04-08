import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import bliMedlemImg from "@/assets/bli-medlem.jpg";

export function MembershipSection() {
  return (
    <section id="membership" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bli medlem
          </h1>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <div className="w-full rounded-2xl overflow-hidden shadow-depth">
            <img 
              src={bliMedlemImg} 
              alt="Fridykker i norsk natur"
              className="w-full h-auto object-contain"
            />
          </div>
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
        <div className="max-w-md mx-auto mb-12">
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
                  <span className="font-semibold text-foreground">350 kr</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">Barn</span>
                  <span className="font-semibold text-foreground">70 kr</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="ocean"
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://www.minidrett.no/', '_blank')}
            >
              Har du allerede en konto i "Min Idrett"?
              <ExternalLink className="w-5 h-5" />
            </Button>
            <Button 
              variant="wave"
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://www.minidrett.no/ny-bruker', '_blank')}
            >
              Opprett ny konto i "Min Idrett"
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-foreground/70 text-sm max-w-lg mx-auto">
            Hvis du allerede har konto i "Min Idrett", kan du trykke på lenken over. Hvis du ikke har konto, kan du opprette en via knappen for ny bruker.
          </p>

          {/* Step-by-step guide */}
          <div className="mt-8 max-w-md mx-auto text-center">
            <p className="font-semibold text-foreground mb-4">Når du har logget inn, gjør du følgende:</p>
            <ol className="space-y-3 inline-block text-left">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-foreground/80 pt-0.5">Gå til <strong className="text-foreground">"Medlemskap"</strong> i menyen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-foreground/80 pt-0.5">Klikk på <strong className="text-foreground">"Nytt medlemskap"</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-foreground/80 pt-0.5">Søk etter <strong className="text-foreground">"Sola Fridykkeklubb"</strong> og velg klubben</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
