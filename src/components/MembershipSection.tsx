import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Gift, Check } from "lucide-react";

const membershipTypes = [
  {
    name: "Voksne",
    price: "300",
    icon: Users,
    description: "For personer over 18 år"
  },
  {
    name: "Barn/Unge",
    price: "150",
    icon: Heart,
    description: "For barn og ungdom under 18 år"
  },
  {
    name: "Familie",
    price: "600",
    icon: Gift,
    description: "Familiemedlemskap for hele familien"
  }
];

const membershipBenefits = [
  "Åpen klubb for alle, både barn og voksne",
  "Inkluderende miljø basert på aktiviteter som fremmer gode opplevelser",
  "Mindre fokus på prestasjoner, mer på fellesskap",
  "Langture og turer i lokalmiljøet",
  "Arrangementer som foredrag, åpen dag, bassengtrening og kurs",
  "Utlån av utstyr til medlemspriser",
  "15% rabatt på alt i butikken hos Sola Sport og Fritid (10% på fridykkeutstyr)",
  "50% rabatt på båtførerprøven",
  "Automatisk medlemskap i Norges Dykkeforbund og Norges Idrettsforbund",
  "Gratis barneidrettsforsikring gjennom NIF",
  "Idrettsbil fra Hertz til medlemspriser",
  "Idrettspriser hos SAS og Nordic Choice"
];

export function MembershipSection() {
  return (
    <section id="membership" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bli medlem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sola Fridykkeklubb er medlem av Norges idrettsforbund (NIF) og Norges Dykkeforbund.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Du kan enkelt bli medlem i klubben via vår innmeldingsside hos NIF.
          </p>
        </div>

        {/* Membership Pricing */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {membershipTypes.map((type, index) => (
            <Card 
              key={type.name}
              className="relative group transition-all duration-300 hover:shadow-float hover:-translate-y-2 animate-fade-in-up hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{type.name}</CardTitle>
                <p className="text-muted-foreground">{type.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{type.price}</span>
                  <span className="text-muted-foreground"> kr</span>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <Button 
                  variant="wave"
                  size="lg" 
                  className="w-full"
                >
                  Meld deg inn
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Fordeler ved medlemskapet
          </h3>
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8">
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                Vi er en klubb som er åpen for alle, både barn og voksne. Vi har et inkluderende miljø basert på aktiviteter som fremmer gode opplevelser og har mindre fokus på prestasjoner. Vi arrangerer langture og turer i lokalmiljøet, har arrangementer som foredrag, åpen dag, bassengtrening og kurs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Medlemsfordeler</h4>
                  <ul className="space-y-3">
                    {membershipBenefits.slice(0, 6).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Automatiske fordeler</h4>
                  <ul className="space-y-3">
                    {membershipBenefits.slice(6).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="ocean" size="lg">
            Meld deg inn via NIF
          </Button>
        </div>
      </div>
    </section>
  );
}