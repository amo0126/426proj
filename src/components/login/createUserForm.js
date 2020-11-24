import React, { Component } from 'react'; 
import { createUser } from '../../requests/createuser';
import { Field, Label, Input, Button} from 'bloomer'
export class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            username: '',
            password: '',
            confirmpass: ''
        };
    
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPassChange = this.handleConfirmPassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleFNameChange(event) {
        this.setState({
            fname: event.target.value,
            lname: this.state.lname,
            username: this.state.username,
            password: this.state.password,
            confirmpass: this.state.confirmpass,
        });
      }

      handleLNameChange(event) {
        this.setState({
            fname: this.state.fname,
            lname: event.target.value,
            username: this.state.username,
            password: this.state.password,
            confirmpass: this.state.confirmpass,
        });
      }
      handleUsernameChange(event) {
        this.setState({
            fname: this.state.fname,
            lname: this.state.lname,
            username: event.target.value,
            password: this.state.password,
            confirmpass: this.state.confirmpass,
        });
      }
      handlePasswordChange(event) {
        this.setState({
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username,
            password: event.target.value,
            confirmpass: this.state.confirmpass,
        });
      }
      handleConfirmPassChange(event) {
        this.setState({
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username,
            password: this.state.password,
            confirmpass: event.target.value
        });
      }
    
      async handleSubmit(event) {
        event.preventDefault();
        if (this.state.password!==this.state.confirmpass) {alert('passwords must match');}
        await createUser(this.state.fname, this.state.lname, this.state.username, this.state.password, this.state.confirmpass);

        
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <Field>
                <Label>First Name:</Label>
                <Input type="text" value={this.state.fname} onChange={this.handleFNameChange} />
              </Field>

            <Field>
              <Label>Last Name:</Label>
              <Input type="text" value={this.state.lname} onChange={this.handleLNameChange}/>
            </Field>

            <Field>
              <Label>Username:</Label>
              <Input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </Field>

            <Field>
              <Label>Password:</Label>
              <Input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
            </Field>

            <Field>
            <Label>Confirm Password:</Label>
              <Input type="text" value={this.state.confirmpass} onChange={this.handleConfirmPassChange}/>
            </Field>

            <Button type="submit" value="Submit">Submit</Button>
          </form>
        );
      }

     
}

export default UserForm;
