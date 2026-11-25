/** Affiche la valeur, ou un repère visible tant qu'elle n'est pas renseignée dans lib/site.ts. */
export default function Champ({ valeur }: { valeur: string | null }) {
  return valeur ? <>{valeur}</> : <span className="todo">À compléter</span>;
}
