import React from 'react';
import { connect } from 'react-redux';

/* Components */
import SiteHeader from '../../components/SiteHeader';

/* Store */

/* Styles */
import '../../styles/layout.scss';
import './Dashboard.module.scss';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="screen_wrapper">
        <SiteHeader mainTitle="Dashboard" subTitle="Organisation" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
