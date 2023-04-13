import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu, MdClose } from "react-icons/md";

function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="text-white/50 z-50  fixed  w-full bg-neutral-900">
      <div
        onClick={handleClick}
        className={
          !showNav
            ? "mobile-menu-icon absolute right-[1rem] top-[1rem] cursor-pointer outline-none w-[4rem] sm:hidden"
            : "hidden"
        }
      >
        <MdOutlineMenu />
      </div>

      <ul
        className={
          !showNav
            ? "sm:flex sm:justify-center sm:items-center sm:gap-10 sm:py-5 hidden"
            : "flex flex-col justify-center items-center gap-10 py-5"
        }
      >
        <div
          onClick={handleClick}
          className={
            showNav
              ? "close-icon absolute right-[1rem]  top-[1rem] cursor-pointer w-[4rem]  sm:{}"
              : "hidden"
          }
        >
          <MdClose />
        </div>
        <li className="">
          <NavLink to="/" className=" hover:text-white duration-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className=" hover:text-white duration-300">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className=" hover:text-white duration-300">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className=" hover:text-white duration-300">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
