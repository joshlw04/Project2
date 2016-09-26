import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../../firebase.config.js';

class Register extends Component {
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
    console.log('handleSubmitButton method running');
    const { username, password } = this.state;
    console.log(username, password);
    firebase.auth()
    .createUserWithEmailAndPassword(username, password)
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(`${errorCode}: ${errorMessage}`);
    })
    .then((user) => {
      firebase.database().ref('Complainers')
      .child(user.uid)
      .set({ username: username, email: '', userID: user.uid });
    })
    .then(() => {
      this.props.router.push('/home')
    });
  }

  render() {
    return (
      <div>
        <div id="register-form">
          <div>
            <input name="username" onChange={this.handleChangeOfInput} type="text" placeholder="Choose a User Email" />
          </div>
          <div>
            <input name="password" onChange={this.handleChangeOfInput} type="password" placeholder="Choose a Password (at least 6 characters)" />
          </div>
          <button className="submit-button" onClick={this.handleSubmitButton}>Register</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
