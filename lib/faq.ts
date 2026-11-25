// Questions fréquentes, une série par page.

export type Question = { q: string; a: string };

const devis =
  "Appelez-nous au 05 32 60 54 05. Indiquez le lieu du chantier, le type de local, la surface à carreler, le format des carreaux et vos délais : nous préparons le devis à partir de ces éléments.";

export const faq = {
  accueil: [
    { q: "Dans quelles régions intervenez-vous ?", a: "Dans toute la France pour la grande distribution, et en Midi-Pyrénées pour les logements. Nous sommes basés à Plaisance-du-Touch, près de Toulouse, et nous avons réalisé des chantiers à Paris, dans le Var, dans le Tarn et en Corse." },
    { q: "Pour quels types de chantiers travaillez-vous ?", a: "Pour la grande distribution — surfaces de vente, galeries marchandes, laboratoires — et pour les programmes de logements." },
    { q: "Quels formats de carrelage posez-vous ?", a: "Le plus souvent des carreaux 60 × 60 cm et 40 × 40 cm en pose collée, et des carreaux 20 × 20 cm en pose scellée pour les laboratoires." },
    { q: "Comment obtenir un devis ?", a: devis },
  ],
  presentation: [
    { q: "Où se trouve MT Céramique ?", a: "Au 10 rue Isaac Newton, 31830 Plaisance-du-Touch, en Haute-Garonne, à l’ouest de Toulouse." },
    { q: "Vous déplacez-vous loin de Toulouse ?", a: "Oui. Pour la grande distribution, nos carreleurs se déplacent sur tout le territoire : nous avons par exemple travaillé à Paris, à Salernes dans le Var, à Carmaux dans le Tarn et à Bastia." },
    { q: "Comment se déroule un chantier avec vous ?", a: "En quatre étapes : étude du chantier, préparation du support, pose, puis finitions et réception du sol avec vous." },
    { q: "Qui contacter pour parler d’un projet ?", a: "Appelez le 05 32 60 54 05. Vous pouvez aussi passer nous voir à Plaisance-du-Touch." },
  ],
  prestations: [
    { q: "Quelle est la différence entre pose collée et pose scellée ?", a: "En pose collée, les carreaux sont fixés avec un mortier-colle sur un support déjà plan. En pose scellée, ils sont posés sur un lit de mortier frais, ce qui permet de rattraper les niveaux et de créer des pentes." },
    { q: "Que signifie U4P4S ?", a: "C’est un classement UPEC, qui note la résistance d’un revêtement de sol à l’usure (U), au poinçonnement (P), à l’eau (E) et aux agents chimiques (C). U4 et P4S sont les niveaux les plus élevés pour l’usure et le poinçonnement : ils conviennent aux sols très sollicités." },
    { q: "Pourquoi utiliser une chape à prise rapide ?", a: "Elle sèche plus vite qu’une chape traditionnelle : on peut carreler plus tôt et rendre les locaux plus rapidement. C’est utile quand la date d’ouverture d’un magasin est fixée." },
    { q: "Quel format choisir pour un laboratoire ?", a: "Nous y posons le plus souvent des carreaux 20 × 20 cm en pose scellée, adaptés aux zones de préparation." },
  ],
  distribution: [
    { q: "Quelles zones d’un magasin carrelez-vous ?", a: "Les surfaces de vente, les galeries marchandes, les sas d’entrée et les laboratoires." },
    { q: "Quel carrelage pour une surface de vente ?", a: "Des grands formats 60 × 60 ou 40 × 40 cm en pose collée, avec des carreaux classés U4P4S qui résistent aux chariots, aux transpalettes et au passage intense." },
    { q: "Pour quelles enseignes avez-vous travaillé ?", a: "H&M au Forum des Halles à Paris, Lidl à Carmaux, Intermarché à Salernes et Géant Casino à Bastia, entre autres." },
    { q: "Le planning d’ouverture est serré : est-ce possible ?", a: "La pose sur chape à prise rapide réduit la durée d’immobilisation des locaux. Indiquez-nous vos dates dès la demande de devis pour que nous organisions le chantier en conséquence." },
  ],
  logements: [
    { q: "Quelles pièces carrelez-vous dans un logement ?", a: "Les pièces de vie, les cuisines, les salles d’eau, ainsi que les parties communes de l’immeuble." },
    { q: "Dans quelle zone intervenez-vous pour les logements ?", a: "Dans toute la région Midi-Pyrénées : Haute-Garonne, Tarn, Tarn-et-Garonne, Gers, Ariège, Hautes-Pyrénées, Aveyron et Lot." },
    { q: "Quel format de carrelage pour un logement ?", a: "Cela dépend du programme. Nous posons couramment du 40 × 40 cm et du 60 × 60 cm en pose collée." },
    { q: "Comment faire chiffrer un programme ?", a: devis },
  ],
  realisations: [
    { q: "Où ces chantiers ont-ils été réalisés ?", a: "Dans toute la France : à Paris (H&M Forum des Halles), dans le Var (Intermarché Salernes), dans le Tarn (Lidl Carmaux) ou encore en Corse (Géant Casino Bastia)." },
    { q: "Comment retrouver un chantier proche de mon projet ?", a: "Utilisez les filtres au-dessus de la galerie : grande distribution, laboratoires, techniques de pose ou photos de chantier." },
    { q: "Quels formats voit-on sur les photos ?", a: "Principalement du 60 × 60 cm et du 40 × 40 cm en pose collée, et du 20 × 20 cm en pose scellée dans les laboratoires." },
  ],
  contact: [
    { q: "Comment demander un devis ?", a: devis },
    { q: "Où êtes-vous situés ?", a: "Au 10 rue Isaac Newton, 31830 Plaisance-du-Touch. Le lien « Voir l’itinéraire » ouvre le trajet dans Google Maps." },
    { q: "Intervenez-vous dans ma région ?", a: "Pour la grande distribution, nous intervenons dans toute la France, sur le continent comme en Corse. Pour les logements, nous intervenons en Midi-Pyrénées." },
  ],
} satisfies Record<string, Question[]>;
