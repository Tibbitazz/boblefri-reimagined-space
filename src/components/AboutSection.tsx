import varHistorie from "@/assets/var-historie.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="mb-12">
          <div className="w-full aspect-video bg-gradient-ocean rounded-2xl overflow-hidden shadow-depth">
            <img 
              src={varHistorie} 
              alt="Fridykkere under vann"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Om oss
          </h1>
          
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Sola Fridykkeklubb ble etablert i 2015 med mål om å skape et inkluderende fridykkermiljø i regionen.
            </p>
            
            <p>
              Klubben er åpen for alle, både barn og voksne. Vi ønsker å dele gleden ved vannet – uansett ferdighetsnivå – og gi medlemmene våre unike opplevelser under overflaten.
            </p>
            
            <p>
              Vi har en rekke aktiviteter innen fridykking, inkludert undervannsjakt, ryddeaksjoner under vann, undervannsfoto. For medlemmer arrangerer vi turer, utflukter, temakvelder og kurs. Vi har også ukentlige bassengtreninger, både for familier og utøvere.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Respekt for havet
            </h2>
            
            <p>
              Som fridykkere har vi et unikt ansvar for å ta vare på livet under vann. Vi unngår helst å røre koraller og marine dyr, vi etterlater ingenting – bortsett fra boblene våre – og vi tenker bærekraft når vi høster fra havet. Gjennom organiserte ryddeaksjoner bidrar vi til å redusere marin forsøpling.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Klubbens drift
            </h2>
            
            <p>
              Klubben er medlem av Norges Idrettsforbund og Norges Dykkerforbund.
            </p>
            
            <p>
              Mer informasjon om vår drift finner du i vårt{" "}
              <a 
                href="/dokumentarkiv" 
                className="text-primary hover:text-primary/80 underline"
              >
                åpne dokumentarkiv
              </a>.
            </p>
            
            <p className="text-sm text-muted-foreground italic">
              (Dersom du har problemer med å åpne dokumentarkivet, forsøk å åpne lenken i «inkognito» eller «privat» modus i nettleseren.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
