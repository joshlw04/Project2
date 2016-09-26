import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../../firebase.config.js';

const propTypes = {
  changeLoginState: React.PropTypes.func,
};

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
    console.log('login submit button pressed');
    const { username, password } = this.state;
    firebase.auth()
    .signInWithEmailAndPassword(username, password)
    .catch((err) => {
      console.log(err);
    }).then(() => {
      this.props.changeLoginState;
      this.props.router.push('/home');
    });
  }

  render() {
    return (
      <div>
        <div id="">
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

Login.propTypes = propTypes;

export default withRouter(Login);

// TODO: is there a way to pass props to this component when no parent component is rendering it?



/*
Issues with Loin



*/
