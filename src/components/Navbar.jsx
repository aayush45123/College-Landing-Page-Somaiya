import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { ImMenu } from "react-icons/im";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io"; // for close icon

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // sidebar toggle

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="Logo" />
        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} duration={500} offset={-150}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} duration={500} offset={-150}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-150}>
              About us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} duration={500} offset={-150}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500} offset={-150}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={0}
              className="new_button"
            >
              Contact us
            </Link>
          </li>
        </ul>

        <div className="menu-container" onClick={toggleMenu}>
          <ImMenu className="menu" />
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
        <IoMdClose className="close-icon" onClick={closeMenu} />
        <ul>
          <li>
            <Link
              to="hero"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-150}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-150}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-150}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="campus"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-150}
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-150}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={0}
              className="new_button"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
