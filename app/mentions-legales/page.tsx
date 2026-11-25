import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales et RGPD",
  // Page non indexée tant que les informations légales ne sont pas complètes.
  robots: { index: false },
};

/** Affiche la valeur, ou un repère visible tant qu'elle n'est pas renseignée dans lib/site.ts. */
function Champ({ valeur }: { valeur: string | null }) {
  return valeur ? <>{valeur}</> : <span className="todo">À compléter</span>;
}

export default function MentionsLegales() {
  const { legal } = site;

  return (
    <>
      <PageHeader eyebrow="Informations légales" title="Mentions légales et RGPD" />

      <section className="section">
        <div className="wrap legal prose">
          <h2>Éditeur du site</h2>
          <p>
            {site.name} — <Champ valeur={legal.forme} />
            <br />
            {site.street}, {site.postalCode} {site.city}
            <br />
            Téléphone&nbsp;: <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p>
            SIRET&nbsp;: <Champ valeur={legal.siret} />
            <br />
            Immatriculation&nbsp;: <Champ valeur={legal.rcs} />
            <br />
            TVA intracommunautaire&nbsp;: <Champ valeur={legal.tva} />
            <br />
            Directeur de la publication&nbsp;: <Champ valeur={legal.directeur} />
          </p>

          <h2>Hébergeur</h2>
          <p>
            <Champ valeur={legal.hebergeur} />
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, photographies et le logo présentés sur ce site sont la propriété de {site.name} ou de leurs
            auteurs respectifs. Toute reproduction sans autorisation préalable est interdite.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Ce site ne comporte ni formulaire, ni espace client, ni outil de mesure d’audience&nbsp;: il ne collecte
            aucune donnée personnelle et ne dépose aucun cookie de suivi.
          </p>
          <p>
            La page Contact propose une carte Google Maps. Elle n’est chargée que si vous cliquez sur «&nbsp;Afficher
            la carte&nbsp;»&nbsp;; Google peut alors déposer ses propres cookies, selon sa politique de
            confidentialité.
          </p>
          <p>
            Pour toute question relative à vos données, vous pouvez nous joindre au{" "}
            <a href={site.phoneHref}>{site.phone}</a> ou par courrier à l’adresse ci-dessus.
          </p>
        </div>
      </section>
    </>
  );
}
