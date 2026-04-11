import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiDesktopMouse2 } from "react-icons/ci";



const Home = () => {
  const fullText = "MERN-Stack Web Developer";
  const [text, setText] = useState("");
  const skills = [
    "C", "C++", "Python", "Java", "JavaScript", "EJS",
    "HTML5", "CSS3", "React.js", "Node.js", "Express.js",
    "Data Structures & Algorithms", "OOPs", "REST API", "JWT",
    "SQL", "MongoDB", "Git & GitHub", "VS Code"
  ];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='main'>
      <div className='intro'>

        <div className="status">
          <span className="dot"></span>
          <span>Open to Opportunities</span>
        </div>

        <h1>  <span className='hi'>Hi, I'm</span> <span style={{ color: "#2EC2A0" }}>Prateek Garg</span> </h1>
        <p className='domain'>{text}   <span className="cursor"></span></p>


        <p className='brief'>  B.Tech CSE student at <span className='hi'>BML Munjal University, Gurgaon</span> with a <span className='hi'>9.08 CGPA</span>, <br /> specializing in the MERN stack and building scalable web applications, while actively practicing DSA.</p>

        <div className='buttons'>
          <a href="#projects"><button className='viewWork'>View My Work <IoIosArrowRoundDown size={20} /></button></a>
          <a href='#skills' ><button className='skillsBtn'>Tech Stack</button></a>
        </div>
        <div className="skills-banner">
          <div className="skills-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={index} className="skill-text">
                {skill}
              </span>
            ))}
          </div>
        </div>




      </div>
      <div className='mouse'><CiDesktopMouse2 color='white' size={30} />
      </div>



    </div>
  )
}

export default Home