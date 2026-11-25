import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="stripe" aria-hidden="true" />
      <div className="wrap footer__grid">
        <div>
          <Image src="/logo-mt.png" alt={site.name} width={2000} height={549} sizes="170px" className="footer__logo" />
          <p>Pose de carrelage pour la grande distribution et les logements, partout en France.</p>
        </div>

        <div>
          <h2 className="footer__title">Le site</h2>
          <ul className="footer__list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Nous joindre</h2>
          <address>
            {site.street}
            <br />
            {site.postalCode} {site.city}
          </address>
          <a className="footer__phone" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <Link href="/mentions-legales">Mentions légales &amp; RGPD</Link>
      </div>
    </footer>
  );
}
