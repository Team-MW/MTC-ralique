// Entreprises pour lesquelles MT Céramique a travaillé. Logos dans public/logos/.

export type Client = {
  name: string;
  file: string;
  /** Dimensions du fichier, en pixels. */
  w: number;
  h: number;
  secteur: "distribution" | "logements";
};

export const clients: Client[] = [
  { name: "Lidl", file: "lidl.webp", w: 400, h: 300, secteur: "distribution" },
  { name: "Nexity", file: "nexity.webp", w: 260, h: 194, secteur: "logements" },
  { name: "Intermarché", file: "intermarche.webp", w: 400, h: 300, secteur: "distribution" },
  { name: "LP Promotion", file: "lp-promotion.webp", w: 191, h: 191, secteur: "logements" },
  { name: "E.Leclerc", file: "e-leclerc.webp", w: 400, h: 300, secteur: "distribution" },
  { name: "Garona", file: "garona.webp", w: 318, h: 96, secteur: "logements" },
  { name: "Auchan", file: "auchan.webp", w: 400, h: 300, secteur: "distribution" },
  { name: "ADN Patrimoine", file: "adn-patrimoine.webp", w: 300, h: 184, secteur: "logements" },
  { name: "H&M", file: "hm.webp", w: 400, h: 300, secteur: "distribution" },
  { name: "Pierre Passion", file: "pierre-passion.webp", w: 300, h: 202, secteur: "logements" },
  { name: "Aldi", file: "aldi.webp", w: 500, h: 300, secteur: "distribution" },
];
