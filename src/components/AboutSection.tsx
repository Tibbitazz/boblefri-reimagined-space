import { Link } from "react-router-dom";
import omOss from "@/assets/om-oss.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="mb-12">
          <div className="w-full rounded-2xl overflow-hidden shadow-depth">
            <img 
              src={omOss} 
              alt="Sola Fridykkeklubb gruppebilder"
              className="w-full h-auto object-contain"
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
              Klubben er åpen for alle, både barn og voksne. Vi ønsker å dele gleden ved livet i og under vann, uavhengig av erfaring og ferdighetsnivå, og gi medlemmene våre unike opplevelser under overflaten.
            </p>

            <p>
              Vi tilbyr et bredt spekter av aktiviteter innen fridykking, blant annet dybdeapnea, bassengapnea, undervannsjakt, ryddeaksjoner under vann og undervannsfotografering. For medlemmene arrangerer vi både korte og lengre turer, temakvelder og kurs. I tillegg har vi ukentlige bassengtreninger for familier og utøvere som ønsker å utvikle sine ferdigheter innen bassengapnea.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Respekt for sikkerhet og havet
            </h2>

            <p>
              Sikkerhet står alltid i sentrum for våre aktiviteter, og vi promoterer bruk av «buddy-systemet» ved all fridykking.
            </p>

            <p>
              Som fridykkere har vi et ansvar for å ta vare på livet under vann. Vi ønsker å ferdes med minst mulig påvirkning på miljøet, etterlate naturen slik vi fant den og tenke bærekraftig når vi høster fra havet. Gjennom organiserte ryddeaksjoner bidrar vi aktivt til å redusere marin forsøpling og ta vare på våre lokale havområder.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Klubbens drift
            </h2>

            <p>
              Sola Fridykkeklubb er tilsluttet Norges Idrettsforbund og Norges Dykkeforbund, og drives av engasjerte frivillige medlemmer.
            </p>

            <p>
              Mer informasjon om klubbens drift, vedtekter og øvrige dokumenter finner du i vårt{" "}
              <Link
                to="/dokumentarkiv"
                className="text-primary hover:text-primary/80 underline"
              >
                åpne dokumentarkiv
              </Link>.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
