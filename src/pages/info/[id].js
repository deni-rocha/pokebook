import CardPokemon from "../../components/CardPokemon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    overflowX: "hidden"
  },
}));

function Info({ url, pokeName, nameAbility, effect, shortEffect }) {
  const classes = useStyles();

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

export async function getServerSideProps({ params }) {
  const id = params.id;
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
    props: {
      url,
      pokeName,
      nameAbility,
      effect,
      shortEffect,
    },
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
