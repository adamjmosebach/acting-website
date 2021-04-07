import React from 'react'
import './Bio.css'

function Bio({ updateBannerNav }) {

  updateBannerNav(true)

  return (
    <div className='bio-div'>
      Bio
    </div>
  )
}

export default Bio
