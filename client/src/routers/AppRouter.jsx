import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Components */
import PrivateRoute from './PrivateRoute';
import TopBar from '../components/TopBar';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DevicesScreen from '../screens/DevicesScreen';
import OrganisationScreen from '../screens/OrganisationScreen';
import EventsScreen from '../screens/EventsScreen';
import ZonesScreen from '../screens/ZonesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ErrorScreen from '../screens/ErrorScreen';
import Footer from '../components/Footer';

/* Store */

/* Styles */
import './AppRouter.scss';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div className="app_root">
          <TopBar />
          <Switch>
            <Route exact path="/login" component={LoginScreen} />

            <PrivateRoute exact path="/">
              <DashboardScreen />
            </PrivateRoute>
            <PrivateRoute path="/devices">
              <DevicesScreen />
            </PrivateRoute>
            <PrivateRoute path="/organisation">
              <OrganisationScreen />
            </PrivateRoute>
            <PrivateRoute path="/events">
              <EventsScreen />
            </PrivateRoute>
            <PrivateRoute path="/zones">
              <ZonesScreen />
            </PrivateRoute>
            <PrivateRoute path="/settings">
              <SettingsScreen />
            </PrivateRoute>
            <PrivateRoute path="*">
              <ErrorScreen />
            </PrivateRoute>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    loggedIn: user.loggedIn,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
