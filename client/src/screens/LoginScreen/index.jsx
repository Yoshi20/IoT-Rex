import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

/* Components */
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/* Store */

/* Styles */
import '../../styles/typography.scss';
import style from './LoginScreen.module.scss';

const styles = {
  button: {
    marginTop: '8rem',
    padding: '0 4rem',
    width: 400,
  },
  textField: {
    marginTop: '4rem',
    width: 400,
  },
  resize: {
    fontSize: '2rem',
  },
};

class LoginScreen extends React.Component {
  render() {
    const { classes } = this.props;

    let eMail = '';
    let password = '';

    return (
      <div className={style.login}>
        <h1 className="header_big">Login</h1>
        <div>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="E-Mail"
            margin="normal"
            type="email"
            onChange={e => (eMail = e.target.value)}
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.resize,
              },
            }}
          />
        </div>
        <div>
          <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={e => (password = e.target.value)}
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.resize,
              },
            }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          classes={{
            label: classes.resize,
          }}
          className={classes.button}
          onClick={() => console.log(eMail, password)}
        >
          Login
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginScreen));
