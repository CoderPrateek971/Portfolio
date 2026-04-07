import React from 'react'
import { IoIosMoon } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { PiLineVerticalThin } from "react-icons/pi";




const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <div className='logo'>PG</div>
        <div >Prateek Garg</div>
      </div>
        <div className='centre'>
          <p>Projects</p>
          <p>Skills</p>
          <p>Resume</p>
          <p>Contact</p>
        </div>
        <div className='right'>
        <IoIosMoon color='white' size={20}/>
        <PiLineVerticalThin size={20} />
        <a href="https://github.com/CoderPrateek971" target="_blank" rel="noopener noreferrer"><FaGithub color='white' size={20}/></a>
        <a href="https://www.linkedin.com/in/prateek-garg-coder/" target="_blank" rel="noopener noreferrer" ><FaLinkedin color='white' size={20} /></a>
        <a href="https://leetcode.com/u/EikfYHcpji/" target="_blank" rel="noopener noreferrer"><SiLeetcode  color='white' size={20} /></a>


        </div>
    </div>
  )
}

export default Navbar