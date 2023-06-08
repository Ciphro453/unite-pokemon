import data from "../assets/data.json";

const Pokemon = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="text-white w-[60%] mx-auto bg-slate-800 rounded-md shadow-md shadow-black">
        <div className="flex flex-col">
          <Image
            className="pb-4"
            src={`${pokemon.image}.png`}
            alt={`${pokemon.name}`}
          />
          <h1 className="text-2xl">{pokemon.name}</h1>
        </div>
        <div className="flex">
          <p>{pokemon.difficulty}</p>
          <p>{pokemon.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
