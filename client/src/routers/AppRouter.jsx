import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Components */
import PrivateRoute from './PrivateRoute';
import LoginScreen from '../screens/LoginScreen';
import Navigation from '../components/Navigation';
import AdminToolBar from '../components/AdminToolBar';
import Header from '../components/Header';
import DashboardScreen from '../screens/DashboardScreen';
import DevicesScreen from '../screens/DevicesScreen';
import OrganisationScreen from '../screens/OrganisationScreen';
import EventsScreen from '../screens/EventsScreen';
import CompletedEventsScreen from '../screens/CompletedEventsScreen';
import ZonesScreen from '../screens/ZonesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UserScreen from '../screens/UserScreen';
import DeviceScreen from '../screens/DeviceScreen';
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
          <Navigation />

          <div className="app_main">
            {this.props.userRights > 9000 && <AdminToolBar />}
            <Header />
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
              <PrivateRoute path="/completedEvents">
                <CompletedEventsScreen />
              </PrivateRoute>
              <PrivateRoute path="/zones">
                <ZonesScreen />
              </PrivateRoute>
              <PrivateRoute path="/settings">
                <SettingsScreen />
              </PrivateRoute>
              <PrivateRoute path="/user/:id">
                <UserScreen />
              </PrivateRoute>
              <PrivateRoute path="/device/:id">
                <DeviceScreen />
              </PrivateRoute>
              <PrivateRoute path="*">
                <ErrorScreen />
              </PrivateRoute>
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    loggedIn: user.loggedIn,
    userRights: user.role.rights,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
