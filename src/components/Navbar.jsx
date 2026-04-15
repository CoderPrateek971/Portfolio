import React from 'react'
import { IoIosMoon } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { PiLineVerticalThin } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import  { useState, useEffect } from 'react';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);
  return (
    <div className='navbar'>
      <div className='left'>
        <img src="/icon.webp" className="logo" />
        <div >Prateek Garg</div>
      </div>
      <div className='centre'>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href="/Prateek Garg CV .pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href='#contact'>Contact</a>
      </div>
      <div className='right'>
        <a className="themeIcon" style={{cursor: "pointer"}} onClick={toggleTheme}>
          {darkMode ? <a ><IoIosMoon color='white' size={20} /> </a>: <MdOutlineLightMode  size={20} />
        }
        </a>
        
        <PiLineVerticalThin size={20} />
        <a href="https://github.com/CoderPrateek971" target="_blank" rel="noopener noreferrer"><FaGithub  size={20} /></a>
        <a href="https://www.linkedin.com/in/prateek-garg-coder/" target="_blank" rel="noopener noreferrer" ><FaLinkedin  size={20} /></a>
        <a href="https://leetcode.com/u/EikfYHcpji/" target="_blank" rel="noopener noreferrer"><SiLeetcode  size={20} /></a>
        <a href="mailto:prateekgarg0305@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineEmail  size={20} /></a>



      </div>
    </div>
  )
}

export default Navbar