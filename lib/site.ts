// Informations de l'entreprise, utilisées sur tout le site.

export const site = {
  name: "MT Céramique",
  phone: "05 32 60 54 05",
  phoneHref: "tel:+33532605405",
  street: "10 rue Isaac Newton",
  postalCode: "31830",
  city: "Plaisance-du-Touch",
  mapsQuery: "10+rue+Isaac+Newton+31830+Plaisance-du-Touch",

  // Mentions légales : remplacer chaque `null` par la valeur réelle.
  legal: {
    forme: null as string | null, // ex. « SARL au capital de 10 000 € »
    siret: null as string | null,
    rcs: null as string | null, // ex. « RCS Toulouse 123 456 789 »
    tva: null as string | null,
    directeur: null as string | null, // directeur de la publication
    hebergeur: null as string | null, // nom, adresse et téléphone de l'hébergeur
  },
};

export const nav = [
  { href: "/presentation", label: "Présentation" },
  { href: "/prestations", label: "Prestations" },
  { href: "/grande-distribution", label: "Grande distribution" },
  { href: "/logements", label: "Logements" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];
