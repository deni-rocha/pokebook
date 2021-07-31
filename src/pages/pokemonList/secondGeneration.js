import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Pagination from "../../components/PaginationFetch";
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
  loading:{
    alignSelf: "center",
    justifySelf: "center"
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

function ListSecond() {
  const classes = useStyles();
  const [control, setControl] = useState({offset: 0, pagination: 0});

  const [pokemons, setPokemons] = useState([]);
 
  useEffect(()=>{
    const fetchData = async () =>{
      const pokemonListPromises = await getData(3,control.offset);
      const resPokemon = await Promise.all(pokemonListPromises);
  
      setPokemons(resPokemon)
    }

    fetchData()
  },[control.offset])

  if (pokemons.length == 0) return <div className={classes.root}><h4 className={classes.loading}>Carregando</h4></div>

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
          {pokemons.map((res) => {
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
            control={control}
            setControl={setControl}
          />
        </section>
      </section>
    </div>
  );
}


export default ListSecond;
