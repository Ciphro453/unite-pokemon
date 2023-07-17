import data from "../assets/data.json";

const TierList = () => {
  return (
    <div className="min-w-screen">
      <div>
        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black mb-4 md:mb-6 mx-2 flex">
          <div className="bg-red-400 rounded-l-md flex flex-wrap justify-center items-center text-center">
            <p className="px-6 md:px-12">S</p>
          </div>
          <div className="flex flex-wrap h-28 items-center"></div>
        </div>

        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-4 md:mb-6 mx-2 flex">
          <div className="bg-orange-300 rounded-l-md flex justify-center items-center">
            <p className="px-6 md:px-12">A</p>
          </div>
          <div className="flex flex-wrap h-28 items-center"></div>
        </div>

        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-4 md:mb-6 mx-2 flex">
          <div className="bg-amber-300 rounded-l-md flex justify-center items-center">
            <p className="px-6 md:px-12">B</p>
          </div>
          <div className="flex flex-wrap h-28 items-center"></div>
        </div>

        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-4 md:mb-6 mx-2 flex">
          <div className="bg-lime-300 rounded-l-md flex justify-center items-center">
            <p className="px-6 md:px-12">C</p>
          </div>
          <div className="flex flex-wrap h-28 items-center"></div>
        </div>

        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-4 md:mb-6 mx-2 flex">
          <div className="bg-green-400 rounded-l-md flex justify-center items-center">
            <p className="px-6 md:px-12">D</p>
          </div>
          <div className="flex flex-wrap h-28 items-center"></div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly lg:w-[60%] lg:mx-auto md:mx-5 bg-slate-800 rounded-md shadow-md shadow-black mx-2">
        {data.map((pokemon) => {
          return (
            <div className="my-1 md:m-1 cursor-pointer" key={pokemon.id}>
              <img
                className="h-24 w-auto"
                src={`${pokemon.image}.png`}
                alt={`${pokemon.name}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TierList;
