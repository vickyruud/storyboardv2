import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import NavMenuItem from "./NavMenuItem";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

  const [nav, setNav] = useState(false);

   const handleClick = () => setNav(!nav);

  const { loggedUser, handleLogout, setModalType, setShowModal } =
    useContext(AppContext);
  
  const handleLogoutClick = () => {
    setNav(!nav);
    handleLogout();
  }

  const showLogin = () => {
    setModalType("login");
    setShowModal(true);
  };

  const mobileLogin = () => {
    setNav(!nav);
    setModalType("login");
    setShowModal(true);

  }

  return (
    <div className="sticky top-0 z-50 w-full h-[50px] flex justify-between items-center px-4 bg-[#3c075a] text-gray-300">
      <div className="flex flex-row">

      <a href="/" className="text-xl font-bold text-gray-200">
        StoryBoard -
      </a>
      {loggedUser ? <p className="text-xl pl-2 font-semibold capitalize">Welcome {loggedUser.first_name}</p> : null}
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
      {/* Hamburger */}
      <button onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </button>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#442c55] flex flex-col justify-center items-center "
        }
      >
        {!loggedUser ? (
          <>
            <NavMenuItem handleClick={mobileLogin}  itemName="Login" />{" "}
            <NavMenuItem itemName="Register"  />
          </>
        ) : (
          <NavMenuItem handleClick={handleLogoutClick} itemName="Logout" />
        )}
      </ul>
    </div>
  );
};

export default NavBar;
