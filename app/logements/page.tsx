import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Logements",
  description:
    "Pose de carrelage en logements : pièces de vie, cuisines, salles d'eau et parties communes. MT Céramique intervient sur vos programmes partout en France.",
};

const pieces = [
  { title: "Pièces de vie", text: "Séjours, entrées et dégagements : des carreaux posés à la colle, alignés d’une pièce à l’autre.", t: 44 },
  { title: "Cuisines et salles d’eau", text: "Des sols carrelés faciles à entretenir, dans les pièces les plus exposées à l’eau.", t: 24 },
  { title: "Parties communes", text: "Halls, paliers et circulations, où le passage est quotidien.", t: 34 },
];

export default function Logements() {
  return (
    <>
      <PageHeader
        eyebrow="Logements"
        title="Le carrelage de vos programmes de logements"
        lead="Nous réalisons la pose de carrelage en logements, des pièces de vie aux parties communes."
      />

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">Nos interventions</p>
              <h2>Du séjour aux parties communes</h2>
            </div>
          </div>
          <div className="cards cards--3">
            {pieces.map((p) => (
              <article className="card" key={p.title}>
                <div className="card__tile tile" style={{ "--t": `${p.t}px` } as CSSProperties} />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap split split--center">
          <div className="media tile" style={{ "--t": "48px" } as CSSProperties} aria-hidden="true">
            <span className="media__tag">40 × 40</span>
          </div>
          <div>
            <p className="eyebrow">Notre engagement</p>
            <h2>Un seul interlocuteur, du support aux finitions</h2>
            <ul className="checks" style={{ marginTop: 18 }}>
              <li>
                <strong>Avant la pose&nbsp;:</strong> contrôle et préparation du support.
              </li>
              <li>
                <strong>Pendant&nbsp;:</strong> une équipe de carreleurs dédiée à votre chantier.
              </li>
              <li>
                <strong>Après&nbsp;:</strong> jointoiement, nettoyage et réception du sol avec vous.
              </li>
            </ul>
            <Link className="link" href="/contact">
              Parler de votre projet
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
