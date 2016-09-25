import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../../firebase.config.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

// this function will take the input of both the username and password input fields and update the state for both.

  handleChangeOfInput(e) { // (e) is the event, in this case the input of characters into either the username or password field
    const stateObj = {}; // create an empty 'state'
    const stateKey = e.target.name; // assign a new variable to the 'name' attribute of the targeted event
    console.log(stateKey);
    stateObj[stateKey] = e.target.value;
    console.log(stateObj);

    this.setState(stateObj);
  }


  handleSubmitButton() {
    const { username, password } = this.state;
    firebase.auth()
    .signInWithEmailAndPassword(username, password)
    .catch((err) => {
      console.log(err);
    }).then(() => {
      this.props.router.push('/home')
    });
  }

  render() {
    return (
      <div>
        <div id="register-form">
          <div>
            <input name="username" onChange={this.handleChangeOfInput} type="text" placeholder="User Email" />
          </div>
          <div>
            <input name="password" onChange={this.handleChangeOfInput} type="password" placeholder="Password" />
          </div>
          <button className="submit-button" onClick={this.handleSubmitButton}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
