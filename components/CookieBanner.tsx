"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onOpenPreferences, readConsent, saveConsent } from "@/lib/consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [custom, setCustom] = useState(false);
  const [maps, setMaps] = useState(false);

  useEffect(() => {
    // Première visite : aucun choix enregistré, on affiche le bandeau.
    if (readConsent() === null) setVisible(true);

    return onOpenPreferences(() => {
      setMaps(readConsent()?.maps ?? false);
      setCustom(true);
      setVisible(true);
    });
  }, []);

  if (!visible) return null;

  const choisir = (accepteMaps: boolean) => {
    saveConsent({ maps: accepteMaps });
    setVisible(false);
    setCustom(false);
  };

  return (
    <div className="cookies" role="dialog" aria-label="Gestion des cookies">
      <div className="cookies__text">
        <h2>Cookies</h2>
        <p>
          Ce site utilise un cookie nécessaire à son fonctionnement. Avec votre accord, la carte Google Maps de la page
          Contact s’affiche directement&nbsp;; Google peut alors déposer ses propres cookies.{" "}
          <Link href="/mentions-legales#cookies">En savoir plus</Link>
        </p>
      </div>

      {custom && (
        <ul className="cookies__options">
          <li>
            <label>
              <input type="checkbox" checked disabled />
              <span>
                <strong>Cookies essentiels</strong>
                Mémorisent votre choix pendant trois mois. Toujours actifs.
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked={maps} onChange={(e) => setMaps(e.target.checked)} />
              <span>
                <strong>Carte Google Maps</strong>
                Affiche le plan d’accès sur la page Contact.
              </span>
            </label>
          </li>
        </ul>
      )}

      <div className="cookies__actions">
        {custom ? (
          <button type="button" className="btn btn--small" onClick={() => choisir(maps)}>
            Enregistrer mes choix
          </button>
        ) : (
          <>
            <button type="button" className="btn btn--small" onClick={() => choisir(true)}>
              Tout accepter
            </button>
            <button type="button" className="btn btn--small btn--ghost" onClick={() => choisir(false)}>
              Tout refuser
            </button>
            <button type="button" className="cookies__link" onClick={() => setCustom(true)}>
              Personnaliser
            </button>
          </>
        )}
      </div>
    </div>
  );
}
