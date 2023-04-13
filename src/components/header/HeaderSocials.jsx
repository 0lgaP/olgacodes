import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/olga-perron-41566947/' target="_blank" rel="noreferrer" aria-label='LinkedIn'><BsLinkedin /></a>
      <a href='https://github.com/0lgaP' target="_blank" rel="noreferrer" aria-label='Github'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials