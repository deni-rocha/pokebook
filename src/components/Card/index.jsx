import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  boxCard: {
    width: "150px",
    height: "150px",
    display: "flex",
    cursor: "pointer",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem 0",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10%",
    transition: 'all 200ms',
    [theme.breakpoints.down('md')]: {
      width: "200px",
      height: "200px",
    },
    "&:hover":{
      transform: "scale(1.1)",
      boxShadow: "5px 5px 3px 4px rgb(96 19 19)"
    },
    [theme.breakpoints.up('md')]: {
      margin: "1rem .5rem"
    }
  },
  boxDiv: {
    display: "flex",
    justifyContent: "center",
  },
  title:{
    textTransform: "lowercase",
    height: "10px"
  }
}));

export default function Card({ imgUrl, name, id }) {
  const classes = useStyles();

  return (
    <Link href="/info/[id]" as={`/info/${id}`}>
    <div className={classes.boxCard}>
      <div className={classes.boxDiv}>
          <img src={imgUrl}></img>
      </div>
      <div>
          <h4 className={classes.title} >
            <a>{name}</a>
          </h4>       
      </div>
    </div>
    </Link>
  );
}
