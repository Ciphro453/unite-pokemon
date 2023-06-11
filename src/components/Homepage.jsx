import { Link } from "react-router-dom";
import data from "../assets/data.json";

const Homepage = () => {
  return (
    <div className="min-w-screen">
      <div className="min-w-screen md:mx-10 lg:w-[60%] lg:mx-auto bg-slate-800 rounded-md shadow-md shadow-black p-4">
        <div className="flex flex-wrap justify-evenly">
          {data.map((pokemon, key) => {
            return (
              <Link
                to={`/pokemon/${pokemon.name.toLowerCase()}`}
                state={{id: pokemon.id}}
                id={pokemon.id}
                key={key}
                className="bg-slate-700 rounded-md border-slate-700 border-2 m-4 hover:border-slate-400 hover:border-2 overflow-hidden cursor-pointer relative text-slate-400 hover:text-slate-200 transition duration-500 ease-in-out shadow-sm shadow-slate-950"
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
