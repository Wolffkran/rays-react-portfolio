// src/components/header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Raymond Lacrouts</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            {/* Add Contact Me button */}
            <Link to="/contact" className="nav-link">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
