import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import DeviceBoard from '../screens/DeviceBoard';

import './AppRouter.scss';

const AppRouter = () => (
  <Router>
    <div className="app_root">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/device-board" component={DeviceBoard} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
