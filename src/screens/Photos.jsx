import React, { useState } from 'react'
import './Photos.css'
import anne1 from '../images/anne1.jpeg'
import anne2 from '../images/anne2.jpeg'
import anne3 from '../images/anne3.jpeg'
import anne4 from '../images/anne4.jpeg'
import sss1 from '../images/1776-1.jpeg'
import sss2 from '../images/1776-2.jpeg'
import sss3 from '../images/1776-3.jpeg'
import sss4 from '../images/1776-4.jpeg'


function Photos({ updateBannerNav }) {

  updateBannerNav(true);

  const [annePhotos, setAnnPhotos] = useState([
    [anne1, 'vert'], [anne2, 'horiz'], [anne3, 'horiz'], [anne4, 'vert']
  ]);
  
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [seePhoto, setSeePhoto] = useState('prod-photo-hidden');

  function focusPhoto(e) {
    setCurrentPhoto(e.target.src);
    setSeePhoto('prod-photo-visible');
  }

  function unfocusPhoto() {
    setSeePhoto('prod-photo-hidden');
  }

  return (
    <div className='photo-album'>
      <div className={`focus-photo-modal ${seePhoto}`} onClick={unfocusPhoto}></div>
      <img src={currentPhoto} className={`focused-photo ${seePhoto}`} alt='current production still'></img>
      <h4>Anne of Green Gables</h4>
      <div className='photo-section'>
        {annePhotos.map(photo => (
          <img src={photo[0]} className={`prod-photo ${photo[1]}`} alt='anne of green gables' onClick={focusPhoto}></img>
        ))}
      </div>
      <h4>1776</h4>
      <div className='photo-section'>
        <img src={sss1} className='prod-photo vert' alt='1776'></img>
        <img src={sss2} className='prod-photo vert' alt='1776'></img>
        <img src={sss3} className='prod-photo vert' alt='1776'></img>
        <img src={sss4} className='prod-photo horiz' alt='1776'></img>
      </div>
    </div>
  )
}

export default Photos
