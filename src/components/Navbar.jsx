import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = ({ userName }) => {
  console.log("Navbar received userName:", userName);

  return (
    <nav className="w-full h-[60px] flex justify-between items-center px-4 bg-white/30 backdrop-blur-xl">
      <h1 className="text-black font-bold text-4xl">MAPPP</h1>
      <p className="text-black font-semibold">{userName}</p>
      <ul className="flex gap-4 text-xl">
        <li>
          <NavLink to="/" className="!text-black">Home</NavLink>
        </li>
        <li>
          <NavLink to="/map" className="!text-black">MapPage</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;