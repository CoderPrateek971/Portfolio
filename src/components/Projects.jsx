import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='Top'>
                <div className="aboutTag"  >
                    <span >Work Showcase</span>
                </div>
                <h3 className='aboutHeading'>Featured Projects</h3>
                <p className='subHead' >A selection of projects that showcase my skills.</p>
            </div>

            {/* project 1 */}

            <div className="projectCard">
                <div className="projectLeft">
                    <span>Feb 2026 - March 2026</span>

                    <span className="liveTag"><span className="dot project"></span>Live Demo </span>
                </div>

                <div className="projectRight">
                    <div className="projectTop">
                        <p>Expenso</p>
                        <div className="projectIcons">
                            <a href="https://expenso-delta.vercel.app/" target="_blank" rel="noopener noreferrer"><span><FaExternalLinkAlt color='#9CA3AF' /></span> </a>
                            <a href="https://github.com/CoderPrateek971/Expenso" target="_blank" rel="noopener noreferrer"><span><FaGithub color='#9CA3AF' /></span></a>
                        </div>

                    </div>
                    <div className='projectInfo'>
                        <p>A full-stack expense tracker built with the MERN stack featuring secure authentication and real-time financial tracking.
                            Supports CRUD operations with user-specific data handling for efficient income and expense management.</p>
                    </div>

                    <div className="projectTags">
                        <span className="projectTag"  >React.js</span>
                        <span className="projectTag"  >Node.js</span>
                        <span className="projectTag"  >Express.js</span>
                        <span className="projectTag"  >CSS</span>
                        <span className="projectTag"  >MongoDB</span>
                        <span className="projectTag"  >JWT Authentication</span>
                        <span className="projectTag"  >Bcrypt</span>

                    </div>
                </div>

            </div>



            {/* project 2 */}

            <div className="projectCard">
                <div className="projectLeft">
                    <span>Oct 2025 - Dec 2025</span>


                </div>

                <div className="projectRight">
                    <div className="projectTop">
                        <p>Taskify - A full stack productivity website</p>
                        <div className="projectIcons">
                            <a href="https://github.com/CoderPrateek971/Taskify" target="_blank" rel="noopener noreferrer"><span><FaGithub color='#9CA3AF' /></span></a>
                        </div>

                    </div>
                    <div className='projectInfo'>
                        <p>A full-stack productivity web app combining task management, event planning, and a Pomodoro focus timer.
                            Built with Node.js, Express, MongoDB, and EJS, featuring secure authentication and dynamic CRUD operations.</p>
                    </div>

                    <div className="projectTags">
                        <span className="projectTag"  >JavaScript</span>
                        <span className="projectTag"  >Node.js</span>
                        <span className="projectTag"  >Express.js</span>
                        <span className="projectTag"  >CSS3</span>
                        <span className="projectTag"  >MongoDB</span>
                        <span className="projectTag"  >JWT Authentication</span>
                        <span className="projectTag"  >Bcrypt</span>
                        <span className="projectTag"  >EJS</span>

                    </div>
                </div>

            </div>


            {/* project 3 */}
            <div className="projectCard">
                <div className="projectLeft">
                    <span>Jan 2026 - Feb 2026</span>


                </div>

                <div className="projectRight">
                    <div className="projectTop">
                        <p>Medical Insurance Charges Predictor</p>
                        <div className="projectIcons">
                            <a href="https://github.com/CoderPrateek971/Medical-Insurance-Charges-Prediction" target="_blank" rel="noopener noreferrer"><span><FaGithub color='#9CA3AF' /></span></a>
                        </div>

                    </div>
                    <div className='projectInfo'>
                        <p>A data analytics project using Python to predict medical insurance costs based on demographic and lifestyle factors.
                            Includes data cleaning, EDA, and a Linear Regression model achieving ~80% R² score.</p>
                    </div>

                    <div className="projectTags">
                        <span className="projectTag"  >Python</span>
                        <span className="projectTag"  >Pandas</span>
                        <span className="projectTag"  >Numpy</span>
                        <span className="projectTag"  >MetplotLib</span>
                        <span className="projectTag"  >Seaborn</span>
                        <span className="projectTag"  >Scikit-learn</span>

                    </div>
                </div>

            </div>


            {/* project 4 */}

            <div className="projectCard">
                <div className="projectLeft">
                    <span>Feb 2025 - March 2025</span>


                </div>

                <div className="projectRight">
                    <div className="projectTop">
                        <p>Netflix UI Clone</p>
                        <div className="projectIcons">
                            <a href="https://github.com/CoderPrateek971/Netflix-Clone" target="_blank" rel="noopener noreferrer"><span><FaGithub color='#9CA3AF' /></span></a>
                        </div>

                    </div>
                    <div className='projectInfo'>
                        <p>A responsive Netflix landing page clone built using HTML and CSS with a focus on UI design and layout.
                            Implements Flexbox, Grid, and mobile-first design to replicate a modern streaming interface.</p>
                    </div>

                    <div className="projectTags">
                        <span className="projectTag"  >HTML5</span>
                        <span className="projectTag"  >CSS3</span>
                        <span className="projectTag"  >Flexbox</span>

                    </div>
                </div>

            </div>

            <div className="projectViewAll"  >
                

                    <a href="https://github.com/CoderPrateek971" className="viewAllTag" target="_blank" rel="noopener noreferrer" ><span><FaGithub color='gray' size={15}/></span>View All Projects on GitHub</a>
                </div>



        </div >


    )
}

export default Projects