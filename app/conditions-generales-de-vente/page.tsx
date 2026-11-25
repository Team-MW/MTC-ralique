import type { Metadata } from "next";
import Link from "next/link";
import Champ from "@/components/Champ";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente des prestations de pose de carrelage de MT Céramique.",
};

export default function ConditionsGeneralesDeVente() {
  const { legal } = site;

  return (
    <>
      <PageHeader
        eyebrow="CGV"
        title="Conditions générales de vente"
        lead="Elles s’appliquent aux prestations de pose de carrelage réalisées par MT Céramique."
      />

      <section className="section">
        <div className="wrap legal prose">
          <h2>1. Objet et champ d’application</h2>
          <p>
            Les présentes conditions générales de vente (CGV) régissent les relations entre la société{" "}
            {legal.raisonSociale}, {legal.forme}, dont le siège est situé {legal.adresse}, SIRET {legal.siret}{" "}
            (ci-après «&nbsp;l’entreprise&nbsp;»), et toute personne physique ou morale lui confiant des travaux
            (ci-après «&nbsp;le client&nbsp;»).
          </p>
          <p>
            Toute commande implique l’acceptation sans réserve des présentes CGV. Elles prévalent sur tout autre
            document du client, sauf accord écrit de l’entreprise. Les conditions particulières inscrites sur le devis
            prévalent sur les présentes CGV.
          </p>

          <h2>2. Devis et commande</h2>
          <p>
            Chaque prestation fait l’objet d’un devis écrit décrivant les travaux, les matériaux, les surfaces et le
            prix. Le devis est valable pendant la durée qui y est indiquée.
          </p>
          <p>
            La commande est ferme à réception du devis daté et signé par le client, accompagné le cas échéant de
            l’acompte prévu. Toute modification demandée après signature fait l’objet d’un avenant ou d’un devis
            complémentaire accepté par écrit.
          </p>

          <h2>3. Prix</h2>
          <p>
            Les prix sont exprimés en euros, hors taxes. La TVA est appliquée au taux en vigueur à la date de
            facturation. Les prix correspondent aux travaux décrits au devis&nbsp;; les travaux supplémentaires ou
            imprévus, notamment ceux liés à l’état du support, sont chiffrés séparément.
          </p>

          <h2>4. Conditions de paiement</h2>
          <p>
            L’acompte éventuel, l’échéancier et le délai de paiement sont ceux indiqués sur le devis et rappelés sur
            la facture. Aucun escompte n’est accordé pour paiement anticipé, sauf mention contraire.
          </p>
          <p>
            Pour les clients professionnels, tout retard de paiement entraîne de plein droit, dès le lendemain de la
            date d’échéance, des pénalités calculées au taux de trois fois le taux d’intérêt légal, ainsi qu’une
            indemnité forfaitaire pour frais de recouvrement de 40&nbsp;€ (articles L.441-10 et D.441-5 du Code de
            commerce).
          </p>
          <p>
            En cas de retard de paiement, l’entreprise peut suspendre les travaux en cours après mise en demeure
            restée sans effet.
          </p>

          <h2>5. Délais d’exécution</h2>
          <p>
            Les dates de démarrage et la durée des travaux sont celles convenues au devis ou au planning du chantier.
            Elles sont prolongées de plein droit en cas de force majeure, d’intempéries, de retard des autres corps
            d’état, de support non conforme ou non prêt, de travaux supplémentaires ou de retard de paiement.
          </p>

          <h2>6. Obligations du client</h2>
          <p>Avant le démarrage et pendant toute la durée des travaux, le client s’engage à&nbsp;:</p>
          <ul className="legal__bullets">
            <li>donner accès au chantier et libérer les zones à carreler&nbsp;;</li>
            <li>mettre à disposition l’eau et l’électricité nécessaires&nbsp;;</li>
            <li>livrer un support conforme aux règles de l’art, sec, propre et aux niveaux prévus&nbsp;;</li>
            <li>protéger les sols et interdire leur circulation pendant les temps de séchage indiqués.</li>
          </ul>

          <h2>7. Matériaux</h2>
          <p>
            Les carreaux peuvent présenter de légères variations de teinte ou de calibre d’un lot à l’autre, inhérentes
            à leur fabrication&nbsp;; elles ne constituent pas un défaut. Lorsque les matériaux sont fournis par le
            client, celui-ci reste responsable de leur qualité, de leur quantité et de leur conformité à l’usage prévu.
          </p>

          <h2>8. Réception des travaux</h2>
          <p>
            À l’achèvement des travaux, la réception est prononcée contradictoirement avec le client, avec ou sans
            réserves. Elle fait l’objet d’un procès-verbal. La prise de possession ou la mise en service des locaux
            sans réserve vaut réception.
          </p>

          <h2>9. Garanties et assurance</h2>
          <p>Les travaux bénéficient des garanties légales prévues par le Code civil&nbsp;:</p>
          <ul className="legal__bullets">
            <li>la garantie de parfait achèvement, pendant un an à compter de la réception (article 1792-6)&nbsp;;</li>
            <li>la garantie de bon fonctionnement, pendant deux ans à compter de la réception (article 1792-3)&nbsp;;</li>
            <li>la garantie décennale, pendant dix ans à compter de la réception (articles 1792 et suivants).</li>
          </ul>
          <p>
            Ces garanties ne couvrent pas les dommages résultant d’un usage anormal, d’un défaut d’entretien, de
            l’usure normale ou de l’intervention d’un tiers.
          </p>
          <p>
            Assurance de responsabilité décennale&nbsp;: <Champ valeur={legal.assurance} />
          </p>

          <h2>10. Réserve de propriété</h2>
          <p>
            Les matériaux fournis par l’entreprise restent sa propriété jusqu’au paiement intégral du prix. Les
            risques sont transférés au client dès leur livraison sur le chantier.
          </p>

          <h2>11. Droit de rétractation</h2>
          <p>
            Le client consommateur qui a conclu le contrat à distance ou hors établissement dispose d’un délai de
            quatorze (14) jours pour se rétracter, sans avoir à motiver sa décision (articles L.221-18 et suivants du
            Code de la consommation). Il exerce ce droit par courrier ou par e-mail à{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Si les travaux ont commencé à sa demande expresse avant
            la fin de ce délai, il reste redevable de la part déjà exécutée.
          </p>

          <h2>12. Force majeure</h2>
          <p>
            L’entreprise n’est pas responsable d’un retard ou d’une inexécution dus à un cas de force majeure au sens
            de l’article 1218 du Code civil.
          </p>

          <h2>13. Données personnelles</h2>
          <p>
            Les données recueillies pour l’établissement des devis et des factures sont traitées conformément à nos{" "}
            <Link href="/mentions-legales">mentions légales</Link>.
          </p>

          <h2>14. Médiation de la consommation</h2>
          <p>
            En cas de litige non résolu après une réclamation écrite auprès de l’entreprise, le client consommateur
            peut saisir gratuitement le médiateur de la consommation&nbsp;: <Champ valeur={legal.mediateur} />
          </p>

          <h2>15. Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. À défaut d’accord amiable, tout litige est porté devant
            les tribunaux français compétents&nbsp;; entre professionnels, devant les tribunaux du ressort du siège de
            l’entreprise.
          </p>
        </div>
      </section>
    </>
  );
}
