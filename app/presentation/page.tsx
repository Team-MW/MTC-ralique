import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Photo from "@/components/Photo";
import ZoneIntervention from "@/components/ZoneIntervention";
import { faq } from "@/lib/faq";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Présentation",
  description:
    "MT Céramique, entreprise de carrelage installée à Plaisance-du-Touch (31), intervient dans toute la France pour la grande distribution et en Midi-Pyrénées pour les logements.",
};

const etapes = [
  { title: "Étude du chantier", text: "Surface, format des carreaux, type de local et délais : nous cadrons le projet avec vous avant de chiffrer." },
  { title: "Préparation du support", text: "Le support est contrôlé et préparé. Selon le planning, la pose peut se faire sur chape à prise rapide." },
  { title: "Pose", text: "Pose collée ou pose scellée, selon l’usage du local et le format des carreaux retenus." },
  { title: "Finitions", text: "Jointoiement, nettoyage de fin de chantier et réception du sol avec vous." },
];

export default function Presentation() {
  return (
    <>
      <PageHeader
        eyebrow="Présentation"
        title="Des carreleurs de chantier, pour des sols qui durent"
        lead={`Depuis ${site.city}, ${site.name} pose du carrelage dans toute la France pour la grande distribution, et en Midi-Pyrénées pour les logements.`}
      />

      <section className="section">
        <div className="wrap split split--center">
          <Photo className="media" file="chantier-equipe.webp" alt="Carreleurs MT Céramique en train de poser un sol" />
          <div className="prose">
            <p className="eyebrow">L’entreprise</p>
            <h2>Basés près de Toulouse, présents sur vos chantiers</h2>
            <p>
              {site.name} est une entreprise de carrelage installée au {site.street}, à {site.city}, en
              Haute-Garonne.
            </p>
            <p>
              Nos équipes travaillent aussi bien pour les enseignes de la grande distribution — magasins, galeries
              marchandes, zones de laboratoire — que pour les programmes de logements.
            </p>
            <p>
              Sur chaque chantier, vous avez un seul interlocuteur, de la préparation du support jusqu’aux finitions.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">Notre méthode</p>
              <h2>Un chantier en quatre étapes</h2>
            </div>
          </div>
          <ol className="steps">
            {etapes.map((e) => (
              <li key={e.title}>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band">
        <Photo file="damier.png" alt="Sol carrelé en damier clair et anthracite" sizes="100vw" />
      </section>

      <ZoneIntervention />

      <Faq items={faq.presentation} tint />

      <CtaBand />
    </>
  );
}
