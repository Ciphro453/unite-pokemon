const Footer = () => {
  return (
    <footer className="flex items-center px-2 md:px-10 lg:px-0 mt-10 min-w-screen w-full bg-slate-700 h-20 bottom-0 static">
      <div className="md:mx-10 lg:w-[60%] lg:mx-auto flex text-slate-300">
        <p>
          All data is gathered from{" "}
          <a
            className="text-blue-500 hover:underline hover:text-blue-400"
            href="https://uniteapi.dev/"
            target="_blank"
          >
            Unite API
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
