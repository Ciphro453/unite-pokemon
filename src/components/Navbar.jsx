import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="mb-6 min-w-screen bg-slate-700 h-20 flex items-center shadow-sm shadow-black">
      <div className="px-2 md:px-10 lg:px-0 lg:w-[60%] mx-auto flex justify-between items-center w-full">
        <Link to={"/"}>
          <img
            className="h-16 w-auto rounded-md cursor-pointer"
            src={logo}
            alt="unite logo"
          />
        </Link>
        <div className="hidden md:flex font-large">
          <Link
            to={"/"}
            className="px-10 cursor-pointer text-slate-300 hover:text-white hover:scale-105 duration-300 ease-in-out"
          >
            Pokémon
          </Link>
          <Link
            to={"/tier-list"}
            className="cursor-pointer text-slate-300 hover:text-white hover:scale-105 duration-300 ease-in-out"
          >
            Create Tier List
          </Link>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="z-20 cursor-pointer md:hidden transition-all duration-400 text-slate-300 hover:text-white"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="z-10 flex flex-col justify-center items-center absolute top-0 left-0 min-w-full h-screen text-slate-300 hover:text-white hover:scale-105 duration-300 ease-in-out bg-slate-800">
            <Link
              to={"/"}
              onClick={() => setNav(!nav)}
              smooth
              duration={500}
              className="px-4 cursor-pointer capitalize py-6 hover:scale-105 duration-200 hover:text-white"
            >
              Pokémon
            </Link>
            <Link
              to={"/tier-list"}
              onClick={() => setNav(!nav)}
              smooth
              duration={500}
              className="px-4 cursor-pointer capitalize py-6 hover:scale-105 duration-200 hover:text-white"
            >
              Create Tier List
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
