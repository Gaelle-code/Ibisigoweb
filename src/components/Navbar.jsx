import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Brand from "./Brand.jsx";
import { nav } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-terracotta ${isActive ? "text-terracotta" : "text-ink"}`;

  return (
    <header className="sticky top-0 z-30 border-b border-sand/80 bg-cream/95 backdrop-blur">
      <div className="container-x flex h-[76px] items-center justify-between">
        <Brand />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/book" className="btn btn-primary">
            Book Now
          </Link>
        </nav>

        <button
          className="rounded-md p-2 text-clay md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="container-x flex flex-col gap-4 pb-5 md:hidden">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end className={linkClass} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
