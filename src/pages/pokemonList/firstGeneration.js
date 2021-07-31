import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Card from "../../components/Card";
import Pagination from "../../components/PaginationStatic";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import getData from "../../api/getData";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    fontSize: "16px",
  },
  btnBack: {
    alignSelf: "start",
    padding: "1rem",
  },
  boxListagem: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  ul: {
    minHeight: "100vh",
    justifyContent: "space-around",
    margin: "0 2rem",
    padding: "0",
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
  },
  li: {
    marginBottom: "1rem",
    backgroundColor: theme.palette.background.normal,
  },
  paginacao: {
    alignSelf: "center",
    width: "50vh",
  },
}));

function List(props) {
  const classes = useStyles();
  const [indexPag, setIndexPag] = useState(0);

  const pokemons = props.pokemons;
  const numberOfPages = pokemons.length;

  return (
    <div className={classes.root}>
      <div className={classes.btnBack}>
        <Button onClick={() => window.history.back()}>
          {" "}
          <ArrowBackRoundedIcon />{" "}
        </Button>
      </div>
      <section className={classes.boxListagem}>
        <ul className={classes.ul}>
          {pokemons[indexPag].map((res) => {
            return (
              <li className={classes.li} key={res.id}>
                <Card
                  imgUrl={res.sprites}
                  name={res.name}
                  id={res.id}
                />
              </li>
            );
          })}
        </ul>
        <section className={classes.paginacao}>
          <Pagination
            indexPag={indexPag}
            setIndexPag={setIndexPag}
            count={numberOfPages}
          />
        </section>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const pokemonListPromises = await getData(2);
  const resPokemon = await Promise.all(pokemonListPromises);

  const pokemons = [];
  let size = Math.ceil(resPokemon.length / 5);
  for (let i = 0; i <= resPokemon.length; i += size) {
    pokemons.push(resPokemon.slice(i, i + size));
  }

  return {
    props: {
      pokemons,
    },
  };
}

export default List;
