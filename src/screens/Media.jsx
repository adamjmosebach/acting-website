import React from 'react'
import './Media.css'

function Media({ updateBannerNav }) {

  updateBannerNav(true);

  return (
    <div className='media-div'>
      Media
      <iframe title='gethsemane' src="https://www.youtube.com/embed/qnaIGRZyYaw" ></iframe>
    </div>
  )
}

export default Media