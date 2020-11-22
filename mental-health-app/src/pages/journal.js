import React, { Component } from 'react';
import Header from '../components/headerComponents/header';

export class Journal extends Component {
  render() {
    return (
    <div className="App">
      <Header></Header>
      The journal page
    </div>
  );
  }
}

export default Journal;