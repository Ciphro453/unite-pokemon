import { useLocation } from "react-router";
import data from "../assets/data.json";
import { useState } from "react";

const Pokemon = () => {
  const state = useLocation();
  const pokemon = data[state.state.id];
  const [build, setBuild] = useState(false);

  return (
    <div className="min-w-screen">
      <div className="flex lg:w-[60%] mx-auto">
        <div className="text-white flex md:mx-10 lg:mx-0 mb-6 bg-slate-800 rounded-md shadow-md shadow-black justify-evenly px-1 py-1 items-center">
          <h1
            onClick={() => setBuild(false)}
            style={{
              backgroundColor: build ? "rgb(30 41 59)" : "rgb(15 23 42)",
            }}
            className="rounded-md px-4 py-1 cursor-pointer"
          >
            {pokemon.name}
          </h1>
          <h1
            onClick={() => setBuild(true)}
            className="rounded-md px-4 py-1 cursor-pointer"
            style={{
              backgroundColor: build ? "rgb(15 23 42)" : "rgb(30 41 59)",
            }}
          >
            Builds
          </h1>
        </div>
      </div>
      <div className="text-white md:mx-10 lg:w-[60%] lg:mx-auto bg-slate-800 rounded-md shadow-md shadow-black flex justify-between items-start">
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
          <div className="flex ml-4">
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
          {build ? (
            <div></div>
          ) : (
            <div>
              {pokemon.skills.map((skills, key) => {
                if (skills.image === "")
                  return (
                    <div
                      className="bg-slate-700 rounded-md shadow-sm shadow-slate-950 mr-3 my-3 p-3"
                      key={key}
                    >
                      <h1 className="text-2xl">{skills.name}</h1>
                      <p className="text-slate-400 text-lg pb-2">
                        {skills.type}
                      </p>
                      <p className="">{skills.description}</p>
                    </div>
                  );

                if (skills.level === "")
                  return (
                    <div
                      className="bg-slate-700 rounded-md shadow-sm shadow-slate-950 mr-3 my-3"
                      key={key}
                    >
                      <div className="flex items-center">
                        <img
                          className="m-3 h-16 w-auto shadow-sm shadow-slate-950 rounded-full"
                          src={`${skills.image}.png`}
                        />
                        <div className="flex flex-col">
                          <h1 className="text-2xl">{skills.name}</h1>
                          <p className="text-slate-400 text-lg">
                            {skills.type}
                          </p>
                        </div>
                      </div>
                      <p className="px-3 pb-3">{skills.description}</p>
                    </div>
                  );

                return (
                  <div
                    className="bg-slate-700 rounded-md shadow-sm shadow-slate-950 mr-3 my-3"
                    key={key}
                  >
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
                          <div
                            className="bg-slate-800 rounded-md shadow-sm shadow-slate-950 m-2"
                            key={key}
                          >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
