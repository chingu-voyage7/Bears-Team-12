import React from 'react'
import about from 'content/about'
import './About.css'

const About = () => (
  <div className='about-wrapper'>
    <h3 className='section-title'>
      About
    </h3>
    <p className='section-content'>
      {about}
    </p>
  </div>
)

export default About
