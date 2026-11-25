import fs from "node:fs";
import path from "node:path";

export type Categorie = "distribution" | "laboratoires" | "pose";

export const categories: { id: Categorie; label: string }[] = [
  { id: "distribution", label: "Grande distribution" },
  { id: "laboratoires", label: "Laboratoires" },
  { id: "pose", label: "Techniques de pose" },
];

export type Realisation = {
  /** Nom du fichier photo attendu dans public/realisations/ (sans extension). */
  slug: string;
  title: string;
  detail: string;
  cat: Categorie;
  /** Format du carreau en cm : règle l'échelle du motif affiché tant qu'il n'y a pas de photo. */
  format: 20 | 40 | 60;
  /** Chemin public de la photo, ou null si le fichier n'a pas encore été déposé. */
  photo: string | null;
};

const liste: Omit<Realisation, "photo">[] = [
  { slug: "hm-forum-des-halles", title: "H&M Forum des Halles", detail: "Paris", cat: "distribution", format: 60 },
  { slug: "lidl-surface-de-vente", title: "Lidl", detail: "Surface de vente 60 × 60 cm", cat: "distribution", format: 60 },
  { slug: "intermarche-salernes", title: "Intermarché Salernes", detail: "Var (83) · Pose 40 × 40 White", cat: "distribution", format: 40 },
  { slug: "geant-casino-bastia", title: "Géant Casino Bastia", detail: "Galerie marchande", cat: "distribution", format: 60 },
  { slug: "lidl-carmaux", title: "Lidl Carmaux", detail: "Tarn (81)", cat: "distribution", format: 60 },
  { slug: "itm-salernes", title: "ITM Salernes", detail: "Var (83)", cat: "distribution", format: 40 },
  { slug: "zone-laboratoire-20x20", title: "Zone laboratoire", detail: "Carrelage 20 × 20", cat: "laboratoires", format: 20 },
  { slug: "laboratoire-pose-scellee", title: "Laboratoire 20 × 20 cm", detail: "Pose scellée", cat: "laboratoires", format: 20 },
  { slug: "pose-collee-chape-rapide", title: "Pose collée 60 × 60", detail: "Sur chape à prise rapide", cat: "pose", format: 60 },
  { slug: "pose-collee-u4p4s", title: "Pose collée 60 × 60 cm", detail: "Carrelage U4P4S", cat: "pose", format: 60 },
  { slug: "fiandre-silver-ground", title: "Fiandre Silver Ground", detail: "Carrelage 40 × 40", cat: "pose", format: 40 },
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
