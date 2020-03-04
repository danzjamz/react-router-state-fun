import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './pages/nav';
import Home from './pages/home';
import Counter from './pages/counter';
import Toggle from './pages/toggle';
import FontSizer from './pages/font-sizer';
import Align from './pages/align';
import ShowHide from './pages/show-hide';
import Clock from './pages/clock';
import ChangeColor from './pages/change-color';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Nav />

          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/counter' component={ Counter } />
            <Route path='/toggle' component={ Toggle } />
            <Route path='/font-sizer' component={ FontSizer } />
            <Route path='/align' component={ Align } />
            <Route path='/show-hide' component={ ShowHide } />
            <Route path='/clock' component={ Clock } />
            <Route path='/change-color' component={ ChangeColor } />
          </Switch>

        </Router>
        
      </div>
    );
  }
}
