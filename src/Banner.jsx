import React from 'react'
import './Banner.css'
import BannerNavLink from './components/BannerNavLink'

function Banner({ bannerNav, currentPage, setCurrentPage }) {


  if (bannerNav) {
    return (
      <div className='banner'>
        <h1 className='banner-name'>Adam Mosebach</h1>
        <div className='banner-nav'>
          <BannerNavLink name='Home' linkTo='/' currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <BannerNavLink name='Bio' linkTo='/bio' currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <BannerNavLink name='Resume' linkTo='/resume' currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <BannerNavLink name='Photos' linkTo='/photos' currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <BannerNavLink name='Media' linkTo='/media' currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <BannerNavLink name='Contact' linkTo='/contact' currentPage={currentPage} setCurrentPage={setCurrentPage} /> 
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
