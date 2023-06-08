import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="mb-10 min-w-screen bg-slate-700 h-20 flex items-center shadow-sm shadow-black">
      <div className="w-[60%] mx-auto flex justify-between items-center">
        <div>
          <img
            className="h-16 w-auto rounded-md cursor-pointer"
            src={logo}
            alt="unite logo"
          />
        </div>
        <div className="flex font-large">
          <div
            href={"/"}
            className="px-10 cursor-pointer text-slate-300 hover:text-white hover:scale-105 duration-300 ease-in-out"
          >
            Pokémon
          </div>
          <div
            href={"/tier-list"}
            className="cursor-pointer text-slate-300 hover:text-white hover:scale-105 duration-300 ease-in-out"
          >
            Create Tier List
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
