import { useDroppable } from "@dnd-kit/core";

export default function Tiers() {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div>
      <div className="text-black text-2xl mx-auto w-[60%] rounded-md bg-slate-800 border-slate-800 border-2 shadow-md shadow-black h-28 mb-6" ref={setNodeRef} style={style}>
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
  );
}
