import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

/* Components */
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

/* Store */
import { userLogout } from '../../store/modules/user';

/* Styles */
import styles from './TopBar.module.scss';

export default function TopBar() {
  const dispatch = useDispatch();
  let history = useHistory();
  const dashBoardMatch = useRouteMatch('/');
  const loginScreenMatch = useRouteMatch('/login');

  if (!loginScreenMatch) {
    return (
      <div className={styles.top_bar}>
        <div className={styles.top_bar__left}>
          {!dashBoardMatch.isExact && (
            <IconButton aria-label="Dashboard" onClick={() => history.push('/')}>
              <AppsIcon style={{ width: '4.5rem', height: '4.5rem', color: '#6d7993' }} />
            </IconButton>
          )}
          {/* <NavigateBeforeIcon style={{ width: '4.5rem', height: '4.5rem', color: '#6d7993' }} /> */}
        </div>
        <div className={styles.top_bar__left}>
          <Button aria-label="logout" onClick={() => dispatch(userLogout())}>
            <div className={styles.logout_button}>Logout</div>
          </Button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
