import React from 'react';
import { connect } from 'react-redux';

/* Components */
import SiteHeader from '../../components/SiteHeader';

/* Store */
import { organisationGet } from '../../store/modules/organisation';

/* Styles */
import '../../styles/layout.scss';
// import styles from './OrganisationScreen.module.scss';

class OrganisationScreen extends React.Component {
  componentDidMount() {
    this.props.organisationGet(this.props.userOrganisationId);
  }

  render() {
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle="Organisation" subTitle={this.props.organisationName} />
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
  };
}

const mapDispatchToProps = {
  organisationGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationScreen);
