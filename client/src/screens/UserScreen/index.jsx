import React from 'react';
import { connect } from 'react-redux';

/* Components */
import SiteHeader from '../../components/SiteHeader';

/* Store */

/* Styles */
import '../../styles/layout.scss';
// import styles from './UserScreen.module.scss';

class UserScreen extends React.Component {
  render() {
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle={this.props.userName} subTitle={this.props.organisationName} />
        </div>
        <div className="screen_wrapper__right"></div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    organisationName: user.organisation.name,
    userName: user.name,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
