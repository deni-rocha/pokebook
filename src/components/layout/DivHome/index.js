import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  div:{
    overflowX: 'hidden',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flexWrap: 'wrap',
    height: '300px',
    width: '80%',
    maxWidth: '755px',
    padding: '.5rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '30px',
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      height: '250px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '300px'
    },
  },
  title: {
    color: '#ffeb3b',
    textShadow: '2px 3px 2px #009688',
    fontFamily: "'Press Start 2P', cursive"
  },
  boxInterna:{
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'uppercase',
  }
}));

function DivHome({children, title}){
  const classes = useStyles();
  
  return(
    <div className={classes.div}>
      <div className={classes.root}>
        <div className={classes.boxInterna}>
          <Typography component="h1" variant="h5" className={classes.title}> {title}</Typography>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DivHome;