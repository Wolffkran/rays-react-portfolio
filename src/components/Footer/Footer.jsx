import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/Wolffkran" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-icon.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/raymond-lacrouts-30527a257/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-icon.png" alt="LinkedIn" />
          </a>
          {/* Add more social links as needed */}
        </div>
        <p>&copy; 2024 Raymond Lacrouts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
