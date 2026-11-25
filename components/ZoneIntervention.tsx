import FranceMap from "@/components/FranceMap";
import { departements, villes } from "@/lib/zones";

export default function ZoneIntervention({ tint }: { tint?: boolean }) {
  return (
    <section className={`section${tint ? " section--tint" : ""}`} id="zone-intervention">
      <div className="wrap">
        <div className="zone__head">
          <p className="eyebrow">Zone d’intervention</p>
          <h2>La zone d’intervention de nos carreleurs</h2>
          <p className="muted">
            Nous répondons à vos demandes de pose de carrelage et de revêtement de sols et murs dans toute la France
            pour la grande distribution, et en Midi-Pyrénées pour les logements.
          </p>
        </div>

        <div className="zone">
          <FranceMap />

          <div className="zone__lists">
            <div>
              <h3>Grande distribution&nbsp;: toute la France</h3>
              <p className="muted">Pose de carrelage en magasins, galeries marchandes et laboratoires, notamment à&nbsp;:</p>
              <ul className="chips">
                {villes.map((v) => (
                  <li key={v.name}>{v.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Logements&nbsp;: Midi-Pyrénées</h3>
              <p className="muted">Pose de carrelage en logements dans les huit départements de la région&nbsp;:</p>
              <dl className="zone__deps">
                {departements.map((d) => (
                  <div key={d.name}>
                    <dt>{d.name}</dt>
                    <dd>{d.villes.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
