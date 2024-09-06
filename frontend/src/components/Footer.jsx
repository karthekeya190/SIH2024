import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Details */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        {/* Help Section */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Terms and Conditions */}
        <div className="footer-section">
          <h3>Terms & Conditions</h3>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Trusted & Secure</p>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
