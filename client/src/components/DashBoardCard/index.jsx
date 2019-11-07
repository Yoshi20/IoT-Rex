import React from 'react';

/* Components */

/* Store */

/* Styles */
import styles from './DashBoardCard.module.scss';

export default function DashBoardCard({ mainTitle, subTitle }) {
  return (
    <div className={styles.site_header}>
      <div className={styles.site_header__sub}>{subTitle}&nbsp;</div>
      <div className={styles.site_header__main}>{mainTitle}</div>
    </div>
  );
}
