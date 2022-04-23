import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/dominykasluksys//" rel='noopener noreferrer' target='_blank'><BsLinkedin className='header__socials-icoin'/></a>
        <a href="https://github.com/DominykasLuk" rel='noopener noreferrer' target='_blank'><FaGithub className='header__socials-icoin'/></a>
    </div>
  )
}

export default HeaderSocials