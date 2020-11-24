import React, { Component } from 'react';
import UserForm from '../components/login/createUserForm'

export class SignUp extends Component {
  render() {
    return (
    <div className="App">
        <UserForm />
    </div>
    );
  }
}

export default SignUp;