import React from "react";
import "./nav.css";
// import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BsFillAwardFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#interests"
        onClick={() => setActiveNav("#interests")}
        className={activeNav === "#interests" ? "active" : ""}
      >
        <AiTwotoneHeart />
      </a>
      <a
        href="#skill"
        onClick={() => setActiveNav("#skill")}
        className={activeNav === "#skill" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#educations"
        onClick={() => setActiveNav("#educations")}
        className={activeNav === "#educations" ? "active" : ""}
      >
        <FaGraduationCap />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#awards"
        onClick={() => setActiveNav("#awards")}
        className={activeNav === "#awards" ? "active" : ""}
      >
        <BsFillAwardFill />
      </a>
    </nav>
  );
};

export default Nav;
