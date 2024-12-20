import React from 'react';
import { Link } from 'react-router-dom';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      {/* First Section */}
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="questions-text">Questions? Talk to a specialist</p>
            <a href="tel:+923413198882" className="phone-number">+92 341-3198882</a>
            <Link to="/chatNow" className="chat-now">Chat now</Link>
            <Link to="/Messageus" className="message-us">Message us</Link>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="footer-lower">
        <div className="footer-container">
          {/* Products Section */}
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><Link to="/laptop" className="footer-link">Laptops</Link></li>
              <li><Link to="/component" className="footer-link">Components</Link></li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              {/* Updated Link to the About Us page */}
              <li><Link to="/about" className="footer-link">About Us</Link></li>
            
              <li><Link to="/faqs" className="footer-link">FAQs</Link></li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="footer-section">
            <h3>Policy</h3>
            <ul>
              <li><Link to="/policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/warranty" className="footer-link">Replacement & Warranty</Link></li>
             
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><a href="https://www.facebook.com/profile.php?id=100057353707472&mibextid=ZbWKwL" target="_blank" className="footer-link" rel='noreferrer'>Social Media</a></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          {/* Logo Section */}
          <div className="footer-logo">
            <img src="/HeaderImage/Company4.png" alt="Company Logo" />
          </div>

          {/* Social Media Icons Section */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/adeel-hussain-b2a0a5302" target="_blank" className="icon" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100057353707472&mibextid=ZbWKwL" target="_blank" className="icon" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/adeel_irvibes?igsh=ZGUzMzM3NWJiOQ==" target="_blank" className="icon" rel="noopener noreferrer">
              <Instagram />
            </a>
          </div>

          {/* Copyright and WhatsApp Section */}
          <div className="footer-right">
            <p>&copy; 2024 AG.Tech, All Rights Reserved.</p>
            <div className="whatsapp">
              <a href="https://wa.me/+923241356336?text=Hi%20there%20I%20need%20help" className="whatsapp-link">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
