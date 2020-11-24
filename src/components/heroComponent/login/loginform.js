import React, { Component } from 'react'; 
import { login } from '../../requests/login';
import { Field, Label, Input, Button} from 'bloomer'
export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            username: '',
            password: '',
            confirmpass: ''
        };
    
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
      async handleSubmit(event) {
        event.preventDefault();
        await login(this.state.username, this.state.password);

        
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
              
            <Field>
              <Label>Username:</Label>
              <Input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </Field>

            <Field>
              <Label>Password:</Label>
              <Input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
            </Field>


            <Button type="submit" value="Submit">Submit</Button>
          </form>
        );
      }

     
}

export default LoginForm