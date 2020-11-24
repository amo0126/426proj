import React, { Component } from 'react';
import Header from './components/headerComponents/header';
import Home from './pages/home';
import Journal from './pages/journal';
import Selfcare from './pages/selfcare';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/footer';
import Mental from './pages/selfcareSubs/mental';
import Physical from './pages/selfcareSubs/physical';
import Practical from './pages/selfcareSubs/practical';
import Social from './pages/selfcareSubs/social';
import SignUp from './pages/signup'
import Login from './pages/login'
import './style.css';

export class App extends Component {
  render() {
    return (
    <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/selfcare" component={Selfcare} />
        <Route exact path="/mental" component={Mental} />
        <Route exact path="/physical" component={Physical} />
        <Route exact path="/practical" component={Practical} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Footer />
    </Router>
  );
  }
}

export default App;