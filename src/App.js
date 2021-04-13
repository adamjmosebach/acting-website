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

function App() {

  const [bannerNav, updateBannerNav] = useState()

  return (
    <div className='App' style={{ backgroundImage: `url(${greyWood})` }}>
      <Banner bannerNav={bannerNav} />
      <Switch>
        <Route exact path='/'>
          <Home updateBannerNav={updateBannerNav} />
        </Route>
        <Route path='/media'>
          <Media updateBannerNav={updateBannerNav} />
        </Route>
        <Route path='/bio'>
          <Bio updateBannerNav={updateBannerNav} />
        </Route>
        <Route path='/resume'>
          <Resume updateBannerNav={updateBannerNav} />
        </Route> 
        <Route path='/photos'>
          <Photos updateBannerNav={updateBannerNav} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
