import React from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

/* Components */
import CircularProgress from '@material-ui/core/CircularProgress';
import AlarmIcon from '@material-ui/icons/AccessAlarm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SubDirArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
// import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
// import HourglassFullIcon from '@material-ui/icons/HourglassFull';

/* Store */

/* Styles */
import styles from './EventListElement.module.scss';

export default function EventListElement({ text, time, timeout, timeouted, level, sendAck, id }) {
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
    <div
      className={styles.eventListElement}
      style={{
        "background-color": (timeouted ? "#343B40" : ""),
        // "padding-left": ((level-1)*3+1) + "rem"
      }}
    >
      {timeouted && (
        <div className={styles.eventListElement__icon}><span><AlarmIcon /></span></div>
      )}
      {!timeouted && (
        <div className={styles.eventListElement__icon}><span><ArrowForwardIcon /></span></div>
      )}
      {[...Array(level-1)].map((_, i) => (
        <div className={styles.eventListElement__icon}><span><SubDirArrowRightIcon /></span></div>
      ))}
      <div className={styles.eventListElement__time}>{hhmm}</div>
      <div className={styles.eventListElement__text}>{text}</div>
      {!isNaN(dt) && (
        <div className={styles.eventListElement__timeout}>
          {!timeouted && (
            <CircularProgress variant="static" color="inherit" thickness={5} value={dt*100/max_t} />
          )}
          {dt < 1000 && (
            <div className={styles.eventListElement__timeout__text}>{dt + "s"}</div>
          )}
        </div>
      )}
      {timeouted && (
        <div className={styles.eventListElement__icon}><span><AlarmIcon /></span></div>
      )}
      {!timeouted && (
        <div className={styles.eventListElement__icon}><span><ArrowBackIcon /></span></div>
      )}
    </div>
  );
}
