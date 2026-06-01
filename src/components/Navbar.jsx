import { useState, useEffect } from "react";
import "../../css/navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const navbar = document.querySelector(".navbar");
      const navMenu = document.getElementById("navLinks");

      if (
        navbar &&
        navMenu &&
        !navbar.contains(e.target) &&
        navMenu.classList.contains("active")
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="nav-logo">
          <img
            src="/images/logo/cta-logo.png"
            alt="CTA"
            className="nav-logo-img"
          />
          CTA Cleaning
        </a>

        <div
          className={`nav-hamburger ${isActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul id="navLinks" className={`nav-links ${isActive ? "active" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/brands/diversey.html">Diversey</a>
          </li>
          <li>
            <a href="/brands/godrej.html">Godrej</a>
          </li>
          <li>
            <a href="/brands/prima.html">Prima</a>
          </li>
          <li>
            <a href="/about.html">About Us</a>
          </li>
          <li>
            <a href="/estimasi.html" className="nav-cta">
              Estimasi Biaya
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
