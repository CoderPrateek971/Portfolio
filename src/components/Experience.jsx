import React from 'react'
import { FaUsers } from 'react-icons/fa';



const Experience = () => {
    return (
        <div className='experience'>

            <div className='Top e'>
                <div className="aboutTag"  >
                    <span >Journey</span>
                </div>
                <h3 className='aboutHeading'>Experience & Education
                </h3>
                <p className='subHead' >My professional journey and academic achievements.</p>
            </div>

            <div className="leadership">
                <div className="experienceTop">
                    <span><FaUsers size={25} /></span> 
                    <p>Leadership & Activities </p>
                </div>
                <div className='experienceCards'>
                    <div className='experienceCard'>
                        <p className='experienceHead'><span>Design Lead</span> <span className='experienceDate'>Jul 2025 - Present</span></p> 
                        <p className="experienceSubHead">Robotics Club, BML Munjal University</p>
                        <p className="experienceBrief">Leading design initiatives for technical events and showcases. Managing visual content and branding for club promotions.</p>
                    </div>
                    <div className='experienceCard'>
                        <p className='experienceHead'><span>Campus Ambassador</span> <span className='experienceDate'>Dec 2025 - Feb 2026</span></p> 
                        <p className="experienceSubHead"><span>eDC, IIT Delhi </span> <span><a href="https://drive.google.com/file/d/1nl6mWP9xTQ7FO9zItdkCZtLsKirtpTJs/view?usp=sharing" target="_blank" rel="noopener noreferrer" > <span className="liveTag">View LOR </span></a></span></p>
                        <p className="experienceBrief">Represented eDC IIT Delhi on campus and promoted entrepreneurship initiatives. Awarded Letter of Recommendation for exceptional contribution.</p>
                        
                    </div>
                    <div className='experienceCard'>
                        <p className='experienceHead'><span>Social Media & Marketing</span> <span className='experienceDate'>Oct 2024 - July 2025</span></p> 
                        <p className="experienceSubHead">Robotics Club, BML Munjal University</p>
                        <p className="experienceBrief">Managed social media content and promotional campaigns to increase engagement and community reach.</p>
                    </div>
                  
                </div>
            </div>

            <div className="academic"></div>

        </div>
    )
}

export default Experience