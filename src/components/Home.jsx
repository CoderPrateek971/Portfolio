import React from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiDesktopMouse2 } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";



const Home = () => {
  return (
    <div className='main'>
    <div className='intro'>

        <div className="status">
            <span className="dot"></span>
            <span>Open to Opportunities</span>
        </div>

        <h1>  <span className='hi'>Hi, I'm</span> <span style={{ color: "#2EC2A0" }}>Prateek Garg</span> </h1>
        <p className='domain'>MERN-Stack Web Developer</p>
        <p className='brief'>  B.Tech CSE student at <span className='hi'>BML Munjal University, Gurgaon</span> with a <span className='hi'>9.08 CGPA</span>, <br /> specializing in the MERN stack and building scalable web applications, while actively practicing DSA.</p>
     
        <div className='buttons'>
            <a href="projects"><button className='viewWork'>View My Work <IoIosArrowRoundDown size={20} /></button></a>
            <a href="skills" ><button className='skillsBtn'>Tech Stack</button></a>
        </div>

        

       
    </div>
        <div className='mouse'><CiDesktopMouse2 color='white' size={30} />
        </div>

        

</div>
  )
}

export default Home