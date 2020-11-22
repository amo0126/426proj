import React, { Component } from 'react';
import Header from '../components/headerComponents/header';


export class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <h1 className="title is-1">This is the Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
          risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
          nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
          lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
        </p>
      </div>
  );
  }
}

export default Home;