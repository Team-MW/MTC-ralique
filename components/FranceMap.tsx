import { villes, type Ville } from "@/lib/zones";

// Carte de France simplifiée, dessinée en SVG : aucune requête vers un service tiers.

const LON_MIN = -5.6;
const LAT_MAX = 51.5;
const K = 60; // pixels par degré de latitude
const KX = K * Math.cos((46.5 * Math.PI) / 180); // pixels par degré de longitude
const W = Math.round((10.2 - LON_MIN) * KX);
const H = Math.round((LAT_MAX - 40.9) * K);

const x = (lon: number) => (lon - LON_MIN) * KX;
const y = (lat: number) => (LAT_MAX - lat) * K;
const trace = (pts: number[][]) => pts.map(([lon, lat], i) => `${i ? "L" : "M"}${x(lon).toFixed(1)} ${y(lat).toFixed(1)}`).join(" ") + " Z";

// Contours approximatifs (longitude, latitude), dans le sens des aiguilles d'une montre.
const hexagone = [
  [2.38, 51.03], [3.2, 50.5], [4.2, 50.3], [4.15, 50.0], [4.8, 50.15], [5.8, 49.55], [6.35, 49.47], [7.4, 49.15],
  [8.2, 48.97], [7.8, 48.58], [7.55, 47.6], [7.0, 47.5], [6.85, 47.0], [6.1, 46.4], [6.15, 46.2], [6.8, 46.4],
  [6.87, 45.83], [7.1, 45.4], [6.63, 45.1], [7.0, 44.7], [6.9, 44.35], [7.65, 44.15], [7.5, 43.78], [7.0, 43.55],
  [6.65, 43.25], [5.95, 43.1], [5.35, 43.3], [4.6, 43.4], [4.1, 43.55], [3.7, 43.4], [3.05, 43.0], [3.05, 42.6],
  [3.17, 42.43], [2.0, 42.4], [1.45, 42.6], [0.7, 42.75], [-0.3, 42.8], [-1.3, 43.05], [-1.78, 43.37], [-1.55, 43.5],
  [-1.25, 44.65], [-1.07, 45.57], [-1.15, 46.15], [-1.8, 46.5], [-2.15, 46.9], [-2.2, 47.28], [-3.1, 47.5],
  [-3.37, 47.73], [-4.35, 47.8], [-4.73, 48.04], [-4.3, 48.2], [-4.78, 48.36], [-4.6, 48.6], [-3.98, 48.72],
  [-3.1, 48.85], [-2.7, 48.55], [-2.0, 48.65], [-1.5, 48.63], [-1.6, 48.84], [-1.8, 49.4], [-1.94, 49.72],
  [-1.6, 49.65], [-1.26, 49.7], [-1.1, 49.35], [-0.3, 49.3], [0.1, 49.5], [0.2, 49.7], [1.08, 49.93], [1.6, 50.2],
  [1.6, 50.73], [1.85, 50.96],
];
const corse = [[9.35, 43.0], [9.55, 42.1], [9.4, 41.6], [9.2, 41.37], [8.8, 41.55], [8.6, 42.0], [8.55, 42.35], [8.75, 42.57], [9.3, 42.72]];

function Repere({ v }: { v: Ville }) {
  const cx = x(v.lon);
  const cy = y(v.lat);
  const r = v.siege ? 9 : 6;
  const pos = {
    droite: { dx: r + 6, dy: 6, anchor: "start" },
    gauche: { dx: -(r + 6), dy: 6, anchor: "end" },
    haut: { dx: 0, dy: -(r + 7), anchor: "middle" },
    bas: { dx: -4, dy: r + 21, anchor: "end" },
  }[v.label];

  return (
    <g className={v.siege ? "carte__ville carte__ville--siege" : "carte__ville"}>
      <circle cx={cx} cy={cy} r={r} />
      <text x={cx + pos.dx} y={cy + pos.dy} textAnchor={pos.anchor as "start" | "end" | "middle"}>
        {v.name}
      </text>
    </g>
  );
}

export default function FranceMap() {
  return (
    <svg
      className="carte"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Carte de France des villes où intervient MT Céramique : ${villes.map((v) => v.name).join(", ")}.`}
    >
      <defs>
        {/* Le territoire est « carrelé » : un motif de carreaux avec leurs joints. */}
        <pattern id="carte-carreaux" width="26" height="26" patternUnits="userSpaceOnUse">
          <rect width="26" height="26" className="carte__joint" />
          <rect x="1" y="1" width="24" height="24" className="carte__carreau" />
        </pattern>
      </defs>
      <path d={trace(hexagone)} fill="url(#carte-carreaux)" className="carte__terre" />
      <path d={trace(corse)} fill="url(#carte-carreaux)" className="carte__terre" />
      {villes.map((v) => (
        <Repere key={v.name} v={v} />
      ))}
    </svg>
  );
}
