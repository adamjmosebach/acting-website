import React, { useState } from 'react';
import './Photos.css';
import anne1 from '../images/anne1.jpeg';
import anne2 from '../images/anne2.jpeg';
import anne3 from '../images/anne3.jpeg';
import anne4 from '../images/anne4.jpeg';
import sss1 from '../images/1776-1.jpeg';
import sss2 from '../images/1776-2.jpeg';
import sss3 from '../images/1776-3.jpeg';
import sss4 from '../images/1776-4.jpeg';
import toxic1 from '../images/toxic1.jpg';
import toxic2 from '../images/toxic2.jpg';
import toxic3 from '../images/toxic3.jpg';
import toxic5 from '../images/toxic5.jpg';
import fortyTwo from '../images/fortyTwo.jpg';
import alice2 from '../images/alice2.jpg';
import alice4 from '../images/alice4.jpg';
import cinderella1 from '../images/cinderella1.jpg';
import cinderella2 from '../images/cinderella2.jpg';
import seussical3 from '../images/seussical3.jpg';
import seussical4 from '../images/seussical4.jpg';
import wonka from '../images/wonka.jpg';
import oz1 from '../images/oz1.jpg';
import oz2 from '../images/oz2.jpg';
import oz3 from '../images/oz3.jpg';
import rapunzel1 from '../images/rapunzel1.jpg';
import rapunzel2 from '../images/rapunzel2.jpg';
import hatter1 from '../images/hatter1.jpg';
import cratchit from '../images/cratchit.jpg';
import scarecrow1 from '../images/scarecrow1.jpg';
import lamar1 from '../images/lamar1.jpg';
import darkFred from '../images/darkFred.jpg';
import catinhat1 from '../images/catinhat1.jpg';
import Death_and_Deception from '../images/Death_and_Deception.jpg';
import dog1 from '../images/dog1.jpg';
import dog2 from '../images/dog2.jpg';
import frosty1 from '../images/frosty1.jpg';
import frosty2 from '../images/frosty2.jpg';

function Photos({ updateBannerNav, setCurrentPage }) {
  updateBannerNav(true);
  setCurrentPage('Photos');

  const [focusIndex, setFocusIndex] = useState(0);

  const photoArr = [
    { src: anne1, id: 'anne1' },
    { src: anne2, id: 'anne2' },
    { src: anne3, id: 'anne3' },
    { src: anne4, id: 'anne4' },
    { src: sss1, id: 'sss1' },
    { src: sss2, id: 'sss2' },
    { src: sss3, id: 'sss3' },
    { src: sss4, id: 'sss4' },
    { src: toxic1, id: 'toxic1' },
    { src: toxic2, id: 'toxic2' },
    { src: toxic3, id: 'toxic3' },
    { src: toxic5, id: 'toxic5' },
    { src: fortyTwo, id: 'fortyTwo' },
    { src: alice2, id: 'alice2' },
    { src: alice4, id: 'alice4' },
    { src: cinderella1, id: 'cinderella1' },
    { src: cinderella2, id: 'cinderella2' },
    { src: seussical3, id: 'seussical3' },
    { src: seussical4, id: 'seussical4' },
    { src: wonka, id: 'wonka' },
    { src: oz1, id: 'oz1' },
    { src: oz2, id: 'oz2' },
    { src: oz3, id: 'oz3' },
    { src: rapunzel1, id: 'rapunzel1' },
    { src: rapunzel2, id: 'rapunzel2' },
    { src: hatter1, id: 'hatter1' },
    { src: cratchit, id: 'cratchit' },
    { src: scarecrow1, id: 'scarecrow1' },
    { src: lamar1, id: 'lamar1' },
    { src: darkFred, id: 'darkFred' },
    { src: catinhat1, id: 'catinhat1' },
    { src: Death_and_Deception, id: 'Death_and_Deception' },
    { src: dog1, id: 'dog1' },
    { src: dog2, id: 'dog2' },
    { src: frosty1, id: 'frosty1' },
    { src: frosty2, id: 'frosty 2' },
  ];

  const [seePhoto, setSeePhoto] = useState('prod-photo-hidden');

  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);

  function focusPhoto(e) {
    let idx = photoArr.findIndex((photo) => photo.id === e.target.id);
    setFocusIndex(idx);
    if (idx === 0) {
      setPrevDisable(true);
      setNextDisable(false);
    } else if (idx === photoArr.length - 1) {
      setPrevDisable(false);
      setNextDisable(true);
    } else {
      setPrevDisable(false);
      setNextDisable(false);
    }
    setTimeout(() => setSeePhoto('prod-photo-visible'), 50);
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

  if (document.querySelector('#focusedPhoto')) {
    const focusedPhoto = document.querySelector('#focusedPhoto');
    const imageHeight = focusedPhoto.clientHeight;
    const windowHeight = window.innerHeight;
    const topMeasurement = (windowHeight - imageHeight) / 2;
    console.log(imageHeight, windowHeight, topMeasurement);
    focusedPhoto.style = `top: ${topMeasurement}px;`;
  }

  return (
    <div className='photo-album'>
      {/* Modal */}
      <div
        className={`focus-photo-modal ${seePhoto}`}
        onClick={unfocusPhoto}
      ></div>

      {/* Focus Photo */}
      <img
        src={photoArr[focusIndex].src}
        className={`focused-photo ${seePhoto}`}
        alt='current production still'
        id='focusedPhoto'
      ></img>

      {/* Arrows */}
      <button
        className={`arrow arrow-left ${seePhoto}`}
        onClick={prevPhoto}
        disabled={prevDisable}
      >
        Previous
      </button>
      <button
        className={`arrow arrow-right ${seePhoto}`}
        onClick={nextPhoto}
        disabled={nextDisable}
      >
        Next
      </button>

      {/* Pictures */}
      <h4>Anne of Green Gables</h4>
      <div className='photo-section'>
        {photoArr.slice(0, 4).map((photo) => (
          <img
            src={photo.src}
            id={photo.id}
            className='prod-photo'
            alt='anne of green gables'
            onClick={focusPhoto}
          ></img>
        ))}
      </div>
      <h4>1776</h4>
      <div className='photo-section'>
        {photoArr.slice(4, 8).map((photo) => (
          <img
            src={photo.src}
            id={photo.id}
            className='prod-photo'
            alt='1776'
            onClick={focusPhoto}
          ></img>
        ))}
      </div>
      <h4>The Toxic Avenger</h4>
      <div className='photo-section'>
        {photoArr.slice(8, 12).map((photo) => (
          <img
            src={photo.src}
            id={photo.id}
            className='prod-photo'
            alt='toxic avenger'
            onClick={focusPhoto}
          ></img>
        ))}
      </div>
      <h4>Other Show</h4>
      <div className='photo-section gallery'>
        {photoArr.slice(12).map((photo) => (
          <img
            src={photo.src}
            id={photo.id}
            className='prod-photo'
            alt='shows'
            onClick={focusPhoto}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Photos;
