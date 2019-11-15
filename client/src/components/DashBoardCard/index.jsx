import React from 'react';
import { useHistory } from 'react-router-dom';

/* Components */

/* Store */

/* Styles */
import styles from './DashBoardCard.module.scss';

export default function DashBoardCard({ title, icon, targetPath = '/' }) {
  let history = useHistory();
  return (
    <div className={styles.dashBoardCardWrapper} onClick={() => history.push(targetPath)}>
      <div className={styles.dashBoardCard}>
        <div className={styles.dashBoardCard__title}>{title}&nbsp;</div>
        <div className={styles.dashBoardCard__image} style={{ backgroundImage: `url(${icon})` }}>
          {/* <img src={image}></img> */}
        </div>
      </div>
    </div>
  );
}
