import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';

const propTypes = {
  children: React.PropTypes.element,
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.signOutUser = this.signOutUser.bind(this);
    this.logInOrRegister = this.logInOrRegister.bind(this);
  }

  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (!user),
        });
      });
    }, 200);
  }

  signOutUser() {
    firebase.auth()
    .signOut()
    .then(() => {
      console.log('User logged out');
    });
  }

  logInOrRegister() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <Link to="/login" id="login">Login or </Link>
          <Link to="/register" id="register"> Register</Link>
        </div>
      );
    } else {
      return (
        <div id="sign-out">
          <Link to="/" onClick={this.signOutUser}>Sign Out</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div id="main">
        <h1>Just thought you should know...</h1>
        {
          this.logInOrRegister()
        }
        <div>
          {this.props.children}
        </div>
        <div>
          <Link to="/home" id="home">Go home</Link>
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
