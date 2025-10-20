import { Waves } from "lucide-react";

const activities = [
  {
    title: "Bassengtrening",
    description: "Utvikle teknikk og pusteøvelser i kontrollerte omgivelser. Perfekt for å bygge grunnleggende ferdigheter og utholdenhet."
  },
  {
    title: "Dybde",
    description: "Utforsk dypere farvann og test dine grenser med erfarne instruktører. Lær riktig teknikk for dybdedykking."
  },
  {
    title: "Ryddeaksjoner",
    description: "Bidra til et renere hav ved å delta på våre ryddeaksjoner. Fellesskap og miljøvern i praksis."
  },
  {
    title: "Sosialt",
    description: "Bli kjent med andre fridykkere gjennom sosiale arrangementer, langture og kameratlige sammenkomster."
  },
  {
    title: "Undervannsjakt",
    description: "Lær bærekraftig undervannsjakt med respekt for havet. Erfarne jegere deler sin kunnskap og erfaring."
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

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div 
              key={activity.title}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-full aspect-square bg-gradient-ocean rounded-xl flex items-center justify-center mb-4 hover:scale-105 transition-transform">
                  <Waves className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
            </div>
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