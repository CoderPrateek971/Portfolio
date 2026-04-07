import React from 'react'
import { HiAcademicCap } from "react-icons/hi2";
import { FaAward } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";



const AboutMe = () => {
    return (
        <div className='about'>
            <div className='aboutTop'>


                <div className="aboutTag" >
                    <span >About Me</span>
                </div>
                <h3 className='aboutHeading'>Full-Stack Developer | Building Scalable & Impactful Web Apps</h3>
                <p className='subHead' >Turning ideas into real-world applications using modern web technologies and strong problem-solving foundations.</p>

            </div>
            <div className='aboutSub'>
                <div className='aboutMe'>
                    <p>I’m Prateek Garg, a full-stack developer passionate about creating performant and scalable web applications. <br /> <br />
                        With experience in React, Node.js, Express, and MongoDB, I’ve built projects like Taskify and an Expense Tracker featuring authentication, real-time updates, and clean UI/UX. <br /><br />
                        I enjoy solving complex problems using DSA and continuously improving my coding skills. <br /><br />
                        I also bring leadership experience through my work with the Robotics Club and as a Campus Ambassador at IIT Delhi’s eDC, where I contributed to design, marketing, and community initiatives.</p>

                </div >
                <div className='aboutCards'>

                    <div className='aboutRightCard'>

                        <div
                            style={{
                                backgroundColor: "rgba(16, 185, 129, 0.1)",
                                width: "50px",
                                height: "50px",
                                borderRadius: "14px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <HiAcademicCap size={26} color='#10B981' />
                        </div>

                        <div className='textBox'>
                            <p className="title">9.08 CGPA</p>
                            <span className="aboutSubText">
                                B.Tech CSE at BMU, Gurgaon
                            </span>
                        </div>
                    </div>

                    <div className='aboutRightCard'>

                        <div style={{
                            backgroundColor: "#F5E6D3",
                            width: "50px",
                            height: "50px",
                            borderRadius: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <FaAward size={26} color='#F59E0B' />
                        </div>

                        <div className='textBox'>
                            <p className="title">Certified Excellence</p>
                            <span className="aboutSubText">
                                LOR from EDC, IIT Delhi
                            </span>
                        </div>
                    </div>
                    <div className='aboutRightCard'>

                        <div style={{
                            backgroundColor: "rgba(59, 130, 246, 0.1)",
                            width: "55px",
                            height: "55px",
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <IoMdPeople size={26} color='blue' />
                        </div>

                        <div className='textBox'>
                            <p className="title">Leadership Roles </p>
                            <span className="aboutSubText">
                                Robotics Club & eDC IIT Delhi
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default AboutMe