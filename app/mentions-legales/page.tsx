import type { Metadata } from "next";
import Link from "next/link";
import Champ from "@/components/Champ";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales et RGPD",
  description: "Mentions légales, protection des données personnelles et gestion des cookies du site mtceramique.fr.",
};

export default function MentionsLegales() {
  const { legal } = site;

  return (
    <>
      <PageHeader eyebrow="Législation & RGPD" title="Mentions légales et RGPD" />

      <section className="section">
        <div className="wrap legal prose">
          <h2>1. Éditeur du site</h2>
          <dl className="legal__list">
            <dt>Raison sociale</dt>
            <dd>{legal.raisonSociale}</dd>
            <dt>Forme juridique</dt>
            <dd>{legal.forme}</dd>
            <dt>Capital social</dt>
            <dd>{legal.capital}</dd>
            <dt>Enseigne</dt>
            <dd>{legal.raisonSociale}</dd>
            <dt>Adresse</dt>
            <dd>{legal.adresse}</dd>
            <dt>Téléphone</dt>
            <dd>
              <a href={legal.telephoneHref}>{legal.telephone}</a>
            </dd>
            <dt>E-mail</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
            <dt>Directeur de la publication</dt>
            <dd>{legal.directeur}</dd>
            <dt>SIREN</dt>
            <dd>{legal.siren}</dd>
            <dt>SIRET</dt>
            <dd>{legal.siret}</dd>
            <dt>TVA intracommunautaire</dt>
            <dd>{legal.tva}</dd>
          </dl>

          <h2>2. Hébergeur</h2>
          <p>
            {legal.hebergeur.nom}
            <br />
            Siège social&nbsp;: {legal.hebergeur.adresse}
            <br />
            Téléphone&nbsp;: {legal.hebergeur.telephone}
          </p>

          <h2>3. Conception et réalisation</h2>
          <p>
            Site conçu et réalisé par{" "}
            <a href={site.credit.url} target="_blank" rel="noopener noreferrer">
              {site.credit.name}
            </a>
            .
          </p>

          <h2>4. Médiateur de la consommation</h2>
          <p>
            Conformément aux articles L.612-1 et suivants du Code de la consommation, le client consommateur peut
            recourir gratuitement à un médiateur de la consommation en cas de litige non résolu avec l’entreprise.
          </p>
          <p>
            Médiateur désigné&nbsp;: <Champ valeur={legal.mediateur} />
          </p>

          <h2>5. Conditions d’utilisation</h2>
          <p>
            Le site est accessible à l’adresse <a href={site.url}>mtceramique.fr</a>. Son utilisation est régie par
            les présentes conditions. En utilisant le site, vous reconnaissez en avoir pris connaissance et les avoir
            acceptées. Elles peuvent être modifiées à tout moment et sans préavis par la société {legal.raisonSociale}.
          </p>
          <p>
            La société {legal.raisonSociale} ne saurait être tenue pour responsable d’une mauvaise utilisation du
            service.
          </p>

          <h2>6. Limitation de la responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement mis
            à jour. Il peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une
            erreur ou un dysfonctionnement, merci de le signaler par e-mail en décrivant le problème le plus
            précisément possible.
          </p>
          <p>Les photos présentées sur le site sont non contractuelles.</p>
          <p>
            Les liens hypertextes présents sur ce site en direction d’autres sites internet ne sauraient engager la
            responsabilité de {legal.raisonSociale}.
          </p>

          <h2>7. Propriété intellectuelle</h2>
          <p>
            Tout le contenu du présent site — graphismes, images, textes, logos et icônes, ainsi que leur mise en
            forme — est la propriété exclusive de la société {legal.raisonSociale}, à l’exception des marques, logos
            ou contenus appartenant à d’autres sociétés ou auteurs.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
            de ces éléments est strictement interdite sans l’accord exprès et écrit de {legal.raisonSociale}.
          </p>

          <h2>8. Données personnelles</h2>
          <p>
            Ce site ne comporte ni formulaire, ni espace client, ni inscription à une lettre d’information, ni outil
            de mesure d’audience. Aucune donnée personnelle n’est collectée lors de votre navigation.
          </p>
          <p>
            Si vous nous contactez par téléphone ou par e-mail, les informations que vous nous communiquez (nom,
            adresse e-mail, numéro de téléphone) sont utilisées par {legal.raisonSociale} uniquement pour traiter
            votre demande. Elles sont conservées deux (2) ans à compter de notre dernier contact et ne sont pas
            transmises à des tiers, hormis pour la bonne exécution de la prestation commandée.
          </p>
          <h3>Vos droits</h3>
          <p>
            Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et
            Libertés, vous disposez d’un droit d’accès, de rectification et de suppression des données qui vous
            concernent. Une preuve de votre identité peut vous être demandée avant de répondre à votre demande.
          </p>
          <p>
            Ces droits s’exercent par courrier à {legal.raisonSociale}, {legal.adresse}, ou par e-mail à{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez également adresser une réclamation à la
            CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
          </p>

          <h2 id="cookies">9. Gestion des cookies</h2>
          <p>
            Un «&nbsp;cookie&nbsp;» ou traceur est un fichier déposé sur votre terminal (ordinateur, tablette,
            smartphone) et lu lors de la consultation d’un site internet.
          </p>
          <p>
            Lors de votre première visite, une fenêtre de gestion du consentement vous permet d’accepter, de refuser
            ou de personnaliser les cookies. Votre choix est conservé pendant trois (3) mois.
          </p>
          <h3>Cookies essentiels</h3>
          <p>
            Un cookie fonctionnel mémorise votre choix en matière de cookies. Il est nécessaire au fonctionnement du
            site et ne peut pas être désactivé.
          </p>
          <h3>Carte Google Maps</h3>
          <p>
            La page Contact propose un plan d’accès fourni par Google Maps. La carte n’est chargée que si vous l’avez
            acceptée, ou si vous cliquez sur «&nbsp;Afficher la carte&nbsp;». Google peut alors déposer ses propres
            cookies, selon sa politique de confidentialité.
          </p>
          <p>Ce site n’utilise aucun cookie de mesure d’audience ni de publicité ciblée.</p>
          <p>
            Vous pouvez modifier votre choix à tout moment&nbsp;:{" "}
            <CookieSettingsButton>Modifier vos préférences</CookieSettingsButton>. Pour en savoir plus sur les
            cookies&nbsp;:{" "}
            <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer">
              cnil.fr
            </a>
            .
          </p>

          <h2>10. Litiges</h2>
          <p>
            Les présentes conditions sont régies par la loi française. Toute contestation ou litige qui pourrait
            naître de leur interprétation ou de leur exécution relève de la compétence des tribunaux français. La
            langue de référence pour le règlement d’éventuels contentieux est le français.
          </p>
          <p>
            Les prestations de l’entreprise sont régies par nos{" "}
            <Link href="/conditions-generales-de-vente">conditions générales de vente</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
