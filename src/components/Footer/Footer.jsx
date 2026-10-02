
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = ({ onPrivacyClick }) => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">
          <h2>VR <span>Tiffins</span></h2>
          <p>
            Fresh, hygienic and home-style meals delivered daily to your
            doorstep. Eat healthy, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#plans">Plans</a></li>
            <li><a href="/#faq">FAQ</a></li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> support@vrtiffins.com</p>
          <p><FaMapMarkerAlt /> New Delhi, India</p>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 VR Tiffins. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
