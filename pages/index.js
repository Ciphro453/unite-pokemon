import Image from "next/image";
import data from "../data/data.json";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen min-w-screen">
      <Head>
        <title>Pokemon Unite Database</title>
      </Head>
      <div className="min-w-screen w-[60%] mx-auto bg-slate-800 rounded-md shadow-md shadow-black p-4">
        <div className="flex flex-wrap justify-evenly">
          {data.map((pokemon, key) => {
            return (
              <div
                onClick={() =>
                  router.push(
                    {
                      pathname: `pokemon/${pokemon.name.toLowerCase()}`,
                      query: { key: key },
                    },
                    `pokemon/${pokemon.name.toLowerCase()}`
                  )
                }
                key={key}
                className="bg-slate-700 rounded-md border-slate-700 border-2 m-4 hover:border-slate-400 hover:border-2 overflow-hidden cursor-pointer relative text-slate-400 hover:text-slate-200 transition duration-500 ease-in-out shadow-sm shadow-slate-950"
              >
                <Image
                  className="hover:scale-125 object-cover overflow-hidden transition duration-300 ease-in-out h-auto w-auto"
                  src={`${pokemon.image}.png`}
                  width={96}
                  height={96}
                  key={key}
                  quality={100}
                  alt={`${pokemon.name}`}
                />
                <div className="absolute bottom-0 w-full text-center opacity-80 bg-slate-800 hover:text-white">
                  <p className="" key={key}>
                    {pokemon.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
