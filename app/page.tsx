async function getPokemonData() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

export default async function Home() {
  const pokemons = await getPokemonData();

  return (
    <div className="">
      Pokédex
      <div className="grid grid-cols-3 gap-12">
        {pokemons.map((pokemon, idx) => (
          <p key={`${pokemon.name}-${idx}`}>{pokemon.name}</p>
        ))}
      </div>
    </div>
  );
}
