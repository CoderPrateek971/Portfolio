import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
          <div className='Top'>
                <div className="aboutTag"  >
                    <span >Get in Touch</span>
                </div>
                <h3 className='aboutHeading'>Let's Work Together</h3>
                <p className='subHead' >I'm currently looking for internship and full-time opportunities. Feel free to reach out!</p>
            </div>

            <div className='contactInput'>
                <ContactForm/>

            </div>
    </div>
  )
}

export default Contact