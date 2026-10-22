import { Link } from "react-router-dom";
import Brand from "./Brand.jsx";
import { nav, site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Brand inverse />
          <p className="mt-5 max-w-xs text-sm leading-6 text-cream/70">{site.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/80 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</p>
          <p className="mt-4 text-sm text-cream/80">{site.founder}, Founder</p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn mt-4 border border-cream/40 text-cream hover:bg-cream hover:text-ink"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} {site.name} · {site.domain}
      </div>
    </footer>
  );
}
