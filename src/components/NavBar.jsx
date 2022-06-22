import React, { useContext } from "react";
import { AppContext } from "../App";
import NavMenuItem from "./NavMenuItem";

const NavBar = () => {
  const { loggedUser, handleLogout, setModalType, setShowModal } =
    useContext(AppContext);

  const showLogin = () => {
    setModalType("login");
    setShowModal(true);
  };

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#3c075a] text-gray-300">
      <div className="flex flex-row">

      <a href="/" className="text-xl font-bold text-gray-200">
        StoryBoard 
      </a>
      {loggedUser ? <p className="text-xl pl-2 font-semibold capitalize">Welcome {loggedUser.username}</p> : null}
      </div>
      {/* Menu */}
      <ul className="hidden md:flex font-semibold">
        {!loggedUser ? (
          <>
            <NavMenuItem handleClick={showLogin} itemName="Login" />{" "}
            <NavMenuItem itemName="Register" />
          </>
        ) : (
          <NavMenuItem handleClick={handleLogout} itemName="Logout" />
        )}
      </ul>
    </div>
  );
};

export default NavBar;
