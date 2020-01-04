import React from 'react';

/* Components */
import Button from '@material-ui/core/Button';

/* Store */

/* Styles */
import styles from './DefaultButton.module.scss';

const DEFAULT_STYLE = {
  padding: '0 4rem',
  width: '40rem',
  fontSize: '1.8rem',
  color: 'white',
};

export default function DefaultButton({ text, style, onClick }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      style={Object.assign({}, DEFAULT_STYLE, style)}
      className={styles.defaultButton}
      onClick={onClick}
      >
      {text}
    </Button>
  );
}
