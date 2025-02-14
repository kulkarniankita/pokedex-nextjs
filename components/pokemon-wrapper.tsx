'use client';

import { Pokemon } from '@/utils/types';
import { useState } from 'react';
import { PokemonList } from './pokemon-list';
import SearchInput from './search-input';

interface PokemonWrapperProps {
  pokemons: Pokemon[];
}

export default function PokemonWrapper({
  pokemons: initialPokemons,
}: PokemonWrapperProps) {
  const [filteredPokemons, setFilteredPokemons] = useState(initialPokemons);

  const handleSearch = (search: string) => {
    const filtered = initialPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}
