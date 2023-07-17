import data from "../assets/data.json";

const TierList = () => {
  return (
    <div className="min-w-screen">
      <div>
        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-4 md:mb-6 mx-2">
          <div className="bg-red-400 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">S</p>
          </div>
          <div></div>
        </div>

        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-4 md:mb-6 mx-2">
          <div className="bg-orange-300 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">A</p>
          </div>
          <div></div>
        </div>

        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-4 md:mb-6 mx-2">
          <div className="bg-amber-300 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">B</p>
          </div>
          <div></div>
        </div>

        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-4 md:mb-6 mx-2">
          <div className="bg-lime-300 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">C</p>
          </div>
          <div></div>
        </div>

        <div className="text-black text-2xl md:mx-10 lg:mx-auto lg:w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-4 md:mb-6 mx-2">
          <div className="bg-green-400 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">D</p>
          </div>
          <div></div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly lg:w-[61%] lg:mx-auto md:mx-5">
        {data.map((pokemon) => {
          return (
            <div
              key={pokemon.id}
              className="bg-slate-700 rounded-md border-2 my-1 md:m-2 border-slate-800 hover:border-2 overflow-hidden cursor-pointer relative text-slate-400 hover:text-slate-200 transition duration-500 ease-in-out shadow-sm shadow-slate-950"
            >
              <img
                className="h-24 w-auto"
                src={`${pokemon.image}.png`}
                key={pokemon.id}
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
