import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { House, Menu, X } from "lucide-react";
import { navigation } from "../data/site";
import { personal } from "../data/personal";
export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const go = (id: string) => {
    setOpen(false);
    if (location.pathname === "/")
      requestAnimationFrame(() =>
        document
          .getElementById(id)
          ?.scrollIntoView({
            behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "instant"
              : "smooth",
          }),
      );
  };
  return (
    <header className="site-header">
      <Link
        to="/"
        className="home-link"
        onClick={() => {
          setOpen(false);
          window.scrollTo(0, 0);
        }}
        aria-label="Home"
      >
        <House aria-hidden="true" size={22} strokeWidth={1.5} />
      </Link>
      <button
        className="menu-button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="main-nav"
        className={open ? "is-open" : ""}
        aria-label="Main navigation"
      >
        {navigation.map((n) => (
          <Link key={n.id} to={`/?section=${n.id}`} onClick={() => go(n.id)}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <Link to="/" className="wordmark">
        PLAY<span>/</span>WORK
      </Link>
      <span>
        © {new Date().getFullYear()} {personal.name}
      </span>
    </footer>
  );
}
