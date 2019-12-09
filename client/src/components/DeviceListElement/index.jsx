import React from 'react';
import { useHistory } from 'react-router-dom';

/* Components */

/* Store */

/* Styles */
import styles from './DeviceListElement.module.scss';

export default function DeviceListElement({ name, id }) {
  let history = useHistory();

  return (
    <div className={styles.deviceListElement} onClick={() => history.push(`/device/${id}`)}>
      <div className={styles.deviceListElement__name}>{name}</div>
      {/* <div className={styles.deviceListElement__name}>{type}</div> */}
    </div>
  );
}
