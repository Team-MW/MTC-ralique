import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Photo from "@/components/Photo";
import { faq } from "@/lib/faq";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Nos prestations",
  description:
    "Pose collée, pose scellée, pose sur chape à prise rapide, carrelage U4P4S : les prestations de carrelage de MT Céramique, en formats 60 × 60, 40 × 40 et 20 × 20 cm.",
};

const prestations = [
  {
    title: "Pose collée",
    file: "chantier-carreleur.webp",
    alt: "Carreleur posant des carreaux à la colle",
    text: "Les carreaux sont collés sur un support plan et préparé. C’est la technique que nous utilisons pour les grands formats des surfaces de vente et des circulations.",
    points: ["Formats 60 × 60 cm et 40 × 40 cm", "Surfaces de vente et galeries marchandes", "Pièces de vie et parties communes en logement"],
  },
  {
    title: "Pose scellée",
    file: "laboratoire-pose-scellee.webp",
    alt: "Laboratoire carrelé en 20 × 20 cm, pose scellée",
    text: "Les carreaux sont posés sur un lit de mortier. Cette pose traditionnelle convient aux petits formats des zones techniques.",
    points: ["Format 20 × 20 cm", "Laboratoires et zones de préparation", "Locaux techniques"],
  },
  {
    title: "Pose sur chape à prise rapide",
    file: "pose-collee-chape-rapide.webp",
    alt: "Carrelage 60 × 60 posé sur chape à prise rapide",
    text: "Une chape à prise rapide permet de carreler plus tôt qu’avec une chape traditionnelle. Elle répond aux plannings serrés et limite la durée d’immobilisation des locaux.",
    points: ["Ouvertures et rénovations de magasins", "Chantiers à délais courts", "Pose collée 60 × 60 cm"],
  },
  {
    title: "Carrelage U4P4S",
    file: "pose-collee-u4p4s.webp",
    alt: "Allée carrelée en 60 × 60 cm U4P4S",
    text: "Dans le classement UPEC des revêtements de sol, U4 et P4S sont les niveaux les plus élevés de résistance à l’usure et au poinçonnement. Ces carreaux sont destinés aux sols les plus sollicités.",
    points: ["Trafic piétonnier intense", "Chariots, transpalettes et charges roulantes", "Surfaces de vente de la grande distribution"],
  },
];

const formats = [
  { format: "60 × 60 cm", pose: "Pose collée", usage: "Surfaces de vente, galeries marchandes" },
  { format: "40 × 40 cm", pose: "Pose collée", usage: "Magasins, circulations" },
  { format: "20 × 20 cm", pose: "Pose scellée", usage: "Laboratoires, zones techniques" },
];

export default function Prestations() {
  return (
    <>
      <PageHeader
        eyebrow="Nos prestations"
        title="La pose adaptée à chaque usage"
        lead="Un sol de magasin, un laboratoire et un logement ne se carrellent pas de la même façon. Nous choisissons la technique de pose selon l’usage du local."
      />

      <section className="section">
        <div className="wrap">
          {prestations.map((p) => (
            <article className="presta" key={p.title}>
              <Photo className="presta__tile" file={p.file} alt={p.alt} sizes="(max-width: 800px) 100vw, 360px" />
              <div>
                <h2>{p.title}</h2>
                <p className="muted">{p.text}</p>
                <ul className="checks">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">Formats</p>
              <h2>Les formats que nous posons le plus souvent</h2>
            </div>
          </div>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Format</th>
                  <th scope="col">Technique</th>
                  <th scope="col">Locaux</th>
                </tr>
              </thead>
              <tbody>
                {formats.map((f) => (
                  <tr key={f.format}>
                    <th scope="row">{f.format}</th>
                    <td>{f.pose}</td>
                    <td>{f.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Faq items={faq.prestations} />

      <CtaBand />
    </>
  );
}
