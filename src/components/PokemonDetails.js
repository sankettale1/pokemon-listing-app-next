export default function PokemonDetails({ pokemon }) {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4 capitalize">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={300}
        height={300}
        className="mb-4"
      />
      <h2 className="text-xl mb-2">Abilities:</h2>
      <ul className="list-disc list-inside text-yellow-400">
        {pokemon.abilities.map((a) => (
          <li key={a.ability.name}>{a.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}
