import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Waves } from "lucide-react";

const Dokumentarkiv = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Dokumentarkiv
              </h1>
              <div className="flex justify-center mb-6">
                <Waves className="w-8 h-8 text-accent" />
              </div>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Her finner du referater fra årsmøter og styremøter og annen informasjon om klubbens drift.
              </p>
            </div>

            <Card className="shadow-depth">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-3">
                      Tilgang til dokumenter
                    </h2>
                    <p className="text-foreground/70 mb-6 max-w-xl">
                      Alle klubbens dokumenter er lagret i vårt SharePoint-arkiv. 
                      Som medlem har du tilgang til møtereferater, vedtekter, 
                      treningsmanualer, og mye mer.
                    </p>
                  </div>

                  <Button 
                    variant="ocean" 
                    size="lg"
                    className="gap-2"
                    onClick={() => window.open('https://solafridykkeklubb.sharepoint.com/Delte%20dokumenter/Forms/AllItems.aspx?id=%2FDelte%20dokumenter%2FOffentlig%20deling&p=true&ga=1', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Åpne dokumentarkiv
                  </Button>

                  <div className="pt-6 border-t border-border w-full">
                    <p className="text-sm text-foreground/60">
                      Du vil bli videresendt til SharePoint hvor dokumentene er lagret.
                      <br />
                      Kontakt styret hvis du har problemer med å få tilgang.
                    </p>
                  </div>
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

export default Dokumentarkiv;
