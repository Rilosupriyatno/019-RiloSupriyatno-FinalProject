import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer_logo">
        Webio
      </a>
      <ul className="permalinks">
        {/* <li>
          <a href="#top">Home</a>
        </li> */}
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#interests">Interest</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#educations">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#awards">Award</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Webio. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
