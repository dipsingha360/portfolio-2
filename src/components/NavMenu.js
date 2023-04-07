import React from "react";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <div>
      <ul className="flex justify-center items-center gap-10 py-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
}

export default NavMenu;
