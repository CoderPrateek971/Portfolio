import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import VisitorCount from "./VisitorCount";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerInfo">
                <div className="footerLeft">


                    <div className='left'>
                    <img src="/icon.webp" className="logo"  />
                        <div >Prateek Garg</div>
                    </div>
                    <div className="footerBottom rights">
                        2026 All rights reserved.
                    </div>
                </div>
                <div className="footerRight">
                    <a href="https://github.com/CoderPrateek971" target="_blank" rel="noopener noreferrer"><FaGithub color='#9CA3AF' size={20} /></a>
                    <a href="https://www.linkedin.com/in/prateek-garg-coder/" target="_blank" rel="noopener noreferrer" ><FaLinkedin color='#9CA3AF' size={20} /></a>
                    <a href="https://leetcode.com/u/EikfYHcpji/" target="_blank" rel="noopener noreferrer"><SiLeetcode color='#9CA3AF' size={20} /></a>
                    <a href="mailto:prateekgarg0305@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineEmail color='#9CA3AF' size={20} /></a>
                </div>

            </div>
            <br />
            <br />
            <div className='break'></div>

            <div className="madeWith">
                <p>Built with ❤️ using React.js.</p>
                <VisitorCount />
            </div>
        </div>
    )
}

export default Footer