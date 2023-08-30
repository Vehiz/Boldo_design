import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/footerLogo.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer1">
        <div className="footer1-child">
          <p className="footer1-text">
            An enterprise template to ramp up your company website
          </p>
          <div className="footer-input">
            <input type="text" placeholder="Your email address"></input>
            <button>Start now</button>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="footer2-first-child">
          <div className="footer-logo">
            <img src={FooterLogo} alt=""></img>
            <p className="footer-logo-text">Boldo</p>
          </div>
          <p className="footer-writing">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="footer-last">All rights reserved</p>
        </div>
        <div className="footer2-second-child">
          <div className="footer-child-wrapper">
            <p className="footer-header">Landings</p>
            <div className="footer-list-text">
              <p>Home</p>
              <p>Products</p>
              <p>services</p>
            </div>
          </div>
          <div className="footer-child-wrapper">
            <p className="footer-header">Company</p>
            <div className="footer-list-text">
              <p>Home</p>
              <div className="career-text">
                <p>Careers</p>
                <div className="career-text-item">Hiring!</div>
              </div>
              <p>Services</p>
            </div>
          </div>
          <div className="footer-child-wrapper">
            <p className="footer-header">Resources</p>
            <div className="footer-list-text">
              <p>Blog</p>
              <p>Products</p>
              <p>Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
