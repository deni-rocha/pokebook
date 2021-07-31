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
export default function Pagination({ indexPag, setIndexPag, count }) {
  const classes = useStyles();
  const numberOfPage = [];
  const current = indexPag;

  for (let i = 0; i < count; i++) {
    numberOfPage.push(i);
  }

  function handleClickPage(type, value) { 
    switch (type) {
      case "ant":
        setIndexPag(current-1);
        break;

      case "next":
        setIndexPag(current+1);
        break;

      case "num":
        setIndexPag(value);
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
