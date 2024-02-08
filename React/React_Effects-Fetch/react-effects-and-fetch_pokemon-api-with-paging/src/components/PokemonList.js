import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(page);
        const data = await response.json();
        setPokemon(data.results);
        setNextPage(data.next)
        setPrevPage(data.previous)
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [page]);

  return (
    <main>
      <button type="button" onClick={()=>{setPage(prevPage)}} disabled={!prevPage}>Previous Page</button>
      <button type="button" onClick={()=>{setPage(nextPage)}}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}