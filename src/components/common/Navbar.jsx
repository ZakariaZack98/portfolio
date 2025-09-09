import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-0 w-full text-white relative z-50 flex justify-start  items-center">
      <div className="mt-20 container mx-auto py-2 rounded-lg font-medium flex-col flex md:flex-row items-center justify-between">
        <h3 className="text-2xl font-bold"><span>{'</'}</span><span className="text-blue-500">Zakaria.dev</span><span>{'>'}</span></h3>
        <div className="links flex items-center gap-x-10 md:mt-0">
          <Link href={"/about"}>
            <p className="hover:opacity-50 duration-200">About</p>
          </Link>
          <Link href={"/portfolio"}>
            <p className="hover:opacity-50 duration-200">Portfolio</p>
          </Link>
          <Link href={"/contact"}>
            <p className="hover:opacity-50 duration-200">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
