import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Award } from "lucide-react";

const membershipTiers = [
  {
    name: "Basis",
    price: "500",
    period: "måned",
    icon: Users,
    description: "Perfekt for nybegynnere",
    features: [
      "Tilgang til bassengtrening",
      "Grunnleggende kurs",
      "Sosiale arrangementer",
      "Utlån av grunnleggende utstyr"
    ],
    popular: false
  },
  {
    name: "Aktiv",
    price: "800",
    period: "måned",
    icon: Star,
    description: "For dedikerte frikykkere",
    features: [
      "Alt fra Basis",
      "Åpenhavstrening",
      "Avanserte kurs",
      "Prioritet på arrangementer",
      "Utlån av avansert utstyr"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "1200",
    period: "måned",
    icon: Award,
    description: "For seriøse utøvere",
    features: [
      "Alt fra Aktiv",
      "Personlig veiledning",
      "Konkurranseforberedelse",
      "Ubegrenset utlån",
      "Eksklusive arrangementer"
    ],
    popular: false
  }
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
            Velg medlemskap som passer deg. Alle medlemskap inkluderer tilgang til 
            vårt fantastiske miljø og profesjonelle veiledning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {membershipTiers.map((tier, index) => (
            <Card 
              key={tier.name}
              className={`relative group transition-all duration-300 hover:shadow-float hover:-translate-y-2 animate-fade-in-up ${
                tier.popular ? 'border-primary shadow-depth' : 'hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mest populær
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tier.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{tier.name}</CardTitle>
                <p className="text-muted-foreground">{tier.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground">kr/{tier.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <Button 
                    variant={tier.popular ? "ocean" : "wave"} 
                    size="lg" 
                    className="w-full"
                  >
                    Meld deg inn
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Har du spørsmål om medlemskap? Vi hjelper deg gjerne!
          </p>
          <Button variant="outline" size="lg">
            Kontakt oss
          </Button>
        </div>
      </div>
    </section>
  );
}