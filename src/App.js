import './App.css';
import { Route, Switch } from 'react-router-dom';
import greyWood from './images/greyWood.jpeg'
import Banner from './Banner';
import Home from './screens/Home';
import Media from './screens/Media'

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${greyWood})` }}>
      <Banner />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/media'>
          <Media />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
