import { useState, useEffect } from "react";
import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="navbar">
      <div className="container flex-box-s">
        <p className="logo">
          Ahmad <span>Portfolio</span>
        </p>

        <button className="burger" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <a href="/portfolio/index.html" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>

          <button onClick={toggleDarkMode} className="cv-btn">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}
