import { useEffect } from "react";
import { useRouter } from "next/router";
import data from "../../data/data.json";
import Image from "next/image";

export default function Description() {
  const router = useRouter();
  const pokemon = data[router.query.key];

  console.log(pokemon);

  return (
    <div className="min-h-screen min-w-screen">
      <div className="text-white w-[60%] mx-auto bg-slate-800 rounded-md shadow-md shadow-black">
        <div className="flex flex-col">
          <Image
            className="pb-4"
            src={`${pokemon.image}.png`}
            width={200}
            height={200}
            quality={100}
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
}
