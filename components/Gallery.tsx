"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Categorie, Realisation } from "@/lib/realisations";

type Props = {
  items: Realisation[];
  /** Filtres par catégorie affichés au-dessus de la grille. */
  filters?: { id: Categorie; label: string }[];
};

export default function Gallery({ items, filters }: Props) {
  const [cat, setCat] = useState<Categorie | "tout">("tout");
  const [zoom, setZoom] = useState<Realisation | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (zoom && !d.open) d.showModal();
    if (!zoom && d.open) d.close();
  }, [zoom]);

  const visibles = cat === "tout" ? items : items.filter((r) => r.cat === cat);

  return (
    <>
      {filters && (
        <div className="filters" role="group" aria-label="Filtrer les réalisations">
          <button type="button" aria-pressed={cat === "tout"} onClick={() => setCat("tout")}>
            Toutes
          </button>
          {filters.map((f) => (
            <button key={f.id} type="button" aria-pressed={cat === f.id} onClick={() => setCat(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      )}

      <ul className="gallery">
        {visibles.map((r) => (
          <li key={r.slug}>
            <figure className="shot tile" style={{ "--t": `${r.format}px` } as CSSProperties}>
              {r.photo && (
                <button type="button" className="shot__zoom" onClick={() => setZoom(r)} aria-label={`Agrandir : ${r.title}`}>
                  <Image src={r.photo} alt={`${r.title} — ${r.detail}`} fill sizes="(max-width: 700px) 50vw, (max-width: 1080px) 33vw, 290px" />
                </button>
              )}
              <figcaption>
                <strong>{r.title}</strong>
                {r.detail}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Photo agrandie"
        onClose={() => setZoom(null)}
        onClick={(e) => e.target === e.currentTarget && setZoom(null)}
      >
        {zoom?.photo && (
          <>
            <button type="button" className="lightbox__close" aria-label="Fermer" onClick={() => setZoom(null)}>
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={zoom.photo} alt={`${zoom.title} — ${zoom.detail}`} />
            <p>
              <strong>{zoom.title}</strong> · {zoom.detail}
            </p>
          </>
        )}
      </dialog>
    </>
  );
}
