import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Shirt, Heart, Ruler, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "herstellingen",
    icon: Scissors,
    title: "Herstellingen & Aanpassingen",
    description: "Geef uw favoriete kledingstukken een nieuw leven. Van kleine reparaties tot complexe aanpassingen – wij zorgen ervoor dat uw kleding weer perfect zit.",
    features: [
      "Ritsen vervangen",
      "Knopen aannaaien",
      "Naden herstellen",
      "Lengtes aanpassen",
      "Taille innemen of uitleggen",
      "Voering repareren",
    ],
  },
  {
    id: "maatwerk",
    icon: Ruler,
    title: "Maatwerk",
    description: "Laat uw droomkleding werkelijkheid worden. Volledig op maat gemaakte kledingstukken die perfect aansluiten bij uw lichaam, stijl en persoonlijkheid.",
    features: [
      "Kostuums op maat",
      "Jurken en rokken",
      "Blouses en hemden",
      "Unieke creaties",
      "Stofselectie begeleiding",
      "Perfecte pasvorm garantie",
    ],
  },
  {
    id: "bruidskleding",
    icon: Heart,
    title: "Bruids- & Avondkleding",
    description: "Uw speciale dag verdient perfectie. Wij zorgen voor een onberispelijke pasvorm van uw bruids- of avondkleding, zodat u stralend kunt genieten van elk moment.",
    features: [
      "Bruidsjaponnen aanpassen",
      "Sluiers en accessoires",
      "Avondjurken op maat",
      "Galakostuums",
      "Last-minute aanpassingen",
      "Preservatie advies",
    ],
  },
  {
    id: "overig",
    icon: Shirt,
    title: "Overige Diensten",
    description: "Naast onze hoofddiensten bieden wij een scala aan aanvullende services om al uw naaibehoeften te vervullen.",
    features: [
      "Gordijnen inkorten",
      "Leren kleding reparaties",
      "Jeans aanpassingen",
      "Uniformen op maat",
      "Vintage kleding restauratie",
      "Advies en consultatie",
    ],
  },
];

export default function Diensten() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Onze diensten
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Vakmanschap voor elk kledingstuk
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Van eenvoudige herstellingen tot volledige maatkleding – ons atelier
              biedt een breed scala aan naaiservices met de hoogste kwaliteit en
              persoonlijke aandacht.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="hero">
                    <Link to="/contact">
                      Vraag een offerte aan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`bg-gradient-to-br from-secondary/50 to-accent/30 rounded-2xl aspect-[4/3] flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <service.icon className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Heeft u een specifieke vraag?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Neem gerust contact met ons op voor een vrijblijvend gesprek. Wij
              adviseren u graag over de beste oplossing voor uw kleding.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Neem contact op
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
