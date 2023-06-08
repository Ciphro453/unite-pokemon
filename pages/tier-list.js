import React from "react";
import Tiers from "@/components/tiers";
import Pokemon from "@/components/pokemon";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import data from "../data/data.json";
import Image from "next/image";

export default function TierList() {
  const [isDropped, setIsDropped] = useState(false);

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} className="min-h-screen min-w-screen">
      <div>
        <div className="text-black text-2xl mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
          <div className="bg-red-400 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">S</p>
          </div>
          <div></div>
        </div>

        <div className="text-black text-2xl mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
          <div className="bg-orange-300 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">A</p>
          </div>
          <div></div>
        </div>

        <div className="text-black text-2xl mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
          <div className="bg-amber-300 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">B</p>
          </div>
          <div></div>
        </div>

        <div className="text-black text-2xl mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
          <div className="bg-lime-300 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">C</p>
          </div>
          <div></div>
        </div>

        <div className="text-black text-2xl mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6">
          <div className="bg-green-400 w-1/12 h-full rounded-l-md flex justify-center items-center">
            <p className="">D</p>
          </div>
          <div></div>
        </div>
      </div>
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
    </DndContext>
  );
}
