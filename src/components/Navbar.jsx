import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[60px] flex items-center justify-between px-4 bg-white/30 backdrop-blur-xl relative">
      <h1 className="text-black font-bold text-2xl">MAPPP</h1>

      <p className="text-black font-semibold">{username}</p>

      <ul className="hidden md:flex gap-6 text-xl">
        <li>
          <NavLink
            to="/"
            className="!text-black hover:text-blue-600 transition duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/map"
            className="!text-black hover:text-green-600 transition duration-300"
          >
            MapPage
          </NavLink>
        </li>
      </ul>

      <button
        className="md:hidden text-black z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
      </button>

      <div
        className={`absolute top-16 right-4 w-40 bg-white/30 backdrop-blur-md text-black flex flex-col items-start pl-4 gap-2 py-4 rounded-lg shadow-lg transition-all ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <p className="text-black font-semibold">{username}</p>

        <NavLink
          to="/"
          className="!text-black font-medium"
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/map"
          className="!text-black font-medium"
          onClick={() => setIsOpen(false)}
        >
          MapPage
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;