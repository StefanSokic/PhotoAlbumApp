import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './home/Home.js';
import Users from './users/Users.js';
import Albums from './albums/Albums.js';
import Photos from './photos/Photos.js';

class App extends Component {
  render() {
    return <div className='App'>
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path={'/users'} component={Users}/>
            <Route exact path={'/users/:userId/albums'} component={Albums}/>
            <Route exact path={'/users/:userid/albums/:albumId'} component={Photos}/>
          </Switch>
      </BrowserRouter>
    </div>;
  }
}

export default App;
