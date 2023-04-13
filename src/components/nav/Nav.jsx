import React, { useState } from "react";
import "./nav.css";
import { FaHome, FaPaintBrush } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
        aria-label="Home"
      >
        <FaHome />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
        aria-label="Skills"
      >
        <HiOutlineClipboardCheck />
      </a>
      <a
        href="#workexperience"
        onClick={() => setActiveNav("#workexperience")}
        className={activeNav === "#workexperience" ? "active" : ""}
        aria-label="Work Experience"
      >
        <BsBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        aria-label="Portfolio"
      >
        <FaPaintBrush />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact"
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
