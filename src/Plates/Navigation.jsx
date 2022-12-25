import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="  z-10 bg-gray-200 border-t-2 border-black w-full flex font-mono text-2xl px-40 h-16 justify-around items-center">
      <NavLink
        to="/"
        className="hover:border-t-2 hover:text-red-600 duration-300 cursor-pointer hover:border-red-300"
      >
        Home
      </NavLink>
      <NavLink
        to="/Careers"
        className="hover:border-t-2 hover:text-red-600 duration-300 cursor-pointer hover:border-red-300"
      >
        Careers
      </NavLink>
      <NavLink
        to="/About"
        className="hover:border-t-2 hover:text-red-600 duration-300 cursor-pointer hover:border-red-300"
      >
        About Us
      </NavLink>
      <NavLink
        to="ContactUs"
        className=" hover:border-t-2 hover:text-red-400 duration-300 cursor-pointer hover:border-red-300"
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default Navigation;
