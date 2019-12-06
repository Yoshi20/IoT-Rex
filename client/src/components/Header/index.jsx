import React from 'react';
import { connect } from 'react-redux';
// import { withStyles } from '@material-ui/core/styles';

/* Components */

/* Store */

/* Styles */
import style from './Header.module.scss';

// const styles = {

// };

class Header extends React.Component {
  render() {
    // const { classes } = this.props;

    return <div className={style.header_wrapper}></div>;
  }
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
