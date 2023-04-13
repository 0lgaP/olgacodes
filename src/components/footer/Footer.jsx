import React from 'react';
import './footer.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";



const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>0lga.ca</a>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#workexperience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='mailto:perronolga@gmail.com'><MdOutlineEmail className='footer__socials-icon'/></a>
        <a href='https://www.linkedin.com/in/olga-perron-41566947/'><BsLinkedin className='footer__socials-icon'/></a>
        <a href='https://github.com/0lgaP'><BsGithub className='footer__socials-icon'/></a>
      </div>
    </footer>
  )
}

export default Footer