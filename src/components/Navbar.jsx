import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container p-4  w-full bg-green-700 ">
        <div className="navbar flex justify-between items-center text-xl">
          <div className="navbar-left font-bold">
            <div>
              <h1 className="text-2xl">Obsollete</h1>
            </div>
          </div>
          <div className="navbar-right flex flex-end">
            <ul className="nav-elem-container flex  justify-between gap-4 flex-wrap">
              <NavLink
                className="hover:bg-white text-black transition-colors p-1 rounded-md"
                to="/home"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className="hover:bg-white text-black transition-colors p-1 rounded-md"
                to="/about"
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                className="hover:bg-white text-black transition-colors p-1 rounded-md"
                to="/category"
              >
                <li>Category</li>
              </NavLink>
              <NavLink
                className="hover:bg-white text-black transition-colors p-1 mr-2 rounded-md"
                to="/random"
              >
                <li>Random-Recipe</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
