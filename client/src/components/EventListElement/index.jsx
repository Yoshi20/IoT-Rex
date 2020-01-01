import React from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

/* Components */
import CircularProgress from '@material-ui/core/CircularProgress';
import AlarmIcon from '@material-ui/icons/AccessAlarm';

/* Store */

/* Styles */
import styles from './EventListElement.module.scss';

export default function EventListElement({ text, time, timeout, timeouted, sendAck, id }) {
  let history = useHistory();
  let now = new Date();
  let date = new Date(time);
  let date_str = date.toLocaleString();
  let hhmm = date_str.slice(date_str.length - 8, date_str.length - 3);
  let max_t = (timeout - date)/1000
  let dt = Math.round((timeout - now)/1000)

  return (
    {/*<div className={styles.eventListElement} id={"event_" + id} onClick={() =>
      sendAck(id).then(() => {
        document.getElementById("event_" + id).style = "display: none;";
      })
    }>*/},
    <div className={styles.eventListElement} style={timeouted ? {"background-color": "#343B40"} : {}}>
      {timeouted && (
        <div className={styles.eventListElement__alarm}>
          <span><AlarmIcon /></span>
        </div>
      )}
      <div className={styles.eventListElement__time}>{hhmm}</div>
      <div className={styles.eventListElement__text}>{text}</div>
      {!isNaN(dt) && (
        <div className={styles.eventListElement__timeout}>
          {!timeouted && (
            <CircularProgress variant="static" color="inherit" thickness={5} value={dt*100/max_t} />
          )}
          {(dt < 1000 && dt > -1000) && (
            <div className={styles.eventListElement__timeout__text}>{dt + "s"}</div>
          )}
        </div>
      )}
    </div>
  );
}
