import React, { Component } from 'react';
import {Section, Notification, Content, Title, Image} from 'bloomer';
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
          <Title>Mental Health and Wellness</Title>
          <Image isRatio="2:1" src="https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80" />
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