import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="wrap cta__in">
        <div>
          <p className="eyebrow">Devis</p>
          <h2>Un chantier à carreler&nbsp;?</h2>
          <p>Surface, format, délais&nbsp;: décrivez-nous votre projet, nous vous préparons un devis.</p>
        </div>
        <div className="cta__actions">
          <a className="cta__phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <Link className="btn" href="/contact">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
