import React from 'react'
import { Link } from 'react-router-dom'
import './BannerNavLink.css'

function BannerNavLink({ name, linkTo, currentPage, setCurrentPage }) {

  return (
    <Link to={linkTo}
      className={currentPage === name ? 'banner-nav-btn-link highlight' : 'banner-nav-btn-link'}>
      <div className='banner-nav-btn' onClick={() => setCurrentPage(name)}>
        {name}
      </div>
    </Link>
  )
}

export default BannerNavLink
