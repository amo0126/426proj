import React, { Component } from 'react';
import {Section, Notification, Content} from 'bloomer';
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
            <Content >
              <p id='tagline'>An application for mental health resources and tracking</p>
            </Content>
            A Quote to inspire you:
            <Notification isColor='success'>
                <Quotes/>
            </Notification>
          </Section> 
        </body>
      </div>
  );
  }
}

export default Home;