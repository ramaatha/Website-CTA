import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

// internal: true → pakai <Link> (React Router, no page reload)
// internal: false → pakai <a href> (still static HTML)
const links = [
  { label: "Home", to: "/", internal: true },
  { label: "Diversey", to: "/diversey", internal: true },
  { label: "Godrej", href: "/brands/godrej.html", internal: false },
  { label: "Prima", href: "/brands/prima.html", internal: false },
  { label: "About Us", to: "/about", internal: true },
];

const linkClass =
  "px-4 py-2 rounded-[6px] text-sm font-medium text-text-secondary no-underline transition-all duration-[250ms] hover:bg-primary-50 hover:text-primary max-md:px-5 max-md:py-3 max-md:rounded-none max-md:w-full";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest("nav")) setIsOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <nav className="sticky top-0 z-[100] bg-surface border-b border-border">
      <div className="container flex justify-between items-center h-[68px] max-md:h-[60px]">
        <Link
          to="/"
          className="nav-logo-link font-heading font-extrabold text-xl text-primary no-underline"
        >
          <img
            src="/images/logo/cta-logo.png"
            alt="CTA"
            className="nav-logo-img object-contain"
          />
          CTA Cleaning
        </Link>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-0 cursor-pointer z-[101]"
        >
          <span className="block w-6 h-[2px] bg-text rounded-sm" />
          <span className="block w-6 h-[2px] bg-text rounded-sm" />
          <span className="block w-6 h-[2px] bg-text rounded-sm" />
        </button>

        {/* Nav links */}
        <ul
          className={[
            "flex flex-col md:flex-row list-none m-0 p-0",
            "md:items-center md:gap-2",
            "max-md:absolute max-md:top-full max-md:left-0 max-md:right-0",
            "max-md:flex-col max-md:bg-surface max-md:border-b max-md:border-border",
            "max-md:overflow-hidden max-md:transition-[max-height] max-md:duration-300 max-md:ease-in-out",
            isOpen ? "max-md:max-h-[500px]" : "max-md:max-h-0",
          ].join(" ")}
        >
          {links.map(({ label, to, href, internal }) => (
            <li
              key={label}
              className="flex max-md:w-full max-md:border-b max-md:border-border-light"
            >
              {internal ? (
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    linkClass + (isActive ? " text-primary bg-primary-50" : "")
                  }
                >
                  {label}
                </NavLink>
              ) : (
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={linkClass}
                >
                  {label}
                </a>
              )}
            </li>
          ))}
          <li className="flex max-md:w-full max-md:border-b max-md:border-border-light max-md:p-3">
            <a
              href="/estimasi.html"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 rounded-[10px] text-sm font-semibold bg-primary text-white no-underline transition-all duration-[250ms] hover:bg-primary-light"
            >
              Estimasi Biaya
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
