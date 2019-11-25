import React from 'react';
import { connect } from 'react-redux';

import { apiGetOrganisation } from '../../api';

/* Components */
import SiteHeader from '../../components/SiteHeader';

/* Store */

/* Styles */
import '../../styles/layout.scss';
// import styles from './OrganisationScreen.module.scss';

class OrganisationScreen extends React.Component {
  render() {
    apiGetOrganisation(1).then(res => console.log(res));

    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle="Organisation" />
        </div>
        <div className="screen_wrapper__right"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationScreen);
