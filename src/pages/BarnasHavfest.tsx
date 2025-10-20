import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Waves } from "lucide-react";

export default function BarnasHavfest() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-ocean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Waves className="w-20 h-20 mx-auto mb-6 text-primary-foreground animate-wave" />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Barnas Havfest
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            En magisk dag hvor barn får oppleve havets underverker
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Om festivalen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
              Barnas Havfest er en årlig begivenhet hvor vi inviterer barn til å oppdage 
              fridykkingen og havets skatter. Gjennom morsomme aktiviteter, bassengtrening 
              og spennende undervannsverdener lærer barna om sikkerhet, respekt for havet 
              og fellesskap.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Aktiviteter
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bassengdykking",
                  description: "Prøv fridykking i trygge omgivelser med erfarne instruktører som veileder."
                },
                {
                  title: "Havdyr-oppdagelse",
                  description: "Lær om spennende havdyr og deres levemåte gjennom interaktive presentasjoner."
                },
                {
                  title: "Sikkerhetskurs",
                  description: "Barn lærer grunnleggende sikkerhet i og ved vannet på en morsom måte."
                },
                {
                  title: "Utstyrsprøving",
                  description: "Få prøve ekte fridykkeutstyr tilpasset barnestørrelse."
                },
                {
                  title: "Miljøworkshop",
                  description: "Oppdag hvordan vi kan ta vare på havet og dets innbyggere."
                },
                {
                  title: "Premiekonkurranser",
                  description: "Delta i morsomme konkurranser med havet som tema og vinn premier."
                }
              ].map((activity, index) => (
                <Card 
                  key={activity.title}
                  className="hover:shadow-float transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-3">{activity.title}</h4>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery Placeholder */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Bilder fra tidligere arrangementer
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div 
                  key={index}
                  className="aspect-square bg-gradient-ocean rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Waves className="w-16 h-16 text-primary-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Praktisk informasjon
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Når</h4>
                  <p className="text-muted-foreground">Årlig arrangement - dato annonseres våren</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Hvor</h4>
                  <p className="text-muted-foreground">Sola Badeplass, 4050 Sola</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Alder</h4>
                  <p className="text-muted-foreground">8-16 år</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Påmelding</h4>
                  <p className="text-muted-foreground">Via klubbens nettsider eller e-post</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
