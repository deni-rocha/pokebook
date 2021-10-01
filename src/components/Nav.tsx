import React, { useState, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ISetMenuControl } from '../types';

const useStyles = makeStyles((theme)=>({
  body: { 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: '.5rem',
    flexDirection: 'column',
  },
  ul: {
    width: '200px',
    display:  'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    listStyle: 'none',
    margin: '0 0',
    paddingLeft: '4px',
      '& *': { 
      marginBottom: '2px',
      color: theme.palette.text.primary,
      transition: 'all 200ms'
      }
    },
    btnLi: {
      cursor: "pointer",
      width: "200px",
      borderRadius: "10px",
      textDecoration: "none",
      [theme.breakpoints.up('md')]: { 
        "&:hover": {
          marginLeft: "15px",
          cursor: "pointer",
          transform: "scale(1.1)",
          backgroundColor: theme.palette.primary.main,
          "& h2": {
            paddingLeft: ".5rem",
          },
        },
      }
    },
    liFirst:{
      width: 'inherit',
    },
    tittleList: {
      display: 'flex'
    },
    buttons:{
        height: '0px',
        transform: 'translateX(100%)',
        display: 'flex',
        transition: 'all 300ms',
        opacity: '0',
        '& button': {
          textTransform: 'lowercase'
        }
      },
    effectOpacity: {
        transform: 'translateX(0)',
        opacity: '1',
        height: '80px',
        color: '#fefefe'
      },
    a: {
    textDecoration: 'none',
    }
}));

const Nav = ({setMenuControl}: ISetMenuControl) => {
  const classes = useStyles();

  const buttonsRef: React.MutableRefObject<HTMLDivElement> = useRef();
  const [listActive, setlistActive] = useState(false)

  const handleClick = () => {
    buttonsRef.current.classList.add(`${classes.effectOpacity}`)
    setlistActive(true)
  };

  const handleClose = () => {
    buttonsRef.current.classList.remove(`${classes.effectOpacity}`)
    setlistActive(false)
  };
  
  return (
    <div className={classes.body} >
      <ul className={classes.ul}>
        <li className={classes.btnLi}>
        <ClickAwayListener onClickAway={handleClose}>
          <div className={classes.liFirst} onClick={handleClick}>
             <div className={classes.tittleList}>
              <Typography component="h2" >Lista de pokemons</Typography> 
              {listActive ? <ExpandMoreIcon/> : <ChevronRightIcon/>}
             </div>
          <div className={classes.buttons} ref={buttonsRef}>
              
              <Link href="/pokemonList/firstGeneration">
                <Button>
                  <a className={classes.a}>primeira geração</a> 
                </Button>
              </Link>
              <Link href="/pokemonList/secondGeneration">
                <Button>
                  <a className={classes.a}>segunda geração</a> 
                </Button>
              </Link>
         </div>
          </div>
        </ClickAwayListener>
        </li>
        <li className={classes.btnLi}> 
          <a className={classes.a} onClick={()=>{setMenuControl({view:2})}}> <Typography component="h2"> Guia Básico </Typography>  </a>
        </li>
        <li className={classes.btnLi} onClick={()=>{setMenuControl({view:3})}}> <Typography component="h2"> Sobre </Typography></li>
      </ul>
    </div>
  );
};

export default Nav;
