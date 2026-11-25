"use client";

import { useEffect, useState } from "react";

// Choix du visiteur en matière de cookies, conservé trois mois dans un cookie fonctionnel.

export type Consent = {
  /** Autorise le chargement de la carte Google Maps (cookies déposés par Google). */
  maps: boolean;
};

const COOKIE = "mt_cookies";
const DUREE_JOURS = 90;
const CHANGE = "mt-consent-change";
const OPEN = "mt-consent-open";

/** Renvoie le choix enregistré, ou null si le visiteur n'a pas encore répondu. */
export function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`));
  if (!m) return null;
  try {
    const v = JSON.parse(decodeURIComponent(m[1]));
    return { maps: v.maps === true };
  } catch {
    return null;
  }
}

export function saveConsent(consent: Consent) {
  const valeur = encodeURIComponent(JSON.stringify(consent));
  document.cookie = `${COOKIE}=${valeur}; path=/; max-age=${DUREE_JOURS * 86400}; SameSite=Lax`;
  window.dispatchEvent(new Event(CHANGE));
}

/** Rouvre le bandeau pour modifier son choix (lien « Gérer les cookies »). */
export function openPreferences() {
  window.dispatchEvent(new Event(OPEN));
}

export function onOpenPreferences(fn: () => void) {
  window.addEventListener(OPEN, fn);
  return () => window.removeEventListener(OPEN, fn);
}

/** Choix courant, mis à jour dès que le visiteur le modifie. */
export function useConsent(): Consent | null {
  const [consent, setConsent] = useState<Consent | null>(null);
  useEffect(() => {
    const sync = () => setConsent(readConsent());
    sync();
    window.addEventListener(CHANGE, sync);
    return () => window.removeEventListener(CHANGE, sync);
  }, []);
  return consent;
}
