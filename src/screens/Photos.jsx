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


function Photos({ updateBannerNav, setCurrentPage }) {

  updateBannerNav(true);
  setCurrentPage('Photos');

  const [focusIndex, setFocusIndex] = useState(0)

  const photoArr = [
    { src: anne1, id: 'anne1', orientation: 'vert' },
    { src: anne2, id: 'anne2', orientation: 'horiz' },
    { src: anne3, id: 'anne3', orientation: 'horiz' },
    { src: anne4, id: 'anne4', orientation: 'vert' },
    { src: sss1, id: 'sss1', orientation: 'horiz' },
    { src: sss2, id: 'sss2', orientation: 'horiz' },
    { src: sss3, id: 'sss3', orientation: 'horiz' },
    { src: sss4, id: 'sss4', orientation: 'horiz' },
  ];
  
  const [seePhoto, setSeePhoto] = useState('prod-photo-hidden');

  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);

  function focusPhoto(e) {
    setSeePhoto('prod-photo-visible');
    let idx = photoArr.findIndex(photo => photo.id === e.target.id);
    if (idx === 0) {
      setPrevDisable(true);
      setNextDisable(false);
    }
    if (idx === photoArr.length - 1) {
      setPrevDisable(false);
      setNextDisable(true);
    }
    if (idx > 0 && idx < photoArr.length - 1) {
      setPrevDisable(false);
      setNextDisable(false);
    }
    setFocusIndex(idx);
  }

  function unfocusPhoto() {
    setSeePhoto('prod-photo-hidden');
  }

  function prevPhoto() {
    setNextDisable(false);
    if (focusIndex - 1 === 0) {
      setPrevDisable(true);
    }
    setFocusIndex(focusIndex - 1);
  }

  function nextPhoto() {
    setPrevDisable(false);
    if (focusIndex + 1 >= photoArr.length - 1) {
      setNextDisable(true);
    }
    setFocusIndex(focusIndex + 1);
  }
 
  return (
    <div className='photo-album'>

      {/* Modal */}
      <div className={`focus-photo-modal ${seePhoto}`} onClick={unfocusPhoto}></div>
      
      {/* Focus Photo */}
      <img src={photoArr[focusIndex].src} className={`focused-photo ${seePhoto}`} alt='current production still'></img>

      {/* Arrows */}
      <button className={`arrow arrow-left ${seePhoto}`} onClick={prevPhoto} disabled={prevDisable} >Previous</button>
      <button className={`arrow arrow-right ${seePhoto}`} onClick={nextPhoto} disabled={nextDisable}>Next</button>
      
      {/* Pictures */}
      <h4>Anne of Green Gables</h4>
      <div className='photo-section'>
        {photoArr.slice(0, 4).map(photo => (
          <img src={photo.src} id={photo.id} className={`prod-photo ${photo.orientation}`} alt='anne of green gables' onClick={focusPhoto}></img>
        ))}
      </div>
      <h4>1776</h4>
      <div className='photo-section'>
        {photoArr.slice(4, 8).map(photo => (
          <img src={photo.src} id={photo.id} className={`prod-photo ${photo.orientation}`} alt='1776' onClick={focusPhoto}></img>
        ))}
      </div>
    </div>
  )
}

export default Photos
