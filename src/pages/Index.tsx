import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Scissors, Heart, Award, Star } from "lucide-react";
import heroImage from "@/assets/hero-tailoring.jpg";
import fabricDetail from "@/assets/fabric-detail.jpg";
import bridalWork from "@/assets/bridal-work.jpg";
import stitchingDetail from "@/assets/stitching-detail.jpg";

const services = [
  {
    title: "Herstellingen & Aanpassingen",
    description: "Van kleine reparaties tot complexe aanpassingen - wij geven uw kleding nieuw leven.",
    icon: Scissors,
  },
  {
    title: "Maatwerk",
    description: "Unieke kledingstukken op maat gemaakt, perfect afgestemd op uw lichaam en stijl.",
    icon: Heart,
  },
  {
    title: "Bruids- & Avondkleding",
    description: "Uw speciale dag verdient perfectie. Wij zorgen voor een onberispelijke pasvorm.",
    icon: Award,
  },
];

const reasons = [
  {
    title: "Jarenlange Ervaring",
    description: "Meer dan 20 jaar vakmanschap en passie voor het vak.",
  },
  {
    title: "Persoonlijke Aanpak",
    description: "Elk kledingstuk krijgt de individuele aandacht die het verdient.",
  },
  {
    title: "Kwaliteitsgarantie",
    description: "Wij staan achter ons werk met een tevredenheidsgarantie.",
  },
  {
    title: "Lokale Service",
    description: "Uw vertrouwde atelier in de buurt, altijd bereikbaar.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Vakmanschap op maat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Atelier voor maatwerk & herstellingen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Vakmanschap op maat – herstellingen en maatwerk met{" "}
              <span className="text-primary">zorg</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Uw kleding verdient de beste zorg. Of het nu gaat om een eenvoudige
              aanpassing of een volledig op maat gemaakt kledingstuk – wij staan
              voor kwaliteit en persoonlijke service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Afspraak maken
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/diensten">Onze diensten</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Onze expertise
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Diensten op maat van uw wensen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Van dagelijkse herstellingen tot bijzondere gelegenheden – ons atelier
              biedt een volledig gamma aan naaiservices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-background rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/diensten">
                Bekijk alle diensten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Waarom ons atelier?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Vakmanschap waar u op kunt vertrouwen
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Bij Atelier Maatwerk combineren we traditioneel vakmanschap met
                moderne technieken. Elke naad, elke aanpassing wordt met de
                grootste zorg uitgevoerd.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Star className="h-3.5 w-3.5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={fabricDetail}
                  alt="Stoffendetail"
                  className="rounded-lg object-cover w-full h-48 lg:h-56"
                />
                <img
                  src={stitchingDetail}
                  alt="Naaldwerk detail"
                  className="rounded-lg object-cover w-full h-64 lg:h-72"
                />
              </div>
              <div className="pt-8">
                <img
                  src={bridalWork}
                  alt="Bruidswerk"
                  className="rounded-lg object-cover w-full h-80 lg:h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Klaar om uw kleding te transformeren?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Maak vandaag nog een afspraak en ontdek hoe wij uw kleding perfect
              kunnen maken. Persoonlijk advies, vakkundig werk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Maak een afspraak
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="elegant" size="xl">
                <Link to="/over-ons">Leer ons kennen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
