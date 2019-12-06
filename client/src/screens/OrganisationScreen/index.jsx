import React from 'react';
import { connect } from 'react-redux';

/* Components */
import SiteHeader from '../../components/SiteHeader';
import UserListElement from '../../components/UserListElement';

/* Store */
import { organisationGet } from '../../store/modules/organisation';

/* Styles */
import '../../styles/layout.scss';
import styles from './OrganisationScreen.module.scss';

class OrganisationScreen extends React.Component {
  componentDidMount() {
    this.props.organisationGet(this.props.userOrganisationId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userOrganisationId !== prevProps.userOrganisationId) {
      this.props.organisationGet(this.props.userOrganisationId);
    }
  }

  render() {
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle="Organisation" subTitle={this.props.organisationName} />
          {this.props.organisationUnits.map((ou, i) => (
            <div className={styles.organisatioin_unit} key={i}>
              <div className={styles.organisatioin_unit_name}>{ou.name}</div>
              {ou.users.map((user, n) => (
                <UserListElement key={n} name={user.name} role={user.role.name} id={user.id} />
              ))}
            </div>
          ))}
        </div>
        <div className="screen_wrapper__right"></div>
      </div>
    );
  }
}

function mapStateToProps({ user, organisation }) {
  return {
    userOrganisationId: user.organisation.id,
    organisationName: organisation.name,
    organisationUnits: organisation.organisationUnits,
  };
}

const mapDispatchToProps = {
  organisationGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationScreen);
