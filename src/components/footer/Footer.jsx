import React from 'react';
import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Apps Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Apps</h3>
            <div className="footer-links">
              <h1>Made with ❤️</h1>
              <h3>
                <a href="#" className="footer-link">BY FOOD BNB TEAM</a>
              </h3>
            </div>
          </div>

          {/* For Restaurants Section */}
          <div className="footer-section">
            <h3 className="footer-heading">For Restaurants</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Partner With Us</a>
            </div>
          </div>

          {/* Apps For You Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Apps For You</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Download App</a>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Social Links</h3>
            <div className="footer-social">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="footer-social-link"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="footer-social-link"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="footer-social-link"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, 
            Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 
            2025-2026 © FoodBNB™ Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;