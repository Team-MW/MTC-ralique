import Image from "next/image";

type Props = {
  /** Nom du fichier dans public/realisations/, avec son extension. */
  file: string;
  alt: string;
  className?: string;
  sizes?: string;
};

/** Photo recadrée pour remplir son bloc ; la taille du bloc est donnée par `className`. */
export default function Photo({ file, alt, className = "", sizes = "(max-width: 800px) 100vw, 600px" }: Props) {
  return (
    <div className={`photo ${className}`}>
      <Image src={`/realisations/${file}`} alt={alt} fill sizes={sizes} />
    </div>
  );
}
