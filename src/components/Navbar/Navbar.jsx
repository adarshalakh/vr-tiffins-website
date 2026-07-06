import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <a href="#">
          VR <span>Tiffins</span>
        </a>
      </div>

      {/* Desktop Menu */}

      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#screens">Screens</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a
        href="/app/VR-Tiffins.apk"
        download
        className="download-btn"
      >
        Download App
      </a>

      {/* Mobile Menu Icon */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>

        <a href="#plans" onClick={() => setMenuOpen(false)}>Plans</a>

        <a href="#screens" onClick={() => setMenuOpen(false)}>Screens</a>

        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <button onClick={() => setMenuOpen(false)}>
          Download App
        </button>

      </div>

    </nav>
  );
};

export default Navbar;