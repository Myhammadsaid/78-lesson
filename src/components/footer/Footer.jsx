import React from "react";
import img from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-style">
            <div className="footer-links">
              <img src={img} alt="logo" />
              <a href="#" className="footer-link">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Contact us
              </a>
              <a href="#" className="footer-link">
                E: info@example.com
              </a>
              <a href="#" className="footer-link">
                P: +94 7670000000
              </a>
              <a href="#" className="footer-link">
                A: 123 Hospital rd,
              </a>
              <a href="#" className="footer-link">
                Kalubowila, Dehiwela
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Contact us
              </a>
              <a href="#" className="footer-link">
                E: info@example.com
              </a>
              <a href="#" className="footer-link">
                P: +94 7670000000
              </a>
              <a href="#" className="footer-link">
                A: 123 Hospital rd,
              </a>
              <a href="#" className="footer-link">
                Kalubowila, Dehiwela
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Useful links
              </a>
              <a href="#" className="footer-link">
                Shop All
              </a>
              <a href="#" className="footer-link">
                Tempered Glass
              </a>
              <a href="#" className="footer-link">
                Back-cover
              </a>
              <a href="#" className="footer-link">
                About Us
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Blog
              </a>
              <a href="#" className="footer-link">
                Shop All
              </a>
              <a href="#" className="footer-link">
                Tempered Glass
              </a>
              <a href="#" className="footer-link">
                Back-cover
              </a>
              <a href="#" className="footer-link">
                About Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
