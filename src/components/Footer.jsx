import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are committed to delivering top-notch solutions that empower
            users and make their daily lives easier through technology.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#programs">Program</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} All rights reserved | Your Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
