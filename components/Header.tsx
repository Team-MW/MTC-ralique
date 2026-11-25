"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Referme le menu mobile à chaque changement de page.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar__in">
          <span>
            {site.street}, {site.postalCode} {site.city}
          </span>
          <a href={site.phoneHref}>{site.phone}</a>
        </div>
      </div>

      <header className="header">
        <div className="wrap header__in">
          <Link className="brand" href="/" aria-label={`${site.name} — accueil`}>
            <Image src="/logo-mt.png" alt={site.name} width={2000} height={549} priority sizes="190px" />
          </Link>

          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav${open ? " is-open" : ""}`} id="menu" aria-label="Navigation principale">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav__link"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link className="btn btn--small" href="/contact">
              Devis
            </Link>
          </nav>
        </div>
        <div className="stripe" aria-hidden="true" />
      </header>
    </>
  );
}
