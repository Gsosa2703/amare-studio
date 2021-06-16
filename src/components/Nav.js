import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/images/logo-blanco.png'
import logoInstagram from '../assets/images/instagram.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menu: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center'
    
  },
  menuItem:{
    fontSize: '14px',
    paddingRight: '20px',
    fontFamily: 'Sofia',
    transition: '1s'


  },
  bgBlack: {
    background: '#1B1B1B'
  },
  logoAmare: {
    maxWidth: '90px'
  },
  logoInstagram:{
    maxWidth: '25px'
  }
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bgBlack}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} alt="logo" className={classes.logoAmare} />
          </IconButton>
          <div className={classes.menu}>
          <Typography variant="a" className={classes.menuItem}>
            SERVICIOS
          </Typography>
           <Typography variant="a" className={classes.menuItem}>
            ABOUT
          </Typography>
           <Typography variant="a" className={classes.menuItem}>
            PORTAFOLIO
          </Typography>
           <Typography variant="a" className={classes.menuItem}>
            CONTACTO
          </Typography>
          </div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logoInstagram} alt="logo" className={classes.logoInstagram}/>
          </IconButton>
        </Toolbar>
      </AppBar>



    </div>
  );
}

