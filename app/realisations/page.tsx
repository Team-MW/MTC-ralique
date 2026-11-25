import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import { faq } from "@/lib/faq";
import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import { categories, getRealisations } from "@/lib/realisations";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Galerie photos des chantiers de MT Céramique : H&M Forum des Halles à Paris, Lidl Carmaux, Intermarché Salernes, Géant Casino Bastia, laboratoires et poses 60 × 60.",
};

export default function Realisations() {
  return (
    <>
      <PageHeader
        eyebrow="Nos réalisations"
        title="Les réalisations de nos carreleurs à travers la France"
        lead="Parcourez notre galerie photos et découvrez nos prestations sur des chantiers partout en France."
      />

      <section className="section">
        <div className="wrap">
          <Gallery items={getRealisations()} filters={categories} />
        </div>
      </section>

      <Faq items={faq.realisations} tint />

      <CtaBand />
    </>
  );
}
