import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MT Céramique — Carreleurs à travers la France",
    template: "%s | MT Céramique",
  },
  description:
    "MT Céramique, entreprise de carrelage basée à Plaisance-du-Touch (31). Pose de carrelage pour la grande distribution et les logements, partout en France. Devis au 05 32 60 54 05.",
  openGraph: {
    siteName: "MT Céramique",
    locale: "fr_FR",
    type: "website",
  },
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
      </body>
    </html>
  );
}
