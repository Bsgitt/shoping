/* eslint-disable jsx-a11y/aria-role */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSpeakap } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const Navbar = ({ toggle }) => {
  const { itemCount } = useContext(CartContext);

  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-red-500 text-white relative shadow-sm font-mono"
        role="navigation"
      >
        <Link to="/">
          <FaSpeakap className="text-3xl ml-1" />
          <p className="ml-1">Shoppify</p>
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link to="/cart" className="p-4">
            Cart({itemCount})
            
          </Link>
          <Link to="/store" className="p-4">
            Store
          </Link>
          <Link to="/about" className="p-4">
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
