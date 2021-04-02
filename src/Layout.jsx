import React from 'react'
import './Layout.css'
import greyWood from './images/greyWood.jpeg'

function Layout() {
  return (
    <>
      <div className='banner'>
        <h1 className='banner-name'>Adam Mosebach</h1>
      </div>
      <img className='bg-img' src={greyWood} alt='background grey wood'/>
    </>
  )
}

export default Layout
