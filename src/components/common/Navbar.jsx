import _ from "@/lib/lib";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = _.navbarData;

  return (
    <div className="h-0 w-full text-white relative z-50 flex justify-start  items-center">
      <div className="mt-20 container mx-auto py-2 rounded-lg font-medium flex-col flex md:flex-row items-center justify-between">
        <Link href={'/'} className="text-2xl font-bold">
          <span>{"</"}</span>
          <span className="text-blue-500">Zakaria.dev</span>
          <span>{">"}</span>
        </Link>
        <div className="links flex items-center gap-x-10 md:mt-0 font-semibold">
          {navLinks?.map((link) => (
            <Link key={link.label} href={link.path}>
              <p className="hover:text-blue-500 duration-200">{link.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
