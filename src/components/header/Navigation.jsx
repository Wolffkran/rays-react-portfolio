import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <a href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
