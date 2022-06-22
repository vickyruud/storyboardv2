import React from "react";
import NavMenuItem from "./NavMenuItem";

const NavBar = () => {


  

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#3c075a] text-gray-300">
      <a href="/" className="text-xl font-bold text-gray-200">
        StoryBoard
      </a>
      {/* Menu */}
      <ul className="hidden md:flex">
        <NavMenuItem itemName="Login" />
      </ul>
    </div>
  );
};

export default NavBar;
