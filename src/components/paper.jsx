import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as math from 'mathjs';
import Grid from '@material-ui/core/Grid';
import Modal from './modal';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

function PaperSheet(props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(0);
  const { classes } = props;
  const { title, data} = props;
  const checkIconPath = "M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z";
  const wrongIconPath = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";


  const handleClick = () => {
    const correctAnswer = (math.simplify(math.ceil(data[0]) + math.ceil(data[1]))).value;

    if (Number(result) === correctAnswer) {
      setMessage('Your answer is correct');
    } else {
      setMessage('Wrong Answer');
    }
    
    setOpen(true);
  }

  const handleChange = (event) => {
    setResult(event.target.value);
  }

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid
          container
          alignItems='center'
          justify='center'
          direction='column'
        >
          <Typography 
            align='center' 
            variant="h3" 
            component="h3"
          >
            {title}
          </Typography>
          <Typography 
            align='center'
            component="p"
          >
          What is the result of :
            {`${math.ceil(data[0])} + ${math.ceil(data[1])}`}
          </Typography>
          <TextField
            id="outlined-full-width"
            label="Result"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            type="number"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            required: true
          }}
            onChange={handleChange}
          />
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={handleClick}
          >
          Submit
          </Button>
        
          <Modal 
            open={open}
            message={message}
            nativeColor={message.includes('Wrong') ? "red" : "green"}
            path={message.includes('Wrong') ? wrongIconPath : checkIconPath}
            closeModel={() => setOpen(false)}
          />
        </Grid>
      </Paper>
    </div>
  );
}


PaperSheet.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default withStyles(styles)(PaperSheet);
