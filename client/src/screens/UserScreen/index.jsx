import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/* Components */
import SiteHeader from '../../components/SiteHeader';

/* Store */
import { userInfoGet } from '../../store/modules/userInfo';

/* Styles */
import '../../styles/layout.scss';
// import styles from './UserScreen.module.scss';

class UserScreen extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.userInfoGet(id);
  }

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

function mapStateToProps({ user, userInfo }) {
  return {
    organisationName: user.organisation.name,
    userName: userInfo.name,
  };
}

const mapDispatchToProps = {
  userInfoGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserScreen));
