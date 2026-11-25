import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Présentation",
  description:
    "MT Céramique, entreprise de carrelage installée à Plaisance-du-Touch (31), intervient partout en France pour la grande distribution et les logements.",
};

const etapes = [
  { title: "Étude du chantier", text: "Surface, format des carreaux, type de local et délais : nous cadrons le projet avec vous avant de chiffrer." },
  { title: "Préparation du support", text: "Le support est contrôlé et préparé. Selon le planning, la pose peut se faire sur chape à prise rapide." },
  { title: "Pose", text: "Pose collée ou pose scellée, selon l’usage du local et le format des carreaux retenus." },
  { title: "Finitions", text: "Jointoiement, nettoyage de fin de chantier et réception du sol avec vous." },
];

const zones = [
  { lieu: "Paris", chantier: "H&M Forum des Halles" },
  { lieu: "Var (83)", chantier: "Intermarché Salernes" },
  { lieu: "Tarn (81)", chantier: "Lidl Carmaux" },
  { lieu: "Haute-Corse", chantier: "Géant Casino Bastia" },
];

export default function Presentation() {
  return (
    <>
      <PageHeader
        eyebrow="Présentation"
        title="Des carreleurs de chantier, pour des sols qui durent"
        lead={`${site.name} pose du carrelage pour la grande distribution et les logements, depuis ${site.city} et partout en France.`}
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">L’entreprise</p>
            <h2>Basés près de Toulouse, présents sur vos chantiers</h2>
          </div>
          <div className="prose">
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

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Zone d’intervention</p>
            <h2>Partout en France</h2>
            <p className="muted">
              Nous nous déplaçons là où se trouve votre chantier, sur le continent comme en Corse. Quelques exemples
              de chantiers réalisés&nbsp;:
            </p>
            <Link className="link" href="/realisations">
              Voir nos réalisations
            </Link>
          </div>
          <ul className="refs" style={{ marginTop: 0 }}>
            {zones.map((z) => (
              <li key={z.lieu}>
                <strong>{z.lieu}</strong>
                {z.chantier}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
