import React from 'react';
import { useHistory } from 'react-router-dom';

/* Components */

/* Store */

/* Styles */
import styles from './UserListElement.module.scss';

export default function UserListElement({ name, role, id }) {
  let history = useHistory();

  return (
    <div className={styles.user_list_element} onClick={() => history.push(`/user/${id}`)}>
      <div className={styles.user_list_element__name}>{name}</div>
      <div className={styles.user_list_element__role}>{role}</div>
    </div>
  );
}
