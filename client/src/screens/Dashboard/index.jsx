import React from "react";
import { connect } from "react-redux";

/* Components */

/* Store */

/* Styles */
import "./Dashboard.css";

class Dashboard extends React.Component {
  render() {
    return <div className="dashboard_wrapper">Dashboard</div>;
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
