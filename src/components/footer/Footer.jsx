import React from 'react';
import './footer.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Alien Toronto</a>
      {/* <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#workexperience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul> */}

      <div className="footer__socials">
        {/* <a href='mailto:perronolga@gmail.com'><MdOutlineEmail className='footer__socials-icon'/></a>
        <a href='https://www.linkedin.com/in/olga-perron-41566947/'><BsLinkedin className='footer__socials-icon'/></a>
        <a href='https://github.com/0lgaP'><BsGithub className='footer__socials-icon'/></a> */}
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
    </footer>
  )
}

export default Footer