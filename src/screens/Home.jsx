import React from 'react'
import './Home.css'
import headshot from '../images/headshot.jpg'
import HomeNavButton from '../components/HomeNavButton'

function Home () {
  return (
    <div className='home-div'>
      <div className='home-nav'>
        <HomeNavButton name='Media' linkTo='/media' />
      </div>
      <div className='headshot-container'>
        <img src={headshot} alt='headshot' className='headshot'></img>
      </div>
    </div>
  )
}

export default Home
