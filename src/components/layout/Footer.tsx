import React from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">DevDotDeveloped</Link>
            <p>Full Stack Developer</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navigation</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cv">View My CV</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects & Demos</Link></li>
                <li><Link to="/socials">Socials</Link></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:devanab51@gmail.com">devanab51@gmail.com</a></li>
                <li>Cape Town, South Africa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:devanab51@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <p className="copyright">
            &copy; {currentYear} Devan Bailey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 