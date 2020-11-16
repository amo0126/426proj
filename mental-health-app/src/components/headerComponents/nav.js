import React, { Component } from 'react';

class Nav extends Component {
    render() {
      return (
        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Other Page</a>
                </li>
                <li>
                    <a href="#">Another Page</a>
                </li>
            </ul>
        </nav>
    );
    }
  }
  
  export default Nav;