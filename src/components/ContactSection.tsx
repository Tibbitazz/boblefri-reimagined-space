import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Facebook, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Postadresse",
    details: ["c/o Tor Arne Oltedal", "Bjørneveien 26", "4323 Sandnes"]
  },
  {
    icon: MapPin,
    title: "Besøksadresse",
    details: ["Erlingvegen 10, 4055 Sola", "(etter avtale)"]
  },
  {
    icon: Mail,
    title: "E-post",
    details: ["kontakt@solafridykkeklubb.no"],
    link: "mailto:kontakt@solafridykkeklubb.no"
  },
  {
    icon: Facebook,
    title: "Facebook",
    details: ["facebook.com/solafridykkeklubb"],
    link: "https://www.facebook.com/solafridykkeklubb"
  },
  {
    icon: Instagram,
    title: "Instagram",
    details: ["@sola_fridykkeklubb"],
    link: "https://www.instagram.com/sola_fridykkeklubb"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontakt oss
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Har du spørsmål om fridykking eller våre aktiviteter? Her finner du oss!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="group hover:shadow-float transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.link.startsWith('mailto:') ? undefined : '_blank'}
                      rel={info.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="flex flex-col items-center text-center gap-4 hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map */}
          <Card className="shadow-depth overflow-hidden">
            <CardContent className="p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.982791389842!2d5.626936876866867!3d58.88032897726789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a343d61ed0001%3A0x7e8d45e9c1b1c1b1!2sErlingvegen%2010%2C%204055%20Sola!5e0!3m2!1sno!2sno!4v1234567890123!5m2!1sno!2sno"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sola Fridykkeklubb - Besøksadresse"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
