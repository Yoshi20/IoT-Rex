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
          <SiteHeader mainTitle="Meine Geräte" />
          {this.props.devices.map((device, i) => (
            <DeviceListElement
              key={i}
              name={device.name}
              type={device.device_type}
              onClick={() => console.log('Click')}
            />
          ))}
        </div>
        <div className="screen_wrapper__right"></div>
      </div>
    );
  }
}

function mapStateToProps({ devices }) {
  return { devices: devices.devices };
}

const mapDispatchToProps = {
  devicesGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesScreen);
