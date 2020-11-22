import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Journal from './pages/journal';
import Selfcare from './pages/selfcare';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/journal" component={Journal}/>
      <Route path="/selfcare" component={Selfcare}/>
    </Switch>
</Router>,
  document.getElementById('root')
);