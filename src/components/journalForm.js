import React, { Component } from 'react';
import CreateJournal from '../requests/createJournal';
import { Field, Label, Input, Button} from 'bloomer'

export class JournalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({
            value: event.target.value
        });
      }

      async handleSubmit(event) {
        event.preventDefault();
        await new CreateJournal(this.state.value);


      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>

            <Field>
              <Label>Journal Entry:</Label>
              <Input type="text" value={this.state.value} onChange={this.handleChange}/>
            </Field>

            <Button type="submit" value="Submit">Submit</Button>
          </form>
        );
      }
}

export default JournalForm; 