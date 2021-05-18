import React from 'react'
import './Contact.css'

function Contact({ updateBannerNav, setCurrentPage }) {

  updateBannerNav(true);
  setCurrentPage('Contact');

  return (
    <div className='contact-div'>
      Contact me
    </div>
  )
}

export default Contact
