// Zone d'intervention : villes affichées sur la carte et listes utiles au référencement local.

export type Ville = {
  name: string;
  lon: number;
  lat: number;
  /** Côté où s'écrit le nom par rapport au repère, pour éviter les chevauchements. */
  label: "droite" | "gauche" | "haut" | "bas";
  /** Siège de l'entreprise. */
  siege?: boolean;
};

// Grande distribution : toute la France.
export const villes: Ville[] = [
  { name: "Toulouse", lon: 1.44, lat: 43.6, label: "gauche", siege: true },
  { name: "Paris", lon: 2.35, lat: 48.86, label: "gauche" },
  { name: "Lyon", lon: 4.84, lat: 45.76, label: "droite" },
  { name: "Marseille", lon: 5.37, lat: 43.3, label: "bas" },
  { name: "Bordeaux", lon: -0.58, lat: 44.84, label: "droite" },
  { name: "Lille", lon: 3.06, lat: 50.63, label: "droite" },
  { name: "Nantes", lon: -1.55, lat: 47.22, label: "droite" },
  { name: "Rennes", lon: -1.68, lat: 48.11, label: "droite" },
  { name: "Strasbourg", lon: 7.75, lat: 48.57, label: "gauche" },
  { name: "Montpellier", lon: 3.88, lat: 43.61, label: "haut" },
  { name: "Nice", lon: 7.26, lat: 43.7, label: "haut" },
  { name: "Grenoble", lon: 5.72, lat: 45.19, label: "droite" },
  { name: "Saint-Étienne", lon: 4.39, lat: 45.44, label: "gauche" },
  { name: "Reims", lon: 4.03, lat: 49.26, label: "droite" },
  { name: "Le Havre", lon: 0.11, lat: 49.49, label: "gauche" },
  { name: "Toulon", lon: 5.93, lat: 43.12, label: "droite" },
  { name: "Bastia", lon: 9.45, lat: 42.7, label: "gauche" },
];

// Logements : les huit départements de Midi-Pyrénées et leurs principales villes.
export const departements = [
  { name: "Haute-Garonne (31)", villes: ["Toulouse", "Plaisance-du-Touch", "Colomiers", "Tournefeuille", "Blagnac", "Muret"] },
  { name: "Tarn (81)", villes: ["Albi", "Castres", "Carmaux"] },
  { name: "Tarn-et-Garonne (82)", villes: ["Montauban"] },
  { name: "Gers (32)", villes: ["Auch"] },
  { name: "Ariège (09)", villes: ["Foix", "Pamiers"] },
  { name: "Hautes-Pyrénées (65)", villes: ["Tarbes"] },
  { name: "Aveyron (12)", villes: ["Rodez"] },
  { name: "Lot (46)", villes: ["Cahors"] },
];
