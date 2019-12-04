import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

/* Components */
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/* Store */
import { userLogin } from '../../store/modules/user';

/* Styles */
import '../../styles/typography.scss';
import style from './LoginScreen.module.scss';

const styles = {
  button: {
    marginTop: '8rem',
    padding: '0 4rem',
    width: '40rem',
  },
  textField: {
    marginTop: '4rem',
    width: '40rem',
  },
  resize: {
    fontSize: '2rem',
    color: 'white',
  },
  input: {
    color: 'white',
  },
};

class LoginScreen extends React.Component {
  render() {
    const { classes, history, location } = this.props;

    let eMail = '';
    let password = '';

    if (this.props.loggedIn) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      );
    } else {
      return (
        <div className={style.login}>
          <h1 className="header_big">Login</h1>
          <div>
            <TextField
              id="standard-basic"
              className={classes.textField}
              label="E-Mail"
              margin="normal"
              color="secondary"
              type="email"
              onChange={e => {
                eMail = e.target.value;
              }}
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
              color="secondary"
              onChange={e => {
                password = e.target.value;
              }}
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
            color="secondary"
            classes={{
              label: classes.resize,
            }}
            className={classes.button}
            onClick={() => {
              this.props.userLogin(eMail, password).then(() => history.replace('/'));
            }}
          >
            Login
          </Button>
        </div>
      );
    }
  }
}

function mapStateToProps({ user }) {
  return { loggedIn: user.loggedIn };
}

const mapDispatchToProps = {
  userLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(LoginScreen)));
