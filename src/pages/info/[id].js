import CardPokemon from "../../components/CardPokemon";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    overflowX: "hidden",
  },
}));

function Info() {
  const classes = useStyles();

  const router = useRouter();
  let id = router.query.id;
  const [url, setUrl] = useState();
  const [pokeName, setPokeName] = useState();
  const [nameAbility, setNameAbility] = useState();
  const [effect, setEffect] = useState();
  const [shortEffect, setShortEffect] = useState();

  useEffect(() => {
    const data = async () => {
      const res = await getInfo(id);
      setUrl(res.url);
      setPokeName(res.pokeName);
      setNameAbility(res.nameAbility);
      setEffect(res.effect);
      setShortEffect(res.shortEffect);
    };

    data();
  }, [id]);
    
  return (
    <div className={classes.root}>
        <CardPokemon
          imgUrl={url}
          pokeName={pokeName}
          nameAbility={nameAbility}
          effect={effect}
          shortEffect={shortEffect}
        />
    </div>
  );
}

async function getInfo(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const res = await response.json();
  const url = res.sprites.front_default;
  const pokeName = res.name;
  const abilities = await res.abilities[0].ability;
  const nameAbility = abilities.name;
  const urlAbility = abilities.url;
  const resEffect = await getAbilities(urlAbility);
  const effect = resEffect.effect;
  const shortEffect = resEffect.shortEffect;

  return {
    url,
    pokeName,
    nameAbility,
    effect,
    shortEffect,
  };
}

async function getAbilities(url) {
  const response = await fetch(url);
  const res = await response.json();
  const effect_entries = res.effect_entries[1];
  const effect = effect_entries.effect;
  const shortEffect = effect_entries.short_effect;

  return { effect, shortEffect };
}

export default Info;
