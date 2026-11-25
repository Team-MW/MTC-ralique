import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...nav.map((n) => n.href), "/mentions-legales", "/conditions-generales-de-vente"];
  return pages.map((p) => ({ url: `${site.url}${p}` }));
}
