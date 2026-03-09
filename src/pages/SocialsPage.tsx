import React from "react";
import "./PageStyles.scss";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import "../styles/SocialsPage.scss";

const SocialsPage: React.FC = () => {
  return (
    <div className="page socials-page">
      <div className="container">
        <div className="page-header">
          <h1>Socials</h1>
          <p>Connect with me on social media and professional networks</p>
        </div>
        <div className="page-content">
          <div className="socials-grid">
            <div className="social-card">
              <div className="social-icon linkedin">
                <FaLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with me professionally</p>
              <a href="https://www.linkedin.com/in/devan-bailey-a24786177/" target="_blank" rel="noopener noreferrer" className="social-btn">
                Connect
              </a>
            </div>

            <div className="social-card">
              <div className="social-icon twitter">
                <FaTwitter />
              </div>
              <h3>Twitter</h3>
              <p>Follow me for updates</p>
              <a href="https://x.com/DevDotDeveloped" target="_blank" rel="noopener noreferrer" className="social-btn">
                Follow
              </a>
            </div>

            <div className="social-card">
              <div className="social-icon github">
                <FaGithub />
              </div>
              <h3>GitHub</h3>
              <p>Check out my projects</p>
              <a href="https://github.com/DEV-AB51" target="_blank" rel="noopener noreferrer" className="social-btn">
                View Projects
              </a>
            </div>
          </div>

          <div className="email-cta">
            <div className="email-icon">
              <FaEnvelope />
            </div>
            <h2>Get In Touch</h2>
            <p>Have a question or want to work together?</p>
            <a href="mailto:devanab51@gmail.com" className="cta-btn">
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialsPage; //
