import React from 'react'
import './Photos.css'
import anne1 from '../images/anne1.jpeg'
import anne2 from '../images/anne2.jpeg'
import anne3 from '../images/anne3.jpeg'
import anne4 from '../images/anne4.jpeg'


function Photos({ updateBannerNav }) {

  updateBannerNav(true);

  return (
    <div className='photo-album'>
      <h4>Anne of Green Gables</h4>
      <div className='photo-section'>
        <img src={anne1} className='photo-album-photo vert' alt='anne of green gables'></img>
        <img src={anne2} className='photo-album-photo horiz' alt='anne of green gables'></img>
        <img src={anne3} className='photo-album-photo horiz' alt='anne of green gables'></img>
        <img src={anne4} className='photo-album-photo vert' alt='anne of green gables'></img>
      </div>
    </div>
  )
}

export default Photos
