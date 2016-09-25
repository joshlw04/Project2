import React from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import Main from '../components/Main.jsx';
import Home from '../components/Home.jsx';
import Login from '../components/Auth/Login.jsx';
// import LoggedInHome from '../components/LoggedInHome.jsx';
import Register from '../components/Auth/Register.jsx';
// import authorize from '../utility/authorize.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="home" component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        {/* <Route path="logged_in_home" component={LoggedInHome} onEnter={authorize} /> */}
      </Route>
    </Router>
  );
};

export default Routes;

// stateless component that tracks the routes of the components

// onEnter={authorize}
