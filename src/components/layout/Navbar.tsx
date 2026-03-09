import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [touchedItem, setTouchedItem] = useState<number | null>(null);
  const location = useLocation();
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTouchStart = (index: number) => {
    setTouchedItem(index);
  };

  const handleTouchEnd = () => {
    setTouchedItem(null);
  };

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // If menu is open and click is outside menu and toggle button
      if (
        isOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        toggleRef.current && 
        !toggleRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside as EventListener);
      document.addEventListener('touchstart', handleClickOutside as EventListener);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/cv', label: 'View My CV' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects & Demos' },
    { path: '/socials', label: 'Socials' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <FaLaptopCode className="navbar-logo-icon" />
          <span>DevDotDeveloped</span>
        </Link>

        <div 
          className="navbar-toggle" 
          onClick={toggleMenu}
          ref={toggleRef}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul 
          className={`navbar-menu ${isOpen ? 'active' : ''}`}
          ref={menuRef}
        >
          {navItems.map((item, index) => (
            <li 
              key={item.path} 
              className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <Link 
                to={item.path} 
                className={`navbar-link ${touchedItem === index ? 'touched' : ''}`}
                onClick={() => setIsOpen(false)}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Overlay to capture clicks outside the menu */}
      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default Navbar; 