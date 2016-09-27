import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import Home from './Home.jsx';


const propTypes = {
  children: React.PropTypes.element,
  isLoggedIn: React.PropTypes.bool,
  logInChangeState: React.PropTypes.func,
  handleChangeOfInput: React.PropTypes.func,
  handleLoginSubmit: React.PropTypes.func,
  handleRegisterSubmit: React.PropTypes.func,
  signOutUser: React.PropTypes.func,
};

class Nav extends Component {
  constructor() {
    super();
    // this.state = {
    //   loggedIn: false,
    // };
    // this.signOutUser = this.signOutUser.bind(this);
    this.logInOrRegister = this.logInOrRegister.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          isLoggedIn: (!user),
        });
      });
    }, 200);
  }

  // signOutUser() {
  //   firebase.auth()
  //   .signOut()
  //   .then(() => {
  //     this.setState({ isloggedIn: false });
  //   });
  // }

  toggleLogin() {
    let login = document.querySelector('#login');
    login.style.display = 'block';
  }
  toggleRegister() {
    let login = document.querySelector('#register');
    login.style.display = 'block';
  }

  logInOrRegister() {
    if (!this.props.isLoggedIn) {
      return (
        <div>
          <Link to="/login" className="btn" onClick={this.toggleLogin}>Login</Link>
          <Link to="/register" className="btn" onClick={this.toggleRegister}> Register</Link>
        </div>
      );
    } else {
      return (
        <div id="sign-out">
          <Link to="/" className="btn" onClick={this.props.signOutUser}>Sign Out</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navigation">
        <div className="col-2">
          <div className="navigation-title">JUST THOUGHT...</div>
        </div>
        <div className="col-2 nav-buttons">
          { this.logInOrRegister() }
        </div>

        <div>
          {this.props.children}
          { !this.props.isLoggedIn ? <Login
            isLoggedIn={this.props.isLoggedIn}
            logInChangeState={this.props.logInChangeState}
            handleChangeOfInput={this.props.handleChangeOfInput}
            handleLoginSubmit={this.props.handleLoginSubmit}
          /> : <div></div> }
           { !this.props.isLoggedIn ? <Register
            isLoggedIn={this.props.isLoggedIn}
            handleChangeOfInput={this.props.handleChangeOfInput}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
            /> : <div></div> }
        </div>
        {/* <div>
          <Link to="/home" id="home">Go home</Link>
        </div> */}
      </div>
    );
  }
}

Nav.propTypes = propTypes;

export default Nav;

// TODO: still need a pass on {this.props.children}. not sure why I'm adding it. I know it has something to do with the Router, but im not 100% on how it is used and why I should use it.

// TODO: http://jaketrent.com/post/set-state-in-callbacks-in-react/, error:

//setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the Nav component. Maybe just have a popup come up

/*

inside render:

{ !this.state.loggedIn ? <Login /> :}



*/
