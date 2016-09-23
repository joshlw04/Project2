import React from 'react';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import Main from '../components/Main.jsx';
import Home from '../components/Home.jsx';
import Login from '../components/Auth/Login.jsx';
import Register from '../components/Auth/Register.jsx';
import authorize from '../utility/authorize.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
      </Route>
    </Router>
  );
};

export default Routes;

// stateless component that tracks the routes of the components

// onEnter={authorize}
