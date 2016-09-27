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
    // this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
  }




  render() {
    return (
      <div id="register">
          <div className="col-2">
            <b>REGISTER</b>
            <input id="input-username" className="input" type="text" placeholder="Username" name="username" onChange={this.handleChangeOfInput} />
          </div>
          <div className="col-2">
            <br />
            <input id="input-password" className="input" type="password" placeholder="Password" name="password" onChange={this.handleChangeOfInput} />
            <button id="input-login-submit" className="submit" onClick={this.handleSubmitButton}>Submit</button>
          </div>
      </div>
    );
  }
}

export default withRouter(Register);
