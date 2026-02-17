import PokemonDetails from '../../../components/PokemonDetails';

export async function generateMetadata({ params }) {
  return {
    title: params.name,
  };
}

export default async function PokemonPage({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemon = await res.json();

  return <PokemonDetails pokemon={pokemon} />;
}
