import React from 'react';
import { connect } from 'react-redux';

/* Components */

/* Store */

/* Styles */
import '../../styles/layout.scss';
import styles from './DeviceBoard.module.scss';

class DeviceBoard extends React.Component {
  render() {
    return (
      <div className="screen_wrapper">
        <h1 className={styles.screen_title}>My Devices</h1>
        <div className={styles.device_cards}>Device Card</div>
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
)(DeviceBoard);
