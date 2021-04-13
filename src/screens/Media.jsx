import React from 'react'
import './Media.css'

function Media({ updateBannerNav }) {

  updateBannerNav(true);

  return (
    <div className='media-div'>
      <iframe title='gethsemane' src="https://www.youtube.com/embed/qnaIGRZyYaw" ></iframe>
      <iframe title='you tore my hear' src='https://www.youtube.com/embed/KVbQdz7ASNI' ></iframe>
      <iframe title='a world without you' src='https://www.youtube.com/embed/zjIRkOzkJvk' ></iframe>
      <iframe title='all good gifts' src='https://www.youtube.com/embed/3Xc6eGmA-Ws' ></iframe>
    </div>
  )
}

export default Media