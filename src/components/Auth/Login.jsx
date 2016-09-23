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
    stateObj[stateKey] = e.target.value; //
    this.setState(stateObj);
  }


  handleSubmitButton() {
    const { username, password } = this.setState;
    firebase.auth()
    .signInWithEmailAndPassword(username, password)
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(`${errorCode}: ${errorMessage}`);
    });
  }

  render() {
    return(
      <div>
      <h1>This is being rendered from the Login component</h1>

        <div id="register-form">
          <div>
            <input name="username" onChange={this.handleChangeOfInput} type="text" placeholder="User Email" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="Password (at least 6 characters)" />
          </div>
          <button className="submit-button" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
