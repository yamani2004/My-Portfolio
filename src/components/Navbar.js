import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const symbols = ["< />", "{ }", "JS", "React", "</>", "{console.log}", "HTML", "CSS"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [codeSymbols, setCodeSymbols] = useState([]);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate more cluttered symbols
  useEffect(() => {
    const symbolsArray = Array.from({ length: 80 }, () => ({
      id: Math.random(),
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100, // % of navbar width
      size: 10 + Math.random() * 14, // font size in px
      delay: Math.random() * 10, // seconds
      duration: 6 + Math.random() * 6 // seconds
    }));
    setCodeSymbols(symbolsArray);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-background">
        {codeSymbols.map((s) => (
          <span
            key={s.id}
            className="code-symbol"
            style={{
              left: `${s.left}%`,
              fontSize: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          >
            {s.symbol}
          </span>
        ))}
      </div>

      <div className="nav-container">
        <div className="logo">
        <Link to="/" className="logo">
  Yamani<span className="highlight">Dev</span><span className="highlight">Hub</span>
</Link>

        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Home", "About", "Education", "Coding", "Projects", "Contact"].map(
            (page, i) => {
              const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
              return (
                <Link
                  key={i}
                  to={path}
                  className={location.pathname === path ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {page}
                </Link>
              );
            }
          )}
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
