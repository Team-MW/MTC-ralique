import fs from "node:fs";
import path from "node:path";

export type Categorie = "distribution" | "laboratoires" | "pose" | "chantier";

export const categories: { id: Categorie; label: string }[] = [
  { id: "distribution", label: "Grande distribution" },
  { id: "laboratoires", label: "Laboratoires" },
  { id: "pose", label: "Techniques de pose" },
  { id: "chantier", label: "En chantier" },
];

export type Realisation = {
  /** Nom du fichier photo dans public/realisations/ (sans extension). */
  slug: string;
  title: string;
  detail: string;
  cat: Categorie;
  /** Format du carreau en cm : règle l'échelle du motif affiché s'il n'y a pas de photo. */
  format: 20 | 40 | 60;
  /** Chemin public de la photo, ou null si le fichier est absent. */
  photo: string | null;
};

const liste: Omit<Realisation, "photo">[] = [
  { slug: "hm-forum-des-halles", title: "H&M Forum des Halles", detail: "Paris", cat: "distribution", format: 60 },
  { slug: "lidl-surface-de-vente", title: "Lidl", detail: "Surface de vente 60 × 60 cm", cat: "distribution", format: 60 },
  { slug: "geant-casino-bastia", title: "Géant Casino Bastia", detail: "Galerie marchande", cat: "distribution", format: 60 },
  { slug: "intermarche-salernes", title: "Intermarché Salernes", detail: "Var (83) · Pose 40 × 40 White", cat: "distribution", format: 40 },
  { slug: "galerie-marchande-verriere", title: "Galerie marchande", detail: "Sol carrelé sous verrière", cat: "distribution", format: 60 },
  { slug: "galerie-marchande-allee", title: "Galerie marchande", detail: "Allée commerçante", cat: "distribution", format: 60 },
  { slug: "lidl-carmaux", title: "Lidl Carmaux", detail: "Tarn (81)", cat: "distribution", format: 60 },
  { slug: "itm-salernes", title: "ITM Salernes", detail: "Sas d’entrée · Var (83)", cat: "distribution", format: 40 },
  { slug: "zone-laboratoire-20x20", title: "Zone laboratoire", detail: "Carrelage 20 × 20", cat: "laboratoires", format: 20 },
  { slug: "laboratoire-pose-scellee", title: "Laboratoire 20 × 20 cm", detail: "Pose scellée", cat: "laboratoires", format: 20 },
  { slug: "pose-collee-chape-rapide", title: "Pose collée 60 × 60", detail: "Sur chape à prise rapide", cat: "pose", format: 60 },
  { slug: "pose-collee-u4p4s", title: "Pose collée 60 × 60 cm", detail: "Carrelage U4P4S", cat: "pose", format: 60 },
  { slug: "fiandre-silver-ground", title: "Fiandre Silver Ground", detail: "Carrelage 40 × 40", cat: "pose", format: 40 },
  { slug: "damier", title: "Calepinage en damier", detail: "Carreaux clairs et anthracite", cat: "pose", format: 60 },
  { slug: "chantier-carreleur", title: "En chantier", detail: "Carreleur à la pose", cat: "chantier", format: 40 },
  { slug: "chantier-equipe", title: "En chantier", detail: "L’équipe à la pose", cat: "chantier", format: 20 },
  { slug: "chantier-pose-en-cours", title: "En chantier", detail: "Pose en cours", cat: "chantier", format: 60 },
  { slug: "chantier-pose-rails", title: "En chantier", detail: "Pose le long des seuils", cat: "chantier", format: 40 },
  { slug: "galerie-en-chantier", title: "En chantier", detail: "Galerie en cours de carrelage", cat: "chantier", format: 60 },
  { slug: "chantier-hall", title: "En chantier", detail: "Grande surface en cours de pose", cat: "chantier", format: 60 },
  { slug: "chantier-preparation", title: "En chantier", detail: "Travail du support", cat: "chantier", format: 60 },
  { slug: "chantier-chape-hall", title: "En chantier", detail: "Chape avant carrelage", cat: "chantier", format: 60 },
  { slug: "chantier-chape-logement", title: "En chantier", detail: "Chape dans un logement", cat: "chantier", format: 40 },
  { slug: "chantier-immeuble", title: "En chantier", detail: "Immeuble en construction", cat: "chantier", format: 40 },
];

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

function trouverPhoto(slug: string): string | null {
  const dossier = path.join(process.cwd(), "public", "realisations");
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(dossier, `${slug}.${ext}`))) return `/realisations/${slug}.${ext}`;
  }
  return null;
}

/** À appeler côté serveur uniquement : associe à chaque chantier sa photo si elle existe. */
export function getRealisations(): Realisation[] {
  return liste.map((r) => ({ ...r, photo: trouverPhoto(r.slug) }));
}
