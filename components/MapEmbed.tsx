"use client";

import { useState } from "react";
import { useConsent } from "@/lib/consent";
import { site } from "@/lib/site";

// La carte Google Maps n'est chargée que si le visiteur l'a acceptée dans le
// bandeau cookies, ou s'il clique sur « Afficher la carte » (RGPD).
export default function MapEmbed() {
  const consent = useConsent();
  const [clicked, setClicked] = useState(false);
  const shown = clicked || consent?.maps === true;

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
          <button type="button" className="btn btn--small" onClick={() => setClicked(true)}>
            Afficher la carte
          </button>
          <small>La carte est fournie par Google Maps, qui peut déposer des cookies.</small>
        </div>
      )}
    </div>
  );
}
