import Image from "next/image";
import { clients, type Client } from "@/lib/clients";

type Props = {
  /** Limite la bande à un secteur ; par défaut, tous les clients. */
  secteur?: Client["secteur"];
  title?: string;
  /** Logos qui défilent en continu (sinon : rangée fixe). */
  defilement?: boolean;
};

function Logo({ c }: { c: Client }) {
  return <Image src={`/logos/${c.file}`} alt={c.name} width={c.w} height={c.h} sizes="160px" />;
}

export default function Clients({ secteur, title = "Ils nous ont confié leurs chantiers", defilement }: Props) {
  const liste = secteur ? clients.filter((c) => c.secteur === secteur) : clients;

  return (
    <section className="clients" aria-label={title}>
      <div className="wrap">
        <p className="eyebrow clients__title">{title}</p>
      </div>

      {defilement ? (
        <div className="marquee">
          {/* La liste est répétée pour boucler sans raccord ; seule la première est lue par les lecteurs d'écran. */}
          <div className="marquee__track">
            {[0, 1, 2, 3].map((copie) => (
              <ul key={copie} className="marquee__group" aria-hidden={copie > 0 || undefined}>
                {liste.map((c) => (
                  <li key={c.name}>
                    <Logo c={c} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ) : (
        <div className="wrap">
          <ul className="clients__row">
            {liste.map((c) => (
              <li key={c.name}>
                <Logo c={c} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
