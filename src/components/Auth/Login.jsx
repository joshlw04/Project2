import React, { Component } from 'react';
import { withRouter } from 'react-router';

const propTypes = {
  handleChangeOfInput: React.PropTypes.func,
  handleLoginSubmit: React.PropTypes.func,

};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <div id="login">
        <div className="col-2">
          <b>LOGIN</b>
          <input id="input-username" className="input" type="text" placeholder="Username" name="username" onChange={this.props.handleChangeOfInput} />
        </div>
        <div className="col-2">
        <br />
          <input id="input-password" className="input" type="password" placeholder="Password" name="password" onChange={this.props.handleChangeOfInput} />
          <button id="input-login-submit" className="submit" onClick={this.props.handleLoginSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

Login.propTypes = propTypes;

export default withRouter(Login);

// TODO: is there a way to pass props to this component when no parent component is rendering it?
// TODO: onChange and onClick: why do the parent components run the functions here but I get errors
