import Image from "next/image";
import data from "../data/data.json";
import Link from "next/link";

export default function TierList() {
  return (
    <div className="min-h-screen min-w-screen">
      <div></div>

      <div className="flex flex-wrap justify-evenly w-[61%] mx-auto">
        {data.map((pokemon, id) => {
            console.log(data[pokemon.name])
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
