import React from 'react';
import { useHistory } from 'react-router-dom';

/* Components */

/* Store */

/* Styles */
import styles from './EventListElement.module.scss';


export default function EventListElement({ time, text, sendAck, id }) {
  let history = useHistory();
  let date = new Date(time)
  // const WEEK_DAYS_EN = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  // let weekday = WEEK_DAYS_EN[date.getDay()];
  let hours = date.getHours();
  hours = hours < 10 ? '0' + hours : hours;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return (
    <div className={styles.eventListElement} id={"event_" + id} onClick={() =>
      sendAck(id).then(() => {
        document.getElementById("event_" + id).style = "display: none;";
      })
    }>
      <div className={styles.eventListElement__time}>{hours}:{minutes}</div>
      <div className={styles.eventListElement__text}>{text}</div>
    </div>
  );
}
