import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import { getRealisations } from "@/lib/realisations";

export const metadata: Metadata = {
  title: "Grande distribution",
  description:
    "Carrelage des surfaces de vente, galeries marchandes et laboratoires de la grande distribution. Références : H&M Forum des Halles, Lidl, Intermarché, Géant Casino.",
};

const zones = [
  { title: "Surfaces de vente", text: "Grands formats 60 × 60 et 40 × 40 cm en pose collée, avec des carreaux U4P4S pour résister aux chariots et aux transpalettes.", t: 44 },
  { title: "Galeries marchandes", text: "Des circulations très fréquentées, carrelées pour supporter des milliers de passages par jour.", t: 30 },
  { title: "Laboratoires", text: "Boucherie, boulangerie, poissonnerie : carreaux 20 × 20 cm en pose scellée pour les zones de préparation.", t: 16 },
];

export default function GrandeDistribution() {
  const chantiers = getRealisations().filter((r) => r.cat !== "pose");

  return (
    <>
      <PageHeader
        eyebrow="Grande distribution"
        title="Magasins, galeries marchandes et laboratoires"
        lead="Un sol de magasin doit supporter les chariots, les transpalettes et des milliers de passages par jour. Nous carrelons les sols des enseignes, partout en France."
      />

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">Nos interventions</p>
              <h2>Chaque zone du magasin a son carrelage</h2>
            </div>
          </div>
          <div className="cards cards--3">
            {zones.map((z) => (
              <article className="card" key={z.title}>
                <div className="card__tile tile" style={{ "--t": `${z.t}px` } as CSSProperties} />
                <h3>{z.title}</h3>
                <p>{z.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap split split--center">
          <div>
            <p className="eyebrow">Références</p>
            <h2>Des enseignes nous ont confié leurs sols</h2>
            <p className="muted">
              Quand le planning d’ouverture est serré, la pose sur chape à prise rapide réduit la durée
              d’immobilisation des locaux.
            </p>
            <Link className="link" href="/prestations">
              Voir nos techniques de pose
            </Link>
          </div>
          <ul className="refs" style={{ marginTop: 0 }}>
            <li>
              <strong>H&amp;M</strong>Forum des Halles, Paris
            </li>
            <li>
              <strong>Lidl</strong>Carmaux (81)
            </li>
            <li>
              <strong>Intermarché</strong>Salernes (83)
            </li>
            <li>
              <strong>Géant Casino</strong>Galerie marchande, Bastia
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">En images</p>
              <h2>Nos chantiers pour la grande distribution</h2>
            </div>
            <Link className="link" href="/realisations">
              Toute la galerie
            </Link>
          </div>
          <Gallery items={chantiers} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
