import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="mb-6 min-w-screen bg-slate-700 h-20 flex items-center shadow-sm shadow-black">
      <div className="md:px-10 lg:px-0 lg:w-[60%] mx-auto flex justify-between items-center w-full">
        <Link to={"/"}>
          <img
            className="h-16 w-auto rounded-md cursor-pointer"
            src={logo}
            alt="unite logo"
          />
        </Link>
        <div className="flex font-large">
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
      </div>
    </div>
  );
};

export default Navbar;
