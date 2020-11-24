import React, { Component } from 'react';
import {Section} from 'bloomer';
import Quotes from '../components/quotes';

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
            <Quotes />
          </Section> 
        </body>
      </div>
  );
  }
}

export default Home;