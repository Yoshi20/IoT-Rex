import React from 'react';

/* Components */

/* Store */

/* Styles */
import styles from './UserListElement.module.scss';

export default function UserListElement({ name, role }) {
  return (
    <div className={styles.user_list_element} onClick={() => {}}>
      <div className={styles.user_list_element__name}>{name}</div>
      <div className={styles.user_list_element__role}>{role}</div>
    </div>
  );
}
