import { Link } from "react-router-dom";
import data from "../assets/data.json";
import { useState } from "react";
import { useMemo } from "react";

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemon] = useState(data);

  const filteredPokemon = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="min-w-screen min-h-screen">
      <form className="lg:w-[60%] lg:mx-auto mx-2 md:mx-10 mb-6 shadow-md shadow-black rounded-full">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-400 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-white border rounded-full bg-slate-800 border-gray-600 placeholder-gray-400"
            placeholder="Search for a Pokémon..."
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>

      <div className="min-w-screen mx-2 md:mx-10 lg:w-[60%] lg:mx-auto bg-slate-800 rounded-md shadow-md shadow-black md:pt-4 md:pb-4 py-2 px-1 md:px-2">
        <div className="flex flex-wrap justify-evenly">
          {filteredPokemon.map((pokemon, key) => {
            console.log(filteredPokemon)
            return (
              <Link
                to={`/pokemon/${pokemon.name.toLowerCase()}`}
                state={{ id: pokemon.id }}
                id={pokemon.id}
                key={key}
                className="bg-slate-700 rounded-md border-slate-700 border-2 m-2 lg:m-3 hover:border-slate-400 hover:border-2 overflow-hidden cursor-pointer relative text-slate-400 hover:text-slate-200 transition duration-500 ease-in-out shadow-sm shadow-slate-950"
              >
                <img
                  className="hover:scale-125 object-cover overflow-hidden transition duration-300 ease-in-out h-28 w-auto"
                  src={`${pokemon.image}.png`}
                  key={key}
                  alt={`${pokemon.name}`}
                />
                <div className="absolute bottom-0 w-full text-center opacity-80 bg-slate-800 hover:text-white">
                  <p className="" key={key}>
                    {pokemon.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
