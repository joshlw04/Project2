import React, { Component } from 'react';
import { withRouter } from 'react-router';

const propTypes = {
  // changeLoginState: React.PropTypes.func,
  // isLoggedIn: React.PropTypes.bool,
  // logInChangeState: React.PropTypes.func,
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
    // this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
    // this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  // handleChangeOfInput(e) { // (e) is the event, in this case the input of characters into either the username or password field
  //   const stateObj = {}; // create an empty 'state'
  //   const stateKey = e.target.name; // assign a new variable to the 'name' attribute of the targeted event
  //   stateObj[stateKey] = e.target.value;
  //   this.setState(stateObj);
  // }

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
