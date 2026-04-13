import React from 'react'
import { FaUsers} from 'react-icons/fa';
import { HiOutlineAcademicCap } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";





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

            <div className="journey">
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
                            <p className="experienceSubHead"><span>eDC, IIT Delhi </span> <span><a href="/EDC LOR.pdf" target="_blank" rel="noopener noreferrer" > <span className="liveTag">View LOR </span></a></span></p>
                            <p className="experienceBrief">Represented eDC IIT Delhi on campus and promoted entrepreneurship initiatives. Awarded Letter of Recommendation for exceptional contribution.</p>

                        </div>
                        <div className='experienceCard'>
                            <p className='experienceHead'><span>Social Media & Marketing</span> <span className='experienceDate'>Oct 2024 - July 2025</span></p>
                            <p className="experienceSubHead">Robotics Club, BML Munjal University</p>
                            <p className="experienceBrief">Managed social media content and promotional campaigns to increase engagement and community reach.</p>
                        </div>

                    </div>

                </div>
                <div className="academic">
                    <div className="experienceTop">
                        <span><HiOutlineAcademicCap   size={25} /> </span>
                        <p>Academic Baackground</p>
                    </div>

                    <div className='experienceCardsAcademic'>
                        <div className='experienceCardAcademic'>
                            <p className='experienceHeadAcademic'><span><span>B.Tech in Computer Science</span> <span className="liveTag">Current </span></span> <span className='academicPercentage'>CGPA 9.08</span></p>
                            <p className="experienceSubHeadAcademic">BML Munjal University</p>
                            <p className="experienceBriefAcademic"><span><CiCalendar/> 2024-2028</span><span><CiLocationOn/> Gurgaon,Haryana</span></p>
                        </div>

                        <div className='experienceCardAcademic'>
                            <p className='experienceHeadAcademic'><span><span>Senior Secondary (XII)</span> </span> <span className='academicPercentage'>87.4%</span></p>
                            <p className="experienceSubHeadAcademic">CBSE Board</p>
                            <p className="experienceBriefAcademic"><span><CiCalendar/> 2024</span><span><CiLocationOn/>Bhilwara, Rajasthan</span></p>
                        </div>

                        <div className='experienceCardAcademic'>
                            <p className='experienceHeadAcademic'><span><span>Secondary (X)</span> </span> <span className='academicPercentage'>93.6%</span></p>
                            <p className="experienceSubHeadAcademic">CBSE Board</p>
                            <p className="experienceBriefAcademic"><span><CiCalendar/> 2022</span><span><CiLocationOn/> Bhilwara, Rajasthan</span></p>
                        </div>
                       

                    </div>
                    

                </div>

            </div>


        </div>
    )
}

export default Experience