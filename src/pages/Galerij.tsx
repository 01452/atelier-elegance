import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import fabricDetail from "@/assets/fabric-detail.jpg";
import bridalWork from "@/assets/bridal-work.jpg";
import stitchingDetail from "@/assets/stitching-detail.jpg";
import heroImage from "@/assets/hero-tailoring.jpg";

const galleryItems = [
  {
    id: 1,
    image: bridalWork,
    title: "Bruidswerk",
    category: "Bruidskleding",
  },
  {
    id: 2,
    image: fabricDetail,
    title: "Stoffenselectie",
    category: "Materialen",
  },
  {
    id: 3,
    image: stitchingDetail,
    title: "Handwerk detail",
    category: "Vakmanschap",
  },
  {
    id: 4,
    image: heroImage,
    title: "Precisiewerk",
    category: "Maatwerk",
  },
  {
    id: 5,
    image: fabricDetail,
    title: "Zijde & Satijn",
    category: "Materialen",
  },
  {
    id: 6,
    image: bridalWork,
    title: "Avondkleding",
    category: "Gelegenheidskleding",
  },
];

export default function Galerij() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Ons werk
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Galerij van vakmanschap
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ontdek de kwaliteit en aandacht voor detail die wij in elk project
              stoppen. Van bruidskleding tot alledaagse herstellingen – elk
              kledingstuk wordt met zorg behandeld.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-primary-foreground/80 text-sm mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-xl text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Geïnspireerd door wat u ziet?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Laat ons ook voor u aan de slag gaan. Neem contact op voor een
              vrijblijvend gesprek over uw project.
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
