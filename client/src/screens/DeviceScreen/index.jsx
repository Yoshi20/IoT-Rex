import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/* Components */
import SiteHeader from '../../components/SiteHeader';

/* Store */
import { deviceGet, devicesGet } from '../../store/modules/devices';

/* Styles */
import '../../styles/layout.scss';
import styles from './DeviceScreen.module.scss';

class DeviceScreen extends React.Component {
  componentDidMount() {
    this.props.deviceGet(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.deviceGet(this.props.match.params.id);
    }
  }

  render() {
    const { device } = this.props;
    console.log(device);
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle={device.name} subTitle={this.props.organisationName} />
          <p className="dev_eui">{`Device EUI: ${device.dev_eui}`}</p>
          <p className="app_eui">{`APP EUI: ${device.app_eui}`}</p>
          <p className="app_key">{`APP KEY: ${device.app_key}`}</p>
          <p className="fw_version">{`FW Version: ${device.fw_version}`}</p>
          <p className="hw_version">{`HW Version: ${device.hw_version}`}</p>
          <p className="battery">{`Battery: ${device.battery}`}</p>
        </div>
        <div className="screen_wrapper__right"></div>
      </div>
    );
  }
}

function mapStateToProps({ user, devices }) {
  return {
    organisationName: user.organisation.name,
    device: devices.selectedDevice,
  };
}

const mapDispatchToProps = {
  deviceGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeviceScreen));
