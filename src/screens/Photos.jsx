import React from 'react'
import './Photos.css'

function Photos({ updateBannerNav }) {

  updateBannerNav(true);

  return (
    <div className='photos-div'>
      Photos
    </div>
  )
}

export default Photos
