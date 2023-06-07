import Image from "next/image";
import data from "../data/data.json";
import Link from "next/link";

export default function TierList() {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="text-white mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
        <p className="bg-red-400 w-1/12 h-full rounded-l-md">S</p>
        <div></div>
      </div>
      <div className="text-white mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
        <p className="bg-orange-300 w-1/12 h-full rounded-l-md">A</p>
        <div></div>
      </div>
      <div className="text-white mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
        <p className="bg-amber-300 w-1/12 h-full rounded-l-md">B</p>
        <div></div>
      </div>
      <div className="text-white mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
        <p className="bg-lime-300 w-1/12 h-full rounded-l-md">C</p>
        <div></div>
      </div>
      <div className="text-white mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
        <p className="bg-green-400 w-1/12 h-full rounded-l-md">D</p>
        <div></div>
      </div>

      <div className="flex flex-wrap justify-evenly w-[61%] mx-auto">
        {data.map((pokemon, id) => {
          console.log(data[pokemon.name]);
          return (
            <div
              href={`/pokemon/${pokemon.name.toLowerCase()}`}
              key={id}
              className="bg-slate-700 rounded-md border-slate-700 border-2 m-2 hover:border-slate-400 hover:border-2 overflow-hidden cursor-pointer relative text-slate-400 hover:text-slate-200 transition duration-500 ease-in-out shadow-sm shadow-slate-950"
            >
              <Image
                className=""
                src={`${pokemon.image}.png`}
                width={96}
                height={96}
                key={id}
                quality={100}
                alt={`${pokemon.name}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
