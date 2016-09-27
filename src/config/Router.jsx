import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import Login from '../components/Auth/Login.jsx';
import Register from '../components/Auth/Register.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
  );
};

export default Routes;

// TODO: lots of work needed here to understand fully what is going on.
