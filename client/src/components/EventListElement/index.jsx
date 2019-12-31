import React from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

/* Components */
import CircularProgress from '@material-ui/core/CircularProgress';

/* Store */

/* Styles */
import styles from './EventListElement.module.scss';

export default function EventListElement({ text, time, timeout, sendAck, id }) {
  let history = useHistory();
  let now = new Date();
  let date = new Date(time);
  let now_str = now.toLocaleString();
  let hhmm = now_str.slice(now_str.length - 8, now_str.length - 3);
  let max_t = (timeout - date)/1000
  let dt = Math.round((timeout - now)/1000)

  return (
    {/*<div className={styles.eventListElement} id={"event_" + id} onClick={() =>
      sendAck(id).then(() => {
        document.getElementById("event_" + id).style = "display: none;";
      })
    }>*/},
    <div className={styles.eventListElement} style={dt < 0 ? {"background-color": "#555b60"} : {}}>
      <div className={styles.eventListElement__time}>{hhmm}</div>
      <div className={styles.eventListElement__text}>{text}</div>
      {!isNaN(dt) && (
        <div className={styles.eventListElement__timeout}>
          <CircularProgress variant="static" color="inherit" thickness={5} value={dt*100/max_t} />
          {(dt < 1000 && dt > -1000) && (
            <div className={styles.eventListElement__timeout__text}>{dt + "s"}</div>
          )}
        </div>
      )}
    </div>
  );
}
