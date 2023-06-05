import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mb-10 min-w-screen bg-slate-700 h-20 flex items-center shadow-md shadow-black">
      <div className="w-[60%] mx-auto flex justify-between items-center">
        <div>
          <Image
            className="h-16 w-auto rounded-md cursor-pointer"
            src="/icon.png"
            width={100}
            height={100}
          />
        </div>
        <div className="flex font-large">
          <Link href={'/'} className="px-10 cursor-pointer text-slate-300 hover:text-white hover:scale-105 duration-300 ease-in-out">
            Pokémon
          </Link>
          <Link href={'/tier-list'} className="cursor-pointer text-slate-300 hover:text-white hover:scale-105 duration-300 ease-in-out">
            Make Your Own Tier List
          </Link>
        </div>
      </div>
    </div>
  );
}