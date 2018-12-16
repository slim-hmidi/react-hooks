import React,  { useState }  from 'react';
import PropTypes from 'prop-types';
import * as math from 'mathjs';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from './paper';

const styles = () => ({
  root: {
    margin: '0 auto',
  }
});

const Main = (props) => {
  const {classes} = props;

  const [firstOperand] = useState(math.random(1, 20));
  const [secondOperand] = useState(math.random(5, 35));



  const data = [].concat(firstOperand, secondOperand);
  return (
    <div className={classes.root}>
      <Grid 
        container
        justify='center'
        alignContent='center'
        spacing={24}
      >
        <Grid item xs={6}>
          <Paper
            title="Operation"
            data={data}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired
}

export default withStyles(styles)(Main);
