import React from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import Nav from '../components/Nav.jsx';
import Home from '../components/Home.jsx';
import Login from '../components/Auth/Login.jsx';
// import LoggedInHome from '../components/LoggedInHome.jsx';
import Register from '../components/Auth/Register.jsx';
// import authorize from '../utility/authorize.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
      </Route>
      <Route path="register" component={Register} />
      <Route path="login" component={Login} />
    </Router>
  );
};

export default Routes;

// onEnter={authorize}
