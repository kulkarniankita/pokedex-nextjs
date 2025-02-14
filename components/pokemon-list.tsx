import { Pokemon } from '@/utils/types';
import PokemonCard from './pokemon-card';

export function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {pokemons.map((pokemon, idx) => (
        <PokemonCard key={`${pokemon.name}-${idx}`} pokemon={pokemon} />
      ))}
    </div>
  );
}
