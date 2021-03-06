import React from 'react';
import { connect } from 'react-redux';

/* Images */
import DeviceIcon from '../../assets/icons/dashBoard/dash-board_dev.svg';
import EventIcon from '../../assets/icons/dashBoard/dash-board_event.svg';
import OrganisationIcon from '../../assets/icons/dashBoard/dash-board_org.svg';

/* Components */
import SiteHeader from '../../components/SiteHeader';
import DashBoardCard from '../../components/DashBoardCard';

/* Store */

/* Styles */
import '../../styles/layout.scss';
import style from './DashboardScreen.module.scss';

class DashboardScreen extends React.Component {
  render() {
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle="Dashboard" subTitle={this.props.userOrganisationName} />
          <div className={style.dash_board_cards}>
            <DashBoardCard title="Events" icon={EventIcon} targetPath="/events" />
            <DashBoardCard title="Geräte" icon={DeviceIcon} targetPath="/devices" />
            <DashBoardCard
              title="Organisation"
              icon={OrganisationIcon}
              targetPath="/organisation"
            />
          </div>
        </div>
        <div className="screen_wrapper__right"></div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    userOrganisationName: user.organisation.name,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
