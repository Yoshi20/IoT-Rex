import React from 'react';
import { useHistory } from 'react-router-dom';

/* Components */

/* Store */

/* Styles */
import styles from './EventListElement.module.scss';


export default function EventListElement({ time, text, id }) {
  // const WEEK_DAYS_EN = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  let history = useHistory();
  let date = new Date(time)
  // let weekday = WEEK_DAYS_EN[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return (
    <div className={styles.eventListElement} onClick={() => history.push(`/event/${id}`)}>
      <div className={styles.eventListElement__text}>{hours}:{minutes} | {text}</div>
    </div>
  );
}