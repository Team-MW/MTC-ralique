import Link from "next/link";
import Clients from "@/components/Clients";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Photo from "@/components/Photo";
import ZoneIntervention from "@/components/ZoneIntervention";
import { faq } from "@/lib/faq";
import { getRealisations } from "@/lib/realisations";
import { site } from "@/lib/site";

// Couleur de chacun des 16 carreaux du visuel d'accueil ("" = carreau neutre).
const mosaic = ["", "", "is-noir", "", "", "is-rouge", "", "", "", "", "", "is-ciel", "is-or", "", "", ""];

const prestations = [
  { title: "Pose collée", text: "Grands formats 60 × 60 et 40 × 40 cm pour les surfaces de vente.", file: "chantier-carreleur.webp" },
  { title: "Pose scellée", text: "Carreaux 20 × 20 cm pour les laboratoires et zones techniques.", file: "laboratoire-pose-scellee.webp" },
  { title: "Chape à prise rapide", text: "Pour tenir les délais et limiter l’immobilisation des locaux.", file: "pose-collee-chape-rapide.webp" },
  { title: "Carrelage U4P4S", text: "Pour les sols soumis à un trafic intense et aux charges roulantes.", file: "pose-collee-u4p4s.webp" },
];

export default function Accueil() {
  const apercu = getRealisations().slice(0, 8);

  return (
    <>
      <section className="hero">
        <div className="wrap hero__in">
          <div>
            <p className="eyebrow">Entreprise de carrelage · {site.city} (31)</p>
            <h1>
              Les réalisations de nos carreleurs <em>à travers la France</em>
            </h1>
            <p className="lead">
              Surfaces de vente, galeries marchandes, laboratoires, logements&nbsp;: {site.name} pose vos sols carrelés
dans toute la France.
            </p>
            <div className="hero__cta">
              <Link className="btn" href="/contact">
                Demander un devis
              </Link>
              <Link className="btn btn--ghost" href="/realisations">
                Voir nos réalisations
              </Link>
            </div>
          </div>
          <div className="mosaic" aria-hidden="true">
            {mosaic.map((c, i) => (
              <span key={i} className={c || undefined} />
            ))}
          </div>
        </div>
      </section>

      <Clients defilement />

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Présentation</p>
            <h2>Des carreleurs de chantier, pour des sols qui durent</h2>
          </div>
          <div className="prose">
            <p>
              Installée à {site.city}, près de Toulouse, {site.name} pose du carrelage dans toute la France pour la
              grande distribution, et en Midi-Pyrénées pour les logements.
            </p>
            <p>Paris, le Var, le Tarn, la Corse&nbsp;: nous nous déplaçons là où se trouve votre chantier.</p>
            <Link className="link" href="/presentation">
              Découvrir l’entreprise
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">Nos domaines</p>
              <h2>Deux métiers, une même exigence</h2>
            </div>
          </div>
          <div className="cards cards--2">
            <Link className="sector" href="/grande-distribution">
              <Photo className="sector__tile" file="galerie-marchande-allee.webp" alt="Allée carrelée d’une galerie marchande" />
              <div className="sector__body">
                <h3>Grande distribution</h3>
                <p>Surfaces de vente, galeries marchandes et laboratoires pour les enseignes.</p>
                <span className="sector__more">En savoir plus</span>
              </div>
            </Link>
            <Link className="sector" href="/logements">
              <Photo className="sector__tile" file="chantier-immeuble.webp" alt="Immeuble en construction, matériel MT Céramique au premier plan" />
              <div className="sector__body">
                <h3>Logements</h3>
                <p>Pièces de vie, cuisines, salles d’eau et parties communes.</p>
                <span className="sector__more">En savoir plus</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">Nos prestations</p>
              <h2>La pose adaptée à chaque usage</h2>
            </div>
            <Link className="link" href="/prestations">
              Toutes nos prestations
            </Link>
          </div>
          <div className="cards">
            {prestations.map((p) => (
              <article className="card" key={p.title}>
                <Photo className="card__tile" file={p.file} alt="" sizes="(max-width: 560px) 100vw, 300px" />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">Nos réalisations</p>
              <h2>Découvrez nos chantiers en photos</h2>
            </div>
            <Link className="link" href="/realisations">
              Toute la galerie
            </Link>
          </div>
          <Gallery items={apercu} />
        </div>
      </section>

      <ZoneIntervention />

      <Faq items={faq.accueil} tint />

      <CtaBand />
    </>
  );
}
