'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await res.json();
      setPokemonList(data.results);
    }
    fetchData();
  }, []);

  return (
    <aside className="w-64 h-screen bg-gray-800 overflow-y-auto p-4">
      <h2 className="text-red-500 text-2xl font-bold mb-4">Pokémon List</h2>
      <ul className="space-y-2">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/pokemon/${pokemon.name}`} className="text-white hover:underline">
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
