import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaYoutube />
        </a>
        <a href="/">
          <FaXTwitter />
        </a>
      </div>
      <div className="important-links">
        <a href="#">Audio Description</a>
        <a href="">Help center</a>
        <a href="">Gift Cards</a>
        <a href="">Media Centre</a>
        <a href="">Investor Relation</a>
        <a href="">Jobs</a>
        <a href="">Terms of Use</a>
        <a href="">Privacy</a>
        <a href="">Legal Notices</a>
        <a href="">Cookie Preferences</a>
        <a href="">Corporate Information</a>
        <a href="">Contact Us</a>
      </div>
      <p className="copyright">&copy; 2025 @ Zijela Headquarters</p>
    </div>
  );
};

export default Footer;
