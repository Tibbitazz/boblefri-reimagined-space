import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: "Sola Badeplass, 4050 Sola"
  },
  {
    icon: Phone,
    title: "Telefon",
    details: "+47 123 45 678"
  },
  {
    icon: Mail,
    title: "E-post",
    details: "post@solafridykkeklubb.no"
  },
  {
    icon: Clock,
    title: "Treninger",
    details: "Tirsdag og torsdag 19:00"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontakt oss
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Har du spørsmål eller ønsker å vite mer om fridykking? 
            Vi er alltid klare til å hjelpe!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="group hover:shadow-float transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="shadow-depth">
              <CardHeader>
                <CardTitle className="text-foreground">Følg oss</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="wave" size="icon">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="wave" size="icon">
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="shadow-depth">
              <div className="h-64 bg-gradient-ocean rounded-lg flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-medium">Sola Badeplass</p>
                  <p className="opacity-80">4050 Sola</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
