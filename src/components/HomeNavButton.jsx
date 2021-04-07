import React from 'react'
import { Link } from 'react-router-dom'
import './HomeNavButton.css'

function HomeNavButton({ name, linkTo }) {
  return (
    <Link to={linkTo} className='home-nav-button'>{name}</Link>
  )
}

export default HomeNavButton
