import Image from "next/image";
import data from "../data/data.json";
import { useDraggable } from "@dnd-kit/core";

export default function Pokemon() {
  const { attribute, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div>
      <div className="flex flex-wrap justify-evenly w-[61%] mx-auto">
        {data.map((pokemon) => {
          return (
            <div
              key={pokemon.id}
              className="bg-slate-700 rounded-md  border-2 m-2 border-slate-800 hover:border-2 overflow-hidden cursor-pointer relative text-slate-400 hover:text-slate-200 transition duration-500 ease-in-out shadow-sm shadow-slate-950"
            >
              <Image
                className=""
                src={`${pokemon.image}.png`}
                width={96}
                height={96}
                key={pokemon.id}
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
