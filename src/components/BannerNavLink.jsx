import React from 'react'
import { Link } from 'react-router-dom'
import './BannerNavLink.css'

function BannerNavLink({ name, linkTo }) {
  return (
    <Link to={linkTo} className='banner-nav-btn-link'>
      <div className='banner-nav-btn'>
        {name}
      </div>
    </Link>
  )
}

export default BannerNavLink
