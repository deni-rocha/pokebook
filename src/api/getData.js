async function getData(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${id}`);
    const resJson = await response.json();
    const pokemonListOrigin = resJson.pokemon_entries.map(
      (obj) => obj.entry_number
    );
    pokemonListOrigin.splice(151);
    const pokemonsListPromises = pokemonListOrigin.map(async (pokeId) => {
      const responsePokeId = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`
      );
      const res = await responsePokeId.json();
      const obj = {
        id: res.id,
        name: res.name,
        order: res.order,
        species: res.species,
        sprites: res.sprites.front_default,
      };
      return obj;
    });

    return pokemonsListPromises;
  } catch (e) {
    throw new Error("algo deu ruim");
  }
}

export default getData;
