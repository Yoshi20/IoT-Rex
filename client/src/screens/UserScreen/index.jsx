import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/* Components */
import SiteHeader from '../../components/SiteHeader';

/* Store */
import { userInfoGet } from '../../store/modules/userInfo';

/* Styles */
import '../../styles/layout.scss';
import styles from './UserScreen.module.scss';

class UserScreen extends React.Component {
  componentDidMount() {
    this.props.userInfoGet(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.userInfoGet(this.props.match.params.id);
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle={user.name} subTitle={this.props.userOrganisationName} />
          <p className={styles.email}>{`Email: ${user.email}`}</p>
          <p className={styles.role}>{`Role: ${user.role.name}`}</p>
        </div>
        <div className="screen_wrapper__right"></div>
      </div>
    );
  }
}

function mapStateToProps({ user, userInfo }) {
  return {
    userOrganisationName: user.organisation.name,
    user: userInfo,
  };
}

const mapDispatchToProps = {
  userInfoGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserScreen));
