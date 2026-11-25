// Informations de l'entreprise, utilisées sur tout le site.

export const site = {
  name: "MT Céramique",
  url: "https://mtceramique.fr",
  phone: "05 32 60 54 05",
  phoneHref: "tel:+33532605405",
  email: "contact@mtceramique.fr",
  street: "10 rue Isaac Newton",
  postalCode: "31830",
  city: "Plaisance-du-Touch",
  mapsQuery: "10+rue+Isaac+Newton+31830+Plaisance-du-Touch",

  // Crédit affiché en pied de page et dans les mentions légales.
  credit: { name: "Microdidact", url: "https://microdidact.com" },

  // Informations légales. Un champ à `null` s'affiche « À compléter » sur le site.
  legal: {
    raisonSociale: "MT CERAMIQUE",
    forme: "SASU — Société par actions simplifiée à associé unique",
    capital: "0 €",
    adresse: "Local A10, 10 rue Isaac Newton, 31830 Plaisance-du-Touch, France",
    telephone: "+33 6 24 44 84 85",
    telephoneHref: "tel:+33624448485",
    siren: "851 808 402",
    siret: "851 808 402 00024",
    tva: "FR85851808402",
    directeur: "Muhammet TOK",
    hebergeur: {
      nom: "OVH SAS",
      adresse: "2 rue Kellermann, 59100 Roubaix, France",
      telephone: "09 72 10 10 07",
    },
    // Médiateur de la consommation : nom de l'organisme, adresse et site internet.
    mediateur: null as string | null,
    // Assurance décennale : nom de l'assureur, adresse et zone de couverture.
    assurance: null as string | null,
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
