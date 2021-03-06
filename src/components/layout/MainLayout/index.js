import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

function MainLayout({children}){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default MainLayout;