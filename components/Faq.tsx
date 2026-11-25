import type { Question } from "@/lib/faq";

type Props = {
  items: Question[];
  title?: string;
  /** Fond teinté, pour alterner avec la section précédente. */
  tint?: boolean;
};

export default function Faq({ items, title = "Questions fréquentes", tint }: Props) {
  // Données structurées pour les moteurs de recherche.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <section className={`section${tint ? " section--tint" : ""}`}>
      <div className="wrap faq">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>{title}</h2>
        </div>
        <div className="faq__list">
          {items.map((i) => (
            <details key={i.q} className="faq__item">
              <summary>{i.q}</summary>
              <p>{i.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </section>
  );
}
