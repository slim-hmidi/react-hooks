import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: theme.spacing.unit,
    },
  });

function Icon(props) {
const { path } = props;
  return (
    <SvgIcon {...props}>
      <path d={path} />
    </SvgIcon>
  );
}

function SvgIcons(props) {
  const { classes, nativeColor, path } = props;

  return (
    <Icon className={classes.icon} nativeColor={nativeColor} path={path} />
  );
}

SvgIcons.propTypes = {
  classes: PropTypes.shape(
      { 
        root: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }).isRequired,
    path: PropTypes.string.isRequired,
    nativeColor: PropTypes.string.isRequired,
};

export default withStyles(styles)(SvgIcons);
