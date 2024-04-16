import React from "react";
import Resume from "../../assets/CV Olga Perron.pdf";
import "./header.css";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const CTA = () => {
  return (
    <div className="cta__container">
      <div className="cta">
        <a href={Resume} download className="btn">
          Resume
        </a>
        <a href="#contact" className="btn btn-primary">
          Contact
        </a>
      </div>
      <div className="cta">
        <a
          href="https://www.instagram.com/alientoronto/"
          target="_blank"
          rel="noreferrer"
          aria-label="new tab Instagram"
        >
          <BsInstagram className="header__socials" />
        </a>
        <a
          href="https://twitter.com/0lgatron"
          target="_blank"
          rel="noreferrer"
          aria-label="new tab to x formally twitter"
        >
          <FaXTwitter className="header__socials" />
        </a>
      </div>
    </div>
  );
};

export default CTA;
