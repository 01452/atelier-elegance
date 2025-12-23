import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Award, Users, Clock } from "lucide-react";
import bridalWork from "@/assets/bridal-work.jpg";

const values = [
  {
    icon: Heart,
    title: "Passie voor het vak",
    description: "Elke steek wordt met liefde en toewijding gezet. Dit is niet zomaar een beroep, het is onze roeping.",
  },
  {
    icon: Award,
    title: "Kwaliteit zonder compromis",
    description: "Wij gebruiken alleen de beste materialen en technieken om een perfect resultaat te garanderen.",
  },
  {
    icon: Users,
    title: "Persoonlijke benadering",
    description: "Elk klant is uniek. Wij luisteren naar uw wensen en adviseren u met zorg en aandacht.",
  },
  {
    icon: Clock,
    title: "Betrouwbaar en punctueel",
    description: "Wij respecteren uw tijd. Afgesproken deadlines worden nagekomen, zonder in te boeten op kwaliteit.",
  },
];

export default function OverOns() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Over ons
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Vakmanschap met een persoonlijke toets
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Al meer dan twee decennia is Atelier Maatwerk de vertrouwde keuze
                voor klanten die waarde hechten aan kwaliteit, precisie en
                persoonlijke service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wat begon als een kleine naaikamer is uitgegroeid tot een atelier
                waar traditie en moderne technieken samenkomen. Elke dag opnieuw
                zetten wij ons in om uw kleding de aandacht te geven die het
                verdient.
              </p>
            </div>

            <div className="relative">
              <img
                src={bridalWork}
                alt="Ons atelier"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-serif font-bold">20+</p>
                <p className="text-sm opacity-90">Jaar ervaring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
              Ons verhaal
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Het begon allemaal met een naaimachine en een droom. Als kind
                keek ik gefascineerd toe hoe mijn grootmoeder de mooiste creaties
                maakte met haar handen. Die vonk van passie is nooit gedoofd.
              </p>
              <p className="leading-relaxed mb-6">
                Na jarenlange opleiding en ervaring bij gerenommeerde ateliers,
                opende ik in 2004 de deuren van Atelier Maatwerk. Sindsdien heb ik
                het voorrecht gehad om duizenden klanten te mogen helpen met hun
                kleding.
              </p>
              <p className="leading-relaxed mb-6">
                Van het inkorten van een broek tot het creëren van een complete
                bruidsjurk – elk project krijgt dezelfde toewijding en aandacht
                voor detail. Want achter elk kledingstuk schuilt een verhaal, en
                dat verhaal verdient respect.
              </p>
              <p className="leading-relaxed">
                Vandaag de dag sta ik nog steeds met evenveel plezier in het
                atelier. De voldoening die ik krijg wanneer een klant met een
                glimlach vertrekt, is de beste beloning die er is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Onze waarden
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deze kernwaarden vormen de basis van alles wat wij doen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-8 border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Maak kennis met ons atelier
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Wij verwelkomen u graag voor een persoonlijk gesprek. Ontdek zelf
              de sfeer en het vakmanschap van ons atelier.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Plan een bezoek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
