import Image from "next/image";
import data from "../data/data.json";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="min-w-screen w-[60%] mx-auto bg-slate-800 rounded-md shadow-md shadow-black p-4">
      <div className="flex flex-wrap justify-evenly">
        {data.map((pokemon, id) => {
          return (
            <Link href={`/pokemon/${pokemon.name.toLowerCase()}`} pokemon={id} className="bg-slate-700 rounded-md border-slate-700 border-2 m-4 hover:border-slate-400 hover:border-2 overflow-hidden cursor-pointer relative text-slate-400 hover:text-slate-200 transition duration-500 ease-in-out shadow-sm shadow-slate-950">
              <Image
                className="hover:scale-125 object-cover overflow-hidden transition duration-300 ease-in-out"
                src={`${pokemon.image}.png`}
                width={96}
                height={96}
                key={id}
                alt=""
              />
              <div className="absolute bottom-0 w-full text-center opacity-80 bg-slate-800 hover:text-white">
                <p className="" key={id}>
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
}