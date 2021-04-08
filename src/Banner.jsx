import React from 'react'
import './Banner.css'
import BannerNavLink from './components/BannerNavLink'

function Banner({ bannerNav }) {
  if (bannerNav) {
    return (
      <div className='banner'>
        <h1 className='banner-name'>Adam Mosebach</h1>
        <div className='banner-nav'>
          <BannerNavLink name='Home' linkTo='/' />
          <BannerNavLink name='Bio' linkTo='/bio' />
          <BannerNavLink name='Resume' linkTo='/resume' />
          <BannerNavLink name='Media' linkTo='media' /> 
        </div>
      </div>
    )
  } else {
    return (
      <div className='banner'>
        <h1 className='banner-name'>Adam Mosebach</h1>
      </div>
    )
  }
}

export default Banner
