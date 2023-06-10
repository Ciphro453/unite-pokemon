import { useLocation } from "react-router";
import data from "../assets/data.json";

const Pokemon = ({ props }) => {
  const state = useLocation();
  const pokemon = data[state.state.id];
  console.log(pokemon);
  return (
    <div className="min-w-screen">
      <div className="text-white w-[60%] mx-auto bg-slate-800 rounded-md shadow-md shadow-black flex justify-between items-start">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="">
            <img
              className="m-2 h-auto w-48 rounded-md"
              src={`${pokemon.image}.png`}
              alt={`${pokemon.name}`}
            />
            <h1 className="text-2xl">{pokemon.name}</h1>
            <div className="flex items-center justify-evenly mt-4 mb-2">
              <p className="">{pokemon.difficulty}</p>
              <p className="">{pokemon.role}</p>
            </div>
          </div>
          <div className="flex lg:ml-4">
            {pokemon.evolution.map((evolution, key) => {
              if (evolution.level === "")
                return (
                  <div className="flex flex-col items-center">
                    <img
                      className="bg-slate-700 rounded-full border-slate-800 border-2 shadow-sm shadow-slate-950 w-16 h-auto m-4"
                      src={`${evolution.image}.png`}
                    />
                    <p>{evolution.name}</p>
                  </div>
                );
              return (
                <div className="flex items-center">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="bg-slate-700 rounded-full border-slate-800 border-2 shadow-sm shadow-slate-950 w-16 h-auto m-2"
                      src={`${evolution.image}.png`}
                    />
                    <p>{evolution.name}</p>
                  </div>
                  <p className="text-sm">Evolves at {evolution.level}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[60%]">
          <div>
            {pokemon.skills.map((skills, key) => {
              console.log(skills);
              if (skills.image === "")
                return (
                  <div className="bg-slate-700 rounded-md shadow-sm shadow-slate-950 mr-3 my-3 p-3">
                    <h1 className="text-2xl">{skills.name}</h1>
                    <p className="text-slate-400 text-lg pb-2">{skills.type}</p>
                    <p className="">{skills.description}</p>
                  </div>
                );

              if (skills.level === "")
                return (
                  <div className="bg-slate-700 rounded-md shadow-sm shadow-slate-950 mr-3 my-3">
                    <div className="flex items-center">
                      <img
                        className="m-3 h-16 w-auto shadow-sm shadow-slate-950 rounded-full"
                        src={`${skills.image}.png`}
                      />
                      <div className="flex flex-col">
                        <h1 className="text-2xl">{skills.name}</h1>
                        <p className="text-slate-400 text-lg">{skills.type}</p>
                      </div>
                    </div>
                    <p className="px-3 pb-3">{skills.description}</p>
                  </div>
                );

              return (
                <div className="bg-slate-700 rounded-md shadow-sm shadow-slate-950 mr-3 my-3">
                  <div className="flex items-center">
                    <img
                      className="m-3 h-16 w-auto shadow-sm shadow-slate-950 rounded-full"
                      src={`${skills.image}.png`}
                    />
                    <div className="flex flex-col">
                      <h1 className="text-2xl">{skills.name}</h1>
                      <p className="text-slate-400 text-lg">{skills.type}</p>
                    </div>
                  </div>
                  <p className="px-3 pb-3">Unlocks at {skills.level}</p>
                  <p className="px-3 pb-3">{skills.description}</p>
                  <div className="flex justify-center items-center mx-3">
                    <img
                      className="rounded-md lg:w-full mb-3 shadow-sm shadow-slate-950"
                      src={`${skills.in_game_image}.png`}
                    />
                  </div>
                  <div className="px-1 flex flex-col">
                    {skills.skill_upgrades.map((upgrades, key) => {
                      return (
                        <div className="bg-slate-800 rounded-md shadow-sm shadow-slate-950 m-2">
                          <div className="flex items-center">
                            <img
                              className="m-3 h-16 w-auto shadow-sm shadow-slate-950 rounded-full"
                              src={`${upgrades.image}.png`}
                            />
                            <h1 className="text-2xl">{upgrades.name}</h1>
                          </div>
                          <p className="px-3 pb-3">
                            Unlocks at Level {upgrades.level}
                          </p>
                          <p className="px-3 pb-3">{upgrades.description}</p>
                          <div className="flex justify-center items-center mx-3">
                            <img
                              className="rounded-md lg:w-full mb-3 shadow-sm shadow-slate-950"
                              src={`${upgrades.in_game_image}.png`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
