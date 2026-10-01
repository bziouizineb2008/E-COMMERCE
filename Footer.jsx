import React from 'react';
import { AtSign, MessageCircle, Camera, BriefcaseBusiness } from 'lucide-react';
import './App.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-aside">
          <h5>STRIDE.</h5>
          <p>Premium sneakers engineered for motion, made with recycled materials.</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <AtSign size={20} color="#1DA1F2" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <MessageCircle size={20} color="#1877F2" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Camera size={20} color="#E4405F" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <BriefcaseBusiness size={20} color="#0A66C2" />
            </a>
          </div>
        </div>

        <div className="shop-footer">
          <p className="footer-heading">Shop</p>
          <nav>
            <ul>
              <li><a href="#featured">New Arrivals</a></li>
              <li><a href="#category">Running</a></li>
              <li><a href="#category">Lifestyle</a></li>
              <li><a href="#category">Trail</a></li>
              <li><a href="#featured">Sale</a></li>
            </ul>
          </nav>
        </div>

        <div className="help">
          <p className="footer-heading">Help</p>
          <nav>
            <ul>
              <li><a href="#help">Shipping</a></li>
              <li><a href="#help">Returns</a></li>
              <li><a href="#help">Size Guide</a></li>
              <li><a href="#help">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="company">
          <p className="footer-heading">Company</p>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#about">Sustainability</a></li>
              <li><a href="#about">Careers</a></li>
              <li><a href="#about">Press</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 Stride Footwear Co. All rights reserved.</p>
        <p>Privacy · Terms · Cookies</p>
      </div>
    </footer>
  );
}

export default Footer;