import React, { Component } from 'react';
import {Section} from 'bloomer';
import { Search } from '../components/searchComponent/search';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
  render() {
    return (
      <div>
        <body>
          <Section>
            <Search/>
          </Section> 
        </body>
      </div>
  );
  }
}

export default Home;