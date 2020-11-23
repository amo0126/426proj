import React, { Component } from 'react';
import {Section, Field, Label, Control, Input} from 'bloomer';

export class Home extends Component {
  render() {
    return (
      <div>
        <body>
            <Section>
              <Field>
                  <Label>Name</Label>
                  <Control>
                      <Input type="text" placeholder='Text Input' />
                  </Control>
              </Field>
            </Section>   
        </body>
      </div>
  );
  }
}

export default Home;