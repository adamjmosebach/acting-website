import React from 'react';
import './Bio.css';
// import bioPic from '../images/bioPic.jpg';
import bioPic from '../images/me.jpg';

import signature from '../images/signatureFirstName.png';

function Bio({ updateBannerNav, setCurrentPage }) {
  updateBannerNav(true);
  setCurrentPage('Bio');

  return (
    <>
      <div className='bio-div'>
        <img src={bioPic} alt='bio-pic' className='bio-pic'></img>
        <div className='bio-container'>
          <h2 className='bio-hi'>
            <strong>Hi, I'm Adam!</strong>
          </h2>
          <p>
            When I was in fifth grade, my father came into the living room,
            newspaper in hand, and told me that the local community theatre was
            having auditions for a show called "Oliver". He said I looked just
            like the kid in the movie (I did at the time) and told me I had to
            audition.
          </p>
          <p>
            My response..."No way!" Sure I'd done the second-grade play, but
            being on stage was not something I really cared about. But he said
            he really wanted me to try out and see how it goes. Well, I did. I
            sang a song a capella, had to do an improv scene, and then was asked
            to read through a scene and come back later in the day to have a
            callback.
          </p>
          <p>
            That was the moment something inside me snapped. I suddenly
            reeeaaallly wanted that part. I read, re-read, and rehearsed the
            scene with my brother over and over again right up until the moment
            I had to go back in. I went in, nailed it, got the part, and was
            bitten by the bug.
          </p>
          <p>
            Since then, I have made a career out of acting - having been in over
            170 productions. I've performed in NYC, at Avery Fisher Hall, in
            many regional productions, have been in national and international
            tours, had roles on TV and the internet, and am an EMC and a member
            of SAG-AFTRA.
          </p>
          <p>
            And just to put all rumors to rest... It's true what you've
            heard...I eat almost exclusively pasta. I'm ok with that.
          </p>
          <p>Hope to see you soon,</p>
          <img src={signature} alt='signature' className='signature'></img>
        </div>
      </div>
    </>
  );
}

export default Bio;
