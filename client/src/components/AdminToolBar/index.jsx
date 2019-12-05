import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

/* Components */
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

/* Store */
import { organisationsGet } from '../../store/modules/organisations';
import { userSetOrganisation } from '../../store/modules/user';

/* Styles */
import style from './AdminToolBar.module.scss';

const styles = {
  formControl: {
    minWidth: 220,
  },
};

class AdminToolBar extends React.Component {
  handleChange = event => {
    const orgId = event.target.value;
    const organisation = this.props.organisations.find(org => org.id === orgId);
    this.props.userSetOrganisation(organisation.id, organisation.name);
  };

  componentDidMount() {
    this.props.organisationsGet();
  }

  render() {
    const { classes } = this.props;

    console.log(this.props.organisations);

    return (
      <div className={style.admin_tool_bar_wrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel id="organisation_select_label">Organisation</InputLabel>
          <Select
            labelId="organisation_select_label"
            id="demo-simple-select"
            value={this.props.selectedOrganisation}
            onChange={this.handleChange}
          >
            {this.props.organisations.map((org, i) => (
              <MenuItem key={i} value={org.id}>
                {org.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

function mapStateToProps({ organisations, user }) {
  return {
    organisations: organisations.orgs,
    selectedOrganisation: user.organisation.id,
  };
}

const mapDispatchToProps = {
  organisationsGet,
  userSetOrganisation,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdminToolBar));
