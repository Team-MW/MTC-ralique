import type { Metadata } from "next";
import MapEmbed from "@/components/MapEmbed";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact et devis",
  description:
    "Contactez MT Céramique au 05 32 60 54 05 pour un devis de pose de carrelage. 10 rue Isaac Newton, 31830 Plaisance-du-Touch.",
};

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact · Devis"
        title="Un chantier à carreler ? Appelez-nous."
        lead="Décrivez-nous votre projet par téléphone, nous vous préparons un devis."
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Téléphone</p>
            <a className="contact__phone" href={site.phoneHref}>
              {site.phone}
            </a>

            <div className="contact__block">
              <h2>Adresse</h2>
              <address>
                {site.name}
                <br />
                {site.street}
                <br />
                {site.postalCode} {site.city}
              </address>
              <a
                className="link"
                style={{ marginTop: 12 }}
                href={`https://www.google.com/maps/search/?api=1&query=${site.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir l’itinéraire
              </a>
            </div>

            <div className="contact__block">
              <h2>Pour préparer votre devis</h2>
              <ul className="checks">
                <li>
                  <strong>Le lieu</strong> du chantier
                </li>
                <li>
                  <strong>Le type de local</strong>&nbsp;: magasin, laboratoire, logement…
                </li>
                <li>
                  <strong>La surface</strong> à carreler, en m²
                </li>
                <li>
                  <strong>Le format</strong> des carreaux souhaité
                </li>
                <li>
                  <strong>Les délais</strong> et la date de démarrage
                </li>
              </ul>
            </div>
          </div>

          <MapEmbed />
        </div>
      </section>
    </>
  );
}
