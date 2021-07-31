import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "inherit",
    width: "inherit",
    display: "flex",
    justifyContent: "center",
  },
  div: {
    width: "200px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    "& p": {
      padding: "0 .5rem",
      cursor: "pointer",
    },
  },
  selected: {
    borderRadius: "5px",
    backgroundColor: theme.palette.secondary.main,
  },
  noSelect:{
    backgroundColor: theme.palette.background.normal,
  }
}));

export default function Pagination({ control, setControl }) {
  const classes = useStyles();

  const countTotalPages = 8;
  const current = control.pagination;
  const page = control.offset;
  const NUM_ITEM = 32;
  const numberOfPage = [];

  for (let i = 0; i < countTotalPages; i++) {
    numberOfPage.push(i);
  }

  function handleClickPage(type, value) { 
    switch (type) {
      case "ant":
        setControl({offset: page-NUM_ITEM, pagination: current-1});
        break;

      case "next":
        setControl({offset: page+NUM_ITEM, pagination: current+1});
        break;

      case "num":
        setControl({offset: value*NUM_ITEM, pagination: value});
        break;
    }
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className={classes.root}>
      <Button onClick={() => handleClickPage("ant")} disabled={current === 0}>
        {" "}
        <NavigateBeforeIcon />{" "}
      </Button>
      <div className={classes.div}>
        {numberOfPage.map((n, index) => (
          <p key={index} onClick={() => handleClickPage("num", n)} className={(current == n) ? classes.selected : classes.noSelect}>
            {" "}
            {n + 1}
          </p>
        ))}
      </div>
      <Button onClick={() => handleClickPage("next")} disabled={current === numberOfPage.length - 1}>
        {" "}
        <NavigateNextIcon />{" "}
      </Button>
    </div>
  );
}