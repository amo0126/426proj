import React, { Component } from 'react';
import Header from './components/headerComponents/header';
import Home from './pages/home';
import Journal from './pages/journal';
import Selfcare from './pages/selfcare';
import {Route, BrowserRouter as Router} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
    <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/selfcare" component={Selfcare} />
    </Router>
  );
  }
}

export default App;