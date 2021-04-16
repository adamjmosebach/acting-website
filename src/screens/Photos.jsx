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
    [anne1, 'vert'],
    [anne2, 'horiz'],
    [anne3, 'horiz'],
    [anne4, 'vert']
  ]);

  const [sssPhotos, setSSSPhotos] = useState([
    [sss1, 'horiz'],
    [sss2, 'horiz'],
    [sss3, 'horiz'],
    [sss4, 'horiz']
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
        {sssPhotos.map(photo => (
          <img src={photo[0]} className={`prod-photo ${photo[1]}`} alt='1776' onClick={focusPhoto}></img>
        ))}
      </div>
    </div>
  )
}

export default Photos
