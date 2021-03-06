import React from 'react';

/* Components */
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AlarmIcon from '@material-ui/icons/AccessAlarm';
import SubDirArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
// import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
// import HourglassFullIcon from '@material-ui/icons/HourglassFull';

/* Store */

/* Styles */
import styles from './CompletedEventListElement.module.scss';

export default function CompletedEventListElement({ text, time, acknowledged, acknowledged_by, acknowledged_at, timeout, timeouted, level, id }) {
  let now = new Date();
  let date = new Date(time);
  let date_str = date.toLocaleString();
  let hhmm = date_str.slice(date_str.length - 8, date_str.length - 3);
  let ack_at_str = (new Date(acknowledged_at)).toLocaleString();
  // let ack_hhmm = ack_at_str.slice(ack_at_str.length - 8, ack_at_str.length - 3);
  let max_t = (timeout - date)/1000
  let dt = 0
  if (acknowledged) dt = Math.round((timeout - acknowledged_at)/1000)
  else dt = Math.round((timeout - now)/1000)

  return (
    <div
      className={styles.completedEventListElement}
      style={{
        backgroundColor: "#343B40",
        // "padding-left": ((level-1)*3+1) + "rem"
      }}
    >
      {/* Left icons */}
      {(timeouted) && (
        <div className={styles.completedEventListElement__icon}><span><AlarmIcon /></span></div>
      )}
      {(acknowledged && !timeouted) && (
        <div className={styles.completedEventListElement__icon}><span><CheckCircleOutlineIcon /></span></div>
      )}
      {[...Array(level-1)].map((_, i) => (
        <div key={i} className={styles.completedEventListElement__icon}><span><SubDirArrowLeftIcon className={styles.rotated} /></span></div>
      ))}
      {/* Event content */}
      <div className={styles.completedEventListElement__time}>{hhmm}</div>
      <div className={styles.completedEventListElement__text}>{text}</div>
      {(acknowledged) && (
        <div className={styles.completedEventListElement__name}>(von {acknowledged_by.split(' ')[0]} {acknowledged_by.split(' ')[1][0]}. am {ack_at_str.slice(0, ack_at_str.length - 3)})</div>
      )}
      {!isNaN(dt) && (
        <div className={styles.completedEventListElement__timeout}>
          {!timeouted && (
            <CircularProgress variant="static" color="inherit" thickness={5} value={dt*100/max_t} />
          )}
          {dt < 1000 && (
            <div className={styles.completedEventListElement__timeout__text}>{dt + "s"}</div>
          )}
        </div>
      )}
      {/* Right icons */}
      {(timeouted) && (
        <div className={styles.completedEventListElement__icon}><span><AlarmIcon /></span></div>
      )}
      {(acknowledged && !timeouted) && (
        <div className={styles.completedEventListElement__icon}><span><CheckCircleOutlineIcon /></span></div>
      )}
    </div>
  );
}
