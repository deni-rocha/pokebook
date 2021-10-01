import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IAbout } from "../types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "inherit",
    height: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    textTransform: "none",
    paddingBottom: "1rem",
  },
  btn: {
    alignSelf: "start",
  },
  divContent: {
    padding: "2rem",
  },
  copy: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      margin: "0 4px",
    },
  },
}));
function About({ setMenuControl, content, copyright }: IAbout) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.btn}>
        <Button
          onClick={() => {
            setMenuControl({ view: 1, title: "Pokebook" });
          }}
        >
          <ArrowBackRoundedIcon />
        </Button>
      </div>
      <div className={classes.divContent}>
        <Typography component="h2"> {content} </Typography>
      </div>

      {/* div criada apenas para o alinhamento do flexbox */}
      <div>
        {copyright ? (
          <div className={classes.copy}>
            <GitHubIcon /> <h4> deni-rocha</h4>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default About;
