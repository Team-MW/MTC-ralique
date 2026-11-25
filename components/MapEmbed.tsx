"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// La carte Google Maps n'est chargée qu'après un clic : aucun cookie tiers
// n'est déposé tant que le visiteur ne l'a pas demandé (RGPD).
export default function MapEmbed() {
  const [shown, setShown] = useState(false);

  return (
    <div className="map">
      {shown ? (
        <iframe
          title={`Plan d'accès — ${site.street}, ${site.city}`}
          src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="map__placeholder tile">
          <p>
            {site.street}
            <br />
            {site.postalCode} {site.city}
          </p>
          <button type="button" className="btn btn--small" onClick={() => setShown(true)}>
            Afficher la carte
          </button>
          <small>La carte est fournie par Google Maps.</small>
        </div>
      )}
    </div>
  );
}
