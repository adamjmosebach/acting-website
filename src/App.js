import React, { useState } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import greyWood from './images/greyWood.jpeg'
import Banner from './Banner';
import Home from './screens/Home';
import Media from './screens/Media'
import Bio from './screens/Bio'
import Resume from './screens/Resume'
import Photos from './screens/Photos'
import Contact from './screens/Contact'

function App() {

  const [bannerNav, updateBannerNav] = useState()
  const [currentPage, setCurrentPage] = useState('');

  return (
    <div className='App' style={{ backgroundImage: `url(${greyWood})` }}>
      <Banner bannerNav={bannerNav} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Switch>
        <Route exact path='/'>
          <Home updateBannerNav={updateBannerNav} />
        </Route>
        <Route path='/media'>
          <Media updateBannerNav={updateBannerNav} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path='/bio'>
          <Bio updateBannerNav={updateBannerNav} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path='/resume'>
          <Resume updateBannerNav={updateBannerNav} setCurrentPage={setCurrentPage} />
        </Route> 
        <Route path='/photos'>
          <Photos updateBannerNav={updateBannerNav} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path='/contact'>
          <Contact updateBannerNav={updateBannerNav} setCurrentPage={setCurrentPage} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
