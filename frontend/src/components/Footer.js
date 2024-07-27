import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a leading IT solutions provider, specializing in software
            development, IT consulting, and tech support. Our mission is to
            deliver innovative and reliable technology solutions to businesses
            worldwide.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>
            <strong>Address:</strong> 261/153, Sector 26, NRI Circle, Pratap
            Nagar, Jaipur, Rajasthan, India
          </p>
          <p>
            <strong>Phone:</strong> +91 7791999124
          </p>
          <p>
            <strong>Email:</strong> deepakgauttam88@gmail.com
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/itcompany"
              target="_blank"
              className="social-icon facebook"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://twitter.com/itcompany"
              target="_blank"
              className="social-icon twitter"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/company/itcompany"
              target="_blank"
              className="social-icon linkedin"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://www.instagram.com/itcompany"
              target="_blank"
              className="social-icon instagram"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
          </div>

          <div className="newsletter-signup">
            <h4>Subscribe to our Newsletter</h4>
            <form action="#" method="post">
              <input
                type="email"
                placeholder="Enter your email"
                required
                aria-label="Email Address"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 IT Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
