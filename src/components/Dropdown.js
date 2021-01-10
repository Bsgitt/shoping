import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center text-white items-center bg-red-300"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/cart" className="p-4">
        Cart
      </Link>
      <Link to="/store" className="p-4">
        Store
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
    </div>
  );
};
export default Dropdown;
