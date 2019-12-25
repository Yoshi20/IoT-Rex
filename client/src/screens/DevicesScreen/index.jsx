import React from 'react';
import { connect } from 'react-redux';

/* Components */
import SiteHeader from '../../components/SiteHeader';
import DeviceListElement from '../../components/DeviceListElement';

/* Store */
import { devicesGet } from '../../store/modules/devices';

/* Styles */
import '../../styles/layout.scss';
// import styles from './DevicesScreen.module.scss';

class DevicesScreen extends React.Component {
  componentDidMount() {
    this.props.devicesGet();
  }

  render() {
    return (
      <div className="screen_wrapper">
        <div className="screen_wrapper__left"></div>
        <div className="screen_wrapper__center">
          <SiteHeader mainTitle="Geräte Übersicht" subTitle={this.props.organisationName} />
          {this.props.devices.map((device, i) => (
            <DeviceListElement
              key={i}
              name={device.name}
              type={device.device_type.name}
              battery={device.battery}
              id={device.id}
            />
          ))}
        </div>
        <div className="screen_wrapper__right"></div>
      </div>
    );
  }
}

function mapStateToProps({ user, devices }) {
  return {
    userOrganisationId: user.organisation.id,
    organisationName: user.organisation.name,
    devices: devices.allDevices,
  };
}

const mapDispatchToProps = {
  devicesGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesScreen);
