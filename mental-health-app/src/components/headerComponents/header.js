import React, { Component } from 'react';
import Nav from './nav';

export class Header extends Component {
    render() {
      return (
      <header>
        <Nav></Nav>
      </header>
    );
    }
  }
  
  export default Header;