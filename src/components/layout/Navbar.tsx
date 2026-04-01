import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaLaptopCode, FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [touchedItem, setTouchedItem] = useState<number | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("theme") as "dark" | "light") || "dark";
  });
  const location = useLocation();
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "light" : ""
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTouchStart = (index: number) => setTouchedItem(index);
  const handleTouchEnd = () => setTouchedItem(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
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

    if (isOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
      document.addEventListener(
        "touchstart",
        handleClickOutside as EventListener
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
      document.removeEventListener(
        "touchstart",
        handleClickOutside as EventListener
      );
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/cv", label: "View My CV" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects & Demos" },
    { path: "/socials", label: "Socials" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <FaLaptopCode className="navbar-logo-icon" />
          <span>DevDotDeveloped</span>
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu} ref={toggleRef}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-menu ${isOpen ? "active" : ""}`} ref={menuRef}>
          {navItems.map((item, index) => (
            <li
              key={item.path}
              className={`navbar-item ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              <Link
                to={item.path}
                className={`navbar-link ${
                  touchedItem === index ? "touched" : ""
                }`}
                onClick={() => setIsOpen(false)}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="navbar-item" style={{ marginLeft: "1rem" }}>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="navbar-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;
