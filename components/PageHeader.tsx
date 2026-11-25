type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export default function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <section className="pagehead">
      <div className="gridlines" aria-hidden="true" />
      <div className="wrap pagehead__in">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
