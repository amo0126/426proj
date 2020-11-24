import React, { Component } from 'react';
import Navbar from './navbar';

export class Header extends Component {
    render() {
      return (
      <header>
        <Navbar></Navbar>
      </header>
    );
    }
  }
  
  export default Header;