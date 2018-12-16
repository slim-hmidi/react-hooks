import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Icon from './icon';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const SimpleModal = (props) => {
    const { classes, open, closeModel, message, path, nativeColor } = props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={closeModel}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              <Grid
                container
                alignContent='center'
                justify='center'
              >
                <Icon 
                  path={path}
                  nativeColor={nativeColor}
                /> 
                {message}
              </Grid>
              
            </Typography>
          </div>
        </Modal>
      </div>
      );
}

SimpleModal.propTypes = {
  classes: PropTypes.shape({paper: PropTypes.string}).isRequired,
  open: PropTypes.bool.isRequired,
  closeModel: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  nativeColor: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
