import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-scroll'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <Link to="header" spy={true} smooth={true} duration={500}><AiOutlineHome /></Link>
      <Link to="about" spy={true} smooth={true} duration={500}><AiOutlineUser /></Link>
      <Link to="experience" spy={true} smooth={true} duration={500}><BiBook /></Link>
      <Link to="services" spy={true} smooth={true} duration={500}><RiServiceLine /></Link>
      <Link to="contact" spy={true} smooth={true} duration={500}><BiMessageRoundedDetail /></Link>
    </nav>
  )
}

export default Nav