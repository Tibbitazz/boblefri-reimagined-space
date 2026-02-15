import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

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
                      Dokumentarkivet ligger på SharePoint og er åpent for alle.
                    </p>
                  </div>

                  <Button 
                    variant="ocean" 
                    size="lg"
                    className="gap-2"
                    onClick={() => window.open('https://solafridykkeklubb.sharepoint.com/:f:/g/IgBClXDkYDKYRKw37DQ_TTRdAWEzsRR5iYnq9Mcs5GfX0N0', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Åpne dokumentarkiv
                  </Button>

                  <div className="pt-6 border-t border-border w-full">
                    <p className="text-sm text-foreground/60">
                      Dersom du har problemer med å åpne dokumentarkivet, så kan det hjelpe å åpne lenken i «inkognito» eller «privat» modus i nettleseren.
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
