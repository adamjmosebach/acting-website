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
  
  const [currentPhoto, setCurrentPhoto] = useState([]);
  const [seePhoto, setSeePhoto] = useState('prod-photo-hidden');

  function focusPhoto(e) {
    setCurrentPhoto([e.target.src, e.target.name]);
    setSeePhoto('prod-photo-visible');
  }

  function unfocusPhoto() {
    setSeePhoto('prod-photo-hidden');
  }

  function nextPhoto(e) {
    if (currentPhoto[1] === 'annePhotos') {
      console.log(annePhotos[0][0])
      console.log(currentPhoto[0])
      // console.log(annePhotos.indexOf(photo => photo[0] === currentPhoto[0]))
    } else {
      console.log('not anne')
    }
  }
 
  return (
    <div className='photo-album'>
      <div className={`focus-photo-modal ${seePhoto}`} onClick={unfocusPhoto}></div>
      <img src={currentPhoto[0]} className={`focused-photo ${seePhoto}`} alt='current production still'></img>
      <div className={`arrow arrow-left ${seePhoto}`} onClick={nextPhoto}>Previous</div>
      <div className={`arrow arrow-right ${seePhoto}`} onClick={nextPhoto}>Next</div>
      <h4>Anne of Green Gables</h4>
      <div className='photo-section'>
        {annePhotos.map(photo => (
          <img src={photo[0]} className={`prod-photo ${photo[1]}`} alt='anne of green gables' onClick={focusPhoto} name='annePhotos'></img>
        ))}
      </div>
      <h4>1776</h4>
      <div className='photo-section'>
        {sssPhotos.map(photo => (
          <img src={photo[0]} className={`prod-photo ${photo[1]}`} alt='1776' onClick={focusPhoto} name='sssPhotos'></img>
        ))}
      </div>
    </div>
  )
}

export default Photos
