const Navbar = () => {
  return (
    <div className=" flex items-center justify-between px-12 py-3">
      <div className=" w-[273px]">
        <h1
          className="text-[3.5rem] bg-cover bg-center bg-clip-text text-transparent font-bold font-Kuolen w-full"
          style={{
            backgroundImage: "url(/assets/logobg.png)",
          }}
        >
          WILDCON
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-16 text-black-200 text-[25px] font-Lexend font-light">
          <li className=" text-[#078844] underline">Home</li>
          <li>Gallery</li>
          <li>Explore</li>
          <li>About us</li>
        </ul>
      </div>
      <div>
        <div className="bg-[#078844] border border-none rounded-2xl text-white text-xs px-4 py-2">
          Get a Quote
        </div>
      </div>
    </div>
  );
};

export default Navbar;
