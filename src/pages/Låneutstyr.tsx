import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves } from "lucide-react";

const equipment = [
  {
    title: "Våddrakt og utstyr",
    description: "Vi har et stort utvalg av våtdrakter i forskjellige størrelser og tykkelser tilgjengelig for utlån til våre medlemmer.",
  },
  {
    title: "Finner og masker",
    description: "Kvalitetsfinner og masker i ulike størrelser som passer for både nybegynnere og erfarne fridykkere.",
  },
  {
    title: "Belter og lodder",
    description: "Friselingsbelter med tilhørende lodder for optimal balanse under vann.",
  },
  {
    title: "Bøyer og liner",
    description: "Treningsbøyer og dybdelines for sikker og effektiv trening.",
  },
];

const Låneutstyr = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Låneutstyr
              </h1>
              <div className="flex justify-center mb-6">
                <Waves className="w-8 h-8 text-accent" />
              </div>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Som medlem av Sola Fridykkeklubb har du tilgang til et bredt utvalg av fridykkeutstyr. 
                Alt utstyr kan lånes gratis av medlemmer til trening og aktiviteter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {equipment.map((item, index) => (
                <Card key={index} className="hover:shadow-float transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/10 border-accent">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Praktisk informasjon
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Utstyr lånes ut på trening eller etter avtale med styret</li>
                  <li>• Alt utstyr skal returneres rengjort og i god stand</li>
                  <li>• Ta kontakt med styret for tilgjengelighet og bestilling</li>
                  <li>• Medlemmer er ansvarlige for utstyret under utlån</li>
                </ul>
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
