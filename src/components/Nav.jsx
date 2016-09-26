import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';
import Login from './Auth/Login.jsx';
import Home from './Home.jsx';


const propTypes = {
  children: React.PropTypes.element,
};

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.signOutUser = this.signOutUser.bind(this);
    this.logInOrRegister = this.logInOrRegister.bind(this);
    this.loginChangeState = this.loginChangeState.bind(this);
  }

  componentDidMount() {
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
      this.setState({ loggedIn: false });
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
  loginChangeState() {
    console.log('loginChangeState ran', this.state.loggedIn);
    this.setState({ loggedIn: true });
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
          { !this.state.loggedIn ? <Login changeLoginState={this.loginChangeState} /> : <Home /> }
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

// TODO: http://jaketrent.com/post/set-state-in-callbacks-in-react/, error: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the Nav component. Maybe just have a popup come up

/*

inside render:

{ !this.state.loggedIn ? <Login /> :}



*/
