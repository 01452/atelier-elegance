import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Bericht verzonden!",
      description: "Wij nemen zo snel mogelijk contact met u op.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Neem contact met ons op
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Heeft u een vraag of wilt u een afspraak maken? Wij staan klaar om
              u te helpen. Neem gerust contact met ons op via onderstaand
              formulier of bezoek ons atelier.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Stuur ons een bericht
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Uw volledige naam"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+32 123 45 67 89"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mailadres *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="uw.email@voorbeeld.be"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Uw bericht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Vertel ons wat u nodig heeft..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Verzenden..."
                  ) : (
                    <>
                      Verstuur bericht
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Contactgegevens
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Adres</h3>
                    <p className="text-muted-foreground">
                      Voorbeeld Straat 123<br />
                      9000 Gent, België
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Telefoon</h3>
                    <a
                      href="tel:+32123456789"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +32 123 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">E-mail</h3>
                    <a
                      href="mailto:info@ateliermaatwerk.be"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@ateliermaatwerk.be
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Openingsuren</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Maandag - Vrijdag: 9:00 - 18:00</p>
                      <p>Zaterdag: 10:00 - 16:00</p>
                      <p>Zondag: Gesloten</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 rounded-lg overflow-hidden border border-border">
                <div className="bg-muted aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Kaart weergave beschikbaar na integratie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Liever telefonisch een afspraak maken?
            </h2>
            <p className="text-muted-foreground mb-6">
              Bel ons direct voor een snelle afspraak.
            </p>
            <Button asChild variant="hero" size="lg">
              <a href="tel:+32123456789">
                <Phone className="mr-2 h-4 w-4" />
                +32 123 45 67 89
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
