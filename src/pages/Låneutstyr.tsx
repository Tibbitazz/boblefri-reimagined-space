import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Waves } from "lucide-react";

const Låneutstyr = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Leie av fridykkerutstyr
              </h1>
              <div className="flex justify-center mb-6">
                <Waves className="w-8 h-8 text-accent" />
              </div>
            </div>

            {/* Intro Text */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="space-y-6 text-foreground/80 leading-relaxed text-center">
                <p>
                  Vi ønsker at så mange som mulig skal få muligheten til å utforske verden under overflaten.
                </p>
                <p>
                  Vi leier ut utstyrspakker av god kvalitet tilpasset fridykking i norske farvann. Pakken inneholder todelte 7mm drakter både til barn og voksne, samt alt du trenger for å prøve fridykking.
                </p>
              </div>
            </div>

            {/* Pricing Table */}
            <Card className="shadow-depth mb-12">
              <CardHeader>
                <CardTitle className="text-xl text-foreground text-center">
                  Full utstyrspakke – ukesleie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-foreground font-semibold"></th>
                        <th className="text-center py-3 px-4 text-foreground font-semibold">Medlem</th>
                        <th className="text-center py-3 px-4 text-foreground font-semibold">Ikke medlem</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 text-foreground">Voksen</td>
                        <td className="py-4 px-4 text-center text-foreground font-medium">kr 400</td>
                        <td className="py-4 px-4 text-center text-foreground font-medium">kr 600</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-foreground">Barn under 15 år</td>
                        <td className="py-4 px-4 text-center text-foreground font-medium">kr 0</td>
                        <td className="py-4 px-4 text-center text-foreground font-medium">kr 200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="shadow-depth mb-8">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <p className="text-foreground/80">
                    Fyll ut dette skjemaet senest uka før du skal leie utstyr, så tar vi kontakt:
                  </p>
                  <Button 
                    variant="ocean" 
                    size="lg"
                    className="gap-2"
                    onClick={() => window.open('https://forms.office.com/e/R3NaTXS5RX', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Åpne bestillingsskjema
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-accent/10 border-accent">
              <CardContent className="pt-6">
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Utlevering skjer til avtalte tider fra vårt lokale i Erlingveien 10 på Sola.
                  </p>
                  <p className="flex items-center gap-2">
                    Har du generelle spørsmål, kan du ta kontakt på:{" "}
                    <a 
                      href="mailto:laneutstyr@solafridykkeklubb.no" 
                      className="text-primary hover:text-primary/80 underline inline-flex items-center gap-1"
                    >
                      <Mail className="w-4 h-4" />
                      laneutstyr@solafridykkeklubb.no
                    </a>
                  </p>
                  <p className="text-sm italic mt-4 pt-4 border-t border-border">
                    Ved leie av utstyr er du ansvarlig for å levere det tilbake i samme stand. Du er forpliktet til å erstatte tapt eller ødelagt utstyr.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Låneutstyr;
