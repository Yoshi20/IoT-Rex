import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import DashboardIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/Apps';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

/* Components */

/* Store */

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

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' },
];

export default function Navigation() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.navigation_wrapper}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        classes={{ fab: classes.SpeedDialfab }}
        hidden={false}
        icon={
          <SpeedDialIcon
            classes={{ root: classes.SpeedDialFabIcon }}
            icon={<DashboardIcon style={{ fontSize: 60 }} />}
          />
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="up"
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipPlacement="right"
            tooltipTitle={action.name}
            onClick={handleClose}
            classes={{ fab: classes.fab }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
