import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/site";
import { villes } from "@/lib/zones";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MT Céramique — Carreleurs à travers la France",
    template: "%s | MT Céramique",
  },
  description:
    "MT Céramique, entreprise de carrelage basée à Plaisance-du-Touch (31). Pose de carrelage dans toute la France pour la grande distribution, et en Midi-Pyrénées pour les logements. Devis au 05 32 60 54 05.",
  openGraph: {
    siteName: "MT Céramique",
    locale: "fr_FR",
    type: "website",
  },
};

// Données structurées « entreprise locale » pour les moteurs de recherche.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  url: site.url,
  image: `${site.url}/logo-mt.png`,
  telephone: "+33532605405",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressCountry: "FR",
  },
  areaServed: [{ "@type": "Country", name: "France" }, ...villes.map((v) => ({ "@type": "City", name: v.name }))],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={archivo.variable}>
      <body>
        <a className="skip" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <CookieBanner />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
