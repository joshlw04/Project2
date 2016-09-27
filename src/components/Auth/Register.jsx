import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
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

// TODO: research withRouter, why it is used and how.
