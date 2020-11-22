import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    render() {
      return (
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/selfcare">Selfcare</Link></li>
        </ul>
      </nav>
    );
    }
  }
  
  export default Navbar;