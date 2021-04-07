import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavButton.css';

function HomeNavButton({ name, linkTo }) {
  return (
    <Link to={linkTo} className='home-nav-button-link'>
      <div className='home-nav-button'>{name}</div>
    </Link>
  );
}

export default HomeNavButton;
