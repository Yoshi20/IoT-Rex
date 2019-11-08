import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Components */
import LoginScreen from '../screens/LoginScreen';
import Dashboard from '../screens/Dashboard';
import DeviceBoard from '../screens/DeviceBoard';

/* Store */

/* Styles */
import './AppRouter.scss';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div className="app_root">
          <Switch>
            <Route
              exact
              path="/"
              component={this.props.loggedIn ? Dashboard : LoginScreen}
            />
            <Route path="/device-board" component={DeviceBoard} />
          </Switch>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
