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
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeOfInput(e) { // (e) is the event, in this case the input of characters into either the username or password field
    const stateObj = {}; // create an empty 'state'
    const stateKey = e.target.name; // assign a new variable to the 'name' attribute of the targeted event
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleLoginSubmit() {
    const { username, password } = this.state;
    console.log(username, password);
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
        <p>this is the Login component</p>
        <div id="register-form">
          <div>
            <input name="username" onChange={this.handleChangeOfInput} type="text" placeholder="User Email" />
          </div>
          <div>
            <input name="password" onChange={this.handleChangeOfInput} type="password" placeholder="Password" />
          </div>
          <button className="submit-button" onClick={this.handleLoginSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

// TODO: is there a way to pass props to this component when no parent component is rendering it?
