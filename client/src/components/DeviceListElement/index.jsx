import React from 'react';

/* Components */

/* Store */

/* Styles */
import styles from './DeviceListElement.module.scss';

export default function DeviceListElement({ name, type, onClick }) {
  return (
    <div className={styles.deviceListElement} onClick={onClick}>
      <div className={styles.deviceListElement__name}>{name}</div>
      <div className={styles.deviceListElement__name}>{type}</div>
    </div>
  );
}
