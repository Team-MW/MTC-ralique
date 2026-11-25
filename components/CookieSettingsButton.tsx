"use client";

import { openPreferences } from "@/lib/consent";

/** Bouton d'apparence « lien » qui rouvre le bandeau de gestion des cookies. */
export default function CookieSettingsButton({ children = "Gérer les cookies" }: { children?: React.ReactNode }) {
  return (
    <button type="button" className="textlink" onClick={openPreferences}>
      {children}
    </button>
  );
}
