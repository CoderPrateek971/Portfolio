import React from 'react'

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <div className='Top'>
                <div className="aboutTag" >
                    <span >Tech Stack</span>
                </div>
                <h3 className='aboutHeading'>Skills & Technologies</h3>
                <p className='subHead' >A diverse set of technical skills and tools that power my development workflow.</p>
            </div>

            <div className='skillCards'>

                <div className="skillCard">Programming
                    <div className='skillTags'>
                        <span className="skillTag">C</span>
                        <span className="skillTag">C++</span>
                        <span className="skillTag">Python</span>
                        <span className="skillTag">Java</span>
                        <span className="skillTag">JavaScript</span>

                    </div>

                </div>
                <div className="skillCard">Web Development
                    <div className='skillTags'>
                        <span className="skillTag"> HTML5</span>
                        <span className="skillTag">CSS3</span>
                        <span className="skillTag">React.js</span>
                        <span className="skillTag">Node.js</span>
                        <span className="skillTag">Express.js</span>
                    </div>

                </div>

                <div className="skillCard">Core Concepts
                    <div className='skillTags'>
                        <span className="skillTag"> Data Structures & Algorithm</span>
                        <span className="skillTag">OOPs</span>
                        <span className="skillTag">Rest API</span>
                        <span className="skillTag">JWT Authentication</span>
                        <span className="skillTag">Express.js</span>
                    </div>

                </div>
                <div className="skillCard">Database
                    <div className='skillTags'>
                        <span className="skillTag">SQL</span>
                        <span className="skillTag">MongoDB</span>

                    </div>

                </div>
                <div className="skillCard">Tools
                    <div className='skillTags'>
                        <span className="skillTag">Git & GitHub</span>
                        <span className="skillTag">VS Code</span>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Skills