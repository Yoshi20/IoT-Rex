import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

/* Components */
import Tooltip from '@material-ui/core/Tooltip';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import DashboardIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

/* Store */
import { userLogout } from '../../store/modules/user';

/* Styles */
import styles from './Navigation.module.scss';

const useStyles = makeStyles(theme => ({
  SpeedDialfab: {
    width: '80px',
    height: '80px',
  },
  SpeedDialFabIcon: {
    height: '60px',
  },
  fab: {
    width: '60px',
    height: '60px',
  },
}));

export default function Navigation() {
  let history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.user.loggedIn);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const actions = [
    { icon: <ExitToAppIcon />, name: 'Logout', onClick: () => dispatch(userLogout()) },
  ];

  return (
    <div className={styles.navigation_wrapper}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        classes={{ fab: classes.SpeedDialfab }}
        hidden={!loggedIn}
        icon={
          <SpeedDialIcon
            classes={{ root: classes.SpeedDialFabIcon }}
            icon={
              <Tooltip title="Dashboard" aria-label="Go to Dashboard" placement="right">
                <DashboardIcon style={{ fontSize: 60 }} />
              </Tooltip>
            }
          />
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open && loggedIn}
        direction="up"
        FabProps={{
          onClick: () => {
            history.push('/');
          },
        }}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipPlacement="right"
            tooltipTitle={action.name}
            onClick={action.onClick}
            classes={{ fab: classes.fab }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
