import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl text-foreground mb-8">
              Privacybeleid
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead mb-8">
                Atelier Maatwerk hecht groot belang aan de bescherming van uw
                persoonsgegevens. In dit privacybeleid leggen wij uit welke
                gegevens wij verzamelen en hoe wij deze gebruiken.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                1. Welke gegevens verzamelen wij?
              </h2>
              <p>
                Wanneer u contact met ons opneemt via ons contactformulier,
                verzamelen wij de volgende gegevens:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer (optioneel)</li>
                <li>De inhoud van uw bericht</li>
              </ul>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                2. Waarvoor gebruiken wij uw gegevens?
              </h2>
              <p>Wij gebruiken uw gegevens uitsluitend om:</p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Uw vraag te beantwoorden</li>
                <li>Een afspraak met u te maken</li>
                <li>U te informeren over onze diensten</li>
              </ul>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                3. Hoe lang bewaren wij uw gegevens?
              </h2>
              <p>
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is
                voor het doel waarvoor zij zijn verzameld. Correspondentie wordt
                maximaal 2 jaar bewaard.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                4. Delen van gegevens met derden
              </h2>
              <p>
                Wij delen uw persoonsgegevens niet met derden, tenzij dit
                noodzakelijk is voor de uitvoering van onze diensten of wanneer
                wij hiertoe wettelijk verplicht zijn.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                5. Uw rechten
              </h2>
              <p>U heeft het recht om:</p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Inzage te vragen in uw persoonsgegevens</li>
                <li>Uw gegevens te laten corrigeren of verwijderen</li>
                <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
              </ul>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                6. Contact
              </h2>
              <p>
                Heeft u vragen over dit privacybeleid of over de verwerking van
                uw persoonsgegevens? Neem dan contact met ons op via{" "}
                <a
                  href="mailto:info@ateliermaatwerk.be"
                  className="text-primary hover:underline"
                >
                  info@ateliermaatwerk.be
                </a>
                .
              </p>

              <p className="mt-12 text-sm">
                Laatst bijgewerkt: {new Date().toLocaleDateString("nl-BE")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
