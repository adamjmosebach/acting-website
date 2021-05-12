import React from 'react'
import resume from '../images/resume.jpg'
import './Resume.css'

function Resume({ updateBannerNav, setCurrentPage }) {

  updateBannerNav(true);
  setCurrentPage('Resume');

  return (
    <div className='resume-div'>
      <img src={resume} alt='resume' className='resume'></img>
    </div>
  )
}

export default Resume
