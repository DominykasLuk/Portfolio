import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <Link to="/login">Login</Link>
        <Link to="/search">Search</Link>
        <Link to="/tictactoe">TicTacTo</Link>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/dominykas.luksys" rel='noopener noreferrer' target='_blank'><FaFacebookF className='footer__socials-icon' /></a>
        <a href="https://www.instagram.com/domsius_" rel='noopener noreferrer' target='_blank'><FaInstagram className='footer__socials-icon' /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; dominykasweb.com All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer