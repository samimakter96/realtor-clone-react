import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  const [pageState, setPageState] = useState('Sign in')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile')
      }
      else {
        setPageState('Sign in')
      }
    })
  }, [auth])


  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  isActive
                    ? "text-gray-800 border-b-red-500"
                    : "text-gray-400 border-b-transparent"
                } `
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/offers"
              className={({ isActive }) =>
                `cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  isActive
                    ? "text-gray-800 border-b-red-500"
                    : "text-gray-400 border-b-transparent"
                } `
              }
            >
              Offers
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  isActive
                    ? "text-gray-800 border-b-red-500"
                    : "text-gray-400 border-b-transparent"
                } `
              }
            >
              {pageState}
            </NavLink>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
