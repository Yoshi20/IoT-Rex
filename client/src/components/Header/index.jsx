import React from 'react';
import { connect } from 'react-redux';
// import { withStyles } from '@material-ui/core/styles';

/* Components */

/* Store */

/* Styles */
import styles from './Header.module.scss';

class Header extends React.Component {
  intervalID = 0;

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })}, 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const hhmm = this.state.time.slice(this.state.time.length - 8, this.state.time.length - 3);
    // const { classes } = this.props;
    return (
      <div className={styles.header_wrapper}>
        <div className={styles.time}>{hhmm}</div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
