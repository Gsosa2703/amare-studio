import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
     background: '#1B1B1B',
    height: '60vh',
    padding: '5% 10%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  whoWeAre: {
      color: 'white',
      fontFamily: 'Sofia',
      fontWeight: 'bold',
      textAlign: 'center'

  },
  subtitle: {
      color: 'white',
      fontFamily: 'Roxbo',
      textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2em'


  },
  paragraph : {
       color: 'white',
      fontFamily: 'Sofia',
      textAlign: 'center'
  },
  containerLine: {
    textAlign :'-webkit-center'

  },
  linePurple: {
    width: '120px',
    height : '5px',
    background: '#CFABC9'

  }
}));

export default function WhoWeAre() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    </div>
  );
}
