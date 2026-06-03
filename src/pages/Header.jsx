import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="wrapper">
        <nav className="nav-container">
          <div className="logo">
            <img src="assets/image/Techno_School_logo-removebg-preview.png" alt="Techno Logo" />
          </div>

          {/* Hamburger checkbox */}
          <input 
            type="checkbox" 
            id="menu-toggle" 
            checked={menuOpen} 
            onChange={() => setMenuOpen(!menuOpen)} 
          />
          <label htmlFor="menu-toggle" className="menu-icon text-dark">
            <span></span>
            <span></span>
            <span></span>
          </label>

          {/* The className dynamically toggles based on menuOpen state */}
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li className="dropdown-parent">
              <a href="#about">About ▼</a>
              <ul className="dropdown">
                 <li><a href="/about" onClick={() => setMenuOpen(false)}>About Us</a></li>
                <li><a href="/director-section" onClick={() => setMenuOpen(false)}>Director Message</a></li>
                <li><a href="/principal-message" onClick={() => setMenuOpen(false)}>Principal Message</a></li>
              </ul>
            </li>
            <li><a href="/facility" onClick={() => setMenuOpen(false)}>Facility & Activities</a></li>
            <li><a href="/admission" onClick={() => setMenuOpen(false)}>Admission</a></li>
            <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact us</a></li>
          </ul>
        </nav>

       
      </div>
    </>
  );
};

export default Header;