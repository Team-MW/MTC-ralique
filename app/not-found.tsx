import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="Erreur 404" title="Cette page n’existe pas" lead="L’adresse est peut-être erronée, ou la page a été déplacée." />
      <section className="section">
        <div className="wrap">
          <Link className="btn" href="/">
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </>
  );
}
