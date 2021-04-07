import React from 'react'
import './Media.css'

function Media({ updateBannerNav }) {

  updateBannerNav(true);

  return (
    <div className='media-div'>
      Media
    </div>
  )
}

export default Media