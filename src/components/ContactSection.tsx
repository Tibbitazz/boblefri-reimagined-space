import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: "Soltunvegen 8, 4050 Sola"
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

            {/* Map */}
            <Card className="shadow-depth overflow-hidden">
              <CardHeader>
                <CardTitle className="text-foreground">Finn oss her</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.982791389842!2d5.626936876866867!3d58.88032897726789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a343d61ed0001%3A0x7e8d45e9c1b1c1b1!2sSoltunvegen%208%2C%204050%20Sola!5e0!3m2!1sen!2sno!4v1234567890123!5m2!1sen!2sno"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sola Fridykkeklubb Location"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
