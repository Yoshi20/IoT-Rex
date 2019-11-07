import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginScreen from '../screens/LoginScreen';
import Dashboard from '../screens/Dashboard';
import DeviceBoard from '../screens/DeviceBoard';

import './AppRouter.scss';

const loggedIn = false;

const AppRouter = () => (
  <Router>
    <div className="app_root">
      <Switch>
        <Route exact path="/" component={loggedIn ? Dashboard : LoginScreen} />
        <Route path="/device-board" component={DeviceBoard} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
