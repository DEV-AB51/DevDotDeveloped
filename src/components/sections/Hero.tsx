import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/profile-portrait.jpg";
import "./Hero.scss";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        {/* On mobile, show image first, then content */}
        {isMobile && (
          <div className="hero-image-container">
            <div className="hero-image">
              <div className="image-container">
                <img
                  src={profileImage}
                  alt="Devan Bailey - Full Stack Developer"
                />
              </div>
            </div>
          </div>
        )}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Devan Bailey</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I build scalable, responsive, and user-friendly web applications
            using modern technologies.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn">
              View My Work
            </Link>
            <Link to="/cv" className="btn btn-outline">
              Download CV
            </Link>
          </div>
        </div>
        {!isMobile && (
          <div className="hero-image-container">
            <div className="hero-image">
              <div className="image-container">
                <img
                  src={profileImage}
                  alt="Devan Bailey - Full Stack Developer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
