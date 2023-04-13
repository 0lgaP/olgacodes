import React from "react";
import Resume from "../../assets/olgaPerronResume.pdf";
import "./header.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
          href="https://www.linkedin.com/in/olga-perron-41566947/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin className="header__socials" />
        </a>
        <a
          href="https://github.com/0lgaP"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <BsGithub className="header__socials" />
        </a>
      </div>
    </div>
  );
};

export default CTA;
