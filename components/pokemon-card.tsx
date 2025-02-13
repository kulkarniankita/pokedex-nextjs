import Image from 'next/image';

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    imageUrl: string;
  };
}

const typeColors = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="p-4">
        {/** Image */}
        <div className="relative aspect-square mb-4">
          <Image
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="w-full h-full object-contain"
            width={250}
            height={250}
          />
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-1">
            #{String(pokemon.id).padStart(3, '0')}
          </p>
          <h2 className="text-xl font-bold capitalize mb-3">{pokemon.name}</h2>
          {/** Pokemon Type */}
          <div>
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`px-3 py-1 rounded-full text-white text-sm capitalize ${
                  typeColors[type as keyof typeof typeColors]
                }`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
