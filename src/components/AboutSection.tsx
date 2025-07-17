import { Card, CardContent } from "@/components/ui/card";
import { Waves, Users, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Fridykking",
    description: "Lær den eldste formen for dykking - helt uten utstyr, bare deg og havet."
  },
  {
    icon: Users,
    title: "Fellesskap",
    description: "Bli del av et varmt og støttende miljø hvor sikkerhet og kameratskap står i fokus."
  },
  {
    icon: Heart,
    title: "Miljøvern",
    description: "Vi bryr oss om havet og jobber aktivt for å holde det rent gjennom ryddeaksjoner."
  },
  {
    icon: Shield,
    title: "Sikkerhet",
    description: "Erfarne instruktører sørger for at du lærer fridykking på en trygg måte."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Om Sola Fridykkeklubb
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vi er en dedikert gruppe frikykkere som deler lidenskapen for det stille havet. 
            Hos oss lærer du ikke bare teknikker, men også verdier som respekt for naturen 
            og betydningen av sikkerhet under vann.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-float transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 shadow-depth">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Vår historie
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Etablert i hjertet av Rogaland, har Sola Fridykkeklubb vært en ledende 
                kraft i det norske fridykkermiljøet. Vi kombinerer tradisjonelle teknikker 
                med moderne sikkerhetsprinsipper for å skape den beste opplevelsen for 
                våre medlemmer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Gjennom årene har vi utdannet hundrevis av frikykkere og bygget et 
                sterkt fellesskap som spenner fra nybegynnere til erfarne utøvere. 
                Vårt fokus ligger alltid på sikkerhet, respekt og glede ved havet.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-ocean rounded-xl flex items-center justify-center">
                <Waves className="w-16 h-16 text-primary-foreground animate-wave" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}