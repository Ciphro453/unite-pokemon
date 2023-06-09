import { useLocation } from "react-router";
import data from "../assets/data.json";

const Pokemon = ({ props }) => {
  const state = useLocation();
  const pokemon = data[state.state.id];
  console.log(pokemon);
  return (
    <div className="min-h-screen min-w-screen">
      <div className="text-white w-[60%] mx-auto bg-slate-800 rounded-md shadow-md shadow-black">
        <div className="flex flex-col">
          <img
            className="mx-6 my-2 h-auto w-48 rounded-md"
            src={`${pokemon.image}.png`}
            alt={`${pokemon.name}`}
          />
          <h1 className="text-2xl">{pokemon.name}</h1>
        </div>
        <div className="flex">
          <p>{pokemon.difficulty}</p>
          <p>{pokemon.role}</p>
        </div>
        <div>
          <div>
            {pokemon.skills.map((skills, key) => {
              console.log(skills);
              if (skills.image === "")
                return (
                  <div>
                    <h1>{skills.name}</h1>
                    <p>{skills.type}</p>
                  </div>
                );

              if (skills.level === "")
                return (
                  <div>
                    <img src={`${skills.image}.png`} />
                    <h1>{skills.name}</h1>
                    <p>{skills.type}</p>
                  </div>
                );

              return (
                <div>
                  <img src={`${skills.image}.png`} />
                  <h1>{skills.name}</h1>
                  <p>{skills.type}</p>
                  <p>Unlocks at {skills.level}</p>
                  <p>{skills.description}</p>
                  <img src={`${skills.in_game_image}.png`} />
                  <div>
                    {skills.skill_upgrades.map((upgrades, key) => {
                      return (
                        <div>
                          <img src={`${upgrades.image}.png`} />
                          <h1>{upgrades.name}</h1>
                          <p>{upgrades.level}</p>
                          <p>{upgrades.description}</p>
                          <img src={`${upgrades.in_game_image}.png`} />
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
